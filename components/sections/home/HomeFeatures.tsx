import type { ReactNode } from "react";
import { Arrow, Glyph, Icon, type IconName } from "@/components/ui/Glyph";
import { Fan, Phone } from "@/components/sections/shared/Phone";
import { links } from "@/lib/links";
import { AiChat } from "./AiChat";
import { LiveCaption } from "./LiveCaption";

function Row({ id, verb, title, lead, bullets, cta, more, visual, flip }: {
  id?: string; verb: string; title: string; lead: string; bullets: [IconName, string, string][];
  cta: string; more?: { href: string; label: string }; visual: ReactNode; flip?: boolean;
}) {
  return (
    <article className={`fr${flip ? " flip" : ""}`} id={id}>
      <div className="txt">
        <span className="verb">{verb}</span>
        <h3>{title}</h3>
        <p className="lead">{lead}</p>
        <ul className="bul">
          {bullets.map(([icon, b, rest]) => (
            <li key={b}><Icon name={icon} /><span><b>{b}</b> {rest}</span></li>
          ))}
        </ul>
        <div className="actions">
          <a className="btn btn-primary" href={links.register}>{cta} <Arrow /></a>
          {more && <a className="more-link" href={more.href}>{more.label} <Arrow /></a>}
        </div>
      </div>
      <div className="sh rv">{visual}</div>
    </article>
  );
}

function Group({ id, title, lede }: { id: string; title: string; lede: string }) {
  return (
    <header className="gh" id={id}>
      <h2>{title}</h2>
      <p>{lede}</p>
    </header>
  );
}

const thumb = <span className="th"><img src="/assets/app/welcome-frame.jpg" alt="" width="540" height="960" loading="lazy" /></span>;
const blank = <span className="th" />;
const dots = (n: number) => <span className="dots">{Array.from({ length: n }, (_, i) => <i key={i} />)}</span>;
function Ev({ title, n = 4, me, pending }: { title: string; n?: number; me?: boolean; pending?: boolean }) {
  return <div className={`ev${pending ? " pending" : ""}`}>{me ? thumb : blank}<span><span className="tt">{title}</span>{dots(n)}</span></div>;
}

const calendar = (
  <div className="cal" role="img" aria-label="Profaily calendar: a week of Mastering Backend videos at 10:00 and 18:00" data-ui>
    <div className="top"><b>2 – 6 November</b><div className="seg"><span>Month</span><span className="on">Week</span><span>Day</span></div></div>
    <div className="days">
      <div className="h t" /><div className="h"><b>2</b>Mon</div><div className="h"><b>3</b>Tue</div><div className="h"><b>4</b>Wed</div><div className="h x"><b>5</b>Thu</div><div className="h x"><b>6</b>Fri</div>
      <div className="t">10:00</div>
      <div><Ev title="Fix N+1 queries in 30 seconds" me /></div>
      <div><Ev title="Redis caching in one minute" /></div>
      <div><Ev title="Idempotency keys, explained" me pending /></div>
      <div className="x"><Ev title="Postgres indexes, fast" n={3} pending /></div>
      <div className="x"><Ev title="Queues vs. cron jobs" me pending /></div>
      <div className="t">18:00</div>
      <div><Ev title="REST vs. GraphQL in 45 seconds" /></div>
      <div><Ev title="What a load balancer does" me pending /></div>
      <div><Ev title="JWT mistakes I still see" n={3} pending /></div>
      <div className="x"><Ev title="Welcome to Profaily" me pending /></div>
      <div className="x" />
    </div>
  </div>
);

const review = (
  <div className="rev" data-ui>
    <div className="vid">
      <Phone label="Shorts" />
      <div>
        <span className="st warn">Changes requested</span>
        <h5>Redis caching in one minute</h5>
        <p>For YouTube Shorts, TikTok and Reels · Sent by Tunde, Producer</p>
        <div className="bar" aria-hidden="true"><span>Request changes</span><span className="pri">Approve</span></div>
      </div>
    </div>
    <div className="thread" data-ui>
      <div className="c"><span className="av b">AO</span><div><b>Amaka</b> <span>Editor · 9:12</span><p>Cut the first two seconds. The hook starts late.</p></div></div>
      <div className="ev2"><i />Solomon asked for changes</div>
      <div className="c"><span className="av c">TB</span><div><b>Tunde</b> <span>Producer · 10:40</span><p>New cut uploaded, caption now links the Redis course.</p></div></div>
      <div className="c"><span className="av">SE</span><div><b>Solomon</b> <span>Admin · 10:52</span><p>Perfect. Approving for Thursday 18:00.</p></div></div>
    </div>
  </div>
);

