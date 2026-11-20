import "@/app/styles/help.css";
import { HelpSearch } from "@/components/behavior/HelpSearch";
import { PageShell } from "@/components/layout/PageShell";
import { Crumbs } from "@/components/sections/shared/Crumbs";
import { HelpContact } from "@/components/templates/HelpArticlePage";
import { Arrow, Glyph } from "@/components/ui/Glyph";
import { OgUrl } from "@/components/ui/OgUrl";
import { HELP_SECTIONS, helpList, helpPages } from "@/content/help";
import { pageMetadata } from "@/lib/metadata";

const meta = {
  title: "Help center | Profaily",
  description: "Step-by-step help for Profaily: connect TikTok, Instagram and YouTube, schedule your videos, fix one that didn't publish, bring in your team and manage your plan.",
  path: "/help",
};

export const metadata = pageMetadata(meta);

/** Where most people start: connecting each platform, each opening its connect guide. */
const PLATFORMS = [
  { glyph: "tiktok", name: "TikTok", line: "Any TikTok account, approved for public posting", slug: "connect-tiktok" },
  { glyph: "instagram", name: "Instagram", line: "A Business or Creator account", slug: "connect-instagram" },
  { glyph: "youtube", name: "YouTube", line: "Your channel, for Shorts and longer videos", slug: "connect-youtube" },
] as const;

/** Answers people look for most, linked straight from the bottom of the page. */
const QUICK = [
  { href: "/help/why-a-post-failed", label: "Why didn't my video publish?" },
  { href: "/blog/is-profaily-safe-to-connect-social-media-accounts", label: "Is it safe to connect my accounts?" },
  { href: "/help/remove-profaily-access", label: "How do I remove Profaily's access?" },
];

const groups = HELP_SECTIONS.map((s) => ({ ...s, pages: helpList.filter((p) => p.section === s.name) })).filter((g) => g.pages.length > 0);

export default function Page() {
  const platforms = PLATFORMS.filter((p) => helpPages[p.slug]);
  return (
    <PageShell>
      <OgUrl path={meta.path} type="website" title={meta.title} description={meta.description} />
      <Crumbs items={[{ label: "Help center" }]} />
      <main className="pg-help hp-home">
        <header className="hp-hero">
          <div className="wrap">
            <h1>Profaily help center</h1>
            <p className="lead">Step-by-step answers for connecting your accounts, scheduling videos, working with your team and managing your plan.</p>
            <HelpSearch items={helpList.map(({ slug, title, description, section }) => ({ slug, title, description, section }))} />
          </div>
        </header>

        {platforms.length > 0 && (
          <section className="hp-band" aria-labelledby="hp-connect">
            <div className="wrap hp-start">
              <div className="hp-start-copy">
                <h2 id="hp-connect" className="hp-h2">Connect your accounts</h2>
                <p>You sign in on each platform&rsquo;s own page and approve Profaily there. Profaily never sees your passwords.</p>
                <ul className="hp-connect">
                  {platforms.map((p) => (
                    <li className="rv" key={p.slug}>
                      <a href={`/help/${p.slug}`}>
                        <Glyph name={p.glyph} id={`hp-${p.glyph}`} />
                        <span className="hp-connect-copy"><strong>{`Connect ${p.name}`}</strong><span>{p.line}</span></span>
                        <span className="hp-go" aria-hidden="true"><Arrow /></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <figure className="hp-start-media rv from-r">
                <video
                  data-lazy-video
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/assets/help/connect-tiktok/connect-flow.jpg"
                  width={1600}
                  height={1092}
                  aria-label="Connecting TikTok in Profaily: Settings, Brands, Connect a channel, then TikTok listed under Channels"
                >
                  <source data-src="/assets/help/connect-tiktok/connect-flow.mp4" type="video/mp4" />
                </video>
                <figcaption>Connecting TikTok, recorded in the app.</figcaption>
              </figure>
            </div>
          </section>
        )}

        <section className="section tight hp-popular-wrap" aria-labelledby="hp-popular">
          <div className="wrap">
            <h2 id="hp-popular" className="hp-h2">Browse by topic</h2>
            <div className="hp-groups">
              {groups.map((g) => (
                <section className="hp-group rv" id={g.id} key={g.id} aria-labelledby={`hp-g-${g.id}`}>
                  <h3 id={`hp-g-${g.id}`}><a className="hp-group-link" href={`/help/topics/${g.id}`}>{g.name}</a></h3>
                  <p>{g.about}</p>
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
            <div>
              <h2 id="hp-quick" className="hp-h2">Quick answers</h2>
              <ul>
                {QUICK.map((q) => (
                  <li key={q.href}><a href={q.href}>{q.label} <Arrow /></a></li>
                ))}
              </ul>
            </div>
            <HelpContact />
          </div>
        </section>
      </main>
    </PageShell>
  );
}
