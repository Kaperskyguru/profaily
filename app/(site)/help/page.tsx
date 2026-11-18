import "@/app/styles/help.css";
import { HelpSearch } from "@/components/behavior/HelpSearch";
import { PageShell } from "@/components/layout/PageShell";
import { Crumbs } from "@/components/sections/shared/Crumbs";
import { SUPPORT_EMAIL } from "@/components/templates/HelpArticlePage";
import { Arrow, Glyph, Icon } from "@/components/ui/Glyph";
import { OgUrl } from "@/components/ui/OgUrl";
import { HELP_SECTIONS, helpList, helpPages } from "@/content/help";
import { pageMetadata } from "@/lib/metadata";

const meta = {
  title: "Help center | Profaily",
  description: "Step-by-step help for Profaily: connect TikTok, Instagram and YouTube, fix a post that didn't go out, and stay in control of your accounts.",
  path: "/help",
};

export const metadata = pageMetadata(meta);

/** The three platform cards up top: Profaily's "products", each opening its connect guide. */
const PLATFORMS = [
  { glyph: "tiktok", name: "TikTok", line: "Connect TikTok and post to it", slug: "connect-tiktok" },
  { glyph: "instagram", name: "Instagram", line: "Connect a Business or Creator account", slug: "connect-instagram" },
  { glyph: "youtube", name: "YouTube", line: "Connect your channel and post Shorts", slug: "connect-youtube" },
] as const;

/** Answers people look for most, linked straight from the bottom of the page. */
const QUICK = [
  { href: "/help/why-a-post-failed", label: "Why did my post fail?" },
  { href: "/blog/is-profaily-safe-to-connect-social-media-accounts", label: "Is it safe to connect my accounts?" },
  { href: "/help/remove-profaily-access", label: "How do I remove Profaily's access?" },
];

const groups = HELP_SECTIONS.map((s) => ({ ...s, pages: helpList.filter((p) => p.section === s.name) })).filter((g) => g.pages.length > 0);

export default function Page() {
  return (
    <PageShell>
      <OgUrl path={meta.path} type="website" title={meta.title} description={meta.description} />
      <Crumbs items={[{ label: "Help center" }]} />
      <main className="pg-help hp-home">
        <header className="hp-hero">
          <div className="wrap">
            <h1>Help center</h1>
            <p className="lead">Got a question about posting with Profaily? We&rsquo;re here to help.</p>
            <HelpSearch items={helpList.map(({ slug, title, description, section }) => ({ slug, title, description, section }))} />
          </div>
        </header>

        <section className="hp-band" aria-label="Help by platform">
          <div className="wrap hp-cards">
            {PLATFORMS.filter((p) => helpPages[p.slug]).map((p) => (
              <a className="hp-card" href={`/help/${p.slug}`} key={p.slug}>
                <span className="hp-card-glyph"><Glyph name={p.glyph} id={`hp-${p.glyph}`} /></span>
                <h2>{p.name}</h2>
                <p>{p.line}</p>
                <span className="hp-btn">Read more <Arrow /></span>
              </a>
            ))}
          </div>
        </section>

        <section className="section tight hp-topics-wrap" aria-labelledby="hp-topics">
          <div className="wrap">
            <h2 id="hp-topics" className="hp-h2">Profaily topics</h2>
            <ul className="hp-pills">
              {groups.map((g) => (
                <li key={g.id}>
                  <a href={`#${g.id}`}>
                    <Icon name={g.icon} className="hp-pill-icon" />
                    <span>{g.name}</span>
                    <span className="hp-go" aria-hidden="true"><Arrow /></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section tight hp-popular-wrap" aria-labelledby="hp-popular">
          <div className="wrap">
            <h2 id="hp-popular" className="hp-h2">Popular topics</h2>
            <div className="hp-groups">
              {groups.map((g) => (
                <section className="hp-group" id={g.id} key={g.id} aria-labelledby={`hp-g-${g.id}`}>
                  <h3 id={`hp-g-${g.id}`}>{g.name}</h3>
                  <ul>
                    {g.pages.map((p) => (
                      <li key={p.slug}>
                        <a href={`/help/${p.slug}`}>
                          <span>{p.title}</span>
                          <span className="hp-go" aria-hidden="true"><Arrow /></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="section tight hp-quick-wrap" aria-labelledby="hp-quick">
          <div className="wrap hp-quick">
            <h2 id="hp-quick" className="hp-h2">Quick answers</h2>
            <ul>
              {QUICK.map((q) => (
                <li key={q.href}><a href={q.href}>{q.label} <Arrow /></a></li>
              ))}
            </ul>
            <p className="hp-quick-mail">Can&rsquo;t find it? Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> and a person will reply, usually the same day.</p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
