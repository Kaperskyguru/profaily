import { links } from "@/lib/links";

export function Hero() {
  return (
    <section className="hero">
      <picture className="hero-media" aria-hidden="true">
        <source media="(prefers-reduced-motion: reduce), (max-width: 960px)" srcSet="/assets/profaily-hero-studio.png" />
        <img className="hero-photo" src="/assets/profaily-hero-story.gif" alt="" width="1000" height="562" loading="eager" fetchPriority="high" />
      </picture>
      <div className="wrap">
        <div className="hero-content">
          <h1>The operating system for <span>short-form video marketing.</span></h1>
          <p className="lede">Plan, schedule, and publish across TikTok, Instagram, YouTube, and Facebook. Automate audience conversations, qualify leads, and use performance insights to decide what to do next.</p>
          <div className="actions">
            <a className="button primary" href={links.register}>Start your 5-day free trial&nbsp; →</a>
            <a className="button secondary" href="#workflow">See how it works</a>
          </div>
          <div className="platform-pills">
            <span>TikTok</span>
            <span>Instagram</span>
            <span>YouTube</span>
            <span>Facebook</span>
          </div>
        </div>
      </div>
      <button className="hero-video-play" type="button" data-video-open="" aria-label="Play the full Profaily product walkthrough" aria-haspopup="dialog" aria-controls="walkthrough-modal">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.8c0-.78.85-1.26 1.52-.86l10.04 6.04a1.19 1.19 0 0 1 0 2.04L9.52 19.06A1 1 0 0 1 8 18.2V5.8Z" /></svg>
      </button>
    </section>
  );
}
