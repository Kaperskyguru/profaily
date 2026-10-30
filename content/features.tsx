/**
 * FeatureContent fields (everything else on the feature pages is shared template markup):
 *  name                      breadcrumb label (also the label in the related-features list)
 *  meta                      title, description, path (og:url only -> <OgUrl>)
 *  hero.eyebrow/title/lede   hero copy (eyebrow renders as the mint pill, sentence case)
 *  hero.microcopy            note under the hero actions
 *  visual                    hero visual, rendered inside `.green-frame`
 *  showcase                  optional second visual above the capability cards (inside `.sh`)
 *  benefits[3]               {icon, title, body}
 *  capabilities.heading      h2 of the capabilities section
 *  capabilities.lede         optional lead under that h2
 *  capabilities.items[]      {id, title, body}  (id is the anchor the hub and nav link to)
 * Related features come from `featureLinks` in content/nav.tsx (every feature except the current one).
 */
import type { ReactNode } from "react";
import { Glyph, Icon, type IconName } from "@/components/ui/Glyph";
import { ProductShot } from "@/components/sections/shared/ProductShot";

export type FeatureContent = {
  name: string;
  meta: { title: string; description: string; path: string };
  hero: { eyebrow: string; title: string; lede: string; microcopy: string };
  visual: ReactNode;
  showcase?: ReactNode;
  benefits: { icon: IconName; title: string; body: string }[];
  capabilities: {
    heading: string;
    lede?: string;
    items: { id: string; title: string; body: string }[];
  };
};

/** Small caption under a drawn (not captured) app view. */
const illustrative = <p className="fx-cap">Illustrative product view</p>;

const opsVisual = (
  <div className="fx-shot">
    <ProductShot alt="Profaily composer: one video with its caption and channel previews" eager />
  </div>
);

const opsShowcase = (
  <div className="card fx" role="img" aria-label="Video calendar for September across all connected channels, with four posts that need review" data-ui>
    <div className="fx-top">
      <div><b>Video calendar</b><small>September · All connected channels</small></div>
      <span className="fx-btn">+ Add video</span>
    </div>
    <div className="fx-tabs"><span className="on">Month</span><span>Week</span><span>Queue</span></div>
    <div className="fx-week">
      <div><span className="d">Mon</span><span className="ev"><Glyph name="tiktok" id="ops-tt" /><b>Product walkthrough</b><small>TikTok · 10:00</small></span></div>
      <div><span className="d">Tue</span><span className="ev"><Glyph name="instagram" id="ops-ig" /><b>Customer story</b><small>Instagram · 12:30</small></span></div>
      <div><span className="d">Wed</span></div>
      <div><span className="d">Thu</span><span className="ev"><Glyph name="youtube" id="ops-yt" /><b>How it works</b><small>YouTube · 15:00</small></span></div>
      <div><span className="d">Fri</span><span className="ev"><Glyph name="facebook" id="ops-fb" /><b>Behind the scenes</b><small>Facebook · 16:00</small></span></div>
    </div>
    <div className="row fx-foot">
      <span className="nm"><b>4 posts need review</b><small>Review channel details before scheduling</small></span>
      <span className="st warn">Needs review</span>
    </div>
  </div>
);

const guardianVisual = (
  <>
    <div className="card fx" role="img" aria-label="Publishing readiness for Product walkthrough: checks ready, TikTok published, Instagram scheduled, YouTube needs one audience setting" data-ui>
      <div className="fx-top">
        <div><b>Publishing readiness</b><small>Post · Product walkthrough</small></div>
        <span className="st ok">3 destinations ready</span>
      </div>
      <div className="row"><Icon name="circleCheck" className="fx-ok" /><span className="nm">Channel connection and permissions</span><span className="st ok">Ready</span></div>
      <div className="row"><Icon name="circleCheck" className="fx-ok" /><span className="nm">Media and format requirements</span><span className="st ok">Ready</span></div>
      <div className="row"><Icon name="circleCheck" className="fx-ok" /><span className="nm">Caption and required metadata</span><span className="st ok">Ready</span></div>
      <div className="row"><Glyph name="tiktok" id="gd-tt" /><span className="nm">TikTok<small>Post status</small></span><span className="st ok">Published</span></div>
      <div className="row"><Glyph name="instagram" id="gd-ig" /><span className="nm">Instagram<small>Post status</small></span><span className="st go">Scheduled</span></div>
      <div className="fx-alert"><Icon name="alert" /><span>YouTube needs one audience setting before it can be scheduled. <b>Review details</b></span></div>
    </div>
    {illustrative}
  </>
);

const guardianShowcase = (
  <div className="appimg">
    <img src="/assets/app/composer-welcome-1600.jpg" alt="Profaily composer: the Welcome to Profaily caption beside its YouTube Shorts preview" width="1600" height="1000" loading="lazy" decoding="async" />
  </div>
);

