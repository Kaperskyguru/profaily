import type { ReactNode } from "react";

/**
 * PostContent fields (everything else on a blog article is shared template markup, see
 * components/templates/ArticlePage.tsx):
 *  slug           route slug (/blog/<slug>); also names the cover image /assets/blog-featured-<slug>.svg
 *  category       topic label: breadcrumb, meta row, index card badge, related-card badge; its lower-case
 *                 form is the index card's data-category and the blog filter button value
 *  title          article h1 (og:title / <title> append " | Profaily Blog"; also the index card heading)
 *  description    lede paragraph (meta description, og:description, JSON-LD and index card blurb)
 *  readTime       "7 min read" meta text (also on index and related cards)
 *  datePublished  ISO date for <time datetime> and the Article JSON-LD (datePublished and dateModified)
 *  dateLabel      human-readable date shown in <time>
 *  toc            "In this guide" aside links: {id, label}; each id is an h2 id inside blocks
 *  cta            feature link of the "Put the workflow to work" aside card: {href, label}
 *  sources        "Sources and further reading" list: {href, label}[]
 *  related        slugs of the three "More from Profaily" cards, in display order
 *  blocks         article body, one top-level element each (p, h2, ul, ol, table wrapper, callout);
 *                 the template puts a single whitespace text node between consecutive blocks
 */
export type PostContent = {
  slug: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
  datePublished: string;
  dateLabel: string;
  toc: { id: string; label: string }[];
  cta: { href: string; label: string };
  sources: { href: string; label: string }[];
  related: string[];
  blocks: ReactNode[];
};
