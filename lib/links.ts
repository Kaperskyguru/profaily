import { isSoon } from "@/content/channels";
/** The app lives on its own subdomain; every CTA and legal link points there. */
export const APP_URL = (
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.useprofaily.com"
).replace(/\/$/, "");

/** The API that starts each sign-in provider (same as the app's oauthUrl, frontend/lib/auth.ts). */
export const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "https://api.useprofaily.com/api/v1").replace(/\/$/, "");

export type OAuthProvider = "google" | "tiktok" | "instagram" | "facebook";
/** The app's order and labels (frontend/lib/data.ts OAUTH_PROVIDER_ORDER / OAUTH_PROVIDER_LABEL). */
export const OAUTH_PROVIDERS = ([
  { id: "google", label: "Google" },
  { id: "tiktok", label: "TikTok" },
  { id: "instagram", label: "Instagram" },
  { id: "facebook", label: "Facebook" },
  // Instagram and Facebook sign-in stay hidden until Meta approves each (content/channels.ts).
] as { id: OAuthProvider; label: string }[]).filter((p) => !isSoon(p.id));
export const oauthUrl = (provider: OAuthProvider) => `${API_URL}/auth/${provider}`;

export const links = {
  app: `${APP_URL}/`,
  register: `${APP_URL}/auth/register`,
  login: `${APP_URL}/auth/login`,
  privacy: `${APP_URL}/privacy`,
  terms: `${APP_URL}/terms`,
  deletion: `${APP_URL}/deletion`,
  /** The public roadmap: what is coming, with an upvote on each. */
  roadmap: `${APP_URL}/roadmap`,
  /** Better Stack (Better Uptime) status page for the app and API. */
  status: "https://status.useprofaily.com",
};
