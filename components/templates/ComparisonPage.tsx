import "@/app/styles/compare.css";
import "@/app/styles/compare-article.css";
import { PageShell } from "@/components/layout/PageShell";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { Faq } from "@/components/sections/shared/Faq";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { OgUrl } from "@/components/ui/OgUrl";
import { PostMarkdown } from "@/components/ui/PostMarkdown";
import { faqJsonLd } from "@/content/comparisons";
import type { PostContent } from "@/content/posts";
import { ORIGIN } from "@/lib/metadata";

/**
 * A comparison page (/compare/<rival>-alternative), drawn from a post whose frontmatter sets `url: "/compare/…"`.
 * The markdown is written like any post; this template lays its sections out as a product page, by the H2 ids:
 *   (text before the first H2)   a note from the founder
 *   {#verdict}                   two cards: the paragraph starting "Switch" and the one starting "Stay"
 *   {#at-a-glance}               the side-by-side table (first column = row label, then rival, then Profaily),
 *                                its first rows in the hero card; any text after the table sits under it
 *   {#where-it-breaks}           intro, then each ### problem as a pair: rival on the left, Profaily on the right,
 *                                split at the first paragraph that starts with "Profaily" or "In Profaily"
 *   {#before-you-switch}         each ### question as a card
 *   {#faq}                       the frontmatter `faq` as the site FAQ (the markdown copy is not shown twice)
 *   {#start}                     the closing call to action
 *   any other H2                 a plain section: heading and text, with an image beside the text when it has one
 */

type Section = { id: string; heading: string; md: string };

