import type { ReactNode } from "react";

export type FaqItem = { q: string; a: ReactNode };

/** Jobmate's FAQ: heading on the left, question cards on the right; the open card turns mint. */
export function Faq({
  heading = "Questions people ask first",
  lede,
  items,
  id = "faq",
  open = 0,
}: {
  heading?: string;
  lede?: ReactNode;
  items: FaqItem[];
  id?: string;
  /** Index of the question open on load; -1 for none. */
  open?: number;
}) {
  return (
    <section className="wrap faq" id={id} aria-labelledby={`${id}-h`}>
      <div>
        <h2 id={`${id}-h`}>{heading}</h2>
        {lede && <p className="lead">{lede}</p>}
      </div>
      <div className="q">
        {items.map((item, i) => (
          <details key={item.q} open={i === open}>
            <summary>
              <span className="qq" aria-hidden="true">Q</span>
              {item.q}
              <span className="pm" aria-hidden="true" />
            </summary>
            <div className="ans">{typeof item.a === "string" ? <p>{item.a}</p> : item.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
