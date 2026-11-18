import type { MetadataRoute } from "next";
import { helpList } from "@/content/help";
import { postList } from "@/content/posts";
import { routes } from "@/content/routes";

/**
 * Every page in content/routes, plus every live post in posts/ and help page in help/ (a new post is in the sitemap without being
 * registered anywhere). /blog's lastModified moves to the newest post's date.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const newest = postList.reduce((d, p) => (p.datePublished > d ? p.datePublished : d), "");
  const listed = new Set(routes.map((r) => r.path));
  const pages = routes.map((r) => ({
    url: `https://useprofaily.com${r.path}`,
    lastModified: r.path === "/blog" && newest > r.lastModified ? newest : r.lastModified,
  }));
  const posts = postList
    .filter((p) => !listed.has(`/blog/${p.slug}`))
    .map((p) => ({ url: `https://useprofaily.com/blog/${p.slug}`, lastModified: p.datePublished }));
  const help = [
    ...(listed.has("/help") ? [] : [{ url: "https://useprofaily.com/help", lastModified: helpList.reduce((d, p) => (p.updated > d ? p.updated : d), "") }]),
    ...helpList
      .filter((p) => !listed.has(`/help/${p.slug}`))
      .map((p) => ({ url: `https://useprofaily.com/help/${p.slug}`, lastModified: p.updated })),
  ].filter((h) => h.lastModified);
  return [...pages, ...posts, ...help];
}
