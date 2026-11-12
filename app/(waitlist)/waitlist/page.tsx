import { WaitlistForm } from "@/components/waitlist/WaitlistForm";
import { links } from "@/lib/links";
import { pageMetadata } from "@/lib/metadata";

/** Served at "/" until launch (middleware.ts). */
export const metadata = pageMetadata({
  title: "Profaily | Join the waitlist",
  description: "Turn short-form video into a growth engine for your business. Join the Profaily waitlist for early access.",
  path: "/",
});

export default function Page() {
  return (
    <main className="wlp has-grid">
      <span className="wlp-logo">
        <img src="/assets/profaily-lockup-trim.svg" alt="Profaily" width="110" height="24" />
      </span>
      <div className="wlp-in">
        <span className="pill">Early access</span>
        <h1>Turn short&#8209;form video into a <span className="hl">growth engine</span> for your business</h1>
        <p className="sub">The AI-powered, collaborative short-form video scheduling platform for TikTok and YouTube Shorts.</p>
        <WaitlistForm />
      </div>
      <footer className="wlp-foot">
        © {new Date().getFullYear()} Profaily · <a href={links.privacy}>Privacy</a> · <a href={links.terms}>Terms</a>
      </footer>
    </main>
  );
}
