// The Ideas page (#ideas): anyone can share an Instagram, Facebook or YouTube link to a dish.
// The Vercel API in api/ reads the post and writes the card; ideas show up after approval (#admin).
// app.js calls SabahIdeas.render(ctx) / SabahIdeas.renderAdmin(ctx) with its helpers.
(function () {
  "use strict";

  const STRINGS = {
    ar: {
      heading: "💡 أفكار أكلات",
      intro: "شفت أكلة عجبتك على إنستجرام أو فيسبوك أو يوتيوب؟ ابعت الرابط وهنحوّله لكارت فيه الصورة والمكونات. الفكرة بتظهر هنا بعد المراجعة.",
      shareTitle: "شارك فكرة",
      linkLabel: "رابط البوست أو الفيديو",
      linkPh: "https://www.instagram.com/reel/…",
      nameLabel: "اسمك",
      namePh: "مثال: ماما",
      noteLabel: "ملاحظة أو المكونات (اختياري)",
      notePh: "لو عارف المكونات أو عندك تعديل عليها اكتبه هنا",
      submit: "ابعت الفكرة",
      working: "بنقرا الرابط ونجهّز الكارت… ممكن ياخد دقيقة",
      sent: "وصلت! الفكرة هتظهر هنا بعد المراجعة.",
      duplicate: "الفكرة دي اتشاركت قبل كده.",
      listTitle: "الأفكار",
      empty: "لسه مفيش أفكار. ابعت أول فكرة!",
      loading: "بنحمّل الأفكار…",
      notConnected: "صفحة الأفكار لسه مش متوصلة. هتشتغل قريب.",
      loadFailed: "مقدرناش نحمّل الأفكار دلوقتي. جرّب تاني بعد شوية.",
      ingredients: "المكونات",
      likelyIngredients: "مكونات متوقعة",
      by: "الفكرة من",
      sharedBy: "شاركها",
      open: { instagram: "افتح على إنستجرام", facebook: "افتح على فيسبوك", youtube: "افتح على يوتيوب" },
      notFood: "⚠️ يبدو إنها مش أكلة",
      errors: {
        missing_name: "اكتب اسمك الأول.",
        unsupported_link: "الرابط لازم يكون من إنستجرام أو فيسبوك أو يوتيوب.",
        too_many_pending: "فيه أفكار كتير مستنية المراجعة. جرّب تاني بعدين.",
        network: "مفيش اتصال. اتأكد من النت وجرّب تاني.",
        default: "حصلت مشكلة. جرّب تاني.",
      },
      admin: {
        heading: "🔑 مراجعة الأفكار",
        keyLabel: "كلمة سر المراجعة",
        enter: "دخول",
        pending: "مستنية المراجعة",
        approved: "منشورة",
        none: "مفيش حاجة هنا.",
        approve: "✓ انشر",
        reject: "✕ ارفض",
        remove: "احذف",
        confirmRemove: "اضغط تاني للحذف",
        wrongKey: "كلمة السر غلط.",
        notConfigured: "لسه متضافش ADMIN_KEY في Vercel.",
        signOut: "خروج",
      },
    },
    en: {
      heading: "💡 Food ideas",
      intro: "Saw a dish you liked on Instagram, Facebook or YouTube? Share the link and we'll turn it into a card with a photo and ingredients. Ideas show up here after review.",
      shareTitle: "Share an idea",
      linkLabel: "Link to the post or video",
      linkPh: "https://www.instagram.com/reel/…",
      nameLabel: "Your name",
      namePh: "e.g. Mom",
      noteLabel: "Note or ingredients (optional)",
      notePh: "If you know the ingredients or want changes, write them here",
      submit: "Share the idea",
      working: "Reading the link and making the card… this can take a minute",
      sent: "Got it! The idea will show up here after review.",
      duplicate: "This idea was already shared.",
      listTitle: "Ideas",
      empty: "No ideas yet. Share the first one!",
      loading: "Loading ideas…",
      notConnected: "The Ideas page isn't connected yet. It will work soon.",
      loadFailed: "Couldn't load ideas right now. Try again in a bit.",
      ingredients: "Ingredients",
      likelyIngredients: "Likely ingredients",
      by: "Idea from",
      sharedBy: "Shared by",
      open: { instagram: "Open on Instagram", facebook: "Open on Facebook", youtube: "Open on YouTube" },
      notFood: "⚠️ Doesn't look like food",
      errors: {
        missing_name: "Please add your name.",
        unsupported_link: "The link must be from Instagram, Facebook or YouTube.",
        too_many_pending: "Lots of ideas are waiting for review. Try again later.",
        network: "No connection. Check your internet and try again.",
        default: "Something went wrong. Try again.",
      },
      admin: {
        heading: "🔑 Review ideas",
        keyLabel: "Review password",
        enter: "Enter",
        pending: "Waiting for review",
        approved: "Published",
        none: "Nothing here.",
        approve: "✓ Publish",
        reject: "✕ Reject",
        remove: "Delete",
        confirmRemove: "Tap again to delete",
        wrongKey: "Wrong password.",
        notConfigured: "ADMIN_KEY hasn't been added in Vercel yet.",
        signOut: "Sign out",
      },
    },
  };

  const PLATFORM_ICON = { instagram: "📸", facebook: "📘", youtube: "▶️" };

  // Where the API lives: data/config.js, or the same site when it's served from Vercel.
  function apiBase() {
    const configured = (window.SABAH_CONFIG && window.SABAH_CONFIG.ideasApi) || "";
    if (configured) return configured.replace(/\/$/, "");
    return location.hostname.endsWith(".vercel.app") ? "" : null;
  }

  async function api(path, options = {}) {
    const base = apiBase();
    let r;
    try {
      r = await fetch(base + path, {
        ...options,
        headers: { "Content-Type": "application/json", ...(options.headers || {}) },
      });
    } catch (e) {
      return { ok: false, error: "network" };
    }
    try {
      return await r.json();
    } catch (e) {
      return { ok: false, error: "default" };
    }
  }

  // What's typed in the share form survives re-renders (e.g. when the ideas list finishes loading).
  let draft = { url: "", name: null, note: "" };
  function keepDraft() {
    const get = (id) => document.getElementById(id);
    if (get("idea-url")) draft = { url: get("idea-url").value, name: get("idea-name").value, note: get("idea-note").value };
  }
  function refresh(ctx) {
    keepDraft();
    ctx.rerender();
  }

  // Ideas list is cached for the session so switching views doesn't refetch every time.
  let cache = null;
  let loading = false;
  let lastSubmitted = null;
  let formStatus = null; // { kind: "working" | "sent" | "duplicate" | "error", error? }

  function card(ctx, idea, actions) {
    const { el } = ctx;
    const lang = ctx.lang();
    const s = STRINGS[lang];
    const pick = (o) => (o && (o[lang] || o.ar || o.en)) || "";
    const ingredients = (idea.ingredients && (idea.ingredients[lang] || idea.ingredients.ar)) || [];
    return el("article", { class: "idea-card" },
      el("a", { class: "idea-thumb", href: idea.url, target: "_blank", rel: "noopener", "aria-label": s.open[idea.platform] || idea.url },
        idea.cover
          ? el("img", { src: idea.cover, alt: "", loading: "lazy" })
          : el("span", { class: "idea-thumb-empty", "aria-hidden": "true" }, PLATFORM_ICON[idea.platform] || "🍽️"),
        el("span", { class: "idea-platform" }, PLATFORM_ICON[idea.platform] || "🔗")
      ),
      el("div", { class: "idea-body" },
        idea.isFood === false ? el("p", { class: "idea-warn" }, s.notFood) : null,
        el("h3", { class: "idea-title" }, pick(idea.title)),
        pick(idea.summary) ? el("p", { class: "idea-summary" }, pick(idea.summary)) : null,
        ingredients.length ? el("div", { class: "idea-ings" },
          el("p", { class: "idea-label" }, idea.ingredientsSource === "inferred" ? s.likelyIngredients : s.ingredients),
          el("ul", { class: "idea-chips" }, ingredients.map((x) => el("li", null, x)))
        ) : null,
        el("p", { class: "idea-meta" },
          idea.creator ? el("span", null, `${s.by}: `, el("strong", null, el("bdi", null, idea.creator))) : null,
          el("span", null, `${s.sharedBy}: `, el("strong", null, el("bdi", null, idea.sharedBy)))
        ),
        idea.note && actions ? el("p", { class: "idea-note" }, idea.note) : null,
        el("a", { class: "idea-link", href: idea.url, target: "_blank", rel: "noopener" }, (s.open[idea.platform] || idea.url) + " ↗"),
        actions ? el("div", { class: "idea-actions" }, actions) : null
      )
    );
  }

  function load(ctx) {
    if (loading || apiBase() === null) return;
    loading = true;
    api("/api/ideas").then((r) => {
      loading = false;
      cache = r.ok ? { ideas: r.ideas } : { error: true };
      refresh(ctx);
    });
  }

  function render(ctx) {
    const { el } = ctx;
    const s = STRINGS[ctx.lang()];
    const connected = apiBase() !== null;
    if (connected && !cache) load(ctx);

    const savedName = ctx.store.get("sabah-idea-name", "");

    async function submit(e) {
      e.preventDefault();
      const form = e.currentTarget;
      const body = {
        url: form.elements.url.value,
        name: form.elements.name.value,
        note: form.elements.note.value,
        website: form.elements.website.value,
      };
      ctx.store.set("sabah-idea-name", body.name.trim());
      formStatus = { kind: "working" };
      lastSubmitted = null;
      refresh(ctx);
      const r = await api("/api/ideas", { method: "POST", body: JSON.stringify(body) });
      if (r.ok) {
        formStatus = { kind: r.duplicate ? "duplicate" : "sent" };
        lastSubmitted = r.idea;
        draft = { url: "", name: body.name, note: "" };
      } else {
        formStatus = { kind: "error", error: r.error };
        draft = { url: body.url, name: body.name, note: body.note };
      }
      ctx.rerender();
    }

    const busy = formStatus && formStatus.kind === "working";
    const form = el("form", { class: "idea-form", onsubmit: submit, novalidate: true },
      el("h3", { class: "idea-form-title" }, s.shareTitle),
      el("label", { class: "field-label", for: "idea-url" }, s.linkLabel),
      el("input", { class: "note", id: "idea-url", name: "url", type: "url", inputmode: "url", dir: "ltr", required: true, placeholder: s.linkPh, value: draft.url || "" }),
      el("label", { class: "field-label", for: "idea-name" }, s.nameLabel),
      el("input", { class: "note", id: "idea-name", name: "name", type: "text", required: true, maxlength: "60", placeholder: s.namePh, value: draft.name ?? savedName }),
      el("label", { class: "field-label", for: "idea-note" }, s.noteLabel),
      el("textarea", { class: "note idea-textarea", id: "idea-note", name: "note", rows: "3", maxlength: "1000", placeholder: s.notePh }, draft.note || ""),
      el("input", { class: "idea-hp", name: "website", type: "text", tabindex: "-1", autocomplete: "off", "aria-hidden": "true" }),
      el("button", { type: "submit", class: "primary-btn", disabled: busy || !connected }, busy ? "⏳ " + s.working : s.submit),
      formStatus && !busy ? el("p", { class: "idea-status " + formStatus.kind, role: "status" },
        formStatus.kind === "error" ? s.errors[formStatus.error] || s.errors.default : s[formStatus.kind]) : null,
      !connected ? el("p", { class: "idea-status error" }, s.notConnected) : null
    );

    let list;
    if (!connected) list = null;
    else if (!cache) list = el("p", { class: "idea-empty" }, s.loading);
    else if (cache.error) list = el("p", { class: "idea-empty" }, s.loadFailed);
    else if (!cache.ideas.length) list = el("p", { class: "idea-empty" }, s.empty);
    else list = el("div", { class: "idea-grid" }, cache.ideas.map((i) => card(ctx, i)));

    return [
      el("section", { class: "ideas-hero" },
        el("h2", { class: "ideas-heading" }, s.heading),
        el("p", { class: "ideas-intro" }, s.intro)
      ),
      form,
      lastSubmitted ? el("div", { class: "idea-preview" }, card(ctx, lastSubmitted)) : null,
      connected ? el("h2", { class: "group-title" }, s.listTitle) : null,
      list,
    ];
  }

  // ---------- Admin ----------
  let admin = null; // { pending, approved } once signed in
  let adminError = null;
  let armedRemove = null;

  async function adminCall(ctx, method, body) {
    const key = ctx.store.get("sabah-admin-key", "");
    return api("/api/admin", {
      method,
      headers: { "X-Admin-Key": key },
      body: body ? JSON.stringify(body) : undefined,
    });
  }

  async function refreshAdmin(ctx) {
    const r = await adminCall(ctx, "GET");
    const s = STRINGS[ctx.lang()].admin;
    if (r.ok) {
      admin = { pending: r.pending, approved: r.approved };
      adminError = null;
    } else {
      admin = null;
      adminError = r.error === "admin_not_configured" ? s.notConfigured : r.error === "wrong_key" ? s.wrongKey : STRINGS[ctx.lang()].errors.default;
    }
    cache = null; // the public list may have changed
    ctx.rerender();
  }

  function renderAdmin(ctx) {
    const { el } = ctx;
    const s = STRINGS[ctx.lang()];
    const a = s.admin;
    const head = el("section", { class: "ideas-hero" }, el("h2", { class: "ideas-heading" }, a.heading));

    if (apiBase() === null) return [head, el("p", { class: "idea-empty" }, s.notConnected)];

    if (!admin) {
      if (!adminError && ctx.store.get("sabah-admin-key", "")) {
        refreshAdmin(ctx);
        return [head, el("p", { class: "idea-empty" }, s.loading)];
      }
      return [head, el("form", {
        class: "idea-form",
        onsubmit: (e) => {
          e.preventDefault();
          ctx.store.set("sabah-admin-key", e.currentTarget.elements.key.value.trim());
          adminError = null;
          refreshAdmin(ctx);
        },
      },
        el("label", { class: "field-label", for: "admin-key" }, a.keyLabel),
        el("input", { class: "note", id: "admin-key", name: "key", type: "password", autocomplete: "current-password", required: true }),
        el("button", { type: "submit", class: "primary-btn" }, a.enter),
        adminError ? el("p", { class: "idea-status error" }, adminError) : null
      )];
    }

    const act = async (id, action) => {
      await adminCall(ctx, "POST", { id, action });
      refreshAdmin(ctx);
    };
    const pendingCards = admin.pending.map((i) => card(ctx, i, [
      el("button", { type: "button", class: "small-btn approve", onclick: () => act(i.id, "approve") }, a.approve),
      el("button", { type: "button", class: "small-btn danger", onclick: () => act(i.id, "reject") }, a.reject),
    ]));
    const approvedCards = admin.approved.map((i) => card(ctx, i, [
      el("button", {
        type: "button", class: "small-btn danger",
        onclick: (e) => {
          if (armedRemove !== i.id) {
            armedRemove = i.id;
            e.currentTarget.textContent = a.confirmRemove;
            setTimeout(() => { armedRemove = null; }, 3000);
            return;
          }
          armedRemove = null;
          act(i.id, "remove");
        },
      }, a.remove),
    ]));

    return [
      head,
      el("h2", { class: "group-title" }, `${a.pending} (${admin.pending.length})`),
      pendingCards.length ? el("div", { class: "idea-grid" }, pendingCards) : el("p", { class: "idea-empty" }, a.none),
      el("h2", { class: "group-title" }, `${a.approved} (${admin.approved.length})`),
      approvedCards.length ? el("div", { class: "idea-grid" }, approvedCards) : el("p", { class: "idea-empty" }, a.none),
      el("div", { class: "actions" }, el("button", {
        type: "button", class: "text-btn",
        onclick: () => { ctx.store.set("sabah-admin-key", ""); admin = null; adminError = null; ctx.rerender(); },
      }, a.signOut)),
    ];
  }

  window.SabahIdeas = { render, renderAdmin, label: (lang) => (lang === "ar" ? "أفكار" : "Ideas") };
})();
