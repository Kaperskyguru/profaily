import "@/app/styles/blog.css";
import { PageShell } from "@/components/layout/PageShell";
import { Crumbs } from "@/components/sections/shared/Crumbs";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { Arrow } from "@/components/ui/Glyph";
import { JsonLd } from "@/components/ui/JsonLd";
import { PostMarkdown } from "@/components/ui/PostMarkdown";
import { OgUrl } from "@/components/ui/OgUrl";
import { postList, posts, type PostContent } from "@/content/posts";
import { ORIGIN } from "@/lib/metadata";
import { links } from "@/lib/links";

export const articleTitle = (post: PostContent) => `${post.title} | Profaily Blog`;

export const postCover = (slug: string) => `/assets/blog-featured-${slug}.jpg`;

/** Category (or the byline on the article header, where the pill already names the category), date and read time. */
export function PostMeta({ post, byline, short }: { post: PostContent; byline?: boolean; short?: boolean }) {
  const date = short
    ? new Date(`${post.datePublished}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })
    : post.dateLabel;
  return (
    <p className="bl-meta">
      {byline ? <span>Profaily Editorial</span> : <span className="bl-cat">{post.category}</span>}
      <time dateTime={post.datePublished}>{date}</time>
      <span>{post.readTime}</span>
    </p>
  );
}

/** A post card for the blog index and the related-posts row. The whole card is one link. */
export function PostCard({ post, heading = "h3" }: { post: PostContent; heading?: "h2" | "h3" }) {
  const H = heading;
  return (
    <article className="blog-card" data-category={post.category.toLowerCase()}>
      <a className="bl-card" href={`/blog/${post.slug}`}>
        <img src={postCover(post.slug)} alt="" width={1200} height={630} loading="lazy" decoding="async" />
        <div className="bl-card-copy">
          <H>{post.title}</H>
          <p>{post.description}</p>
          <PostMeta post={post} short />
        </div>
      </a>
    </article>
  );
}

export function ArticlePage({ post }: { post: PostContent }) {
  const cover = postCover(post.slug);
  const related = post.related.filter((s) => posts[s]).map((s) => posts[s]);
  for (const p of postList) {
    if (related.length >= 3) break;
    if (p.slug !== post.slug && !related.includes(p)) related.push(p);
  }

  return (
    <PageShell>
      <OgUrl
        path={`/blog/${post.slug}`}
        type="article"
        title={articleTitle(post)}
        description={post.description}
        image={ORIGIN + cover}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          image: [ORIGIN + cover],
          datePublished: post.datePublished,
          dateModified: post.datePublished,
          mainEntityOfPage: `${ORIGIN}/blog/${post.slug}`,
          author: { "@type": "Organization", name: "Profaily Editorial" },
          publisher: { "@type": "Organization", name: "Profaily" },
        }}
      />
      <main className="pg-blog pg-article">
        <header className="page-hero has-grid ar-hero">
          <div className="wrap ar-head">
            <Crumbs items={[{ href: "/blog", label: "Blog" }, { label: post.category }]} />
            <p className="ar-pill"><span className="pill">{post.category}</span></p>
            <h1>{post.title}</h1>
            <p className="lead">{post.description}</p>
            <PostMeta post={post} byline />
          </div>
          <div className="wrap ar-cover">
            <img src={cover} alt={`Cover image: ${post.title}`} width={1200} height={630} loading="eager" fetchPriority="high" />
          </div>
        </header>

        <div className="wrap ar-layout">
          <aside className="ar-toc" aria-labelledby="ar-toc-title">
            <h2 id="ar-toc-title">In this guide</h2>
            <ol>
              {post.toc.map((t) => (
                <li key={t.id}><a href={`#${t.id}`}>{t.label}</a></li>
              ))}
            </ol>
          </aside>

          <article className="ar-body">
            <div className="ar-prose">
              <PostMarkdown>{post.body}</PostMarkdown>
            </div>

            <section className="ar-next" aria-labelledby="ar-next-title">
              <h2 id="ar-next-title">Put the workflow to work</h2>
              <p>Connect video planning, publishing, audience response, and follow-up in one short-form video operation.</p>
              <a className="more-link" href={post.cta.href}>{post.cta.label} <Arrow /></a>
            </section>

            <section className="ar-sources" aria-labelledby="ar-sources-title">
              <h2 id="ar-sources-title">Sources and further reading</h2>
              <p>Platform behavior and definitions can change. These primary references were checked on September 29, 2026.</p>
              <ul>
                {post.sources.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <aside className="ar-trial" aria-labelledby="ar-trial-title">
            <div className="ar-trial-card">
              <img src="/assets/profaily-mark-white.svg" alt="" width={32} height={32} className="ar-trial-mark" />
              <h2 id="ar-trial-title">Try Profaily free for 14 days</h2>
              <p>Plan and publish one video across TikTok, Instagram, YouTube, and Facebook, then follow publishing and audience conversations from one workspace.</p>
              <a className="btn btn-primary btn-block" href={links.register}>Start 14-day free trial <Arrow /></a>
              <a className="more-link" href="/features">Explore features <Arrow /></a>
            </div>
          </aside>
        </div>

        <section className="section tight" aria-labelledby="ar-related-title">
          <div className="wrap">
            <div className="bl-head">
              <h2 id="ar-related-title">Keep reading</h2>
              <a className="more-link" href="/blog">All guides <Arrow /></a>
            </div>
            <div className="grid-3 bl-grid">
              {related.slice(0, 3).map((p) => <PostCard post={p} key={p.slug} />)}
            </div>
          </div>
        </section>

        <CtaBand
          heading="Put your video marketing workflow in one place"
          lede="Plan and publish across TikTok, Instagram, YouTube, and Facebook. Keep each channel’s details in view, then follow publishing and audience conversations from one workspace."
          secondary={{ href: "/features", label: "Explore features" }}
        />
      </main>
    </PageShell>
  );
}
