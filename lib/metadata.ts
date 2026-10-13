import type { Metadata } from "next";

export const ORIGIN = "https://useprofaily.com";

export function pageMetadata(o: {
  title: string;
  description: string;
  path: string; // "/" or "/tiktok"
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string; // absolute URL
  ogType?: "website" | "article";
}): Metadata {
  const url = ORIGIN + (o.path === "/" ? "/" : o.path);
  // Next auto-fills og:title/og:description from the page title/description whenever `openGraph`
  // is set, so a page with only og:url must not set it: render <OgUrl path> instead.
  const hasOg = !!(o.ogTitle || o.ogDescription || o.ogType || o.ogImage);
  return {
    metadataBase: new URL(ORIGIN),
    title: { absolute: o.title },
    description: o.description,
    alternates: { canonical: url },
    ...(hasOg ? { openGraph: {
      ...(o.ogTitle ? { title: o.ogTitle } : {}),
      ...(o.ogDescription ? { description: o.ogDescription } : {}),
      url,
      ...(o.ogType ? { type: o.ogType } : {}),
      ...(o.ogImage ? { images: [o.ogImage] } : {}),
    } } : {}),
  };
}
