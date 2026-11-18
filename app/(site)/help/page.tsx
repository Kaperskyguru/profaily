import "@/app/styles/blog.css";
import "@/app/styles/help.css";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/shared/PageHero";
import { HelpContact } from "@/components/templates/HelpArticlePage";
import { OgUrl } from "@/components/ui/OgUrl";
import { HELP_SECTIONS, helpList } from "@/content/help";
import { pageMetadata } from "@/lib/metadata";

const meta = {
  title: "Help center | Profaily",
  description: "Step-by-step help for Profaily: connect TikTok, Instagram and YouTube, fix a post that didn't go out, and stay in control of your accounts.",
  path: "/help",
};

export const metadata = pageMetadata(meta);

const groups = HELP_SECTIONS.map((s) => ({ ...s, pages: helpList.filter((p) => p.section === s.name) })).filter((g) => g.pages.length > 0);

export default function Page() {
  return (
    <PageShell>
      <OgUrl path={meta.path} type="website" title={meta.title} description={meta.description} />
      <main className="pg-blog pg-help">
        <PageHero
          solo
          crumbs={[{ label: "Help center" }]}
          title="How can we help?"
          lede="Short, step-by-step answers for connecting your accounts, fixing a post and staying in control. Each one was checked against the app."
          primary={null}
        />
        <section className="section tight">
          <div className="wrap hp-index">
            {groups.map((g) => (
              <section key={g.name} className="hp-group" aria-labelledby={`hp-${g.name}`}>
                <h2 id={`hp-${g.name}`}>{g.name}</h2>
                <p>{g.about}</p>
                <ul className="hp-list">
                  {g.pages.map((p) => (
                    <li key={p.slug}>
                      <a href={`/help/${p.slug}`}>
                        <strong>{p.title}</strong>
                        <span>{p.description}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
            <HelpContact />
          </div>
        </section>
      </main>
    </PageShell>
  );
}
