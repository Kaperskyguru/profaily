import { links } from "@/lib/links";

export function Hero() {
  return (
    <section className="hero home-hero">
      <picture className="hero-media" aria-hidden="true">
        <source
          media="(prefers-reduced-motion: reduce), (max-width: 960px)"
          srcSet="/assets/profaily-hero-studio.png"
        />
        <img
          className="hero-photo"
          src="/assets/profaily-hero-story.gif"
          alt=""
          width="1000"
          height="562"
          loading="eager"
          fetchPriority="high"
        />
      </picture>
      <div className="wrap home-hero-grid">
        <div className="home-hero-copy">
          <div className="eyebrow">
            The Agentic OS for short-form video marketing
          </div>
          <h1>
            Turn short-form video into a <span>growth engine</span> for your
            business.
          </h1>
          <p className="lede">
            Plan video distribution with your team, and schedule publishing
            across TikTok, Instagram Reels, YouTube Shorts, and Facebook or ask
            ChatGPT or Claude to put a publishing plan together.
          </p>
          <div className="actions">
            <a className="button primary" href={links.register}>
              Start your 5-day free trial&nbsp; →
            </a>
            <a className="button secondary" href="#workflow">
              See how it works
            </a>
          </div>
          <div
            className="platform-pills"
            aria-label="Supported video-first platforms"
          >
            <span>TikTok</span>
            <span>Instagram</span>
            <span>YouTube</span>
            <span>Facebook</span>
          </div>
        </div>
      </div>
    </section>
  );
}
