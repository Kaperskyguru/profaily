import "@/app/styles/mcp.css";
import { PageShell } from "@/components/layout/PageShell";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { Faq } from "@/components/sections/shared/Faq";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CopyUrl } from "@/components/sections/mcp/CopyUrl";
import { Arrow, Glyph, Icon } from "@/components/ui/Glyph";
import { JsonLd } from "@/components/ui/JsonLd";
import { OgUrl } from "@/components/ui/OgUrl";
import { faqJsonLd } from "@/content/comparisons";
import { MCP_URL, mcpPage as c } from "@/content/mcp";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(c.meta);

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Profaily MCP server",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://useprofaily.com/mcp",
  description: c.meta.description,
  publisher: { "@type": "Organization", name: "Profaily", url: "https://useprofaily.com" },
};

/** Profaily for ChatGPT, Claude and any MCP app: what to ask (real runs), every tool, the safety rules, setup. */
export default function Page() {
  return (
    <PageShell>
      <OgUrl path={c.meta.path} />
      <JsonLd data={faqJsonLd(c.faq.map((f) => ({ q: f.q, a: f.a })))} />
      <JsonLd data={softwareJsonLd} />
      <main className="pg-mcp">
        <PageHero
          crumbs={[{ href: "/", label: "Home" }, { label: "MCP server" }]}
          pill={c.hero.pill}
          title={c.hero.title}
          lede={c.hero.lede}
          secondary={{ href: "#setup", label: "Connect your AI app" }}
          note={<>Server URL: <code>{MCP_URL}</code></>}
          visual={<img className="mcp-hero-shot" src={c.hero.image.src} alt={c.hero.image.alt} width={c.hero.image.w} height={c.hero.image.h} loading="eager" />}
        />

        <section className="wrap section mcp-examples" aria-labelledby="mcp-ask">
          <div className="sec-head">
            <h2 id="mcp-ask">What you can ask</h2>
            <p className="lead">Real prompts, run in Claude on our own Masteringbackend brand on 20 November 2026. The answers are Claude&rsquo;s, from Profaily&rsquo;s data.</p>
          </div>
          {c.examples.map((e, i) => (
            <article className={`mcp-ex${i % 2 ? " flip" : ""}`} key={e.verb}>
              <div className="mcp-ex-txt">
                <span className="verb">{e.verb}</span>
                <h3>{e.title}</h3>
                <blockquote>&ldquo;{e.ask}&rdquo;</blockquote>
                <p>{e.body}</p>
              </div>
              <figure className="mcp-ex-fig">
                <img src={e.image.src} alt={e.image.alt} width={e.image.w} height={e.image.h} loading="lazy" />
              </figure>
            </article>
          ))}
          <div className="mcp-more">
            <h3>More to try</h3>
            <ul>{c.moreAsks.map((a) => <li key={a}>&ldquo;{a}&rdquo;</li>)}</ul>
          </div>
        </section>

        <section className="wrap section mcp-tools" id="tools" aria-labelledby="mcp-tools-h">
          <div className="sec-head">
            <h2 id="mcp-tools-h">Everything your AI app can do in Profaily</h2>
            <p className="lead">30 tools, in plain words. The ones marked <span className="mcp-tag">Changes</span> draft, schedule or edit; the rest only read.</p>
          </div>
          <div className="mcp-tool-groups">
            {c.tools.map((g) => (
              <section className="mcp-tool-group" key={g.group} aria-label={g.group}>
                <h3>{g.group}</h3>
                <dl>
                  {g.rows.map((r) => (
                    <div key={r.name}>
                      <dt><code>{r.name}</code>{r.changes && <span className="mcp-tag">Changes</span>}</dt>
                      <dd>{r.what}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ))}
          </div>
        </section>

        <section className="wrap section mcp-safety" aria-labelledby="mcp-safe-h">
          <div className="sec-head">
            <h2 id="mcp-safe-h">Built so nothing goes out by surprise</h2>
          </div>
          <div className="mcp-safe-grid">
            <ul className="mcp-safe-list">
              {c.safety.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ul>
            <figure className="mcp-safe-fig">
              <img src="/assets/help/connect-claude/approve.jpg" alt="Profaily's approval page listing three permissions, see your videos, channels and calendar, draft videos and upload files, schedule, publish and change scheduled videos, with Allow and Cancel" width={1600} height={1040} loading="lazy" />
              <figcaption>Profaily&rsquo;s approval page. Untick the last two and the app can only look.</figcaption>
            </figure>
          </div>
        </section>

        <section className="wrap section mcp-setup" id="setup" aria-labelledby="mcp-setup-h">
          <div className="sec-head">
            <h2 id="mcp-setup-h">Connect your AI app in two minutes</h2>
            <p className="lead">One URL, no API key. Profaily asks you to approve the app the first time it connects.</p>
          </div>
          <CopyUrl url={MCP_URL} />
          <div className="mcp-setup-grid">
            {c.setup.map((s) => (
              <article className="mcp-setup-card" key={s.app}>
                <header>
                  {s.icon === "braces" ? <span className="glyph"><Icon name="braces" /></span> : <Glyph name={s.icon} id={`mcp-${s.icon}`} />}
                  <h3>{s.app}</h3>
                </header>
                <ol>{s.steps.map((step) => <li key={step}>{step.includes("claude mcp add") ? <code>{step.replace("In Claude Code: ", "")}</code> : step}</li>)}</ol>
                <p className="mcp-plans">{s.plans}</p>
                <a href={s.guide}>Step-by-step guide with screenshots <Arrow /></a>
              </article>
            ))}
          </div>
          <div className="mcp-limits">
            <h3>Included in every plan</h3>
            <p>Each month includes AI requests. Every tool call counts, and the count resets on the 1st.</p>
            <ul>{c.limits.map((l) => <li key={l.plan}><b>{l.requests}</b><span>{l.plan}</span></li>)}</ul>
          </div>
        </section>

        <Faq heading="Questions about the MCP server" items={c.faq.map((f) => ({ q: f.q, a: f.a }))} id="mcp-faq" />
        <CtaBand />
      </main>
    </PageShell>
  );
}
