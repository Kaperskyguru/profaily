import type { ReactNode } from "react";

export type FaqItem = { q: string; a: ReactNode };

/** Shared `.faq` section: eyebrow + heading + microcopy on the left, `<details>` list on the right. */
export function Faq({
  eyebrow,
  heading,
  microcopy,
  microcopyClassName = "microcopy",
  items,
}: {
  eyebrow: string;
  heading: string;
  microcopy: string;
  /** Tool pages style this line as `section-lede`. */
  microcopyClassName?: string;
  items: FaqItem[];
}) {
  return (
    <section className="faq">
      <div className="wrap faq-grid">
        <div>
          <div className="eyebrow">{eyebrow}</div>
          <h2>{heading}</h2>
          <p className={microcopyClassName}>{microcopy}</p>
        </div>
        <div>
          {items.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
