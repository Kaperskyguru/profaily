import type { IconName } from "@/components/ui/Glyph";

/** Help center groups, in the order the /help index shows them. A help page's `section` must be one of these. */
export const HELP_SECTIONS: { name: string; id: string; icon: IconName; about: string }[] = [
  { name: "Connect your accounts", id: "connect", icon: "plug", about: "Link TikTok, Instagram and YouTube so Profaily can publish for you." },
  { name: "Posting", id: "posting", icon: "retry", about: "What to do when a video doesn't go out." },
  { name: "Your account and data", id: "account", icon: "shield", about: "Stay in control of what Profaily can reach." },
];

export const HELP_SECTION_NAMES: string[] = HELP_SECTIONS.map((s) => s.name);
