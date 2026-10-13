export const capItems = [
  ["01", "Plan videos"],
  ["02", "Publish reliably"],
  ["03", "Engage your audience"],
  ["04", "Route leads"],
  ["05", "Learn and improve"],
] as const;

export const valueCards = [
  {
    icon: "▦",
    title: "Keep video operations moving",
    body: "Bulk video intake, structured review, a shared calendar, and clear publishing history help coordinate a busy video operation.",
  },
  {
    icon: "✓",
    title: "Publish with confidence",
    body: "Check account, media, and post readiness. Track each destination and see what needs attention.",
  },
  {
    icon: "↗",
    title: "Turn attention into action",
    body: "Manage eligible conversations, qualify interest, route leads, and connect results back to the video that started them.",
  },
];

export const workflowCards = [
  {
    step: "01",
    title: "Plan and organize",
    body: "Bring videos in, review details, and manage the shared calendar and queue.",
    href: "/feature-content-operations",
    link: "Explore video planning & publishing",
  },
  {
    step: "02",
    title: "Publish with confidence",
    body: "Check readiness, track each platform attempt, and see what needs attention.",
    href: "/feature-publishing-guardian",
    link: "Explore publishing protection",
  },
  {
    step: "03",
    title: "Handle conversations",
    body: "Bring eligible comments and supported messages from connected socials into one inbox for response and handoff.",
    href: "/feature-conversation-automation",
    link: "Explore the unified inbox",
  },
  {
    step: "04",
    title: "Qualify and route leads",
    body: "Capture relevant interest, set ownership, and connect each lead to a clear next action.",
    href: "/feature-revenue-workflows",
    link: "Explore revenue workflows",
  },
  {
    step: "05",
    title: "Learn and improve",
    body: "Use performance signals and their context to decide which videos to repeat or what to test next.",
    href: "/feature-content-intelligence",
    link: "Explore video performance insights",
  },
];

export const suiteCards: {
  href: string;
  kicker: string;
  title: string;
  body: string;
  all?: boolean;
  items: { href?: string; label: string }[];
}[] = [
  {
    href: "/feature-content-operations",
    kicker: "01 · PLAN & PUBLISH",
    title: "Video planning & publishing",
    body: "Bring videos in, check the details, coordinate schedules, and keep every post traceable across channels.",
    items: [
      { href: "/feature-content-operations#bulk-upload", label: "Bulk video upload" },
      { href: "/feature-content-operations#csv-import", label: "Structured CSV intake" },
      { href: "/feature-content-operations#validation-review", label: "Validation and review" },
      { href: "/feature-content-operations#calendar-queue", label: "Calendar and queue" },
    ],
  },
  {
    href: "/feature-publishing-guardian",
    kicker: "02 · PUBLISH & PROTECT",
    title: "Publishing Guardian",
    body: "Check the account, media, metadata, schedule, and platform requirements before publishing.",
    items: [
      { href: "/feature-publishing-guardian#preflight", label: "Preflight checks" },
      { href: "/feature-publishing-guardian#account-health", label: "Account health" },
      { href: "/feature-publishing-guardian#publishing-lifecycle", label: "Publishing lifecycle" },
      { href: "/feature-publishing-guardian#safe-retries", label: "Safe retries" },
    ],
  },
  {
    href: "/feature-conversation-automation",
    kicker: "03 · ENGAGE & RESPOND",
    title: "Unified inbox",
    body: "Bring eligible comments and supported messages from connected socials into one human and automated conversation view.",
    items: [
      { href: "/feature-conversation-automation#unified-inbox", label: "Unified social inbox" },
      { href: "/feature-conversation-automation#response-rules", label: "Response rules" },
      { href: "/feature-conversation-automation#ai-suggestions", label: "AI-suggested answers" },
      { href: "/feature-conversation-automation#faq-automation", label: "FAQ automation" },
    ],
  },
  {
    href: "/feature-revenue-workflows",
    kicker: "04 · QUALIFY & ROUTE",
    title: "Revenue workflows",
    body: "Capture structured interest from comments and messages, qualify it, route it to the right owner, and connect the outcome back to the video that started the conversation.",
    items: [
      { href: "/feature-revenue-workflows#lead-capture", label: "Structured lead capture" },
      { href: "/feature-revenue-workflows#lead-scoring", label: "Lead qualification and scoring" },
      { href: "/feature-revenue-workflows#lead-routing", label: "Ownership and routing" },
      { href: "/feature-revenue-workflows#booking-sale", label: "Booking and sale handoff" },
    ],
  },
  {
    href: "/feature-content-intelligence",
    kicker: "05 · LEARN & IMPROVE",
    title: "Video performance insights",
    body: "Bring performance and audience signals into the publishing workflow.",
    items: [
      { href: "/feature-content-intelligence#performance-analytics", label: "Performance analytics" },
      { href: "/feature-content-intelligence#audience-signals", label: "Video and audience signals" },
      { href: "/feature-content-intelligence#evidence-recommendations", label: "Evidence-backed recommendations" },
      { href: "/feature-content-intelligence#sample-confidence", label: "Sample-size context" },
    ],
  },
  {
    href: "/features",
    kicker: "06 · EXPLORE ALL FEATURES",
    title: "Browse all features",
    body: "Explore every capability and see how Profaily connects the video marketing workflow.",
    all: true,
    items: [
      { label: "Publishing and platform workflows" },
      { label: "Inbox, leads, and audience follow-up" },
      { label: "Performance analytics and insights" },
    ],
  },
];

