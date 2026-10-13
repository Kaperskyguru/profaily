import { links } from "@/lib/links";

export function HomeBanner() {
  return (
    <section className="banner">
      <div className="wrap banner-grid">
        <div>
          <div className="eyebrow">A clearer way to run video marketing</div>
          <h2>Move from video publishing to measurable business outcomes.</h2>
          <p>Plan, publish, protect, engage, and learn in one connected workspace.</p>
        </div>
        <a className="button primary" href={links.register}>Start your 5-day free trial&nbsp; →</a>
      </div>
    </section>
  );
}
