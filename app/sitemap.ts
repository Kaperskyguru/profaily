import type { MetadataRoute } from "next";
import { routes } from "@/content/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: `https://useprofaily.com${r.path}`, lastModified: r.lastModified }));
}
