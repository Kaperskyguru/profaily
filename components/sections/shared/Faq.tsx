import { Fragment, type ReactNode } from "react";

export type FaqItem = { q: string; a: ReactNode };

/** Shared `.faq` section: eyebrow + heading + microcopy on the left, `<details>` list on the right. */
export function Faq({
  eyebrow,
  heading,
  microcopy,
  microcopyClassName = "microcopy",
  items,
  className = "faq",
  spaced,
}: {
  eyebrow: string;
  heading: string;
  microcopy: string;
  /** Tool pages style this line as `section-lede`. */
  microcopyClassName?: string;
  items: FaqItem[];
  className?: string;
  /** Source has newline text nodes between the wrapper's children (pricing). */
  spaced?: boolean;
}) {
  const gap = spaced ? " " : null;
  return (
    <section className={className}>
      {gap}
      <div className="wrap faq-grid">
        {gap}
        <div>
          <div className="eyebrow">{eyebrow}</div>
          <h2>{heading}</h2>
          <p className={microcopyClassName}>{microcopy}</p>
        </div>
        {gap}
        <div>
          {gap}
          {items.map((item) => (
            <Fragment key={item.q}>
              <details>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
              {gap}
            </Fragment>
          ))}
        </div>
        {gap}
      </div>
      {gap}
    </section>
  );
}
