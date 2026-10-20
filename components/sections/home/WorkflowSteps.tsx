import { workflowCards } from "@/content/home";

export function WorkflowSteps() {
  return (
    <section className="section light" id="workflow">
      <div className="wrap">
        <div className="section-head center">
          <div className="eyebrow">From upload to publish</div>
          <h2>One clear workflow for every video.</h2>
          <p>Prepare each post once, tailor the details by destination, and see what is planned across your channels.</p>
        </div>
        <div className="workflow-grid">
          {workflowCards.map((c) => (
            <article className="workflow-card" key={c.step}>
              <span className="step-number">{c.step}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
