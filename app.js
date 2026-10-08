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
    },
  };

  // Units for home-kitchen dishes; Butcherista items are ordered in packs of the chosen size.
  const KITCHEN_UNITS = [
    { id: "kg", ar: "كيلو", en: "kg" },
    { id: "plate", ar: "طبق/علبة", en: "plate/box" },
    { id: "piece", ar: "حبة/كيس/قطع", en: "piece/bag" },
  ];
  const PACK_UNIT = { ar: "عبوة", en: "pack" };

  // ---------- Index ----------
  const byId = new Map();
  const allSections = [];
  MENU.groups.forEach((group) => {
    group.sections.forEach((section) => {
      allSections.push({ group, section });
      section.items.forEach((item) => byId.set(item.id, { item, section, group }));
    });
  });
  const isPacked = (group) => group.id === "butcherista";

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
  const state = {
    lang: store.get("sabah-lang", "ar") === "en" ? "en" : "ar",
    view: "browse",
    group: "all",
    section: null,
    search: "",
    cart: (store.get("sabah-cart", []) || []).filter((c) => c && byId.has(c.id)),
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
      el("p", { class: "brand-sub" }, u.sub(byId.size))
    );
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

    const groups = [{ id: "all", ar: UI.ar.all, en: UI.en.all }, ...MENU.groups];
    $("groups").replaceChildren(...groups.map((g) =>
      el("button", {
        type: "button", role: "tab",
        "aria-selected": String(state.group === g.id),
        onclick: () => { state.group = g.id; state.section = null; render(); window.scrollTo({ top: 0 }); },
      }, tr(g))
    ));

    const visible = allSections.filter(({ group }) => state.group === "all" || group.id === state.group);
    const total = visible.reduce((n, { section }) => n + section.items.length, 0);
    $("pills").replaceChildren(
      el("button", {
        type: "button", class: "pill" + (state.section ? "" : " active"),
        onclick: () => { state.section = null; render(); },
      }, `${u.all} (${total})`),
      ...visible.map(({ section }) =>
        el("button", {
          type: "button", class: "pill" + (state.section === section.id ? " active" : ""),
          onclick: () => { state.section = state.section === section.id ? null : section.id; render(); window.scrollTo({ top: 0 }); },
        }, `${section.emoji} ${tr(section)} (${section.items.length})`)
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
    const sizes = (item.sizes || []).map(tr).join(" · ");
    return el("button", { type: "button", class: "card" + (entry ? " in-cart" : ""), onclick: () => openSheet(item.id) },
      el("img", { class: "card-img", src: item.img, alt: "", loading: "lazy", width: "300", height: "300" }),
      el("span", { class: "badge", "aria-hidden": "true" }, entry ? "✓" : "+"),
      el("div", { class: "card-body" },
        el("h3", { class: "card-name" }, tr(item)),
        sizes ? el("div", { class: "card-meta" }, sizes) : null
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
      const items = section.items.filter(matches);
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
        isPacked(group)
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
      : { id, qty: 1, unit: "kg", size: 0, opts: (item.options || []).map(() => 0), note: "" };
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
    render();
    window.scrollTo({ top: 0 });
  }

  function render() {
    renderHeader();
    if (state.view === "cart") renderCart();
    else renderBrowse();
  }

  $("lang-btn").addEventListener("click", () => {
    state.lang = state.lang === "ar" ? "en" : "ar";
    store.set("sabah-lang", state.lang);
    render();
  });
  $("cart-btn").addEventListener("click", () => showView(state.view === "browse" ? "cart" : "browse"));
  $("search").addEventListener("input", (e) => {
    state.search = e.target.value;
    renderBrowse();
  });

  render();
})();
