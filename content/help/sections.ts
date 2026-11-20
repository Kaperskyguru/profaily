import type { IconName } from "@/components/ui/Glyph";
import { channels } from "@/content/channels";

/**
 * Help center topics, in the order the /help index shows them (Paddle's Start → Sell → Manage → Grow → Legal, in
 * our customers' words). A help page's `section` must be one of these names; each topic has its own page at
 * /help/topics/<id>.
 */
export const HELP_SECTIONS: { name: string; id: string; icon: IconName; about: string }[] = [
  { name: "Get started", id: "get-started", icon: "spark", about: `New to Profaily? Start your trial and connect ${channels}.` },
  { name: "Post videos", id: "post-videos", icon: "calendar", about: "Schedule and publish your videos, and fix one that didn't go out." },
  { name: "Teams and brands", id: "teams-and-brands", icon: "users", about: "Bring in your team, approve videos before they post, and keep each business or client separate." },
  { name: "Plans and billing", id: "plans-and-billing", icon: "tag", about: "Your trial, your plan, payments and cancelling." },
  { name: "Privacy and security", id: "privacy-and-security", icon: "shield", about: "Stay in control of your accounts and your data." },
];

export const HELP_SECTION_NAMES: string[] = HELP_SECTIONS.map((s) => s.name);
