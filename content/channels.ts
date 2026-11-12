/**
 * Instagram and Facebook stay "Coming soon" until Meta approves the app (the app's own switch is META_APPROVED).
 * Set NEXT_PUBLIC_META_LIVE=1 to turn every mention on the site back into a live channel.
 * The blog post "post-to-tiktok-reels-shorts-at-the-same-time" is plain markdown and needs its own edit.
 */
export const META_LIVE = process.env.NEXT_PUBLIC_META_LIVE === "1";
export const SOON = "Coming soon";

/** "TikTok, Instagram, YouTube and Facebook" once Meta is live; until then only the two live channels. */
export const channels = META_LIVE
  ? "TikTok, Instagram, YouTube and Facebook"
  : "TikTok and YouTube";

/** The same, naming Reels. */
export const channelsReels = META_LIVE
  ? "TikTok, Instagram Reels, YouTube and Facebook"
  : "TikTok and YouTube";

/** True for a channel that is not live yet. */
export const isSoon = (key: string) => !META_LIVE && (key === "instagram" || key === "facebook");
