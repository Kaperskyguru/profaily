/** Help center groups, in the order the /help index shows them. A help page's `section` must be one of these. */
export const HELP_SECTIONS = [
  { name: "Connect your accounts", about: "Link TikTok, Instagram and YouTube so Profaily can publish for you." },
  { name: "Posting", about: "What to do when a video doesn't go out." },
  { name: "Your account and data", about: "Stay in control of what Profaily can reach." },
] as const;

export const HELP_SECTION_NAMES: string[] = HELP_SECTIONS.map((s) => s.name);
