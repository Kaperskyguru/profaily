import type { IconName, Integration } from "@/components/ui/Glyph";
import { links } from "@/lib/links";

/** A dropdown link: a title, one line under it, and an optional brand glyph (channels). */
export type NavLink = { href: string; title: string; text: string; glyph?: Integration; icon?: IconName };
export type NavColumn = { heading?: string; links: NavLink[] };
/** A card at the side of a menu: one picture, one line, one link. */
export type NavFeature = { href: string; title: string; text: string; image: string; alt: string };
/** `start` anchors the panel under its own button; the wide Features menu sits centred under the bar. */
export type NavMenu = { label: string; columns: NavColumn[]; feature?: NavFeature; foot?: { href: string; label: string }; align?: "start" };

/** The real product, grouped like the home page; each link opens its section there. */
export const makingLinks: NavLink[] = [
  { href: "/#making", title: "Upload once", text: "Drop a video or import from Drive, Dropbox, OneDrive or a CSV", icon: "upload" },
  { href: "/#making", title: "Write captions", text: "One caption, tuned for each channel as you type", icon: "edit" },
  { href: "/#making", title: "Preview every channel", text: "See each video in its channel’s player first", icon: "phone" },
];
export const distributingLinks: NavLink[] = [
  { href: "/#distributing", title: "Connect channels", text: "TikTok, Instagram, YouTube and Facebook", icon: "plug" },
  { href: "/#distributing", title: "Fill the calendar", text: "Drag videos onto the days they go out", icon: "calendar" },
  { href: "/#distributing", title: "Team approval", text: "Comments, changes and approval before scheduling", icon: "check" },
];
/** The feature pages carried over from the previous site. */
export const featureLinks: NavLink[] = [
  { href: "/features", title: "All features", text: "Everything Profaily does, in one place" },
  { href: "/feature-content-operations", title: "Video planning & publishing", text: "Bulk upload, calendar and queue" },
  { href: "/feature-publishing-guardian", title: "Publishing Guardian", text: "Readiness checks and recovery" },
  { href: "/feature-conversation-automation", title: "Unified inbox", text: "Conversations across connected channels" },
  { href: "/feature-revenue-workflows", title: "Revenue workflows", text: "Capture, qualify and route leads" },
  { href: "/feature-content-intelligence", title: "Video performance insights", text: "Evidence-led video decisions" },
];

export const channelLinks: NavLink[] = [
  { href: "/tiktok", title: "TikTok", text: "Publish and schedule TikTok videos", glyph: "tiktok" },
  { href: "/instagram", title: "Instagram", text: "Reels from one upload", glyph: "instagram" },
  { href: "/youtube", title: "YouTube", text: "Shorts and longer videos", glyph: "youtube" },
  { href: "/facebook", title: "Facebook", text: "Videos to your Facebook Page", glyph: "facebook" },
];

export const madeForLinks: NavLink[] = [
  { href: "/made-for/creators", title: "Creators", text: "One upload, every channel", icon: "spark" },
  { href: "/made-for/businesses", title: "Businesses", text: "Roles and approvals for your team", icon: "users" },
  { href: "/made-for/agencies", title: "Agencies", text: "A brand for every client", icon: "layers" },
  { href: "/made-for/developers", title: "Developers", text: "An MCP server for your agents", icon: "plug" },
  { href: "/made-for/ai-first", title: "AI-first users", text: "Schedule from ChatGPT or Claude", icon: "chat" },
];

export const learnLinks: NavLink[] = [
  { href: "/blog", title: "Blog", text: "Guides on short-form video for business", icon: "text" },
  { href: "/contact", title: "Contact", text: "Talk to the Profaily team", icon: "chat" },
];

export const navMenus: NavMenu[] = [
  {
    label: "Features",
    columns: [
      { heading: "Making videos", links: makingLinks },
      { heading: "Distributing videos", links: distributingLinks },
    ],
    feature: {
      href: "/#ask-chatgpt",
      title: "Ask ChatGPT. Profaily schedules it.",
      text: "Draft, review and schedule from a conversation, under your team’s approval rules.",
      image: "/assets/app/mcp-4-review.jpg",
      alt: "Profaily showing a video waiting for a producer’s approval",
    },
    foot: { href: "/features", label: "See everything Profaily does" },
  },
  { label: "Channels", columns: [{ links: channelLinks }], align: "start" },
  { label: "Made for", columns: [{ links: madeForLinks }], align: "start" },
  { label: "Resources", columns: [{ links: learnLinks }], align: "start" },
];

export const footerGroups: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Product",
    links: [
      { href: "/#making", label: "Upload and import" },
      { href: "/#making", label: "Captions and previews" },
      { href: "/#distributing", label: "Channels and calendar" },
      { href: "/#distributing", label: "Team approval" },
      { href: "/#ask-chatgpt", label: "ChatGPT and Claude" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  { heading: "Channels", links: channelLinks.map((l) => ({ href: l.href, label: l.title })) },
  { heading: "Made for", links: madeForLinks.map((l) => ({ href: l.href, label: l.title })) },
  {
    heading: "Resources",
    links: [{ href: "/blog", label: "Blog" }],
  },
  {
    heading: "Company",
    links: [
      { href: "/contact", label: "Contact us" },
      { href: links.privacy, label: "Privacy" },
      { href: links.terms, label: "Terms" },
      { href: links.deletion, label: "Data deletion" },
    ],
  },
];

