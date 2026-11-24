# Sabah Menu · قائمة صباح

One menu app that combines two earlier menus, plus food ideas people share:

- **مطبخ البيت / Home Kitchen**: 172 home-cooked dishes in 16 sections, from the earlier
  order list (قائمة الطلبات). Each dish has a photo and a "ready to cook" or "ready to eat"
  tag, shown in the screen's language.
- **بوتشريستا / Butcherista**: 76 meat, chicken and appetizer items in 9 sections, with photos,
  sizes, flavour and marinade choices, and estimated calories, from the earlier guide (دليل بوتشريستا).

The site always opens on a landing page that explains the five ways to order: ready to cook,
ready to eat, meals of the week, عزومات (feasts) and healthy food. It is one dark scene that stays
pinned while you move through those stops, one stop per swipe (or per mouse-wheel or trackpad
gesture, or arrow key): the page snaps to the next stop and can't skip one, and that stop's moment
then plays by itself (raw chicken turning into the cooked dish, a week filling up day by day, a
feast table filling dish by dish), then healthy food and the start button. Nothing else moves until
the next swipe. A bar at the bottom lists every stop from the first screen and
jumps straight to it, and each stop has buttons that open the matching bundle or filtered menu. The logo opens the
landing page again from anywhere, and `#menu` links straight to the menu.

The menu has three levels, so there is never much to choose from at once:

- **Home:** the five ways to order (ready to cook, ready to eat, meals of the week, عزومات,
  healthy) and ten photo categories: chicken and poultry; meat and Egyptian classics; fish and
  seafood; vegetables, stews and soup; eggs, dairy and legumes; rice, pasta, grains and bakery;
  salads, pickles and sauces; desserts; fruit and drinks; Butcherista. Approved food ideas add a tile.
- **A category or a way:** a compact list with one row of filters (the category's sections, then
  ready to cook / ready to eat / healthy / favourites where they apply). The ways list dishes
  from every category with a bar of categories that follows the scroll. Meals of the week and
  عزومات open their bundles.
- **A dish:** tap its photo or name for the full details; tap **+** to add it straight away and
  use − / + to change the amount.

Flavours of the same dish (for example the seven marinated chicken breasts) are listed under one
heading, each still its own row, so nothing is hidden. After adding a dish, the list suggests what
usually goes with it ("بيتطلب معاها"). Search understands words like صحي, للعزومة, أكل الأسبوع,
فطار or حلويات and offers the matching list or bundles, as well as finding dishes by name.

Categories and flavour families are set in `categories` and `families` in `data/menu.js`. A
category lists whole sections, and can leave out dishes (`exclude`) or bring in dishes from other
sections (`include`, shown under its `includeLabel` filter), so every dish sits in exactly one
category with a name that fits it. `subGroups` regroup a category's dishes by kind whatever
section they come from (Butcherista: chicken, beef and lamb, halloumi and boxes, sides; salads:
cut vegetables apart from salads). In "الكل" each part shows under its own heading, so kinds never
mix. A family puts the flavours of one dish (e.g. جبنة قريش, توست بني, طبيخ) under one heading,
each still its own row; a dish belongs to at most one family. The
"goes well with" pairs and the search words are at the top of the Browse part of `app.js`.

Then you review the order and send it as a WhatsApp message, or copy it.
The WhatsApp message is always written in Arabic, even when the app is showing English,
because the chef reads Arabic.
The app works in Arabic and English and follows the phone's light or dark mode. Its look follows
the Cool Teal mode of Kamel's design system (Cairo for Arabic; Sora, Outfit and Montserrat for English).
The order, favourites and last order are saved on the device, so they are still there if the page is closed.

Page addresses: `#welcome` (landing page), `#menu`, `#order`, `#ideas`, `#admin`, `#plan`
(the smart week) and `#plan-setup` (its questions).

### Smart week (`#plan`)

The smart week plans the coming week for one family. The first time, `#plan-setup` asks a few
questions: how many days (5 = Sunday to Thursday, 6 = Saturday to Thursday, or 7), how many people
(1 to 6, + for more), ready to cook, ready to eat or both, what goes in each day (a full meal of
protein + rice, pasta or a tray + salad + dessert; protein only; or your own mix), the week's mood
(tasty & varied, healthy or fasting), and, optionally, fasting days and a day with guests. People
can then see the whole week or go day by day (one big card per day: yes, or something else). The
answers are kept, so later weeks open straight on the result.

`#plan` shows one row per day: the protein with its amount and why it was picked, the day's sides,
a swap button (for the protein or any side, by tapping it) and a lock. "غيّر الأسبوع" refreshes
every day that isn't locked, and one button adds the whole week to the order, each dish with its
day in the note ("يوم الأحد"), and with the same dish on two days added once with both days.

How it picks:

- **Taste and rotation:** favourites come forward, nothing from the last sent order comes back the
  next week, dishes not ordered for 3 weeks or more come back with a "رجعت بعد … أسابيع" tag,
  dishes ordered very often step back, and a dish swapped away rests for 6 weeks.
