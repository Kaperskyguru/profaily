/**
 * Until the public launch (8 December 2026) the whole site is one waitlist page: middleware.ts sends
 * every URL to it. Set NEXT_PUBLIC_LAUNCHED=1 on launch day and the full site comes back.
 * The app's own pages (app.useprofaily.com) are not affected.
 */
export const LAUNCHED = process.env.NEXT_PUBLIC_LAUNCHED === "1";
