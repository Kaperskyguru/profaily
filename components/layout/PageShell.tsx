import { FanBehavior } from "@/components/behavior/FanBehavior";
import { LazyVideoBehavior } from "@/components/behavior/LazyVideoBehavior";
import { NavBehavior } from "@/components/behavior/NavBehavior";
import { RevealBehavior } from "@/components/behavior/RevealBehavior";
import { VideoModalBehavior } from "@/components/behavior/VideoModalBehavior";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

/** Every page: header, the page itself (skip-link target), footer, and the small client behaviours. */
export function PageShell({ children }: { children: React.ReactNode; toolsIntro?: string; spaced?: boolean | "end" }) {
  return (
    <>
      <SiteHeader />
      <div id="main" tabIndex={-1}>{children}</div>
      <SiteFooter />
      <NavBehavior />
      <VideoModalBehavior />
      <LazyVideoBehavior />
      <RevealBehavior />
      <FanBehavior />
    </>
  );
}
