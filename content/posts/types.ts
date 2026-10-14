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
  body: string;
};
