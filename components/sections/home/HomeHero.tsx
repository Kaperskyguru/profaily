import { OAuthButtons } from "@/components/sections/shared/OAuthButtons";
import { HeroVideo } from "@/components/sections/home/HeroVideo";
import { liveCopy } from "@/content/channels";

export function HomeHero() {
  return (
    <header className="hero has-grid" data-hero>
      <div className="wrap">
        <span className="pill">Works with ChatGPT and Claude</span>
        <h1>The <span className="hl">agentic</span> social media scheduler for short‑form video</h1>
        <p className="sub">
          {liveCopy({
            both: "The AI-powered, collaborative short-form video scheduling platform for Instagram, TikTok, YouTube, and Facebook.",
            instagram: "The AI-powered, collaborative short-form video scheduling platform for Instagram, TikTok, and YouTube.",
            none: "The AI-powered, collaborative short-form video scheduling platform for TikTok and YouTube.",
          })}
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
