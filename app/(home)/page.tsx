import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { OgUrl } from "@/components/ui/OgUrl";
import { homeMeta } from "@/content/home";
import { pageMetadata } from "@/lib/metadata";
import { HeroBehavior } from "@/components/behavior/HeroBehavior";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { TrustedBy } from "@/components/sections/home/TrustedBy";
import { FeatureBand } from "@/components/sections/home/FeatureBand";
import { DistributingBand, FeatureGroups } from "@/components/sections/home/FeatureGroups";
import { McpSection } from "@/components/sections/home/McpCard";
import { Closing } from "@/components/sections/home/Closing";

/**
 * "Distributing videos" as its own deep-green section (true), or as the second grey group under "Making videos" (false).
 * TO REVERT, set this to false.
 */
const DISTRIBUTING_AS_BAND = true;
/** The band's ground: "forest" (deep green, like the feature band) or "light" (white page, like the grey groups). */
const DISTRIBUTING_TONE: "forest" | "light" = "light";

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
        {DISTRIBUTING_AS_BAND ? (
          <>
            <FeatureGroups only="making" />
            <DistributingBand tone={DISTRIBUTING_TONE} />
          </>
        ) : (
          <FeatureGroups />
        )}
        {/* Hidden for now: <Testimonials /> ("Creators love Profaily") returns once there are real customer quotes in content/testimonials.ts. */}
        <Closing />
      </main>
      <HeroBehavior />
    </PageShell>
  );
}
