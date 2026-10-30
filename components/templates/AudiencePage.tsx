import "@/app/styles/channels.css";
import { PageShell } from "@/components/layout/PageShell";
import { McpCard } from "@/components/sections/home/McpCard";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { Faq } from "@/components/sections/shared/Faq";
import { OAuthButtons } from "@/components/sections/shared/OAuthButtons";
import { Arrow } from "@/components/ui/Glyph";
import { JsonLd } from "@/components/ui/JsonLd";
import { OgUrl } from "@/components/ui/OgUrl";
import { audienceOrder, audiences, type AudienceContent } from "@/content/audiences";
import { faqJsonLd } from "@/content/comparisons";

/** A "Made for" page: who it is for, four benefits, four rows of real product, the questions that person asks, a close. */
export function AudiencePage({ content: c }: { content: AudienceContent }) {
  const others = audienceOrder.filter((k) => k !== c.key).map((k) => audiences[k]);
  return (
    <PageShell>
      <OgUrl path={c.meta.path} />
      <JsonLd data={faqJsonLd(c.faq)} />
      <main className="pg-channel">
        <header className="hero has-grid chp-hero">
          <div className="wrap">
            <h1>{c.hero.title}</h1>
            <p className="chp-tag">{c.hero.tagline}</p>
            <p className="sub">{c.hero.lede}</p>
            <OAuthButtons lead="Start your free trial:" />
          </div>
          <div className="wrap">
            <figure className="chp-shot">
              <div className="chp-crop"><img src={c.hero.image.src} alt={c.hero.image.alt} width="1600" height="1231" loading="eager" /></div>
            </figure>
          </div>
        </header>

        <section className="wrap chp-ben chp-ben-first" aria-labelledby="ben-h">
          <h2 id="ben-h">{`Built for how ${c.label.toLowerCase()} work`}</h2>
          <div className="chp-ben-grid">
            {c.benefits.map((b) => (
              <article className="tile-card shell rv" key={b.title}>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="wrap chp-how" aria-label={`What Profaily does for ${c.label.toLowerCase()}`}>
          {c.rows.map((r, i) => (
            <article className={`fr${i % 2 ? " flip" : ""}${r.demo ? " wide" : ""}`} key={r.title}>
              <div className="txt">
                <span className="verb">{r.verb}</span>
                <h3>{r.title}</h3>
                <p className="lead">{r.lead}</p>
                <ul className="chp-points">{r.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
              <div className="sh rv">
                {r.demo === "mcp" ? <McpCard bare /> : r.code ? (
                  <pre className="chp-code" aria-label="Example tool call"><code>{r.code}</code></pre>
                ) : r.image ? (
                  <div className="chp-fig"><img className="chp-img" src={r.image.src} alt={r.image.alt} width="1600" height="1231" loading="lazy" /></div>
                ) : null}
              </div>
            </article>
          ))}
        </section>

        <Faq heading="Questions people ask first" items={c.faq} lede={<>Something else? Email <a href="mailto:support@useprofaily.com">support@useprofaily.com</a>.</>} />

        <nav className="wrap chp-also" aria-label="Other audiences">
          <span>Profaily is also made for</span>
          {others.map((o) => <a key={o.key} href={o.meta.path}>{o.label} <Arrow /></a>)}
        </nav>

        <CtaBand heading={c.close.heading} lede={c.close.lede} secondary={{ href: "/pricing", label: "See pricing" }} />
      </main>
    </PageShell>
  );
}
