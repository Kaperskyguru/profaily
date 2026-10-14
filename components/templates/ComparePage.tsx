import { PageShell } from "@/components/layout/PageShell";
import { PlatformBand } from "@/components/sections/shared/PlatformBand";
import { JsonLd } from "@/components/ui/JsonLd";
import { comparisonOrder, comparisons, faqJsonLd, type ComparisonContent, type ComparisonSlug } from "@/content/comparisons";
import { links } from "@/lib/links";

const flow = [
  { step: "01 · PLAN", title: "Bring videos into one operation", body: "Bulk intake, validation, review, calendar, and queue keep work visible." },
  { step: "02 · PREPARE", title: "Set up each destination", body: "Keep the finished source video and adjust the available caption, title, and platform settings independently." },
  { step: "03 · PROTECT", title: "Follow publishing state", body: "Check readiness, track each destination, and recover or verify outcomes where the platform allows." },
  { step: "04 · RESPOND", title: "Connect audience interest", body: "Bring eligible conversations from connected socials into one inbox, qualify interest, and assign the next step." },
  { step: "05 · LEARN", title: "Make the next video smarter", body: "Use performance context and audience signals to choose what to repeat or test next." },
];

export function ComparePage({ slug, content: c }: { slug: ComparisonSlug; content: ComparisonContent }) {
  const related = comparisonOrder.filter((s) => s !== slug);
  return (
    <PageShell spaced>
      <JsonLd data={faqJsonLd(c.faq)} />
      {" "}
      <main>
        {" "}
        <section className="compare-hero">
          {" "}
          <div className="wrap">
            {" "}
            <div className="breadcrumb">
              <a href="/">Home</a>
              <span>›</span>
              <a href="/compare">Compare</a>
              <span>›</span>
              <span>Profaily vs {c.name}</span>
            </div>
            {" "}
            <div className="compare-hero-grid">
              {" "}
              <div>
                {" "}
                <div className="eyebrow">{c.name} alternative · Research checked September 29, 2026</div>
                {" "}
                <h1>{c.hero.title}</h1>
                {" "}
                <p className="lede">{c.hero.lede}</p>
                {" "}
                <div className="actions">
                  <a className="button primary" href={links.register}>Start your 5-day free trial&nbsp; →</a>
                  <a className="button secondary" href="#comparison">See the comparison</a>
                </div>
                {" "}
                <div className="compare-pills">
                  <span>TikTok</span>
                  <span>Instagram</span>
                  <span>YouTube</span>
                  <span>Facebook</span>
                </div>
                {" "}
              </div>
              {" "}
              <aside className="compare-hero-panel">
                {" "}
                <div className="eyebrow">Quick take</div>
                <h2>Compare the workflow, not just the feature count.</h2>
                <p>{c.hero.panelNote}</p>
                {" "}
                <div className="compare-stat-row">
                  <div className="compare-stat">
                    <b>4</b>
                    <span>short-form video channels in Profaily’s launch scope</span>
                  </div>
                  <div className="compare-stat">
                    <b>5 days</b>
                    <span>to try Profaily · no free plan</span>
                  </div>
                </div>
                {" "}
                <img src="/assets/profaily-product-composer.png" alt="Profaily video composer showing the source video and destination-specific publishing controls" />
                {" "}
              </aside>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <PlatformBand />
        {" "}
        <section className="page-section" id="comparison">
          <div className="wrap">
            <div className="compare-section-intro">
              <div className="eyebrow">Profaily vs {c.name}</div>
              <h2>At a glance: where each platform fits</h2>
              <p>{c.intro}</p>
            </div>
            <div className="compare-table-scroll" role="region" aria-label={`Profaily versus ${c.name} comparison`} tabIndex={0}>
              <table className="compare-table">
                <thead>
                  <tr>
                    <th scope="col">Decision area</th>
                    <th scope="col">{c.name}</th>
                    <th scope="col" className="profaily-col">Profaily</th>
                  </tr>
                </thead>
                <tbody>
                  {c.rows.map((row) => (
                    <tr key={row.area}>
                      <th scope="row">{row.area}</th>
                      <td>{row.competitor}</td>
                      <td className="profaily-col">{row.profaily}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="compare-table-note">Plans, connected account types, API access, and feature availability can change. Competitor descriptions below are based on each provider’s official product and pricing pages; use the links at the end to verify current details.</p>
          </div>
        </section>
        {" "}
        <section className="page-section alt">
          <div className="wrap">
            <div className="compare-section-intro">
              <div className="eyebrow">Choose for your workflow</div>
              <h2>When {c.name} is the better fit—and when Profaily is</h2>
              <p>The best choice depends on the work your team needs to get done every week.</p>
            </div>
            <div className="compare-fit-grid">
              <article className="compare-fit-card fit-competitor">
                <div className="eyebrow">Choose {c.name} if</div>
                <h3>{c.model}</h3>
                <p>{c.fit.competitor}</p>
              </article>
              <article className="compare-fit-card fit-profaily">
                <div className="eyebrow">Choose Profaily if</div>
                <h3>You want video operations connected to business follow-through.</h3>
                <p>{c.fit.profaily}</p>
              </article>
              <article className="compare-fit-card">
                <div className="eyebrow">Know the trade-off</div>
                <h3>Focus means a deliberate scope.</h3>
                <p>{c.fit.tradeoff}</p>
              </article>
            </div>
          </div>
        </section>
        {" "}
        <section className="page-section">
          <div className="wrap">
            <div className="compare-section-intro">
              <div className="eyebrow">A connected video workflow</div>
              <h2>What happens after you choose a video to publish?</h2>
              <p>{c.flowSummary}</p>
            </div>
            <div className="compare-flow-grid">
              {flow.map((f) => (
                <article className="compare-flow-card" key={f.step}>
                  <span>{f.step}</span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </article>
              ))}
            </div>
            <div className="compare-callout">{c.flowSummary}</div>
          </div>
        </section>
        {" "}
        <section className="page-section alt">
          <div className="wrap">
            <div className="compare-product-panel">
              <div>
                <div className="eyebrow">One source video · separate destination details</div>
                <h3>Make the video the center of the workflow.</h3>
                <p>Profaily keeps the original finished file attached to its destination versions, publishing status, and follow-up. It does not resize or edit footage. Platform actions depend on account permissions and available network capabilities.</p>
                <a className="feature-link" href="/feature-content-operations">Explore video planning &amp; publishing&nbsp; →</a>
              </div>
              <img src="/assets/profaily-product-composer.png" alt="Profaily composer with destination-specific video details and publishing controls" />
            </div>
          </div>
        </section>
        {" "}
        <section className="page-section">
          <div className="wrap">
            <div className="compare-section-intro">
              <div className="eyebrow">Questions teams ask</div>
              <h2>Profaily vs {c.name}: frequently asked questions</h2>
              <p>Use these answers as a starting point, then confirm any plan-specific requirements with the providers.</p>
            </div>
            <div className="compare-questions">
              {c.faq.map((item) => (
                <article className="compare-question" key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        {" "}
        <section className="page-section alt">
          <div className="wrap">
            <div className="compare-section-intro">
              <div className="eyebrow">Verify before choosing</div>
              <h2>Official product and pricing references</h2>
              <p>Research checked September 29, 2026. We use the provider’s own published documentation for competitor facts.</p>
            </div>
            <div className="compare-source-list">
              {c.sources.map((s) => (
                <a href={s.href} target="_blank" rel="noopener noreferrer" key={s.href}>
                  <div>
                    <strong>{s.title}</strong>
                    <span>{s.body}</span>
                  </div>
                  <b aria-hidden="true">↗</b>
                </a>
              ))}
            </div>
            <p className="compare-source-note">Profaily prices and capabilities shown here reflect its current product positioning and published pricing page. Prices, billing cadence, platform rules, and plan limits may change. This guide is an independent product comparison, not an exhaustive feature audit.</p>
          </div>
        </section>
        {" "}
        <section className="page-section">
          <div className="wrap">
            <div className="compare-section-intro">
              <div className="eyebrow">Keep comparing</div>
              <h2>Explore other short-form video platform comparisons</h2>
            </div>
            <div className="compare-related-grid">
              {related.map((s) => (
                <a className="compare-related-card" href={`/compare/${s}`} key={s}>
                  <strong>Profaily vs {comparisons[s].name}</strong>
                  <p>{comparisons[s].model}</p>
                </a>
              ))}
            </div>
            <p style={{ marginTop: "20px" }}>
              <a className="feature-link" href="/compare">All Profaily comparisons&nbsp; →</a>
            </p>
          </div>
        </section>
        {" "}
        <section className="compare-cta">
          <div className="wrap">
            <div>
              <div className="eyebrow">One video operation, connected</div>
              <h2>See how Profaily fits your workflow.</h2>
              <p>Try the five-day trial, explore Pro for solo publishing, or choose Teams when video work moves across people and brands.</p>
            </div>
            <div className="actions">
              <a className="button primary" href={links.register}>Start your 5-day free trial&nbsp; →</a>
              <a className="button secondary" href="/pricing">Compare Pro and Teams</a>
            </div>
          </div>
        </section>
        {" "}
      </main>
      {" "}
    </PageShell>
  );
}
