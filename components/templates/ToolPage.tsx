import { PageShell } from "@/components/layout/PageShell";
import { Banner } from "@/components/sections/shared/Banner";
import { Faq } from "@/components/sections/shared/Faq";
import { OgUrl } from "@/components/ui/OgUrl";
import type { ToolContent } from "@/content/tools";
import { links } from "@/lib/links";

export function ToolPage({ content: c }: { content: ToolContent }) {
  return (
    <PageShell>
      <OgUrl path={c.meta.path} />
      <main className={c.mainClass}>
        {" "}
        <section className="page-hero tools-hero">
          <div className="wrap page-hero-grid">
            <div>
              <div className="breadcrumb">
                <a href="/">Home</a>
                <span>·</span>
                <a href="/tools">Tools</a>
                <span>·</span>
                <span>{c.name}</span>
              </div>
              <div className="eyebrow">{c.hero.eyebrow}</div>
              <h1>{c.hero.title}</h1>
              <p className="lede">{c.hero.lede}</p>
              <div className="tool-cta-row">
                <a className="button primary" href={links.register}>Start your free trial&nbsp; →</a>
                <a className="button secondary" href="/tools">Explore all tools</a>
              </div>
              <p className="tool-hero-note">{c.hero.note}</p>
            </div>
            {c.visual}
          </div>
        </section>
        {" "}
        <section className="page-section">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">{c.values.eyebrow}</div>
              <h2>{c.values.heading}</h2>
              <p>{c.values.lede}</p>
            </div>
            <div className="value-grid">
              {c.values.cards.map((card) => (
                <article className="value-card" key={card.title}>
                  <div className="value-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        {" "}
        <section className="page-section dark-alt">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">{c.steps.eyebrow}</div>
              <h2>{c.steps.heading}</h2>
              <p>{c.steps.lede}</p>
            </div>
            <div className="tool-steps">
              {c.steps.items.map((s, i) => (
                <article className="tool-step" key={s.title}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </article>
              ))}
            </div>
            {c.steps.transparency ?? <p className="platform-note">{c.steps.note}</p>}
          </div>
        </section>
        {" "}
        <section className="page-section">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">{c.uses.eyebrow}</div>
              <h2>{c.uses.heading}</h2>
              {c.uses.lede && <p>{c.uses.lede}</p>}
            </div>
            <div className="tool-use-grid">
              {c.uses.items.map((u) => (
                <article key={u.title}>
                  {u.label && <span className="smart-repost-use-label">{u.label}</span>}
                  <h3>{u.title}</h3>
                  <p>{u.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        {" "}
        <Faq
          eyebrow="FAQ"
          heading={c.faq.heading}
          microcopy={c.faq.lede}
          microcopyClassName="section-lede"
          items={c.faq.items}
        />
        {" "}
        <Banner {...c.banner} />
        {" "}
      </main>
    </PageShell>
  );
}
