import { links } from "@/lib/links";

/** Shared closing `.banner` CTA: eyebrow + heading + line on the left, trial button on the right. */
export function Banner({
  eyebrow,
  heading,
  body,
  cta = "Start your free trial",
}: {
  eyebrow: string;
  heading: string;
  body: string;
  cta?: string;
}) {
  return (
    <section className="banner">
      <div className="wrap banner-grid">
        <div>
          <div className="eyebrow">{eyebrow}</div>
          <h2>{heading}</h2>
          <p>{body}</p>
        </div>
        <a className="button primary" href={links.register}>{`${cta}\u00a0 →`}</a>
      </div>
    </section>
  );
}
