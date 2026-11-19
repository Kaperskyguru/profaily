import { channelsReels, FACEBOOK_LIVE } from "./channels";

/**
 * What Profaily does and doesn't do yet, in one place, so pages that compare Profaily never go stale.
 * When something ships, set it live here (Facebook follows NEXT_PUBLIC_FACEBOOK_LIVE / NEXT_PUBLIC_META_LIVE).
 * Every post that mentions these through the tokens below updates on the next build:
 *
 *   {{channels}}                         the live channels, e.g. "TikTok, Instagram Reels and YouTube"
 *   {{missing: analytics, inbox}}        the ones not live yet, as a list: "analytics or an inbox"
 *   {{status: analytics, inbox}}         a table cell: "Not yet", "Yes", or "Yes: analytics. Not yet: an inbox"
 *   {{if-missing: analytics, inbox}} … {{/if-missing}}
 *                                        the text between shows only while at least one of them is not live
 *   faq item `ifMissing: [analytics]`    the question shows only while at least one of them is not live
 *
 * A key that isn't listed here fails the build, so a typo can't hide a sentence.
 */
export const capabilities = {
  analytics: { name: "analytics", live: false },
  inbox: { name: "an inbox", live: false },
  "comment-automation": { name: "comment automation", live: false },
  facebook: { name: "Facebook", live: FACEBOOK_LIVE },
  linkedin: { name: "LinkedIn", live: false },
  x: { name: "X", live: false },
} as const;

export type Capability = keyof typeof capabilities;

const list = (names: string[], joiner: string) =>
  names.length <= 1 ? names.join("") : `${names.slice(0, -1).join(", ")} ${joiner} ${names[names.length - 1]}`;

/** Parses "analytics, inbox" into known keys; `fail` gets the message for an unknown one. */
export function capabilityKeys(raw: string | string[], fail: (msg: string) => never): Capability[] {
  const keys = (Array.isArray(raw) ? raw : raw.split(",")).map((k) => String(k).trim()).filter(Boolean);
  for (const k of keys) if (!(k in capabilities)) fail(`unknown capability "${k}" (known: ${Object.keys(capabilities).join(", ")}; see content/capabilities.ts)`);
  return keys as Capability[];
}

export const anyMissing = (keys: Capability[]) => keys.some((k) => !capabilities[k].live);

/** Replaces the tokens above in a post's text. */
export function resolveCapabilities(text: string, fail: (msg: string) => never): string {
  return text
    .replace(/\{\{if-missing:([^}]*)\}\}([\s\S]*?)\{\{\/if-missing\}\}/g, (_, keys: string, inner: string) =>
      anyMissing(capabilityKeys(keys, fail)) ? inner : "")
    .replace(/\{\{missing:([^}]*)\}\}/g, (_, keys: string) => {
      const names = capabilityKeys(keys, fail).filter((k) => !capabilities[k].live).map((k) => capabilities[k].name);
      if (!names.length) fail(`{{missing:${keys}}} is now empty because everything in it is live: wrap the sentence in {{if-missing:…}} or rewrite it`);
      return list(names, "or");
    })
    .replace(/\{\{status:([^}]*)\}\}/g, (_, keys: string) => {
      const ks = capabilityKeys(keys, fail);
      const yes = ks.filter((k) => capabilities[k].live).map((k) => capabilities[k].name);
      const no = ks.filter((k) => !capabilities[k].live).map((k) => capabilities[k].name);
      if (!yes.length) return "Not yet";
      if (!no.length) return "Yes";
      return `Yes: ${list(yes, "and")}. Not yet: ${list(no, "and")}`;
    })
    .replace(/\{\{channels\}\}/g, channelsReels);
}
