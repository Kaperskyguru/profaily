import "@/app/styles/compare.css";
import { PageShell } from "@/components/layout/PageShell";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { Faq } from "@/components/sections/shared/Faq";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Fan } from "@/components/sections/shared/Phone";
import { Arrow, Glyph, Icon } from "@/components/ui/Glyph";
import { JsonLd } from "@/components/ui/JsonLd";
import { OgUrl } from "@/components/ui/OgUrl";
import { comparisonOrder, comparisons, faqJsonLd, type ComparisonContent, type ComparisonSlug } from "@/content/comparisons";
import { plans, TRIAL_DAYS } from "@/content/plans";

const CHANNELS = ["tiktok", "instagram", "youtube", "facebook"] as const;

function QuickTake({ slug, c }: { slug: string; c: ComparisonContent }) {
  return (
    <div className="green-frame">
      <div className="card cmp-quick" data-ui>
        <h2 className="cmp-quick-h">Quick take</h2>
        <p className="cmp-quick-note">{c.hero.panelNote}</p>
        <dl className="cmp-quick-rows">
          <div className="cmp-quick-head" aria-hidden="true">
            <span />
            <span>{c.name}</span>
            <span>Profaily</span>
          </div>
          {c.quick.map((r) => (
            <div key={r.label}>
              <dt>{r.label}</dt>
              <dd><span className="sr-only">{c.name}: </span>{r.them}</dd>
              <dd className="us"><span className="sr-only">Profaily: </span>{r.us}</dd>
            </div>
          ))}
        </dl>
        <div className="cmp-quick-ch">
          <span>Profaily channels</span>
          <span className="cmp-glyphs">
            {CHANNELS.map((ch) => <Glyph key={ch} name={ch} id={`qt-${slug}-${ch}`} />)}
          </span>
        </div>
      </div>
    </div>
  );
}

