import { Fragment } from "react";
import { plans } from "@/content/pricing";
import { links } from "@/lib/links";

export function PricingHero() {
  return (
    <section className="page-hero pricing-hero">
      {" "}
      <div className="wrap">
        {" "}
        <div className="breadcrumb"><a href="/">Home</a><span>›</span><span>Pricing</span></div>
        {" "}
        <div className="pricing-intro">
          {" "}
          <div className="eyebrow">Plans for creators and teams</div>
          {" "}
          <h1>One video workflow. Choose how you run it.</h1>
          {" "}
          <p className="lede">Publish across your channels, keep each platform’s details straight, and follow every video through to its outcome. Choose Pro for a focused solo workflow or Teams for shared work.</p>
          {" "}
          <div className="trial-pill"><span>5 days</span> to try Profaily · No free plan</div>
          {" "}
        </div>
        {" "}
        <div className="pricing-plans">
          {" "}
          {plans.map((plan) => (
            <Fragment key={plan.name}>
              <article className={plan.cardClass ?? "plan-card"}>
                {" "}
                <div className="plan-card-top"><span className="plan-tag">{plan.tag}</span></div>
                {" "}
                <h2>{plan.name}</h2>
                {" "}
                <p className="plan-summary">{plan.summary}</p>
                {" "}
                <div className="plan-price"><strong>{plan.price}</strong><span>5-day free trial</span></div>
                {" "}
                <a className={plan.ctaClass} href={links.register}>{plan.cta}&nbsp; →</a>
                {" "}
                <ul className="plan-bullets">
                  {" "}
                  {plan.bullets.map((b) => (
                    <Fragment key={b}>
                      <li>{b}</li>
                      {" "}
                    </Fragment>
                  ))}
                </ul>
                {" "}
              </article>
              {" "}
            </Fragment>
          ))}
        </div>
        {" "}
        <p className="pricing-note">Both plans include a 5-day free trial. Profaily has no free plan.</p>
        {" "}
      </div>
      {" "}
    </section>
  );
}
