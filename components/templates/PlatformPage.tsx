import { PageShell } from "@/components/layout/PageShell";
import { Faq } from "@/components/sections/shared/Faq";
import { OgUrl } from "@/components/ui/OgUrl";
import type { PlatformContent } from "@/content/platforms";
import { links } from "@/lib/links";

export function PlatformPage({ content: c }: { content: PlatformContent }) {
  return (
    <PageShell>
      <OgUrl path={c.meta.path} />
      <main>
        <section className="page-hero">
          <div className="wrap page-hero-grid">
            <div>
              <div className="breadcrumb">
                <a href="/features#channels">Platforms</a>
                <span>›</span>
                <span>{c.name}</span>
              </div>
              <div className="eyebrow">{c.hero.eyebrow}</div>
              <h1>{c.hero.title}</h1>
              <p className="lede">{c.hero.lede}</p>
              <div className="actions">
                <a className="button primary" href={links.register}>Start your 5-day free trial&nbsp; →</a>
                <a className="button secondary" href="/features">See all features</a>
              </div>
            </div>
            <div>
              <div className="app-heading">
                <div>
                  <b>Publish video</b>
                  <br />
                  <small>One source video · platform-specific details</small>
                </div>
                <span className="status">Ready to review</span>
              </div>
              <div className="platform-mock">
                <div className="phone">
                  <div className="phone-screen">
                    <div className="phone-copy">
                      <strong>PRODUCT WALKTHROUGH</strong>Preview of your short-form video<div className="phone-bar"></div>
                    </div>
                  </div>
                </div>
                <div className="mock-fields">
                  {c.mock.fields.map((f) =>
                    "value" in f ? (
                      <div className="field" key={f.label}>
                        <label>{f.label}</label>
                        <b>{f.value}</b>
                      </div>
                    ) : (
                      <div className="toggle-row" key={f.toggle}>{`${f.toggle} `}<span className="toggle"></span></div>
                    ),
                  )}
                  <div className="mock-row">
                    <span>{c.mock.rowLabel}</span>
                    <span className={c.mock.statusClass}>{c.mock.statusText}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section">
          <div className="wrap">
            <div className="eyebrow">More than cross-posting</div>
            <h2>{`Connect every ${c.name} video to the bigger workflow.`}</h2>
            <div className="benefit-grid">
              {c.benefits.map((b) => (
                <article className="benefit" key={b.title}>
                  <div className="benefit-icon">✳</div>
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </article>
              ))}
            </div>
            <div className="platform-note">Publishing and automation options depend on the connected account, platform permissions, and API support. Profaily keeps platform-specific requirements and destination status visible.</div>
          </div>
        </section>
        <section className="page-section alt">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">How it works</div>
              <h2>From connected account to business follow-up.</h2>
              <p>{`Keep the steps for ${c.name} clear, reviewable, and connected to the video that started them.`}</p>
            </div>
            <div className="workflow-grid">
              {c.steps.map((s, i) => (
                <article className="workflow-card" key={s.title}>
                  <span className="step-number">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <Faq eyebrow="Good to know" heading={`${c.name} publishing, clearly explained.`} microcopy="Profaily respects the capabilities and permissions of each connected platform." items={c.faq} />
      </main>
    </PageShell>
  );
}
