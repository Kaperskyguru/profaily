/**
 * A blog post as the template consumes it: the frontmatter fields plus the markdown `body`.
 * Posts are authored as content/posts/<slug>.md; the frontmatter schema is documented in ./load.ts.
 * Everything else on a blog article is shared template markup, see
 * components/templates/ArticlePage.tsx, which renders `body` through components/ui/PostMarkdown.tsx.
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
  /** Optional: a named author for a first-person post (byline and Article JSON-LD). Defaults to "Profaily Editorial". */
  author?: string;
  /** Optional: the date the sources were checked, as shown above the sources list. */
  sourcesChecked?: string;
  /** Optional: the post's FAQ, copied word for word from its body; drives the FAQPage JSON-LD. */
  faq?: { q: string; a: string }[];
  body: string;
};
