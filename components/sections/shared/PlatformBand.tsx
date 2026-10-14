const platforms = ["TikTok", "Instagram", "YouTube", "Facebook"];

/** Thin platform strip shared by the compare and pricing pages. */
export function PlatformBand({
  ariaLabel = "Profaily supported video platforms",
  lead = "Profaily supports",
  spaced,
}: {
  ariaLabel?: string;
  lead?: string;
  /** Source has newline text nodes around the wrapper (pricing). */
  spaced?: boolean;
}) {
  return (
    <section className="platform-band" aria-label={ariaLabel}>
      {spaced && " "}
      <div className="wrap platform-band-inner">
        <span>{lead}</span>
        {platforms.map((p) => (
          <b key={p}>{p}</b>
        ))}
      </div>
      {spaced && " "}
    </section>
  );
}
