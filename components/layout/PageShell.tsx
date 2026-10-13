import { LazyVideoBehavior } from "@/components/behavior/LazyVideoBehavior";
import { NavBehavior } from "@/components/behavior/NavBehavior";
import { RevealBehavior } from "@/components/behavior/RevealBehavior";
import { VideoModalBehavior } from "@/components/behavior/VideoModalBehavior";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function PageShell({ children, toolsIntro }: { children: React.ReactNode; toolsIntro?: string }) {
  return (
    <>
      <SiteHeader toolsIntro={toolsIntro} />
      {children}
      <SiteFooter />
      <NavBehavior />
      <VideoModalBehavior />
      <LazyVideoBehavior />
      <RevealBehavior />
    </>
  );
}
