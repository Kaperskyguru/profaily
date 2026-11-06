/**
 * Heading ids for a post. Shared by the loader (which builds the "In this guide" list from the body) and by
 * components/ui/PostMarkdown.tsx (which puts the ids on the rendered h2s), so the two always agree.
 *
 * `## Heading {#id}` pins the id; a heading without one gets its text slugified ("Prepare the versions" becomes
 * "prepare-the-versions"), with -2, -3 added when the same text appears twice.
 */
export const EXPLICIT_ID = /\s*\{#([A-Za-z][\w-]*)\}\s*$/;

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[`*_~[\]()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "section";

/** Hands out unique ids in document order. */
export function idMaker() {
  const used = new Map<string, number>();
  return (text: string) => {
    const base = slugify(text);
    const n = (used.get(base) ?? 0) + 1;
    used.set(base, n);
    return n === 1 ? base : `${base}-${n}`;
  };
}

/** The h2 headings of a markdown body, outside code fences, with their final ids. */
export function headingsOf(body: string): { id: string; label: string }[] {
  const next = idMaker();
  const out: { id: string; label: string }[] = [];
  let fenced = false;
  for (const line of body.split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) fenced = !fenced;
    if (fenced) continue;
    const m = /^##\s+(.+?)\s*#*\s*$/.exec(line);
    if (!m) continue;
    const explicit = EXPLICIT_ID.exec(m[1]);
    const label = (explicit ? m[1].slice(0, explicit.index) : m[1]).trim();
    out.push({ id: explicit ? explicit[1] : next(label), label });
  }
  return out;
}
