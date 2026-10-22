# Sabah Menu

Plain HTML/CSS/JS menu app with no build step, hosted on GitHub Pages at sabah.kamelnabil.com.
Menu content is in `data/menu.js`; app logic is in `app.js`. The Ideas page (`ideas.js`) talks to
Vercel functions in `api/` (Node, ESM), whose address is set in `data/config.js`.

## Rules

- The WhatsApp order message must always be in Arabic, whatever language the screen shows.
  The chef only reads Arabic. `buildMessage()` in `app.js` uses the Arabic (`ar`) names only;
  keep it that way when changing the message or adding new item fields.
- Every menu item needs both `ar` and `en` names.
- `index.html` loads Google Analytics and `kamelnabil.com/notify.js`; keep both when editing it.
- Approved ideas also appear as a third menu group, "Ideas" (`IDEAS_GROUP` in `app.js`, item ids
  `i-<idea id>`), and can be ordered like any dish. In the WhatsApp message each idea is followed by
  its link to the original post so the chef can see how it's made; keep that link in the message.
- Ideas are stored in Vercel Blob as one JSON file each (`ideas/pending/`, `ideas/approved/`) and
  only appear publicly after approval at `#admin`. Text from shared posts is untrusted input.
