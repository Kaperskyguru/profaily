import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { OgUrl } from "@/components/ui/OgUrl";
import { pageMetadata } from "@/lib/metadata";
import { CapStrip } from "@/components/sections/home/CapStrip";
import { ChannelsGrid } from "@/components/sections/home/ChannelsGrid";
import { ChannelsShowcase } from "@/components/sections/home/ChannelsShowcase";
import { ComposerShowcase } from "@/components/sections/home/ComposerShowcase";
import { FeatureSuite } from "@/components/sections/home/FeatureSuite";
import { Hero } from "@/components/sections/home/Hero";
import { HomeBanner } from "@/components/sections/home/HomeBanner";
import { ValueCards } from "@/components/sections/home/ValueCards";
import { WalkthroughModal } from "@/components/sections/home/WalkthroughModal";
import { WorkflowSteps } from "@/components/sections/home/WorkflowSteps";

export const metadata: Metadata = pageMetadata({
  title: "Profaily | The operating system for short-form video marketing",
  description: "Plan, publish, automate conversations, qualify leads, and learn from short-form video performance in one connected workspace.",
  path: "/",
});

export default function HomePage() {
  return (
    <PageShell>
      <OgUrl path="/" />
      <main>
        <Hero />
        <WalkthroughModal />
        {"\n"}
        <CapStrip />
        {"\n"}
        <ValueCards />
        {"\n"}
        <ChannelsShowcase />
        {"\n"}
        <ComposerShowcase />
        {"\n"}
        <WorkflowSteps />
        {"\n"}
        <FeatureSuite />
        {"\n"}
        <ChannelsGrid />
        {"\n"}
        <HomeBanner />
      </main>
    </PageShell>
  );
}
