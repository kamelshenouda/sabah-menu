// Sabah Menu: a landing page, the home-kitchen and Butcherista menus, ready-made bundles, and an
// order that is sent as a WhatsApp message. Menu content lives in data/menu.js.
(function () {
  "use strict";

  const MENU = window.SABAH_MENU;

  const UI = {
    ar: {
      title: "صباح",
      tagline: "أكل بيتي جاهز",
      search: "ابحث عن أكلة… فراخ، محشي، كنافة",
      clearSearch: "مسح البحث",
      results: (n) => `${n} نتيجة`,
      noResults: "مفيش أكلة بالاسم ده",
      noResultsHint: "جرّب كلمة تانية أو شيل الفلتر",
      all: "الكل",
      myOrder: "طلبي",
      menu: "القائمة",
      home: "الرئيسية",
      itemsN: (n) => (n === 1 ? "صنف واحد" : n === 2 ? "صنفين" : `${n} أصناف`),
      emptyOrder: "طلبك لسه فاضي",
      emptyHint: "اضغط + على أي أكلة عشان تضيفها، أو ابدأ بباقة جاهزة.",
      viewOrder: "عرض الطلب",
      inOrder: (n) => `${n === 1 ? "صنف" : n === 2 ? "صنفين" : n + " أصناف"} في طلبك`,
      edit: "تعديل",
      remove: "حذف",
      size: "الحجم",
      unit: "الوحدة",
      quantity: "الكمية",
      notePh: "ملاحظة للشيف (اختياري) — مثال: من غير بصل، سبايسي…",
      add: "أضف",
      addToOrder: "أضف للطلب",
      update: "تحديث الطلب",
      removeFromOrder: "شيل من الطلب",
      sendWhatsApp: "ابعت الطلب على واتساب",
      copy: "نسخ الرسالة",
      copied: "اتنسخت ✓",
      copyFailed: "انسخ النص يدويًا من المعاينة",
      clear: "مسح الطلب كله",
      confirmClear: "متأكد إنك عايز تمسح الطلب كله؟",
      preview: "شكل الرسالة اللي هتوصل للشيف",
      added: (name) => `اتضاف: ${name}`,
      addedN: (n) => `اتضاف ${n === 1 ? "صنف" : n === 2 ? "صنفين" : n + " أصناف"} للطلب`,
      removed: (name) => `اتشال: ${name}`,
      undo: "تراجع",
      close: "إغلاق",
      arrow: "←",
      langBtn: "EN",
      langName: "English",
      ideas: "أفكار أكلات",
      ideaRef: "🔗 الفكرة",
      seeOriginal: "شوف الفكرة الأصلية",
      ideaBy: "الفكرة من",
      ready: { cook: "جاهز للطبخ", eat: "جاهز للأكل" },
      filters: { all: "كل الأصناف", cook: "جاهز للطبخ", eat: "جاهز للأكل", healthy: "صحي", fav: "المفضلة" },
      favOn: "اتضافت للمفضلة",
      favOff: "اتشالت من المفضلة",
      favAdd: "أضف للمفضلة",
      favEmpty: "لسه مفيش مفضلة. اضغط القلب على أي أكلة بتحبها.",
      bundles: "باقات جاهزة",
      bundlesSub: "اختار باقة وضيفها كلها بضغطة، وعدّل الكميات بعدين.",
      kinds: { week: "أكل الأسبوع", feast: "عزومات" },
      addAll: (n) => `ضيف ${n === 1 ? "الصنف" : n === 2 ? "الصنفين" : "الـ" + n + " أصناف"} للطلب`,
      bundleHint: "شيل علامة الصح من أي صنف مش عايزه. الكميات تقدر تعدّلها في الطلب.",
      alreadyIn: "في طلبك",
      orderAgain: "اطلب تاني",
      lastOrder: (n, d) => `طلبك اللي فات (${n === 1 ? "صنف" : n === 2 ? "صنفين" : n + " أصناف"}) · ${d}`,
      addLast: "ضيفه للطلب",
      addMore: "ضيف أصناف تانية",
      orderTitle: "طلبك",
      sendNote: "الرسالة بتتبعت بالعربي للشيف، مهما كانت لغة الشاشة.",
      details: "التفاصيل",
      backTop: "لفوق",
    },
    en: {
      title: "Sabah",
      tagline: "Home kitchen",
      search: "Search a dish… chicken, mahshi, kunafa",
      clearSearch: "Clear search",
      results: (n) => `${n} result${n === 1 ? "" : "s"}`,
      noResults: "No dish matches that",
      noResultsHint: "Try another word or clear the filter",
      all: "All",
      myOrder: "Order",
      menu: "Menu",
      home: "Home",
      itemsN: (n) => `${n} item${n === 1 ? "" : "s"}`,
      emptyOrder: "Your order is empty",
      emptyHint: "Tap + on any dish to add it, or start with a ready-made bundle.",
      viewOrder: "View order",
      inOrder: (n) => `${n} item${n === 1 ? "" : "s"} in your order`,
      edit: "Edit",
      remove: "Remove",
      size: "Size",
      unit: "Unit",
      quantity: "Quantity",
      notePh: "Note for the chef (optional) — e.g. no onions, spicy…",
      add: "Add",
      addToOrder: "Add to order",
      update: "Update order",
      removeFromOrder: "Remove from order",
      sendWhatsApp: "Send order on WhatsApp",
      copy: "Copy message",
      copied: "Copied ✓",
      copyFailed: "Copy the text from the preview",
      clear: "Clear the whole order",
      confirmClear: "Clear the whole order?",
      preview: "The message the chef will get",
      added: (name) => `Added: ${name}`,
      addedN: (n) => `Added ${n} item${n === 1 ? "" : "s"} to your order`,
      removed: (name) => `Removed: ${name}`,
      undo: "Undo",
      close: "Close",
      arrow: "→",
      langBtn: "ع",
      langName: "العربية",
      ideas: "Food ideas",
      ideaRef: "🔗 Idea",
      seeOriginal: "See the original idea",
      ideaBy: "Idea from",
      ready: { cook: "Ready to cook", eat: "Ready to eat" },
      filters: { all: "Everything", cook: "Ready to cook", eat: "Ready to eat", healthy: "Healthy", fav: "Favourites" },
      favOn: "Added to favourites",
      favOff: "Removed from favourites",
      favAdd: "Add to favourites",
      favEmpty: "No favourites yet. Tap the heart on any dish you love.",
      bundles: "Ready-made bundles",
      bundlesSub: "Pick a bundle, add it all in one tap, and adjust amounts later.",
      kinds: { week: "Meals of the week", feast: "Feasts" },
      addAll: (n) => `Add ${n} item${n === 1 ? "" : "s"} to order`,
      bundleHint: "Untick anything you don't want. You can change amounts in your order.",
      alreadyIn: "In your order",
      orderAgain: "Order again",
      lastOrder: (n, d) => `Your last order (${n} item${n === 1 ? "" : "s"}) · ${d}`,
      addLast: "Add it to order",
      addMore: "Add more dishes",
      orderTitle: "Your order",
      sendNote: "The message is sent in Arabic for the chef, whatever language the screen shows.",
      details: "Details",
      backTop: "Top",
    },
  };

  // Landing page copy. The landing page is one dark scene that stays pinned while the scroll moves
  // it through five stops: the hero, cook or eat, meals of the week, feasts, and healthy.
  const HOME = {
    ar: {
      eyebrow: "مطبخ صباح البيتي",
      h1: "أكل البيت… من غير تعب البيت",
      lead: "متبّل تسوّيه في دقايق، أو مطبوخ تسخّنه وتاكل. للأسبوع كله أو لعزومتك الجاية، وطلبك يوصل للشيف على واتساب في دقيقة.",
      start: "ابدأ طلبك",
      rail: { cookeat: "جاهز للطبخ أو للأكل", week: "أكل الأسبوع", feast: "عزومات", healthy: "صحي" },
      raw: "جاهز للطبخ", cooked: "جاهز للأكل",
      cookeatTitle: "نفس الأكلة. اختار تطلبها إزاي.",
      cookeatText: "متبّلة ومتجهّزة تسوّيها انت في دقايق وتطلع طازة، أو مطبوخة في البيت وجاهزة تسخّنها وتاكل.",
      seeCook: (n) => `الجاهز للطبخ (${n})`, seeEat: (n) => `الجاهز للأكل (${n})`,
      weekTitle: "أسبوعك كله في طلب واحد",
      weekText: "غدا لكل يوم، متنوّع ومتوازن. ضيفه كله بضغطة، وشيل أو بدّل اللي مش عايزه.",
      weekBtn: "ضيف أسبوع العيلة", weekMore: "باقات أسبوع تانية",
      days: ["السبت", "الأحد", "الاتنين", "التلات", "الأربع", "الخميس", "الجمعة"],
      feastTitle: "عزومة تشرّف… من غير وقفة مطبخ",
      feastText: "الأصناف بتنزل على السفرة واحدة ورا التانية. اطلب العزومة كلها، أو اختار منها اللي يناسب ضيوفك.",
      feastBtn: "اطلب العزومة الكبيرة", feastMore: "عزومات تانية",
      onTable: (n, all) => `${n}/${all} على السفرة`,
      healthyTitle: "صحي… وبيشبع",
      healthyText: "بروتين خفيف، خضار، حبوب كاملة، وحلويات من غير سكر أبيض.",
      healthyBtn: (n) => `شوف الأكل الصحي (${n})`,
      closeTitle: "جعان؟ القائمة مستنياك.",
      closeSteps: ["اختار أكلك", "حدّد الكمية", "ابعت على واتساب"],
      closeText: "الطلب بيتكتب لوحده بالعربي للشيف، وانت بس تضغط إرسال.",
      footer: "الصور توضيحية لشكل الأكلة، مش لنفس الطبق اللي هيوصلك.",
    },
    en: {
      eyebrow: "SABAH HOME KITCHEN",
      h1: "Home food, without the home chores",
      lead: "Marinated to cook in minutes, or cooked to heat and eat. For the whole week or your next feast, and your order reaches the chef on WhatsApp in a minute.",
      start: "Start your order",
      rail: { cookeat: "Cook or eat", week: "Meals of the week", feast: "Feasts", healthy: "Healthy" },
      raw: "Ready to cook", cooked: "Ready to eat",
      cookeatTitle: "Same dish. Your choice how.",
      cookeatText: "Marinated and prepped for you to cook fresh in minutes, or cooked at home and ready to heat and eat.",
      seeCook: (n) => `Ready to cook (${n})`, seeEat: (n) => `Ready to eat (${n})`,
      weekTitle: "Your whole week in one order",
      weekText: "A lunch for every day, varied and balanced. Add it all in one tap, then drop or swap what you don't want.",
      weekBtn: "Add the family week", weekMore: "Other week bundles",
      days: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      feastTitle: "A feast to impress, without the kitchen",
      feastText: "Dishes land on the table one after another. Order the whole feast, or pick what suits your guests.",
      feastBtn: "Order the big feast", feastMore: "Other feasts",
      onTable: (n, all) => `${n}/${all} on the table`,
      healthyTitle: "Healthy, and filling",
      healthyText: "Lean protein, vegetables, whole grains, and sweets without white sugar.",
      healthyBtn: (n) => `See healthy food (${n})`,
      closeTitle: "Hungry? The menu is waiting.",
      closeSteps: ["Pick your food", "Choose amounts", "Send on WhatsApp"],
      closeText: "The order writes itself in Arabic for the chef; you just tap send.",
      footer: "Photos show what each dish looks like in general, not the exact plate you'll receive.",
    },
  };
  const HOME_WEEK = "week-family";
  const HOME_FEAST = "feast-classic";
  const HOME_HEALTHY = ["k46", "k20", "k71"];

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
  const COLLECTIONS = MENU.collections || [];

  // ---------- Icons (thin outline, 24px grid) ----------
  const ICONS = {
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
    bag: '<path d="M5 8h14l-1.2 11.2a1 1 0 0 1-1 .8H7.2a1 1 0 0 1-1-.8z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    heart: '<path d="M12 19.5s-7-4.3-7-9.7A3.9 3.9 0 0 1 12 7.4a3.9 3.9 0 0 1 7 2.4c0 5.4-7 9.7-7 9.7z"/>',
    bulb: '<path d="M9.5 18h5M10.5 21h3"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.2 1.1 2V16h5v-.2c0-.8.4-1.5 1.1-2A6 6 0 0 0 12 3z"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7"/>',
    repeat: '<path d="M17 3l3 3-3 3"/><path d="M4 12v-2a4 4 0 0 1 4-4h12"/><path d="M7 21l-3-3 3-3"/><path d="M20 12v2a4 4 0 0 1-4 4H4"/>',
    chat: '<path d="M4.5 19.5l1.2-3.6A7.8 7.8 0 1 1 8.4 18.6z"/><path d="M9 11h.01M12 11h.01M15 11h.01"/>',
    copy: '<rect x="8.5" y="8.5" width="11" height="11" rx="2"/><path d="M15.5 8.5V6.5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2"/>',
    chevron: '<path d="M9 6l6 6-6 6"/>',
    edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
    trash: '<path d="M5 7h14M10 7V5h4v2M7 7l1 13h8l1-13"/>',
    flame: '<path d="M12 21a6 6 0 0 0 6-6c0-3.6-2.6-5.6-3.8-9.5C12.3 7.4 11.4 9.4 11.4 11 10.3 10 9.6 8.9 9.4 7.6 7.4 9.6 6 12 6 15a6 6 0 0 0 6 6z"/>',
    plate: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/>',
    calendar: '<rect x="4" y="5.5" width="16" height="14.5" rx="2"/><path d="M4 10h16M9 3.5v4M15 3.5v4"/>',
    table: '<path d="M3 10h18M5 10l-1 9M19 10l1 9M8 10V7.5a4 4 0 0 1 8 0V10"/><path d="M12 3.5v0"/>',
    leaf: '<path d="M5 19c0-8.3 6-14 15-14 0 9-6 15-14.5 15"/><path d="M5 19l7-7"/>',
    home: '<path d="M4 11l8-7 8 7"/><path d="M6 9.5V20h12V9.5"/>',
    up: '<path d="M12 19V5M6 11l6-6 6 6"/>',
    grid: '<rect x="4" y="4" width="6.5" height="6.5" rx="1"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1"/>',
  };

  function icon(name, cls) {
    const span = document.createElement("span");
    span.className = "ico" + (cls ? " " + cls : "");
    span.setAttribute("aria-hidden", "true");
    // Static strings from ICONS above only.
    span.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;
    return span;
  }

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
  const isIdeaId = (id) => typeof id === "string" && id.startsWith("i-");
  const safeLink = (url) => (/^https:\/\/[^\s]+$/.test(url || "") ? url : "");
  const readiness = (item, section) => item.ready || section.ready || null;
  const isHealthy = (item, section) => !!(item.healthy || section.healthy);

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
  // Pages with their own address. "" opens the landing page on a first visit (when nothing is in
  // the order yet) and the menu after that.
  const HASH_VIEWS = { welcome: "welcome", menu: "browse", order: "cart", ideas: "ideas", admin: "admin" };
  const VIEW_HASH = { welcome: "#welcome", browse: "#menu", cart: "#order", ideas: "#ideas", admin: "#admin" };
  function viewFromHash() {
    const v = HASH_VIEWS[location.hash.slice(1)];
    if ((v === "ideas" || v === "admin") && !window.SabahIdeas) return "browse";
    if (v) return v;
    return !store.get("sabah-welcomed", false) && !state.cart.length ? "welcome" : "browse";
  }

  // The last approved ideas list is kept on the device so the Ideas tab shows right away.
  const savedCart = (store.get("sabah-cart", []) || []).filter(Boolean);
  setIdeas(store.get("sabah-ideas", []), savedCart);

  const state = {
    lang: store.get("sabah-lang", "ar") === "en" ? "en" : "ar",
    view: "browse",
    group: "all",
    filter: "all",
    bundleKind: "week",
    search: "",
    cart: savedCart.filter((c) => byId.has(c.id)),
    favs: new Set((store.get("sabah-favs", []) || []).filter((id) => typeof id === "string")),
  };
  state.view = viewFromHash();

  const ui = () => UI[state.lang];
  const tr = (obj) => (obj ? obj[state.lang] || obj.ar || "" : "");
  const saveCart = () => store.set("sabah-cart", state.cart);
  const saveFavs = () => store.set("sabah-favs", [...state.favs]);
  const inCart = (id) => state.cart.find((c) => c.id === id);
  const reduceMotion = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
    return String(s || "").toLowerCase().trim().replace(/\s+/g, " ")
      .replace(/[أإآا]/g, "ا").replace(/[ةه]/g, "ه").replace(/ى/g, "ي")
      .replace(/[ً-ْ]/g, "");
  }
  const fmtQty = (n) => String(Math.round(n * 100) / 100);
  const buzz = () => { try { if (navigator.vibrate) navigator.vibrate(8); } catch (e) { /* ignore */ } };

  let toastTimer;
  function toast(msg, action) {
    const t = $("toast");
    t.replaceChildren(...[el("span", { class: "toast-text" }, msg),
      action ? el("button", { type: "button", class: "toast-action", onclick: () => { t.hidden = true; action.run(); } }, action.label) : null].filter(Boolean));
    t.hidden = false;
    t.style.animation = "none";
    void t.offsetWidth;
    t.style.animation = "";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.hidden = true; }, action ? 4000 : 2000);
  }

  // ---------- Order entries ----------
  function defaultUnit(item, section, group) {
    if (group === IDEAS_GROUP) return "plate";
    return item.unit || section.unit || "kg";
  }
  const stepFor = (entry, group) => (isPacked(group) || entry.unit !== "kg" ? 1 : 0.5);

  function makeEntry(id) {
    const { item, section, group } = byId.get(id);
    const entry = { id, qty: 1, note: "" };
    if (isPacked(group)) {
      if (item.sizes && item.sizes.length) entry.size = 0;
      if (item.options && item.options.length) entry.opts = item.options.map(() => 0);
    } else {
      entry.unit = defaultUnit(item, section, group);
    }
    // A copy of the idea goes with the order, so it can still be sent if the idea is removed later.
    if (isIdeaId(id)) {
      const { id: _, ...copy } = item;
      entry.idea = copy;
    }
    return entry;
  }

  function addItem(id, silent) {
    const existing = inCart(id);
    if (existing) {
      const { group } = byId.get(id);
      existing.qty = Math.round((existing.qty + stepFor(existing, group)) * 10) / 10;
    } else {
      state.cart.push(makeEntry(id));
    }
    saveCart();
    buzz();
    if (!silent) {
      const name = tr(byId.get(id).item);
      const before = existing ? null : id;
      toast(ui().added(name), before ? { label: ui().undo, run: () => removeItem(before, true) } : null);
    }
    refreshItem(id);
  }

  function changeQty(id, dir) {
    const entry = inCart(id);
    if (!entry) return;
    const { item, group } = byId.get(id);
    const step = stepFor(entry, group);
    const next = Math.round((entry.qty + dir * step) * 10) / 10;
    if (next < step) {
      const snapshot = { ...entry };
      const idx = state.cart.indexOf(entry);
      state.cart.splice(idx, 1);
      saveCart();
      toast(ui().removed(tr(item)), {
        label: ui().undo,
        run: () => { state.cart.splice(Math.min(idx, state.cart.length), 0, snapshot); saveCart(); refreshItem(id); },
      });
    } else {
      entry.qty = next;
      saveCart();
    }
    buzz();
    refreshItem(id);
  }

  function removeItem(id, silent) {
    const idx = state.cart.findIndex((c) => c.id === id);
    if (idx < 0) return;
    const snapshot = state.cart[idx];
    state.cart.splice(idx, 1);
    saveCart();
    if (!silent) {
      toast(ui().removed(tr(byId.get(id).item)), {
        label: ui().undo,
        run: () => { state.cart.splice(Math.min(idx, state.cart.length), 0, snapshot); saveCart(); refreshItem(id); },
      });
    }
    refreshItem(id);
  }

  function toggleFav(id) {
    if (state.favs.has(id)) state.favs.delete(id);
    else state.favs.add(id);
    saveFavs();
    buzz();
    toast(state.favs.has(id) ? ui().favOn : ui().favOff);
    document.querySelectorAll(".fav-btn[data-id]").forEach((b) => {
      if (b.dataset.id === id) b.setAttribute("aria-pressed", String(state.favs.has(id)));
    });
    if (state.filter === "fav" && state.view === "browse") renderBrowse();
  }

  // After the order changes, update what is on screen without rebuilding the whole menu.
  function refreshItem(id) {
    renderHeader();
    if (state.view === "cart") { renderCart(); return; }
    document.querySelectorAll(".card[data-id]").forEach((card) => {
      if (card.dataset.id !== id) return;
      const entry = inCart(id);
      card.classList.toggle("in-cart", !!entry);
      const slot = card.querySelector(".card-action");
      if (slot) slot.replaceWith(cardAction(id));
    });
    renderFab(true);
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

  // The order is remembered when it is sent or copied, so it can be ordered again in one tap.
  function rememberOrder() {
    store.set("sabah-last-order", { at: Date.now(), cart: state.cart.map((c) => ({ ...c })) });
  }
  function lastOrder() {
    const last = store.get("sabah-last-order", null);
    if (!last || !Array.isArray(last.cart)) return null;
    const cart = last.cart.filter((c) => c && byId.has(c.id) && !byId.get(c.id).item.removed);
    return cart.length ? { at: last.at, cart } : null;
  }
  function addLastOrder() {
    const last = lastOrder();
    if (!last) return;
    let n = 0;
    last.cart.forEach((c) => { if (!inCart(c.id)) { state.cart.push({ ...c }); n++; } });
    saveCart();
    buzz();
    toast(ui().addedN(n));
    render();
  }
  function fmtDate(ts) {
    try {
      return new Date(ts).toLocaleDateString(state.lang === "ar" ? "ar-EG-u-nu-latn" : "en-GB", { day: "numeric", month: "long" });
    } catch (e) {
      return "";
    }
  }

  // ---------- Header ----------
  function renderHeader() {
    const u = ui();
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
    document.body.dataset.view = state.view;

    $("brand").replaceChildren(
      el("span", { class: "brand-mark", "aria-hidden": "true" }, "ص"),
      el("span", { class: "brand-text" },
        el("span", { class: "brand-name" }, u.title),
        el("span", { class: "brand-sub" }, u.tagline))
    );
    $("brand").setAttribute("aria-label", u.home);

    const ideasBtn = $("ideas-btn");
    ideasBtn.hidden = !window.SabahIdeas;
    ideasBtn.replaceChildren(icon("bulb"));
    ideasBtn.setAttribute("aria-label", u.ideas);
    ideasBtn.title = u.ideas;
    ideasBtn.classList.toggle("active", state.view === "ideas" || state.view === "admin");

    $("lang-btn").textContent = u.langBtn;
    $("lang-btn").setAttribute("aria-label", u.langName);

    const cartBtn = $("cart-btn");
    const onOrder = state.view === "cart";
    cartBtn.className = "cart-btn" + (onOrder ? " secondary" : "");
    cartBtn.replaceChildren(onOrder ? icon("grid") : icon("bag"), onOrder ? u.menu : u.myOrder);
    if (!onOrder && state.cart.length) cartBtn.append(el("span", { class: "cart-count" }, state.cart.length));

    $("browse-controls").hidden = state.view !== "browse";
    const search = $("search");
    search.placeholder = u.search;
    search.setAttribute("aria-label", u.search);
    if (search.value !== state.search) search.value = state.search;
    $("search-ico").replaceChildren(icon("search"));
    const clear = $("search-clear");
    clear.hidden = !state.search;
    clear.replaceChildren(icon("close"));
    clear.setAttribute("aria-label", u.clearSearch);
  }

  // ---------- Browse ----------
  function matches(item, section) {
    if (state.search) {
      const q = norm(state.search);
      const hay = [item.ar, item.en, section.ar, section.en].map(norm).join(" | ");
      if (!q.split(" ").every((w) => hay.includes(w))) return false;
    }
    const f = state.filter;
    if (f === "cook" || f === "eat") return readiness(item, section) === f;
    if (f === "healthy") return isHealthy(item, section);
    if (f === "fav") return state.favs.has(item.id);
    return true;
  }

  function visibleSections() {
    return allSections
      .filter(({ group }) => state.group === "all" || group.id === state.group)
      .map(({ group, section }) => ({ group, section, items: shownItems(section).filter((i) => matches(i, section)) }))
      .filter((s) => s.items.length);
  }

  function readyTag(item, section, extra) {
    const r = readiness(item, section);
    const label = r && ui().ready[r];
    return label ? el("span", { class: "ready-tag ready-" + r + (extra ? " " + extra : "") }, label) : null;
  }

  function stepper(id, compact) {
    const entry = inCart(id);
    const { group } = byId.get(id);
    return el("div", { class: "stepper" + (compact ? " compact" : "") },
      el("button", { type: "button", class: "step-btn", "aria-label": "−", onclick: (e) => { e.stopPropagation(); changeQty(id, -1); } }, icon("minus")),
      el("span", { class: "step-value" }, el("b", null, fmtQty(entry.qty)), " ", qtyLabel(entry, group).replace(/^\S+\s/, "")),
      el("button", { type: "button", class: "step-btn", "aria-label": "+", onclick: (e) => { e.stopPropagation(); changeQty(id, 1); } }, icon("plus"))
    );
  }

  function cardAction(id) {
    const entry = inCart(id);
    return el("div", { class: "card-action" },
      entry ? stepper(id, true)
        : el("button", { type: "button", class: "add-btn", onclick: () => addItem(id) }, icon("plus"), ui().add)
    );
  }

  function photoCard(item, section) {
    const entry = inCart(item.id);
    const meta = item.sizes ? item.sizes.map(tr).join(" · ")
      : item.creator ? [`${ui().ideaBy}: `, el("bdi", null, item.creator)] : null;
    return el("article", { class: "card" + (entry ? " in-cart" : ""), "data-id": item.id },
      el("button", { type: "button", class: "card-media", "aria-label": tr(item), onclick: () => openSheet(item.id) },
        item.img
          ? el("img", { class: "card-img", src: item.img, alt: "", loading: "lazy", decoding: "async", width: "300", height: "300" })
          : el("span", { class: "card-img card-img-empty", "aria-hidden": "true" }, section.emoji || "🍽️"),
        readyTag(item, section, "on-card")
      ),
      el("button", {
        type: "button", class: "fav-btn", "data-id": item.id, "aria-pressed": String(state.favs.has(item.id)),
        "aria-label": ui().favAdd, onclick: () => toggleFav(item.id),
      }, icon("heart")),
      el("div", { class: "card-body" },
        el("button", { type: "button", class: "card-name", onclick: () => openSheet(item.id) }, tr(item)),
        meta ? el("div", { class: "card-meta" }, meta) : null,
        cardAction(item.id)
      )
    );
  }

  function filterChips() {
    const u = ui();
    const keys = ["all", "cook", "eat", "healthy", "fav"];
    const ico = { cook: "flame", eat: "plate", healthy: "leaf", fav: "heart" };
    return el("div", { class: "chip-row", role: "group" },
      keys.map((k) => el("button", {
        type: "button", class: "chip", "aria-pressed": String(state.filter === k),
        onclick: () => { state.filter = state.filter === k && k !== "all" ? "all" : k; renderBrowse(); },
      }, ico[k] ? icon(ico[k]) : null, u.filters[k]))
    );
  }

  function groupTabs() {
    const groups = [{ id: "all", ar: UI.ar.all, en: UI.en.all }, ...GROUPS.filter((g) => g.sections.some((s) => shownItems(s).length))];
    return el("div", { class: "segmented", role: "tablist" },
      groups.map((g) => el("button", {
        type: "button", role: "tab", "aria-selected": String(state.group === g.id),
        onclick: () => { state.group = g.id; renderBrowse(); scrollToMenuTop(); },
      }, tr(g)))
    );
  }

  function bundleCard(c) {
    const items = c.items.filter((id) => byId.has(id));
    const pics = items.map((id) => byId.get(id).item).filter((i) => i.img).slice(0, 3);
    return el("button", { type: "button", class: "bundle-card", onclick: () => openBundle(c.id) },
      el("span", { class: "bundle-pics n" + pics.length }, pics.map((i) => el("img", { src: i.img, alt: "", loading: "lazy", decoding: "async" }))),
      el("span", { class: "bundle-info" },
        el("span", { class: "bundle-kind" }, ui().kinds[c.kind] || ""),
        el("span", { class: "bundle-name" }, tr(c)),
        el("span", { class: "bundle-count" }, ui().itemsN(items.length)))
    );
  }

  function bundlesBlock() {
    const u = ui();
    const kinds = ["week", "feast"];
    return el("section", { class: "bundles", id: "bundles" },
      el("div", { class: "block-head" },
        el("h2", { class: "block-title" }, u.bundles),
        el("div", { class: "mini-tabs", role: "tablist" }, kinds.map((k) =>
          el("button", { type: "button", role: "tab", "aria-selected": String(state.bundleKind === k), onclick: () => { state.bundleKind = k; renderBrowse(); } }, u.kinds[k])))
      ),
      el("div", { class: "bundle-row" }, COLLECTIONS.filter((c) => c.kind === state.bundleKind).map(bundleCard))
    );
  }

  function againBlock() {
    const last = lastOrder();
    if (!last) return null;
    const u = ui();
    const pics = last.cart.map((c) => byId.get(c.id).item).filter((i) => i.img).slice(0, 3);
    return el("div", { class: "again" },
      el("span", { class: "again-pics" }, pics.map((i) => el("img", { src: i.img, alt: "" }))),
      el("span", { class: "again-text" }, el("b", null, u.orderAgain), el("span", null, u.lastOrder(last.cart.length, fmtDate(last.at)))),
      el("button", { type: "button", class: "btn tinted small", onclick: addLastOrder }, icon("repeat"), u.addLast)
    );
  }

  let spyHandler = null;
  function renderBrowse() {
    const u = ui();
    const sections = visibleSections();
    const searching = !!state.search;
    const total = sections.reduce((n, s) => n + s.items.length, 0);
    const out = [];

    if (!searching) {
      out.push(againBlock());
      if (COLLECTIONS.length && state.filter === "all") out.push(bundlesBlock());
    }
    out.push(el("div", { class: "menu-tools", id: "menu-top" }, groupTabs(), filterChips()));
    if (searching) out.push(el("p", { class: "result-count" }, u.results(total)));

    let lastGroup = null;
    sections.forEach(({ group, section, items }) => {
      if (state.group === "all" && group !== lastGroup && !searching) {
        out.push(el("h2", { class: "group-title" }, tr(group)));
        lastGroup = group;
      }
      out.push(el("section", { class: "section", id: "s-" + section.id, "data-section": section.id },
        el("div", { class: "section-head" },
          el("h3", { class: "section-title" }, el("span", { class: "section-emoji", "aria-hidden": "true" }, section.emoji), tr(section)),
          el("span", { class: "count" }, items.length)
        ),
        el("div", { class: "grid" }, items.map((item) => photoCard(item, section)))
      ));
    });

    if (!sections.length) {
      out.push(el("div", { class: "empty" },
        el("p", { class: "empty-title" }, state.filter === "fav" && !searching ? u.favEmpty : u.noResults),
        state.filter === "fav" && !searching ? null : el("p", null, u.noResultsHint)));
    }
    $("main").replaceChildren(el("div", { class: "wrap browse" }, out));

    // Section shortcuts in the top bar: tap to jump, and the current section lights up as you scroll.
    const nav = $("section-nav");
    nav.replaceChildren(...sections.map(({ section }) =>
      el("button", { type: "button", class: "nav-chip", "data-for": section.id, onclick: () => jumpTo(section.id) },
        el("span", { "aria-hidden": "true" }, section.emoji), " ", tr(section))));
    if (spyHandler) window.removeEventListener("scroll", spyHandler);
    let ticking = false;
    spyHandler = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { ticking = false; spy(); });
    };
    window.addEventListener("scroll", spyHandler, { passive: true });
    spy();
    renderFab(false);
  }

  function headerOffset() { return $("topbar").getBoundingClientRect().height + 8; }
  function jumpTo(sectionId) {
    const target = $("s-" + sectionId);
    if (!target) return;
    const y = target.getBoundingClientRect().top + window.scrollY - headerOffset();
    window.scrollTo({ top: y, behavior: reduceMotion() ? "auto" : "smooth" });
  }
  function scrollToMenuTop() {
    const t = $("menu-top");
    if (t && t.getBoundingClientRect().top < headerOffset()) {
      window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - headerOffset() });
    }
  }
  let lastSpy = null;
  function spy() {
    if (state.view !== "browse") return;
    const line = headerOffset() + 24;
    let current = null;
    document.querySelectorAll(".section[data-section]").forEach((s) => {
      if (s.getBoundingClientRect().top <= line) current = s.dataset.section;
    });
    if (current === lastSpy && document.querySelector(".nav-chip.active")) return;
    lastSpy = current;
    document.querySelectorAll(".nav-chip").forEach((b) => {
      const on = b.dataset.for === current;
      b.classList.toggle("active", on);
      if (on) {
        const nav = $("section-nav");
        const r = b.getBoundingClientRect(), nr = nav.getBoundingClientRect();
        if (r.left < nr.left || r.right > nr.right) nav.scrollBy({ left: r.left - nr.left - (nr.width - r.width) / 2, behavior: "smooth" });
      }
    });
    const up = $("to-top");
    if (up) up.hidden = window.scrollY < 900;
  }

  // ---------- Bottom bar ----------
  function renderFab(bump) {
    const u = ui();
    const fab = $("fab");
    if (state.view !== "browse") { fab.replaceChildren(); return; }
    const n = state.cart.length;
    const pics = state.cart.slice(-3).reverse().map((c) => byId.get(c.id).item).filter((i) => i.img);
    fab.replaceChildren(...[
      el("button", { type: "button", class: "to-top", id: "to-top", hidden: window.scrollY < 900, "aria-label": u.backTop, onclick: () => window.scrollTo({ top: 0, behavior: reduceMotion() ? "auto" : "smooth" }) }, icon("up")),
      n ? el("button", { type: "button", class: "order-bar" + (bump ? " bump" : ""), onclick: () => go("cart") },
        el("span", { class: "order-pics" }, pics.map((i) => el("img", { src: i.img, alt: "" }))),
        el("span", { class: "order-bar-text" }, u.inOrder(n)),
        el("span", { class: "order-bar-cta" }, u.viewOrder, icon("chevron", "flip-rtl"))
      ) : null,
    ].filter(Boolean));
  }

  // ---------- Cart ----------
  function renderCart() {
    const u = ui();
    $("fab").replaceChildren();
    if (!state.cart.length) {
      $("main").replaceChildren(el("div", { class: "wrap" }, el("div", { class: "empty big" },
        el("span", { class: "empty-ico" }, icon("bag")),
        el("p", { class: "empty-title" }, u.emptyOrder),
        el("p", null, u.emptyHint),
        el("div", { class: "actions" },
          el("button", { type: "button", class: "btn solid", onclick: () => go("browse") }, u.menu),
          lastOrder() ? el("button", { type: "button", class: "btn outline", onclick: addLastOrder }, icon("repeat"), u.orderAgain) : null)
      )));
      return;
    }

    const out = [el("div", { class: "order-head" },
      el("h1", { class: "page-title" }, u.orderTitle),
      el("span", { class: "count" }, state.cart.length))];
    allSections.forEach(({ group, section }) => {
      const entries = state.cart.filter((c) => byId.get(c.id).section === section);
      if (!entries.length) return;
      out.push(el("div", { class: "cart-section" },
        el("h2", { class: "cart-section-title" }, el("span", { "aria-hidden": "true" }, section.emoji), " ", tr(section)),
        el("div", { class: "cart-list" }, entries.map((c) => {
          const { item } = byId.get(c.id);
          const details = entryDetails(c, item);
          return el("div", { class: "cart-row" },
            item.img ? el("img", { class: "cart-thumb", src: item.img, alt: "" }) : el("span", { class: "cart-thumb card-img-empty" }, section.emoji),
            el("div", { class: "cart-info" },
              el("button", { type: "button", class: "cart-name", onclick: () => openSheet(c.id) }, tr(item)),
              details.length || c.note ? el("div", { class: "cart-detail" },
                details.length ? el("span", null, details.join(" · ")) : null,
                c.note ? el("span", { class: "cart-note" }, c.note) : null) : null,
              el("div", { class: "cart-controls" },
                stepper(c.id, true),
                el("button", { type: "button", class: "icon-btn small", "aria-label": u.edit, title: u.edit, onclick: () => openSheet(c.id) }, icon("edit")),
                el("button", { type: "button", class: "icon-btn small danger", "aria-label": u.remove, title: u.remove, onclick: () => removeItem(c.id) }, icon("trash")))
            )
          );
        }))
      ));
    });

    const message = buildMessage();
    out.push(
      el("button", { type: "button", class: "btn text add-more", onclick: () => go("browse") }, icon("plus"), u.addMore),
      el("details", { class: "preview-box" },
        el("summary", null, u.preview),
        el("div", { class: "preview", dir: "rtl", lang: "ar" }, message),
        el("button", { type: "button", class: "btn outline small", onclick: () => copyMessage(message) }, icon("copy"), u.copy)),
      el("p", { class: "send-note" }, u.sendNote),
      el("div", { class: "actions" }, el("button", { type: "button", class: "btn text danger", onclick: clearCart }, u.clear))
    );
    $("main").replaceChildren(el("div", { class: "wrap order" }, out));
    $("fab").replaceChildren(el("div", { class: "send-bar" },
      el("a", {
        class: "btn whatsapp", href: "https://wa.me/?text=" + encodeURIComponent(message),
        target: "_blank", rel: "noopener", onclick: rememberOrder,
      }, icon("chat"), u.sendWhatsApp)));
  }

  async function copyMessage(message) {
    try {
      await navigator.clipboard.writeText(message);
      rememberOrder();
      toast(ui().copied);
    } catch (e) {
      toast(ui().copyFailed);
    }
  }

  function clearCart() {
    if (!window.confirm(ui().confirmClear)) return;
    state.cart = [];
    saveCart();
    render();
  }

  // ---------- Sheets ----------
  function openPanel(build, label) {
    const backdrop = $("sheet");
    const close = () => { backdrop.hidden = true; backdrop.replaceChildren(); document.body.style.overflow = ""; };
    const draw = () => {
      const scroll = backdrop.firstChild ? backdrop.firstChild.scrollTop : 0;
      const sheet = el("div", { class: "sheet", role: "dialog", "aria-modal": "true", "aria-label": label },
        el("div", { class: "handle" }),
        el("button", { type: "button", class: "sheet-close icon-btn small", "aria-label": ui().close, onclick: close }, icon("close")),
        build({ close, draw }));
      backdrop.replaceChildren(sheet);
      sheet.scrollTop = scroll;
    };
    backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
    backdrop.hidden = false;
    document.body.style.overflow = "hidden";
    draw();
  }

  function openSheet(id) {
    const { item, section, group } = byId.get(id);
    const packed = isPacked(group);
    const existing = inCart(id);
    const draft = existing ? { ...existing, opts: [...(existing.opts || [])] } : { ...makeEntry(id), opts: (item.options || []).map(() => 0), size: 0 };

    function chipRow(choices, selected, onPick, draw) {
      return el("div", { class: "choice-row" }, choices.map((c, i) =>
        el("button", { type: "button", class: "choice", "aria-pressed": String(i === selected), onclick: () => { onPick(i); draw(); } }, tr(c))
      ));
    }

    openPanel(({ close, draw }) => {
      const u = ui();
      const step = stepFor(draft, group);
      const confirm = () => {
        const entry = { id, qty: draft.qty, note: (draft.note || "").trim() };
        if (packed) {
          if (item.sizes && item.sizes.length) entry.size = draft.size;
          if (item.options && item.options.length) entry.opts = draft.opts;
        } else {
          entry.unit = draft.unit;
        }
        if (isIdeaId(id)) {
          const { id: _, ...copy } = item;
          entry.idea = copy;
        }
        const idx = state.cart.findIndex((c) => c.id === id);
        if (idx >= 0) state.cart[idx] = entry;
        else state.cart.push(entry);
        saveCart();
        buzz();
        close();
        toast(ui().added(tr(item)));
        refreshItem(id);
      };
      return [
        item.full ? el("button", { type: "button", class: "sheet-img-btn", onclick: () => openLightbox(item) },
          el("img", { class: "sheet-img", src: item.full, alt: tr(item) })) : null,
        el("div", { class: "sheet-tags" },
          el("span", { class: "eyebrow" }, el("span", { "aria-hidden": "true" }, section.emoji), " ", tr(section)),
          readyTag(item, section),
          isHealthy(item, section) ? el("span", { class: "ready-tag ready-healthy" }, ui().filters.healthy) : null),
        el("div", { class: "sheet-title-row" },
          el("h2", { class: "sheet-title" }, tr(item)),
          el("button", {
            type: "button", class: "fav-btn inline", "data-id": id, "aria-pressed": String(state.favs.has(id)),
            "aria-label": u.favAdd, onclick: () => toggleFav(id),
          }, icon("heart"))),
        item.desc ? el("p", { class: "sheet-desc" }, tr(item.desc)) : null,
        item.cal ? el("span", { class: "cal-tag" }, tr(item.cal)) : null,
        item.ref ? el("a", { class: "idea-link sheet-ref", href: item.ref, target: "_blank", rel: "noopener" }, u.seeOriginal + " ↗") : null,

        item.sizes && item.sizes.length ? [
          el("p", { class: "field-label" }, u.size),
          chipRow(item.sizes, draft.size, (i) => { draft.size = i; }, draw),
        ] : null,
        (item.options || []).map((opt, oi) => [
          el("p", { class: "field-label" }, tr(opt)),
          chipRow(opt.choices, draft.opts[oi] || 0, (i) => { draft.opts[oi] = i; }, draw),
        ]),
        packed ? null : [
          el("p", { class: "field-label" }, u.unit),
          chipRow(KITCHEN_UNITS, KITCHEN_UNITS.findIndex((x) => x.id === draft.unit), (i) => {
            draft.unit = KITCHEN_UNITS[i].id;
            if (draft.unit !== "kg") draft.qty = Math.max(1, Math.round(draft.qty));
          }, draw),
        ],

        el("p", { class: "field-label" }, u.quantity),
        el("div", { class: "big-stepper" },
          el("button", { type: "button", class: "step-btn", "aria-label": "−", onclick: () => { draft.qty = Math.max(step, Math.round((draft.qty - step) * 10) / 10); draw(); } }, icon("minus")),
          el("div", { class: "step-value" }, el("b", null, fmtQty(draft.qty)), el("span", null, qtyLabel(draft, group).replace(/^\S+\s/, ""))),
          el("button", { type: "button", class: "step-btn", "aria-label": "+", onclick: () => { draft.qty = Math.round((draft.qty + step) * 10) / 10; draw(); } }, icon("plus"))
        ),

        el("input", {
          class: "note", type: "text", value: draft.note || "", placeholder: u.notePh,
          oninput: (e) => { draft.note = e.target.value; },
          onkeydown: (e) => { if (e.key === "Enter") confirm(); },
        }),
        el("div", { class: "sheet-actions" },
          el("button", { type: "button", class: "btn solid wide", onclick: confirm }, existing ? [icon("check"), u.update] : [icon("plus"), u.addToOrder]),
          existing ? el("button", { type: "button", class: "btn text danger", onclick: () => { close(); removeItem(id); } }, u.removeFromOrder) : null),
      ];
    }, tr(item));
  }

  function openBundle(collectionId) {
    const c = COLLECTIONS.find((x) => x.id === collectionId);
    if (!c) return;
    const ids = c.items.filter((id) => byId.has(id));
    const picked = new Set(ids.filter((id) => !inCart(id)));
    openPanel(({ close, draw }) => {
      const u = ui();
      const n = picked.size;
      return [
        el("span", { class: "eyebrow" }, u.kinds[c.kind] || ""),
        el("h2", { class: "sheet-title" }, tr(c)),
        c.desc ? el("p", { class: "sheet-desc" }, tr(c.desc)) : null,
        el("p", { class: "bundle-hint" }, u.bundleHint),
        el("div", { class: "bundle-list" }, ids.map((id) => {
          const { item, section, group } = byId.get(id);
          const already = !!inCart(id);
          const on = picked.has(id);
          return el("button", {
            type: "button", class: "bundle-item", "aria-pressed": String(on || already), disabled: already,
            onclick: () => { if (on) picked.delete(id); else picked.add(id); draw(); },
          },
            el("span", { class: "tick" }, icon("check")),
            item.img ? el("img", { src: item.img, alt: "", loading: "lazy" }) : el("span", { class: "card-img-empty" }, section.emoji),
            el("span", { class: "bundle-item-text" },
              el("span", { class: "bundle-item-name" }, tr(item)),
              el("span", { class: "bundle-item-meta" }, already ? u.alreadyIn : qtyLabel(makeEntry(id), group))),
            readyTag(item, section)
          );
        })),
        el("div", { class: "sheet-actions" },
          el("button", {
            type: "button", class: "btn solid wide", disabled: !n,
            onclick: () => {
              ids.forEach((id) => { if (picked.has(id) && !inCart(id)) state.cart.push(makeEntry(id)); });
              saveCart();
              buzz();
              close();
              toast(u.addedN(n));
              render();
            },
          }, icon("plus"), u.addAll(n))),
      ];
    }, tr(c));
  }

  // ---------- Lightbox ----------
  function openLightbox(item) {
    const box = $("lightbox");
    const close = () => { box.hidden = true; box.replaceChildren(); };
    box.replaceChildren(
      el("button", { type: "button", class: "lightbox-close", "aria-label": ui().close, onclick: close }, icon("close")),
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

  // ---------- Landing page ----------
  // One pinned dark scene (the "night kitchen") that the scroll moves through five stops. It is
  // short on purpose: each stop takes less than a screen of scrolling, and the bar at the bottom
  // lists every stop from the first screen and jumps straight to it.
  const STOPS = ["hero", "cookeat", "week", "feast", "healthy", "close"];
  const STOP_LEN = { hero: 0.55, cookeat: 1, week: 1, feast: 1, healthy: 0.7, close: 0.6 };
  const SCROLL_PER_UNIT = 0.72; // screens of scroll per unit above

  function countItems(groupId) {
    const g = GROUPS.find((x) => x.id === groupId);
    return g ? g.sections.reduce((n, s) => n + shownItems(s).length, 0) : 0;
  }
  function countWhere(pred) {
    let n = 0;
    allSections.forEach(({ group, section }) => {
      if (group === IDEAS_GROUP) return;
      shownItems(section).forEach((i) => { if (pred(i, section)) n++; });
    });
    return n;
  }
  const photo = (id, full) => {
    const hit = byId.get(id);
    return hit ? (full ? hit.item.full : hit.item.img) || hit.item.img : "";
  };

  function startWith(way) {
    state.search = "";
    state.group = "all";
    if (way === "week" || way === "feast") {
      state.filter = "all";
      state.bundleKind = way;
      go("browse", "bundles");
    } else {
      state.filter = way || "all";
      go("browse", way ? "menu-top" : null);
    }
  }

  let homeHandler = null;
  function stopHome() {
    if (homeHandler) {
      window.removeEventListener("scroll", homeHandler);
      window.removeEventListener("resize", homeHandler);
      homeHandler = null;
    }
  }

  function renderWelcome() {
    const h = HOME[state.lang];
    const u = ui();
    store.set("sabah-welcomed", true);
    $("fab").replaceChildren();
    const bundle = (id) => COLLECTIONS.find((c) => c.id === id);
    const week = bundle(HOME_WEEK);
    const feast = bundle(HOME_FEAST);
    const weekIds = week ? week.items.filter((id) => byId.has(id)).slice(0, 7) : [];
    const feastIds = feast ? feast.items.filter((id) => byId.has(id)).slice(0, 6) : [];
    const nCook = countWhere((i, s) => readiness(i, s) === "cook");
    const nEat = countWhere((i, s) => readiness(i, s) === "eat");
    const nHealthy = countWhere((i, s) => isHealthy(i, s));
    const total = STOPS.reduce((n, s) => n + STOP_LEN[s], 0);

    const btn = (label, cls, onclick, ico) => el("button", { type: "button", class: "btn " + cls, onclick }, label, ico ? icon(ico, "flip-rtl") : null);
    const stop = (name, visual, copy) => el("div", { class: "stop stop-" + name, "data-stop": name },
      el("div", { class: "stop-visual" }, visual), el("div", { class: "stop-copy" }, copy));

    const hero = stop("hero",
      [el("div", { class: "hv-glow" }),
        el("div", { class: "hv-side a" }, el("img", { src: photo("k20"), alt: "" })),
        el("div", { class: "hv-plate" }, el("img", { src: photo("k82", true), alt: "", decoding: "async" })),
        el("div", { class: "hv-side b" }, el("img", { src: photo("k150"), alt: "" }))],
      [el("p", { class: "label" }, h.eyebrow),
        el("h1", { class: "display" }, h.h1),
        el("p", { class: "lead" }, h.lead),
        el("div", { class: "stop-ctas" }, btn(h.start, "solid big", () => startWith(null), "chevron")),
        el("div", { class: "stats" },
          [[countItems("kitchen"), state.lang === "ar" ? "أكلة بيتي" : "home dishes"],
            [countItems("butcherista"), state.lang === "ar" ? "من بوتشريستا" : "Butcherista items"],
            [COLLECTIONS.length, state.lang === "ar" ? "باقة جاهزة" : "bundles"]].map(([n, l]) =>
            el("div", { class: "stat" }, el("span", { class: "num" }, n), el("span", { class: "stat-label" }, l))))]);

    const cookeat = stop("cookeat",
      el("div", { class: "wipe" },
        el("div", { class: "wipe-states" }, el("span", { class: "ws raw" }, h.raw), el("span", { class: "ws cooked" }, h.cooked)),
        el("div", { class: "wipe-pic" },
          el("img", { src: photo("k6", true), alt: "", loading: "lazy" }),
          el("img", { class: "wipe-top", src: photo("k102", true), alt: "", loading: "lazy" }),
          el("span", { class: "wipe-seam" }))),
      [el("h2", { class: "h2" }, h.cookeatTitle), el("p", { class: "lead" }, h.cookeatText),
        el("div", { class: "stop-ctas" },
          btn(h.seeCook(nCook), "solid", () => startWith("cook")),
          btn(h.seeEat(nEat), "glass", () => startWith("eat")))]);

    const weekStop = stop("week",
      el("div", { class: "weeklist" }, weekIds.map((id, i) => el("div", { class: "wd" },
        el("span", { class: "wd-day" }, h.days[i]),
        el("span", { class: "wd-ph" }, el("img", { src: photo(id), alt: "", loading: "lazy" })),
        el("span", { class: "wd-name" }, tr(byId.get(id).item))))),
      [el("h2", { class: "h2" }, h.weekTitle), el("p", { class: "lead" }, h.weekText),
        el("div", { class: "stop-ctas" },
          week ? btn(h.weekBtn, "solid", () => openBundle(HOME_WEEK), "plus") : null,
          btn(h.weekMore, "glass", () => startWith("week")))]);

    const feastStop = stop("feast",
      el("div", { class: "feast" },
        el("div", { class: "feast-table" }, feastIds.map((id, i) => el("div", { class: "fd f" + i }, el("img", { src: photo(id), alt: "", loading: "lazy" })))),
        el("p", { class: "feast-count" })),
      [el("h2", { class: "h2" }, h.feastTitle), el("p", { class: "lead" }, h.feastText),
        el("div", { class: "stop-ctas" },
          feast ? btn(h.feastBtn, "solid", () => openBundle(HOME_FEAST), "plus") : null,
          btn(h.feastMore, "glass", () => startWith("feast")))]);

    const healthy = stop("healthy",
      el("div", { class: "calm" },
        el("div", { class: "calm-main" }, el("img", { src: photo(HOME_HEALTHY[0], true), alt: "", loading: "lazy" })),
        HOME_HEALTHY.slice(1).map((id, i) => el("div", { class: "calm-side s" + i }, el("img", { src: photo(id), alt: "", loading: "lazy" })))),
      [el("h2", { class: "h2" }, h.healthyTitle), el("p", { class: "lead" }, h.healthyText),
        el("div", { class: "stop-ctas" }, btn(h.healthyBtn(nHealthy), "solid", () => startWith("healthy")))]);

    const close = stop("close",
      el("div", { class: "fan" }, ["k8", "k133", "k152"].map((id, i) => el("div", { class: "fan-card c" + i }, el("img", { src: photo(id), alt: "", loading: "lazy" })))),
      [el("h2", { class: "h2" }, h.closeTitle),
        el("ol", { class: "mini-steps" }, h.closeSteps.map((s, i) => el("li", null, el("b", null, i + 1), s))),
        el("p", { class: "lead" }, h.closeText),
        el("div", { class: "stop-ctas" }, btn(h.start, "solid big", () => startWith(null), "chevron")),
        el("p", { class: "fine" }, h.footer)]);

    const railKeys = ["cookeat", "week", "feast", "healthy"];
    const rail = el("nav", { class: "jrail", "aria-label": u.menu },
      railKeys.map((k) => el("button", { type: "button", class: "jr", "data-for": k, onclick: () => jumpToStop(k) },
        el("span", { class: "jr-ico" }, icon({ cookeat: "flame", week: "calendar", feast: "table", healthy: "leaf" }[k])),
        el("span", { class: "jr-label" }, h.rail[k]),
        el("span", { class: "jr-bar" }, el("i")))));

    const stage = el("div", { class: "jstage" },
      el("div", { class: "jbg" }),
      el("div", { class: "jstops" }, hero, cookeat, weekStop, feastStop, healthy, close),
      rail);
    const journey = el("section", { class: "journey", style: `--units:${total}; --per:${SCROLL_PER_UNIT}` }, stage);
    $("main").replaceChildren(el("div", { class: "home" }, journey));

    // Stop boundaries in progress units.
    const bounds = {};
    let acc = 0;
    STOPS.forEach((s) => { bounds[s] = [acc, acc + STOP_LEN[s]]; acc += STOP_LEN[s]; });
    const stopEls = {};
    journey.querySelectorAll("[data-stop]").forEach((n) => { stopEls[n.dataset.stop] = n; });
    const railBtns = [...rail.querySelectorAll(".jr")];
    const feastCount = journey.querySelector(".feast-count");
    const days = [...journey.querySelectorAll(".wd")];
    const dishes = [...journey.querySelectorAll(".fd")];
    const clamp = (v) => Math.min(1, Math.max(0, v));
    const ease = (t) => 1 - Math.pow(1 - t, 3);

    function progressUnits() {
      const r = journey.getBoundingClientRect();
      const scrollable = journey.offsetHeight - stage.offsetHeight;
      const p = scrollable > 0 ? clamp(-r.top / scrollable) : 0;
      return p * total;
    }

    function tick() {
      if (state.view !== "welcome") return;
      const top = $("topbar").getBoundingClientRect().height;
      document.documentElement.style.setProperty("--topbar-h", top + "px");
      const at = progressUnits();
      // Each stop fades in over the first 15% of its own span and out over its last 12%, so two
      // stops never show at once. The hero starts fully shown and the close never fades out.
      STOPS.forEach((s, i) => {
        const [a, b] = bounds[s];
        const len = b - a;
        const raw = (at - a) / len;
        const local = clamp(raw);
        const fadeIn = i === 0 ? 1 : clamp(raw / 0.15);
        const fadeOut = i === STOPS.length - 1 ? 1 : clamp((1 - raw) / 0.12);
        const vis = Math.min(fadeIn, fadeOut);
        const node = stopEls[s];
        node.style.opacity = vis.toFixed(3);
        node.style.visibility = vis < 0.02 ? "hidden" : "visible";
        node.style.setProperty("--in", ease(vis).toFixed(3));
        node.style.setProperty("--local", local.toFixed(3));
        node.classList.toggle("live", vis > 0.5);
      });
      // Peaks, driven by how far into their stop the scroll is.
      const lp = (s) => clamp((at - bounds[s][0]) / (bounds[s][1] - bounds[s][0]));
      stopEls.cookeat.style.setProperty("--q", clamp((lp("cookeat") - 0.15) / 0.55).toFixed(3));
      const wn = Math.round(clamp((lp("week") - 0.1) / 0.6) * days.length);
      days.forEach((d, i) => d.classList.toggle("on", i < wn));
      const fnum = Math.round(clamp((lp("feast") - 0.1) / 0.6) * dishes.length);
      dishes.forEach((d, i) => d.classList.toggle("on", i < fnum));
      feastCount.textContent = HOME[state.lang].onTable(fnum, dishes.length);
      // The hero drifts apart as you leave it; the whole scene zooms very slowly the whole way.
      const hp = clamp(at / bounds.hero[1]);
      stopEls.hero.style.setProperty("--h", hp.toFixed(3));
      stage.style.setProperty("--cam", (at / total).toFixed(4));
      // Rail: highlight the current stop and fill its bar.
      railBtns.forEach((b) => {
        const k = b.dataset.for;
        const on = at >= bounds[k][0] - 0.05 && at < bounds[k][1] - 0.05;
        b.classList.toggle("active", on);
        b.style.setProperty("--fill", lp(k).toFixed(3));
      });
      rail.classList.toggle("at-end", at > bounds.close[0]);
    }

    function jumpToStop(k) {
      const scrollable = journey.offsetHeight - stage.offsetHeight;
      // Land where the stop's moment has finished playing.
      const target = (bounds[k][0] + (bounds[k][1] - bounds[k][0]) * 0.78) / total;
      const y = journey.getBoundingClientRect().top + window.scrollY + scrollable * target;
      window.scrollTo({ top: y, behavior: reduceMotion() ? "auto" : "smooth" });
    }

    stopHome();
    let ticking = false;
    homeHandler = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { ticking = false; tick(); });
    };
    window.addEventListener("scroll", homeHandler, { passive: true });
    window.addEventListener("resize", homeHandler, { passive: true });
    tick();
  }

  // ---------- Wiring ----------
  let pendingAnchor = null;
  function go(view, anchor) {
    pendingAnchor = anchor || null;
    const hash = VIEW_HASH[view] || "";
    if (location.hash === hash) show(view);
    else location.hash = hash;
  }
  function show(view) {
    state.view = view;
    render();
    const anchor = pendingAnchor;
    pendingAnchor = null;
    const target = anchor && $(anchor);
    if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - headerOffset() });
    else window.scrollTo({ top: 0 });
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
      go("browse");
      openSheet("i-" + ideaId);
    },
  };

  function render() {
    if (state.view !== "welcome") stopHome();
    renderHeader();
    if (state.view === "cart") renderCart();
    else if (state.view === "welcome") renderWelcome();
    else if (state.view === "ideas" || state.view === "admin") {
      $("fab").replaceChildren();
      const page = state.view === "admin" ? window.SabahIdeas.renderAdmin(ideasCtx) : window.SabahIdeas.render(ideasCtx);
      $("main").replaceChildren(el("div", { class: "wrap" }, page.flat().filter(Boolean)));
    } else renderBrowse();
  }

  $("lang-btn").addEventListener("click", () => {
    state.lang = state.lang === "ar" ? "en" : "ar";
    store.set("sabah-lang", state.lang);
    render();
  });
  $("brand").addEventListener("click", () => go("welcome"));
  $("cart-btn").addEventListener("click", () => go(state.view === "cart" ? "browse" : "cart"));
  $("ideas-btn").addEventListener("click", () => go(state.view === "ideas" ? "browse" : "ideas"));
  window.addEventListener("hashchange", () => {
    const v = viewFromHash();
    if (v !== state.view || pendingAnchor) show(v);
  });
  let searchTimer;
  $("search").addEventListener("input", (e) => {
    state.search = e.target.value;
    $("search-clear").hidden = !state.search;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { renderBrowse(); scrollToMenuTop(); }, 120);
  });
  $("search-clear").addEventListener("click", () => {
    state.search = "";
    $("search").value = "";
    $("search-clear").hidden = true;
    renderBrowse();
    $("search").focus();
  });

  render();
  if (window.SabahIdeas) window.SabahIdeas.load(ideasCtx);
})();
