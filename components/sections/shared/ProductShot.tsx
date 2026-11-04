/** The real composer capture (account "Welcome to Profaily"), retina-ready. */
export function ProductShot({ alt, eager }: { alt: string; eager?: boolean }) {
  return (
    <img
      src="/assets/app/composer-welcome-1600.webp"
      srcSet="/assets/app/composer-welcome-1600.webp 1600w, /assets/app/composer-welcome-3200.webp 2400w"
      sizes="(min-width: 1320px) 1264px, 94vw"
      alt={alt}
      width="1600"
      height="1000"
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
    />
  );
}
