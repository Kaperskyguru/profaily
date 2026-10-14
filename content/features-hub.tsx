import type { Platform } from "@/components/ui/icons";

export const featuresHubMeta = {
  title: "Features | Profaily",
  description:
    "Explore every Profaily capability, from video planning and publishing reliability to conversations, leads, and video performance insights.",
  path: "/features",
};

export type FeatureGroup = {
  title: string;
  href: string;
  /** [anchor, label] pairs; the number badge is derived from the position. */
  items: [string, string][];
};

export const featureGroups: FeatureGroup[] = [
  {
    title: "Video planning & publishing",
    href: "/feature-content-operations",
    items: [
      ["bulk-upload", "Bulk video upload"],
      ["csv-import", "Structured CSV intake"],
      ["validation-review", "Validation and review"],
      ["calendar-queue", "Calendar and queue"],
      ["bulk-actions", "Post editing and bulk actions"],
      ["publishing-history", "Publishing lifecycle and history"],
    ],
  },
  {
    title: "Publishing Guardian",
    href: "/feature-publishing-guardian",
    items: [
      ["preflight", "Preflight checks"],
      ["account-health", "Account health"],
      ["publishing-lifecycle", "Publishing lifecycle"],
      ["safe-retries", "Safe retries"],
      ["reconciliation", "Outcome reconciliation"],
      ["action-queue", "Action-required queue"],
    ],
  },
  {
    title: "Unified inbox",
    href: "/feature-conversation-automation",
    items: [
      ["unified-inbox", "Unified social inbox"],
      ["response-rules", "Response rules"],
      ["ai-suggestions", "AI-suggested answers"],
      ["faq-automation", "FAQ automation"],
      ["comment-to-dm", "Comment-to-DM handoff"],
      ["lead-qualification", "Conversation qualification"],
      ["human-handoff", "Human inbox and takeover"],
      ["audit-safety", "Controls and audit trail"],
    ],
  },
  {
    title: "Revenue workflows",
    href: "/feature-revenue-workflows",
    items: [
      ["lead-capture", "Structured lead capture"],
      ["lead-scoring", "Lead qualification and scoring"],
      ["lead-routing", "Ownership and routing"],
      ["booking-sale", "Booking and sale handoff"],
      ["crm-connection", "CRM connection"],
      ["content-attribution", "Video-to-outcome attribution"],
    ],
  },
  {
    title: "Video performance insights",
    href: "/feature-content-intelligence",
    items: [
      ["performance-analytics", "Performance analytics"],
      ["audience-signals", "Video and audience signals"],
      ["evidence-recommendations", "Evidence-backed recommendations"],
      ["sample-confidence", "Sample-size context"],
      ["content-ideas", "Video ideas"],
      ["experiments", "Experiments and iteration"],
    ],
  },
];

export const hubPlatforms: { platform: Platform; name: string; href: string; gradientId?: string; body: string }[] = [
  {
    platform: "tiktok",
    name: "TikTok",
    href: "/tiktok",
    body: "Prepare short-form video for TikTok, review the controls available to your connected account, schedule or publish, and follow its status.",
  },
  {
    platform: "instagram",
    name: "Instagram",
    href: "/instagram",
    gradientId: "ig-mark-3-instagram",
    body: "Keep Instagram Reels in the same video-first operation as your other channels.",
  },
  {
    platform: "youtube",
    name: "YouTube",
    href: "/youtube",
    body: "Prepare the video, title, description, audience details, and visibility for YouTube.",
  },
  {
    platform: "facebook",
    name: "Facebook",
    href: "/facebook",
    body: "Prepare Reels and videos for the right Facebook Page, set the Page-level details, schedule with the shared video calendar, and track each result.",
  },
];