const inboxVisual = (
  <>
    <div className="card fx" role="img" aria-label="Conversations view: an Instagram message asking how to get started, a suggested response to review, and a possible lead" data-ui>
      <div className="fx-top">
        <div><b>Conversations</b><small>Connected socials · Eligible comments and supported messages</small></div>
        <span className="st ok">Automation on</span>
      </div>
      <div className="fx-chat">
        <ul className="fx-list">
          <li><Glyph name="tiktok" id="ib-tt" />TikTok · Comment</li>
          <li className="on"><Glyph name="instagram" id="ib-ig" />Instagram · Message</li>
          <li><Glyph name="facebook" id="ib-fb" />Facebook · Comment</li>
          <li><Glyph name="youtube" id="ib-yt" />YouTube · Comment</li>
        </ul>
        <div className="fx-conv">
          <small>Instagram message · Product walkthrough</small>
          <p className="fx-bubble">This is exactly what we need. How do I get started?</p>
          <div className="fx-suggest"><b>Suggested response · Review before sending</b><p>Thanks for asking! You can try the workflow with a 14-day free trial. Want the setup link?</p></div>
          <div className="fx-pair"><span className="st go">Possible lead · Maya</span><span className="fx-btn">Take over</span></div>
        </div>
      </div>
    </div>
    {illustrative}
  </>
);

const leadsVisual = (
  <>
    <div className="card fx" role="img" aria-label="Lead pipeline from social conversations this week: new, qualified and routed leads" data-ui>
      <div className="fx-top">
        <div><b>Lead pipeline</b><small>From social conversations · This week</small></div>
        <span className="fx-btn">+ Add lead</span>
      </div>
      <div className="fx-tabs"><span className="on">All leads</span><span>Needs qualification</span><span>Assigned to me</span></div>
      <div className="fx-board">
        <div><b>New</b><span className="fx-lead">Video workflow inquiry<small>Instagram · Reel comment</small></span><span className="fx-lead">Agency package question<small>TikTok · Message</small></span></div>
        <div><b>Qualified</b><span className="fx-lead">Multi-channel team<small>Matched to business needs</small></span></div>
        <div><b>Routed</b><span className="fx-lead">Follow-up requested<small>Owner assigned</small></span></div>
      </div>
    </div>
    {illustrative}
  </>
);

const insightsVisual = (
  <>
    <div className="card fx" role="img" aria-label="Video performance signals for the last 30 days: a top signal, sample context, a next experiment and an illustrative trend" data-ui>
      <div className="fx-top">
        <div><b>Video performance signals</b><small>Videos · Audience response · Channel</small></div>
        <span className="fx-btn">Last 30 days</span>
      </div>
      <div className="fx-minis">
        <div><b>Top signal</b><small>Completion by opening style</small></div>
        <div><b>Sample context</b><small>Low-volume results flagged</small></div>
        <div><b>Next experiment</b><small>Test a shorter opening</small></div>
      </div>
      <div className="fx-bars" aria-hidden="true">
        {[37, 55, 49, 72, 64, 84, 69, 92].map((h) => <i style={{ height: `${h}%` }} key={h} />)}
      </div>
      <div className="fx-labels"><span>Early sample</span><span>Illustrative trend · not a performance promise</span></div>
    </div>
    {illustrative}
  </>
);

