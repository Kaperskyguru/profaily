import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { headingsOf } from "./headings";
import type { PostContent } from "./types";

/**
 * Posts are markdown files: content/posts/<slug>.md, YAML frontmatter then the article body. Every .md file in
 * that folder is a post (the file name is the slug and the route, /blog/<slug>); nothing else needs registering.
 * Sub-folders such as _parked/ are ignored.
 *
 * You write only what a person has to write. Frontmatter:
 *   title          required. Article h1 (<title> appends " | Profaily Blog"); also the index card heading
 *   description    required. Lede, meta description, og:description and index card blurb
 *   category       required. Breadcrumb, meta row, card badge; its lower-case form is the blog filter value
 *   datePublished  required. "2026-09-29" (quoted or not); the post's date, newest first on the index
 *   cta            optional. {href, label} for the "Put the workflow to work" card (default: Explore features)
 *   sources        optional. [{href, label}] for "Sources and further reading"
 *   related        optional. Slugs of up to three "Keep reading" cards; each must be a real post
 *   featured       optional. true pins the post to the top of the index (otherwise newest first)
 *   author         optional. Named author for a first-person post (byline, Article JSON-LD as a Person);
 *                  without it both say "Profaily Editorial"
 *   sourcesChecked optional. Text date the sources were checked, e.g. "November 6, 2026"
 *   faq            optional. [{q, a}] copied word for word from the body's FAQ; adds FAQPage JSON-LD
 *   draft          optional. true hides the post from the production build; `yarn dev` still shows it
 *
 * Computed from the body, never written by hand: the "In this guide" list (the ## headings), the read time
 * ("7 min read") and the date label ("September 29, 2026"). Old posts that still carry slug, toc, readTime or
 * dateLabel are fine: those fields are ignored.
 *
 * Body: GitHub-flavoured markdown rendered by components/ui/PostMarkdown.tsx (no raw HTML).
 *  ## Heading              h2; gets an id from its text (see ./headings.ts)
 *  ## Heading {#my-id}     h2 with that exact id, when a link into the article must stay stable
 *  > **Label:** text       callout box (a blockquote is always rendered as the callout)
 *  | a | b |               table, styled as the article table
 *  [text](https://…)       external links open in a new tab; /paths stay plain links
 */

const POSTS_DIR = path.join(process.cwd(), "content", "posts");
const WORDS_PER_MINUTE = 220;
const DEFAULT_CTA = { href: "/features", label: "Explore features" };

/** A mistake in a post file, named so the fix is obvious: file, field, what was expected. */
export class PostError extends Error {
  constructor(file: string, message: string) {
    super(`content/posts/${file}: ${message}`);
    this.name = "PostError";
  }
}

const text = (file: string, data: Record<string, unknown>, key: string): string => {
  const v = data[key];
  if (typeof v !== "string" || !v.trim()) throw new PostError(file, `"${key}" is required (a non-empty text value)`);
  return v.trim();
};

/** YAML turns an unquoted 2026-09-29 into a Date and leaves a quoted one as text; both are accepted. */
function dateOf(file: string, v: unknown): string {
  const iso = v instanceof Date ? v.toISOString().slice(0, 10) : typeof v === "string" ? v.trim() : "";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso) || Number.isNaN(Date.parse(`${iso}T00:00:00Z`))) {
    throw new PostError(file, `"datePublished" must be a date like 2026-09-29, got ${JSON.stringify(v)}`);
  }
  return iso;
}

const dateLabel = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

function readTime(body: string): string {
  const words = body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`|[\]()-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))} min read`;
}

function links(file: string, data: Record<string, unknown>, key: string): { href: string; label: string }[] {
  const v = data[key];
  if (v === undefined || v === null) return [];
  if (!Array.isArray(v)) throw new PostError(file, `"${key}" must be a list of { href, label }`);
  return v.map((item, i) => {
    const o = item as { href?: unknown; label?: unknown };
    if (typeof o?.href !== "string" || typeof o?.label !== "string" || !o.href || !o.label) {
      throw new PostError(file, `"${key}" item ${i + 1} needs both href and label`);
    }
    return { href: o.href, label: o.label };
  });
}

export function loadPost(slug: string): PostContent {
  const file = `${slug}.md`;
  const full = path.join(POSTS_DIR, file);
  if (!fs.existsSync(full)) throw new PostError(file, "no such file");
  const { data, content } = matter(fs.readFileSync(full, "utf8"));
  if (data.slug !== undefined && data.slug !== slug) throw new PostError(file, `frontmatter slug "${data.slug}" must match the file name "${slug}"`);

  const body = content.trim();
  if (!body) throw new PostError(file, "the article body is empty");
  const datePublished = dateOf(file, data.datePublished);
  const cta = data.cta === undefined ? DEFAULT_CTA : links(file, { cta: [data.cta] }, "cta")[0];
  const related = data.related === undefined ? [] : data.related;
  if (!Array.isArray(related) || related.some((r) => typeof r !== "string")) throw new PostError(file, `"related" must be a list of post slugs`);

  const optText = (key: string) => (data[key] === undefined ? undefined : text(file, data, key));
  const faq = data.faq === undefined ? undefined : Array.isArray(data.faq) ? data.faq : null;
  if (faq === null || faq?.some((f) => typeof f?.q !== "string" || typeof f?.a !== "string")) {
    throw new PostError(file, `"faq" must be a list of { q, a }`);
  }

  return {
    slug,
    category: text(file, data, "category"),
    title: text(file, data, "title"),
    description: text(file, data, "description"),
    readTime: readTime(body),
    datePublished,
    dateLabel: dateLabel(datePublished),
    toc: headingsOf(body),
    cta,
    sources: links(file, data, "sources"),
    related: related as string[],
    author: optText("author"),
    sourcesChecked: optText("sourcesChecked"),
    faq,
    featured: data.featured === true,
    draft: data.draft === true,
    body,
  };
}

/** Every post in content/posts, ready for the blog: drafts left out of production, featured first, then newest first. */
export function loadAllPosts(): PostContent[] {
  const slugs = fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith(".md"))
    .map((e) => e.name.slice(0, -3));
  const all = slugs.map(loadPost);
  const known = new Set(all.map((p) => p.slug));
  for (const p of all) {
    for (const r of p.related) {
      if (r === p.slug) throw new PostError(`${p.slug}.md`, `"related" lists the post itself`);
      if (!known.has(r)) throw new PostError(`${p.slug}.md`, `"related" has "${r}", which is not a post in content/posts`);
    }
  }
  const live = process.env.NODE_ENV === "production" ? all.filter((p) => !p.draft) : all;
  return live.sort((a, b) => Number(b.featured) - Number(a.featured) || b.datePublished.localeCompare(a.datePublished) || a.slug.localeCompare(b.slug));
}
