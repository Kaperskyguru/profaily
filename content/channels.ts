/**
 * Instagram and Facebook each stay "Coming soon" until Meta approves them (the app's
 * own switches are META_APPROVED, INSTAGRAM_APPROVED and FACEBOOK_APPROVED).
 * - NEXT_PUBLIC_META_LIVE=1 turns both back into live channels (the original copy).
 * - NEXT_PUBLIC_INSTAGRAM_LIVE=1 or NEXT_PUBLIC_FACEBOOK_LIVE=1 turns on one.
 * Plain markdown (blog posts, help pages) does not read these switches; help/connect-facebook.md and the
 * Profaily paragraph in "post-to-tiktok-reels-shorts-at-the-same-time" assume Facebook is live.
 */
export const META_LIVE = process.env.NEXT_PUBLIC_META_LIVE === "1";
export const INSTAGRAM_LIVE = META_LIVE || process.env.NEXT_PUBLIC_INSTAGRAM_LIVE === "1";
export const FACEBOOK_LIVE = META_LIVE || process.env.NEXT_PUBLIC_FACEBOOK_LIVE === "1";
export const SOON = "Coming soon";

/**
 * Picks the wording for the channels that are live: `both` is the original copy,
 * `instagram` names Instagram but not Facebook, `none` names only TikTok and YouTube.
 * `facebook` (Facebook but not Instagram) falls back to `none` until written.
 */
export const liveCopy = (v: { both: string; instagram: string; none: string; facebook?: string }): string =>
  INSTAGRAM_LIVE && FACEBOOK_LIVE ? v.both
  : INSTAGRAM_LIVE ? v.instagram
  : FACEBOOK_LIVE ? (v.facebook ?? v.none)
  : v.none;

/** The live channels, e.g. "TikTok, Instagram and YouTube". */
export const channels = liveCopy({
  both: "TikTok, Instagram, YouTube and Facebook",
  instagram: "TikTok, Instagram and YouTube",
  facebook: "TikTok, YouTube and Facebook",
  none: "TikTok and YouTube",
});

/** The same, naming Reels. */
export const channelsReels = liveCopy({
  both: "TikTok, Instagram Reels, YouTube and Facebook",
  instagram: "TikTok, Instagram Reels and YouTube",
  facebook: "TikTok, YouTube and Facebook",
  none: "TikTok and YouTube",
});

/** True for a channel that is not live yet. */
export const isSoon = (key: string) => (key === "instagram" && !INSTAGRAM_LIVE) || (key === "facebook" && !FACEBOOK_LIVE);
