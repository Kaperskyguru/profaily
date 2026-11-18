import "@/app/styles/blog.css";
import "@/app/styles/help.css";
import { PageShell } from "@/components/layout/PageShell";
import { Crumbs } from "@/components/sections/shared/Crumbs";
import { ArticleToc } from "@/components/behavior/ArticleToc";
import { Arrow } from "@/components/ui/Glyph";
import { JsonLd } from "@/components/ui/JsonLd";
import { OgUrl } from "@/components/ui/OgUrl";
import { PostMarkdown } from "@/components/ui/PostMarkdown";
import { faqJsonLd } from "@/content/comparisons";
import { HELP_SECTIONS, helpList, helpPages, type HelpPage } from "@/content/help";
import { ORIGIN } from "@/lib/metadata";

export const helpTitle = (page: HelpPage) => `${page.title} | Profaily Help`;
export const SUPPORT_EMAIL = "support@useprofaily.com";

/** The "still stuck" card: one way to reach a person. */
export function HelpContact({ subject }: { subject?: string }) {
  const href = `mailto:${SUPPORT_EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
  return (
    <div className="hp-contact">
      <h2>Still stuck?</h2>
      <p>Email us and a person will reply, usually the same day. Tell us what you tapped and what you saw.</p>
      <a className="btn btn-primary" href={href}>Email support <Arrow /></a>
    </div>
  );
}

export function HelpArticlePage({ page }: { page: HelpPage }) {
  const related = page.related.filter((s) => helpPages[s]).map((s) => helpPages[s]);
  for (const p of helpList) {
    if (related.length >= 3) break;
    if (p.slug !== page.slug && p.section === page.section && !related.includes(p)) related.push(p);
  }
  const url = `${ORIGIN}/help/${page.slug}`;
  const topic = HELP_SECTIONS.find((s) => s.name === page.section);
  const topicHref = topic ? `/help/topics/${topic.id}` : "/help";

  return (
    <PageShell>
      <OgUrl path={`/help/${page.slug}`} type="article" title={helpTitle(page)} description={page.description} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: page.title,
          description: page.description,
          dateModified: page.updated,
          mainEntityOfPage: url,
          author: { "@type": "Organization", name: "Profaily" },
          publisher: { "@type": "Organization", name: "Profaily" },
        }}
      />
      {page.faq?.length ? <JsonLd data={faqJsonLd(page.faq)} /> : null}
      <main className="pg-blog pg-article pg-help">
        <header className="page-hero has-grid ar-hero hp-hero">
          <div className="wrap ar-head">
            <Crumbs items={[{ href: "/help", label: "Help center" }, { href: topicHref, label: page.section }, { label: page.title }]} />
            <a className="hp-back" href={topicHref}>{page.section}</a>
            <h1>{page.title}</h1>
            <p className="lead">{page.description}</p>
            <p className="bl-meta"><span>Updated <time dateTime={page.updated}>{page.updatedLabel}</time></span></p>
          </div>
        </header>

        <div className="wrap ar-layout">
          <article className="ar-body">
            <div className="ar-prose">
              <PostMarkdown>{page.body}</PostMarkdown>
            </div>
            <HelpContact subject={page.title} />
          </article>

          <div className="ar-rail">
            {page.toc.length > 1 && (
              <nav className="ar-toc" aria-labelledby="ar-toc-title">
                <h2 id="ar-toc-title">On this page</h2>
                <ArticleToc items={page.toc} />
              </nav>
            )}
          </div>
        </div>

        {related.length > 0 && (
          <section className="section tight" aria-labelledby="hp-related-title">
            <div className="wrap">
              <h2 id="hp-related-title" className="hp-related-title">Related help</h2>
              <ul className="hp-list">
                {related.slice(0, 3).map((p) => (
                  <li key={p.slug}>
                    <a href={`/help/${p.slug}`}>
                      <strong>{p.title}</strong>
                      <span>{p.description}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
    </PageShell>
  );
}
