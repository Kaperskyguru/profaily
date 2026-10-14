import { links } from "@/lib/links";

export function PricingFinalCta() {
  return (
    <section className="pricing-final-cta">
      <div className="wrap">
        <div>
          <div className="eyebrow">Start with your next video</div>
          <h2>Bring your video marketing workflow in one place.</h2>
          <p>Try Profaily for five days and choose the plan that fits how you publish.</p>
        </div>
        <a className="button primary" href={links.register}>Start your free trial&nbsp; →</a>
      </div>
    </section>
  );
}
