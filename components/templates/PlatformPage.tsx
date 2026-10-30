import "@/app/styles/channels.css";
import { PageShell } from "@/components/layout/PageShell";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { Faq } from "@/components/sections/shared/Faq";
import { OAuthButtons } from "@/components/sections/shared/OAuthButtons";
import { Arrow } from "@/components/ui/Glyph";
import { JsonLd } from "@/components/ui/JsonLd";
import { OgUrl } from "@/components/ui/OgUrl";
import { faqJsonLd } from "@/content/comparisons";
import { platformOrder, platforms, type PlatformContent, type StepImage } from "@/content/platforms";

/** Real Profaily captures. The channel's own two are in its content; approval and calendar are shared. */
const SHARED: Record<"review" | "calendar", { src: string; alt: string }> = {
  review: { src: "/assets/app/mcp-4-review.jpg", alt: "Profaily as the producer: the Meet Miso video in review with Request changes and Approve and schedule" },
  calendar: { src: "/assets/app/mcp-6-calendar.jpg", alt: "Profaily calendar with the Meet Miso video scheduled for Saturday at 09:00" },
};

/** A landing page for one channel, written as if it were the only product: preview, schedule, approve, track. */
export function PlatformPage({ content: c }: { content: PlatformContent }) {
  const others = platformOrder.filter((k) => k !== c.key).map((k) => platforms[k]);
  const pick = (image: StepImage) => (image === "composer" ? c.shots.composer : image === "dialog" ? c.shots.dialog : SHARED[image]);

  return (
    <PageShell>
      <OgUrl path={c.meta.path} />
      <JsonLd data={faqJsonLd(c.faq)} />
      <main className="pg-channel">
        <header className="hero has-grid chp-hero">
          <div className="wrap">
            <h1>{c.hero.title}</h1>
            <p className="sub">{c.hero.lede}</p>
            <OAuthButtons lead="Start your free trial:" />
          </div>
          <div className="wrap">
            <figure className="chp-shot">
              <div className="chp-crop"><img src={c.shots.composer.src} alt={c.shots.composer.alt} width="1600" height="1231" loading="eager" /></div>
            </figure>
          </div>
        </header>

        <section className="wrap chp-how" aria-labelledby="how-h">
          <h2 id="how-h">{`How Profaily works for ${c.name}`}</h2>
          {c.steps.map((s, i) => {
            const img = pick(s.image);
            return (
              <article className={`fr${i % 2 ? " flip" : ""}`} key={s.title}>
                <div className="txt">
                  <span className="verb">{s.verb}</span>
                  <h3>{s.title}</h3>
                  <p className="lead">{s.lead}</p>
                  <ul className="chp-points">
                    {s.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
                <div className="sh rv"><div className={`chp-fig${s.image === "composer" ? " zoom" : s.image === "calendar" ? " zoomcal" : ""}`}><img className="chp-img" src={img.src} alt={img.alt} width="1600" height="1231" loading="lazy" /></div></div>
              </article>
            );
          })}
        </section>

        <section className="wrap chp-ben" aria-labelledby="ben-h">
          <h2 id="ben-h">{`Why teams use Profaily for ${c.name}`}</h2>
          <div className="chp-ben-grid">
            {c.benefits.map((b) => (
              <article className="tile-card shell rv" key={b.title}>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="wrap chp-spec" aria-labelledby="spec-h">
          <div>
            <h2 id="spec-h">{`${c.name} at a glance`}</h2>
            <p className="lead">{c.specsNote}</p>
          </div>
          <dl>
            {c.specs.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </section>

        <Faq heading={`${c.name} questions`} items={c.faq} lede={<>Something else? Email <a href="mailto:support@useprofaily.com">support@useprofaily.com</a>.</>} />

        <nav className="wrap chp-also" aria-label="Other channels">
          <span>Also publish to</span>
          {others.map((o) => <a key={o.key} href={o.meta.path}>{o.name} <Arrow /></a>)}
        </nav>

        <CtaBand secondary={{ href: "/pricing", label: "See pricing" }} />
      </main>
    </PageShell>
  );
}
