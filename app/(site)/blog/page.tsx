import "@/app/styles/blog.css";
import { BlogFilterBehavior } from "@/components/behavior/BlogFilterBehavior";
import { PageShell } from "@/components/layout/PageShell";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { PageHero } from "@/components/sections/shared/PageHero";
import { PostCard, PostMeta, postCover } from "@/components/templates/ArticlePage";
import { Arrow } from "@/components/ui/Glyph";
import { OgUrl } from "@/components/ui/OgUrl";
import { postList } from "@/content/posts";
import { ORIGIN, pageMetadata } from "@/lib/metadata";

const meta = {
  title: "Short-form video marketing guides | Profaily",
  description: "Practical short-form video marketing guides on cross-platform publishing, video operations, audience conversations, analytics, and team workflows.",
  ogDescription: "Field guides for publishing across channels, following audience intent, and building a repeatable video operation.",
  path: "/blog",
};

export const metadata = pageMetadata(meta);

const ALL = "All guides";
const filters = [ALL, ...Array.from(new Set(postList.map((p) => p.category)))];
const [featured] = postList;
const empty = postList.length === 0;

export default function Page() {
  return (
    <PageShell>
      <OgUrl
        path={meta.path}
        type="website"
        title={meta.title}
        description={meta.ogDescription}
        image={empty ? undefined : `${ORIGIN}${postCover(featured.slug)}`}
      />
      <main className="pg-blog">
        <PageHero
          solo
          crumbs={[{ label: "Blog" }]}
          pill={empty ? undefined : "Field guides"}
          title="Short-form video guides for business"
          lede={empty ? "New guides are on the way. Until then, see how Profaily works." : "Practical guidance for planning short-form video, publishing across channels, handling audience interest, and learning what to make next."}
          primary={null}
          secondary={empty ? { href: "/features", label: "Explore features" } : { href: "#articles", label: "Browse the guides" }}
        />

        {!empty && (<>
        <section className="section tight bl-featured" aria-label="Featured guide">
          <div className="wrap">
            <a className="bl-feat" href={`/blog/${featured.slug}`}>
              <img src={postCover(featured.slug)} alt="" width={1200} height={630} loading="eager" />
              <div className="bl-feat-copy">
                <h2>{featured.title}</h2>
                <p className="lead">{featured.description}</p>
                <PostMeta post={featured} />
                <span className="more-link">Read the guide <Arrow /></span>
              </div>
            </a>
          </div>
        </section>

        <section className="section tight bl-index" id="articles" aria-labelledby="bl-index-title">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="bl-index-title">Every guide</h2>
              <p className="lead">Each article starts with a real publishing or operating decision, then gives you a process you can apply with your own team.</p>
            </div>
            <div className="tabs bl-filters" role="group" aria-label="Filter guides by topic">
              {filters.map((label, i) => (
                <button type="button" data-blog-filter={label === ALL ? "all" : label.toLowerCase()} aria-pressed={i === 0} key={label}>{label}</button>
              ))}
            </div>
            <div className="grid-3 bl-grid">
              {postList.map((post) => <PostCard post={post} key={post.slug} />)}
            </div>
            <p className="bl-empty" id="blog-empty" hidden>No guides in this topic yet.</p>
          </div>
        </section>
        </>)}

        <CtaBand
          heading="Put your video marketing workflow in one place"
          lede="Prepare one finished video, manage destination details, follow publishing status, and connect eligible conversations to next steps."
          secondary={{ href: "/features", label: "Explore all features" }}
        />
      </main>
      <BlogFilterBehavior />
    </PageShell>
  );
}
