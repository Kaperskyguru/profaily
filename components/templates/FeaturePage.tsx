import { PageShell } from "@/components/layout/PageShell";
import { OgUrl } from "@/components/ui/OgUrl";
import { type FeatureContent, featureLinks } from "@/content/features";
import { links } from "@/lib/links";

export function FeaturePage({ content: c }: { content: FeatureContent }) {
  return (
    <PageShell>
      <OgUrl path={c.meta.path} />
      <main>
        <section className="page-hero">
          <div className="wrap page-hero-grid">
            <div>
              <div className="breadcrumb">
                <a href="/features">Features</a>
                <span>›</span>
                <span>{c.name}</span>
              </div>
              <div className="eyebrow">{c.hero.eyebrow}</div>
              <h1>{c.hero.title}</h1>
              <p className="lede">{c.hero.lede}</p>
              <div className="actions">
                <a className="button primary" href={links.register}>Start your 5-day free trial&nbsp; →</a>
                <a className="button secondary" href="/features">Explore all features</a>
              </div>
              <div className="microcopy">{c.hero.microcopy}</div>
            </div>
            <div>
              <div className="app-window">
                <div className="app-chrome">
                  <i></i>
                  <i></i>
                  <i></i>
                  <span>Profaily workspace · Illustrative product UI</span>
                </div>
                <div className="app-body">{c.mock}</div>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section">
          <div className="wrap">
            <div className="eyebrow">What this makes easier</div>
            <h2>Control the workflow. Keep moving.</h2>
            <div className="benefit-grid">
              {c.benefits.map((b) => (
                <article className="benefit" key={b.title}>
                  <div className="benefit-icon">✳</div>
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="page-section alt">
          <div className="wrap">
            <div className="eyebrow">Included capabilities</div>
            <h2>{c.capabilities.heading}</h2>
            {c.capabilities.lede && <p className="section-lede">{c.capabilities.lede}</p>}
            <div className="detail-list">
              {c.capabilities.items.map((it, i) => (
                <article className="detail-item" id={it.id} key={it.id}>
                  <span className="item-no">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{it.title}</h3>
                  <p>{it.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="page-section">
          <div className="wrap">
            <div className="eyebrow">Connected to the rest of the system</div>
            <h2>One workflow, from publishing to business outcomes.</h2>
            <p className="section-lede">This capability works alongside the rest of the Profaily operating system.</p>
            <div className="page-links">
              {featureLinks
                .filter((l) => l.path !== c.meta.path)
                .map((l) => (
                  <a href={l.path} key={l.path}>{l.label}</a>
                ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
