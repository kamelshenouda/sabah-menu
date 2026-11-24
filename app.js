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
      orderNote: "ملاحظة عامة للشيف",
      categories: "اختار من القائمة",
      goesWith: "بيتطلب معاها",
      kindsN: (n) => `${n} أنواع`,
      bundlesN: (n) => (n === 1 ? "باقة واحدة" : n === 2 ? "باقتين" : `${n} باقات`),
      tryWords: "جرّب تكتب",
      recent: "بحثت قبل كده عن",
      suggestions: "ممكن يعجبك",
      wayDesc: {
        cook: "متبّل ومتجهّز، تسوّيه انت في دقايق ويطلع طازة.",
        eat: "مطبوخ في البيت وجاهز، تسخّنه وتاكل.",
        healthy: "بروتين خفيف وخضار وحبوب كاملة وحلويات من غير سكر أبيض.",
        week: "غدا الأسبوع كله في طلب واحد. افتح باقة وغيّر أو بدّل اللي تحبه.",
        feast: "عزومة كاملة بضغطة. افتح الباقة وحدد عدد الضيوف.",
      },
      orderNotePh: "مثال: العزومة يوم الجمعة الساعة ٢، أو التوصيل بعد العصر",
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
      orderNote: "A note for the chef about the whole order",
      categories: "Browse the menu",
      goesWith: "Goes well with it",
      kindsN: (n) => `${n} kinds`,
      bundlesN: (n) => `${n} bundle${n === 1 ? "" : "s"}`,
      tryWords: "Try typing",
      recent: "You searched for",
      suggestions: "You might like",
      wayDesc: {
        cook: "Marinated and prepped; you cook it fresh in minutes.",
        eat: "Cooked at home and ready; heat it and eat.",
        healthy: "Lean protein, vegetables, whole grains and sweets without white sugar.",
        week: "The whole week's lunches in one order. Open a bundle and swap what you like.",
        feast: "A whole feast in one tap. Open a bundle and set the number of guests.",
      },
      orderNotePh: "e.g. the feast is on Friday at 2 pm, or deliver after 4",
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
      rail: { cookeat: "جاهز أو متبل", week: "أكل الأسبوع", feast: "عزومات", healthy: "صحي" },
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
      rail: { cookeat: "Ready or marinated", week: "Meals of the week", feast: "Feasts", healthy: "Healthy" },
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
    lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    unlock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 7.5-1.9"/>',
    swap: '<path d="M7 4 4 7l3 3"/><path d="M4 7h13a3 3 0 0 1 3 3v1"/><path d="M17 20l3-3-3-3"/><path d="M20 17H7a3 3 0 0 1-3-3v-1"/>',
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
  // Pages with their own address. The site's plain address ("") always opens the landing page.
  const HASH_VIEWS = { welcome: "welcome", menu: "browse", order: "cart", ideas: "ideas", admin: "admin" };
  const VIEW_HASH = { welcome: "#welcome", browse: "#menu", cart: "#order", ideas: "#ideas", admin: "#admin" };
  // The menu also has addresses for its inner pages: #menu-<category> and #way-<way>.
  function viewFromHash() {
    const h = location.hash.slice(1);
    if (/^menu-[a-z0-9-]+$/.test(h) || /^way-[a-z]+$/.test(h)) return "browse";
    const v = HASH_VIEWS[h];
    if ((v === "ideas" || v === "admin") && !window.SabahIdeas) return "browse";
    if (v) return v;
    return "welcome";
  }
  function applyHash() {
    const h = location.hash.slice(1);
    state.cat = h.startsWith("menu-") ? h.slice(5) : null;
    state.way = h.startsWith("way-") ? h.slice(4) : null;
  }

  // The last approved ideas list is kept on the device so the Ideas tab shows right away.
  const savedCart = (store.get("sabah-cart", []) || []).filter(Boolean);
  setIdeas(store.get("sabah-ideas", []), savedCart);

  const state = {
    lang: store.get("sabah-lang", "ar") === "en" ? "en" : "ar",
    view: "browse",
    cat: null,
    way: null,
    sub: "all",
    flags: new Set(),
    search: "",
    searchOpen: false,
    cart: savedCart.filter((c) => byId.has(c.id)),
    favs: new Set((store.get("sabah-favs", []) || []).filter((id) => typeof id === "string")),
    // A note for the whole order (for example the date and time of a feast), sent at the end.
    cartNote: String(store.get("sabah-cart-note", "") || ""),
  };
  state.view = viewFromHash();
  applyHash();

  const ui = () => UI[state.lang];
  const tr = (obj) => (obj ? obj[state.lang] || obj.ar || "" : "");
  const saveCart = () => store.set("sabah-cart", state.cart);
  const saveFavs = () => store.set("sabah-favs", [...state.favs]);
  const saveCartNote = () => store.set("sabah-cart-note", state.cartNote);
  function addOrderNote(text) {
    if (state.cartNote.includes(text)) return;
    state.cartNote = state.cartNote ? state.cartNote + "\n" + text : text;
    saveCartNote();
  }
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
    if (state.view === "browse" && state.flags.has("fav")) renderBrowse();
    else document.querySelectorAll(`.lrow[data-id="${CSS.escape(id)}"]`).forEach((r) => {
      const { item, section } = byId.get(id);
      r.replaceWith(dishRow(item, section, r.classList.contains("sub") && familyOf.get(id) ? familyOf.get(id).member : null));
    });
  }

  // After the order changes, update what is on screen without rebuilding the whole menu.
  function refreshItem(id) {
    renderHeader();
    if (state.view === "cart") { renderCart(); return; }
    document.querySelectorAll(".lrow[data-id]").forEach((row) => {
      if (row.dataset.id !== id) return;
      row.classList.toggle("in-cart", !!inCart(id));
      const slot = row.querySelector(".lrow-act");
      if (slot) slot.replaceWith(rowAction(id));
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
    if (state.cartNote.trim()) blocks.push(`📝 *${u.orderNote}*\n${state.cartNote.trim()}`);
    return blocks.join("\n\n");
  }

  // The order is remembered when it is sent or copied, so it can be ordered again in one tap.
  function rememberOrder() {
    store.set("sabah-last-order", { at: Date.now(), cart: state.cart.map((c) => ({ ...c })) });
    // A short history of sent orders lets bundles avoid repeating recent dishes.
    const ids = state.cart.map((c) => c.id).sort();
    const hist = orderHistory();
    const prev = hist[hist.length - 1];
    if (prev && Date.now() - prev.at < 30 * 60 * 1000) hist.pop();
    hist.push({ at: Date.now(), ids });
    store.set("sabah-history", hist.slice(-6));
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
    document.documentElement.classList.toggle("snap-page", state.view === "welcome");

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
    $("section-nav").hidden = true;
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
  // The menu has three levels so there is never much to choose from at once:
  //  1. Home: the five ways to order and eight photo categories.
  //  2. A category (or a way: ready to cook, ready to eat, healthy): a compact list with one row
  //     of filters. Meals of the week and feasts open their bundles.
  //  3. A dish: the item sheet.
  // Search understands intents ("صحي", "للعزومة"…) as well as dish names, and after adding a dish
  // the list suggests what usually goes with it.
  const CATEGORIES = (MENU.categories || []).map((c) => ({ ...c }));
  const FAMILIES = MENU.families || [];
  const familyOf = new Map();
  FAMILIES.forEach((f) => f.members.forEach((m) => familyOf.set(m.id, { family: f, member: m })));
  const sectionById = new Map();
  allSections.forEach(({ group, section }) => sectionById.set(section.id, { group, section }));
  const WAYS = [
    { id: "cook", icon: "flame" },
    { id: "eat", icon: "plate" },
    { id: "week", icon: "calendar" },
    { id: "feast", icon: "table" },
    { id: "healthy", icon: "leaf" },
  ];
  const isBundleWay = (w) => w === "week" || w === "feast";

  // Dishes that usually go with a dish, by its section (first ones that exist and aren't ordered).
  const PAIRS = {
    chicken: ["k130", "k46", "k141"], beef: ["k131", "k47", "k201"], fish: ["k130", "k46", "k164"],
    vegetables: ["k131", "k130", "k201"], legumes: ["k59", "k201", "k164"], egyptian: ["k201", "k59", "k148"],
    soup: ["k59", "k88"], "rice-pasta": ["k46", "k47", "k141"], pastries: ["k29", "k47"],
    salads: ["k59", "k60"], "eggs-dairy": ["k59", "k60"], desserts: ["k162", "k163"], "healthy-sweets": ["k162", "k163"],
    "marinated-chicken": ["b65", "b72", "b68"], "marinated-beef": ["b65", "b68", "b72"], steaks: ["b65", "b68"],
    "beef-cuts": ["b65", "b75"], turkish: ["b65", "b72"], "air-fryer": ["b69", "b70"], "diet-plates": ["b70", "b65"],
  };
  function pairsFor(id) {
    const hit = byId.get(id);
    if (!hit) return [];
    return (PAIRS[hit.section.id] || []).filter((p) => p !== id && byId.has(p) && !inCart(p) && !byId.get(p).item.removed).slice(0, 3);
  }

  // Search intents: words that mean "show me this way or category" rather than a dish name.
  const INTENTS = [
    { way: "healthy", words: ["صحي", "دايت", "رجيم", "خفيف", "healthy", "diet", "light"] },
    { way: "feast", words: ["عزومه", "للعزومه", "عزايم", "ضيوف", "feast", "guests", "party"] },
    { way: "week", words: ["اسبوع", "الاسبوع", "week", "weekly"] },
    { way: "cook", words: ["متبل", "متبله", "تتبيله", "ني", "marinated", "raw"] },
    { way: "eat", words: ["جاهز", "سريع", "مطبوخ", "ready", "quick", "cooked"] },
    { cat: "salads", words: ["فطار", "فطور", "breakfast"] },
    { cat: "sweets", words: ["حلو", "حلويات", "حلي", "dessert", "sweet"] },
  ].map((x) => ({ ...x, words: x.words.map(norm) }));
  function intentsFor(q) {
    const words = norm(q).split(" ").filter(Boolean);
    return INTENTS.filter((x) => words.some((w) => x.words.some((k) => w === k || (k.length >= 3 && w.startsWith(k)) || (w.length >= 3 && k.startsWith(w)))));
  }
  const SEARCH_SUGGESTIONS = {
    ar: ["صحي", "للعزومة", "أكل الأسبوع", "فطار", "حلويات", "سمك", "محشي"],
    en: ["Healthy", "Feast", "Week", "Breakfast", "Dessert", "Fish", "Mahshi"],
  };
  const recentSearches = () => (store.get("sabah-searches", []) || []).filter((s) => typeof s === "string").slice(0, 5);
  function rememberSearch(q) {
    q = String(q || "").trim();
    if (q.length < 2) return;
    store.set("sabah-searches", [q, ...recentSearches().filter((s) => s !== q)].slice(0, 5));
  }

  const catItems = (c) => c.sections.flatMap((sid) => {
    const hit = sectionById.get(sid);
    return hit ? shownItems(hit.section).map((item) => ({ item, section: hit.section, group: hit.group })) : [];
  });
  function wayMatch(way, item, section) {
    if (way === "cook" || way === "eat") return readiness(item, section) === way;
    if (way === "healthy") return isHealthy(item, section);
    return true;
  }
  const wayLabel = (w) => (isBundleWay(w) ? ui().kinds[w] : ui().filters[w]);
  const wayCount = (w) => (isBundleWay(w) ? COLLECTIONS.filter((c) => c.kind === w).length
    : CATEGORIES.reduce((n, c) => n + catItems(c).filter(({ item, section }) => wayMatch(w, item, section)).length, 0));

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

  function rowAction(id) {
    return el("div", { class: "lrow-act" },
      inCart(id) ? stepper(id, true)
        : el("button", { type: "button", class: "plus-btn", "aria-label": ui().add, onclick: () => quickAdd(id) }, icon("plus")));
  }

  // One dish as a compact row. `short` shows only the flavour name, under its family heading.
  function dishRow(item, section, short) {
    const meta = [
      readyTag(item, section),
      isHealthy(item, section) ? el("span", { class: "ready-tag ready-healthy" }, ui().filters.healthy) : null,
      item.sizes ? el("span", { class: "lrow-sizes" }, item.sizes.map(tr).join(" · ")) : null,
      item.creator ? el("span", { class: "lrow-sizes" }, `${ui().ideaBy}: `, el("bdi", null, item.creator)) : null,
      state.favs.has(item.id) ? el("span", { class: "lrow-fav", "aria-label": ui().filters.fav }, icon("heart")) : null,
    ];
    return el("div", { class: "lrow" + (inCart(item.id) ? " in-cart" : "") + (short ? " sub" : ""), "data-id": item.id },
      el("button", { type: "button", class: "lrow-img", "aria-label": tr(item), onclick: () => openSheet(item.id) },
        item.img ? el("img", { src: item.img, alt: "", loading: "lazy", decoding: "async", width: "144", height: "144" })
          : el("span", { class: "card-img-empty" }, section.emoji || "🍽️")),
      el("button", { type: "button", class: "lrow-text", onclick: () => openSheet(item.id) },
        el("span", { class: "lrow-name" }, short ? tr(short) : tr(item)),
        el("span", { class: "lrow-meta" }, meta)),
      rowAction(item.id));
  }

  // A list of dishes; flavours of one dish sit under one heading, each still its own row.
  function dishList(entries, opts) {
    const out = [];
    const seen = new Set();
    entries.forEach(({ item, section }) => {
      const fam = !(opts && opts.flat) && familyOf.get(item.id);
      if (fam) {
        if (seen.has(fam.family.id)) return;
        const members = entries.filter((e) => familyOf.has(e.item.id) && familyOf.get(e.item.id).family === fam.family);
        if (members.length > 1) {
          seen.add(fam.family.id);
          out.push(el("div", { class: "lfam" }, el("span", { class: "lfam-name" }, tr(fam.family)), el("span", { class: "lfam-n" }, ui().kindsN(members.length))));
          members.forEach((m) => out.push(dishRow(m.item, m.section, familyOf.get(m.item.id).member)));
          return;
        }
      }
      out.push(dishRow(item, section));
    });
    return el("div", { class: "lrows" }, out);
  }

  function quickAdd(id) {
    const wasNew = !inCart(id);
    addItem(id);
    if (wasNew) showPairs(id);
  }

  // "Goes well with": a small strip under the row of a dish that was just added.
  function showPairs(id) {
    document.querySelectorAll(".pairs").forEach((p) => p.remove());
    const pairs = pairsFor(id);
    const row = document.querySelector(`.lrow[data-id="${CSS.escape(id)}"]`);
    if (!pairs.length || !row) return;
    const u = ui();
    const strip = el("div", { class: "pairs" },
      el("div", { class: "pairs-head" }, el("span", null, u.goesWith),
        el("button", { type: "button", class: "pairs-x", "aria-label": u.close, onclick: () => strip.remove() }, icon("close"))),
      el("div", { class: "pairs-row" }, pairs.map((p) => {
        const it = byId.get(p).item;
        const b = el("button", {
          type: "button", class: "pair",
          onclick: () => { addItem(p, true); toast(u.added(tr(it))); b.classList.add("done"); b.disabled = true; },
        }, it.img ? el("img", { src: it.img, alt: "", loading: "lazy" }) : null, el("span", null, tr(it)), el("span", { class: "pair-ico" }, icon("plus")));
        return b;
      })));
    row.after(strip);
  }

  // The row of ways (or categories) at the top of an inner page: switch between them in place.
  // Switching replaces the address, so the back button still returns to the menu home.
  function topNav(items, active, onPick) {
    const u = ui();
    const nav = el("nav", { class: "topnav", "aria-label": u.menu },
      el("div", { class: "topnav-row" },
        el("button", { type: "button", class: "tnav home", onclick: () => goMenu() }, icon("grid"), u.menu),
        items.map((it) => el("button", {
          type: "button", class: "tnav", "aria-current": it.id === active ? "page" : null,
          onclick: () => { if (it.id !== active) onPick(it.id); },
        }, it.thumb ? el("img", { src: it.thumb, alt: "", loading: "lazy" }) : icon(it.icon), it.label))));
    requestAnimationFrame(() => {
      const on = nav.querySelector('[aria-current="page"]');
      if (on) on.scrollIntoView({ block: "nearest", inline: "center" });
    });
    return nav;
  }
  const wayNav = (active) => topNav(WAYS.map((w) => ({ id: w.id, icon: w.icon, label: wayLabel(w.id) })), active, (id) => goMenu({ way: id }, true));
  function catNav(active) {
    const cats = CATEGORIES.slice();
    if (shownItems(IDEAS_SECTION).length) cats.push({ id: "ideas", ar: IDEAS_SECTION.ar, en: IDEAS_SECTION.en, cover: shownItems(IDEAS_SECTION)[0].id });
    return topNav(cats.map((c) => { const hit = byId.get(c.cover); return { id: c.id, label: tr(c), thumb: hit && hit.item.img }; }), active, (id) => goMenu({ cat: id }, true));
  }

  function renderHome() {
    const u = ui();
    const tiles = CATEGORIES.slice();
    if (shownItems(IDEAS_SECTION).length) tiles.push({ id: "ideas", ar: IDEAS_GROUP.sections[0].ar, en: IDEAS_GROUP.sections[0].en, cover: shownItems(IDEAS_SECTION)[0].id, ideas: true });
    return [
      el("div", { class: "ways-row" }, WAYS.map((w) => el("button", { type: "button", class: "way-chip", onclick: () => goMenu({ way: w.id }) },
        el("span", { class: "way-chip-ico" }, icon(w.icon)),
        el("span", { class: "way-chip-label" }, wayLabel(w.id))))),
      el("h2", { class: "block-title home-title" }, u.categories),
      el("div", { class: "tiles" }, tiles.map((c) => {
        const n = c.ideas ? shownItems(IDEAS_SECTION).length : catItems(c).length;
        const cover = byId.get(c.cover);
        return el("button", { type: "button", class: "tile", onclick: () => goMenu({ cat: c.id }) },
          cover && cover.item.img ? el("img", { src: cover.item.full || cover.item.img, alt: "", loading: "lazy", decoding: "async" }) : null,
          el("span", { class: "tile-shade" }),
          el("span", { class: "tile-text" }, el("span", { class: "tile-name" }, tr(c)), el("span", { class: "tile-n" }, u.itemsN(n))));
      })),
    ];
  }

  // A category: one row of filters (its sections, then ready / healthy / favourites), then the list.
  function renderCategory(c) {
    const u = ui();
    let entries = c.ideas ? shownItems(IDEAS_SECTION).map((item) => ({ item, section: IDEAS_SECTION, group: IDEAS_GROUP })) : catItems(c);
    const sections = [...new Set(entries.map((e) => e.section))];
    if (state.sub !== "all" && !sections.some((s) => s.id === state.sub)) state.sub = "all";
    const pool = state.sub === "all" ? entries : entries.filter((e) => e.section.id === state.sub);
    const has = (fn) => pool.some(({ item, section }) => fn(item, section));
    const toggles = [
      has((i, s) => readiness(i, s) === "cook") && has((i, s) => readiness(i, s) === "eat") ? ["cook", "flame"] : null,
      has((i, s) => readiness(i, s) === "cook") && has((i, s) => readiness(i, s) === "eat") ? ["eat", "plate"] : null,
      has((i, s) => isHealthy(i, s)) && !has((i, s) => !isHealthy(i, s)) ? null : has((i, s) => isHealthy(i, s)) ? ["healthy", "leaf"] : null,
      has((i) => state.favs.has(i.id)) ? ["fav", "heart"] : null,
    ].filter(Boolean);
    state.flags.forEach((f) => { if (!toggles.some(([k]) => k === f)) state.flags.delete(f); });
    let shown = pool;
    state.flags.forEach((f) => {
      shown = shown.filter(({ item, section }) => (f === "fav" ? state.favs.has(item.id) : wayMatch(f, item, section)));
    });

    const chips = [];
    if (sections.length > 1) {
      chips.push(el("button", { type: "button", class: "fchip", "aria-pressed": String(state.sub === "all"), onclick: () => { state.sub = "all"; renderBrowse(); } }, u.all, el("b", null, entries.length)));
      sections.forEach((s) => chips.push(el("button", { type: "button", class: "fchip", "aria-pressed": String(state.sub === s.id), onclick: () => { state.sub = s.id; renderBrowse(); } },
        tr(s), el("b", null, entries.filter((e) => e.section === s).length))));
    }
    if (sections.length > 1 && toggles.length) chips.push(el("span", { class: "fsep", "aria-hidden": "true" }));
    toggles.forEach(([k, ic]) => chips.push(el("button", {
      type: "button", class: "fchip toggle", "aria-pressed": String(state.flags.has(k)),
      onclick: () => { if (state.flags.has(k)) state.flags.delete(k); else { if (k === "cook") state.flags.delete("eat"); if (k === "eat") state.flags.delete("cook"); state.flags.add(k); } renderBrowse(); },
    }, icon(ic), u.filters[k])));

    return [
      catNav(c.id),
      el("div", { class: "page-head" }, el("h1", { class: "page-title" }, tr(c)), el("span", { class: "count" }, shown.length)),
      chips.length ? el("div", { class: "fbar" }, el("div", { class: "fbar-row" }, chips)) : null,
      shown.length ? dishList(shown) : el("div", { class: "empty" }, el("p", { class: "empty-title" }, u.noResults), el("p", null, u.noResultsHint)),
    ];
  }

  // A way (ready to cook, ready to eat, healthy): its dishes from every category, with a bar of
  // categories that follows the scroll.
  function renderWay(way) {
    const u = ui();
    const blocks = CATEGORIES.map((c) => ({ c, entries: catItems(c).filter(({ item, section }) => wayMatch(way, item, section)) })).filter((b) => b.entries.length);
    const total = blocks.reduce((n, b) => n + b.entries.length, 0);
    return [
      wayNav(way),
      el("div", { class: "page-head" }, el("h1", { class: "page-title" }, wayLabel(way)), el("span", { class: "count" }, total)),
      el("p", { class: "page-sub" }, u.wayDesc[way]),
      el("nav", { class: "fbar cat-tabs" }, el("div", { class: "fbar-row" }, blocks.map(({ c, entries }) =>
        el("button", { type: "button", class: "fchip", "data-for": c.id, onclick: () => jumpTo(c.id) }, tr(c), el("b", null, entries.length))))),
      blocks.map(({ c, entries }) => el("section", { class: "way-block", id: "s-" + c.id, "data-section": c.id },
        el("h2", { class: "way-block-title" }, tr(c)), dishList(entries))),
    ];
  }

  function renderBundlesPage(way) {
    const u = ui();
    return [
      wayNav(way),
      el("div", { class: "page-head" }, el("h1", { class: "page-title" }, wayLabel(way)), el("span", { class: "count" }, COLLECTIONS.filter((c) => c.kind === way).length)),
      el("p", { class: "page-sub" }, u.wayDesc[way]),
      el("div", { class: "bundle-grid" }, COLLECTIONS.filter((c) => c.kind === way).map(bundleCard)),
    ];
  }

  // Search: intents first (they open a way, a category or bundles), then dishes by name.
  function renderSearch() {
    const u = ui();
    const q = state.search.trim();
    if (!q) {
      const recent = recentSearches();
      return [
        el("div", { class: "search-panel" },
          el("p", { class: "field-label" }, u.tryWords),
          el("div", { class: "choice-row" }, SEARCH_SUGGESTIONS[state.lang].map((s) => el("button", { type: "button", class: "choice small", onclick: () => setSearch(s) }, s))),
          recent.length ? [el("p", { class: "field-label" }, u.recent),
            el("div", { class: "choice-row" }, recent.map((s) => el("button", { type: "button", class: "choice small", onclick: () => setSearch(s) }, icon("repeat"), s)))] : null),
      ];
    }
    const words = norm(q).split(" ").filter(Boolean);
    const intents = intentsFor(q);
    const all = CATEGORIES.flatMap(catItems).concat(shownItems(IDEAS_SECTION).map((item) => ({ item, section: IDEAS_SECTION, group: IDEAS_GROUP })));
    const hits = all.filter(({ item, section }) => {
      const hay = [item.ar, item.en, section.ar, section.en].map(norm).join(" | ");
      return words.every((w) => hay.includes(w));
    });
    const cards = [];
    intents.forEach((x) => {
      if (x.way) {
        const n = wayCount(x.way);
        cards.push(el("button", { type: "button", class: "intent", onclick: () => { rememberSearch(q); goMenu({ way: x.way }); } },
          el("span", { class: "way-chip-ico" }, icon(WAYS.find((w) => w.id === x.way).icon)),
          el("span", { class: "intent-text" }, el("b", null, wayLabel(x.way)), el("span", null, isBundleWay(x.way) ? u.bundlesN(n) : u.itemsN(n))),
          icon("chevron", "flip-rtl")));
      } else if (x.cat) {
        const c = CATEGORIES.find((k) => k.id === x.cat);
        if (c) cards.push(el("button", { type: "button", class: "intent", onclick: () => { rememberSearch(q); goMenu({ cat: c.id }); } },
          el("span", { class: "way-chip-ico" }, icon("grid")),
          el("span", { class: "intent-text" }, el("b", null, tr(c)), el("span", null, u.itemsN(catItems(c).length))),
          icon("chevron", "flip-rtl")));
      }
    });
    const bundleWays = intents.filter((x) => x.way && isBundleWay(x.way)).map((x) => x.way);
    const bundles = COLLECTIONS.filter((c) => bundleWays.includes(c.kind));
    // When the words name a way but few dishes by name, show some of that way's dishes.
    let suggested = [];
    const listWay = intents.find((x) => x.way && !isBundleWay(x.way));
    if (listWay && hits.length < 4) suggested = all.filter(({ item, section }) => wayMatch(listWay.way, item, section) && !hits.some((h) => h.item === item)).slice(0, 12);
    return [
      hits.length || !cards.length ? el("p", { class: "result-count" }, u.results(hits.length)) : null,
      cards.length ? el("div", { class: "intents" }, cards) : null,
      bundles.length ? el("div", { class: "bundle-grid" }, bundles.map(bundleCard)) : null,
      hits.length ? dishList(hits, { flat: true }) : null,
      suggested.length ? [el("h2", { class: "way-block-title" }, u.suggestions), dishList(suggested, { flat: true })] : null,
      !hits.length && !cards.length ? el("div", { class: "empty" }, el("p", { class: "empty-title" }, u.noResults), el("p", null, u.noResultsHint)) : null,
    ];
  }
  function setSearch(s) {
    state.search = s;
    $("search").value = s;
    $("search-clear").hidden = false;
    rememberSearch(s);
    renderBrowse();
    window.scrollTo({ top: 0 });
  }

  let spyHandler = null;
  function renderBrowse() {
    const searching = !!state.search.trim() || state.searchOpen;
    const cat = state.cat && (CATEGORIES.find((c) => c.id === state.cat) || (state.cat === "ideas" ? { id: "ideas", ar: IDEAS_SECTION.ar, en: IDEAS_SECTION.en, ideas: true } : null));
    let body;
    if (searching) body = renderSearch();
    else if (cat) body = renderCategory(cat);
    else if (state.way && isBundleWay(state.way)) body = renderBundlesPage(state.way);
    else if (state.way) body = renderWay(state.way);
    else body = renderHome();
    $("main").replaceChildren(el("div", { class: "wrap browse" + (cat || state.way || searching ? " inner" : " home-menu") }, body));
    document.documentElement.style.setProperty("--topbar-h", $("topbar").getBoundingClientRect().height + "px");

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

  function goMenu(where, replace) {
    state.search = "";
    state.searchOpen = false;
    state.sub = "all";
    state.flags = new Set();
    const hash = where && where.cat ? "#menu-" + where.cat : where && where.way ? "#way-" + where.way : "#menu";
    if (location.hash === hash) { applyHash(); show("browse"); return; }
    if (replace) { history.replaceState(null, "", hash); applyHash(); show("browse"); return; }
    location.hash = hash;
  }

  function headerOffset() { return $("topbar").getBoundingClientRect().height + 8; }
  function jumpTo(id) {
    const target = $("s-" + id);
    if (!target) return;
    const bar = document.querySelector(".cat-tabs");
    const y = target.getBoundingClientRect().top + window.scrollY - headerOffset() - (bar ? bar.offsetHeight : 0);
    window.scrollTo({ top: y, behavior: reduceMotion() ? "auto" : "smooth" });
  }
  let lastSpy = null;
  function spy() {
    if (state.view !== "browse") return;
    const up = $("to-top");
    if (up) up.hidden = window.scrollY < 900;
    const bar = document.querySelector(".cat-tabs");
    if (!bar) return;
    const line = headerOffset() + bar.offsetHeight + 24;
    let current = null;
    document.querySelectorAll(".way-block[data-section]").forEach((s) => {
      if (s.getBoundingClientRect().top <= line) current = s.dataset.section;
    });
    if (!current) { const first = document.querySelector(".way-block[data-section]"); current = first && first.dataset.section; }
    if (current === lastSpy && bar.querySelector('.fchip[aria-pressed="true"]')) return;
    lastSpy = current;
    bar.querySelectorAll(".fchip").forEach((b) => {
      const on = b.dataset.for === current;
      b.setAttribute("aria-pressed", String(on));
      if (on) {
        const row = bar.querySelector(".fbar-row");
        const r = b.getBoundingClientRect(), nr = row.getBoundingClientRect();
        if (r.left < nr.left || r.right > nr.right) row.scrollBy({ left: r.left - nr.left - (nr.width - r.width) / 2, behavior: "smooth" });
      }
    });
  }

  function bundleCard(c) {
    const items = bundleItems(c);
    const pics = items.map((id) => byId.get(id).item).filter((i) => i.img).slice(0, 3);
    return el("button", { type: "button", class: "bundle-card", onclick: () => openBundle(c.id) },
      el("span", { class: "bundle-pics n" + pics.length }, pics.map((i) => el("img", { src: i.img, alt: "", loading: "lazy", decoding: "async" }))),
      el("span", { class: "bundle-info" },
        el("span", { class: "bundle-kind" }, ui().kinds[c.kind] || ""),
        el("span", { class: "bundle-name" }, tr(c)),
        el("span", { class: "bundle-count" }, ui().itemsN(items.length)))
    );
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
      el("p", { class: "field-label" }, u.orderNote),
      el("textarea", {
        class: "note order-note", rows: "2", placeholder: u.orderNotePh,
        oninput: (e) => {
          state.cartNote = e.target.value;
          saveCartNote();
          const msg = buildMessage();
          const pv = document.querySelector(".preview");
          if (pv) pv.textContent = msg;
          const wa = document.querySelector(".send-bar .btn.whatsapp");
          if (wa) wa.href = "https://wa.me/?text=" + encodeURIComponent(msg);
        },
      }, state.cartNote),
      el("details", { class: "preview-box" },
        el("summary", null, u.preview),
        el("div", { class: "preview", dir: "rtl", lang: "ar" }, message),
        el("button", { type: "button", class: "btn outline small", onclick: () => copyMessage(buildMessage()) }, icon("copy"), u.copy)),
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
    state.cartNote = "";
    saveCart();
    saveCartNote();
    render();
  }

  // ---------- Sheets ----------
  function openPanel(build, label) {
    const backdrop = $("sheet");
    const close = () => { backdrop.hidden = true; backdrop.replaceChildren(); document.body.style.overflow = ""; };
    // The sheet element is created once; redraws only replace what is inside it, so its
    // slide-up animation and scroll position are kept while people tap inside it.
    const sheet = el("div", { class: "sheet", role: "dialog", "aria-modal": "true", "aria-label": label });
    const draw = () => {
      const scroll = sheet.scrollTop;
      const focused = document.activeElement && sheet.contains(document.activeElement) && document.activeElement.tagName === "INPUT"
        ? [...sheet.querySelectorAll("input")].indexOf(document.activeElement) : -1;
      sheet.replaceChildren(...[
        el("div", { class: "handle" }),
        el("button", { type: "button", class: "sheet-close icon-btn small", "aria-label": ui().close, onclick: close }, icon("close")),
        el("div", { class: "sheet-body" }, build({ close, draw })),
      ]);
      sheet.scrollTop = scroll;
      if (focused >= 0) { const inp = sheet.querySelectorAll("input")[focused]; if (inp) inp.focus(); }
    };
    backdrop.replaceChildren(sheet);
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

  // ---------- Smart bundles ----------
  // A bundle is a list of slots (a day of the week, or a role such as "rice" or "dessert"), each
  // with a pool of dishes that fit it. The app picks one dish per slot, can re-pick them all
  // (refresh), and offers better alternatives for one slot (switch). Picks avoid dishes from
  // recent orders, lean towards favourites and healthy dishes, and avoid dishes the person
  // switched away from before. Everything is stored on the device only.
  const PORTIONS = Object.assign({ kg: 4, plate: 3, piece: 4, feast: 0.55 }, MENU.portions || {});
  const DAY_NAMES = {
    ar: ["السبت", "الأحد", "الاتنين", "التلات", "الأربع", "الخميس", "الجمعة"],
    en: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  };
  // Quick notes for every dish in a bundle. The chef reads Arabic, so the note text is always `ar`.
  const BUNDLE_NOTES = [
    { ar: "قليل الملح", en: "Low salt" },
    { ar: "من غير بصل", en: "No onions" },
    { ar: "قليل الزيت", en: "Less oil" },
    { ar: "سبايسي خفيف", en: "Mildly spicy" },
  ];
  const REASONS = {
    fav: { ar: "من مفضلتك", en: "A favourite" },
    fresh: { ar: "مطلبتهاش من فترة", en: "Not ordered lately" },
    healthier: { ar: "صحي أكتر", en: "Healthier" },
    variety: { ar: "تنويع", en: "Something different" },
  };

  const orderHistory = () => (store.get("sabah-history", []) || []).filter((h) => h && Array.isArray(h.ids));
  function recentIds(n) {
    const out = new Set();
    orderHistory().slice(-n).forEach((h) => h.ids.forEach((id) => out.add(id)));
    return out;
  }
  const skipped = () => new Set(store.get("sabah-skips", []) || []);
  function addSkip(id) {
    const list = (store.get("sabah-skips", []) || []).filter((x) => x !== id);
    list.push(id);
    store.set("sabah-skips", list.slice(-40));
  }
  const slotPool = (slot) => (slot.pool || []).filter((id) => byId.has(id) && !byId.get(id).item.removed);
  const isHealthyBundle = (c) => /healthy/.test(c.id);

  function scoreDish(id, c) {
    const { item, section } = byId.get(id);
    let s = 0;
    if (state.favs.has(id)) s += 2;
    if (orderHistory().length) {
      if (!recentIds(3).has(id)) s += 1.5;
      if (recentIds(1).has(id)) s -= 2;
    }
    if (isHealthy(item, section)) s += isHealthyBundle(c) ? 2 : 0.6;
    if (skipped().has(id)) s -= 2.5;
    return s;
  }

  // Why a dish is suggested instead of `current`, shown as small tags.
  function reasonsFor(id, current) {
    const out = [];
    const { item, section } = byId.get(id);
    if (state.favs.has(id)) out.push("fav");
    if (current) {
      const cur = byId.get(current);
      if (isHealthy(item, section) && !isHealthy(cur.item, cur.section)) out.push("healthier");
    }
    if (orderHistory().length && !recentIds(3).has(id)) out.push("fresh");
    if (!out.length) out.push("variety");
    return out.slice(0, 2);
  }

  function pickFor(slot, c, taken, exclude, rotate) {
    const pool = slotPool(slot);
    const options = pool.filter((id) => !taken.has(id) && id !== exclude);
    if (!options.length) return exclude && pool.includes(exclude) ? exclude : pool[0];
    const scored = options.map((id, i) => ({ id, s: scoreDish(id, c) - i * 0.05 + (rotate ? Math.random() * 1.6 : 0) }));
    scored.sort((a, b) => b.s - a.s);
    return scored[0].id;
  }

  // The bundle's current picks: remembered on the device, or picked fresh.
  function bundlePicks(c) {
    const saved = (store.get("sabah-bundles", {}) || {})[c.id];
    if (Array.isArray(saved) && saved.length === c.slots.length && saved.every((id, i) => slotPool(c.slots[i]).includes(id))) return saved;
    const taken = new Set();
    return c.slots.map((slot) => { const id = pickFor(slot, c, taken, null, false); taken.add(id); return id; });
  }
  function saveBundlePicks(c, picks) {
    const all = store.get("sabah-bundles", {}) || {};
    all[c.id] = picks;
    store.set("sabah-bundles", all);
  }
  const bundleItems = (c) => bundlePicks(c).filter(Boolean);

  function autoQty(id, c, people) {
    const { item, section, group } = byId.get(id);
    const unit = defaultUnit(item, section, group);
    const units = (people * (c.kind === "feast" ? PORTIONS.feast : 1)) / (PORTIONS[unit] || 3);
    if (unit === "kg") return Math.max(0.5, Math.ceil(units * 2 - 0.2) / 2);
    return Math.max(1, Math.ceil(units - 0.15));
  }

  function openBundle(collectionId) {
    const c = COLLECTIONS.find((x) => x.id === collectionId);
    if (!c) return;
    const isWeek = c.kind === "week";
    const peopleKey = isWeek ? "sabah-people" : "sabah-guests";
    const b = {
      picks: bundlePicks(c).slice(),
      on: c.slots.map(() => true),
      locks: c.slots.map(() => false),
      mode: store.get("sabah-qty-mode", "auto") === "manual" ? "manual" : "auto",
      people: Math.min(30, Math.max(1, Number(store.get(peopleKey, isWeek ? 4 : 8)) || (isWeek ? 4 : 8))),
      qty: [],
      notes: new Set(),
      noteText: "",
      when: "",
      open: -1,
      changed: new Set(),
    };
    const fillQty = () => { b.qty = b.picks.map((id) => (b.mode === "auto" ? autoQty(id, c, b.people) : 1)); };
    fillQty();

    openPanel(({ close, draw }) => {
      const u = ui();
      const L = state.lang;
      if (b.changed.size) setTimeout(() => { b.changed = new Set(); }, 50);
      const T = BUNDLE_UI[L];
      const n = b.on.filter(Boolean).length;
      const unitOf = (id) => { const { item, section, group } = byId.get(id); return defaultUnit(item, section, group); };
      const stepOf = (id) => (unitOf(id) === "kg" ? 0.5 : 1);
      const unitLabel = (id) => tr(KITCHEN_UNITS.find((x) => x.id === unitOf(id)) || KITCHEN_UNITS[0]);

      const refresh = () => {
        const taken = new Set(b.picks.filter((_, i) => b.locks[i] || !b.on[i]));
        b.picks = b.picks.map((cur, i) => {
          if (b.locks[i] || !b.on[i]) return cur;
          const id = pickFor(c.slots[i], c, taken, cur, true);
          taken.add(id);
          return id;
        });
        if (b.mode === "auto") fillQty();
        b.open = -1;
        const before = bundlePicks(c);
        b.changed = new Set(b.picks.map((id, i) => (id !== before[i] ? i : -1)).filter((i) => i >= 0));
        saveBundlePicks(c, b.picks);
        buzz();
        draw();
      };
      const swap = (i, id) => {
        addSkip(b.picks[i]);
        b.picks[i] = id;
        if (b.mode === "auto") b.qty[i] = autoQty(id, c, b.people);
        b.open = -1;
        b.changed = new Set([i]);
        saveBundlePicks(c, b.picks);
        buzz();
        draw();
      };
      const alternatives = (i) => {
        const taken = new Set(b.picks.filter((_, k) => k !== i));
        const cur = b.picks[i];
        return slotPool(c.slots[i]).filter((id) => id !== cur && !taken.has(id))
          .map((id, k) => ({ id, s: scoreDish(id, c) - k * 0.05 }))
          .sort((x, y) => y.s - x.s).slice(0, 3).map((x) => x.id);
      };

      const rows = c.slots.map((slot, i) => {
        const id = b.picks[i];
        const { item, section } = byId.get(id);
        const alts = b.open === i ? alternatives(i) : [];
        return el("div", { class: "brow" + (b.on[i] ? "" : " off") + (b.locks[i] ? " locked" : "") },
          el("div", { class: "brow-main" },
            el("button", { type: "button", class: "tick-btn", "aria-pressed": String(b.on[i]), "aria-label": tr(item), onclick: () => { b.on[i] = !b.on[i]; draw(); } }, icon("check")),
            el("img", { class: "brow-img" + (b.changed.has(i) ? " fresh" : ""), src: item.img, alt: "", loading: "lazy" }),
            el("div", { class: "brow-text" },
              el("span", { class: "brow-slot" }, isWeek && slot.day !== undefined ? DAY_NAMES[L][slot.day] : tr(slot)),
              el("button", { type: "button", class: "brow-name", onclick: () => openSheet(id) }, tr(item)),
              el("span", { class: "brow-tags" }, readyTag(item, section),
                reasonsFor(id, null).filter((r) => r !== "variety").map((r) => el("span", { class: "why why-" + r }, tr(REASONS[r]))))),
            el("div", { class: "brow-tools" },
              el("button", { type: "button", class: "icon-btn small" + (b.locks[i] ? " active" : ""), "aria-pressed": String(b.locks[i]), "aria-label": T.lock, title: T.lock, onclick: () => { b.locks[i] = !b.locks[i]; draw(); } }, icon(b.locks[i] ? "lock" : "unlock")),
              slotPool(slot).length > 1 ? el("button", { type: "button", class: "icon-btn small" + (b.open === i ? " active" : ""), "aria-expanded": String(b.open === i), "aria-label": T.switch, title: T.switch, onclick: () => { b.open = b.open === i ? -1 : i; draw(); } }, icon("swap")) : null)
          ),
          b.on[i] ? el("div", { class: "brow-qty" },
            el("button", { type: "button", class: "qbtn", "aria-label": "−", onclick: () => { b.qty[i] = Math.max(stepOf(id), Math.round((b.qty[i] - stepOf(id)) * 10) / 10); draw(); } }, icon("minus")),
            el("span", { class: "qval" }, el("b", null, fmtQty(b.qty[i])), " ", unitLabel(id)),
            el("button", { type: "button", class: "qbtn", "aria-label": "+", onclick: () => { b.qty[i] = Math.round((b.qty[i] + stepOf(id)) * 10) / 10; draw(); } }, icon("plus"))) : null,
          alts.length ? el("div", { class: "alts" },
            el("p", { class: "alts-title" }, T.better),
            alts.map((aid) => {
              const a = byId.get(aid).item;
              return el("button", { type: "button", class: "alt", onclick: () => swap(i, aid) },
                el("img", { src: a.img, alt: "", loading: "lazy" }),
                el("span", { class: "alt-name" }, tr(a)),
                el("span", { class: "brow-tags" }, reasonsFor(aid, id).map((r) => el("span", { class: "why why-" + r }, tr(REASONS[r])))));
            })) : null
        );
      });

      return [
        el("span", { class: "eyebrow" }, u.kinds[c.kind] || ""),
        el("h2", { class: "sheet-title" }, tr(c)),
        c.desc ? el("p", { class: "sheet-desc" }, tr(c.desc)) : null,

        el("div", { class: "bctl" },
          el("button", { type: "button", class: "btn tinted small", onclick: refresh }, icon("repeat"), T.refresh),
          el("span", { class: "bctl-hint" }, T.refreshHint)),

        el("div", { class: "bqty" },
          el("div", { class: "segmented small", role: "tablist" },
            ["auto", "manual"].map((m) => el("button", {
              type: "button", role: "tab", "aria-selected": String(b.mode === m),
              onclick: () => { b.mode = m; store.set("sabah-qty-mode", m); fillQty(); draw(); },
            }, T.modes[m]))),
          b.mode === "auto" ? el("div", { class: "people" },
            el("span", { class: "people-label" }, isWeek ? T.people : T.guests),
            el("button", { type: "button", class: "qbtn", "aria-label": "−", onclick: () => { b.people = Math.max(1, b.people - 1); store.set(peopleKey, b.people); fillQty(); draw(); } }, icon("minus")),
            el("b", { class: "people-n" }, b.people),
            el("button", { type: "button", class: "qbtn", "aria-label": "+", onclick: () => { b.people = Math.min(30, b.people + 1); store.set(peopleKey, b.people); fillQty(); draw(); } }, icon("plus"))) : null,
          el("p", { class: "bctl-hint" }, b.mode === "auto" ? T.autoHint(PORTIONS) : T.manualHint)),

        el("div", { class: "bundle-rows" }, rows),

        el("p", { class: "field-label" }, T.notesTitle),
        el("div", { class: "choice-row" }, BUNDLE_NOTES.map((nt, k) => el("button", {
          type: "button", class: "choice small", "aria-pressed": String(b.notes.has(k)),
          onclick: () => { if (b.notes.has(k)) b.notes.delete(k); else b.notes.add(k); draw(); },
        }, tr(nt)))),
        el("input", { class: "note", type: "text", value: b.noteText, placeholder: T.notePh, oninput: (e) => { b.noteText = e.target.value; } }),
        isWeek ? el("p", { class: "bctl-hint" }, T.dayHint) : [
          el("p", { class: "field-label" }, T.when),
          el("input", { class: "note", type: "text", value: b.when, placeholder: T.whenPh, oninput: (e) => { b.when = e.target.value; } }),
        ],

        el("div", { class: "sheet-actions" },
          el("button", {
            type: "button", class: "btn solid wide", disabled: !n,
            onclick: () => {
              const extra = [...b.notes].sort().map((k) => BUNDLE_NOTES[k].ar);
              if (b.noteText.trim()) extra.push(b.noteText.trim());
              c.slots.forEach((slot, i) => {
                if (!b.on[i]) return;
                const id = b.picks[i];
                const entry = makeEntry(id);
                entry.qty = b.qty[i];
                const parts = [];
                if (isWeek && slot.day !== undefined) parts.push("يوم " + DAY_NAMES.ar[slot.day]);
                entry.note = parts.concat(extra).join(" · ");
                const idx = state.cart.findIndex((x) => x.id === id);
                if (idx >= 0) state.cart[idx] = entry;
                else state.cart.push(entry);
              });
              if (!isWeek && b.when.trim()) addOrderNote(`${tr2ar(c)}: ${b.when.trim()}`);
              saveBundlePicks(c, b.picks);
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
  const tr2ar = (obj) => obj.ar || obj.en || "";

  const BUNDLE_UI = {
    ar: {
      refresh: "غيّر الأصناف", refreshHint: "بيختار أصناف جديدة بدل اللي مش مقفولة، ويبعد عن اللي طلبته قريب.",
      lock: "ثبّت الصنف ده", switch: "بدّل الصنف", better: "بدايل أحسن",
      modes: { auto: "حسب عدد الأفراد", manual: "أنا هحدد الكميات" },
      people: "كام فرد؟", guests: "كام ضيف؟",
      autoHint: (p) => `الكميات تقريبية: الكيلو لـ ${p.kg} أفراد، والطبق لـ ${p.plate}. تقدر تعدّل أي صنف.`,
      manualHint: "كل صنف بيبدأ بكمية واحدة، وانت تزوّد أو تقلّل.",
      notesTitle: "ملاحظات للشيف على كل الأصناف", notePh: "ملاحظة تانية (اختياري)",
      dayHint: "كل صنف بيتكتب جنبه اليوم بتاعه في رسالة الشيف.",
      when: "ميعاد العزومة", whenPh: "مثال: الجمعة الساعة ٢ الضهر",
    },
    en: {
      refresh: "Refresh dishes", refreshHint: "Picks new dishes for everything not locked, avoiding what you ordered recently.",
      lock: "Keep this dish", switch: "Switch dish", better: "Better options",
      modes: { auto: "By number of people", manual: "I'll set amounts" },
      people: "How many people?", guests: "How many guests?",
      autoHint: (p) => `Amounts are estimates: a kilo feeds ${p.kg}, a plate feeds ${p.plate}. You can change any dish.`,
      manualHint: "Each dish starts at one; adjust as you like.",
      notesTitle: "Notes for the chef on every dish", notePh: "Another note (optional)",
      dayHint: "Each dish gets its day written next to it in the chef's message.",
      when: "Date and time of the feast", whenPh: "e.g. Friday at 2 pm",
    },
  };

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
    goMenu(way ? { way } : null);
  }

  let homeHandler = null;
  let homeWheel = null;
  let homeKeys = null;
  function stopHome() {
    if (homeHandler) {
      window.removeEventListener("scroll", homeHandler);
      window.removeEventListener("resize", homeHandler);
      homeHandler = null;
    }
    if (homeWheel) { window.removeEventListener("wheel", homeWheel); homeWheel = null; }
    if (homeKeys) { document.removeEventListener("keydown", homeKeys); homeKeys = null; }
  }

  function renderWelcome() {
    const h = HOME[state.lang];
    const u = ui();
    $("fab").replaceChildren();
    const bundle = (id) => COLLECTIONS.find((c) => c.id === id);
    const week = bundle(HOME_WEEK);
    const feast = bundle(HOME_FEAST);
    const weekIds = week ? bundleItems(week).slice(0, 7) : [];
    const feastIds = feast ? bundleItems(feast).slice(0, 6) : [];
    const nCook = countWhere((i, s) => readiness(i, s) === "cook");
    const nEat = countWhere((i, s) => readiness(i, s) === "eat");
    const nHealthy = countWhere((i, s) => isHealthy(i, s));

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
      el("div", { class: "weeklist" }, weekIds.map((id, i) => el("div", { class: "wd", style: `--i:${i}` },
        el("span", { class: "wd-day" }, h.days[i]),
        el("span", { class: "wd-ph" }, el("img", { src: photo(id), alt: "", loading: "lazy" })),
        el("span", { class: "wd-name" }, tr(byId.get(id).item))))),
      [el("h2", { class: "h2" }, h.weekTitle), el("p", { class: "lead" }, h.weekText),
        el("div", { class: "stop-ctas" },
          week ? btn(h.weekBtn, "solid", () => openBundle(HOME_WEEK), "plus") : null,
          btn(h.weekMore, "glass", () => startWith("week")))]);

    const feastStop = stop("feast",
      el("div", { class: "feast" },
        el("div", { class: "feast-table" }, feastIds.map((id, i) => el("div", { class: "fd f" + i, style: `--i:${i}` }, el("img", { src: photo(id), alt: "", loading: "lazy" })))),
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
    const journey = el("section", { class: "journey", style: `--n:${STOPS.length}` }, stage);
    $("main").replaceChildren(el("div", { class: "home" }, journey));

    // One stop per swipe: the page snaps to each stop (native scroll snapping, which is smooth on
    // phones), and the stop's moment then plays by itself. Nothing else moves until the next swipe.
    const snaps = STOPS.map((s, i) => el("div", { class: "snap", "aria-hidden": "true", style: `--i:${i}`, "data-snap": s }));
    journey.append(...snaps);

    const stopEls = {};
    journey.querySelectorAll("[data-stop]").forEach((n) => { stopEls[n.dataset.stop] = n; });
    const railBtns = [...rail.querySelectorAll(".jr")];
    const feastCount = journey.querySelector(".feast-count");
    const bg = stage.querySelector(".jbg");
    let active = -1;
    let countTimers = [];

    function activate(idx) {
      if (idx === active) return;
      active = idx;
      const name = STOPS[idx];
      STOPS.forEach((s, i) => stopEls[s].classList.toggle("active", i === idx));
      railBtns.forEach((b) => b.classList.toggle("active", b.dataset.for === name));
      rail.classList.toggle("at-end", name === "close");
      // The background glow drifts a little with each stop, so the scene feels like one place.
      bg.style.transform = `translate(${idx * -2.5}%, ${idx * 2}%) scale(${1 + idx * 0.02})`;
      // The feast counter counts up with the dishes landing on the table.
      countTimers.forEach(clearTimeout);
      countTimers = [];
      const all = journey.querySelectorAll(".fd").length;
      const say = (n) => { feastCount.textContent = HOME[state.lang].onTable(n, all); };
      say(0);
      if (name === "feast") {
        const quick = reduceMotion();
        for (let n = 1; n <= all; n++) {
          if (quick) say(all);
          else countTimers.push(setTimeout(() => say(n), 600 + (n - 1) * 240 + 300));
        }
      }
    }

    function tick() {
      if (state.view !== "welcome") return;
      const top = $("topbar").getBoundingClientRect().height;
      document.documentElement.style.setProperty("--topbar-h", top + "px");
      const stageH = stage.offsetHeight || 1;
      const into = top - journey.getBoundingClientRect().top;
      activate(Math.min(STOPS.length - 1, Math.max(0, Math.round(into / stageH))));
    }

    function jumpToStop(k) {
      const target = journey.querySelector(`[data-snap="${k}"]`);
      if (target) target.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", block: "start" });
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

    // Mouse wheels and trackpads: one gesture moves exactly one stop. The trackpad's momentum
    // after a swipe is ignored until the wheel goes quiet, so a single flick never skips ahead.
    // (Phones use the native snapping above.)
    const step = (dir) => {
      const next = Math.min(STOPS.length - 1, Math.max(0, active + dir));
      if (next !== active) jumpToStop(STOPS[next]);
      else if (dir > 0 && next === STOPS.length - 1) jumpToStop(STOPS[next]);
    };
    let wheelLock = false;
    let lastWheel = 0;
    let accum = 0;
    let unlockTimer = 0;
    homeWheel = (e) => {
      if (e.ctrlKey || $("sheet").contains(e.target) || !$("sheet").hidden) return;
      const inJourney = journey.getBoundingClientRect().bottom > window.innerHeight - 2;
      if (!inJourney && e.deltaY > 0) return;
      e.preventDefault();
      lastWheel = performance.now();
      if (wheelLock) return;
      accum += e.deltaY;
      if (Math.abs(accum) < 18) return;
      const dir = accum > 0 ? 1 : -1;
      accum = 0;
      wheelLock = true;
      step(dir);
      const jumpedAt = performance.now();
      clearInterval(unlockTimer);
      unlockTimer = setInterval(() => {
        const now = performance.now();
        if (now - jumpedAt > 750 && now - lastWheel > 200) { wheelLock = false; clearInterval(unlockTimer); }
      }, 60);
    };
    window.addEventListener("wheel", homeWheel, { passive: false });
    homeKeys = (e) => {
      if (!$("sheet").hidden || /INPUT|TEXTAREA|SELECT|BUTTON/.test((document.activeElement || {}).tagName || "")) return;
      if (["ArrowDown", "PageDown", " "].includes(e.key)) { e.preventDefault(); step(1); }
      else if (["ArrowUp", "PageUp"].includes(e.key)) { e.preventDefault(); step(-1); }
    };
    document.addEventListener("keydown", homeKeys);
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
    const before = state.cat + "|" + state.way;
    applyHash();
    if (v === "browse" && (state.cat + "|" + state.way) !== before) {
      state.search = ""; state.searchOpen = false; state.sub = "all"; state.flags = new Set();
    }
    show(v);
  });
  let searchTimer;
  $("search").addEventListener("input", (e) => {
    state.search = e.target.value;
    $("search-clear").hidden = !state.search;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { renderBrowse(); window.scrollTo({ top: 0 }); }, 120);
  });
  $("search").addEventListener("focus", () => {
    if (state.searchOpen) return;
    state.searchOpen = true;
    if (!state.search) { renderBrowse(); window.scrollTo({ top: 0 }); }
  });
  $("search").addEventListener("keydown", (e) => {
    if (e.key === "Enter") { rememberSearch(state.search); $("search").blur(); }
    if (e.key === "Escape") { state.search = ""; state.searchOpen = false; $("search").value = ""; $("search").blur(); renderBrowse(); }
  });
  $("search").addEventListener("blur", () => {
    // Leave the suggestions panel when nothing was typed (a tap on a suggestion runs first).
    setTimeout(() => {
      if (!state.search.trim() && state.searchOpen && document.activeElement !== $("search")) {
        state.searchOpen = false;
        if (state.view === "browse") renderBrowse();
      }
    }, 200);
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
