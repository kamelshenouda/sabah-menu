// Approving shared ideas. Every request needs the X-Admin-Key header to match ADMIN_KEY.
// GET  /api/admin → { pending, approved }
// POST /api/admin → { id, action: "approve" | "reject" | "remove" }
import { cors, fail, isAdmin, loadIdeas, saveIdea, removeIdea, publicIdea } from "./_lib.js";

export default async function handler(req, res) {
  if (cors(req, res)) return;
  if (!process.env.ADMIN_KEY) return fail(res, 503, "admin_not_configured");
  if (!isAdmin(req)) return fail(res, 401, "wrong_key");

  const [pending, approved] = await Promise.all([loadIdeas("pending"), loadIdeas("approved")]);

  if (req.method === "GET") {
    return res.status(200).json({ ok: true, pending: pending.map(publicIdea), approved: approved.map(publicIdea) });
  }
  if (req.method !== "POST") return fail(res, 405, "method_not_allowed");

  const { id, action } = typeof req.body === "object" && req.body ? req.body : {};
  if (action === "approve" || action === "reject") {
    const idea = pending.find((i) => i.id === id);
    if (!idea) return fail(res, 404, "not_found");
    if (action === "approve") {
      const { _blob, ...rest } = idea;
      await saveIdea({ ...rest, status: "approved", approvedAt: new Date().toISOString() });
    }
    await removeIdea(idea, { keepCover: action === "approve" });
    return res.status(200).json({ ok: true });
  }
  if (action === "remove") {
    const idea = approved.find((i) => i.id === id);
    if (!idea) return fail(res, 404, "not_found");
    await removeIdea(idea);
    return res.status(200).json({ ok: true });
  }
  return fail(res, 400, "unknown_action");
}
