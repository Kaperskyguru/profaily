/**
 * ComparisonContent fields (everything else on the four "<Competitor> alternative" pages is shared
 * template markup, see components/templates/ComparePage.tsx):
 *  name              competitor name; drives breadcrumb, eyebrow, table heading and aria-label,
 *                    "Choose <name> if", the related-card links, ...
 *  meta              title, description (og:title / og:description repeat them)
 *  model             one-line product positioning: fit-card heading, related-card and index-card blurb
 *  hero              title, lede (also the index card paragraph), panelNote (line in the quick-take panel)
 *  intro             paragraph under "At a glance" above the table
 *  rows              comparison table rows: {area, competitor, profaily}
 *  fit               paragraphs of the three fit cards: competitor (also the index "May fit best when"
 *                    cell), profaily, tradeoff
 *  flowSummary       paragraph under the flow heading, repeated verbatim in the callout
 *  faq               {q, a}[]; the FAQPage JSON-LD is derived from it (see faqJsonLd)
 *  sources           official references: {href, title, body}[]
 * Keys are the route slugs (/compare/<slug>); `comparisonOrder` is the order used on the index page and
 * in the related-comparison cards.
 */
export type ComparisonContent = {
  name: string;
  meta: { title: string; description: string };
  model: string;
  hero: { title: string; lede: string; panelNote: string };
  intro: string;
  rows: { area: string; competitor: string; profaily: string }[];
  fit: { competitor: string; profaily: string; tradeoff: string };
  flowSummary: string;
  faq: { q: string; a: string }[];
  sources: { href: string; title: string; body: string }[];
};

export const comparisonOrder = [
  "buffer-alternative",
  "later-alternative",
  "metricool-alternative",
  "hootsuite-alternative",
] as const;

export const comparisonsIndexMeta = {
  title: "Compare Short-Form Video Marketing Platforms | Profaily",
  description:
    "Compare Profaily with Buffer, Later, Metricool, and Hootsuite. Explore short-form video publishing, social inbox, team workflows, analytics, pricing models, and lead follow-through.",
  ogDescription: "Compare Profaily with Buffer, Later, Metricool, and Hootsuite for short-form video publishing and marketing workflows.",
  path: "/compare",
};

