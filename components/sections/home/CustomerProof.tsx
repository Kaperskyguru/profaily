export function CustomerProof() {
  return (
    <section className="customer-proof" aria-labelledby="customer-proof-title">
      <div className="wrap">
        <div className="customer-proof-head">
          <div className="customer-proof-copy">
            <div className="eyebrow">Businesses using Profaily</div>
            <h2 id="customer-proof-title">
              Businesses use Profaily to keep video distribution on track.
            </h2>
          </div>
          <p>
            FastApply, ApplyScout, Mastering Backend, and Droomwork use Profaily
            to plan videos and keep posts moving.
          </p>
        </div>
        <div className="customer-logos" aria-label="Businesses using Profaily">
          <a
            className="customer-logo customer-logo-fastapply"
            href="https://fastapply.co/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="FastApply website"
          >
            <img
              src="/assets/customer-logos/fastapply.png"
              alt="FastApply"
              width="190"
              height="54"
            />
          </a>
          <a
            className="customer-logo customer-logo-applyscout"
            href="https://applyscout.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ApplyScout website"
          >
            <img
              src="/assets/customer-logos/applyscout.svg"
              alt=""
              width="42"
              height="42"
            />
            <span>ApplyScout</span>
          </a>
          <a
            className="customer-logo customer-logo-mastering"
            href="https://masteringbackend.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mastering Backend website"
          >
            <img
              src="/assets/customer-logos/mastering-backend.png"
              alt=""
              width="48"
              height="48"
            />
            <span>Mastering Backend</span>
          </a>
          <a
            className="customer-logo customer-logo-droomwork"
            href="https://droomwork.io/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Droomwork website"
          >
            <img
              src="/assets/customer-logos/droomwork.svg"
              alt="Droomwork"
              width="170"
              height="48"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
