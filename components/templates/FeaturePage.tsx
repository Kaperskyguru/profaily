import "@/app/styles/features.css";
import { PageShell } from "@/components/layout/PageShell";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Arrow, Glyph, Icon } from "@/components/ui/Glyph";
import { OgUrl } from "@/components/ui/OgUrl";
import type { FeatureContent } from "@/content/features";
import { channelLinks, featureLinks } from "@/content/nav";

/** "Works with your channels": the four channel pages as glyph + name links. */
export function ChannelStrip({ id, idPrefix, heading = "Works with your channels", lede }: { id?: string; idPrefix: string; heading?: string; lede?: string }) {
  return (
    <section className="section tight fx-channels" id={id} aria-labelledby={`${idPrefix}-ch-h`}>
      <div className="wrap">
        <div className="sec-head center">
          <h2 id={`${idPrefix}-ch-h`}>{heading}</h2>
          {lede && <p className="lead">{lede}</p>}
        </div>
        <ul className="fx-strip rv">
          {channelLinks.map((ch) => (
            <li key={ch.href}>
              <a href={ch.href}>
                {ch.glyph && <Glyph name={ch.glyph} id={`${idPrefix}-${ch.glyph}`} />}
                <span><b>{ch.title}</b><small>{ch.text}</small></span>
                <Arrow />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FeaturePage({ content: c }: { content: FeatureContent }) {
  const items = c.capabilities.items;
  const related = featureLinks.filter((l) => l.href !== "/features" && l.href !== c.meta.path);
  return (
    <PageShell>
      <OgUrl path={c.meta.path} />
      <main className="pg-feature">
        <PageHero
          crumbs={[{ href: "/features", label: "Features" }, { label: c.name }]}
          pill={c.hero.eyebrow}
          title={c.hero.title}
          lede={c.hero.lede}
          secondary={{ href: "/pricing", label: "See pricing" }}
          note={c.hero.microcopy}
          visual={<div className="green-frame">{c.visual}</div>}
        />

        <section className="section" aria-labelledby="benefits-h">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="benefits-h">Control the workflow. Keep moving.</h2>
            </div>
            <div className="grid-3">
              {c.benefits.map((b, i) => (
                <article className="tile-card rv" style={{ "--d": `${i * 0.06}s` } as React.CSSProperties} key={b.title}>
                  <span className="tile-ic"><Icon name={b.icon} /></span>
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section fx-caps" aria-labelledby="caps-h">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="caps-h">{c.capabilities.heading}</h2>
              {c.capabilities.lede && <p className="lead">{c.capabilities.lede}</p>}
            </div>
            {c.showcase && <div className="sh fx-show rv">{c.showcase}</div>}
            <div className={items.length % 4 === 0 ? "grid-4" : "grid-3"}>
              {items.map((it) => (
                <article className="tile-card shell rv" id={it.id} key={it.id}>
                  <h3>{it.title}</h3>
                  <p>{it.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ChannelStrip idPrefix="fp" />

        <section className="section" aria-labelledby="related-h">
          <div className="wrap">
            <div className="sec-head fx-head">
              <h2 id="related-h">From publishing to business outcomes</h2>
              <a className="more-link" href="/features">All features <Arrow /></a>
            </div>
            <div className="grid-4">
              {related.map((l) => (
                <a className="tile-card rv" href={l.href} key={l.href}>
                  <h3>{l.title}</h3>
                  <p>{l.text}</p>
                  <span className="more-link">Learn more <Arrow /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <CtaBand secondary={{ href: "/features", label: "Explore all features" }} />
      </main>
    </PageShell>
  );
}
