import "@/app/styles/compare.css";
import { PageShell } from "@/components/layout/PageShell";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { Faq } from "@/components/sections/shared/Faq";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Arrow, Glyph } from "@/components/ui/Glyph";
import { JsonLd } from "@/components/ui/JsonLd";
import { OgUrl } from "@/components/ui/OgUrl";
import { comparisonOrder, comparisons, comparisonsIndexMeta, faqJsonLd } from "@/content/comparisons";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(comparisonsIndexMeta);

const faqs = [
  {
    q: "Which social media tool is best for short-form video?",
    a: "It depends on your channels and workflow. Compare channel coverage, per-channel setup, team approvals, inbox, analytics, and pricing, not just the number of integrations. Buffer offers a free plan and channel-based pricing; Later emphasizes visual planning; Metricool offers a free tier and analytics breadth; Hootsuite offers broad social management and listening.",
  },
  {
    q: "How is Profaily different from a social media scheduler?",
    a: "Profaily is built around short-form video only: bulk import by CSV or cloud links, per-channel previews and validation, team approvals, a calendar and queue, and per-channel publishing status with retry. It does not have an inbox, analytics, or CRM yet.",
  },
  {
    q: "Does Profaily support the same channels as these products?",
    a: "No. Profaily supports exactly four channels: TikTok, Instagram Reels, YouTube (Shorts and long-form), and Facebook. The other providers support more networks; check each provider’s current channel list.",
  },
  {
    q: "Does Profaily offer a free plan?",
    a: "No. Creator is $15/month and Business is $39/month. Business has a 14-day free trial (card required). Check the pricing page for current terms and limits.",
  },
  {
    q: "Are these comparisons current?",
    a: "They were researched against the providers’ official product and pricing pages on September 29, 2026. Features, prices, limits, and platform permissions change, so check the linked provider pages before buying.",
  },
];

const honest = [
  { title: "Their facts, from their pages", body: "Every claim about another product links to that provider’s own pricing or product page, with the date we checked it." },
  { title: "Where they are better, we say so", body: "Broader channel lists, free plans, inboxes, analytics and listening are real reasons to pick another tool. Each guide says when." },
  { title: "Our gaps, stated plainly", body: "Profaily posts to four channels and has no inbox, analytics or CRM yet. We would rather you know that before you sign up." },
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
      <JsonLd data={faqJsonLd(faqs)} />
      <main className="pg-compare">
        <PageHero
          solo
          crumbs={[{ label: "Compare" }]}
          pill="Honest comparisons"
          title="Compare short-form video tools"
          lede="See how Profaily compares with Buffer, Later, Metricool and Hootsuite. Each serves a different kind of social work, so start with the work you need done."
          secondary={{ href: "/pricing", label: "See pricing" }}
          note={
            <span className="cmp-hub-ch">
              Profaily posts to
              {(["tiktok", "instagram", "youtube", "facebook"] as const).map((ch) => <Glyph key={ch} name={ch} id={`hub-${ch}`} />)}
              <span className="sr-only">TikTok, Instagram Reels, YouTube and Facebook</span>
            </span>
          }
        />

        <section className="section" aria-labelledby="cmp-all">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="cmp-all">Pick a comparison</h2>
              <p className="lead">Each guide sets the provider’s public positioning next to Profaily’s video-first workflow, with sources.</p>
            </div>
            <div className="grid-2">
              {comparisonOrder.map((slug, i) => {
                const c = comparisons[slug];
                return (
                  <a className="tile-card cmp-hub-card rv" href={`/compare/${slug}`} key={slug} style={{ "--d": `${(i % 2) * 0.08}s` } as React.CSSProperties}>
                    <h3>{`Profaily vs ${c.name}`}</h3>
                    <p className="cmp-model">{c.model}</p>
                    <p><b>{`${c.name} may fit best when:`}</b> {c.fit.competitor}</p>
                    <span className="more-link">Read the comparison <Arrow /></span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section tight" aria-labelledby="cmp-honest">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="cmp-honest">How we compare honestly</h2>
              <p className="lead">A comparison page written by one of the products is only useful if it is fair.</p>
            </div>
            <div className="grid-3">
              {honest.map((h, i) => (
                <article className="tile-card shell rv" key={h.title} style={{ "--d": `${i * 0.08}s` } as React.CSSProperties}>
                  <h3>{h.title}</h3>
                  <p>{h.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Faq heading="Comparing social media tools" items={faqs} />

        <CtaBand
          heading="See if Profaily fits your workflow"
          lede="Try Business free for 14 days, or start on Creator if it is just you."
          secondary={{ href: "/pricing", label: "See pricing" }}
        />
      </main>
    </PageShell>
  );
}
