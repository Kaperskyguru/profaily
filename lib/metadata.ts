import type { Metadata } from "next";

export const ORIGIN = "https://useprofaily.com";

/**
 * Title/description/canonical only. Open Graph tags are NOT set here: Next copies `openGraph` into
 * `twitter:*` tags (card/title/description) and ignores `twitter: null` / `twitter: {}`, but the source
 * pages have no twitter tags. Pages render og:* themselves with <OgUrl> (components/ui/OgUrl.tsx).
 */
export function pageMetadata(o: {
  title: string;
  description: string;
  path: string; // "/" or "/tiktok"
}): Metadata {
  return {
    metadataBase: new URL(ORIGIN),
    title: { absolute: o.title },
    description: o.description,
    alternates: { canonical: ORIGIN + o.path },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.svg", type: "image/svg+xml" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    },
    manifest: "/site.webmanifest",
  };
}
