import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Serve full documents so the approved copy, styling, animations, and SEO metadata stay intact.
const PAGES: Record<string, string> = {
  "": "index.html",
  "blog": "blog/index.html",
  "blog/one-video-four-platforms": "blog/one-video-four-platforms/index.html",
  "blog/short-form-video-approval-workflow": "blog/short-form-video-approval-workflow/index.html",
  "blog/short-form-video-measurement": "blog/short-form-video-measurement/index.html",
  "blog/short-form-video-publishing-workflow": "blog/short-form-video-publishing-workflow/index.html",
  "blog/turn-video-comments-into-leads": "blog/turn-video-comments-into-leads/index.html",
  "compare": "compare/index.html",
  "compare/buffer-alternative": "compare/buffer-alternative/index.html",
  "compare/hootsuite-alternative": "compare/hootsuite-alternative/index.html",
  "compare/later-alternative": "compare/later-alternative/index.html",
  "compare/metricool-alternative": "compare/metricool-alternative/index.html",
  "contact": "contact.html",
  "facebook": "facebook.html",
  "feature-content-intelligence": "feature-content-intelligence.html",
  "feature-content-operations": "feature-content-operations.html",
  "feature-conversation-automation": "feature-conversation-automation.html",
  "feature-publishing-guardian": "feature-publishing-guardian.html",
  "feature-revenue-workflows": "feature-revenue-workflows.html",
  "features": "features.html",
  "instagram": "instagram.html",
  "pricing": "pricing.html",
  "tiktok": "tiktok.html",
  "tools": "tools/index.html",
  "tools/auto-cross-posting": "tools/auto-cross-posting.html",
  "tools/profile-manager": "tools/profile-manager.html",
  "tools/smart-repost": "tools/smart-repost.html",
  "youtube": "youtube.html",
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(PAGES).map((route) => ({
    slug: route ? route.split("/") : [],
  }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug?: string[] }> },
) {
  const { slug = [] } = await params;
  const file = PAGES[slug.join("/")];
  if (!file) {
    return new Response("Not found", {
      status: 404,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  const appUrl = (process.env.NEXT_PUBLIC_APP_URL ?? "https://app.useprofaily.com").replace(/\/$/, "");
  const sourceHtml = await readFile(join(process.cwd(), "public", file), "utf8");
  const html = sourceHtml.replaceAll("https://app.useprofaily.com", appUrl);
  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
      "x-content-type-options": "nosniff",
    },
  });
}
