import { Fragment } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { JsonLd } from "@/components/ui/JsonLd";
import { OgUrl } from "@/components/ui/OgUrl";
import { posts, type PostContent } from "@/content/posts";
import { ORIGIN } from "@/lib/metadata";
import { links } from "@/lib/links";

export const articleTitle = (post: PostContent) => `${post.title} | Profaily Blog`;

export function ArticlePage({ post }: { post: PostContent }) {
  const cover = `/assets/blog-featured-${post.slug}.svg`;
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
          image: [`../..${cover}`],
          datePublished: post.datePublished,
          dateModified: post.datePublished,
          author: { "@type": "Organization", name: "Profaily Editorial" },
          publisher: { "@type": "Organization", name: "Profaily" },
        }}
      />
      <main>
        <header className="article-hero">
          <div className="wrap">
            <div className="breadcrumb">
              <a href="/blog">Blog</a>
              <span>›</span>
              <span>{post.category}</span>
            </div>
            <div className="article-intro">
              <div className="blog-meta">
                <span className="blog-category">{post.category}</span>
                <span>Profaily Editorial</span>
                <span>{post.readTime}</span>
                <time dateTime={post.datePublished}>{post.dateLabel}</time>
              </div>
              <h1>{post.title}</h1>
              <p className="lede">{post.description}</p>
            </div>
            <img className="article-hero-image" src={cover} alt={`Featured article cover: ${post.title}`} loading="eager" />
          </div>
        </header>
        <section className="article-main">
          <div className="wrap article-layout">
            <article className="article-content">
              {post.blocks.map((block, i) => (
                <Fragment key={i}>
                  {i > 0 && " "}
                  {block}
                </Fragment>
              ))}
              <section className="article-sources" aria-labelledby="article-sources-title">
                <h2 id="article-sources-title">Sources and further reading</h2>
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
            <aside className="article-aside" aria-label="Article guide">
              <section className="article-aside-card">
                <h2>In this guide</h2>
                {post.toc.map((t) => (
                  <a href={`#${t.id}`} key={t.id}>{t.label}</a>
                ))}
              </section>
              <section className="article-aside-card">
                <h2>Put the workflow to work</h2>
                <p>Connect video planning, publishing, audience response, and follow-up in one short-form video operation.</p>
                <a className="feature-link" href={post.cta.href}>{`${post.cta.label}\u00a0 →`}</a>
                <a className="button primary" href={links.register}>Start your 5-day free trial&nbsp; →</a>
              </section>
            </aside>
          </div>
        </section>
        <section className="article-promo" data-article-promo="">
          <div className="wrap">
            <div className="article-promo-shell">
              <div className="article-promo-copy">
                <div className="eyebrow article-promo-eyebrow">DISCOVER <img className="article-promo-mark" src="/assets/profaily-mark-white.svg" alt="" /> PROFAILY</div>
                <h2>Put your video marketing workflow in one place.</h2>
                <p>Plan and publish across TikTok, Instagram, YouTube, and Facebook. Keep each platform’s details in view, then follow publishing and audience conversations from one workspace.</p>
                <div className="actions article-promo-actions">
                  <a className="button primary" href={links.register}>Start your 5-day free trial&nbsp; →</a>
                  <a className="button secondary" href="/features">Explore Profaily features</a>
                </div>
              </div>
              <div className="article-promo-visual">
                <video
                  className="article-promo-video"
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/assets/profaily-publish-flow-poster.png"
                  aria-label="Animated Profaily walkthrough: upload a video, publish it across connected platforms, and see it live"
                  data-lazy-video=""
                >
                  <source data-src="/assets/profaily-publish-flow.mp4" type="video/mp4" />
                  <img src="/assets/profaily-publish-flow-poster.png" alt="Profaily walkthrough showing a video published and confirmed live" loading="lazy" decoding="async" />
                </video>
              </div>
            </div>
          </div>
        </section>
        <section className="article-related">
          <div className="wrap">
            <div className="blog-section-head">
              <div>
                <div className="eyebrow">Keep reading</div>
                <h2>More from Profaily</h2>
              </div>
              <a className="feature-link" href="/blog">All articles&nbsp; →</a>
            </div>
            <div className="article-related-grid">
              {post.related.map((slug) => (
                <a className="article-related-card" href={`/blog/${slug}`} key={slug}>
                  <img className="article-related-image" src={`/assets/blog-featured-${slug}.svg`} alt="" loading="lazy" decoding="async" />
                  <div className="article-related-copy">
                    <span className="blog-category">{posts[slug].category}</span>
                    <strong>{posts[slug].title}</strong>
                    <span className="article-related-meta">{posts[slug].readTime}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
