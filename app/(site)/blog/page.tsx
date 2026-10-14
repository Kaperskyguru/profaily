import { BlogFilterBehavior } from "@/components/behavior/BlogFilterBehavior";
import { PageShell } from "@/components/layout/PageShell";
import { OgUrl } from "@/components/ui/OgUrl";
import { postList } from "@/content/posts";
import { links } from "@/lib/links";
import { ORIGIN, pageMetadata } from "@/lib/metadata";

const meta = {
  title: "Short-form video marketing guides | Profaily",
  description: "Practical short-form video marketing guides on cross-platform publishing, video operations, audience conversations, analytics, and team workflows.",
  ogDescription: "Field guides for publishing across channels, following audience intent, and building a repeatable video operation.",
  path: "/blog",
};

export const metadata = pageMetadata(meta);

const filters = ["All guides", "Publishing", "Publishing operations", "Audience & leads", "Analytics & decisions", "Teams & agencies"];
const [featured] = postList;

export default function Page() {
  return (
    <PageShell>
      <OgUrl
        path={meta.path}
        type="website"
        title={meta.title}
        description={meta.ogDescription}
        image={`${ORIGIN}/assets/blog-featured-${featured.slug}.svg`}
      />
      <main>
        <section className="blog-hero">
          <div className="wrap blog-hero-grid">
            <div>
              <div className="eyebrow">Profaily Blog · Field guides</div>
              <h1>Better systems for every video you publish.</h1>
              <p>Practical guidance for planning short-form video, publishing across channels, handling audience interest, and learning what to make next. Clear advice for the people responsible for the work.</p>
              <div className="actions">
                <a className="button primary" href="#articles">Browse the guides&nbsp; ↓</a>
                <a className="button secondary" href="/features">Explore Profaily</a>
              </div>
            </div>
            <div className="blog-hero-art">
              <img src="/assets/profaily-hero-poster.jpg" alt="Profaily publishing workspace with destination-specific video details" />
            </div>
          </div>
        </section>
        <section className="blog-featured">
          <div className="wrap">
            <a className="blog-featured-card" href={`/blog/${featured.slug}`}>
              <img src={`/assets/blog-featured-${featured.slug}.svg`} alt="" />
              <div className="blog-featured-copy">
                <div className="blog-meta">
                  <span className="blog-category">Featured guide</span>
                  <span>{featured.category}</span>
                  <span>{featured.readTime}</span>
                </div>
                <h2>{featured.title}</h2>
                <p>{featured.description}</p>
                <span className="feature-link">Read the guide&nbsp; →</span>
              </div>
            </a>
          </div>
        </section>
        <section className="blog-index-section" id="articles">
          <div className="wrap">
            <div className="blog-section-head">
              <div>
                <div className="eyebrow">The Profaily field guide</div>
                <h2>Useful ideas, ready for the next work session.</h2>
              </div>
              <p>Each article starts with a real publishing or operating decision, then gives you a process you can apply with your own team.</p>
            </div>
            <div className="blog-filter-row" role="group" aria-label="Filter articles by topic">
              {filters.map((label, i) => (
                <button className="blog-filter" type="button" data-blog-filter={label.toLowerCase()} aria-pressed={i === 0} key={label}>{label}</button>
              ))}
            </div>
            <div className="blog-card-grid">
              {postList.map((post) => (
                <article className="blog-card" data-category={post.category.toLowerCase()} key={post.slug}>
                  <a href={`/blog/${post.slug}`} aria-label={`Read: ${post.title}`}>
                    <img src={`/assets/blog-featured-${post.slug}.svg`} alt="" loading="lazy" />
                  </a>
                  <div className="blog-card-copy">
                    <div className="blog-meta">
                      <span className="blog-category">{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3>
                      <a href={`/blog/${post.slug}`}>{post.title}</a>
                    </h3>
                    <p>{post.description}</p>
                    <a className="feature-link" href={`/blog/${post.slug}`}>Read article&nbsp; →</a>
                  </div>
                </article>
              ))}
            </div>
            <p id="blog-empty" hidden>No guides in this topic yet.</p>
          </div>
        </section>
        <section className="blog-final-cta">
          <div className="wrap">
            <div className="eyebrow">From reading to doing</div>
            <h2>Put your video marketing workflow in one place.</h2>
            <p>Prepare one finished video, manage destination details, follow publishing status, and connect eligible conversations to next steps.</p>
            <div className="actions">
              <a className="button primary" href={links.register}>Start your 5-day free trial&nbsp; →</a>
              <a className="button secondary" href="/features">Explore all features</a>
            </div>
          </div>
        </section>
      </main>
      <BlogFilterBehavior />
    </PageShell>
  );
}