export function faqJsonLd(items: ComparisonContent["faq"]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export const comparisons = {
  "buffer-alternative": {
    name: "Buffer",
    meta: {
      title: "Buffer Alternative for Short-Form Video Marketing | Profaily",
      description: "Compare Buffer and Profaily for video planning, publishing, audience conversations, and lead follow-through. See where each platform fits before choosing.",
    },
    model: "Multi-channel publishing with channel-based pricing, a free plan, community tools, and team options.",
    hero: {
      title: "Looking for a Buffer alternative for short-form video marketing?",
      lede: "Buffer is a flexible way to plan, publish, engage, and measure across a broad set of social channels. Profaily is organized around the short-form video workflow: prepare one finished video, shape its destination details, protect publishing, and connect eligible audience interest to business follow-up.",
      panelNote: "A good fit depends on whether you need a broad channel scheduler or a focused video-to-outcome workflow.",
    },
    intro: "Pick Buffer when broad network coverage, a free plan, and channel-by-channel scaling lead your decision. Pick Profaily when your operation is centered on short-form video across its four supported platforms and you need the publishing-to-lead path connected.",
    rows: [
      {
        area: "Product focus",
        competitor: "A general social publishing and engagement workspace with ideas, queues, analytics, and community tools.",
        profaily: "A short-form video marketing workflow spanning planning, publishing, audience response, lead follow-up, and learning.",
      },
      {
        area: "Channels",
        competitor: "A broad channel list, including TikTok, YouTube Shorts, Instagram, and Facebook; per-channel capabilities vary.",
        profaily: "TikTok, Instagram, YouTube, and Facebook, with platform-specific publishing details.",
      },
      {
        area: "Planning and publishing",
        competitor: "Visual calendar, queue, scheduled publishing, drafts, and channel-specific capabilities.",
        profaily: "Bulk video intake, shared calendar and queue, one source video with independent destination details.",
      },
      {
        area: "Publishing confidence",
        competitor: "Publishing options depend on each channel and account. Review Buffer’s channel support guide for automatic versus reminder publishing.",
        profaily: "Publishing Guardian checks readiness, tracks destination state, and supports recovery and outcome verification where the platform allows.",
      },
      {
        area: "Audience conversations",
        competitor: "Buffer lists a Community inbox and comment replies; available engagement actions vary by channel.",
        profaily: "A unified inbox for eligible conversations across connected socials, linked to the video and follow-up workflow.",
      },
      {
        area: "Leads and business outcomes",
        competitor: "Buffer supports publishing, community engagement, and analytics. Review its current integrations for any specific CRM handoff you need.",
        profaily: "Capture and qualify interest, assign ownership, route leads, connect booking/CRM handoffs, and use video performance signals to guide the next experiment.",
      },
      {
        area: "Teams and pricing shape",
        competitor: "A free plan is available; paid plans are per channel. Team adds unlimited members, access levels, and approvals.",
        profaily: "No free plan; five-day trial. Pro is $9.99 and Teams is $25. Confirm current billing cadence and included limits on Profaily’s pricing page.",
      },
    ],
    fit: {
      competitor: "You want a free starting point, manage several kinds of social accounts, or prefer adding channels as your needs grow. Buffer’s pricing page currently lists a free plan for up to three channels; paid plans are priced per channel. Its Team plan lists unlimited users, access levels, and approval workflows.",
      profaily: "Your main publishing work is short-form video across TikTok, Instagram, YouTube, and Facebook—and you want the workflow to continue from the video through destination status, cross-channel conversations, lead qualification, routing, and CRM handoff.",
      tradeoff: "Buffer supports a wider range of social networks and offers a free plan. Profaily is more focused: it does not aim to replace every general-purpose network tool, and it keeps your finished video intact rather than editing or resizing the footage.",
    },
    flowSummary: "Buffer gives you a broad social publishing toolkit. Profaily’s distinction is the sequence around a short-form video: intake and organize; customize each destination; check and follow publishing; bring eligible conversations together; qualify and route interest; then use performance evidence to decide what to try next.",
    faq: [
      { q: "Is Profaily better than Buffer?", a: "It depends on your workflow. Buffer is a strong fit for broad channel scheduling, a free plan, and channel-based pricing. Profaily is designed for the end-to-end short-form video workflow across TikTok, Instagram, YouTube, and Facebook, including publishing protection and business follow-up." },
      { q: "Does Buffer support TikTok, Instagram, YouTube Shorts, and Facebook?", a: "Buffer’s channel information lists TikTok, YouTube Shorts, Instagram business accounts, and Facebook Pages. Publishing, analytics, and engagement features vary by account type and channel; check Buffer’s current channel guide." },
      { q: "Does Profaily offer a free plan?", a: "No. Profaily offers a five-day free trial. Its current displayed plan prices are $9.99 for Pro and $25 for Teams; see the pricing page for the latest terms and included limits." },
      { q: "Can I use Profaily if I need to edit or resize video?", a: "Profaily’s workflow starts with a finished source video. It reuses that file and lets you customize available destination details; it does not edit or resize the footage." },
    ],
    sources: [
      {
        href: "https://buffer.com/pricing",
        title: "Buffer pricing and plan comparison",
        body: "Free plan, channel-based pricing, Team features, publishing, inbox, analytics and collaboration.",
      },
      {
        href: "https://support.buffer.com/en-us/articles/connecting-your-channels-to-buffer-HvWLgAJvL9",
        title: "Buffer channel support guide",
        body: "Channel-specific publishing, analytics and engagement availability.",
      },
    ],
  },
  "later-alternative": {
    name: "Later",
    meta: {
      title: "Later Alternative for Short-Form Video Marketing | Profaily",
      description: "Compare Later and Profaily for visual planning, video publishing, social inbox, teams, analytics, and lead workflows across short-form video channels.",
    },
    model: "Visual social planning, multi-profile scheduling, best-time recommendations, media tools, analytics, and collaboration tiers.",
    hero: {
      title: "Looking for a Later alternative built around video operations?",
      lede: "Later combines a visual planner, multi-profile scheduling, best-time recommendations, analytics, and creator-friendly publishing tools. Profaily focuses on the operating workflow around a finished short-form video—from platform-specific setup and publishing confidence through conversations, qualified interest, and what to publish next.",
      panelNote: "Later is strong when visual planning and broad social publishing are central. Profaily focuses on connecting each video to operational follow-through.",
    },
    intro: "Pick Later when visual grid planning, media editing, trend timing, or wider platform coverage are priorities. Pick Profaily when you want a focused short-form video operation that continues beyond scheduling into audience response and business follow-up.",
    rows: [
      {
        area: "Product focus",
        competitor: "Visual social media planning and publishing across a broad platform set, with creator and brand workflow tools.",
        profaily: "Short-form video marketing operations from video intake through publishing, response, lead follow-up, and learning.",
      },
      {
        area: "Channels",
        competitor: "Later lists eight platforms, including Instagram, Facebook, TikTok, YouTube, Threads, Pinterest, LinkedIn, and Snapchat.",
        profaily: "TikTok, Instagram, YouTube, and Facebook.",
      },
      {
        area: "Planning and publishing",
        competitor: "Visual planner, multi-profile scheduling, saved captions, draft posts, and best-time recommendations.",
        profaily: "Bulk video intake, shared calendar and queue, and independent details for each selected destination.",
      },
      {
        area: "Media editing",
        competitor: "Later lists image crop/filter/text tools, video trimming, and adding audio to Instagram Reels, with platform and plan constraints.",
        profaily: "Uses the finished source video as-is; customizes available destination metadata but does not resize or edit footage.",
      },
      {
        area: "Inbox and collaboration",
        competitor: "Social inbox, approvals, access groups, and custom roles are available on specified plans.",
        profaily: "Unified inbox across connected socials plus lead ownership and CRM handoff in the workflow; Teams adds shared workspace and approval controls.",
      },
      {
        area: "Analytics and decisions",
        competitor: "Platform analytics, shareable reports, and custom analytics/benchmarking on higher plans.",
        profaily: "Video performance signals, audience patterns, and experiments connected to the next publishing decision.",
      },
      {
        area: "Pricing shape",
        competitor: "Plans are organized around social sets and user counts; post allowances and tools vary by tier. Annual and monthly options may differ.",
        profaily: "No free plan; five-day trial. Pro is $9.99 and Teams is $25. Confirm current billing cadence and included limits on Profaily’s pricing page.",
      },
    ],
    fit: {
      competitor: "You care about a visual calendar, managing a wider set of networks, profile-based planning, best-time recommendations, or built-in media tools. Later’s official plan comparison lists Instagram, Facebook, TikTok, Threads, YouTube, Pinterest, LinkedIn, and Snapchat; post limits, users, and features vary by plan.",
      profaily: "You already have a finished video and need to coordinate the operational path: bulk intake, separate destination details, publishing checks and status, eligible conversations from connected socials, lead routing, and performance-informed follow-up.",
      tradeoff: "Later documents visual planning, multi-profile publishing, post customization, best-time recommendations, and media editing features. Profaily is not an in-app video editor or a broad social calendar for every network; it keeps the original finished file and focuses on the four channels in its launch scope.",
    },
    flowSummary: "Later makes visual planning, scheduling, and post refinement central. Profaily starts with the completed video and brings the less visible operational steps forward: validate the work, track the destination outcome, respond across connected social accounts, route interested people, and tie the result back to the video.",
    faq: [
      { q: "Is Profaily a good Later alternative?", a: "It can be, if your central need is coordinating short-form video across TikTok, Instagram, YouTube, and Facebook and connecting publishing to audience and lead workflows. Later may fit better when you need visual planning, media editing, best-time recommendations, or a wider channel set." },
      { q: "Does Later support short-form video?", a: "Yes. Later lists Instagram Reels, TikTok posts, Facebook Reels, and YouTube Shorts among its supported scheduled formats. Publishing options and limits vary by social profile and plan." },
      { q: "Can Profaily resize or edit a video like a media editor?", a: "No. Profaily reuses the finished source video across selected channels and lets you adjust available destination details. It does not crop, trim, resize, or add audio to your footage." },
      { q: "How do Later and Profaily organize pricing?", a: "Later structures plans around social sets, users, and per-profile publishing allowances. Profaily has no free plan, offers a five-day trial, and currently displays Pro at $9.99 and Teams at $25. Check each official pricing page for current terms." },
    ],
    sources: [
      {
        href: "https://later.com/pricing/",
        title: "Later pricing and plan comparison",
        body: "Supported platforms, post allowances, multi-profile scheduling, analytics, inbox, roles, and plan limits.",
      },
      {
        href: "https://later.com/social-media-scheduler/",
        title: "Later social media scheduler",
        body: "Visual planner, multi-profile customization, platform scheduling, and best-time recommendations.",
      },
    ],
  },
  "metricool-alternative": {
    name: "Metricool",
    meta: {
      title: "Metricool Alternative for Short-Form Video Marketing | Profaily",
      description: "Compare Metricool and Profaily for analytics, multi-brand publishing, social inbox, team approvals, and short-form video lead workflows.",
    },
    model: "Multi-brand social management with analytics, competitor analysis, reports, publishing, inbox, and team controls by plan.",
    hero: {
      title: "Looking for a Metricool alternative for short-form video?",
      lede: "Metricool brings planning, publishing, analytics, reporting, competitor tracking, and inbox tools together for social teams and multi-brand operators. Profaily is built around the lifecycle of a short-form video—organizing the source, preparing platform versions, checking delivery, connecting audience response to leads, and using performance evidence to shape the next video.",
      panelNote: "Metricool is compelling for analytics, reporting, and managing many brands. Profaily centers the video-to-outcome sequence.",
    },
    intro: "Pick Metricool when cross-network analytics, competitor research, reporting, and multi-brand capacity are top priorities. Pick Profaily when a short-form video must connect publishing activity to social conversations and measurable business next steps.",
    rows: [
      {
        area: "Product focus",
        competitor: "Multi-network social media management with strong analytics, reporting, competitor tracking, and multi-brand workflows.",
        profaily: "Short-form video marketing workflow that connects planning, publishing, social response, lead follow-up, and learning.",
      },
      {
        area: "Channels",
        competitor: "Metricool lists many social and ad connections, including Instagram, Facebook, TikTok, YouTube, LinkedIn, and more; availability varies by plan.",
        profaily: "TikTok, Instagram, YouTube, and Facebook.",
      },
      {
        area: "Planning and publishing",
        competitor: "Planner, calendar, auto-publication, post library, media bank/editor, and platform-specific tools.",
        profaily: "Bulk video intake, calendar and queue, one finished source file, independent platform metadata, and destination-level status.",
      },
      {
        area: "Analytics and reporting",
        competitor: "Competitor analysis, historical data, downloadable reports, customizable templates, dashboards, and integrations vary by plan/add-on.",
        profaily: "Video performance and audience signals are tied to the video workflow and the next experiment or publishing decision.",
      },
      {
        area: "Inbox and automation",
        competitor: "Metricool’s pricing comparison lists inbox access for Instagram, Facebook, TikTok, and YouTube; Flows and other automation options vary by plan or offer.",
        profaily: "Unified inbox for eligible conversations across connected socials, with conversation qualification, ownership, lead routing, and CRM handoff.",
      },
      {
        area: "Teams and agencies",
        competitor: "Advanced lists team/client management, role management, approval system, and higher brand limits.",
        profaily: "Teams plan is designed for shared workspaces, review and permissions, conversation ownership, lead routing, and team outcomes.",
      },
      {
        area: "Pricing shape",
        competitor: "A free tier is available; paid tiers are organized around brand counts, with feature access changing by plan and add-ons.",
        profaily: "No free plan; five-day trial. Pro is $9.99 and Teams is $25. Confirm current billing cadence and included limits on Profaily’s pricing page.",
      },
    ],
    fit: {
      competitor: "You need analytics and reporting across many networks or brands, competitor tracking, or a free way to manage a small social footprint. Metricool’s official pricing currently lists a free tier for one brand and 20 scheduled posts per month; paid tiers expand brand limits, and Advanced adds team/client management, roles, and approvals.",
      profaily: "You want each finished video to have one connected path from intake through platform-specific publishing and destination status to eligible social conversations, lead qualification, and what your team should test next.",
      tradeoff: "Metricool covers a broad set of social and advertising channels and has strong reporting breadth. Profaily is narrower in channel coverage and is not a general ads, web analytics, or white-label reporting suite; its focus is short-form video operations and follow-through.",
    },
    flowSummary: "Metricool brings data and many social functions into a flexible multi-brand workspace. Profaily narrows the center of gravity to short-form video: the source file, the channel-specific version details, verified publishing state, conversations across the connected social accounts, lead follow-through, and learning tied to what the video produced.",
    faq: [
      { q: "Is Profaily better than Metricool?", a: "They serve different priorities. Metricool is a strong fit for analytics, reporting, competitor analysis, broad channel support, and multi-brand management. Profaily focuses on short-form video publishing and the workflow from a video to audience response and lead follow-through." },
      { q: "Does Metricool have a free plan?", a: "Metricool’s official pricing page currently lists a free tier for one brand and up to 20 scheduled posts per month. Connected networks and other limits differ by plan." },
      { q: "Does Metricool have a unified inbox?", a: "Metricool’s published pricing comparison lists inbox access for Instagram, Facebook, TikTok, and YouTube. Check the current plan table for channel and feature availability." },
      { q: "Which Profaily plan includes team workflows?", a: "Profaily Teams is designed for shared workspaces, roles, review, lead ownership, routing, and CRM handoff. Profaily currently has no free plan and offers a five-day trial." },
    ],
    sources: [
      {
        href: "https://metricool.com/pricing/",
        title: "Metricool official pricing and plan comparison",
        body: "Current brand tiers, Free plan limits, analytics, reporting, inbox, Flows, and Advanced collaboration.",
      },
      {
        href: "https://metricool.com/schedule-tiktok-videos/",
        title: "Metricool TikTok video scheduling guide",
        body: "Metricool’s official TikTok video scheduling workflow.",
      },
    ],
  },
  "hootsuite-alternative": {
    name: "Hootsuite",
    meta: {
      title: "Hootsuite Alternative for Short-Form Video Marketing | Profaily",
      description: "Compare Hootsuite and Profaily for social publishing, inbox, listening, approvals, and short-form video lead follow-through.",
    },
    model: "Broad social management with multi-network publishing, inbox, listening, analytics, and plan-based team workflows.",
    hero: {
      title: "Looking for a Hootsuite alternative focused on video outcomes?",
      lede: "Hootsuite is a broad social management platform for publishing, inbox work, listening, analytics, and team operations. Profaily takes a narrower, video-first approach: one finished video moves through channel setup, publishing confidence, connected conversations, qualified leads, and performance-informed next steps.",
      panelNote: "Hootsuite suits broad social operations and listening. Profaily focuses on short-form video delivery and the business workflow after publishing.",
    },
    intro: "Pick Hootsuite when channel breadth, social listening, enterprise governance, and established collaboration are essential. Pick Profaily when your priority is running short-form video from publishing through audience response and lead follow-through on its four supported platforms.",
    rows: [
      {
        area: "Product focus",
        competitor: "Broad social management spanning publishing, inbox, listening, analytics, and collaboration.",
        profaily: "Focused operating workflow for short-form video from intake to publishing, conversations, qualified interest, and learning.",
      },
      {
        area: "Channels",
        competitor: "Hootsuite supports a broad range of social networks; Standard describes up to 10 social accounts.",
        profaily: "TikTok, Instagram, YouTube, and Facebook.",
      },
      {
        area: "Planning and publishing",
        competitor: "Multi-platform calendar, unlimited scheduled posts on Standard, content creation tools, and publishing options.",
        profaily: "One finished source video, platform-specific destination details, bulk/calendar/queue workflows, readiness checks, and publishing status.",
      },
      {
        area: "Inbox and engagement",
        competitor: "Standard includes a centralized inbox; Advanced adds saved replies, automation, conversation ownership, and assignment options.",
        profaily: "Unified inbox across connected socials, connected to qualification and lead workflows.",
      },
      {
        area: "Listening and analytics",
        competitor: "Hootsuite highlights social listening, sentiment, cross-platform analytics, competitor benchmarks, and reporting.",
        profaily: "Video performance signals, audience patterns, outcome context, and experiments to guide future short-form videos.",
      },
      {
        area: "Team operations",
        competitor: "Advanced includes approval workflows, message routing, internal collaboration, and reporting for teams.",
        profaily: "Teams is designed for shared video workspaces, roles, review, ownership, lead routing, and CRM handoff.",
      },
      {
        area: "Pricing shape",
        competitor: "Tiered plans; account limits and advanced collaboration capabilities vary by plan. Standard is described as per-user pricing on Hootsuite’s plans page.",
        profaily: "No free plan; five-day trial. Pro is $9.99 and Teams is $25. Confirm current billing cadence and included limits on Profaily’s pricing page.",
      },
    ],
    fit: {
      competitor: "You manage a wide social channel mix, need social listening or broad reporting, or rely on established team workflows. Hootsuite Standard currently describes support for up to 10 social accounts and unlimited scheduled posts, with inbox and listening tools; Advanced adds approval workflows, message routing, and internal collaboration.",
      profaily: "Your team’s center of gravity is short-form video and you want to connect the video’s destination-specific publishing state to eligible conversations, lead qualification/routing, CRM handoff, and the next experiment.",
      tradeoff: "Hootsuite covers a wider social surface and promotes mature listening, analytics, inbox, and governance capabilities. Profaily is focused on four short-form video platforms; it should not be chosen as a replacement for enterprise listening, broad network coverage, or advanced governance unless those needs are met by your specific Profaily launch plan.",
    },
    flowSummary: "Hootsuite gives social teams breadth: schedule across many networks, monitor conversations and mentions, compare performance, and coordinate work across plans. Profaily is deliberately more focused. It connects a finished short-form video with its destination settings and publishing state, then keeps eligible social response, lead handling, and video learning in the same operating path.",
    faq: [
      { q: "Is Profaily a Hootsuite alternative?", a: "Yes, for teams whose primary job is short-form video marketing across TikTok, Instagram, YouTube, and Facebook. Hootsuite may be a stronger fit for broad network coverage, social listening, or advanced governance and collaboration requirements." },
      { q: "Does Hootsuite include a unified inbox?", a: "Hootsuite Standard currently lists a centralized inbox across social networks. Hootsuite Advanced adds more workflow options such as message routing and collaboration. Check the plan page for current channel and plan details." },
      { q: "What does Profaily add after publishing?", a: "Profaily is designed to connect eligible conversations from all connected social accounts to qualification, team ownership, lead routing, and CRM or booking handoffs, then use performance evidence to guide the next video." },
      { q: "Should a large enterprise switch from Hootsuite to Profaily?", a: "Only if Profaily’s launch scope meets its governance, channel, listening, analytics, and integration requirements. Hootsuite’s own product pages describe broader social listening and enterprise controls; teams should evaluate those needs directly before switching." },
    ],
    sources: [
      {
        href: "https://www.hootsuite.com/plans/standard",
        title: "Hootsuite Standard plan",
        body: "Standard plan’s account count, scheduling, inbox, social listening, and analytics.",
      },
      {
        href: "https://www.hootsuite.com/plans/advanced",
        title: "Hootsuite Advanced plan",
        body: "Approvals, conversation routing, collaboration, inbox automation, and team workflows.",
      },
    ],
  },
} satisfies Record<string, ComparisonContent>;

export type ComparisonSlug = keyof typeof comparisons;
