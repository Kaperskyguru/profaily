import { Fragment } from "react";
import { workflowCards } from "@/content/pricing";

export function PricingWorkflow() {
  return (
    <section className="page-section alt pricing-workflow">
      {" "}
      <div className="wrap">
        {" "}
        <div className="section-head"><div className="eyebrow">The full video workflow</div><h2>Plan the video. Protect the publish. Track business outcome.</h2><p>Profaily connects five parts of the operation, so each video has a clear path from preparation to measurable outcomes.</p></div>
        {" "}
        <div className="pricing-product-panel">
          {" "}
          <div className="pricing-product-image"><img src="/assets/profaily-product-composer.png" alt="Profaily video composer showing platform choices, video details, and publishing controls" /></div>
          {" "}
          <div className="pricing-product-copy"><span className="item-no">ONE SOURCE VIDEO · PLATFORM-SPECIFIC DETAILS</span><h3>Keep the video consistent. Shape each destination.</h3><p>Upload the finished video once, then customize available captions, titles, and platform settings before scheduling. Profaily keeps destination status and history connected to the source video.</p><a className="feature-link" href="/feature-content-operations">Explore video planning &amp; publishing&nbsp; →</a></div>
          {" "}
        </div>
        {" "}
        <div className="workflow-pricing-grid">
          {" "}
          {workflowCards.map((c) => (
            <Fragment key={c.href}>
              <a className="workflow-pricing-card" href={c.href}><span>{c.step}</span><h3>{c.title}</h3><p>{c.body}</p></a>
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
