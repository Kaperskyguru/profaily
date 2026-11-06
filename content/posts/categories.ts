/**
 * The blog's topics, in the order the filter chips show them on /blog. A post's `category` must be one of these
 * names, written exactly; anything else fails the build with the allowed names listed. A topic gets a chip only
 * once a live post uses it. To add a topic, add it here.
 */
export const CATEGORIES = [
  { name: "Publishing", about: "Getting one video out to TikTok, Reels, Shorts and Facebook: formats, scheduling and cross-posting." },
  { name: "Platform rules", about: "How each platform judges reach: originality, watermarks, music rights, posting limits and policy changes." },
  { name: "Teams & agencies", about: "Approvals, client sign-off and roles for small teams handling many brands." },
  { name: "Audience & leads", about: "Turning views and comments into followers, conversations and customers." },
  { name: "Analytics", about: "Measuring what worked and deciding what to make next." },
  { name: "AI & automation", about: "Using AI assistants and automation to plan, caption and schedule video with a person still in charge." },
] as const;

export type Category = (typeof CATEGORIES)[number]["name"];

export const CATEGORY_NAMES: readonly string[] = CATEGORIES.map((c) => c.name);