- **Balance:** one fish day (two in a healthy 6–7 day week), the rest split between chicken and
  meat, never the same kind two days running. Sides rotate between rice with a different طبيخ,
  a pasta and a tray (مكرونة بشاميل, كوسة بشاميل, مسقعة, رز معمر), never rice every day, and dishes
  that already come with rice, freekeh or potatoes get no extra carb. Salads and desserts change
  every day, and flavours of one dish (a family) appear once a week where possible.
- **Calendar:** fasting days (and a fasting week) use only dishes in `fasting` in `data/menu.js`
  (today fish, legumes, the صيامي desserts and the cut vegetables; add the kitchen's other fasting
  dishes there). A guests day leans to dishes from the عزومات bundles. In Ramadan (read from the
  phone's Islamic calendar) every day gets soup and a dessert for iftar. In summer healthy dishes
  get a small lift.

The menu home, the meals-of-the-week page and the landing page show a card for it: "خطط أسبوعك في
دقيقة" before the first plan, then "أسبوعك الجاي جاهز" (with "النهارده يوم طلبك" on the usual order
day, learned from when orders were sent). Once an order has been sent, "زي الأسبوع اللي فات"
repeats it with up to three smart changes, each shown before and after so it can be kept as it
was. A new plan is made after each sent order, or after a week. Everything stays on the phone.

## How to open it

It's plain HTML, CSS and JavaScript with no build step.

- **On a computer:** download the repository (green **Code** button → **Download ZIP**),
  unzip it, and double-click `index.html`.
- **Online:** host the folder with any static host (GitHub Pages, Netlify, Cloudflare Pages).
  On GitHub: **Settings → Pages**, set Branch to `main` and `/ (root)`, then **Save**.
  GitHub Pages on a private repository needs a paid GitHub plan.

## Files

| File | What it is |
|---|---|
| `index.html` | The page |
| `styles.css` | Colours, fonts and layout (light and dark) |
| `app.js` | Menu browsing, the order, and the WhatsApp message |
| `data/menu.js` | **All of the menu content: sections, dishes, sizes, options and photos** |
| `assets/butcherista/thumbs/` | Small Butcherista photos used on the cards |
| `assets/butcherista/full/` | Larger photos shown when an item is opened |
| `assets/kitchen/thumbs/` | Small home-kitchen photos used on the cards (300×300) |
| `assets/kitchen/full/` | Larger home-kitchen photos shown when a dish is opened (600×600) |

## Changing the menu

Everything is in `data/menu.js`. A home-kitchen dish looks like this:

```js
{
 "id": "k31",
 "ar": "فول",
 "en": "Fava beans (ful)",
 "img": "assets/kitchen/thumbs/k31.webp",
 "full": "assets/kitchen/full/k31.webp",
 "ready": "eat"
}
```

`ready` is `"cook"` for dishes that come raw or marinated and still need cooking, and `"eat"`
for dishes that come cooked. It only changes the tag on screen ("Ready to cook" / "جاهز للطبخ",
"Ready to eat" / "جاهز للأكل"); the WhatsApp message stays the same. Leave out `img`, `full`
or `ready` and the dish simply shows without them.

The home-kitchen photos were made with AI image generation (Canva) for this menu, so they show
what each dish looks like in general, not the exact dish that will be delivered.

A Butcherista item can also have a photo, sizes, options, a description and calories:

```js
{
 "id": "b2",
 "ar": "دجاج بانيه صحي",
 "en": "Healthy Chicken Panne",
 "img": "assets/butcherista/thumbs/....webp",
 "full": "assets/butcherista/full/....webp",
 "sizes": [{ "ar": "٤٠٠ جم", "en": "400g" }, { "ar": "٨٠٠ جم", "en": "800g" }],
 "options": [{ "ar": "النكهة", "en": "Flavor",
   "choices": [{ "ar": "اوريجنال", "en": "Original" }, { "ar": "حار", "en": "Spicy" }] }]
}
```

- To add a dish, copy one inside the right section, paste it below, and give it a new `id`
  that no other item uses.
- Every item needs both `ar` and `en`.
- Items in the Butcherista group are ordered in packs. Items in the Home Kitchen group are
  ordered by kilo, plate/box, or piece/bag.

Extra fields that shape the menu:

| Field | Where | What it does |
|---|---|---|
| `unit` | section or dish | The unit a dish starts with when added: `"kg"`, `"plate"` or `"piece"`. A dish's own `unit` wins over its section's. Amounts go up by 0.5 for kilos and by 1 otherwise. |
| `ready` | section or dish | `"cook"` or `"eat"`. Shows the "ready to cook" / "ready to eat" tag and feeds those filters. A dish's own value wins. Butcherista sections with raw or frozen products are marked `"cook"`. |
| `healthy` | section or dish | `true` puts the dish under the Healthy filter. |

### Cooking preferences

How the kitchen cooks for the house: الدقيق (أبيض / حبة كاملة), الدهون اللي بنطبخ بيها (زيت درة,
زيت زيتون, سمنة بلدي, زبدة, زيت على زبدة, each with a one-line hint), كمية الدهون (قليلة خالص /
متوسطة), الخلطة (عادي / سبايسي) and التتبيلة (خفيفة / متوسطة / قوية). Nothing set means the kitchen
cooks it its usual way ("زي المطبخ").

