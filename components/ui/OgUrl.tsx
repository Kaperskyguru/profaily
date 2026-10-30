import { ORIGIN } from "@/lib/metadata";

const DEFAULT_IMAGE = `${ORIGIN}/assets/og-default.jpg`;

/** Open Graph + Twitter card tags. Every page shares the default 1200×630 image unless it passes its own. */
export function OgUrl({
  path,
  title,
  description,
  type = "website",
  image = DEFAULT_IMAGE,
}: {
  path: string;
  title?: string;
  description?: string;
  type?: string;
  image?: string;
}) {
  return (
    <>
      <meta property="og:site_name" content="Profaily" />
      <meta property="og:type" content={type} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={ORIGIN + path} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
    </>
  );
}
