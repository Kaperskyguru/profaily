import { MegaLink, MegaMenu } from "./MegaMenu";
import { compareMenu, DEFAULT_TOOLS_INTRO, featuresMenu, toolsMenu } from "@/content/nav";
import { links } from "@/lib/links";

export function SiteHeader({ toolsIntro = DEFAULT_TOOLS_INTRO }: { toolsIntro?: string }) {
  return (
    <header className="site-header">
      <div className="wrap nav-row">
        <a className="brand" href="/" aria-label="Profaily home">
          <img src="/assets/profaily-lockup-white.svg" alt="Profaily" />
        </a>
        <button className="mobile-menu" aria-expanded="false" aria-label="Open navigation">☰</button>
        <nav className="main-nav" aria-label="Main navigation">
          <MegaMenu id="feature-mega" label="Features" columns={featuresMenu}
            foot={{ href: "/features", strong: "One video operation, connected from publish to outcome.", rest: "Explore the full feature set.", cta: "All features" }} />
          <MegaMenu id="tools-mega" label="Tools" extraClass="tools-mega"
            foot={{ href: "/tools", strong: "One place for more of your social workflow.", rest: "Explore Profaily Tools.", cta: "All tools" }}>
            <div className="mega-col">
              <h3>{toolsMenu.heading}</h3>
              {toolsMenu.links.map((l) => <MegaLink key={l.href} link={l} />)}
            </div>
            <div className="mega-col tools-menu-intro">
              <h3>Part of Profaily</h3>
              <p>{toolsIntro}</p>
              <a className="mega-foot-link" href="/tools">Explore all tools&nbsp; →</a>
            </div>
          </MegaMenu>
          <a className="nav-link" href="/pricing">Pricing</a>
          <MegaMenu id="compare-mega" label="Compare" extraClass="compare-mega" columns={compareMenu}
            foot={{ href: "/compare", strong: "Compare the workflows that matter.", rest: "Review channels, publishing, inbox, teams, and analytics.", cta: "All comparisons" }} />
          <a className="nav-link" href="/blog">Blog</a>
        </nav>
        <div className="nav-actions">
          <a className="sign-in" href={links.login}>Sign in</a>
          <a className="button primary small nav-cta" href={links.register}>Start free trial</a>
        </div>
      </div>
    </header>
  );
}
