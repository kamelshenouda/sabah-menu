# Sabah Menu · قائمة صباح

One menu app that combines two earlier menus:

- **مطبخ البيت / Home Kitchen**: 172 home-cooked dishes in 16 sections, from the earlier
  order list (قائمة الطلبات).
- **بوتشريستا / Butcherista**: 76 meat, chicken and appetizer items in 9 sections, with photos,
  sizes, flavour and marinade choices, and estimated calories, from the earlier guide (دليل بوتشريستا).

You browse or search the menu, tap an item to add it to the order (with quantity, unit or size,
options and a note), then send the order as a WhatsApp message or copy it.
The WhatsApp message is always written in Arabic, even when the app is showing English,
because the chef reads Arabic.
The app works in Arabic and English and follows the phone's light or dark mode.
The order is saved on the device, so it's still there if the page is closed.

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

## Changing the menu

Everything is in `data/menu.js`. A home-kitchen dish looks like this:

```js
{
 "id": "k31",
 "ar": "فول",
 "en": "Fava beans (ful)"
}
```

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

## Notes

- The Butcherista photos, weights and descriptions were collected from butcherista.com as
  ideas for the home menu. Keep that in mind before making the site public.
- Calories are rough estimates from the original guide, not lab measurements.
