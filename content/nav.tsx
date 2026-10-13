import type { Platform } from "@/components/ui/icons";
import { links } from "@/lib/links";

export type MegaLinkData = { href: string; title: string; text: string; icon: string | { platform: Platform } };
export type MegaColumn = { heading: string; links: MegaLinkData[] };

export const featuresMenu: MegaColumn[] = [
  { heading: "Plan & publish", links: [
    { href: "/feature-content-operations", icon: "▦", title: "Video planning & publishing", text: "Bulk video upload, calendar, queue" },
    { href: "/feature-publishing-guardian", icon: "✓", title: "Publishing Guardian", text: "Readiness checks and recovery" },
  ] },
  { heading: "Engage & grow", links: [
    { href: "/feature-conversation-automation", icon: "◌", title: "Unified inbox", text: "Conversations and handoff across connected socials" },
    { href: "/feature-revenue-workflows", icon: "↗", title: "Revenue workflows", text: "Capture, qualify, route leads" },
    { href: "/feature-content-intelligence", icon: "⌁", title: "Video performance insights", text: "Evidence-led video decisions" },
  ] },
  { heading: "Channels", links: [
    { href: "/tiktok", icon: { platform: "tiktok" }, title: "TikTok", text: "TikTok publishing and growth" },
    { href: "/instagram", icon: { platform: "instagram" }, title: "Instagram", text: "Instagram publishing and growth" },
    { href: "/youtube", icon: { platform: "youtube" }, title: "YouTube", text: "YouTube publishing and growth" },
    { href: "/facebook", icon: { platform: "facebook" }, title: "Facebook", text: "Facebook publishing and growth" },
  ] },
];

export const toolsMenu: MegaColumn = { heading: "Social tools", links: [
  { href: "/tools/auto-cross-posting", icon: "↗", title: "Auto Cross Post", text: "Distribute new videos across connected channels" },
  { href: "/tools/profile-manager", icon: "◉", title: "Profile Manager", text: "Update and track connected social profiles" },
  { href: "/tools/smart-repost", icon: "↻", title: "Smart Repost", text: "Refresh and redistribute videos from your Profaily library" },
] };

export const DEFAULT_TOOLS_INTRO = "Tools for video reuse, publishing, and profile management.";

export const compareMenu: MegaColumn[] = [
  { heading: "Publishing platforms", links: [
    { href: "/compare/buffer-alternative", icon: "B", title: "Profaily vs Buffer", text: "Flexible publishing, channel pricing, and a free plan" },
    { href: "/compare/later-alternative", icon: "L", title: "Profaily vs Later", text: "Visual planning, scheduling, and media tools" },
  ] },
  { heading: "Social operations", links: [
    { href: "/compare/metricool-alternative", icon: "M", title: "Profaily vs Metricool", text: "Multi-brand publishing, analytics, and reporting" },
    { href: "/compare/hootsuite-alternative", icon: "H", title: "Profaily vs Hootsuite", text: "Broad social management, inbox, and listening" },
  ] },
];

export const footerGroups: { heading: string; links: { href: string; label: string }[] }[] = [
  { heading: "Product", links: [
    { href: "/features", label: "All features" },
    { href: "/feature-content-operations", label: "Video planning & publishing" },
    { href: "/feature-publishing-guardian", label: "Publishing Guardian" },
    { href: "/pricing", label: "Pricing" },
  ] },
  { heading: "Tools", links: [
    { href: "/tools/auto-cross-posting", label: "Auto Cross Post" },
    { href: "/tools/profile-manager", label: "Profile Manager" },
    { href: "/tools/smart-repost", label: "Smart Repost" },
  ] },
  { heading: "Platforms", links: [
    { href: "/tiktok", label: "TikTok" }, { href: "/instagram", label: "Instagram" },
    { href: "/youtube", label: "YouTube" }, { href: "/facebook", label: "Facebook" },
  ] },
  { heading: "Compare", links: [
    { href: "/compare", label: "All comparisons" },
    { href: "/compare/buffer-alternative", label: "Profaily vs Buffer" },
    { href: "/compare/later-alternative", label: "Profaily vs Later" },
    { href: "/compare/metricool-alternative", label: "Profaily vs Metricool" },
    { href: "/compare/hootsuite-alternative", label: "Profaily vs Hootsuite" },
  ] },
  { heading: "Engage & grow", links: [
    { href: "/feature-conversation-automation", label: "Unified inbox" },
    { href: "/feature-revenue-workflows", label: "Revenue workflows" },
    { href: "/feature-content-intelligence", label: "Video performance insights" },
  ] },
  { heading: "Resources", links: [
    { href: "/blog", label: "Blog" },
    { href: "/blog/one-video-four-platforms", label: "One video, four platforms" },
    { href: "/blog/short-form-video-publishing-workflow", label: "Publishing workflow" },
    { href: "/blog/turn-video-comments-into-leads", label: "Comments into leads" },
    { href: "/blog/short-form-video-measurement", label: "Measure video performance" },
    { href: "/blog/short-form-video-approval-workflow", label: "Team approval workflow" },
  ] },
  { heading: "Legal", links: [
    { href: links.privacy, label: "Privacy" },
    { href: links.terms, label: "Terms" },
    { href: "/contact", label: "Contact Us" },
  ] },
];
