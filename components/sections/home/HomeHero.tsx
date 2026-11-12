import { OAuthButtons } from "@/components/sections/shared/OAuthButtons";
import { HeroVideo } from "@/components/sections/home/HeroVideo";
import { META_LIVE } from "@/content/channels";

export function HomeHero() {
  return (
    <header className="hero has-grid" data-hero>
      <div className="wrap">
        <span className="pill">Works with ChatGPT and Claude</span>
        <h1>Turn short‑form video into a <span className="hl">growth engine</span> for your business</h1>
        <p className="sub">
          {META_LIVE
            ? "The AI-powered, collaborative short-form video scheduling platform for Instagram Reels, TikTok, YouTube Shorts, and Facebook Reels."
            : "The AI-powered, collaborative short-form video scheduling platform for TikTok and YouTube Shorts."}
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
