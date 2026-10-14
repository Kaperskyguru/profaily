import { Fragment } from "react";
import { testimonials } from "@/content/pricing";

export function PricingTestimonials() {
  return (
    <section className="page-section pricing-testimonials">
      {" "}
      <div className="wrap">
        {" "}
        <div className="section-head center"><div className="eyebrow">Illustrative examples · fictional personas</div><h2>Made for the people behind every video.</h2><p>These fictional examples show the kinds of value Profaily is designed to support. They are not real customer testimonials.</p></div>
        {" "}
        <div className="testimonial-grid">
          {" "}
          {testimonials.map((t) => (
            <Fragment key={t.image}>
              <article className="testimonial-card">
                {" "}
                <div className="testimonial-person"><img src={`/assets/testimonials/${t.image}.jpg`} alt={t.alt} /><div><strong>{t.role}</strong><small>Illustrative persona</small></div></div>
                {" "}
                <span className="testimonial-sample-label">Fictional example</span>
                {" "}
                <blockquote>{t.quote}</blockquote>
                {" "}
              </article>
              {" "}
            </Fragment>
          ))}
        </div>
        {" "}
      </div>
      {" "}
    </section>
  );
}
