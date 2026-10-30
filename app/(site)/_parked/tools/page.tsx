import "@/app/styles/tools.css";
import { PageShell } from "@/components/layout/PageShell";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { PageHero } from "@/components/sections/shared/PageHero";
import { ToolCard } from "@/components/templates/ToolPage";
import { Arrow, Icon, type IconName } from "@/components/ui/Glyph";
import { OgUrl } from "@/components/ui/OgUrl";
import { toolOrder, toolsIndexMeta } from "@/content/tools";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(toolsIndexMeta);

const suite: { icon: IconName; name: string; from: string; to: string }[] = [
  { icon: "upload", name: "Auto Cross Post", from: "New video", to: "Selected channels" },
  { icon: "users", name: "Profile Manager", from: "One update", to: "Connected profiles" },
  { icon: "retry", name: "Smart Repost", from: "Library video", to: "Fresh copy, then channels" },
];

export default function Page() {
  return (
    <PageShell>
      <OgUrl path={toolsIndexMeta.path} />
      <main className="pg-tool pg-tools">
        <PageHero
          solo
          crumbs={[{ label: "Tools" }]}
          pill="Profaily tools"
          title="Make more of every video."
          lede="Focused tools for the work around your channels: distribute new videos, manage profile updates, and put eligible library videos back into rotation."
          secondary={{ href: "/features", label: "Explore Profaily" }}
        />

        <section className="wrap section" aria-labelledby="choose-h">
          <div className="sec-head center">
            <h2 id="choose-h">Three tools. One connected workspace.</h2>
            <p className="lead">Spend less time repeating the same work across channels. Choose the tool that fits what you need to do.</p>
          </div>
          <div className="grid-3 rv">
            {toolOrder.map((s) => <ToolCard slug={s} key={s} />)}
          </div>
        </section>

        <section className="wrap section tight" aria-labelledby="fit-h">
          <div className="tools-fit">
            <div>
              <h2 id="fit-h">Keep the work moving after you publish</h2>
              <p className="lead">Bring distribution, publishing, and profile updates into the same social workflow. Set up once, and keep your social work moving.</p>
              <div className="actions">
                <a className="more-link" href="/features">See what Profaily does <Arrow /></a>
              </div>
            </div>
            <div className="sh rv">
              <div className="card tools-suite" data-ui>
                <div className="tv-hd"><b>Profaily tools</b><span className="st">3 tools</span></div>
                {suite.map((s) => (
                  <div className="row" key={s.name}>
                    <span className="tile-ic"><Icon name={s.icon} /></span>
                    <span className="nm"><b>{s.name}</b><small>{s.from} <span aria-hidden="true">→</span><span className="sr-only">to</span> {s.to}</small></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CtaBand heading="Set up once. Keep your social work moving." secondary={{ href: "/features", label: "Explore Profaily" }} />
      </main>
    </PageShell>
  );
}
