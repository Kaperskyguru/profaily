import { OAuthButtons } from "@/components/sections/shared/OAuthButtons";
import { HeroVideo } from "@/components/sections/home/HeroVideo";

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
            <HeroVideo />
          </div>
        </div>
      </div>
    </header>
  );
}
