/**
 * The blog's categories. A post's `category` must be one of these names, written exactly as here; anything else
 * fails the build with the list of names. The blog index shows a filter chip for each category that has at least
 * one live post, in this order.
 *
 * Each category answers one kind of question a reader brings, so a new post has one obvious home:
 *   Platform guides      What are TikTok's, Instagram's, YouTube's or Facebook's rules, limits and settings?
 *   Publishing workflow  How do I get the same video out everywhere, on a schedule, without redoing work?
 *   Teams & agencies     How do several people (or a client) review and approve a video before it goes out?
 *   AI & automation      How can Claude, ChatGPT or other tools do the repetitive part, and stay in check?
 *   Growth & strategy    What should I make, how should it read, and how do I know it worked?
 *   Inside Profaily      Launches, what's new, how we build and why: news about Profaily itself.
 */
export const CATEGORIES = [
  "Platform guides",
  "Publishing workflow",
  "Teams & agencies",
  "AI & automation",
  "Growth & strategy",
  "Inside Profaily",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const isCategory = (v: string): v is Category => (CATEGORIES as readonly string[]).includes(v);
