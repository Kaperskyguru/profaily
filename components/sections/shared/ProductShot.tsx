/** The real composer capture (account "Welcome to Profaily"), retina-ready. */
export function ProductShot({ alt, eager }: { alt: string; eager?: boolean }) {
  return (
    <img
      src="/assets/app/composer-welcome-1600.jpg"
      srcSet="/assets/app/composer-welcome-1600.jpg 1600w, /assets/app/composer-welcome-3200.jpg 3200w"
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
