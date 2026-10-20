// GET  /api/ideas  → approved ideas, newest first
// POST /api/ideas  → { url, name, note } shares a new idea; it waits for approval before it shows up
import {
  cors, fail, parseLink, readPost, saveCover, describe,
  newId, saveIdea, loadIdeas, publicIdea, MAX_PENDING,
} from "./_lib.js";

export const config = { maxDuration: 60 };

export default async function handler(req, res) {
  if (cors(req, res)) return;

  if (req.method === "GET") {
    const ideas = await loadIdeas("approved");
    res.setHeader("Cache-Control", "s-maxage=20, stale-while-revalidate=60");
    return res.status(200).json({ ok: true, ideas: ideas.map(publicIdea) });
  }
  if (req.method !== "POST") return fail(res, 405, "method_not_allowed");

  const body = typeof req.body === "object" && req.body ? req.body : {};
  if (body.website) return fail(res, 400, "rejected"); // honeypot field real people never fill in
  const name = String(body.name || "").trim().slice(0, 60);
  const note = String(body.note || "").trim().slice(0, 1000);
  if (!name) return fail(res, 400, "missing_name");
  const link = parseLink(body.url);
  if (!link) return fail(res, 400, "unsupported_link");

  const [pending, approved] = await Promise.all([loadIdeas("pending"), loadIdeas("approved")]);
  const existing = [...pending, ...approved].find((i) => i.url === link.url);
  if (existing) return res.status(200).json({ ok: true, duplicate: true, idea: publicIdea(existing) });
  if (pending.length >= MAX_PENDING) return fail(res, 429, "too_many_pending");

  const id = newId();
  const meta = await readPost(link);
  const cover = await saveCover(id, meta.image);
  const card = await describe({ ...link, meta, note, cover });

  const idea = {
    id,
    status: "pending",
    createdAt: new Date().toISOString(),
    url: link.url,
    platform: link.platform,
    sharedBy: name,
    note,
    cover,
    creator: card.creator_name || meta.author || "",
    isFood: card.is_food,
    title: { ar: card.title_ar, en: card.title_en },
    summary: { ar: card.summary_ar, en: card.summary_en },
    ingredients: { ar: card.ingredients_ar, en: card.ingredients_en },
    ingredientsSource: card.ingredients_source,
  };
  await saveIdea(idea);
  return res.status(201).json({ ok: true, idea });
}
