import { PageShell } from "@/components/layout/PageShell";
import { JsonLd } from "@/components/ui/JsonLd";
import { OgUrl } from "@/components/ui/OgUrl";
import { comparisonOrder, comparisons, comparisonsIndexMeta } from "@/content/comparisons";
import { links } from "@/lib/links";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(comparisonsIndexMeta);

const faqs = [
  {
    q: "Which social media platform is best for short-form video marketing?",
    a: "The right tool depends on your channels and workflow. Compare publishing formats, destination-specific setup, inbox coverage, team approvals, analytics, and lead handoff—not just the number of integrations.",
  },
  {
    q: "How is Profaily different from a social media scheduler?",
    a: "Profaily is designed around the short-form video lifecycle: video intake, platform-specific publishing, delivery status, audience conversations, lead qualification, and performance learning.",
  },
  {
    q: "Does Profaily offer a free plan?",
    a: "No. Profaily has a five-day free trial. Its current displayed prices are $9.99 for Pro and $25 for Teams; check the pricing page for current terms and limits.",
  },
  {
    q: "Are these competitor comparisons current?",
    a: "They were researched against the providers’ official product and pricing pages on September 29, 2026. Features, prices, limits, and social platform permissions can change, so verify the linked provider pages before purchasing.",
  },
];

const questions = [
  {
    q: "Which alternative is best for a creator or small team?",
    a: "It depends on your channel mix and workflow. Buffer offers a free plan and channel-based pricing; Later emphasizes visual planning and creator-friendly scheduling; Metricool offers a free tier and analytics breadth; Hootsuite offers broad social management and listening. Profaily focuses on short-form video operations and business follow-through.",
  },
  {
    q: "Which platform is best for managing many brands?",
    a: "Later, Metricool, Buffer, and Hootsuite each have multi-profile or multi-account options with different plan limits and pricing models. Compare total accounts, users, approvals, analytics, and billing basis on the official plan pages.",
  },
  {
    q: "Does Profaily support the same channels as these products?",
    a: "Profaily’s current scope is TikTok, Instagram, YouTube, and Facebook. The comparison providers support additional networks; check each provider’s current channel list and account-specific publishing options.",
  },
  {
    q: "How current are these comparisons?",
    a: "The provider research was checked on September 29, 2026, against official product and pricing pages. Plans and platform permissions change, so verify current details before purchasing.",
  },
];

const sources = [
  {
    href: "https://buffer.com/pricing",
    title: "Buffer official pricing",
    body: "Channel-based pricing, free plan, publishing, community engagement, analytics, and team plans.",
  },
  {
    href: "https://later.com/pricing/",
    title: "Later official pricing",
    body: "Social sets, supported platforms, visual planning, analytics, inbox, and collaboration by plan.",
  },
  {
    href: "https://metricool.com/pricing/",
    title: "Metricool official pricing",
    body: "Brand limits, analytics, inbox, reporting, and team/client features by plan.",
  },
  {
    href: "https://www.hootsuite.com/plans/standard",
    title: "Hootsuite Standard plan",
    body: "Publishing, account limits, inbox, listening, and analytics.",
  },
  {
    href: "https://www.hootsuite.com/plans/advanced",
    title: "Hootsuite Advanced plan",
    body: "Approval workflows, message routing, and team collaboration.",
  },
];

