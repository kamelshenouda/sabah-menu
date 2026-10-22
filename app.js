// Sabah Menu: browse the home-kitchen and Butcherista menus, build an order,
// and send it as a WhatsApp message. Menu content lives in data/menu.js.
(function () {
  "use strict";

  const MENU = window.SABAH_MENU;

  const UI = {
    ar: {
      title: "قائمة صباح",
      sub: (n) => `${n} صنف · اضغط على الصنف للطلب`,
      search: "ابحث في القائمة…",
      all: "الكل",
      myOrder: "طلبي",
      backToMenu: "القائمة",
      items: (n) => `${n} صنف`,
      noResults: "مفيش نتايج",
      emptyOrder: "الطلب فاضي",
      emptyHint: "اضغط على أي صنف في القائمة عشان تضيفه",
      viewOrder: "عرض الطلب",
      edit: "تعديل",
      remove: "حذف",
      size: "الحجم",
      quantity: "الكمية",
      unit: "الوحدة",
      notePh: "ملاحظة (اختياري) — مثال: من غير بصل، سبايسي…",
      add: "إضافة للطلب",
      update: "تحديث الطلب",
      removeFromOrder: "شيل من الطلب",
      sendWhatsApp: "إرسال على واتساب",
      copy: "نسخ الرسالة",
      copied: "تم النسخ ✓",
      copyFailed: "انسخ النص يدويًا من المعاينة",
      clear: "مسح الطلب",
      confirmClear: "متأكد إنك عايز تمسح الطلب كله؟",
      preview: "معاينة الرسالة",
      added: "اتضاف ✓",
      close: "إغلاق",
      arrow: "←",
      langBtn: "EN",
      ideas: "أفكار أكلات",
      ideaRef: "🔗 الفكرة",
      seeOriginal: "شوف الفكرة الأصلية",
      ideaBy: "الفكرة من",
    },
    en: {
      title: "Sabah Menu",
      sub: (n) => `${n} items · tap to order`,
      search: "Search the menu…",
      all: "All",
      myOrder: "My order",
      backToMenu: "Menu",
      items: (n) => `${n} item${n === 1 ? "" : "s"}`,
      noResults: "No results",
      emptyOrder: "Your order is empty",
      emptyHint: "Tap any item on the menu to add it",
      viewOrder: "View order",
      edit: "Edit",
      remove: "Remove",
      size: "Size",
      quantity: "Quantity",
      unit: "Unit",
      notePh: "Note (optional) — e.g. no onions, spicy…",
      add: "Add to order",
      update: "Update order",
      removeFromOrder: "Remove from order",
      sendWhatsApp: "Send on WhatsApp",
      copy: "Copy message",
      copied: "Copied ✓",
      copyFailed: "Copy the text from the preview",
      clear: "Clear order",
      confirmClear: "Clear the whole order?",
      preview: "Message preview (always sent in Arabic for the chef)",
      added: "Added ✓",
      close: "Close",
      arrow: "→",
      langBtn: "ع",
      ideas: "Food ideas",
      ideaRef: "🔗 Idea",
      seeOriginal: "See the original idea",
      ideaBy: "Idea from",
    },
  };

  // Units for home-kitchen dishes; Butcherista items are ordered in packs of the chosen size.
  const KITCHEN_UNITS = [
    { id: "kg", ar: "كيلو", en: "kg" },
    { id: "plate", ar: "طبق/علبة", en: "plate/box" },
    { id: "piece", ar: "حبة/كيس/قطع", en: "piece/bag" },
  ];
  const PACK_UNIT = { ar: "عبوة", en: "pack" };

  // Approved food ideas (from ideas.js and the Vercel helper) become a third menu group, filled in
  // once they load. Their item ids start with "i-".
  const IDEAS_SECTION = { id: "ideas", ar: "أفكار أكلات", en: "Food ideas", emoji: "💡", items: [] };
  const IDEAS_GROUP = { id: "ideas", ar: "أفكار", en: "Ideas", sections: [IDEAS_SECTION] };
  const GROUPS = [...MENU.groups, IDEAS_GROUP];

  // ---------- Index ----------
  const byId = new Map();
  const allSections = [];
  function buildIndex() {
    byId.clear();
    allSections.length = 0;
    GROUPS.forEach((group) => {
      group.sections.forEach((section) => {
        allSections.push({ group, section });
        section.items.forEach((item) => byId.set(item.id, { item, section, group }));
      });
    });
  }
  const isPacked = (group) => group.id === "butcherista";
  const shownItems = (section) => section.items.filter((i) => !i.removed);
  const hasPhotos = (group) => group.id !== "kitchen";
  const isIdeaId = (id) => typeof id === "string" && id.startsWith("i-");
  const safeLink = (url) => (/^https:\/\/[^\s]+$/.test(url || "") ? url : "");

  function ideaItem(idea) {
    const title = idea.title || {};
    return {
      id: "i-" + idea.id,
      ar: title.ar || title.en || "",
      en: title.en || title.ar || "",
      img: safeLink(idea.cover) || undefined,
      full: safeLink(idea.cover) || undefined,
      desc: idea.summary && (idea.summary.ar || idea.summary.en) ? idea.summary : undefined,
      ref: safeLink(idea.url),
      creator: idea.creator || "",
    };
  }

  // Fills the Ideas group from the approved list. Ideas already in the order stay in it (from the
  // copy saved with the order) even if they were since removed, so the message still has them;
  // removed ones are no longer shown on the menu.
  function setIdeas(ideas, cart) {
    const items = (ideas || []).filter((i) => i && i.id && i.title).map(ideaItem);
    const ids = new Set(items.map((i) => i.id));
    (cart || []).forEach((c) => {
      if (isIdeaId(c.id) && c.idea && !ids.has(c.id)) {
        items.push({ ...c.idea, id: c.id, removed: true });
        ids.add(c.id);
      }
    });
    IDEAS_SECTION.items = items;
    buildIndex();
  }

  // ---------- Storage (best effort) ----------
  const store = {
    get(key, fallback) {
      try {
        const v = localStorage.getItem(key);
        return v === null ? fallback : JSON.parse(v);
      } catch (e) {
        return fallback;
      }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* ignore */ }
    },
  };

  // ---------- State ----------
  // Pages with their own address: #ideas (share and browse food ideas) and #admin (approve them).
  const HASH_VIEWS = ["ideas", "admin"];
  const viewFromHash = () => {
    const v = location.hash.slice(1);
    return HASH_VIEWS.includes(v) && window.SabahIdeas ? v : "browse";
  };

  // The last approved ideas list is kept on the device so the Ideas tab shows right away.
  const savedCart = (store.get("sabah-cart", []) || []).filter(Boolean);
  setIdeas(store.get("sabah-ideas", []), savedCart);

  const state = {
    lang: store.get("sabah-lang", "ar") === "en" ? "en" : "ar",
    view: viewFromHash(),
    group: "all",
    section: null,
    search: "",
    cart: savedCart.filter((c) => byId.has(c.id)),
  };

  const ui = () => UI[state.lang];
  const tr = (obj) => (obj ? obj[state.lang] || obj.ar || "" : "");
  const saveCart = () => store.set("sabah-cart", state.cart);
  const inCart = (id) => state.cart.find((c) => c.id === id);

  // ---------- DOM helpers ----------
  function el(tag, attrs, ...children) {
    const node = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (v === undefined || v === null || v === false) continue;
        if (k === "class") node.className = v;
        else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
        else node.setAttribute(k, v === true ? "" : v);
      }
    }
    for (const child of children.flat(Infinity)) {
      if (child === undefined || child === null || child === false) continue;
      node.append(child.nodeType ? child : String(child));
    }
    return node;
  }
  const $ = (id) => document.getElementById(id);

  function norm(s) {
    return s.toLowerCase().trim().replace(/\s+/g, " ")
      .replace(/[أإآا]/g, "ا").replace(/[ةه]/g, "ه").replace(/ى/g, "ي")
      .replace(/[ً-ْ]/g, "");
  }

  let toastTimer;
  function toast(msg) {
    const t = $("toast");
    t.textContent = msg;
    t.hidden = false;
    t.style.animation = "none";
    void t.offsetWidth;
    t.style.animation = "";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.hidden = true; }, 1800);
  }

  // ---------- Order text ----------
  // `lang` defaults to the screen language; the WhatsApp message always passes "ar".
  function qtyLabel(entry, group, lang = state.lang) {
    const t = (obj) => obj[lang];
    if (isPacked(group)) {
      const packs = lang === "en" && entry.qty !== 1 ? "packs" : t(PACK_UNIT);
      return `${entry.qty} ${packs}`;
    }
    const unit = KITCHEN_UNITS.find((u) => u.id === entry.unit) || KITCHEN_UNITS[0];
    return `${entry.qty} ${t(unit)}`;
  }

  function entryDetails(entry, item, lang = state.lang) {
    const t = (obj) => obj[lang] || obj.ar;
    const parts = [];
    if (item.sizes && item.sizes[entry.size]) parts.push(t(item.sizes[entry.size]));
    (item.options || []).forEach((opt, i) => {
      const choice = opt.choices[(entry.opts || [])[i] || 0];
      if (choice) parts.push(t(choice));
    });
    return parts;
  }

  // The order goes to the chef, who reads Arabic, so the message is always in Arabic
  // whatever language the screen is showing.
  function buildMessage() {
    const u = UI.ar;
    const blocks = [];
    allSections.forEach(({ group, section }) => {
      const lines = state.cart
        .filter((c) => byId.get(c.id).section === section)
        .map((c) => {
          const { item } = byId.get(c.id);
          const details = entryDetails(c, item, "ar");
          let line = `• ${item.ar} ${u.arrow} ${qtyLabel(c, group, "ar")}`;
          if (details.length) line += ` (${details.join(" · ")})`;
          if (c.note) line += ` — ${c.note}`;
          // Ideas carry the link to the original post so the chef can see how it's made.
          // The link gets a line of its own so it reads left to right in WhatsApp.
          if (item.ref) line += `\n   ${u.ideaRef}:\n   ${item.ref}`;
          return line;
        });
      if (lines.length) blocks.push(`${section.emoji} *${section.ar}*\n${lines.join("\n")}`);
    });
    return blocks.join("\n\n");
  }

  // ---------- Header ----------
  function renderHeader() {
    const u = ui();
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";

    $("brand").replaceChildren(
      el("h1", { class: "brand-name" }, u.title),
      el("p", { class: "brand-sub" }, u.sub(allSections.reduce((n, { section }) => n + shownItems(section).length, 0)))
    );
    const ideasBtn = $("ideas-btn");
    ideasBtn.hidden = !window.SabahIdeas;
    ideasBtn.setAttribute("aria-label", u.ideas);
    ideasBtn.title = u.ideas;
    ideasBtn.classList.toggle("active", state.view === "ideas" || state.view === "admin");

    $("lang-btn").textContent = u.langBtn;
    $("lang-btn").setAttribute("aria-label", state.lang === "ar" ? "English" : "العربية");

    const cartBtn = $("cart-btn");
    if (state.view === "browse") {
      cartBtn.className = "cart-btn";
      cartBtn.replaceChildren("🛒 " + u.myOrder);
      if (state.cart.length) cartBtn.append(el("span", { class: "cart-count" }, state.cart.length));
    } else {
      cartBtn.className = "cart-btn secondary";
      cartBtn.replaceChildren((state.lang === "ar" ? "› " : "‹ ") + u.backToMenu);
    }

    $("browse-controls").hidden = state.view !== "browse";
    const search = $("search");
    search.placeholder = "🔍 " + u.search;
    if (search.value !== state.search) search.value = state.search;

    const groups = [{ id: "all", ar: UI.ar.all, en: UI.en.all }, ...GROUPS.filter((g) => g.sections.some((s) => shownItems(s).length))];
    $("groups").replaceChildren(...groups.map((g) =>
      el("button", {
        type: "button", role: "tab",
        "aria-selected": String(state.group === g.id),
        onclick: () => { state.group = g.id; state.section = null; render(); window.scrollTo({ top: 0 }); },
      }, tr(g))
    ));

    const visible = allSections.filter(({ group, section }) =>
      shownItems(section).length && (state.group === "all" || group.id === state.group));
    const total = visible.reduce((n, { section }) => n + shownItems(section).length, 0);
    $("pills").replaceChildren(
      el("button", {
        type: "button", class: "pill" + (state.section ? "" : " active"),
        onclick: () => { state.section = null; render(); },
      }, `${u.all} (${total})`),
      ...visible.map(({ section }) =>
        el("button", {
          type: "button", class: "pill" + (state.section === section.id ? " active" : ""),
          onclick: () => { state.section = state.section === section.id ? null : section.id; render(); window.scrollTo({ top: 0 }); },
        }, `${section.emoji} ${tr(section)} (${shownItems(section).length})`)
      )
    );
  }

  // ---------- Browse ----------
  function matches(item) {
    if (!state.search) return true;
    const q = norm(state.search);
    return norm(item.ar).includes(q) || norm(item.en || "").includes(q);
  }

  function kitchenRow(item, group) {
    const entry = inCart(item.id);
    return el("button", { type: "button", class: "row" + (entry ? " in-cart" : ""), onclick: () => openSheet(item.id) },
      el("span", { class: "row-name" }, tr(item)),
      entry ? el("span", { class: "row-qty" }, qtyLabel(entry, group)) : null,
      el("span", { class: "badge", "aria-hidden": "true" }, entry ? "✓" : "+")
    );
  }

  function photoCard(item) {
    const entry = inCart(item.id);
    const meta = item.sizes ? item.sizes.map(tr).join(" · ")
      : item.creator ? [`${ui().ideaBy}: `, el("bdi", null, item.creator)] : null;
    return el("button", { type: "button", class: "card" + (entry ? " in-cart" : ""), onclick: () => openSheet(item.id) },
      item.img
        ? el("img", { class: "card-img", src: item.img, alt: "", loading: "lazy", width: "300", height: "300" })
        : el("span", { class: "card-img card-img-empty", "aria-hidden": "true" }, "🍽️"),
      el("span", { class: "badge", "aria-hidden": "true" }, entry ? "✓" : "+"),
      el("div", { class: "card-body" },
        el("h3", { class: "card-name" }, tr(item)),
        meta ? el("div", { class: "card-meta" }, meta) : null
      )
    );
  }

  function renderBrowse() {
    const u = ui();
    const out = [];
    let lastGroup = null;
    allSections.forEach(({ group, section }) => {
      if (state.group !== "all" && group.id !== state.group) return;
      if (state.section && state.section !== section.id) return;
      const items = shownItems(section).filter(matches);
      if (!items.length) return;
      if (state.group === "all" && !state.section && group !== lastGroup) {
        out.push(el("h2", { class: "group-title" }, tr(group)));
        lastGroup = group;
      }
      out.push(el("section", { class: "section", id: "s-" + section.id },
        el("div", { class: "section-head" },
          el("h2", { class: "section-title" }, `${section.emoji} ${tr(section)}`),
          el("span", { class: "count" }, items.length)
        ),
        hasPhotos(group)
          ? el("div", { class: "grid" }, items.map(photoCard))
          : el("div", { class: "list" }, items.map((item) => kitchenRow(item, group)))
      ));
    });
    if (!out.length) {
      out.push(el("div", { class: "empty" }, el("div", { class: "empty-icon" }, "🔍"), el("p", null, el("strong", null, u.noResults))));
    }
    $("main").replaceChildren(...out);

    $("fab").replaceChildren(state.cart.length
      ? el("button", { type: "button", class: "fab", onclick: () => showView("cart") },
          el("span", { class: "fab-count" }, state.cart.length), u.viewOrder)
      : "");
  }

  // ---------- Cart ----------
  function renderCart() {
    const u = ui();
    $("fab").replaceChildren();
    if (!state.cart.length) {
      $("main").replaceChildren(el("div", { class: "empty" },
        el("div", { class: "empty-icon" }, "🛒"),
        el("p", null, el("strong", null, u.emptyOrder)),
        el("p", null, u.emptyHint),
        el("div", { class: "actions" }, el("button", { type: "button", class: "ghost-btn", onclick: () => showView("browse") }, u.backToMenu))
      ));
      return;
    }

    const out = [];
    allSections.forEach(({ group, section }) => {
      const entries = state.cart.filter((c) => byId.get(c.id).section === section);
      if (!entries.length) return;
      out.push(el("div", { class: "cart-section" },
        el("h2", { class: "cart-section-title" }, `${section.emoji} ${tr(section)}`),
        el("div", { class: "list" }, entries.map((c) => {
          const { item } = byId.get(c.id);
          const details = entryDetails(c, item);
          return el("div", { class: "cart-row" },
            item.img ? el("img", { class: "cart-thumb", src: item.img, alt: "" }) : null,
            el("div", { class: "cart-info" },
              el("div", { class: "cart-name" }, tr(item)),
              el("div", { class: "cart-detail" },
                el("span", { class: "qty-tag" }, qtyLabel(c, group)),
                details.length ? el("span", null, details.join(" · ")) : null,
                c.note ? el("span", null, c.note) : null
              )
            ),
            el("button", { type: "button", class: "small-btn", onclick: () => openSheet(c.id) }, u.edit),
            el("button", { type: "button", class: "small-btn danger", "aria-label": u.remove, onclick: () => removeFromCart(c.id) }, "✕")
          );
        }))
      ));
    });

    const message = buildMessage();
    out.push(
      el("div", { class: "actions" },
        el("a", {
          class: "primary-btn whatsapp", href: "https://wa.me/?text=" + encodeURIComponent(message),
          target: "_blank", rel: "noopener", style: "text-decoration:none",
        }, "💬 " + u.sendWhatsApp),
        el("button", { type: "button", class: "ghost-btn", onclick: () => copyMessage(message) }, "📋 " + u.copy)
      ),
      el("p", { class: "field-label" }, u.preview),
      el("div", { class: "preview", dir: "rtl", lang: "ar" }, message),
      el("div", { class: "actions" },
        el("button", { type: "button", class: "text-btn", onclick: clearCart }, u.clear))
    );
    $("main").replaceChildren(...out);
  }

  async function copyMessage(message) {
    try {
      await navigator.clipboard.writeText(message);
      toast(ui().copied);
    } catch (e) {
      toast(ui().copyFailed);
    }
  }

  function removeFromCart(id) {
    state.cart = state.cart.filter((c) => c.id !== id);
    saveCart();
    render();
  }

  function clearCart() {
    if (!window.confirm(ui().confirmClear)) return;
    state.cart = [];
    saveCart();
    render();
  }

  // ---------- Item sheet ----------
  function openSheet(id) {
    const { item, section, group } = byId.get(id);
    const packed = isPacked(group);
    const existing = inCart(id);
    const draft = existing
      ? { ...existing, opts: [...(existing.opts || [])] }
      : { id, qty: 1, unit: group === IDEAS_GROUP ? "plate" : "kg", size: 0, opts: (item.options || []).map(() => 0), note: "" };
    const step = packed ? 1 : 0.5;

    const backdrop = $("sheet");
    const close = () => { backdrop.hidden = true; backdrop.replaceChildren(); document.body.style.overflow = ""; };

    function chipRow(choices, selected, onPick) {
      return el("div", { class: "chips" }, choices.map((c, i) =>
        el("button", { type: "button", class: "chip", "aria-pressed": String(i === selected), onclick: () => { onPick(i); draw(); } }, tr(c))
      ));
    }

    function draw() {
      const u = ui();
      const unit = packed ? PACK_UNIT : KITCHEN_UNITS.find((x) => x.id === draft.unit);
      const sheet = el("div", { class: "sheet", role: "dialog", "aria-modal": "true", "aria-label": tr(item) },
        el("div", { class: "handle" }),
        item.full ? el("button", { type: "button", class: "sheet-img-btn", onclick: () => openLightbox(item) },
          el("img", { class: "sheet-img", src: item.full, alt: tr(item) })) : null,
        el("p", { class: "eyebrow" }, `${section.emoji} ${tr(section)}`),
        el("h2", { class: "sheet-title" }, tr(item)),
        item.desc ? el("p", { class: "sheet-desc" }, tr(item.desc)) : null,
        item.cal ? el("span", { class: "cal-tag" }, tr(item.cal)) : null,
        item.ref ? el("a", { class: "idea-link sheet-ref", href: item.ref, target: "_blank", rel: "noopener" }, u.seeOriginal + " ↗") : null,

        item.sizes && item.sizes.length ? [
          el("p", { class: "field-label" }, u.size),
          chipRow(item.sizes, draft.size, (i) => { draft.size = i; }),
        ] : null,

        (item.options || []).map((opt, oi) => [
          el("p", { class: "field-label" }, tr(opt)),
          chipRow(opt.choices, draft.opts[oi] || 0, (i) => { draft.opts[oi] = i; }),
        ]),

        packed ? null : [
          el("p", { class: "field-label" }, u.unit),
          chipRow(KITCHEN_UNITS, KITCHEN_UNITS.findIndex((x) => x.id === draft.unit), (i) => { draft.unit = KITCHEN_UNITS[i].id; }),
        ],

        el("div", { class: "stepper" },
          el("button", { type: "button", class: "step-btn", "aria-label": "−", onclick: () => { draft.qty = Math.max(step, Math.round((draft.qty - step) * 10) / 10); draw(); } }, "−"),
          el("div", { class: "step-value" }, draft.qty),
          el("button", { type: "button", class: "step-btn", "aria-label": "+", onclick: () => { draft.qty = Math.round((draft.qty + step) * 10) / 10; draw(); } }, "+")
        ),
        el("div", { class: "step-unit" }, tr(unit)),

        el("input", {
          class: "note", type: "text", value: draft.note, placeholder: u.notePh,
          oninput: (e) => { draft.note = e.target.value; },
          onkeydown: (e) => { if (e.key === "Enter") confirm(); },
        }),
        el("button", { type: "button", class: "primary-btn", onclick: confirm }, existing ? u.update + " ✓" : u.add + " +"),
        existing ? el("button", { type: "button", class: "text-btn", onclick: () => { close(); removeFromCart(id); } }, u.removeFromOrder) : null
      );
      const scroll = backdrop.firstChild ? backdrop.firstChild.scrollTop : 0;
      backdrop.replaceChildren(sheet);
      sheet.scrollTop = scroll;
    }

    function confirm() {
      const entry = { id, qty: draft.qty, note: draft.note.trim() };
      if (packed) {
        if (item.sizes && item.sizes.length) entry.size = draft.size;
        if (item.options && item.options.length) entry.opts = draft.opts;
      } else {
        entry.unit = draft.unit;
      }
      // A copy of the idea goes with the order, so it can still be sent if the idea is removed later.
      if (isIdeaId(id)) {
        const { id: _, ...copy } = item;
        entry.idea = copy;
      }
      const idx = state.cart.findIndex((c) => c.id === id);
      if (idx >= 0) state.cart[idx] = entry;
      else state.cart.push(entry);
      saveCart();
      close();
      toast(`${ui().added} ${tr(item)}`);
      render();
    }

    backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
    backdrop.hidden = false;
    document.body.style.overflow = "hidden";
    draw();
  }

  // ---------- Lightbox ----------
  function openLightbox(item) {
    const box = $("lightbox");
    const close = () => { box.hidden = true; box.replaceChildren(); };
    box.replaceChildren(
      el("button", { type: "button", class: "lightbox-close", "aria-label": ui().close, onclick: close }, "✕"),
      el("img", { src: item.full, alt: tr(item) })
    );
    box.onclick = (e) => { if (e.target === box) close(); };
    box.hidden = false;
  }

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (!$("lightbox").hidden) { $("lightbox").hidden = true; return; }
    if (!$("sheet").hidden) { $("sheet").hidden = true; $("sheet").replaceChildren(); document.body.style.overflow = ""; }
  });

  // ---------- Wiring ----------
  function showView(view) {
    state.view = view;
    const hash = HASH_VIEWS.includes(view) ? "#" + view : "";
    if (location.hash !== hash) history.replaceState(null, "", hash || location.pathname + location.search);
    render();
    window.scrollTo({ top: 0 });
  }

  // Helpers handed to ideas.js so its pages look and behave like the rest of the app.
  const ideasCtx = {
    el, store,
    lang: () => state.lang,
    rerender: () => render(),
    // Called with the approved ideas whenever ideas.js loads them; they fill the Ideas tab.
    onIdeas(ideas) {
      store.set("sabah-ideas", ideas);
      setIdeas(ideas, state.cart);
    },
    // The "Order it" button on an idea card opens it like any other dish.
    orderIdea(ideaId) {
      if (!byId.has("i-" + ideaId)) return;
      showView("browse");
      openSheet("i-" + ideaId);
    },
  };

  function render() {
    renderHeader();
    if (state.view === "cart") renderCart();
    else if (HASH_VIEWS.includes(state.view)) {
      $("fab").replaceChildren();
      const page = state.view === "admin" ? window.SabahIdeas.renderAdmin(ideasCtx) : window.SabahIdeas.render(ideasCtx);
      $("main").replaceChildren(...page.flat().filter(Boolean));
    } else renderBrowse();
  }

  $("lang-btn").addEventListener("click", () => {
    state.lang = state.lang === "ar" ? "en" : "ar";
    store.set("sabah-lang", state.lang);
    render();
  });
  $("cart-btn").addEventListener("click", () => showView(state.view === "browse" ? "cart" : "browse"));
  $("ideas-btn").addEventListener("click", () => showView(state.view === "ideas" ? "browse" : "ideas"));
  window.addEventListener("hashchange", () => {
    const v = viewFromHash();
    if (v !== state.view && (v !== "browse" || HASH_VIEWS.includes(state.view))) showView(v);
  });
  $("search").addEventListener("input", (e) => {
    state.search = e.target.value;
    renderBrowse();
  });

  render();
  if (window.SabahIdeas) window.SabahIdeas.load(ideasCtx);
})();
