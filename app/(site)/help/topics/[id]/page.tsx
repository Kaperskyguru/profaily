import "@/app/styles/help.css";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { Crumbs } from "@/components/sections/shared/Crumbs";
import { HelpContact } from "@/components/templates/HelpArticlePage";
import { Arrow, Icon } from "@/components/ui/Glyph";
import { OgUrl } from "@/components/ui/OgUrl";
import { HELP_SECTIONS, helpList } from "@/content/help";
import { pageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ id: string }> };

export const dynamicParams = false;

const live = () => HELP_SECTIONS.filter((s) => helpList.some((p) => p.section === s.name));

function find(id: string) {
  const topic = live().find((s) => s.id === id);
  if (!topic) notFound();
  return { ...topic, pages: helpList.filter((p) => p.section === topic.name) };
}

export function generateStaticParams() {
  return live().map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Params) {
  const { id } = await params;
  const t = find(id);
  return pageMetadata({ title: `${t.name} | Profaily Help`, description: t.about, path: `/help/topics/${id}` });
}

/** One help topic (Paddle's category page): the topic, its articles with their one-line answers, then support. */
export default async function Page({ params }: Params) {
  const { id } = await params;
  const t = find(id);
  return (
    <PageShell>
      <OgUrl path={`/help/topics/${id}`} type="website" title={`${t.name} | Profaily Help`} description={t.about} />
      <Crumbs items={[{ href: "/help", label: "Help center" }, { label: t.name }]} />
      <main className="pg-help hp-home hp-topic">
        <header className="hp-hero">
          <div className="wrap">
            <a className="hp-back" href="/help">Help center</a>
            <span className="hp-topic-icon"><Icon name={t.icon} /></span>
            <h1>{t.name}</h1>
            <p className="lead">{t.about}</p>
          </div>
        </header>
        <section className="section tight">
          <div className="wrap hp-topic-list">
            <ul>
              {t.pages.map((p) => (
                <li key={p.slug}>
                  <a href={`/help/${p.slug}`}>
                    <span className="hp-topic-copy"><strong>{p.title}</strong><span>{p.description}</span></span>
                    <span className="hp-go" aria-hidden="true"><Arrow /></span>
                  </a>
                </li>
              ))}
            </ul>
            <HelpContact />
          </div>
        </section>
      </main>
    </PageShell>
  );
}
