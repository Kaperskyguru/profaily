export function AIWorkflow() {
  return (
    <section className="section ai-workflow-section" id="ai-workflow">
      <div className="wrap ai-workflow-grid">
        <div className="ai-workflow-copy">
          <div className="eyebrow">ChatGPT &amp; Claude through MCP</div>
          <h2>Tell ChatGPT or Claude what you want to post. <span>Profaily puts the plan together.</span></h2>
          <p>Name the videos, channels, and dates. ChatGPT or Claude sends your request to Profaily, where you can review and adjust the schedule before publishing.</p>
        </div>
        <figure className="ai-example">
          <figcaption>Example prompt <span>Plan it in plain language</span></figcaption>
          <blockquote>“Schedule these 20 videos across TikTok, Instagram, YouTube, and Facebook over the next two weeks.”</blockquote>
          <div className="ai-example-result">
            <strong>Your plan in Profaily</strong>
            <ol>
              <li>Sort videos by destination</li>
              <li>Place posts on the calendar</li>
              <li>Review the dates before publishing</li>
            </ol>
          </div>
        </figure>
      </div>
    </section>
  );
}
