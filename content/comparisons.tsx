/**
 * ComparisonContent fields (everything else on the four "<Competitor> alternative" pages is shared
 * template markup, see components/templates/ComparePage.tsx):
 *  name              competitor name; drives breadcrumb, eyebrow, table heading and aria-label,
 *                    "Choose <name> if", the related-card links, ...
 *  meta              title, description (og:title / og:description repeat them)
 *  model             one-line product positioning: fit-card heading, related-card and index-card blurb
 *  hero              title, lede, panelNote (line in the quick-take card)
  quick             3-4 short rows for the hero quick-take card: {label, them, us}
 *  intro             paragraph under "At a glance" above the table
 *  rows              comparison table rows: {area, competitor, profaily}
 *  fit               paragraphs of the three fit cards: competitor (also the index "May fit best when"
 *                    cell), profaily, tradeoff
 *  flowSummary       paragraph in the workflow row
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
  quick: { label: string; them: string; us: string }[];
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
    "Compare Profaily with Buffer, Later, Metricool, and Hootsuite. See how each handles short-form video publishing, channel coverage, team approvals, inbox, analytics, and pricing.",
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
      description: "Compare Buffer and Profaily for short-form video planning, publishing, team approvals, and pricing. See where each platform fits before choosing.",
    },
    model: "Multi-channel publishing with channel-based pricing, a free plan, community tools, and team options.",
    hero: {
      title: "Looking for a Buffer alternative for short-form video marketing?",
      lede: "Buffer is a flexible way to plan, publish, engage, and measure across a broad set of social channels. Profaily is organized around the short-form video workflow: upload one finished video, adjust it for each channel, get it approved, and track it until it is posted on every channel.",
      panelNote: "A good fit depends on whether you need a broad channel scheduler or a focused short-form video workflow.",
    },
    quick: [
      { label: "Built for", them: "General social publishing", us: "Short-form video" },
      { label: "Channels", them: "Broad channel list", us: "TikTok, Reels, YouTube, Facebook" },
      { label: "Free plan", them: "Yes, up to 3 channels", us: "No · 14-day Business trial" },
      { label: "Inbox", them: "Community inbox", us: "Not yet" },
    ],
    intro: "Pick Buffer when broad network coverage, a free plan, and channel-by-channel scaling lead your decision. Pick Profaily when your work is centered on short-form video across its four supported channels and you want import, review, and per-channel publishing in one place.",
    rows: [
      {
        area: "Product focus",
        competitor: "A general social publishing and engagement workspace with ideas, queues, analytics, and community tools.",
        profaily: "A short-form video publishing workflow: import, per-channel setup, team review, scheduling, and per-channel publishing status.",
      },
      {
        area: "Channels",
        competitor: "A broad channel list, including TikTok, YouTube Shorts, Instagram, and Facebook; per-channel capabilities vary.",
        profaily: "Exactly four channels: TikTok, Instagram Reels, YouTube (Shorts and long-form), and Facebook, with per-channel details.",
      },
      {
        area: "Planning and publishing",
        competitor: "Visual calendar, queue, scheduled publishing, drafts, and channel-specific capabilities.",
        profaily: "Bulk import by CSV or Google Drive, Dropbox, and OneDrive links; calendar and queue; one source video with separate details per channel.",
      },
      {
        area: "Publishing confidence",
        competitor: "Publishing options depend on each channel and account. Review Buffer’s channel support guide for automatic versus reminder publishing.",
        profaily: "Per-channel previews and validation flag problems before scheduling; each channel shows its own status, and a failed channel can be retried on its own.",
      },
      {
        area: "Audience conversations",
        competitor: "Buffer lists a Community inbox and comment replies; available engagement actions vary by channel.",
        profaily: "No unified inbox yet. Reply to comments in each channel’s own app.",
      },
      {
        area: "Analytics and integrations",
        competitor: "Buffer supports publishing, community engagement, and analytics. Review its current integrations for any specific CRM handoff you need.",
        profaily: "No analytics or CRM yet. Profaily connects to Claude and ChatGPT through MCP, so an assistant can draft, schedule, and check posts.",
      },
      {
        area: "Teams and pricing shape",
        competitor: "A free plan is available; paid plans are per channel. Team adds unlimited members, access levels, and approvals.",
        profaily: "No free plan. Creator is $15/month for one person; Business is $39/month for up to 5 people and has a 14-day trial (card required). Yearly billing saves 20%.",
      },
    ],
    fit: {
      competitor: "You want a free starting point, manage several kinds of social accounts, or prefer adding channels as your needs grow. Buffer’s pricing page currently lists a free plan for up to three channels; paid plans are priced per channel. Its Team plan lists unlimited users, access levels, and approval workflows.",
      profaily: "Your main publishing work is short-form video across TikTok, Instagram Reels, YouTube, and Facebook, and you want bulk import, per-channel previews, team approvals, and per-channel status and retry in one workflow.",
      tradeoff: "Buffer supports a wider range of social networks, offers a free plan, and includes community and analytics tools. Profaily is more focused: four channels, no inbox or analytics yet, and it keeps your finished video intact rather than editing or resizing the footage.",
    },
    flowSummary: "Buffer gives you a broad social publishing toolkit. Profaily’s distinction is the sequence around a short-form video: import it, adjust each channel’s details, get it approved, schedule it, and follow each channel until it is posted, retrying any channel that fails.",
    faq: [
      { q: "Is Profaily better than Buffer?", a: "It depends on your workflow. Buffer is a strong fit for broad channel scheduling, a free plan, and channel-based pricing. Profaily is designed for the short-form video publishing workflow across TikTok, Instagram Reels, YouTube, and Facebook, including validation, team approvals, and per-channel retry." },
      { q: "Does Buffer support TikTok, Instagram, YouTube Shorts, and Facebook?", a: "Buffer’s channel information lists TikTok, YouTube Shorts, Instagram business accounts, and Facebook Pages. Publishing, analytics, and engagement features vary by account type and channel; check Buffer’s current channel guide." },
      { q: "Does Profaily offer a free plan?", a: "No. Creator is $15/month and Business is $39/month. Business has a 14-day free trial (card required); see the pricing page for current terms and limits." },
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
      description: "Compare Later and Profaily for visual planning, short-form video publishing, team approvals, inbox, analytics, and pricing.",
    },
    model: "Visual social planning, multi-profile scheduling, best-time recommendations, media tools, analytics, and collaboration tiers.",
    hero: {
      title: "Looking for a Later alternative built around video operations?",
      lede: "Later combines a visual planner, multi-profile scheduling, best-time recommendations, analytics, and creator-friendly publishing tools. Profaily focuses on the workflow around a finished short-form video: per-channel setup and previews, team approval, scheduling, and per-channel publishing status.",
      panelNote: "Later is strong when visual planning and broad social publishing are central. Profaily focuses on getting each finished video approved and posted on every channel.",
    },
    quick: [
      { label: "Built for", them: "Visual social planning", us: "Short-form video" },
      { label: "Channels", them: "8 platforms", us: "TikTok, Reels, YouTube, Facebook" },
      { label: "Edits media", them: "Crop, trim, add audio", us: "No, posts the finished file" },
      { label: "Inbox", them: "On specified plans", us: "Not yet" },
    ],
    intro: "Pick Later when visual grid planning, media editing, trend timing, or wider platform coverage are priorities. Pick Profaily when you want a focused short-form video workflow with bulk import, team review, and per-channel status and retry.",
    rows: [
      {
        area: "Product focus",
        competitor: "Visual social media planning and publishing across a broad platform set, with creator and brand workflow tools.",
        profaily: "Short-form video publishing from import through per-channel setup, review, scheduling, and per-channel status.",
      },
      {
        area: "Channels",
        competitor: "Later lists eight platforms, including Instagram, Facebook, TikTok, YouTube, Threads, Pinterest, LinkedIn, and Snapchat.",
        profaily: "Exactly four channels: TikTok, Instagram Reels, YouTube (Shorts and long-form), and Facebook.",
      },
      {
        area: "Planning and publishing",
        competitor: "Visual planner, multi-profile scheduling, saved captions, draft posts, and best-time recommendations.",
        profaily: "Bulk import by CSV or cloud links, calendar and queue, and separate details for each selected channel.",
      },
      {
        area: "Media editing",
        competitor: "Later lists image crop/filter/text tools, video trimming, and adding audio to Instagram Reels, with platform and plan constraints.",
        profaily: "Uses the finished source video as-is; customizes available destination metadata but does not resize or edit footage.",
      },
      {
        area: "Inbox and collaboration",
        competitor: "Social inbox, approvals, access groups, and custom roles are available on specified plans.",
        profaily: "No inbox yet. Business adds approvals before distributing, comments on each video, share links for clients, and control over which brands each person sees.",
      },
      {
        area: "Analytics and decisions",
        competitor: "Platform analytics, shareable reports, and custom analytics/benchmarking on higher plans.",
        profaily: "No analytics yet; use each channel’s own insights. Profaily shows whether each post went out and links to it.",
      },
      {
        area: "Pricing shape",
        competitor: "Plans are organized around social sets and user counts; post allowances and tools vary by tier. Annual and monthly options may differ.",
        profaily: "No free plan. Creator is $15/month for one person; Business is $39/month for up to 5 people and has a 14-day trial (card required). Yearly billing saves 20%.",
      },
    ],
    fit: {
      competitor: "You care about a visual calendar, managing a wider set of networks, profile-based planning, best-time recommendations, or built-in media tools. Later’s official plan comparison lists Instagram, Facebook, TikTok, Threads, YouTube, Pinterest, LinkedIn, and Snapchat; post limits, users, and features vary by plan.",
      profaily: "You already have finished videos and need to coordinate the path to posting: bulk import, separate details per channel, validation before scheduling, team approval, and per-channel status with retry.",
      tradeoff: "Later documents visual planning, multi-profile publishing, post customization, best-time recommendations, and media editing features. Profaily is not an in-app video editor or a broad social calendar for every network, and it has no inbox or analytics yet; it keeps the original finished file and focuses on four channels.",
    },
    flowSummary: "Later makes visual planning, scheduling, and post refinement central. Profaily starts with the completed video and brings the less visible steps forward: validate it for each channel, get it approved, schedule it, and track every channel until it is posted.",
    faq: [
      { q: "Is Profaily a good Later alternative?", a: "It can be, if your central need is coordinating short-form video across TikTok, Instagram Reels, YouTube, and Facebook with bulk import, approvals, and per-channel status. Later may fit better when you need visual planning, media editing, best-time recommendations, or a wider channel set." },
      { q: "Does Later support short-form video?", a: "Yes. Later lists Instagram Reels, TikTok posts, Facebook Reels, and YouTube Shorts among its supported scheduled formats. Publishing options and limits vary by social profile and plan." },
      { q: "Can Profaily resize or edit a video like a media editor?", a: "No. Profaily reuses the finished source video across selected channels and lets you adjust available destination details. It does not crop, trim, resize, or add audio to your footage." },
      { q: "How do Later and Profaily organize pricing?", a: "Later structures plans around social sets, users, and per-profile publishing allowances. Profaily has no free plan: Creator is $15/month and Business is $39/month, with a 14-day trial on Business. Check each official pricing page for current terms." },
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
      description: "Compare Metricool and Profaily for analytics, multi-brand publishing, social inbox, team approvals, and short-form video publishing.",
    },
    model: "Multi-brand social management with analytics, competitor analysis, reports, publishing, inbox, and team controls by plan.",
    hero: {
      title: "Looking for a Metricool alternative for short-form video?",
      lede: "Metricool brings planning, publishing, analytics, reporting, competitor tracking, and inbox tools together for social teams and multi-brand operators. Profaily is built around the path of a short-form video to posting: importing the source, preparing each channel’s details, getting it approved, and checking delivery on every channel.",
      panelNote: "Metricool is compelling for analytics, reporting, and managing many brands. Profaily centers the path from finished video to posted video.",
    },
    quick: [
      { label: "Built for", them: "Analytics and many brands", us: "Short-form video" },
      { label: "Free plan", them: "1 brand, 20 posts a month", us: "No · 14-day Business trial" },
      { label: "Analytics", them: "Reports and competitors", us: "Not yet" },
      { label: "Approvals", them: "On Advanced", us: "On Business" },
    ],
    intro: "Pick Metricool when cross-network analytics, competitor research, reporting, and multi-brand capacity are top priorities. Pick Profaily when short-form video publishing, team review, and per-channel delivery are the job.",
    rows: [
      {
        area: "Product focus",
        competitor: "Multi-network social media management with strong analytics, reporting, competitor tracking, and multi-brand workflows.",
        profaily: "Short-form video publishing workflow that connects import, per-channel setup, team review, scheduling, and per-channel status.",
      },
      {
        area: "Channels",
        competitor: "Metricool lists many social and ad connections, including Instagram, Facebook, TikTok, YouTube, LinkedIn, and more; availability varies by plan.",
        profaily: "Exactly four channels: TikTok, Instagram Reels, YouTube (Shorts and long-form), and Facebook.",
      },
      {
        area: "Planning and publishing",
        competitor: "Planner, calendar, auto-publication, post library, media bank/editor, and platform-specific tools.",
        profaily: "Bulk import, calendar and queue, one finished source file, separate details per channel, and per-channel status with retry.",
      },
      {
        area: "Analytics and reporting",
        competitor: "Competitor analysis, historical data, downloadable reports, customizable templates, dashboards, and integrations vary by plan/add-on.",
        profaily: "No analytics or reporting yet. Profaily shows each channel’s publishing status and a link to the live post.",
      },
      {
        area: "Inbox and automation",
        competitor: "Metricool’s pricing comparison lists inbox access for Instagram, Facebook, TikTok, and YouTube; Flows and other automation options vary by plan or offer.",
        profaily: "No inbox or automation flows yet. Profaily connects to Claude and ChatGPT through MCP, so an assistant can draft, schedule, and check posts.",
      },
      {
        area: "Teams and agencies",
        competitor: "Advanced lists team/client management, role management, approval system, and higher brand limits.",
        profaily: "Business covers up to 5 people and 3 brands, with approvals, comments, client share links, and per-person access to brands.",
      },
      {
        area: "Pricing shape",
        competitor: "A free tier is available; paid tiers are organized around brand counts, with feature access changing by plan and add-ons.",
        profaily: "No free plan. Creator is $15/month for one person; Business is $39/month for up to 5 people and has a 14-day trial (card required). Yearly billing saves 20%.",
      },
    ],
    fit: {
      competitor: "You need analytics and reporting across many networks or brands, competitor tracking, or a free way to manage a small social footprint. Metricool’s official pricing currently lists a free tier for one brand and 20 scheduled posts per month; paid tiers expand brand limits, and Advanced adds team/client management, roles, and approvals.",
      profaily: "You want each finished video to have one connected path from import through per-channel setup and team approval to scheduled, verified posts on TikTok, Instagram Reels, YouTube, and Facebook.",
      tradeoff: "Metricool covers a broad set of social and advertising channels and has strong reporting breadth. Profaily is narrower in channel coverage and has no analytics, reporting, or inbox yet; its focus is short-form video publishing and team review.",
    },
    flowSummary: "Metricool brings data and many social functions into a flexible multi-brand workspace. Profaily narrows the center of gravity to short-form video: the source file, the details for each channel, approval, and verified publishing state on every channel, with retry when one fails.",
    faq: [
      { q: "Is Profaily better than Metricool?", a: "They serve different priorities. Metricool is a strong fit for analytics, reporting, competitor analysis, broad channel support, and multi-brand management. Profaily focuses on short-form video publishing: import, per-channel setup, approvals, and per-channel delivery." },
      { q: "Does Metricool have a free plan?", a: "Metricool’s official pricing page currently lists a free tier for one brand and up to 20 scheduled posts per month. Connected networks and other limits differ by plan." },
      { q: "Does Metricool have a unified inbox?", a: "Metricool’s published pricing comparison lists inbox access for Instagram, Facebook, TikTok, and YouTube. Check the current plan table for channel and feature availability." },
      { q: "Which Profaily plan includes team workflows?", a: "Business ($39/month) covers up to 5 people and 3 brands, with approvals before distributing, comments, and client share links. It has a 14-day free trial (card required). Profaily has no free plan." },
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
      description: "Compare Hootsuite and Profaily for social publishing, inbox, listening, approvals, and short-form video workflows.",
    },
    model: "Broad social management with multi-network publishing, inbox, listening, analytics, and plan-based team workflows.",
    hero: {
      title: "Looking for a Hootsuite alternative focused on short-form video?",
      lede: "Hootsuite is a broad social management platform for publishing, inbox work, listening, analytics, and team operations. Profaily takes a narrower, video-first approach: one finished video moves through per-channel setup, team approval, scheduling, and per-channel publishing status.",
      panelNote: "Hootsuite suits broad social operations and listening. Profaily focuses on short-form video delivery to four channels.",
    },
    quick: [
      { label: "Built for", them: "Broad social management", us: "Short-form video" },
      { label: "Accounts", them: "Up to 10 on Standard", us: "4 on Creator, 12 on Business" },
      { label: "Listening", them: "Yes", us: "No" },
      { label: "Approvals", them: "On Advanced", us: "On Business" },
    ],
    intro: "Pick Hootsuite when channel breadth, social listening, enterprise governance, and established collaboration are essential. Pick Profaily when your priority is getting short-form video reviewed and posted on its four supported channels.",
    rows: [
      {
        area: "Product focus",
        competitor: "Broad social management spanning publishing, inbox, listening, analytics, and collaboration.",
        profaily: "Focused workflow for short-form video from import to per-channel setup, review, scheduling, and publishing status.",
      },
      {
        area: "Channels",
        competitor: "Hootsuite supports a broad range of social networks; Standard describes up to 10 social accounts.",
        profaily: "Exactly four channels: TikTok, Instagram Reels, YouTube (Shorts and long-form), and Facebook.",
      },
      {
        area: "Planning and publishing",
        competitor: "Multi-platform calendar, unlimited scheduled posts on Standard, content creation tools, and publishing options.",
        profaily: "One finished source video, per-channel details and previews, bulk import, calendar and queue, validation, and per-channel status with retry.",
      },
      {
        area: "Inbox and engagement",
        competitor: "Standard includes a centralized inbox; Advanced adds saved replies, automation, conversation ownership, and assignment options.",
        profaily: "No inbox yet. Reply to comments in each channel’s own app.",
      },
      {
        area: "Listening and analytics",
        competitor: "Hootsuite highlights social listening, sentiment, cross-platform analytics, competitor benchmarks, and reporting.",
        profaily: "No listening or analytics yet.",
      },
      {
        area: "Team operations",
        competitor: "Advanced includes approval workflows, message routing, internal collaboration, and reporting for teams.",
        profaily: "Business covers up to 5 people and 3 brands, with approvals, comments on each video, client share links, and per-person access to brands.",
      },
      {
        area: "Pricing shape",
        competitor: "Tiered plans; account limits and advanced collaboration capabilities vary by plan. Standard is described as per-user pricing on Hootsuite’s plans page.",
        profaily: "No free plan. Creator is $15/month for one person; Business is $39/month for up to 5 people and has a 14-day trial (card required). Yearly billing saves 20%.",
      },
    ],
    fit: {
      competitor: "You manage a wide social channel mix, need social listening or broad reporting, or rely on established team workflows. Hootsuite Standard currently describes support for up to 10 social accounts and unlimited scheduled posts, with inbox and listening tools; Advanced adds approval workflows, message routing, and internal collaboration.",
      profaily: "Your team’s center of gravity is short-form video and you want bulk import, per-channel previews, approvals, and per-channel publishing status without paying for a broad social suite.",
      tradeoff: "Hootsuite covers a wider social surface and promotes mature listening, analytics, inbox, and governance capabilities. Profaily is focused on four short-form video channels and has no listening, inbox, or analytics; it should not be chosen as a replacement for enterprise listening, broad network coverage, or advanced governance.",
    },
    flowSummary: "Hootsuite gives social teams breadth: schedule across many networks, monitor conversations and mentions, compare performance, and coordinate work across plans. Profaily is deliberately more focused. It connects a finished short-form video with its per-channel settings, its approval, and its publishing state on every channel, in one path.",
    faq: [
      { q: "Is Profaily a Hootsuite alternative?", a: "Yes, for teams whose primary job is short-form video publishing across TikTok, Instagram Reels, YouTube, and Facebook. Hootsuite may be a stronger fit for broad network coverage, social listening, or advanced governance and collaboration requirements." },
      { q: "Does Hootsuite include a unified inbox?", a: "Hootsuite Standard currently lists a centralized inbox across social networks. Hootsuite Advanced adds more workflow options such as message routing and collaboration. Check the plan page for current channel and plan details." },
      { q: "What does Profaily do after publishing?", a: "Profaily shows each channel’s status and links to the live post. If one channel fails, you can retry that channel without reposting the others. It does not have an inbox, analytics, or CRM yet." },
      { q: "Should a large enterprise switch from Hootsuite to Profaily?", a: "Only if Profaily’s current scope meets its governance, channel, listening, analytics, and integration requirements. Profaily has no listening or analytics today. Hootsuite’s own product pages describe broader social listening and enterprise controls; teams should evaluate those needs directly before switching." },
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