const importTable = (
  <div className="imp" data-ui>
    <div className="top"><b>mb-november.csv</b><span className="st ok">18 ready · 2 to fix</span></div>
    <div className="tw">
      <table>
        <thead><tr><th scope="col">Video</th><th scope="col">Caption</th><th scope="col">When</th></tr></thead>
        <tbody>
          <tr><td className="f">drive.google.com/…/n1</td><td>Fix N+1 queries in 30 seconds</td><td>Mon 10:00</td></tr>
          <tr><td className="f">drive.google.com/…/rest</td><td>REST vs. GraphQL in 45 seconds</td><td>Mon 18:00</td></tr>
          <tr className="bad"><td className="f">dropbox.com/…/rate</td><td>System design: rate limiting, the full walkthrough<span className="why">11:40 long. TikTok allows 10 minutes.</span></td><td>Tue 10:00</td></tr>
          <tr><td className="f">drive.google.com/…/redis</td><td>Redis caching in one minute</td><td>Tue 18:00</td></tr>
          <tr className="bad"><td className="f">dropbox.com/…/jwt</td><td>JWT mistakes I still see<span className="why">YouTube title is 112 characters. The limit is 100.</span></td><td>Wed 10:00</td></tr>
          <tr><td className="f">drive.google.com/…/pg</td><td>Postgres indexes, explained fast</td><td>Wed 18:00</td></tr>
        </tbody>
      </table>
    </div>
    <div className="foot"><span style={{ color: "var(--muted)" }}>Showing 6 of 20</span><span className="pri">Schedule 18 videos</span></div>
  </div>
);

const publishingCenter = (
  <div className="pc" data-ui>
    <div className="pc-top"><b>Publishing Center</b><span className="pc-tabs"><span className="on">All 2</span><span>Published 1</span><span>Failed 1</span></span></div>
    <div className="pc-item">
      <div className="pc-h"><span className="pc-th"><img src="/assets/app/welcome-frame.jpg" alt="" width="540" height="960" loading="lazy" /></span><div><b>Welcome to Profaily</b><span>Wed 28 Oct, 10:00</span></div></div>
      <div className="row"><Glyph name="tiktok" id="pc-tt" /><span className="nm">TikTok <small>tiktok.com/@profaily/…</small></span><span className="st ok">Posted</span></div>
      <div className="row"><Glyph name="instagram" id="pc-ig" /><span className="nm">Instagram <small>instagram.com/p/…</small></span><span className="st ok">Posted</span></div>
      <div className="row"><Glyph name="youtube" id="pc-yt" /><span className="nm">YouTube <small>youtube.com/shorts/…</small></span><span className="st ok">Posted</span></div>
      <div className="row"><Glyph name="facebook" id="pc-fb" /><span className="nm">Facebook</span><span className="st">Scheduled 18:00</span></div>
    </div>
    <div className="pc-item">
      <div className="pc-h"><span className="pc-th" /><div><b>Fix N+1 queries in 30 seconds</b><span>Tue 27 Oct, 18:00</span></div></div>
      <div className="row"><Glyph name="tiktok" id="pc-tt2" /><span className="nm">TikTok <em>Reconnect your TikTok account, then retry.</em></span><span className="st warn">Retry</span></div>
      <div className="row"><Glyph name="youtube" id="pc-yt2" /><span className="nm">YouTube <small>youtube.com/shorts/…</small></span><span className="st ok">Posted</span></div>
    </div>
  </div>
);

