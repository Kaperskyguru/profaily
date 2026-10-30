import { CtaBand } from "./CtaBand";

/** Older call sites pass the tool/feature banner copy; it renders as the shared CTA band. */
export function Banner({ heading, body }: { eyebrow?: string; heading: string; body: string }) {
  return <CtaBand heading={heading} lede={body} />;
}
