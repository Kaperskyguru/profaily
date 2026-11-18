/** A help page as the template consumes it. Authored as help/<slug>.md; the loader is ./load.ts. */
export type HelpPage = {
  slug: string;
  title: string;
  description: string;
  section: string;
  order: number;
  updated: string;
  updatedLabel: string;
  toc: { id: string; label: string }[];
  related: string[];
  faq?: { q: string; a: string }[];
  body: string;
};
