# Sabah Menu

Plain HTML/CSS/JS menu app with no build step. Menu content is in `data/menu.js`; app logic is in `app.js`.

## Rules

- The WhatsApp order message must always be in Arabic, whatever language the screen shows.
  The chef only reads Arabic. `buildMessage()` in `app.js` uses the Arabic (`ar`) names only;
  keep it that way when changing the message or adding new item fields.
- Every menu item needs both `ar` and `en` names.
