export function WalkthroughModal() {
  return (
    <dialog className="video-modal" id="walkthrough-modal" aria-labelledby="video-modal-title">
      <div className="video-modal-card">
        <header className="video-modal-header">
          <div>
            <span className="eyebrow">PRODUCT WALKTHROUGH</span>
            <h2 id="video-modal-title">From shoot to published</h2>
          </div>
          <button className="video-modal-close" type="button" data-video-close="" aria-label="Close video">×</button>
        </header>
        <video controls playsInline preload="none" poster="/assets/profaily-hero-poster.jpg">
          <source src="/assets/profaily-publish-demo.mp4" type="video/mp4" />Your browser does not support the video element.
        </video>
      </div>
    </dialog>
  );
}
