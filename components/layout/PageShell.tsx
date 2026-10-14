import { LazyVideoBehavior } from "@/components/behavior/LazyVideoBehavior";
import { NavBehavior } from "@/components/behavior/NavBehavior";
import { RevealBehavior } from "@/components/behavior/RevealBehavior";
import { VideoModalBehavior } from "@/components/behavior/VideoModalBehavior";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function PageShell({
  children,
  toolsIntro,
  spaced,
}: {
  children: React.ReactNode;
  toolsIntro?: string;
  /**
   * Source page has newline text nodes at the edges of <body>: `true` for both start and end (the
   * compare alternatives), `"end"` for only after the footer (pricing).
   */
  spaced?: boolean | "end";
}) {
  return (
    <>
      {spaced === true && " "}
      <SiteHeader toolsIntro={toolsIntro} />
      {children}
      <SiteFooter />
      {spaced && " "}
      <NavBehavior />
      <VideoModalBehavior />
      <LazyVideoBehavior />
      <RevealBehavior />
    </>
  );
}