export default function Page() {
  return (
    <PageShell>
      <OgUrl
        path={comparisonsIndexMeta.path}
        type="website"
        title={comparisonsIndexMeta.title}
        description={comparisonsIndexMeta.ogDescription}
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      }} />
      {" "}
      <main>
        {" "}
        <section className="compare-hero">
          <div className="wrap">
            <div className="breadcrumb">
              <a href="/">Home</a>
              <span>›</span>
              <span>Compare</span>
            </div>
            <div className="compare-hero-grid">
              <div>
                <div className="eyebrow">Choose the workflow that matches the work</div>
                <h1>Compare short-form video marketing platforms.</h1>
                <p className="lede">See how Profaily compares with Buffer, Later, Metricool, and Hootsuite. Each product serves a different kind of social operation. Start with the work you need to connect—from planning and publishing to audience response and business follow-up.</p>
                <div className="actions">
                  <a className="button primary" href="#alternatives">Explore comparisons&nbsp; ↓</a>
                  <a className="button secondary" href="/pricing">See Profaily pricing</a>
                </div>
                <div className="compare-pills">
                  <span>TikTok</span>
                  <span>Instagram</span>
                  <span>YouTube</span>
                  <span>Facebook</span>
                </div>
              </div>
              <aside className="compare-hero-panel">
                <div className="eyebrow">Profaily’s product focus</div>
                <h2>One video operation, connected from publish to outcome.</h2>
                <p>Plan video work, customize destination details, follow publishing state, manage eligible conversations, qualify interest, and learn what to do next.</p>
                <div className="compare-stat-row">
                  <div className="compare-stat">
                    <b>4 channels</b>
                    <span>TikTok, Instagram, YouTube, Facebook</span>
                  </div>
                  <div className="compare-stat">
                    <b>5 days</b>
                    <span>free trial · no free plan</span>
                  </div>
                </div>
                <img src="/assets/profaily-product-composer.png" alt="Profaily video composer showing one source video and platform-specific publishing controls" />
              </aside>
            </div>
          </div>
        </section>
        {" "}
        <section className="page-section" id="alternatives">
          <div className="wrap">
            <div className="compare-section-intro">
              <div className="eyebrow">All comparisons</div>
              <h2>Choose by the job your team needs done.</h2>
              <p>These guides compare each provider’s public product positioning with Profaily’s video-first workflow. They highlight useful differences without treating every plan as equivalent.</p>
            </div>
            <div className="compare-card-grid">
              {comparisonOrder.map((slug) => (
                <a className="compare-card" href={`/compare/${slug}`} key={slug}>
                  <div className="eyebrow">{`${comparisons[slug].name} alternative guide`}</div>
                  <h3>{`Profaily vs ${comparisons[slug].name}`}</h3>
                  <div className="compare-model">{comparisons[slug].model}</div>
                  <p>{comparisons[slug].hero.lede}</p>
                  <span className="feature-link">Read the full comparison&nbsp; →</span>
                </a>
              ))}
            </div>
          </div>
        </section>
        {" "}
        <section className="page-section alt">
          <div className="wrap">
            <div className="compare-section-intro">
              <div className="eyebrow">Shortlist view</div>
              <h2>What each platform is built to emphasize</h2>
              <p>Use this as a quick orientation, then open the detailed guide for plan limits, capability trade-offs, and official references.</p>
            </div>
            <div className="compare-table-scroll" role="region" aria-label="Social media platform comparison summary" tabIndex={0}>
              <table className="compare-table">
                <thead>
                  <tr>
                    <th scope="col">Platform</th>
                    <th scope="col">Product emphasis</th>
                    <th scope="col">May fit best when</th>
                    <th scope="col">Guide</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonOrder.map((slug) => (
                    <tr key={slug}>
                      <th scope="row">{comparisons[slug].name}</th>
                      <td>{comparisons[slug].model}</td>
                      <td>{comparisons[slug].fit.competitor}</td>
                      <td><a className="feature-link" href={`/compare/${slug}`}>Compare&nbsp; →</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="compare-table-note">Profaily focuses on TikTok, Instagram, YouTube, and Facebook. The comparison providers support broader channel mixes; feature availability can vary by plan, account type, region, and social API permissions.</p>
          </div>
        </section>
        {" "}
        <section className="page-section">
          <div className="wrap">
            <div className="compare-section-intro">
              <div className="eyebrow">A fair comparison starts here</div>
              <h2>Compare the workflow, not just the feature count.</h2>
              <p>Many social platforms can schedule video. The questions that matter are how work is organized before publishing, how destination-specific setup is reviewed, how the team handles failed or delayed publishing, and whether audience response connects to the business process that follows.</p>
            </div>
            <div className="compare-fit-grid">
              <article className="compare-fit-card">
                <div className="eyebrow">Choose a broad social suite</div>
                <h3>When channel breadth is the priority.</h3>
                <p>Buffer, Later, Metricool, and Hootsuite each serve networks beyond Profaily’s four-channel scope. If your team publishes across many formats or needs a network these providers support, check the exact plan and account requirements.</p>
              </article>
              <article className="compare-fit-card">
                <div className="eyebrow">Choose an analytics-first tool</div>
                <h3>When reporting breadth leads.</h3>
                <p>Metricool, Later, and Hootsuite publish extensive reporting or analytics options by plan. Compare the history window, account coverage, report export, competitor analysis, and paid-media needs your team actually uses.</p>
              </article>
              <article className="compare-fit-card fit-profaily">
                <div className="eyebrow">Choose a video workflow</div>
                <h3>When publishing should connect to follow-through.</h3>
                <p>Profaily is designed to carry a finished short-form video through destination setup, publishing status, eligible social conversations, lead routing, and learning—not just put a date on a calendar.</p>
              </article>
            </div>
          </div>
        </section>
        {" "}
        <section className="page-section alt">
          <div className="wrap">
            <div className="compare-section-intro">
              <div className="eyebrow">Profaily at a glance</div>
              <h2>A short-form video workflow with clear edges.</h2>
              <p>Profaily reuses the finished source video across selected destinations; it does not resize or edit the footage. Captions, titles, and settings can be customized per platform where available. Publishing and inbox actions depend on account access and network capabilities.</p>
              <div className="actions">
                <a className="button secondary" href="/features">Explore features</a>
                <a className="button secondary" href="/pricing">Compare Pro and Teams</a>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section className="page-section">
          <div className="wrap">
            <div className="compare-section-intro">
              <div className="eyebrow">Questions, answered</div>
              <h2>Comparing social media tools</h2>
            </div>
            <div className="faq-grid">
              {[questions.slice(0, 2), questions.slice(2)].map((column) => (
                <div key={column[0].q}>
                  {column.map((item) => (
                    <details key={item.q}>
                      <summary>{item.q}</summary>
                      <p>{item.a}</p>
                    </details>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
        {" "}
        <section className="page-section alt">
          <div className="wrap">
            <div className="compare-section-intro">
              <div className="eyebrow">Official references</div>
              <h2>Research from the providers themselves</h2>
              <p>Product details and plan limits are linked directly to official sources. Comparison copy reflects pages checked September 29, 2026.</p>
            </div>
            <div className="compare-source-list">
              {sources.map((s) => (
                <a className="compare-source-link" href={s.href} target="_blank" rel="noopener noreferrer" key={s.href}>
                  <div>
                    <strong>{s.title}</strong>
                    <span>{s.body}</span>
                  </div>
                  <b aria-hidden="true">↗</b>
                </a>
              ))}
            </div>
            <p className="compare-source-note">Competitor plans, prices, feature packaging, and platform permissions may change. Profaily pricing currently lists Pro at $9.99 and Teams at $25 with a five-day free trial and no free plan; confirm current billing terms on the pricing page.</p>
          </div>
        </section>
        {" "}
        <section className="compare-cta">
          <div className="wrap">
            <div>
              <div className="eyebrow">One video operation, connected</div>
              <h2>See if Profaily fits your workflow.</h2>
              <p>Start a five-day trial and explore the video publishing workspace, inbox, and connected business workflow.</p>
            </div>
            <div className="actions">
              <a className="button primary" href={links.register}>Start your 5-day free trial&nbsp; →</a>
              <a className="button secondary" href="/features">Explore features</a>
            </div>
          </div>
        </section>
        {" "}
      </main>
    </PageShell>
  );
}
