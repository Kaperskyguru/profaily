import { OAuthButtons } from "@/components/sections/shared/OAuthButtons";

export function HomeHero() {
  return (
    <header className="hero has-grid" data-hero>
      <div className="wrap">
        <span className="pill">Works with ChatGPT and Claude</span>
        <h1>Turn short‑form video into a <span className="hl">growth engine</span> for your business</h1>
        <p className="sub">
          The AI-powered, collaborative short-form video scheduling platform for Instagram Reels, TikTok, YouTube Shorts, and Facebook Reels.
        </p>
        <OAuthButtons />
      </div>

      <div className="wrap">
        <div className="frame">
          <div className="scr">
            <video
              data-hero-video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/assets/app/hero-publish-poster.jpg"
              aria-label="Profaily composer: the Welcome to Profaily video previewed on YouTube Shorts, TikTok, Instagram Reels and Facebook, then published to all channels"
            >
              <source src="/assets/app/hero-publish.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </header>
  );
}
