import { FanBehavior } from "@/components/behavior/FanBehavior";
import { LazyVideoBehavior } from "@/components/behavior/LazyVideoBehavior";
import { NavBehavior } from "@/components/behavior/NavBehavior";
import { RevealBehavior } from "@/components/behavior/RevealBehavior";
import { VideoModalBehavior } from "@/components/behavior/VideoModalBehavior";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

/** Every page: header, the page itself (skip-link target), footer, and the small client behaviours. */
/** `fitLine={false}` keeps the footer as it was, with no positioning line (the home page). */
export function PageShell({ children, fitLine = true }: { children: React.ReactNode; toolsIntro?: string; spaced?: boolean | "end"; fitLine?: boolean }) {
  return (
    <>
      <SiteHeader />
      <div id="main" tabIndex={-1}>{children}</div>
      <SiteFooter fitLine={fitLine} />
      <NavBehavior />
      <VideoModalBehavior />
      <LazyVideoBehavior />
      <RevealBehavior />
      <FanBehavior />
    </>
  );
}
