import "@/app/styles/compare-features.css";
import { PageShell } from "@/components/layout/PageShell";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { Faq } from "@/components/sections/shared/Faq";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Glyph } from "@/components/ui/Glyph";
import { JsonLd } from "@/components/ui/JsonLd";
import { OgUrl } from "@/components/ui/OgUrl";
import { faqJsonLd } from "@/content/comparisons";
import { featureCount, featureGroups } from "@/content/compare";
import type { Cell, ChecklistComparison, Mark } from "@/content/compare";

type Shown = Mark | "unknown";
const LABEL: Record<Shown, string> = { yes: "Yes", partial: "Partly", no: "No", unknown: "Not stated" };

function Icon({ mark }: { mark: Shown }) {
  return (
    <span className={`cf-mark ${mark}`} aria-hidden="true">
      <svg viewBox="0 0 20 20" width="20" height="20">
        {mark === "yes" && <path d="M5 10.5l3.2 3.2L15 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />}
        {mark === "partial" && <path d="M6 10h8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />}
        {mark === "no" && <path d="M6.5 6.5l7 7M13.5 6.5l-7 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />}
      </svg>
    </span>
  );
}

function Mark({ cell, who }: { cell: Cell | undefined; who: string }) {
  const mark: Shown = cell?.mark ?? "unknown";
  return (
    <div className={`ck-cell ${mark}`} data-who={who}>
      <Icon mark={mark} />
      <span className="sr-only">{`${who}: ${LABEL[mark]}. `}</span>
      <span className="ck-note">{cell?.text ?? "Not stated in its docs"}</span>
    </div>
  );
}

const yes = (cells: ChecklistComparison["cells"], ids: string[]) =>
  ids.filter((id) => cells[id as keyof typeof cells]?.mark === "yes").length;

/** /compare/<slug>, checklist layout: every Profaily feature, with the rival's cell for each. */
export function CompareChecklistPage({ c }: { c: ChecklistComparison }) {
  const path = `/compare/${c.slug}`;
  const allIds = featureGroups.flatMap((g) => g.rows.map((r) => r.id));
  const theirs = yes(c.cells, allIds);
  return (
    <PageShell>
      <OgUrl path={path} type="website" title={c.meta.title} description={c.meta.description} image={undefined} />
      <JsonLd data={faqJsonLd(c.faq)} />
      <main className="pg-compare pg-cf">
        <PageHero
          solo
          crumbs={[{ href: "/compare", label: "Compare" }, { label: `Profaily vs ${c.rival}` }]}
          pill={`Profaily vs ${c.rival}`}
          title={<>Profaily vs <em className="cf-em">{c.rival}</em></>}
          lede={c.hero.lede}
          secondary={{ href: "#features", label: "See every feature" }}
          note={`${c.rival} details checked ${c.checked}.`}
        />

        <section className="section tight" id="features" aria-labelledby="ck-score">
          <div className="wrap">
            <h2 id="ck-score" className="sr-only">{`Profaily vs ${c.rival}, feature by feature`}</h2>
            <div className="ck-score">
              <div className="ck-score-card us">
                <span>Profaily</span>
                <b>{featureCount}<small>/{featureCount}</small></b>
                <p className="cf-posts-to">
                  {(["tiktok", "instagram", "youtube"] as const).map((p) => <Glyph key={p} name={p} id={`ck-${p}`} />)}
                </p>
              </div>
              <div className="ck-score-card">
                <span>{c.rival}</span>
                <b>{theirs}<small>/{featureCount}</small></b>
                <p>features confirmed in its own docs</p>
              </div>
            </div>

            <ul className="ck-legend" aria-label="What the marks mean">
              {(["yes", "partial", "unknown"] as const).map((m) => (
                <li key={m}><Icon mark={m} />{m === "yes" ? "Has it" : m === "partial" ? "Partly, or only in some cases" : `${c.rival}'s docs don't say`}</li>
              ))}
            </ul>

            <div className="ck-groups">
              {featureGroups.map((g) => {
                const ids = g.rows.map((r) => r.id);
                return (
                  <section className="ck-group" key={g.title} aria-labelledby={`ck-${g.title}`}>
                    <header className="ck-group-head">
                      <h3 id={`ck-${g.title}`}>{g.title}</h3>
                      <p>
                        <span className="us">Profaily {ids.length}/{ids.length}</span>
                        <span>{c.rival} {yes(c.cells, ids)}/{ids.length}</span>
                      </p>
                    </header>
                    <div className="ck-head-row" aria-hidden="true">
                      <span />
                      <span className="us">Profaily</span>
                      <span>{c.rival}</span>
                    </div>
                    <ul className="ck-rows">
                      {g.rows.map((r) => (
                        <li className="ck-row" key={r.id}>
                          <span className="ck-label">{r.label}</span>
                          <Mark cell={{ mark: "yes", text: r.us }} who="Profaily" />
                          <Mark cell={c.cells[r.id]} who={c.rival} />
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              })}
            </div>

            <p className="cf-foot">{`${c.rival} details come from ${c.rival}'s own website and help center, checked ${c.checked}. An empty cell means its docs don't say either way, not that it can't. If something here is out of date, tell us and we'll fix it.`}</p>
          </div>
        </section>

        <section className="section tight" aria-labelledby="ck-verdict">
          <div className="wrap">
            <div className="ck-verdict">
              <h2 id="ck-verdict">The short version</h2>
              <p>{c.verdict}</p>
            </div>
          </div>
        </section>

        <Faq heading={`${c.rival} alternative FAQ`} items={c.faq} />

        <CtaBand heading={c.cta.title} lede={c.cta.body} secondary={{ href: "/pricing", label: "See pricing" }} />
      </main>
    </PageShell>
  );
}
