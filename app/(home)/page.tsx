import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { OgUrl } from "@/components/ui/OgUrl";
import { pageMetadata } from "@/lib/metadata";
import { CustomerProof } from "@/components/sections/home/CustomerProof";
import { AIWorkflow } from "@/components/sections/home/AIWorkflow";
import { ChannelsGrid } from "@/components/sections/home/ChannelsGrid";
import { FeatureSuite } from "@/components/sections/home/FeatureSuite";
import { Hero } from "@/components/sections/home/Hero";
import { HomeBanner } from "@/components/sections/home/HomeBanner";
import { ValueCards } from "@/components/sections/home/ValueCards";
import { ProductScreenshots } from "@/components/sections/home/ProductScreenshots";

export const metadata: Metadata = pageMetadata({
  title: "Profaily | Keep video publishing on track",
  description: "Plan, prepare, review, and schedule short-form videos for TikTok, Instagram Reels, YouTube Shorts, and Facebook—with your team in one place.",
  path: "/",
});

export default function HomePage() {
  return (
    <PageShell>
      <OgUrl path="/" />
      <main className="home-page">
        <Hero />
        <CustomerProof />
        <ValueCards />
        <ProductScreenshots />
        <AIWorkflow />
        <FeatureSuite />
        <ChannelsGrid />
        <HomeBanner />
      </main>
    </PageShell>
  );
}
