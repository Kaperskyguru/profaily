/**
 * Every Profaily feature a compare page lists, in the order the pricing page uses (content/pricing.tsx
 * `compareSections`), plus the publishing checks that run on every plan. One list for every rival, so
 * the rows never drift from what Profaily actually sells. The Facebook row shows only while the site's
 * Facebook switch is on (content/channels.ts FACEBOOK_LIVE).
 */
import { FACEBOOK_LIVE } from "../channels";

export type FeatureId =
  | "calendar" | "scheduling" | "queue" | "drafts" | "import"
  | "tiktok" | "instagram" | "youtube" | "facebook"
  | "captions" | "ytTitle" | "variables" | "images" | "ytImages"
  | "ready" | "fix" | "status" | "email" | "retry"
  | "team" | "roles" | "approvals" | "brandAccess"
  | "mcp" | "campaigns";

export type FeatureRow = { id: FeatureId; label: string; us: string };
export type FeatureGroup = { title: string; rows: FeatureRow[] };

export const featureGroups: FeatureGroup[] = [
  {
    title: "Scheduling",
    rows: [
      { id: "calendar", label: "Calendar", us: "Everything scheduled, by day and week" },
      { id: "scheduling", label: "Schedule for a time or the next slot", us: "Pick a time, or take the next queue slot" },
      { id: "queue", label: "Queue slots", us: "A weekly rhythm; videos fill the next free slot" },
      { id: "drafts", label: "Drafts and tags", us: "Keep videos as drafts and label them" },
      { id: "import", label: "Import videos in bulk", us: "Google Drive, OneDrive, Dropbox or a CSV file" },
    ],
  },
  {
    title: "Channels",
    rows: [
      { id: "tiktok", label: "TikTok", us: "Published straight to TikTok" },
      { id: "instagram", label: "Instagram Reels", us: "Published straight to Instagram" },
      { id: "youtube", label: "YouTube", us: "Shorts, and longer videos too" },
      ...(FACEBOOK_LIVE ? [{ id: "facebook" as const, label: "Facebook Pages", us: "Reels and longer videos, to each Page" }] : []),
    ],
  },
  {
    title: "Videos and captions",
    rows: [
      { id: "captions", label: "Its own caption on each platform", us: "Write once, then change it for any platform" },
      { id: "ytTitle", label: "YouTube title", us: "Its own title, or the caption's first sentence" },
      { id: "variables", label: "Caption variables", us: "Values that change per platform" },
      { id: "images", label: "Images and carousels", us: "As a carousel or one post per file" },
      { id: "ytImages", label: "Images to YouTube as a video", us: "One tap turns them into a sliding video" },
    ],
  },
  {
    title: "Before and after it posts",
    rows: [
      { id: "ready", label: "Checks each platform before you schedule", us: "Each platform marked Ready, or told what to fix" },
      { id: "fix", label: "One-tap fix for a refused file", us: "Compress for Instagram, Convert for TikTok" },
      { id: "status", label: "Live status for each platform", us: "With the platform's own reason when one fails" },
      { id: "email", label: "Email when a platform fails", us: "While the other platforms carry on" },
      { id: "retry", label: "Retry only the platform that failed", us: "The platforms that posted aren't touched" },
    ],
  },
  {
    title: "Collaboration",
    rows: [
      { id: "team", label: "Shared team", us: "On the Business plan" },
      { id: "roles", label: "Roles", us: "Viewer, Editor, Producer and Admin" },
      { id: "approvals", label: "Approval before it posts", us: "An Editor's video waits for a Producer or Admin" },
      { id: "brandAccess", label: "Choose what each person can reach", us: "Per brand" },
    ],
  },
  {
    title: "AI apps",
    rows: [
      { id: "mcp", label: "Schedule from ChatGPT or Claude (MCP)", us: "Drafts, review and scheduling" },
      { id: "campaigns", label: "Plan a whole campaign with AI", us: "Nothing is scheduled until you confirm" },
    ],
  },
];

export const featureCount = featureGroups.reduce((n, g) => n + g.rows.length, 0);