export function HomeFeatures() {
  return (
    <div className="wrap" id="features">

      <Group id="making" title="Making videos" lede="Bring the footage in, shape it for each channel, and get a yes from your team." />
      <Row id="import" verb="Import" title="Bring in a hundred videos at once"
        lead="Paste links from Google Drive, Dropbox or OneDrive, or upload a spreadsheet with captions and times. Check it, fix what’s flagged, schedule it all."
        bullets={[["link", "Paste a link:", "no downloading and re-uploading."], ["table", "Upload a spreadsheet:", "one row per video, with its caption and time."], ["alert", "Problems first:", "a video too long for TikTok is flagged before you schedule."]]}
        cta="Import my videos" more={{ href: "/feature-content-operations", label: "Learn more" }} visual={importTable} />
      <Row flip id="write" verb="Write" title="Write once. See it exactly as each channel will show it."
        lead="One caption, one upload, real player previews. Change what you need for one channel and the others stay as they are."
        bullets={[["phone", "Real player previews:", "TikTok, Reels, Shorts and Facebook, framed the way they’ll appear."], ["edit", "Change one, keep the rest:", "a shorter caption for TikTok, a title for YouTube."], ["alert", "Caught while you write:", "too long, too big, missing a title, before anything posts."]]}
        cta="Publish my first video" more={{ href: "/feature-publishing-guardian", label: "Learn more" }}
        visual={<div className="appimg zoom"><img src="/assets/app/composer-welcome-1600.jpg" alt="Profaily composer: the Welcome to Profaily caption beside its YouTube Shorts preview" width="1600" height="1000" loading="lazy" decoding="async" /></div>} />
      <LiveCaption />
      <Row id="review" verb="Review" title="Nothing goes out until the right person says yes"
        lead="Your editor sends the video for review. You comment on it, ask for changes or approve it, and it goes into the schedule."
        bullets={[["check", "Send for review:", "nothing is scheduled until it’s approved."], ["chat", "Comment on the video:", "every change and reply in one thread."], ["link", "Share a link:", "a client can read and comment without an account."]]}
        cta="Invite my team" visual={review} />

      <Group id="distributing" title="Distributing videos" lede="One upload, multiple channels, on a schedule that runs without you." />
      <Row id="publish" verb="Publish" title="Upload once. It goes out to selected channels."
        lead="Pick the channels, press Publish or Schedule, and Profaily sends the same video to each one in the format it expects."
        bullets={[["upload", "One upload:", "TikTok, Instagram Reels, YouTube and Facebook from a single file."], ["edit", "Its own words per channel:", "a caption for TikTok, a title for YouTube."], ["circleCheck", "Watch it land:", "each channel shows Publishing, then Posted, as it happens."]]}
        cta="Post my first video" visual={<div className="stage4"><Fan id="row-fan" /></div>} />
      <Row flip id="plan" verb="Plan" title="Fill a week of posting in one sitting"
        lead="Set your posting times once. Every video you add drops into the next free slot, and the calendar shows the whole month."
        bullets={[["clock", "Posting slots:", "10:00 and 18:00 on weekdays, or whatever works for your buyers."], ["lines", "Say when in plain words:", "type “next Tuesday 6pm” and it’s scheduled."], ["calendar", "The month at a glance:", "what’s posted, what’s next, what’s still a draft."]]}
        cta="Plan my week" more={{ href: "/feature-content-operations", label: "Learn more" }} visual={calendar} />
      <section className="ai rv" id="ai" aria-labelledby="ai-h">
        <div>
          <span className="verb">Works with your AI assistant</span>
          <h2 id="ai-h">Plan and post from Claude or ChatGPT</h2>
          <p className="lead">Connect Profaily to your assistant and run the whole schedule from a conversation. It reads your library, checks every video against each channel’s rules and books the slots.</p>
          <dl>
            <div><dt>Ask: </dt><dd>“What’s going out this week?”</dd></div>
            <div><dt>Plan: </dt><dd>“Spread these 20 videos over two weeks.”</dd></div>
            <div><dt>Post: </dt><dd>“Publish the Redis one now.”</dd></div>
          </dl>
          <div className="actions">
            <a className="btn btn-primary" href={links.register}>Get early access <Arrow /></a>
            <a className="btn btn-ghost" href="/pricing">See plans</a>
          </div>
        </div>
        <AiChat />
      </section>

      <Group id="tracking" title="Tracking business outcomes" lede="Know what went out, where it landed, and what needs your attention." />
      <Row flip id="track" verb="Track" title="See what happened to every video, on every channel"
        lead="The Publishing Center lists every video you’ve sent and where it stands on each channel, with a link straight to the live post."
        bullets={[["circleCheck", "Status per channel:", "scheduled, publishing, posted or failed, live as it changes."], ["link", "Links to the live post:", "open it on TikTok or Instagram in one click."], ["retry", "Retry what failed:", "the other channels keep their posts."]]}
        cta="Track my videos" visual={publishingCenter} />
      <div className="tcards" id="more">
        <div className="mc">
          <div className="art"><div className="mini notif" data-ui><span className="ic"><img src="/assets/profaily-mark-white-trim.svg" alt="" width="20" height="20" /></span><div><b style={{ display: "block" }}>Profaily</b><span style={{ color: "var(--muted)", fontSize: 13 }}>Posted to 4 channels: Welcome to Profaily</span></div></div></div>
          <h4>Alerts on your phone</h4><p>Install Profaily on your home screen and hear when a video posts or needs you.</p>
        </div>
        <div className="mc">
          <div className="art"><div className="mini" data-ui><div className="r"><b>Every brand in its own space</b></div><div className="r"><span>Mastering Backend</span><span>4 channels</span></div><div className="r"><span>FastApply</span><span>3 channels</span></div></div></div>
          <h4>Results kept per brand</h4><p>Each brand has its own channels, schedule and history, so nothing gets mixed up.</p>
        </div>
        <div className="mc">
          <div className="art"><span className="st">Coming soon</span><div className="bars" aria-hidden="true"><i style={{ height: "38%" }} /><i style={{ height: "62%" }} /><i style={{ height: "48%" }} /><i style={{ height: "80%" }} /><i style={{ height: "66%" }} /></div></div>
          <h4>Analytics</h4><p>See how each video did on every channel, in one place. We’ll tell you when it’s ready.</p>
        </div>
      </div>
    </div>
  );
}
