import { OAuthButtons } from "@/components/sections/shared/OAuthButtons";

export function Closing() {
  return (
    <div className="wrap">
      <section className="close has-grid" aria-labelledby="close-h">
        <h2 id="close-h">Ready to turn short‑form video into a growth engine for your business?</h2>
        <p className="lead">Get started with our generous 14-day free trial.</p>
        <OAuthButtons />
      </section>
    </div>
  );
}
