import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { headingsOf } from "../posts/headings";
import { HELP_SECTION_NAMES } from "./sections";
import type { HelpPage } from "./types";

/**
 * Help pages are markdown files: help/<slug>.md, YAML frontmatter then the page body, rendered at /help/<slug>.
 * Every .md file in that folder is a page; nothing else needs registering (the index and sitemap read them all).
 *
 * Frontmatter:
 *   title        required. The h1 and <title> (" | Profaily Help" is appended); also the index link
 *   description  required. Lede, meta description and the index blurb. Answer the question in it.
 *   section      required. One of the groups in ./sections.ts, written exactly
 *   order        required. Position inside its section on the index (1 first)
 *   updated      required. "2026-11-18": when the steps were last checked against the app
 *   related      optional. Up to three other help slugs for "Related help"; each must exist
 *   faq          optional. [{q, a}] copied word for word from the body; adds FAQPage JSON-LD
 *   draft        optional. true hides the page from the production build
 *
 * Body: the same markdown as blog posts (components/ui/PostMarkdown.tsx). Images must be real app screenshots made
 * with `yarn shot <capture> <help-slug> <name>`, which writes /assets/help/<slug>/<name>.jpg. The build fails on an
 * image outside that folder, a missing file or missing alt text.
 */

const HELP_DIR = path.join(process.cwd(), "help");

export class HelpError extends Error {
  constructor(file: string, message: string) {
    super(`help/${file}: ${message}`);
    this.name = "HelpError";
  }
}

const label = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

export function loadHelpPage(slug: string): HelpPage & { draft: boolean } {
  const file = `${slug}.md`;
  const full = path.join(HELP_DIR, file);
  if (!fs.existsSync(full)) throw new HelpError(file, "no such file");
  const { data, content } = matter(fs.readFileSync(full, "utf8"));
  const text = (key: string) => {
    const v = data[key];
    if (typeof v !== "string" || !v.trim()) throw new HelpError(file, `"${key}" is required (a non-empty text value)`);
    return v.trim();
  };

  const body = content.trim();
  if (!body) throw new HelpError(file, "the page body is empty");
  for (const [, alt, src] of body.matchAll(/!\[([^\]]*)\]\(([^)\s]+)[^)]*\)/g)) {
    if (!alt.trim()) throw new HelpError(file, `the image ${src} needs alt text: say what the reader should see`);
    if (!src.startsWith(`/assets/help/${slug}/`)) throw new HelpError(file, `the image ${src} must be in /assets/help/${slug}/: make it with yarn shot`);
    if (!fs.existsSync(path.join(process.cwd(), "public", src.split("?")[0]))) throw new HelpError(file, `the image ${src} does not exist`);
  }

  const section = text("section");
  if (!HELP_SECTION_NAMES.includes(section)) {
    throw new HelpError(file, `"section" must be one of ${HELP_SECTION_NAMES.map((s) => JSON.stringify(s)).join(", ")}, got ${JSON.stringify(section)}`);
  }
  if (typeof data.order !== "number" || !Number.isInteger(data.order) || data.order < 1) throw new HelpError(file, `"order" must be a whole number from 1`);
  const updatedRaw = data.updated instanceof Date ? data.updated.toISOString().slice(0, 10) : String(data.updated ?? "").trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(updatedRaw)) throw new HelpError(file, `"updated" must be a date like 2026-11-18`);

  const related = data.related ?? [];
  if (!Array.isArray(related) || related.some((r) => typeof r !== "string")) throw new HelpError(file, `"related" must be a list of help slugs`);
  const faq = data.faq === undefined ? undefined : Array.isArray(data.faq) ? data.faq : null;
  if (faq === null || faq?.some((f) => typeof f?.q !== "string" || typeof f?.a !== "string")) throw new HelpError(file, `"faq" must be a list of { q, a }`);

  return {
    slug,
    title: text("title"),
    description: text("description"),
    section,
    order: data.order,
    updated: updatedRaw,
    updatedLabel: label(updatedRaw),
    toc: headingsOf(body),
    related: related as string[],
    faq,
    draft: data.draft === true,
    body,
  };
}

/** Every help page, drafts left out of production, in index order: section order, then `order`. */
export function loadAllHelpPages(): HelpPage[] {
  if (!fs.existsSync(HELP_DIR)) return [];
  const all = fs
    .readdirSync(HELP_DIR, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith(".md"))
    .map((e) => loadHelpPage(e.name.slice(0, -3)));
  const known = new Set(all.map((p) => p.slug));
  for (const p of all) {
    for (const r of p.related) {
      if (r === p.slug || !known.has(r)) throw new HelpError(`${p.slug}.md`, `"related" has "${r}", which is not another help page`);
    }
  }
  const live = process.env.NODE_ENV === "production" ? all.filter((p) => !p.draft) : all;
  return live.sort((a, b) => HELP_SECTION_NAMES.indexOf(a.section) - HELP_SECTION_NAMES.indexOf(b.section) || a.order - b.order || a.slug.localeCompare(b.slug));
}
