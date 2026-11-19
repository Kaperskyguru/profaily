/**
 * A comparison page at /compare/<slug>: Profaily next to one rival, feature by feature.
 * Every rival cell must be backed by the rival's own pages (keep the research notes with the page's facts file);
 * Profaily cells come from the code. Pages list what Profaily does; they don't list what it doesn't.
 */

/** yes: has it. partial: has a weaker or manual version. no: doesn't, per its own docs. */
export type Mark = "yes" | "partial" | "no";

export type Cell = { mark: Mark; text: string };

export type FeatureRow = { feature: string; detail?: string; them: Cell; us: Cell };

export type Comparison = {
  slug: string;
  rival: string;
  meta: { title: string; description: string };
  /** The date the rival facts were last checked, e.g. "November 19, 2026". */
  checked: string;
  hero: { lede: string; shot: { src: string; alt: string } };
  stats: { value: string; label: string }[];
  workflow: {
    title: string;
    lede: string;
    them: string[];
    us: string[];
  };
  groups: { title: string; rows: FeatureRow[] }[];
  reasons: { title: string; body: string; shot: { src: string; alt: string } }[];
  founder: { name: string; role: string; quote: string[] };
  faq: { q: string; a: string }[];
  cta: { title: string; body: string };
};