const ID = /\s*\{#([a-z0-9-]+)\}\s*$/;

function sections(body: string): { intro: string; list: Section[] } {
  const [intro, ...rest] = body.split(/^## /m);
  return {
    intro: intro.trim(),
    list: rest.map((chunk) => {
      const nl = chunk.indexOf("\n");
      const line = chunk.slice(0, nl === -1 ? undefined : nl);
      const m = ID.exec(line);
      return { id: m ? m[1] : "", heading: line.replace(ID, "").trim(), md: nl === -1 ? "" : chunk.slice(nl + 1).trim() };
    }),
  };
}

function subsections(md: string): { lead: string; items: { heading: string; md: string }[] } {
  const [lead, ...rest] = md.split(/^### /m);
  return {
    lead: lead.trim(),
    items: rest.map((chunk) => {
      const nl = chunk.indexOf("\n");
      return { heading: chunk.slice(0, nl).trim(), md: chunk.slice(nl + 1).trim() };
    }),
  };
}

const blocks = (md: string) => md.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);

/** Rows of the first markdown table in `md`, without the header and divider; the rest of the text after it. */
function table(md: string): { head: string[]; rows: string[][]; after: string } {
  const lines = md.split("\n");
  const start = lines.findIndex((l) => l.trim().startsWith("|"));
  if (start === -1) return { head: [], rows: [], after: md };
  let end = start;
  while (end < lines.length && lines[end].trim().startsWith("|")) end++;
  const cells = (l: string) => l.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
  const [head, , ...rows] = lines.slice(start, end).map(cells);
  return { head, rows, after: lines.slice(end).join("\n").trim() };
}

const strip = (s: string) => s.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[(.+?)\]\(.+?\)/g, "$1");

function Prose({ md }: { md: string }) {
  return md ? <div className="cmp-prose"><PostMarkdown>{md}</PostMarkdown></div> : null;
}

export function ComparisonPage({ post }: { post: PostContent }) {
  const rival = /Profaily vs ([^:|]+)/.exec(post.title)?.[1].trim() ?? "the other tool";
  const { intro, list } = sections(post.body);
  const byId = (id: string) => list.find((s) => s.id === id);
  const verdict = byId("verdict");
  const glance = byId("at-a-glance");
  const breaks = byId("where-it-breaks");
  const before = byId("before-you-switch");
  const start = byId("start");
  const plain = list.filter((s) => !["verdict", "at-a-glance", "where-it-breaks", "before-you-switch", "faq", "start"].includes(s.id));
  const t = glance ? table(glance.md) : null;
  // The hero card shows the rows that decide it for a short-video team, else the table's first four.
  const QUICK = [/^built for/i, /file|frame rate/i, /status/i, /^approvals/i];
  const picked = QUICK.map((re) => t?.rows.find(([label]) => re.test(strip(label)))).filter((r): r is string[] => !!r);
  const quick = picked.length >= 3 ? picked : t?.rows.slice(0, 4) ?? [];
  const checked = post.sourcesChecked ?? post.dateLabel;

  return (
    <PageShell>
      <OgUrl path={post.href} type="article" title={`${post.title} | Profaily`} description={post.description} image={ORIGIN + post.coverImage} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          image: [ORIGIN + post.coverImage],
          datePublished: post.datePublished,
          dateModified: post.datePublished,
          mainEntityOfPage: `${ORIGIN}${post.href}`,
          author: post.author ? { "@type": "Person", name: post.author } : { "@type": "Organization", name: "Profaily" },
          publisher: { "@type": "Organization", name: "Profaily" },
        }}
      />
      {post.faq?.length ? <JsonLd data={faqJsonLd(post.faq)} /> : null}
      <main className="pg-compare pg-cmp">
        <PageHero
          crumbs={[{ href: "/compare", label: "Compare" }, { label: `Profaily vs ${rival}` }]}
          pill={`${rival} alternative`}
          title={post.title}
          lede={post.description}
          primary={{ href: post.cta.href, label: post.cta.label }}
          secondary={{ href: "#at-a-glance", label: "See the comparison" }}
          note={`${post.author ? `By ${post.author}, founder of Profaily. ` : ""}${rival} facts checked ${checked}.`}
          visual={quick.length ? (
            <div className="green-frame">
              <div className="card cmp-quick" data-ui>
                <h2 className="cmp-quick-h">Quick take</h2>
                <dl className="cmp-quick-rows">
                  <div className="cmp-quick-head" aria-hidden="true"><span /><span>{rival}</span><span>Profaily</span></div>
                  {quick.map(([label, them, us]) => (
                    <div key={label}>
                      <dt>{strip(label)}</dt>
                      <dd><span className="sr-only">{rival}: </span>{strip(them)}</dd>
                      <dd className="us"><span className="sr-only">Profaily: </span>{strip(us)}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ) : undefined}
        />

        {intro && (
          <section className="section tight" aria-label="A note from the founder">
            <div className="wrap cmp-note">
              <div className="cmp-note-by" aria-hidden="true"><span className="cmp-avatar">{(post.author ?? "Profaily").split(" ").map((w) => w[0]).join("").slice(0, 2)}</span></div>
              <div>
                <p className="cmp-kicker">{post.author ? `A note from ${post.author.split(" ")[0]}, the founder` : "Why this page exists"}</p>
                <Prose md={intro} />
              </div>
            </div>
          </section>
        )}

        {verdict && (
          <section className="section tight" id={verdict.id} aria-labelledby="cmp-verdict">
            <div className="wrap">
              <div className="sec-head"><h2 id="cmp-verdict">{verdict.heading}</h2></div>
              <div className="cmp-verdict">
                {blocks(verdict.md).map((b) => {
                  const us = /^switch/i.test(b);
                  return (
                    <article className={`tile-card ${us ? "cmp-fit-us" : "shell"}`} key={b.slice(0, 24)}>
                      <h3>{us ? "Switch to Profaily if" : `Stay with ${rival} if`}</h3>
                      <Prose md={b.replace(/^(Switch|Stay with [^ ]+) if /i, "").replace(/^./, (c) => c.toUpperCase())} />
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {glance && t && (
          <section className="section tight" id={glance.id} aria-labelledby="cmp-glance">
            <div className="wrap">
              <div className="sec-head"><h2 id="cmp-glance">{glance.heading}</h2></div>
              <div className="table-wrap cmp-table" role="region" aria-label={`Profaily versus ${rival}`} tabIndex={0}>
                <table>
                  <thead><tr><th scope="col"><span className="sr-only">Area</span></th><th scope="col">{t.head[1] || rival}</th><th scope="col">{t.head[2] || "Profaily"}</th></tr></thead>
                  <tbody>
                    {t.rows.map(([label, them, us]) => (
                      <tr key={label}><th scope="row">{strip(label)}</th><td data-label={t.head[1] || rival}>{strip(them)}</td><td className="us" data-label={t.head[2] || "Profaily"}>{strip(us)}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {t.after && <div className="cmp-after-table"><Prose md={t.after} /></div>}
            </div>
          </section>
        )}

        {breaks && (() => {
          const { lead, items } = subsections(breaks.md);
          return (
            <section className="section tight" id={breaks.id} aria-labelledby="cmp-breaks">
              <div className="wrap">
                <div className="sec-head"><h2 id="cmp-breaks">{breaks.heading}</h2></div>
                <div className="cmp-lead"><Prose md={lead} /></div>
                <div className="cmp-pairs">
                  {items.map((item) => {
                    const bs = blocks(item.md);
                    const cut = bs.findIndex((b) => /^(In )?Profaily\b/.test(b));
                    const left = cut === -1 ? bs : bs.slice(0, cut);
                    const right = cut === -1 ? [] : bs.slice(cut);
                    return (
                      <article className="cmp-pair" key={item.heading}>
                        <h3>{item.heading}</h3>
                        <div className="cmp-pair-cols">
                          <div className="cmp-side them"><p className="cmp-side-label">In {rival}</p><Prose md={left.join("\n\n")} /></div>
                          {right.length > 0 && <div className="cmp-side us"><p className="cmp-side-label">In Profaily</p><Prose md={right.join("\n\n")} /></div>}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })()}

        {plain.map((s) => {
          const bs = blocks(s.md);
          const img = bs.filter((b) => /^!\[/.test(b));
          const text = bs.filter((b) => !/^!\[/.test(b));
          return (
            <section className="section tight" id={s.id || undefined} aria-labelledby={`cmp-${s.id}`} key={s.heading}>
              <div className={`wrap ${img.length ? "cmp-row" : "cmp-narrow"}`}>
                <div>
                  <h2 id={`cmp-${s.id}`} className="cmp-h2">{s.heading}</h2>
                  <Prose md={text.join("\n\n")} />
                </div>
                {img.length > 0 && <div className="cmp-row-media"><Prose md={img.join("\n\n")} /></div>}
              </div>
            </section>
          );
        })}

        {before && (
          <section className="section tight" id={before.id} aria-labelledby="cmp-before">
            <div className="wrap">
              <div className="sec-head"><h2 id="cmp-before">{before.heading}</h2></div>
              <div className="grid-3 cmp-objections">
                {subsections(before.md).items.map((q) => (
                  <article className="tile-card shell" key={q.heading}>
                    <h3>{q.heading}</h3>
                    <Prose md={q.md} />
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {post.faq?.length ? <Faq heading={`Profaily vs ${rival}: questions`} items={post.faq} /> : null}

        <CtaBand
          heading={start?.heading ?? "Try Profaily with your own videos"}
          lede={start ? blocks(start.md).filter((b) => !/^\[[^\]]+\]\([^)]+\)\.?$/.test(b)).map(strip).join(" ") : undefined}
          primary={{ href: post.cta.href, label: post.cta.label }}
          secondary={{ href: "/features", label: "Explore features" }}
        />
      </main>
    </PageShell>
  );
}