export function ComparePage({ slug, content: c }: { slug: ComparisonSlug; content: ComparisonContent }) {
  const related = comparisonOrder.filter((s) => s !== slug);
  const priceRow = c.rows.find((r) => /pricing/i.test(r.area));
  return (
    <PageShell>
      <OgUrl path={`/compare/${slug}`} type="website" title={c.meta.title} description={c.meta.description} />
      <JsonLd data={faqJsonLd(c.faq)} />
      <main className="pg-compare">
        <PageHero
          crumbs={[{ href: "/compare", label: "Compare" }, { label: `Profaily vs ${c.name}` }]}
          pill={`${c.name} alternative`}
          title={`Profaily vs ${c.name}`}
          lede={`${c.hero.title} ${c.hero.lede}`}
          secondary={{ href: "/pricing", label: "See pricing" }}
          note="Research checked September 29, 2026, against each provider’s own pages."
          visual={<QuickTake slug={slug} c={c} />}
        />

        <section className="section" id="comparison" aria-labelledby="cmp-glance">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="cmp-glance">At a glance</h2>
              <p className="lead">{c.intro}</p>
            </div>
            <div className="table-wrap cmp-table rv" role="region" aria-label={`Profaily versus ${c.name} comparison`} tabIndex={0}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Area</th>
                    <th scope="col">{c.name}</th>
                    <th scope="col">Profaily</th>
                  </tr>
                </thead>
                <tbody>
                  {c.rows.map((row) => (
                    <tr key={row.area}>
                      <th scope="row">{row.area}</th>
                      <td>{row.competitor}</td>
                      <td className="us">{row.profaily}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section tight" aria-labelledby="cmp-fit">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="cmp-fit">{`When ${c.name} fits, and when Profaily does`}</h2>
              <p className="lead">The better choice depends on the work your team does every week.</p>
            </div>
            <div className="grid-3">
              <article className="tile-card shell rv">
                <h3>{`Choose ${c.name} if`}</h3>
                <p>{c.fit.competitor}</p>
              </article>
              <article className="tile-card cmp-fit-us rv" style={{ "--d": "0.08s" } as React.CSSProperties}>
                <h3>Choose Profaily if</h3>
                <p>{c.fit.profaily}</p>
              </article>
              <article className="tile-card shell rv" style={{ "--d": "0.16s" } as React.CSSProperties}>
                <h3>The trade-off</h3>
                <p>{c.fit.tradeoff}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="wrap" aria-labelledby="cmp-flow">
          <article className="fr">
            <div className="txt">
              <span className="verb">The workflow</span>
              <h2 id="cmp-flow" className="cmp-fr-h">One finished video, every channel</h2>
              <p className="lead">{c.flowSummary}</p>
              <ul className="bul">
                <li><Icon name="link" /><span><b>Import in bulk:</b> a CSV, or links from Google Drive, Dropbox and OneDrive.</span></li>
                <li><Icon name="phone" /><span><b>Preview each channel:</b> problems are flagged before you schedule.</span></li>
                <li><Icon name="check" /><span><b>Approve, then post:</b> track each channel and retry the one that fails.</span></li>
              </ul>
              <div className="actions">
                <a className="more-link" href="/features">Explore features <Arrow /></a>
              </div>
            </div>
            <div className="sh rv"><div className="stage4"><Fan id={`cmp-fan-${slug}`} /></div></div>
          </article>
        </section>

        <section className="section tight" aria-labelledby="cmp-price">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="cmp-price">Pricing reality check</h2>
              <p className="lead">Profaily has no free plan. Here is what each plan costs and includes, next to how {c.name} shapes its pricing.</p>
            </div>
            <div className="grid-3 cmp-price">
              {plans.map((p, i) => (
                <article className="tile-card rv" key={p.key} style={{ "--d": `${i * 0.08}s` } as React.CSSProperties}>
                  <h3>{`Profaily ${p.name}`}</h3>
                  <p className="cmp-amt"><b>{p.price.usd.m}</b> per month</p>
                  <p>{p.audience}</p>
                  <ul className="cmp-list">
                    {p.limits.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                  <p className="cmp-small">{p.trial ? `${TRIAL_DAYS}-day free trial, card required.` : "No trial on Creator."}</p>
                </article>
              ))}
              {priceRow && (
                <article className="tile-card shell rv" style={{ "--d": "0.16s" } as React.CSSProperties}>
                  <h3>{c.name}</h3>
                  <p>{priceRow.competitor}</p>
                  <p className="cmp-small">Check the sources below for {c.name}’s current prices.</p>
                </article>
              )}
            </div>
            <p className="cmp-after"><a className="more-link" href="/pricing">Compare plans in full <Arrow /></a></p>
          </div>
        </section>

        <Faq heading={`Profaily vs ${c.name}: questions`} lede="Use these answers as a starting point, then confirm plan details with each provider." items={c.faq} />

        <section className="section tight cmp-sources-sec" aria-labelledby="cmp-src">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="cmp-src">Sources</h2>
              <p className="lead">{c.name} facts on this page come from {c.name}’s own pages, checked September 29, 2026. Prices, limits and platform rules change.</p>
            </div>
            <ul className="cmp-sources">
              {c.sources.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    <span><b>{s.title}</b><span>{s.body}</span></span>
                    <span className="cmp-ext" aria-hidden="true">↗</span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section tight" aria-labelledby="cmp-more">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="cmp-more">More comparisons</h2>
            </div>
            <div className="grid-3">
              {related.map((s, i) => (
                <a className="tile-card rv" href={`/compare/${s}`} key={s} style={{ "--d": `${i * 0.08}s` } as React.CSSProperties}>
                  <h3>{`Profaily vs ${comparisons[s].name}`}</h3>
                  <p>{comparisons[s].model}</p>
                  <span className="more-link">Read the comparison <Arrow /></span>
                </a>
              ))}
            </div>
            <p className="cmp-after"><a className="more-link" href="/compare">All comparisons <Arrow /></a></p>
          </div>
        </section>

        <CtaBand
          heading="See if Profaily fits your workflow"
          lede={`Try Business free for ${TRIAL_DAYS} days, or start on Creator if it is just you.`}
          secondary={{ href: "/pricing", label: "See pricing" }}
        />
      </main>
    </PageShell>
  );
}
