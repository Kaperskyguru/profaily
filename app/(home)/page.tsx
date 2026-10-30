import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { OgUrl } from "@/components/ui/OgUrl";
import { homeMeta } from "@/content/home";
import { pageMetadata } from "@/lib/metadata";
import { HeroBehavior } from "@/components/behavior/HeroBehavior";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { TrustedBy } from "@/components/sections/home/TrustedBy";
import { FeatureBand } from "@/components/sections/home/FeatureBand";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { FeatureGroups } from "@/components/sections/home/FeatureGroups";
import { McpSection } from "@/components/sections/home/McpCard";
import { Closing } from "@/components/sections/home/Closing";

export const metadata: Metadata = pageMetadata(homeMeta);

export default function HomePage() {
  return (
    <PageShell>
      <OgUrl path="/" title={homeMeta.title} description={homeMeta.description} />
      <main>
        <HomeHero />
        <TrustedBy />
        <FeatureBand />
        <McpSection />
        <FeatureGroups />
        <Testimonials />
        <Closing />
      </main>
      <HeroBehavior />
    </PageShell>
  );
}