const TIKTOK_D =
  "M12.53 2h3.17c.18 1.63.95 3.13 2.2 4.2 1.07.9 2.4 1.45 3.79 1.57v3.32a10.48 10.48 0 0 1-5.98-1.88v6.9a6.27 6.27 0 1 1-6.26-6.27c.39 0 .77.04 1.14.1v3.49a2.82 2.82 0 1 0 1.94 2.68V2z";

export const platformCards = [
  {
    href: "/tiktok",
    cls: "tiktok-icon",
    name: "TikTok",
    body: "Prepare short-form video for TikTok, review the controls available to your connected account, schedule or publish, and follow its status.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#25F4EE" transform="translate(-.65 .2)" d={TIKTOK_D} />
        <path fill="#FE2C55" transform="translate(.65 -.2)" d={TIKTOK_D} />
        <path fill="#111" d={TIKTOK_D} />
      </svg>
    ),
  },
  {
    href: "/instagram",
    cls: "instagram-icon",
    name: "Instagram",
    body: "Keep Instagram Reels in the same video-first operation as your other channels.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <linearGradient id="ig-mark-3-instagram" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFB13D" />
            <stop offset=".48" stopColor="#E1306C" />
            <stop offset="1" stopColor="#833AB4" />
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="url(#ig-mark-3-instagram)" strokeWidth="2.5" />
        <circle cx="12" cy="12" r="4.1" fill="none" stroke="url(#ig-mark-3-instagram)" strokeWidth="2.2" />
        <circle cx="17.6" cy="6.7" r="1.25" fill="#E1306C" />
      </svg>
    ),
  },
  {
    href: "/youtube",
    cls: "youtube-icon",
    name: "YouTube",
    body: "Prepare the video, title, description, audience details, and visibility for YouTube.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="4.5" width="20" height="15" rx="4.4" fill="#FF0033" />
        <path d="m10 8 6 4-6 4V8Z" fill="#fff" />
      </svg>
    ),
  },
  {
    href: "/facebook",
    cls: "facebook-icon",
    name: "Facebook",
    body: "Prepare Reels and videos for the right Facebook Page, set the Page-level details, schedule with the shared video calendar, and track each result.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#0866FF" />
        <path
          fill="#fff"
          d="M14.15 21v-7h2.38l.36-2.8h-2.74V9.41c0-.81.23-1.36 1.39-1.36h1.47V5.54c-.71-.1-1.43-.16-2.15-.16-2.13 0-3.59 1.3-3.59 3.7v2.12H8.86V14h2.41v7h2.88Z"
        />
      </svg>
    ),
  },
];
