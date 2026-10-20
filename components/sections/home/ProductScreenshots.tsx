export function ProductScreenshots() {
  return (
    <section className="section light home-product-screenshots" aria-labelledby="product-screenshots-title">
      <div className="wrap">
        <div className="section-head center">
          <div className="eyebrow">Inside Profaily</div>
          <h2 id="product-screenshots-title">Take a look at what your team sees.</h2>
          <p>See the videos you’re working on, the details each post needs, and what’s coming up on the calendar.</p>
        </div>
        <div className="product-screenshots-grid">
          <figure className="product-screenshot-card">
            <div className="product-screenshot-visual">
              <img
                src="/assets/profaily-product-composer.png"
                alt="Profaily's video drafts beside the post composer, with destination controls across the top."
                width="2560"
                height="1600"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption>
              <strong>Your drafts and post details together</strong>
              <span>Keep track of the videos you’re preparing and what each post needs.</span>
            </figcaption>
          </figure>
          <figure className="product-screenshot-card">
            <div className="product-screenshot-visual">
              <img
                src="/assets/profaily-publish-flow.gif"
                alt="A Profaily draft moving through upload and publishing steps across connected channels."
                width="840"
                height="475"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption>
              <strong>From upload to ready to publish</strong>
              <span>Get the video and its posting details ready in one place.</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
