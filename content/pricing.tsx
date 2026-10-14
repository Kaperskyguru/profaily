export const pricingMeta = {
  title: "Pricing | Profaily",
  description:
    "Compare Profaily Pro and Teams for solo creators, businesses, and collaborative video teams. Start with a five-day free trial.",
  path: "/pricing",
};

export const plans = [
  {
    tag: "For creators",
    name: "Pro",
    summary: "For creators and independent operators who manage the whole video workflow themselves.",
    price: "$9.99",
    cta: "Start Pro trial",
    ctaClass: "button secondary",
    bullets: [
      "Publish videos to TikTok, Instagram, YouTube, and Facebook",
      "Bulk upload, calendar, queue, and platform-specific details",
      "Publishing Guardian checks, status, and safe recovery",
      "Unified inbox for conversations across connected socials",
      "Video performance signals, audience insights, and experiments",
    ],
  },
  {
    tag: "For businesses and teams",
    name: "Teams",
    summary: "For businesses, agencies, and social teams coordinating video across people, brands, and leads.",
    price: "$25",
    cta: "Start Teams trial",
    ctaClass: "button primary",
    cardClass: "plan-card plan-card-team",
    bullets: [
      "Everything in Pro",
      "Shared workspaces and drafts for teams and brands",
      "Team roles, permissions, review, and approval workflows",
      "Assign conversations, route qualified leads, and hand off bookings",
      "CRM handoff and shared outcome visibility",
    ],
  },
];

/** Comparison rows: `pro`/`teams` are the cell text; `group` rows are section dividers. */
export const comparisonRows: ({ group: string } | { feature: string; pro: string; teams: string })[] = [
  { group: "Plan and publish" },
  { feature: "TikTok, Instagram, YouTube, and Facebook publishing", pro: "Included", teams: "Included" },
  { feature: "Bulk video upload, CSV intake, and validation", pro: "Included", teams: "Included" },
  { feature: "Calendar, queue, and bulk video management", pro: "Included", teams: "Included" },
  { feature: "Platform-specific captions, titles, and settings", pro: "Included", teams: "Included" },
  { feature: "Preflight checks, account health, and publishing history", pro: "Included", teams: "Included" },
  { feature: "Safe recovery and outcome verification where supported", pro: "Included", teams: "Included" },
  { group: "Engage and grow" },
  { feature: "Unified inbox across connected social accounts", pro: "Included", teams: "Included" },
  {
    feature: "Supported conversation rules, AI-suggested replies, FAQ responses, and human handoff",
    pro: "Included",
    teams: "Included",
  },
  { feature: "Lead capture, qualification, and source attribution", pro: "Included", teams: "Included" },
  { feature: "Performance insights, audience signals, and experiments", pro: "Included", teams: "Included" },
  { group: "Team collaboration" },
  { feature: "Shared workspaces and drafts", pro: "—", teams: "Included" },
  { feature: "Team roles and permissions", pro: "—", teams: "Included" },
  { feature: "Shared review, comments, and approvals", pro: "—", teams: "Included" },
  { feature: "Conversation ownership and lead routing", pro: "—", teams: "Included" },
  { feature: "CRM handoff, booking status, and team outcome tracking", pro: "—", teams: "Included" },
];

export const workflowCards = [
  {
    href: "/feature-content-operations",
    step: "01 · PLAN",
    title: "Bring order to video work",
    body: "Bulk intake, review, calendar, queue, and editing actions make publishing manageable.",
  },
  {
    href: "/feature-publishing-guardian",
    step: "02 · PROTECT",
    title: "Publish with confidence",
    body: "Check readiness, monitor each destination, and recover safely when a platform needs attention.",
  },
  {
    href: "/feature-conversation-automation",
    step: "03 · ENGAGE",
    title: "Keep conversations moving",
    body: "Bring eligible comments and supported messages from connected socials into one inbox.",
  },
  {
    href: "/feature-revenue-workflows",
    step: "04 · CONVERT",
    title: "Route interest to action",
    body: "Qualify leads, assign ownership, and connect conversations to bookings, sales, or CRM handoff.",
  },
  {
    href: "/feature-content-intelligence",
    step: "05 · LEARN",
    title: "Make the next video smarter",
    body: "Use audience signals, performance evidence, and experiments to guide what you publish next.",
  },
];

export const testimonials = [
  {
    image: "creator",
    alt: "AI-generated illustrative portrait of a fictional independent video creator",
    role: "Independent video creator",
    quote: "“I start with one finished video, tailor the details for each channel, and get everything scheduled from one place.”",
  },
  {
    image: "marketer",
    alt: "AI-generated illustrative portrait of a fictional social media manager",
    role: "Social media manager",
    quote: "“The calendar makes it easier to see what’s planned, what’s ready, and what still needs attention before the week gets busy.”",
  },
  {
    image: "agency",
    alt: "AI-generated illustrative portrait of a fictional agency strategist",
    role: "Agency strategist",
    quote: "“We can keep each platform’s captions and publishing status connected, so a multi-channel launch is easier to coordinate.”",
  },
  {
    image: "founder",
    alt: "AI-generated illustrative portrait of a fictional small business owner",
    role: "Small business owner",
    quote: "“When a video sparks a serious question, the shared inbox helps us bring the conversation to the right person.”",
  },
  {
    image: "team",
    alt: "AI-generated illustrative portrait of a fictional marketing team lead",
    role: "Marketing team lead",
    quote: "“Reviewing the plan together gives everyone a clearer view of what’s going live and who owns the next step.”",
  },
  {
    image: "strategist",
    alt: "AI-generated illustrative portrait of a fictional content strategist",
    role: "Content strategist",
    quote: "“Performance signals help us decide which video ideas to build on and what to experiment with next.”",
  },
];

export const pricingFaq = [
  {
    q: "Which plan is right for a solo creator?",
    a: "Pro is designed for creators and independent operators who plan, publish, and manage their own video workflow.",
  },
  {
    q: "When should a business choose Teams?",
    a: "Choose Teams when video work is shared across people or brands and you need roles, review, ownership, lead routing, and CRM handoff.",
  },
  {
    q: "Do both plans publish to all four supported platforms?",
    a: "Both plans cover TikTok, Instagram, YouTube, and Facebook. Available publishing options can vary by account permissions and platform support.",
  },
  {
    q: "Does Profaily edit or resize my video?",
    a: "No. Upload your finished video. Profaily reuses that source file and lets you customize the available post details for each platform.",
  },
  {
    q: "Is there a free plan?",
    a: "No. Pro and Teams both start with a five-day free trial.",
  },
];
