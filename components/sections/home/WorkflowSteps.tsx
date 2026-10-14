import { workflowCards } from "@/content/home";

export function WorkflowSteps() {
  return (
    <section className="section dark-alt" id="workflow">
      <div className="wrap">
        <div className="section-head center">
          <div className="eyebrow">From video to outcome</div>
          <h2>Five steps from first upload to business outcome.</h2>
          <p>Move each video through planning, publishing, audience conversations, lead follow-up, and learning.</p>
        </div>
        <div className="workflow-grid">
          {workflowCards.map((c) => (
            <article className="workflow-card" key={c.step}>
              <span className="step-number">{c.step}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <a className="feature-link" href={c.href}>{`${c.link}\u00a0 →`}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
