/** The app lives on its own subdomain; every CTA and legal link points there. */
export const APP_URL = (
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.useprofaily.com"
).replace(/\/$/, "");

export const links = {
  register: `${APP_URL}/auth/register`,
  login: `${APP_URL}/auth/login`,
  privacy: `${APP_URL}/privacy`,
  terms: `${APP_URL}/terms`,
  deletion: `${APP_URL}/deletion`,
};
