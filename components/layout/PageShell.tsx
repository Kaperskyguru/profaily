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
  /** Source page has newline text nodes at the start and end of <body> (the compare alternatives). */
  spaced?: boolean;
}) {
  return (
    <>
      {spaced && " "}
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
