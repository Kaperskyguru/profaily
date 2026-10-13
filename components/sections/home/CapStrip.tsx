import { capItems } from "@/content/home";

export function CapStrip() {
  return (
    <section className="cap-strip">
      <div className="wrap cap-strip-row">
        <span className="cap-label">The five-step workflow</span>
        {capItems.map(([n, label]) => (
          <span className="cap-item" key={n}><b>{n}</b>{` ${label}`}</span>
        ))}
      </div>
    </section>
  );
}
