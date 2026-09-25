import { Logo } from "@/components/logo";
import { LiveStatus } from "@/components/live-status";
import { links } from "@/lib/links";

type Platform = "tiktok" | "ig" | "yt" | "fb";

const Dot = ({ platform }: { platform: Platform }) => (
  <span className="dot" style={{ background: `var(--${platform})` }} />
);

/** Hero demo rows. YouTube is the one that plays publishing → posted. */
const TARGETS: {
  platform: Platform;
  name: string;
  note: string;
  status: "posted" | "publishing" | "scheduled";
}[] = [
  { platform: "tiktok", name: "TikTok", note: "caption · cover at 0:03", status: "posted" },
  { platform: "ig", name: "Instagram Reels", note: "also share to feed", status: "posted" },
  { platform: "yt", name: "YouTube Shorts", note: "title: We shipped the thing", status: "publishing" },
  { platform: "fb", name: "Facebook Page", note: "Reel · tomorrow 09:00", status: "scheduled" },
];

const SPECS: { platform: Platform; name: string; asks: string; preview: string }[] = [
  {
    platform: "tiktok",
    name: "TikTok",
    asks: "Caption, cover frame, who can view, content disclosure",
    preview: "Full 9:16 player frame",
  },
  {
    platform: "ig",
    name: "Instagram",
    asks: "Caption, and whether the Reel also shows in your feed",
    preview: "Reel frame with caption overlay",
  },
  {
    platform: "yt",
    name: "YouTube",
    asks: "A title (up to 100 characters), description, made-for-kids declaration",
    preview: "Shorts or long-form. YouTube decides from the file's shape and length",
  },
  {
    platform: "fb",
    name: "Facebook",
    asks: "Which Page to post to, and the caption",
    preview: "Reel frame, since most Page video now publishes as a Reel",
  },
];

const STEPS = [
  {
    title: "Drop the video",
    body: "It uploads once and gets checked right away: length, size, aspect ratio and codec against every platform you picked. A 12-minute file aimed at TikTok gets flagged now, not at publish time.",
  },
  {
    title: "Write once, adjust per platform",
    body: "One caption for everything. Switch to a platform's tab to give YouTube its title or change the hashtags for Instagram. Drafts save as you type.",
  },
  {
    title: "Schedule or publish now",
    body: 'Type a time like "tomorrow 9am" or drop it in your next queue slot. Each platform gets its own status, so if YouTube fails, TikTok still posts and you see why.',
  },
];

const NOTS = [
  {
    title: "Not a video editor",
    body: "Bring a finished file from CapCut, Premiere or your phone. Profaily checks it and publishes it as is.",
  },
  {
    title: "Not a calendar grid",
    body: "Your queue is a list of time slots grouped by day. Drafts, Queue and Posted sit in the sidebar.",
  },
  {
    title: "Not for 50-client agencies",
    body: "It's made for one person or a small team posting 3 to 10 videos a week.",
  },
];

const LIFECYCLE = ["draft", "scheduled", "publishing", "posted"] as const;

export default function LandingPage() {
  return (
    <>
      <header className="top">
        <div className="wrap">
          <a href="/" aria-label="Profaily home">
            <Logo />
          </a>
          <nav className="links" aria-label="Account">
            <a className="btn btn-text hide-sm" href="#how">How it works</a>
            <a className="btn btn-text" href={links.login}>Sign in</a>
            <a className="btn btn-primary" href={links.register}>Get started</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap">
            <div>
              <p className="eyebrow">Composer + scheduler for vertical video</p>
              <h1>
                Upload one video. <em>Publish it four places.</em>
              </h1>
              <p className="lede">
                Profaily is where you write, preview and schedule a video for
                TikTok, Instagram Reels, YouTube and Facebook at once. Drop the
                file in, write the caption once, and adjust only what each
                platform actually needs.
              </p>
              <div className="ctas">
                <a className="btn btn-primary" href={links.register}>
                  Start with your first video
                </a>
                <a className="btn btn-ghost" href="#how">See how it works</a>
              </div>
              <p className="fine">
                Sign in with Google or email. Connect your accounts in a few clicks.
              </p>
            </div>

            <div className="demo" aria-label="Example: one video scheduled to four platforms">
              <div className="clip">
                <div className="thumb" aria-hidden="true" />
                <div className="clip-meta">
                  <p className="clip-name">launch-teaser-final.mp4</p>
                  <p className="clip-spec">1080×1920 · 9:16 · 0:42 · H.264 · 38 MB</p>
                </div>
              </div>
              <p className="caption">
                We shipped the thing. 42 seconds on why it took six months.{" "}
                <span className="tag">#buildinpublic</span>
              </p>
              <ul className="targets">
                {TARGETS.map((t) => (
                  <li className="target" key={t.platform}>
                    <Dot platform={t.platform} />
                    <span className="t-name">
                      {t.name}
                      <span className="t-note">{t.note}</span>
                    </span>
                    {t.status === "publishing" ? (
                      <LiveStatus from="publishing" to="posted" />
                    ) : (
                      <span className="pill" data-s={t.status}>{t.status}</span>
                    )}
                  </li>
                ))}
              </ul>
              <div className="demo-foot">
                <span>Social set: Mastering Backend</span>
                <span>Africa/Lagos</span>
              </div>
            </div>
          </div>
        </section>

        <section className="band" id="platforms">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Same file, four different shapes</p>
              <h2>
                Each platform asks for something different. The composer shows
                you exactly what.
              </h2>
              <p>
                Cross-posting tools that pretend every platform is the same
                produce bad posts. Profaily gives you one caption to start from
                and a field for each thing a platform needs that the others don&apos;t.
              </p>
            </div>
            <div className="specs">
              {SPECS.map((s) => (
                <article className="spec" key={s.platform}>
                  <h3>
                    <Dot platform={s.platform} />
                    {s.name}
                  </h3>
                  <dl>
                    <div>
                      <dt>Asks for</dt>
                      <dd>{s.asks}</dd>
                    </div>
                    <div>
                      <dt>Preview</dt>
                      <dd>{s.preview}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band" id="how">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">How it works</p>
              <h2>From dropped file to scheduled in under a minute.</h2>
              <p>You land in the composer. There&apos;s no dashboard to get through first.</p>
            </div>
            <ol className="steps">
              {STEPS.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
            <div className="states" aria-label="Post statuses">
              <span>Every platform, live:</span>
              {LIFECYCLE.map((s, i) => (
                <span key={s} className="states-step">
                  {i > 0 && <span aria-hidden="true">→</span>}
                  <span className="pill" data-s={s}>{s}</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="band" id="scope">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Built for creators with two or three brands</p>
              <h2>
                Switch who you&apos;re posting as, not which account you&apos;re
                logged into.
              </h2>
              <p>
                Group your channels into social sets, like &ldquo;Your
                name&rdquo; and &ldquo;Your company&rdquo;. Picking a set
                changes every default in the composer, its timezone and its queue.
              </p>
            </div>
            <div className="nots">
              {NOTS.map((n) => (
                <div key={n.title}>
                  <h3>{n.title}</h3>
                  <p>{n.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <section className="closer">
        <div className="wrap">
          <h2>
            Stop uploading the same video four times. <em>Do it once.</em>
          </h2>
          <div className="ctas">
            <a className="btn btn-primary" href={links.register}>Get started</a>
            <a className="btn btn-ghost" href={links.login}>Sign in</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} Profaily · privacy@useprofaily.com</span>
          <nav aria-label="Legal">
            <a href={links.privacy}>Privacy</a>
            <a href={links.terms}>Terms</a>
            <a href={links.deletion}>Data deletion</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