export const features = {
  contentOperations: {
    name: "Video planning & publishing",
    meta: { title: "Video planning & publishing | Profaily", description: "Bring videos in, verify each channel’s details, coordinate schedules, and track every destination post. One video-first workspace keeps the publishing operation in view.", path: "/feature-content-operations" },
    hero: {
      eyebrow: "Plan & publish",
      title: "Plan and publish your short-form videos from one calendar.",
      lede: "Bring videos in, verify each channel’s details, coordinate schedules, and track every destination post. One video-first workspace keeps the publishing operation in view.",
      microcopy: "Part of Profaily’s connected short-form video marketing workflow.",
    },
    visual: opsVisual,
    showcase: opsShowcase,
    benefits: [
      { icon: "upload", title: "Bring volume under control", body: "Bulk media intake, optional CSV support, and review queues reduce the repetitive work around large publishing schedules." },
      { icon: "calendar", title: "Coordinate every channel", body: "Use a shared calendar and queue to see what is planned, ready, scheduled, or needs attention." },
      { icon: "lines", title: "Keep the full record", body: "Video details, publishing status, and destination-post history stay attached to the source video." },
    ],
    capabilities: {
      heading: "Built for every video publishing workflow.",
      items: [
        { id: "bulk-upload", title: "Bulk video upload", body: "Add a batch of ready-to-publish videos without restarting the workflow for every file." },
        { id: "csv-import", title: "Structured CSV intake", body: "Bring in post metadata and scheduling details from a spreadsheet, then review validation results before publishing." },
        { id: "validation-review", title: "Validation and review", body: "See missing details and channel-specific blockers before a post reaches its scheduled time." },
        { id: "calendar-queue", title: "Calendar and queue", body: "Plan by day, week, or month; use queue slots to keep a dependable cadence across channels." },
        { id: "bulk-actions", title: "Post editing and bulk actions", body: "Edit one post or apply safe, deterministic changes to a selected group of posts." },
        { id: "publishing-history", title: "Publishing lifecycle and history", body: "Follow each post from draft to scheduled, attempted, published, or needs attention, with an auditable record." },
      ],
    },
  },
  publishingGuardian: {
    name: "Publishing Guardian",
    meta: { title: "Publishing Guardian | Profaily", description: "Check the account, media, metadata, schedule, and platform requirements before publishing. Track each destination separately, then recover with a clear record of what happened.", path: "/feature-publishing-guardian" },
    hero: {
      eyebrow: "Publish with confidence",
      title: "Catch publishing issues before they become missed posts.",
      lede: "Check the account, media, metadata, schedule, and platform requirements before publishing. Track each destination separately, then recover with a clear record of what happened.",
      microcopy: "Part of Profaily’s connected short-form video marketing workflow.",
    },
    visual: guardianVisual,
    showcase: guardianShowcase,
    benefits: [
      { icon: "alert", title: "Find blockers early", body: "Preflight checks surface missing permissions, expired connections, unsupported media, or incomplete post details." },
      { icon: "circleCheck", title: "Track each destination", body: "A cross-platform post can succeed on one network and need attention on another. Profaily shows each outcome separately." },
      { icon: "retry", title: "Recover without guesswork", body: "Use bounded retries, reconnection prompts, and reconciliation paths that help prevent duplicate or uncertain publishing." },
    ],
    capabilities: {
      heading: "Built for dependable video publishing.",
      items: [
        { id: "preflight", title: "Preflight checks", body: "Validate channel access, account permissions, tokens, media, metadata, timing, and available platform capabilities." },
        { id: "account-health", title: "Account health", body: "See which channels are ready, disconnected, restricted, or need a permissions refresh." },
        { id: "publishing-lifecycle", title: "Publishing lifecycle", body: "Distinguish a queued post, an attempted publish, a confirmed result, and a verified public result when the API provides verification." },
        { id: "safe-retries", title: "Safe retries", body: "Retry eligible transient failures with bounded rules while avoiding a duplicate post when the result is ambiguous." },
        { id: "reconciliation", title: "Outcome reconciliation", body: "Check status again after uncertain responses so users can tell whether the platform accepted or completed the post." },
        { id: "action-queue", title: "Action-required queue", body: "Bring failed, blocked, or reconnect-needed posts into a focused list with the next action made clear." },
      ],
    },
  },
  conversationAutomation: {
    name: "Unified inbox",
    meta: { title: "Unified inbox & conversation automation | Profaily", description: "Bring eligible comments and supported messages from connected social accounts into one unified inbox. Track intent and automation, assign an owner, and hand conversations to a person.", path: "/feature-conversation-automation" },
    hero: {
      eyebrow: "Engage & grow",
      title: "One inbox for conversations across your connected socials.",
      lede: "Bring eligible comments and supported messages from connected social accounts into one conversation view. Track intent and automation status, assign an owner, and hand off to a person with context.",
      microcopy: "Available conversations and actions depend on each connected account and platform support.",
    },
    visual: inboxVisual,
    benefits: [
      { icon: "chat", title: "Keep important replies visible", body: "A shared inbox brings eligible comments and supported messages from connected social accounts together, so teams can respond without jumping between channels." },
      { icon: "spark", title: "Automate the repeatable parts", body: "Rules and AI-suggested replies handle routine questions while preserving an option for review and handoff." },
      { icon: "users", title: "Move from response to intent", body: "Identify questions, product interest, and lead signals; pause automation or bring in a person when context matters." },
    ],
    capabilities: {
      heading: "Built for conversations across connected socials.",
      items: [
        { id: "unified-inbox", title: "Unified social inbox", body: "Bring eligible comments and supported messages from connected social accounts into one view for automated and human conversations. Track automation status, owner, intent, and conversation history." },
        { id: "response-rules", title: "Response rules", body: "Create conditions for approved public replies or message responses based on content, intent, and business context." },
        { id: "ai-suggestions", title: "AI-suggested answers", body: "Draft answers using approved FAQs and business information, with review controls suited to the workflow." },
        { id: "faq-automation", title: "FAQ automation", body: "Answer repeat questions consistently and route uncertain or sensitive requests for human attention." },
        { id: "comment-to-dm", title: "Comment-to-DM handoff", body: "Move a conversation into a private message only where the platform and account permissions support that action." },
        { id: "lead-qualification", title: "Conversation qualification", body: "Detect and capture relevant intent so interested people can move into a lead workflow." },
        { id: "human-handoff", title: "Human inbox and takeover", body: "Assign or take over an eligible conversation, pause automation, and keep the person in control of the response with its history in view." },
        { id: "audit-safety", title: "Controls and audit trail", body: "Review what a rule or assistant did, set limits, and pause automation when a response needs attention." },
      ],
    },
  },
  revenueWorkflows: {
    name: "Revenue workflows",
    meta: { title: "Revenue workflows | Profaily", description: "Capture structured interest from comments and messages, qualify it, route it to the right owner, and connect the outcome back to the video that started the conversation.", path: "/feature-revenue-workflows" },
    hero: {
      eyebrow: "Engage & grow",
      title: "Turn every promising social conversation into a lead.",
      lede: "Capture structured interest from comments and messages, qualify it, route it to the right owner, and connect the outcome back to the video that started the conversation.",
      microcopy: "Part of Profaily’s connected short-form video marketing workflow.",
    },
    visual: leadsVisual,
    benefits: [
      { icon: "bell", title: "Capture interest while it is warm", body: "Turn a relevant conversation into a structured lead instead of leaving follow-up in a social inbox." },
      { icon: "users", title: "Route to the right person", body: "Use qualification and ownership rules to make the next action clear across a team." },
      { icon: "link", title: "Connect activity to outcomes", body: "Attribute leads, bookings, and sales to the source video and campaign context." },
    ],
    capabilities: {
      heading: "Built to connect video activity to outcomes.",
      items: [
        { id: "lead-capture", title: "Structured lead capture", body: "Collect the fields needed to understand and follow up on a prospect." },
        { id: "lead-scoring", title: "Lead qualification and scoring", body: "Apply transparent qualification questions and scoring so teams can prioritize the next conversation." },
        { id: "lead-routing", title: "Ownership and routing", body: "Assign a lead to a person or workflow using its source, qualification, and business rules." },
        { id: "booking-sale", title: "Booking and sale handoff", body: "Connect a qualified conversation to a booking, purchase, or the next business action." },
        { id: "crm-connection", title: "CRM connection", body: "Keep lead details and ownership connected to the systems a business uses to manage customer relationships." },
        { id: "content-attribution", title: "Video-to-outcome attribution", body: "Trace a lead or conversion to the video and conversation that initiated it, where source data is available." },
      ],
    },
  },
  contentIntelligence: {
    name: "Video performance insights",
    meta: { title: "Video performance insights | Profaily", description: "Bring performance and audience signals into the publishing workflow. Understand the evidence behind a recommendation, test a focused change, and learn without mistaking correlation for causation.", path: "/feature-content-intelligence" },
    hero: {
      eyebrow: "Measure & improve",
      title: "Know what your audience responds to—and what to try next.",
      lede: "Bring performance and audience signals into the publishing workflow. Understand the evidence behind a recommendation, test a focused change, and learn without mistaking correlation for causation.",
      microcopy: "Part of Profaily’s connected short-form video marketing workflow.",
    },
    visual: insightsVisual,
    benefits: [
      { icon: "layers", title: "See performance in context", body: "Connect each video’s performance to its channel, theme, and publishing context." },
      { icon: "lines", title: "Make recommendations explainable", body: "Understand which evidence supports a suggestion and when the sample is too small to trust." },
      { icon: "retry", title: "Turn learning into experiments", body: "Capture an idea, test a specific change, and compare results before deciding what to repeat." },
    ],
    capabilities: {
      heading: "Learn from every video.",
      items: [
        { id: "performance-analytics", title: "Performance analytics", body: "Review post and channel performance using the metrics available from each connected platform." },
        { id: "audience-signals", title: "Video and audience signals", body: "Identify themes and response patterns that help teams understand what resonates." },
        { id: "evidence-recommendations", title: "Evidence-backed recommendations", body: "See why a recommendation was made, what signals support it, and where evidence is limited." },
        { id: "sample-confidence", title: "Sample-size context", body: "Flag low-volume results so a small number of posts or interactions are not mistaken for a reliable trend." },
        { id: "content-ideas", title: "Video ideas", body: "Translate observed audience signals into specific ideas to consider for upcoming videos." },
        { id: "experiments", title: "Experiments and iteration", body: "Run deliberate video tests and use their outcomes to inform the next publishing cycle." },
      ],
    },
  },
} satisfies Record<string, FeatureContent>;
