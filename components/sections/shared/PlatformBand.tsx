const platforms = ["TikTok", "Instagram", "YouTube", "Facebook"];

/** Thin "Profaily supports ..." strip shared by the compare and pricing pages. */
export function PlatformBand({ ariaLabel = "Profaily supported video platforms" }: { ariaLabel?: string }) {
  return (
    <section className="platform-band" aria-label={ariaLabel}>
      <div className="wrap platform-band-inner">
        <span>Profaily supports</span>
        {platforms.map((p) => (
          <b key={p}>{p}</b>
        ))}
      </div>
    </section>
  );
}