- The order page shows a "هيتعمل كده" card with only the preferences that apply to the dishes in
  the order; "غيّر" sets them for the house.
- A dish's page shows what it will follow and "غيّر للصنف ده بس" to change just that dish
  (remembered for next time); a changed choice shows in blue.
- The chef's message starts with one "🧂 طريقة الطبخ للطلب كله" block listing the house choices that
  apply to the order, and a dish that differs says so on its own line, e.g. "(الخلطة: سبايسي)".

Which preferences a dish offers is its `prefs` list in `data/menu.js`: `flour`, `fat` (which also
brings how much fat), `mix` and `mar`. They were tagged from the dish names (breaded, béchamel,
pastries and desserts get flour; cooked dishes, pastries and syrupy desserts get fat; kofta and egg
mixes get the mix; marinated dishes get the marinade); edit a dish's list to change it.

### Ready-made bundles

`collections` at the end of `data/menu.js` lists the bundles shown on the landing page and above
the menu. A bundle is a list of **slots**: a day of the week, or a role such as rice or dessert.
Each slot has a **pool** of dishes that fit it:

```js
{
 "id": "week-family",
 "kind": "week",            // "week" (meals of the week) or "feast" (عزومات)
 "ar": "أسبوع العيلة", "en": "Family week",
 "desc": { "ar": "…", "en": "…" },
 "slots": [
  { "day": 0, "ar": "السبت", "en": "Saturday", "pool": ["k14", "k110", "k101"] },
  { "ar": "رز", "en": "Rice", "pool": ["k131", "k130"] }
 ]
}
```

`day` is 0 for Saturday through 6 for Friday. Every id in a pool must be a dish on the menu, and the
first dish in a pool is preferred when nothing else decides.

In the bundle sheet people can:

- **Refresh** to pick new dishes for every slot that isn't locked. Picks avoid dishes from the
  last few sent orders and dishes the person switched away from, and lean towards favourites and
  healthy dishes (strongly in the healthy bundle).
- **Lock** a dish so refresh keeps it, untick a dish to leave it out, or **switch** one dish to see
  up to three better options, each tagged with why: a favourite, healthier, not ordered lately,
  or something different.
- Choose amounts **by number of people** or set them **by hand**. The estimates come from
  `portions` in `data/menu.js`: how many people a kilo, a plate/box and a piece/bag feed, and
  `feast`, the share of a normal portion each guest eats of every dish at a feast (several dishes,
  smaller helpings). Kilos round up to the nearest half.
- Add notes for every dish (low salt, no onions, less oil, mildly spicy, or their own). In a week
  bundle each dish also gets its day in its note ("يوم السبت"). In a feast they can give the date
  and time, which goes into the order's general note.

The order page has a general note for the chef, sent at the end of the WhatsApp message.
Picks, the people count, the history of sent orders and switched-away dishes are kept on the
device only.

## Food ideas page (`#ideas`)

Anyone can share a link to a dish from Instagram, Facebook or YouTube at
`sabah.kamelnabil.com/#ideas`. A small helper on Vercel (`api/`) reads the post, keeps a copy of
its cover photo, and uses Claude to write a card with the dish name, a short description and the
ingredients, in Arabic and English. Each idea waits for approval at `#admin` before it appears.

Approved ideas also show up in the menu under a third tab, **أفكار / Ideas**, and anyone can
order them like any other dish (or tap **Order it** on the idea's card). In the WhatsApp message,
each idea is followed by the link to the original post, so the chef can open it and see how it's made.

Instagram and Facebook often hide a post's text from outside readers. When that happens the card is
built from the photo, so the ingredients are marked as "likely ingredients", and the person sharing
can type the real ingredients in the note box.

### Setting up the helper on Vercel (once)

1. Import this repository as a Vercel project (vercel.com/new). No build settings are needed.
2. In the project's **Storage** tab, create a **Blob** store and connect it to the project.
   That adds `BLOB_READ_WRITE_TOKEN` by itself.
3. In **Settings → Environment Variables**, add:
   - `ANTHROPIC_API_KEY`: a Claude API key from console.anthropic.com
   - `ADMIN_KEY`: any password you choose; you type it on the `#admin` page to approve ideas
4. Redeploy, then put the project's address in `data/config.js` as `ideasApi`
   (for example `https://sabah-menu.vercel.app`).

### Files

| File | What it is |
|---|---|
| `ideas.js` | The Ideas and approval pages |
| `data/config.js` | Where the site finds the helper (`ideasApi`) |
| `api/ideas.js` | Lists approved ideas and accepts new ones |
| `api/admin.js` | Approve, reject or delete ideas (needs `ADMIN_KEY`) |
| `api/_lib.js` | Reading the post, saving photos, writing the card with Claude, storage |

## Notes

- The Butcherista photos, weights and descriptions were collected from butcherista.com as
  ideas for the home menu. Keep that in mind before making the site public.
- Calories are rough estimates from the original guide, not lab measurements.
