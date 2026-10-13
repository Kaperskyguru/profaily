import type { Metadata } from "next";

const ORIGIN = "https://useprofaily.com";

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
  return {
    metadataBase: new URL(ORIGIN),
    title: { absolute: o.title },
    description: o.description,
    alternates: { canonical: url },
    openGraph: {
      title: o.ogTitle ?? o.title,
      description: o.ogDescription ?? o.description,
      url,
      type: o.ogType ?? "website",
      ...(o.ogImage ? { images: [o.ogImage] } : {}),
    },
  };
}
