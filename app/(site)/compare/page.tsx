import "@/app/styles/blog.css";
import { PageShell } from "@/components/layout/PageShell";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { PageHero } from "@/components/sections/shared/PageHero";
import { PostCard, postCover } from "@/components/templates/ArticlePage";
import { OgUrl } from "@/components/ui/OgUrl";
import { postList } from "@/content/posts";
import { ORIGIN, pageMetadata } from "@/lib/metadata";

const meta = {
  title: "Profaily vs other schedulers | Profaily",
  description: "Profaily compared with other social media schedulers for TikTok, Instagram Reels and YouTube Shorts, with each tool's own pages cited and dated.",
  path: "/compare",
};

export const metadata = pageMetadata(meta);

/** Every comparison page: posts whose frontmatter sets url: "/compare/<slug>". */
const comparisons = postList.filter((p) => p.href.startsWith("/compare/"));

export default function Page() {
  return (
    <PageShell>
      <OgUrl
        path={meta.path}
        type="website"
        title={meta.title}
        description={meta.description}
        image={comparisons[0] ? `${ORIGIN}${postCover(comparisons[0])}` : undefined}
      />
      <main className="pg-blog">
        <PageHero
          solo
          crumbs={[{ label: "Compare" }]}
          title="Profaily vs other schedulers"
          lede="How Profaily compares with the tools you may already use for short-form video. Every claim about another tool comes from its own pages, with the date we checked."
          secondary={{ href: "/features", label: "Explore features" }}
        />
        <section className="section tight bl-index" aria-label="Comparisons">
          <div className="wrap">
            <div className="grid-3 bl-grid">
              {comparisons.map((post) => <PostCard post={post} heading="h2" key={post.slug} />)}
            </div>
          </div>
        </section>
        <CtaBand
          heading="Try it with your own videos"
          lede="Upload one video, give each platform its own text, and see each one marked Ready before it posts."
          secondary={{ href: "/features", label: "Explore all features" }}
        />
      </main>
    </PageShell>
  );
}
