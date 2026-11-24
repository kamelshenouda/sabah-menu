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
  // Each dish lists the units it is sold in (`units` in data/menu.js, the first is the default);
  // "piece" takes the dish's own word and how many people one feeds from its `piece`.
  const UNIT_DEFS = {
    kg: { ar: "كيلو", en: "kg" },
    box: { ar: "علبة", en: "box" },
    tray: { ar: "صينية", en: "tray" },
    bag: { ar: "كيس", en: "bag" },
    loaf: { ar: "رغيف", en: "loaf" },
    piece: { ar: "قطعة", en: "piece" },
  };
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
    if (/^menu-[a-z0-9-]+$/.test(h) || /^way-[a-z]+$/.test(h) || /^plan(-setup)?$/.test(h)) return "browse";
    const v = HASH_VIEWS[h];
    if ((v === "ideas" || v === "admin") && !window.SabahIdeas) return "browse";
    if (v) return v;
    return "welcome";
  }
  function applyHash() {
    const h = location.hash.slice(1);
    state.cat = h.startsWith("menu-") ? h.slice(5) : null;
    state.way = h.startsWith("way-") ? h.slice(4) : null;
    state.plan = h === "plan" ? "week" : h === "plan-setup" ? "setup" : null;
  }

  // The last approved ideas list is kept on the device so the Ideas tab shows right away.
  const savedCart = (store.get("sabah-cart", []) || []).filter(Boolean);
  setIdeas(store.get("sabah-ideas", []), savedCart);

  const state = {
    lang: store.get("sabah-lang", "ar") === "en" ? "en" : "ar",
    view: "browse",
    cat: null,
    way: null,
    plan: null,
    sub: "all",
    flags: new Set(),
    search: "",
    searchOpen: false,
    cart: savedCart.filter((c) => byId.has(c.id)).map((c) => (c.unit ? { ...c, unit: normUnit(c.id, c.unit) } : c)),
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
  function unitIds(item) { return Array.isArray(item.units) && item.units.length ? item.units.filter((u) => UNIT_DEFS[u]) : ["box"]; }
  function defaultUnit(item) { return unitIds(item)[0]; }
  // A unit with the words to show and how many people one feeds.
  function unitInfo(id, u) {
    const hit = byId.get(id);
    const item = hit ? hit.item : {};
    const base = UNIT_DEFS[u] || UNIT_DEFS.box;
    if (u === "piece" && item.piece) return { id: u, ar: item.piece.ar, en: item.piece.en, feeds: item.piece.feeds || 1 };
    return { id: u, ar: base.ar, en: base.en, feeds: (MENU.portions || {})[u] || { kg: 4, box: 3, tray: 6, bag: 4, loaf: 1 }[u] || 1 };
  }
  const unitsOf = (id) => unitIds(byId.get(id).item).map((u) => unitInfo(id, u));
  // Older orders used "plate" and "piece" for everything; move them to a unit the dish has.
  function normUnit(id, u) {
    const hit = byId.get(id);
    if (!hit || isPacked(hit.group)) return u;
    const ok = unitIds(hit.item);
    if (ok.includes(u)) return u;
    if (u === "plate" && ok.includes("box")) return "box";
    if (u === "plate" && ok.includes("tray")) return "tray";
    return ok[0];
  }
  // "لكل كيلو حوالي 4 أفراد" or, for small pieces, "حوالي 3 قطعة لكل فرد".
  function feedsHint(id, u, lang = state.lang) {
    const info = unitInfo(id, u);
    const f = info.feeds;
    if (f === 1) return lang === "ar" ? `${info.ar} لكل فرد` : `1 ${info.en} per person`;
    if (lang === "ar") return f > 1 ? `لكل ${info.ar} حوالي ${fmtQty(f)} ${f === 2 ? "فردين" : "أفراد"}` : `حوالي ${Math.round(1 / f)} ${info.ar} لكل فرد`;
    return f > 1 ? `1 ${info.en} ≈ ${fmtQty(f)} people` : `≈ ${Math.round(1 / f)} ${info.en}s per person`;
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
    const unit = unitInfo(entry.id, normUnit(entry.id, entry.unit));
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
    if (byId.has(entry.id)) parts.push(...dishPrefDiffs(entry.id, lang));
    return parts;
  }

  // The order goes to the chef, who reads Arabic, so the message is always in Arabic
  // whatever language the screen is showing.
  function buildMessage() {
    const u = UI.ar;
    const blocks = [];
    const cook = cookBlockLines(state.cart.map((c) => c.id));
    if (cook.length) blocks.push(`🧂 *طريقة الطبخ للطلب كله*\n${cook.join("\n")}`);
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
    store.set("sabah-history", hist.slice(-12));
  }
  function lastOrder() {
    const last = store.get("sabah-last-order", null);
    if (!last || !Array.isArray(last.cart)) return null;
    const cart = last.cart.filter((c) => c && byId.has(c.id) && !byId.get(c.id).item.removed).map((c) => (c.unit ? { ...c, unit: normUnit(c.id, c.unit) } : c));
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
    { cat: "eggs-legumes", words: ["فطار", "فطور", "بيض", "breakfast", "eggs"] },
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

  // A category's dishes: its sections, minus `exclude`, plus `include` (dishes from other sections,
  // shown under the category's `includeLabel` in its filters). `sub` is what the filters group by.
  function catItems(c) {
    const skip = new Set(c.exclude || []);
    const out = c.sections.flatMap((sid) => {
      const hit = sectionById.get(sid);
      return hit ? shownItems(hit.section).filter((item) => !skip.has(item.id)).map((item) => ({ item, section: hit.section, group: hit.group, sub: hit.section })) : [];
    });
    const extra = { id: "more-" + c.id, ar: (c.includeLabel || {}).ar || "", en: (c.includeLabel || {}).en || "" };
    (c.include || []).forEach((id) => {
      const hit = byId.get(id);
      if (hit && !hit.item.removed) out.push({ item: hit.item, section: hit.section, group: hit.group, sub: c.includeLabel ? extra : hit.section });
    });
    // `subGroups` regroup a category's dishes by kind (e.g. chicken vs beef), whatever section they're in.
    const subOf = new Map();
    (c.subGroups || []).forEach((g) => g.ids.forEach((id) => subOf.set(id, g)));
    if (!subOf.size) return out;
    const order = (c.subGroups || []).map((g) => g.id);
    out.forEach((e) => { if (subOf.has(e.item.id)) e.sub = subOf.get(e.item.id); });
    const rank = (e) => (e.sub === extra ? order.length : order.indexOf(e.sub.id));
    return out.map((e, i) => [e, i]).sort((a, b) => rank(a[0]) - rank(b[0]) || a[1] - b[1]).map(([e]) => e);
  }
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
      planCard(),
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
    let entries = c.ideas ? shownItems(IDEAS_SECTION).map((item) => ({ item, section: IDEAS_SECTION, group: IDEAS_GROUP, sub: IDEAS_SECTION })) : catItems(c);
    const subs = [...new Map(entries.map((e) => [e.sub.id, e.sub])).values()];
    const sections = subs;
    if (state.sub !== "all" && !sections.some((s) => s.id === state.sub)) state.sub = "all";
    const pool = state.sub === "all" ? entries : entries.filter((e) => e.sub.id === state.sub);
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
        tr(s), el("b", null, entries.filter((e) => e.sub.id === s.id).length))));
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
      !shown.length ? el("div", { class: "empty" }, el("p", { class: "empty-title" }, u.noResults), el("p", null, u.noResultsHint))
        // "All" with several parts: each part under its own heading, so different kinds never mix.
        : state.sub === "all" && sections.length > 1
          ? sections.map((s) => ({ s, list: shown.filter((e) => e.sub.id === s.id) })).filter((b) => b.list.length).map(({ s, list }) =>
            el("section", { class: "way-block" }, el("h2", { class: "way-block-title" }, tr(s), el("b", { class: "way-block-n" }, list.length)), dishList(list)))
          : dishList(shown),
    ];
  }

  // A way (ready to cook, ready to eat, healthy): its dishes from every category, with a bar of
  // categories that follows the scroll.
  function renderWay(way) {
    const u = ui();
    const blocks = CATEGORIES.map((c) => ({ c, entries: catItems(c).filter(({ item, section }) => wayMatch(way, item, section)) })).filter((b) => b.entries.length);
    // Name each block by what it actually shows: the category name when all its parts are there,
    // otherwise the names of the parts that are (so a block never promises dishes it doesn't list).
    const blockName = (c, entries) => {
      const allSubs = [...new Set(catItems(c).map((e) => e.sub.id))];
      const present = [...new Map(entries.map((e) => [e.sub.id, e.sub])).values()];
      if (c.keepName || present.length === allSubs.length) return tr(c);
      return present.map(tr).join(" · ");
    };
    const total = blocks.reduce((n, b) => n + b.entries.length, 0);
    return [
      wayNav(way),
      el("div", { class: "page-head" }, el("h1", { class: "page-title" }, wayLabel(way)), el("span", { class: "count" }, total)),
      el("p", { class: "page-sub" }, u.wayDesc[way]),
      el("nav", { class: "fbar cat-tabs" }, el("div", { class: "fbar-row" }, blocks.map(({ c, entries }) =>
        el("button", { type: "button", class: "fchip", "data-for": c.id, onclick: () => jumpTo(c.id) }, blockName(c, entries), el("b", null, entries.length))))),
      blocks.map(({ c, entries }) => el("section", { class: "way-block", id: "s-" + c.id, "data-section": c.id },
        el("h2", { class: "way-block-title" }, blockName(c, entries)), dishList(entries))),
    ];
  }

  function renderBundlesPage(way) {
    const u = ui();
    return [
      wayNav(way),
      el("div", { class: "page-head" }, el("h1", { class: "page-title" }, wayLabel(way)), el("span", { class: "count" }, COLLECTIONS.filter((c) => c.kind === way).length)),
      el("p", { class: "page-sub" }, u.wayDesc[way]),
      way === "week" ? planCard() : null,
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
    else if (state.plan === "setup") body = renderPlanSetup();
    else if (state.plan) body = renderPlan();
    else if (cat) body = renderCategory(cat);
    else if (state.way && isBundleWay(state.way)) body = renderBundlesPage(state.way);
    else if (state.way) body = renderWay(state.way);
    else body = renderHome();
    $("main").replaceChildren(el("div", { class: "wrap browse" + (cat || state.way || state.plan || searching ? " inner" : " home-menu") }, body));
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
    // The plan pages have their own add button at the bottom.
    if (state.view !== "browse" || state.plan) { fab.replaceChildren(); return; }
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
      cookCard(),
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

    let cookOpen = false;
    openPanel(({ close, draw }) => {
      const u = ui();
      const step = stepFor(draft, group);
      const keys = cookKeys(id);
      const CT = COOK_UI[state.lang];
      const house = housePrefs(), mine = dishPrefs(id);
      const cookBox = keys.length ? el("div", { class: "cook-box" },
        el("p", { class: "cook-box-label" }, CT.follow),
        el("div", { class: "cook-tags" }, COOK_PREFS.filter((d) => keys.includes(d.id)).map((d) => {
          const v = optOf(d.id, mine[d.id] || house[d.id]);
          const own = mine[d.id] && mine[d.id] !== house[d.id];
          return el("span", { class: "cook-tag" + (own ? " own" : "") }, `${cookShort(d.id, state.lang)}: ${v ? tr(v) : ""}`);
        })),
        cookOpen ? el("div", { class: "pset" }, COOK_PREFS.filter((d) => keys.includes(d.id)).map((d) =>
          // Picking the house choice again puts the dish back on the house preferences.
          cookSeg(d.id, mine[d.id] || house[d.id], (v) => { setDishPref(id, d.id, v === house[d.id] ? null : v); draw(); refreshItem(id); })))
          : el("div", { class: "cook-box-acts" },
            el("button", { type: "button", class: "btn text", onclick: () => { cookOpen = true; draw(); } }, icon("edit"), CT.changeDish),
            el("button", { type: "button", class: "btn text", onclick: () => openCookPrefs() }, CT.editHouse))) : null;
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
        cookBox,

        item.sizes && item.sizes.length ? [
          el("p", { class: "field-label" }, u.size),
          chipRow(item.sizes, draft.size, (i) => { draft.size = i; }, draw),
        ] : null,
        (item.options || []).map((opt, oi) => [
          el("p", { class: "field-label" }, tr(opt)),
          chipRow(opt.choices, draft.opts[oi] || 0, (i) => { draft.opts[oi] = i; }, draw),
        ]),
        packed ? null : (() => {
          // Only the units this dish is sold in; one unit is shown as a line, not a choice.
          const units = unitsOf(id);
          draft.unit = normUnit(id, draft.unit);
          const cur = units.find((x) => x.id === draft.unit) || units[0];
          return [
            el("p", { class: "field-label" }, u.unit),
            units.length > 1 ? chipRow(units, units.indexOf(cur), (i) => {
              draft.unit = units[i].id;
              if (draft.unit !== "kg") draft.qty = Math.max(1, Math.round(draft.qty));
            }, draw) : el("p", { class: "unit-one" }, (state.lang === "ar" ? "بيتباع بال" : "Sold by the ") + tr(cur)),
            el("p", { class: "unit-hint" }, feedsHint(id, cur.id)),
          ];
        })(),

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

  // ---------- Cooking preferences ----------
  // How the kitchen cooks for this house: flour, cooking fat, how much fat, the mix and the
  // marinade. They are set once for the house (from the order page) and can be changed for one
  // dish in its sheet. A dish only offers the preferences in its `prefs` list in data/menu.js
  // ("fat" also brings "how much fat"). The chef's message gets one block with the house choices
  // that apply to the order, and a dish that differs says so on its own line. Every preference
  // starts on a default choice (COOK_DEFAULTS) until the house picks another.
  const COOK_PREFS = [
    { id: "flour", ar: "الدقيق", en: "Flour", opts: [{ id: "white", ar: "أبيض", en: "White" }, { id: "whole", ar: "حبة كاملة", en: "Whole wheat" }] },
    { id: "fat", ar: "الدهون اللي بنطبخ بيها", en: "Cooking fat", short: { ar: "الدهون", en: "Fat" }, opts: [
      { id: "corn", ar: "زيت درة", en: "Corn oil", hint: { ar: "نباتي وخفيف", en: "Plant-based, light" } },
      { id: "olive", ar: "زيت زيتون", en: "Olive oil", hint: { ar: "صحي", en: "Healthy" } },
      { id: "samna", ar: "سمنة بلدي", en: "Samna baladi", hint: { ar: "سمنة بقري فلاحي", en: "Country cow ghee" } },
      { id: "butter", ar: "زبدة", en: "Butter", hint: { ar: "أخف من السمنة", en: "Lighter than ghee" } },
      { id: "oilbutter", ar: "زيت على زبدة", en: "Oil & butter", hint: { ar: "أخف من زبدة صافي", en: "Lighter than pure butter" } },
    ] },
    { id: "amount", on: "fat", ar: "كمية الدهون", en: "How much fat", opts: [{ id: "low", ar: "قليلة خالص", en: "Very little" }, { id: "medium", ar: "متوسطة", en: "Medium" }] },
    { id: "mix", ar: "الخلطة", en: "The mix", opts: [{ id: "normal", ar: "عادي", en: "Normal" }, { id: "spicy", ar: "سبايسي", en: "Spicy" }] },
    { id: "mar", ar: "التتبيلة", en: "The marinade", opts: [{ id: "light", ar: "خفيفة", en: "Light" }, { id: "medium", ar: "متوسطة", en: "Medium" }, { id: "strong", ar: "قوية", en: "Strong" }] },
  ];
  const COOK_UI = {
    ar: {
      title: "تفضيلات مطبخك", sub: "كل صنف بيتعمل كده، إلا لو غيّرت صنف لوحده من صفحته.",
      madeLike: "هيتعمل كده", follow: "هيتعمل حسب تفضيلات بيتك:", change: "غيّر", changeDish: "غيّر للصنف ده بس",
      editHouse: "عدّل تفضيلات البيت", done: "تمام",
      dishes: (n) => (n === 1 ? "صنف واحد متغيّر لوحده" : n === 2 ? "صنفين متغيرين لوحدهم" : `${n} أصناف متغيرة لوحدها`),
    },
    en: {
      title: "Your kitchen preferences", sub: "Every dish is made this way, unless you change one dish on its own page.",
      madeLike: "It will be made like this", follow: "Made the way your house likes:", change: "Change", changeDish: "Change for this dish only",
      editHouse: "Edit house preferences", done: "Done",
      dishes: (n) => `${n} dish${n === 1 ? "" : "es"} changed on their own`,
    },
  };
  const COOK_DEFAULTS = { flour: "white", fat: "corn", amount: "medium", mix: "normal", mar: "medium" };
  const cookDef = (key) => COOK_PREFS.find((d) => d.id === key);
  const cookKeys = (id) => { const hit = byId.get(id); const p = (hit && hit.item.prefs) || []; return COOK_PREFS.filter((d) => p.includes(d.on || d.id)).map((d) => d.id); };
  const housePrefs = () => Object.assign({}, COOK_DEFAULTS, store.get("sabah-cook-prefs", {}) || {});
  const dishPrefs = (id) => (store.get("sabah-dish-prefs", {}) || {})[id] || {};
  function setHousePref(key, val) {
    const all = store.get("sabah-cook-prefs", {}) || {};
    all[key] = val;
    store.set("sabah-cook-prefs", all);
  }
  function setDishPref(id, key, val) {
    const all = store.get("sabah-dish-prefs", {}) || {};
    const mine = all[id] || {};
    if (val) mine[key] = val; else delete mine[key];
    if (Object.keys(mine).length) all[id] = mine; else delete all[id];
    store.set("sabah-dish-prefs", all);
  }
  const optOf = (key, val) => (cookDef(key).opts.find((o) => o.id === val) || null);
  const cookShort = (key, lang) => { const d = cookDef(key); return (d.short || d)[lang] || d.ar; };
  // A dish's own choices that differ from the house, as "الخلطة: سبايسي".
  function dishPrefDiffs(id, lang) {
    const mine = dishPrefs(id), house = housePrefs();
    return cookKeys(id).filter((k) => mine[k] && mine[k] !== house[k] && optOf(k, mine[k]))
      .map((k) => `${cookShort(k, lang)}: ${optOf(k, mine[k])[lang]}`);
  }
  // The house block for the chef: only the preferences set for the house that apply to this order.
  function cookBlockLines(ids) {
    const keys = new Set(ids.flatMap(cookKeys));
    const house = housePrefs();
    const lines = [];
    COOK_PREFS.forEach((d) => {
      if (d.on || !keys.has(d.id)) return;
      const v = optOf(d.id, house[d.id]);
      const extra = d.id === "fat" && keys.has("amount") ? optOf("amount", house.amount) : null;
      if (v || extra) lines.push(`• ${(d.short || d).ar}: ${[v && v.ar, extra && extra.ar].filter(Boolean).join(" · ")}`);
    });
    return lines;
  }
  // One row of choices for a preference.
  function cookSeg(key, cur, onPick) {
    const d = cookDef(key);
    return el("div", { class: "pq" },
      el("p", { class: "field-label" }, tr(d)),
      el("div", { class: "pseg" + (d.opts.length > 3 ? " two-col" : "") },
        d.opts.map((o) => el("button", { type: "button", "aria-pressed": String(cur === o.id), onclick: () => onPick(o.id) },
          el("span", null, tr(o)), o.hint ? el("small", null, tr(o.hint)) : null))));
  }
  // The house preferences, in a sheet. With `keys`, only those preferences are shown.
  function openCookPrefs(keys) {
    const shown = COOK_PREFS.filter((d) => !keys || keys.includes(d.id));
    openPanel(({ close, draw }) => {
      const T = COOK_UI[state.lang];
      const house = housePrefs();
      return [
        el("h2", { class: "sheet-title" }, T.title),
        el("p", { class: "sheet-desc" }, T.sub),
        el("div", { class: "pset" }, shown.map((d) => cookSeg(d.id, house[d.id], (v) => { setHousePref(d.id, v); draw(); }))),
        el("div", { class: "sheet-actions" }, el("button", { type: "button", class: "btn solid wide", onclick: () => { close(); render(); } }, icon("check"), T.done)),
      ];
    }, COOK_UI[state.lang].title);
  }
  // A3: the "made like this" card on the order page.
  function cookCard() {
    const ids = state.cart.map((c) => c.id);
    const keys = [...new Set(ids.flatMap(cookKeys))];
    if (!keys.length) return null;
    const T = COOK_UI[state.lang];
    const house = housePrefs();
    const changed = ids.filter((id) => dishPrefDiffs(id, state.lang).length).length;
    return el("div", { class: "cook-card" },
      el("span", { class: "cook-card-label" }, T.madeLike),
      el("div", { class: "cook-tags" }, COOK_PREFS.filter((d) => keys.includes(d.id)).map((d) => {
        const v = optOf(d.id, house[d.id]);
        return el("span", { class: "cook-tag" }, `${cookShort(d.id, state.lang)}: ${v ? tr(v) : ""}`);
      })),
      changed ? el("span", { class: "cook-card-sub" }, T.dishes(changed)) : null,
      el("button", { type: "button", class: "btn glass small", onclick: () => openCookPrefs(COOK_PREFS.filter((d) => keys.includes(d.id)).map((d) => d.id)) }, icon("edit"), T.change));
  }

  // ---------- Smart bundles ----------
  // A bundle is a list of slots (a day of the week, or a role such as "rice" or "dessert"), each
  // with a pool of dishes that fit it. The app picks one dish per slot, can re-pick them all
  // (refresh), and offers better alternatives for one slot (switch). Picks avoid dishes from
  // recent orders, lean towards favourites and healthy dishes, and avoid dishes the person
  // switched away from before. Everything is stored on the device only.
  const PORTIONS = Object.assign({ kg: 4, box: 3, tray: 6, bag: 4, loaf: 1, feast: 0.55 }, MENU.portions || {});
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
    const units = (people * (c.kind === "feast" ? PORTIONS.feast : 1)) / (unitInfo(id, unit).feeds || 3);
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
      const unitLabel = (id) => tr(unitInfo(id, unitOf(id)));

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
      autoHint: (p) => `الكميات تقريبية: الكيلو لـ ${p.kg} أفراد، والعلبة لـ ${p.box}. تقدر تعدّل أي صنف.`,
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
      autoHint: (p) => `Amounts are estimates: a kilo feeds ${p.kg}, a box feeds ${p.box}. You can change any dish.`,
      manualHint: "Each dish starts at one; adjust as you like.",
      notesTitle: "Notes for the chef on every dish", notePh: "Another note (optional)",
      dayHint: "Each dish gets its day written next to it in the chef's message.",
      when: "Date and time of the feast", whenPh: "e.g. Friday at 2 pm",
    },
  };

  // ---------- Smart week ----------
  // A personal plan for the coming week: one protein a day, with the sides the family wants.
  // It learns only from this phone (past orders, favourites, what was swapped away) and keeps the
  // week balanced: proteins rotate, sides rotate between rice with a stew, pasta and a tray, and
  // fasting days, a guests day and Ramadan change what is picked. #plan-setup asks the questions,
  // #plan shows the week.
  const PLAN_UI = {
    ar: {
      title: "أسبوعك الجاي", smart: "أسبوعك الذكي",
      startTitle: "خطط أسبوعك في دقيقة", startSub: "قولنا عدد الأيام والأفراد ونوع الأكل، ونختارلك أسبوع متوازن تقدر تغيّر فيه أي يوم.",
      readyTitle: (n) => `أسبوعك الجاي جاهز: ${n} أيام`, orderDay: "النهارده يوم طلبك", nextWeek: "أسبوعك الجاي",
      planIt: "خطط أسبوعك", review: "راجع أسبوعك", edit: "عدّل اختياراتك",
      setupTitle: "نجهز أسبوعك", setupSub: "اختياراتك بتتحفظ، وكل أسبوع بيبقى جاهز على طول.",
      qDays: "أكل لكام يوم؟", daysN: (n) => `${n} أيام`, daysRange: { 5: "الأحد–الخميس", 6: "السبت–الخميس", 7: "الأسبوع كله" },
      qPeople: "كام فرد؟", more: "أكتر",
      qReady: "جاهز للطبخ ولا جاهز للأكل؟", ready: { cook: "جاهز للطبخ", eat: "جاهز للأكل", both: "الاتنين" },
      qMeal: "في كل يوم إيه؟",
      meal: { full: "وجبة كاملة", protein: "بروتين بس", custom: "أختار بنفسي" },
      mealHint: { full: "بروتين + رز أو مكرونة أو صينية + سلطة + حلو", protein: "فراخ أو لحمة أو سمك، من غير رز ولا سلطة", custom: "أضيف رز أو سلطة أو حلو" },
      parts: { protein: "بروتين", carb: "رز أو مكرونة أو صينية", salad: "سلطة", sweet: "حلو" },
      qMood: "مزاج الأسبوع", mood: { varied: "لذيذ ومتنوع", healthy: "صحي", fasting: "صيامي" },
      qFast: "أيام صيام في الأسبوع؟", qGuest: "يوم فيه ضيوف؟", optional: "اختياري", none: "مفيش",
      showWeek: "اعرض أسبوعي", pickDays: "اختار يوم بيوم",
      yes: "تمام", other: "حاجة تانية", dayOf: (i, n) => `يوم ${i} من ${n}`,
      refresh: "غيّر الأسبوع", refreshHint: "بيغيّر كل الأيام اللي مش مقفولة.",
      swap: "بدّل", lock: "ثبّت اليوم", swapSide: (name) => `بدّل ${name}`,
      add: "ضيف الأسبوع للطلب", qtyHint: (p) => `الكميات لـ ${p} أفراد، وتقدر تعدّلها في الطلب.`,
      fastDay: "يوم صيام", guestDay: "يوم الضيوف", ramadan: "رمضان كريم: كل يوم فيه شوربة وحلو للفطار.",
      fastMissing: "مفيش رز أو مكرونة صيامي في المنيو لسه، فاليوم ده من غيرهم.",
      lastWeek: "زي الأسبوع اللي فات", lastSub: (n) => (n ? `مع ${n === 1 ? "تغيير واحد" : n === 2 ? "تغييرين" : n + " تغييرات"} ذكية` : "زي ما هو بالظبط"),
      lastKeep: "رجّع القديم", lastUse: "خلي الجديد", lastSame: "زي ما هو", lastOrder: "اطلب زي الأسبوع اللي فات",
      why: {
        fav: "من مفضلتك", fresh: "مطلبتهاش من فترة", back: (w) => `رجعت بعد ${w} أسابيع`, fish: "يوم السمك",
        healthy: "صحي", guests: "يناسب الضيوف", fasting: "صيامي", ramadan: "فطار رمضان", tired: "اتطلب كتير", balance: "تنويع",
      },
    },
    en: {
      title: "Your next week", smart: "Your smart week",
      startTitle: "Plan your week in a minute", startSub: "Tell us the days, people and kind of food, and we'll pick a balanced week you can change day by day.",
      readyTitle: (n) => `Your next week is ready: ${n} days`, orderDay: "Today is your order day", nextWeek: "Your next week",
      planIt: "Plan your week", review: "Review your week", edit: "Change your choices",
      setupTitle: "Let's plan your week", setupSub: "Your choices are kept, so each week is ready straight away.",
      qDays: "Meals for how many days?", daysN: (n) => `${n} days`, daysRange: { 5: "Sun–Thu", 6: "Sat–Thu", 7: "Every day" },
      qPeople: "How many people?", more: "More",
      qReady: "Ready to cook or ready to eat?", ready: { cook: "Ready to cook", eat: "Ready to eat", both: "Both" },
      qMeal: "What goes in each day?",
      meal: { full: "Full meal", protein: "Protein only", custom: "I'll choose" },
      mealHint: { full: "Protein + rice, pasta or a tray + salad + dessert", protein: "Chicken, meat or fish, no rice or salad", custom: "Add rice, salad or dessert" },
      parts: { protein: "Protein", carb: "Rice, pasta or a tray", salad: "Salad", sweet: "Dessert" },
      qMood: "This week's mood", mood: { varied: "Tasty & varied", healthy: "Healthy", fasting: "Fasting" },
      qFast: "Fasting days in the week?", qGuest: "A day with guests?", optional: "optional", none: "None",
      showWeek: "Show my week", pickDays: "Pick day by day",
      yes: "Yes", other: "Something else", dayOf: (i, n) => `Day ${i} of ${n}`,
      refresh: "Refresh the week", refreshHint: "Changes every day that isn't locked.",
      swap: "Swap", lock: "Lock this day", swapSide: (name) => `Swap ${name}`,
      add: "Add the week to my order", qtyHint: (p) => `Amounts are for ${p} people; you can change them in your order.`,
      fastDay: "Fasting day", guestDay: "Guests day", ramadan: "Ramadan: each day has soup and dessert for iftar.",
      fastMissing: "No fasting rice or pasta on the menu yet, so this day comes without them.",
      lastWeek: "Like last week", lastSub: (n) => (n ? `with ${n} smart change${n === 1 ? "" : "s"}` : "exactly the same"),
      lastKeep: "Keep the old one", lastUse: "Use the new one", lastSame: "Unchanged", lastOrder: "Order like last week",
      why: {
        fav: "A favourite", fresh: "Not ordered lately", back: (w) => `Back after ${w} weeks`, fish: "Fish day",
        healthy: "Healthy", guests: "Good for guests", fasting: "Fasting", ramadan: "Ramadan iftar", tired: "Ordered a lot", balance: "Something different",
      },
    },
  };
  const DAY_SETS = { 5: [1, 2, 3, 4, 5], 6: [0, 1, 2, 3, 4, 5], 7: [0, 1, 2, 3, 4, 5, 6] };
  const WEEK_MS = 7 * 24 * 3600 * 1000;
  const satIndex = (d) => (d.getDay() + 1) % 7; // DAY_NAMES start on Saturday

  const sectionIds = (...ids) => ids.flatMap((sid) => { const hit = sectionById.get(sid); return hit ? shownItems(hit.section).map((i) => i.id) : []; });
  const familyIds = (fid) => ((FAMILIES.find((f) => f.id === fid) || {}).members || []).map((m) => m.id).filter((id) => byId.has(id));
  const live = (ids) => ids.filter((id) => byId.has(id) && !byId.get(id).item.removed);
  const POOL = {
    chicken: () => sectionIds("chicken"),
    meat: () => sectionIds("beef", "egyptian"),
    fish: () => sectionIds("fish"),
    legume: () => sectionIds("legumes"),
    rice: () => live(["k131", "k130"]),
    stew: () => familyIds("stews"),
    pasta: () => live(["k135", "k136", "k58"]),
    tray: () => live(["k133", "k134", "k138", "k140", "k132"]),
    salad: () => { const cut = new Set(((CATEGORIES.find((c) => c.id === "salads") || {}).subGroups || []).flatMap((g) => g.ids)); return sectionIds("salads").filter((id) => !cut.has(id)); },
    cutveg: () => ((CATEGORIES.find((c) => c.id === "salads") || {}).subGroups || []).flatMap((g) => g.ids).filter((id) => byId.has(id)),
    sweet: () => sectionIds("desserts"),
    hsweet: () => sectionIds("healthy-sweets"),
    soup: () => sectionIds("soup"),
  };
  // Dishes that already come with rice, freekeh or potatoes get no extra carb.
  const HAS_CARB = new Set(["k15", "k82", "k111", "k112", "k116", "k144", "k146", "k16", "k110"]);
  // Dishes the kitchen marks as fasting-friendly (صيامي), listed in data/menu.js.
  const FASTING = new Set(MENU.fasting || []);
  const GUEST_DISHES = new Set(COLLECTIONS.filter((c) => c.kind === "feast").flatMap((c) => c.slots.flatMap((s) => s.pool || [])));
  const kindOf = (id) => { const s = byId.get(id).section.id; return s === "chicken" ? "chicken" : s === "fish" ? "fish" : s === "legumes" ? "legume" : s === "beef" || s === "egyptian" ? "meat" : null; };

  const PLAN_DEFAULTS = { days: 5, people: 4, ready: "both", meal: "full", parts: ["carb", "salad", "sweet"], mood: "varied", fastDays: [], guestDay: -1, setup: false };
  function planPrefs() {
    const p = Object.assign({}, PLAN_DEFAULTS, { people: Number(store.get("sabah-people", 4)) || 4 }, store.get("sabah-plan-prefs", {}) || {});
    if (![5, 6, 7].includes(p.days)) p.days = 5;
    p.people = Math.min(30, Math.max(1, Number(p.people) || 4));
    if (!["cook", "eat", "both"].includes(p.ready)) p.ready = "both";
    if (!["full", "protein", "custom"].includes(p.meal)) p.meal = "full";
    if (!["varied", "healthy", "fasting"].includes(p.mood)) p.mood = "varied";
    p.parts = (Array.isArray(p.parts) ? p.parts : []).filter((k) => ["carb", "salad", "sweet"].includes(k));
    p.fastDays = (Array.isArray(p.fastDays) ? p.fastDays : []).filter((d) => d >= 0 && d < 7);
    if (!(p.guestDay >= -1 && p.guestDay < 7)) p.guestDay = -1;
    return p;
  }
  function savePlanPrefs(p) {
    store.set("sabah-plan-prefs", p);
    store.set("sabah-people", p.people);
  }
  const prefParts = (p) => (p.meal === "full" ? ["carb", "salad", "sweet"] : p.meal === "protein" ? [] : p.parts);

  // What this phone knows: when each dish was last ordered, how often, and what was swapped away.
  const planSkips = () => store.get("sabah-plan-skips", {}) || {};
  function planSkip(id) {
    const all = planSkips();
    all[id] = Date.now();
    const keep = Object.entries(all).filter(([, at]) => Date.now() - at < 8 * WEEK_MS);
    store.set("sabah-plan-skips", Object.fromEntries(keep));
  }
  function orderStats() {
    const hist = orderHistory();
    const last = new Map(); const times = new Map();
    hist.forEach((h) => h.ids.forEach((id) => { last.set(id, h.at); times.set(id, (times.get(id) || 0) + 1); }));
    return { hist, last, times, lastIds: new Set(hist.length ? hist[hist.length - 1].ids : []), recent: new Set(hist.slice(-4).flatMap((h) => h.ids)) };
  }
  function inRamadan(date) {
    try { return new Intl.DateTimeFormat("en-u-ca-islamic", { month: "numeric" }).format(date) === "9"; } catch (e) { return false; }
  }
  const isSummer = (date) => [5, 6, 7].includes(date.getMonth());

  function planScore(id, ctx) {
    const { item, section } = byId.get(id);
    const why = [];
    let s = 0;
    const fav = state.favs.has(id);
    if (fav) { s += 2; why.push(["fav"]); }
    const at = ctx.stats.last.get(id);
    if (ctx.stats.hist.length) {
      if (ctx.stats.lastIds.has(id)) s -= 3; // never two weeks running
      if (at && Date.now() - at >= 2.5 * WEEK_MS) {
        s += 1.4;
        why.push(fav || (ctx.stats.times.get(id) || 0) > 1 ? ["back", Math.floor((Date.now() - at) / WEEK_MS)] : ["fresh"]);
      } else if (!at) s += 0.5;
      if ((ctx.stats.times.get(id) || 0) >= 3 && ctx.stats.recent.has(id)) s -= 1;
    }
    const skippedAt = planSkips()[id];
    if (skippedAt && Date.now() - skippedAt < 6 * WEEK_MS) s -= 3;
    if (ctx.mood === "healthy" && isHealthy(item, section)) { s += 2; why.push(["healthy"]); }
    if (ctx.mood === "healthy" && section.id === "egyptian") s -= 2.5;
    if (ctx.summer && isHealthy(item, section)) s += 0.4;
    if (ctx.guest && GUEST_DISHES.has(id)) { s += 2.5; why.unshift(["guests"]); }
    s += Math.random() * (ctx.rotate ? 1.6 : 0.4);
    return { s, why };
  }
  // Flavours of one dish (a family) count as the same dish: one of them a week where possible.
  const famId = (id) => (familyOf.get(id) ? familyOf.get(id).family.id : null);
  function bestOf(ids, ctx, taken) {
    let best = null;
    ids.forEach((id) => {
      if (taken.has(id)) return;
      const r = planScore(id, ctx);
      const f = famId(id);
      if (f && ctx.fams && ctx.fams.has(f)) r.s -= 2.5;
      if (!best || r.s > best.s) best = { id, ...r };
    });
    return best;
  }
  const readyOk = (id, ready) => ready === "both" || readiness(byId.get(id).item, byId.get(id).section) === ready;

  // Protein kinds for the week: one fish day (two in a healthy 6–7 day week), the rest split
  // between chicken and meat, never the same kind two days running.
  function kindSequence(n, fixed, mood) {
    let fish = mood === "healthy" && n >= 6 ? 2 : 1;
    const left = { fish, chicken: Math.ceil((n - fish) / 2), meat: Math.floor((n - fish) / 2) };
    fixed.forEach((k) => { if (k && left[k] > 0) left[k]--; });
    const seq = [];
    for (let i = 0; i < n; i++) {
      if (fixed[i]) { seq.push(fixed[i]); continue; }
      const prev = seq[i - 1], next = fixed[i + 1];
      const opts = Object.keys(left).filter((k) => left[k] > 0).sort((a, b) => left[b] - left[a] + (Math.random() - 0.5) * 0.9);
      const k = opts.find((o) => o !== prev && o !== next) || opts[0] || "chicken";
      left[k] = Math.max(0, left[k] - 1);
      seq.push(k);
    }
    return seq;
  }
  // Carb sides for the week: rice with a stew, pasta or a tray, never the same type two days running.
  function carbSequence(n) {
    const rice = Math.ceil(n * 0.4), pasta = Math.floor((n - rice) / 2);
    const left = { rice, pasta, tray: n - rice - pasta };
    const seq = [];
    for (let i = 0; i < n; i++) {
      const opts = Object.keys(left).filter((k) => left[k] > 0).sort((a, b) => left[b] - left[a] + (Math.random() - 0.5) * 0.9);
      const k = opts.find((o) => o !== seq[i - 1]) || opts[0] || "rice";
      left[k]--;
      seq.push(k);
    }
    return seq;
  }

  // Build (or refresh) the plan. Locked days from `prev` are kept as they are.
  function buildPlan(p, prev, rotate) {
    const now = new Date();
    const days = DAY_SETS[p.days];
    const stats = orderStats();
    const ramadan = inRamadan(now);
    const base = { stats, mood: p.mood, rotate, summer: isSummer(now) };
    const kept = new Map(((prev && prev.days) || []).filter((d) => d.lock && days.includes(d.d)).map((d) => [d.d, d]));
    const fastOn = (d) => p.mood === "fasting" || p.fastDays.includes(d);
    const parts = prefParts(p);
    const taken = new Set([...kept.values()].flatMap((d) => [d.p, ...d.x]));
    base.fams = new Set([...taken].map(famId).filter((f) => f && f !== "stews" && f !== "rice"));

    const fixedKinds = days.map((d) => (kept.has(d) ? kindOf(kept.get(d).p) : fastOn(d) ? "fast" : null));
    const seq = kindSequence(days.length, fixedKinds.map((k) => (k === "fast" ? "fish" : k)), p.mood);
    const carbs = carbSequence(days.length);
    let lastRice = null;
    let prevX = [];
    const out = days.map((d, i) => {
      if (kept.has(d)) { prevX = kept.get(d).x; return kept.get(d); }
      const ctx = { ...base, guest: p.guestDay === d };
      const fast = fastOn(d);
      const flags = { fast, guest: p.guestDay === d, ramadan };
      // Protein
      let pool;
      if (fast) pool = POOL.fish().concat(POOL.legume()).filter((id) => FASTING.has(id));
      else pool = POOL[seq[i]]().filter((id) => readyOk(id, p.ready));
      if (!pool.length && !fast) pool = ["chicken", "meat", "fish"].flatMap((k) => POOL[k]()).filter((id) => readyOk(id, p.ready));
      if (!pool.length) pool = POOL[fast ? "fish" : seq[i]]();
      const pick = bestOf(pool, ctx, taken) || bestOf(pool, ctx, new Set());
      if (!pick) return null;
      taken.add(pick.id);
      if (famId(pick.id)) base.fams.add(famId(pick.id));
      const why = pick.why.slice();
      if (fast) why.unshift(["fasting"]);
      else if (kindOf(pick.id) === "fish" && !why.length) why.push(["fish"]);
      // Sides
      const x = [];
      // A side is new for the week when possible; once a group runs out it may repeat, never two days running.
      const yesterday = new Set(prevX);
      const side = (ids) => {
        const ok = fast ? ids.filter((id) => FASTING.has(id)) : ids;
        const b = bestOf(ok, ctx, taken) || bestOf(ok, ctx, new Set([...yesterday, pick.id, ...x]));
        if (b) { taken.add(b.id); x.push(b.id); const f = famId(b.id); if (f && f !== "stews" && f !== "rice") base.fams.add(f); }
        return !!b;
      };
      // Plain rice may come back on another day; it just alternates with the other kind of rice.
      const rice = () => { const ok = POOL.rice().filter((id) => !fast || FASTING.has(id)); const id = ok.find((r) => r !== lastRice) || ok[0]; if (id) { lastRice = id; x.push(id); } return !!id; };
      if (ramadan) side(POOL.soup());
      if (parts.includes("carb") && !HAS_CARB.has(pick.id)) {
        const type = carbs[i];
        if (type === "rice") { if (rice()) side(POOL.stew()); }
        else if (!side(type === "pasta" ? (p.mood === "healthy" ? ["k58"].concat(POOL.pasta()) : POOL.pasta()) : POOL.tray())) rice();
      }
      if (parts.includes("salad")) { if (!side(POOL.salad()) && fast) side(POOL.cutveg()); }
      if (parts.includes("sweet") || ramadan) side(p.mood === "healthy" ? POOL.hsweet() : POOL.sweet());
      prevX = x;
      return { d, p: pick.id, x, lock: false, why: why.slice(0, 2), flags };
    }).filter(Boolean);
    return { at: Date.now(), key: planKey(p), days: out };
  }
  const planKey = (p) => JSON.stringify([p.days, p.ready, p.meal, prefParts(p), p.mood, p.fastDays, p.guestDay]);
  // The saved plan, rebuilt when the choices changed, after an order was sent, or after a week.
  function currentPlan(p) {
    const saved = store.get("sabah-plan", null);
    const lastAt = (lastOrder() || {}).at || 0;
    const ok = saved && Array.isArray(saved.days) && saved.key === planKey(p) && saved.at > lastAt && Date.now() - saved.at < WEEK_MS
      && saved.days.every((d) => byId.has(d.p) && d.x.every((id) => byId.has(id)));
    if (ok) return saved;
    const plan = buildPlan(p, saved && saved.key === planKey(p) ? saved : null, false);
    store.set("sabah-plan", plan);
    return plan;
  }
  const savePlan = (plan) => store.set("sabah-plan", plan);

  // Swap one dish in a day for the best other dish of the same kind (protein) or group (side).
  function sideGroup(id) {
    for (const g of ["rice", "stew", "pasta", "tray", "salad", "cutveg", "sweet", "hsweet", "soup"]) if (POOL[g]().includes(id)) return g;
    return null;
  }
  function swapInPlan(plan, p, dayIdx, which) {
    const day = plan.days[dayIdx];
    const taken = new Set(plan.days.flatMap((d) => [d.p, ...d.x]));
    const ctx = { stats: orderStats(), mood: p.mood, rotate: true, summer: isSummer(new Date()), guest: day.flags && day.flags.guest,
      fams: new Set(plan.days.flatMap((d) => [d.p, ...d.x]).map(famId).filter((f) => f && f !== "stews" && f !== "rice")) };
    const fast = day.flags && day.flags.fast;
    if (which === "p") {
      const k = kindOf(day.p);
      let pool = (k === "legume" ? POOL.legume() : POOL[k]()).filter((id) => (fast ? FASTING.has(id) : readyOk(id, p.ready)));
      if (fast) pool = POOL.fish().concat(POOL.legume()).filter((id) => FASTING.has(id));
      const b = bestOf(pool, ctx, taken);
      if (!b) return false;
      planSkip(day.p);
      day.p = b.id;
      day.why = (fast ? [["fasting"]] : []).concat(b.why).slice(0, 2);
      return true;
    }
    const old = day.x[which];
    const g = sideGroup(old);
    if (!g) return false;
    const pool = POOL[g]().filter((id) => !fast || FASTING.has(id));
    // Rice can repeat across days; only the day's own dishes are off limits.
    const near = [plan.days[dayIdx - 1], plan.days[dayIdx + 1]].filter(Boolean).flatMap((d) => d.x);
    const b = bestOf(pool, ctx, g === "rice" ? new Set([day.p, ...day.x]) : taken) || bestOf(pool, ctx, new Set([day.p, ...day.x, ...near]));
    if (!b) return false;
    planSkip(old);
    day.x[which] = b.id;
    return true;
  }

  function addPlanToCart(plan, p) {
    const byDish = new Map();
    plan.days.forEach((day) => [day.p, ...day.x].forEach((id) => { if (!byDish.has(id)) byDish.set(id, []); byDish.get(id).push(day.d); }));
    byDish.forEach((ds, id) => {
      const entry = makeEntry(id);
      entry.qty = autoQty(id, { kind: "week" }, p.people) * ds.length;
      // The chef reads Arabic, so the day note is always in Arabic.
      entry.note = (ds.length === 1 ? "يوم " : "أيام ") + ds.map((d) => DAY_NAMES.ar[d]).join(" و");
      const idx = state.cart.findIndex((c) => c.id === id);
      if (idx >= 0) state.cart[idx] = entry;
      else state.cart.push(entry);
    });
    saveCart();
    buzz();
    toast(ui().addedN(byDish.size), { label: ui().viewOrder, run: () => go("cart") });
    render();
    return byDish.size;
  }

  // The usual order day, learned from when orders were sent (Thursday until there are two).
  function orderDay() {
    const hist = orderHistory();
    if (hist.length < 2) return 5;
    const n = [0, 0, 0, 0, 0, 0, 0];
    hist.forEach((h) => { n[satIndex(new Date(h.at))]++; });
    return n.indexOf(Math.max(...n));
  }
  const isOrderSoon = () => { const t = satIndex(new Date()); const o = orderDay(); return t === o || (t + 1) % 7 === o; };

  const whyText = (w) => { const T = PLAN_UI[state.lang].why[w[0]]; return typeof T === "function" ? T(w[1]) : T; };
  const qtyText = (id, people) => {
    const { item, section, group } = byId.get(id);
    const unit = defaultUnit(item, section, group);
    return fmtQty(autoQty(id, { kind: "week" }, people)) + " " + tr(unitInfo(id, unit));
  };
  const goPlan = (setup, replace) => {
    const hash = setup ? "#plan-setup" : "#plan";
    if (location.hash === hash) { applyHash(); show("browse"); return; }
    if (replace) { history.replaceState(null, "", hash); applyHash(); show("browse"); return; }
    location.hash = hash;
  };

  // T1: the card on the menu home and the weekly food page.
  function planCard() {
    const T = PLAN_UI[state.lang];
    const p = planPrefs();
    if (!p.setup) {
      return el("div", { class: "plan-card" },
        el("span", { class: "plan-card-label" }, T.smart),
        el("span", { class: "plan-card-title" }, T.startTitle),
        el("span", { class: "plan-card-sub" }, T.startSub),
        el("div", { class: "plan-card-acts" }, el("button", { type: "button", class: "btn solid", onclick: () => goPlan(true) }, icon("calendar"), T.planIt)));
    }
    const plan = currentPlan(p);
    const last = lastOrder();
    return el("div", { class: "plan-card" },
      el("span", { class: "plan-card-label" }, isOrderSoon() ? T.orderDay : T.nextWeek),
      el("span", { class: "plan-card-title" }, T.readyTitle(plan.days.length)),
      el("span", { class: "plan-card-pics" }, plan.days.map((d) => { const it = byId.get(d.p).item; return it.img ? el("img", { src: it.img, alt: "", loading: "lazy" }) : null; })),
      el("div", { class: "plan-card-acts" },
        el("button", { type: "button", class: "btn solid", onclick: () => goPlan(false) }, T.review, icon("chevron", "flip-rtl")),
        last ? el("button", { type: "button", class: "btn glass", onclick: () => openLastWeek() }, icon("repeat"), T.lastWeek) : null));
  }

  // W3: the questions, then (optionally) one card per day.
  let planSwipe = null;
  function renderPlanSetup() {
    const T = PLAN_UI[state.lang];
    const p = planPrefs();
    const set = (patch) => { Object.assign(p, patch); savePlanPrefs(p); renderBrowse(); };
    const seg = (opts, cur, onPick, cls) => el("div", { class: "pseg" + (cls ? " " + cls : "") }, opts.map(([k, label, hint]) => el("button", {
      type: "button", "aria-pressed": String(cur === k), onclick: () => onPick(k),
    }, el("span", null, label), hint ? el("small", null, hint) : null)));
    const dayChips = (cur, onPick, multi) => el("div", { class: "choice-row" },
      multi ? null : el("button", { type: "button", class: "choice small", "aria-pressed": String(cur === -1), onclick: () => onPick(-1) }, T.none),
      DAY_SETS[p.days].map((d) => el("button", {
        type: "button", class: "choice small", "aria-pressed": String(multi ? cur.includes(d) : cur === d), onclick: () => onPick(d),
      }, DAY_NAMES[state.lang][d])));

    if (planSwipe) return renderPlanSwipe(p);
    return [
      wayNav("week"),
      el("div", { class: "page-head" }, el("h1", { class: "page-title" }, T.setupTitle)),
      el("p", { class: "page-sub" }, T.setupSub),
      el("div", { class: "pset" },
        el("div", { class: "pq" }, el("p", { class: "field-label" }, T.qDays),
          seg([5, 6, 7].map((n) => [n, T.daysN(n), T.daysRange[n]]), p.days, (n) => set({ days: n, fastDays: p.fastDays.filter((d) => DAY_SETS[n].includes(d)), guestDay: DAY_SETS[n].includes(p.guestDay) ? p.guestDay : -1 }))),
        el("div", { class: "pq" }, el("p", { class: "field-label" }, T.qPeople),
          el("div", { class: "pseg nums" }, [1, 2, 3, 4, 5, 6].map((n) => el("button", { type: "button", "aria-pressed": String(p.people === n), onclick: () => set({ people: n }) }, el("span", null, String(n)))),
            el("button", { type: "button", "aria-pressed": String(p.people > 6), "aria-label": T.more, onclick: () => set({ people: Math.max(p.people, 6) + 1 }) }, el("span", null, (p.people > 6 ? p.people : "") + "+")))),
        el("div", { class: "pq" }, el("p", { class: "field-label" }, T.qReady),
          seg(["cook", "eat", "both"].map((k) => [k, T.ready[k]]), p.ready, (k) => set({ ready: k }))),
        el("div", { class: "pq" }, el("p", { class: "field-label" }, T.qMeal),
          seg(["full", "protein", "custom"].map((k) => [k, T.meal[k], T.mealHint[k]]), p.meal, (k) => set({ meal: k, parts: k === "custom" && !p.parts.length ? ["salad"] : p.parts })),
          p.meal === "custom" ? el("div", { class: "choice-row" },
            el("span", { class: "choice small fixed", "aria-pressed": "true" }, T.parts.protein),
            ["carb", "salad", "sweet"].map((k) => el("button", {
              type: "button", class: "choice small", "aria-pressed": String(p.parts.includes(k)),
              onclick: () => set({ parts: p.parts.includes(k) ? p.parts.filter((x) => x !== k) : p.parts.concat(k) }),
            }, T.parts[k]))) : null),
        el("div", { class: "pq" }, el("p", { class: "field-label" }, T.qMood),
          seg(["varied", "healthy", "fasting"].map((k) => [k, T.mood[k]]), p.mood, (k) => set({ mood: k }))),
        p.mood === "fasting" ? null : el("div", { class: "pq" }, el("p", { class: "field-label" }, T.qFast, " ", el("small", null, "(" + T.optional + ")")),
          dayChips(p.fastDays, (d) => set({ fastDays: p.fastDays.includes(d) ? p.fastDays.filter((x) => x !== d) : p.fastDays.concat(d).sort() }), true)),
        el("div", { class: "pq" }, el("p", { class: "field-label" }, T.qGuest, " ", el("small", null, "(" + T.optional + ")")),
          dayChips(p.guestDay, (d) => set({ guestDay: d }), false)),
      ),
      el("div", { class: "pset-acts" },
        el("button", { type: "button", class: "btn solid wide", onclick: () => { p.setup = true; savePlanPrefs(p); currentPlan(p); goPlan(false); } }, T.showWeek),
        el("button", { type: "button", class: "btn tinted wide", onclick: () => { p.setup = true; savePlanPrefs(p); currentPlan(p); planSwipe = { i: 0 }; renderBrowse(); window.scrollTo({ top: 0 }); } }, T.pickDays)),
    ];
  }
  function renderPlanSwipe(p) {
    const T = PLAN_UI[state.lang];
    const plan = currentPlan(p);
    const i = planSwipe.i;
    if (i >= plan.days.length) { planSwipe = null; setTimeout(() => goPlan(false, true), 0); return []; }
    const day = plan.days[i];
    const it = byId.get(day.p).item;
    return [
      el("div", { class: "page-head" }, el("h1", { class: "page-title" }, T.setupTitle), el("span", { class: "count" }, T.dayOf(i + 1, plan.days.length))),
      el("div", { class: "pswipe-prog" }, plan.days.map((_, k) => el("i", { class: k < i ? "done" : k === i ? "now" : "" }))),
      el("div", { class: "pswipe-card", key: day.p },
        it.full || it.img ? el("img", { src: it.full || it.img, alt: "" }) : null,
        el("span", { class: "pswipe-day" }, DAY_NAMES[state.lang][day.d]),
        el("div", { class: "pswipe-text" },
          el("b", null, tr(it)),
          day.x.length ? el("small", { class: "pswipe-x" }, "+ " + day.x.map((id) => tr(byId.get(id).item)).join(" · ")) : null,
          el("span", { class: "pswipe-tags" }, day.why.map((w) => el("span", { class: "why" }, whyText(w))), el("small", null, qtyText(day.p, p.people))))),
      el("div", { class: "pswipe-acts" },
        el("button", { type: "button", class: "btn outline big", onclick: () => { if (swapInPlan(plan, p, i, "p")) { savePlan(plan); buzz(); renderBrowse(); } } }, icon("swap"), T.other),
        el("button", { type: "button", class: "btn solid big", onclick: () => { plan.days[i].lock = true; savePlan(plan); planSwipe.i++; buzz(); renderBrowse(); } }, icon("check"), T.yes)),
    ];
  }

  // W1: the week, day by day.
  function renderPlan() {
    const T = PLAN_UI[state.lang];
    const p = planPrefs();
    if (!p.setup) { setTimeout(() => goPlan(true, true), 0); return []; }
    const plan = currentPlan(p);
    const redraw = () => { savePlan(plan); renderBrowse(); };
    const n = new Set(plan.days.flatMap((d) => [d.p, ...d.x])).size;
    const summary = [T.daysN(p.days), `${p.people} ${state.lang === "ar" ? "أفراد" : "people"}`, T.ready[p.ready], T.meal[p.meal], T.mood[p.mood]];
    const last = lastOrder();
    return [
      wayNav("week"),
      el("div", { class: "page-head" }, el("h1", { class: "page-title" }, T.title), el("span", { class: "count" }, plan.days.length)),
      el("div", { class: "psum" }, summary.map((s) => el("span", { class: "psum-chip" }, s)),
        el("button", { type: "button", class: "btn text", onclick: () => goPlan(true) }, icon("edit"), T.edit)),
      plan.days.some((d) => d.flags && d.flags.ramadan) ? el("p", { class: "plan-note" }, T.ramadan) : null,
      el("div", { class: "ptools" },
        el("button", { type: "button", class: "btn tinted small", onclick: () => { const next = buildPlan(p, plan, true); savePlan(next); buzz(); renderBrowse(); } }, icon("repeat"), T.refresh),
        last ? el("button", { type: "button", class: "btn outline small", onclick: () => openLastWeek() }, icon("repeat"), T.lastWeek) : null,
        el("span", { class: "bctl-hint" }, T.refreshHint)),
      el("div", { class: "pdays" }, plan.days.map((day, i) => {
        const { item, section } = byId.get(day.p);
        const fast = day.flags && day.flags.fast, guest = day.flags && day.flags.guest;
        return el("div", { class: "pday" + (day.lock ? " locked" : "") },
          el("div", { class: "pday-head" },
            el("span", { class: "pday-name" }, DAY_NAMES[state.lang][day.d]),
            fast ? el("span", { class: "why why-fast" }, T.fastDay) : null,
            guest ? el("span", { class: "why why-guest" }, T.guestDay) : null),
          el("div", { class: "pday-main" },
            el("button", { type: "button", class: "pday-img", "aria-label": tr(item), onclick: () => openSheet(day.p) },
              item.img ? el("img", { src: item.img, alt: "", loading: "lazy" }) : el("span", { class: "card-img-empty" }, section.emoji || "🍽️")),
            el("div", { class: "pday-text" },
              el("button", { type: "button", class: "pday-dish", onclick: () => openSheet(day.p) }, tr(item)),
              el("span", { class: "pday-tags" }, readyTag(item, section), day.why.map((w) => el("span", { class: "why" }, whyText(w)))),
              el("span", { class: "pday-qty" }, qtyText(day.p, p.people))),
            el("div", { class: "brow-tools" },
              el("button", { type: "button", class: "icon-btn small" + (day.lock ? " active" : ""), "aria-pressed": String(day.lock), "aria-label": T.lock, title: T.lock, onclick: () => { day.lock = !day.lock; redraw(); } }, icon(day.lock ? "lock" : "unlock")),
              el("button", { type: "button", class: "icon-btn small", "aria-label": T.swap, title: T.swap, disabled: day.lock, onclick: () => { if (swapInPlan(plan, p, i, "p")) { buzz(); redraw(); } } }, icon("swap")))),
          day.x.length ? el("div", { class: "pday-x" }, day.x.map((id, k) => {
            const x = byId.get(id).item;
            return el("button", { type: "button", class: "pside", disabled: day.lock, "aria-label": T.swapSide(tr(x)), title: T.swapSide(tr(x)), onclick: () => { if (swapInPlan(plan, p, i, k)) { buzz(); redraw(); } } },
              x.img ? el("img", { src: x.img, alt: "", loading: "lazy" }) : null, el("span", null, tr(x)), icon("swap"));
          })) : null,
          fast && prefParts(p).includes("carb") && !day.x.some((id) => ["rice", "pasta", "tray"].includes(sideGroup(id))) ? el("p", { class: "bctl-hint" }, T.fastMissing) : null);
      })),
      el("p", { class: "bctl-hint" }, T.qtyHint(p.people)),
      el("div", { class: "plan-add" }, el("button", { type: "button", class: "btn solid wide", onclick: () => addPlanToCart(plan, p) }, icon("plus"), T.add, el("b", { class: "plan-add-n" }, n))),
    ];
  }

  // T2: last week again, with a few smart changes shown before and after.
  function lastWeekChanges(cart) {
    const stats = orderStats();
    const ids = new Set(cart.map((c) => c.id));
    const ctx = { stats, mood: planPrefs().mood, rotate: false, summer: isSummer(new Date()) };
    const kinds = {};
    cart.forEach((c) => { const s = byId.get(c.id).section.id; if (["chicken", "beef", "egyptian", "fish"].includes(s)) kinds[kindOf(c.id)] = (kinds[kindOf(c.id)] || 0) + 1; });
    const scored = cart.filter((c) => byId.get(c.id).group.id === "kitchen").map((c) => {
      const times = stats.times.get(c.id) || 0;
      const skipped = planSkips()[c.id] && Date.now() - planSkips()[c.id] < 6 * WEEK_MS;
      let need = 0, why = "balance";
      if (skipped) { need = 3; why = "balance"; }
      else if (times >= 3) { need = 2; why = "tired"; }
      else if (["chicken", "meat"].includes(kindOf(c.id)) && kinds[kindOf(c.id)] >= 3 && !kinds.fish) { need = 1.5; why = "fish"; }
      return { c, need, why };
    }).sort((a, b) => b.need - a.need);
    const picks = scored.filter((x) => x.need > 0).slice(0, 3);
    if (!picks.length && scored.length) picks.push(scored[scored.length - 1]);
    const taken = new Set(ids);
    return picks.map(({ c, why }) => {
      const { section } = byId.get(c.id);
      const pool = why === "fish" ? POOL.fish() : shownItems(section).map((i) => i.id);
      const b = bestOf(pool, ctx, taken);
      if (!b) return null;
      taken.add(b.id);
      return { from: c.id, to: b.id, why: why === "balance" && b.why.length ? b.why[0] : [why], keep: false };
    }).filter(Boolean);
  }
  function openLastWeek() {
    const last = lastOrder();
    if (!last) return;
    const changes = lastWeekChanges(last.cart);
    openPanel(({ close, draw }) => {
      const T = PLAN_UI[state.lang];
      const u = ui();
      const active = changes.filter((ch) => !ch.keep).length;
      const changedFrom = new Set(changes.map((ch) => ch.from));
      return [
        el("span", { class: "eyebrow" }, T.smart),
        el("h2", { class: "sheet-title" }, T.lastWeek),
        el("p", { class: "sheet-desc" }, T.lastSub(active)),
        el("div", { class: "lw-list" }, changes.map((ch) => {
          const a = byId.get(ch.from).item, b = byId.get(ch.to).item;
          return el("div", { class: "lw-row" + (ch.keep ? " kept" : "") },
            el("img", { src: (ch.keep ? a : b).img || "", alt: "" }),
            el("div", { class: "lw-text" },
              el("s", null, tr(ch.keep ? b : a)),
              el("b", null, tr(ch.keep ? a : b)),
              ch.keep ? null : el("span", { class: "why" }, whyText(ch.why))),
            el("button", { type: "button", class: "btn text", onclick: () => { ch.keep = !ch.keep; draw(); } }, ch.keep ? T.lastUse : T.lastKeep));
        })),
        el("p", { class: "field-label" }, T.lastSame),
        el("div", { class: "lw-same" }, last.cart.filter((c) => !changedFrom.has(c.id)).map((c) => { const it = byId.get(c.id).item; return it.img ? el("img", { src: it.img, alt: tr(it), title: tr(it) }) : el("span", { class: "lw-name" }, tr(it)); })),
        el("div", { class: "sheet-actions" },
          el("button", {
            type: "button", class: "btn solid wide",
            onclick: () => {
              const swapTo = new Map(changes.filter((ch) => !ch.keep).map((ch) => [ch.from, ch.to]));
              let n = 0;
              last.cart.forEach((c) => {
                const id = swapTo.get(c.id) || c.id;
                const entry = swapTo.has(c.id) ? Object.assign(makeEntry(id), { qty: c.qty, note: c.note || "" }) : { ...c };
                if (entry.unit && !swapTo.has(c.id)) entry.unit = c.unit;
                const idx = state.cart.findIndex((x) => x.id === id);
                if (idx >= 0) state.cart[idx] = entry; else state.cart.push(entry);
                n++;
              });
              changes.filter((ch) => !ch.keep).forEach((ch) => planSkip(ch.from));
              saveCart(); buzz(); close(); toast(u.addedN(n)); render();
            },
          }, icon("repeat"), T.lastOrder)),
      ];
    }, PLAN_UI[state.lang].lastWeek);
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
        el("div", { class: "stop-ctas" }, btn(h.start, "solid big", () => startWith(null), "chevron"),
          planPrefs().setup ? btn(PLAN_UI[state.lang].readyTitle(planPrefs().days), "glass big", () => goPlan(false), "calendar") : null),
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
          btn(planPrefs().setup ? PLAN_UI[state.lang].review : PLAN_UI[state.lang].planIt, "glass", () => goPlan(!planPrefs().setup), "calendar"),
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
    const before = state.cat + "|" + state.way + "|" + state.plan;
    applyHash();
    if (state.plan !== "setup") planSwipe = null;
    if (v === "browse" && (state.cat + "|" + state.way + "|" + state.plan) !== before) {
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
