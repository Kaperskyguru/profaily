import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { PostContent } from "./types";

/**
 * Loads a blog post from content/posts/<slug>.md at build/render time (Node only, never shipped to
 * the browser). The file is YAML frontmatter followed by the markdown article body.
 *
 * Frontmatter fields (everything else on a blog article is shared template markup, see
 * components/templates/ArticlePage.tsx). Quote every string; an unquoted 2026-09-29 would be parsed
 * as a date instead of text.
 *  slug           route slug (/blog/<slug>), must equal the file name; also names the cover image
 *                 /assets/blog-featured-<slug>.svg
 *  category       topic label: breadcrumb, meta row, index card badge, related-card badge; its
 *                 lower-case form is the index card's data-category and the blog filter button value
 *  title          article h1 (og:title / <title> append " | Profaily Blog"; also the index card heading)
 *  description    lede paragraph (meta description, og:description, JSON-LD and index card blurb)
 *  readTime       "7 min read" meta text (also on index and related cards)
 *  datePublished  ISO date for <time datetime> and the Article JSON-LD (datePublished and dateModified)
 *  dateLabel      human-readable date shown in <time>
 *  toc            "In this guide" aside links: list of {id, label}; each id is a heading id in the body
 *  cta            feature link of the "Put the workflow to work" aside card: {href, label}
 *  sources        "Sources and further reading" list: list of {href, label}
 *  related        slugs of the three "More from Profaily" cards, in display order
 *
 * Body: GitHub-flavoured markdown rendered by components/ui/PostMarkdown.tsx (no raw HTML).
 *  ## Heading {#id}   h2 with that exact id (ids are never derived from the heading text)
 *  > **Label:** text  callout box (a blockquote is always rendered as the callout)
 *  | a | b |          table, styled as the article table
 *  [text](https://…)  external links open in a new tab; /paths stay plain links
 */

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

const STRING_FIELDS = ["slug", "category", "title", "description", "readTime", "datePublished", "dateLabel"] as const;

export function loadPost(slug: string): PostContent {
  const file = path.join(POSTS_DIR, `${slug}.md`);
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  for (const key of STRING_FIELDS) {
    if (typeof data[key] !== "string") throw new Error(`${slug}.md: frontmatter "${key}" must be a quoted string`);
  }
  if (data.slug !== slug) throw new Error(`${slug}.md: frontmatter slug "${data.slug}" must match the file name`);
  for (const key of ["toc", "sources", "related"]) {
    if (!Array.isArray(data[key])) throw new Error(`${slug}.md: frontmatter "${key}" must be a list`);
  }
  if (!data.cta?.href || !data.cta?.label) throw new Error(`${slug}.md: frontmatter "cta" needs href and label`);
  return { ...(data as Omit<PostContent, "body">), body: content.trim() };
}
