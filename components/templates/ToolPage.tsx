import "@/app/styles/tools.css";
import { PageShell } from "@/components/layout/PageShell";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { Faq } from "@/components/sections/shared/Faq";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Arrow, Icon } from "@/components/ui/Glyph";
import { JsonLd } from "@/components/ui/JsonLd";
import { OgUrl } from "@/components/ui/OgUrl";
import { faqJsonLd } from "@/content/comparisons";
import { toolOrder, tools, type ToolContent, type ToolSlug } from "@/content/tools";

/** A tool's card (icon, small app fragment, name, line, link); used on /tools and in "Other tools". */
export function ToolCard({ slug }: { slug: ToolSlug }) {
  const t = tools[slug];
  return (
    <a className="tile-card tool-card" href={t.meta.path}>
      <div className="art">{t.card.art}</div>
      <span className="tile-ic"><Icon name={t.card.icon} /></span>
      <h3>{t.name}</h3>
      <p>{t.card.body}</p>
      <span className="more-link">See how {t.name} works <Arrow /></span>
    </a>
  );
}

export function ToolPage({ slug, content: c }: { slug: ToolSlug; content: ToolContent }) {
  const others = toolOrder.filter((s) => s !== slug);
  return (
    <PageShell>
      <OgUrl path={c.meta.path} />
      <JsonLd data={faqJsonLd(c.faq.items)} />
      <main className="pg-tool">
        <PageHero
          crumbs={[{ href: "/tools", label: "Tools" }, { label: c.name }]}
          pill={c.hero.pill}
          title={c.hero.title}
          lede={c.hero.lede}
          note={c.hero.note}
          visual={c.bareVisual ? c.visual : <div className="green-frame">{c.visual}</div>}
        />

        <section className="wrap section" aria-labelledby="values-h">
          <div className="sec-head">
            <h2 id="values-h">{c.values.heading}</h2>
            <p className="lead">{c.values.lede}</p>
          </div>
          <div className="grid-3 rv">
            {c.values.cards.map((card) => (
              <article className="tile-card" key={card.title}>
                <span className="tile-ic"><Icon name={card.icon} /></span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="wrap section tight" aria-labelledby="steps-h">
          <div className="sec-head">
            <h2 id="steps-h">{c.steps.heading}</h2>
            <p className="lead">{c.steps.lede}</p>
          </div>
          <ol className={`steps rv${c.steps.items.length === 4 ? " four" : ""}`}>
            {c.steps.items.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="tool-note rv">
            <Icon name="alert" />
            <p>{c.steps.noteTitle && <b>{c.steps.noteTitle} </b>}{c.steps.note}</p>
          </div>
        </section>

        <section className="wrap section" aria-labelledby="uses-h">
          <div className="sec-head">
            <h2 id="uses-h">{c.uses.heading}</h2>
            {c.uses.lede && <p className="lead">{c.uses.lede}</p>}
          </div>
          <div className="grid-3 rv">
            {c.uses.items.map((u) => (
              <article className="tile-card shell" key={u.title}>
                <h3>{u.title}</h3>
                <p>{u.body}</p>
                {u.label && <p className="who">{u.label}</p>}
              </article>
            ))}
          </div>
        </section>

        <Faq heading={c.faq.heading} lede={c.faq.lede} items={c.faq.items} />

        <section className="wrap section" aria-labelledby="others-h">
          <div className="sec-head">
            <h2 id="others-h">Other tools</h2>
            <p className="lead">Focused tools for the work around your channels.</p>
          </div>
          <div className="grid-3 rv">
            {others.map((s) => <ToolCard slug={s} key={s} />)}
            <a className="tile-card shell tool-all" href="/tools">
              <span className="tile-ic"><Icon name="layers" /></span>
              <h3>All tools</h3>
              <p>See every Profaily tool side by side and pick the one that fits.</p>
              <span className="more-link">Explore all tools <Arrow /></span>
            </a>
          </div>
        </section>

        <CtaBand heading={c.banner.heading} lede={c.banner.body} secondary={{ href: "/tools", label: "Explore all tools" }} />
      </main>
    </PageShell>
  );
}
