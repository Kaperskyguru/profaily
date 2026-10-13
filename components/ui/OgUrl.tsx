import { ORIGIN } from "@/lib/metadata";

/** og:url for pages that carry no other og tags (Metadata API would auto-add og:title/description). */
export function OgUrl({ path }: { path: string }) {
  return <meta property="og:url" content={ORIGIN + path} />;
}
