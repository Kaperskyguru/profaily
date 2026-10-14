import { PageShell } from "@/components/layout/PageShell";
import { PlanComparison } from "@/components/sections/pricing/PlanComparison";
import { PricingFinalCta } from "@/components/sections/pricing/PricingFinalCta";
import { PricingHero } from "@/components/sections/pricing/PricingHero";
import { PricingTestimonials } from "@/components/sections/pricing/PricingTestimonials";
import { PricingWorkflow } from "@/components/sections/pricing/PricingWorkflow";
import { Faq } from "@/components/sections/shared/Faq";
import { PlatformBand } from "@/components/sections/shared/PlatformBand";
import { OgUrl } from "@/components/ui/OgUrl";
import { pricingFaq, pricingMeta } from "@/content/pricing";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(pricingMeta);

export default function Page() {
  return (
    <PageShell spaced="end">
      <OgUrl path={pricingMeta.path} />
      <main>
        {" "}
        <PricingHero />
        {" "}
        <PlatformBand ariaLabel="Supported video platforms" lead="Publish across" spaced />
        {" "}
        <PlanComparison />
        {" "}
        <PricingWorkflow />
        {" "}
        <PricingTestimonials />
        {" "}
        <Faq
          className="faq pricing-faq"
          spaced
          eyebrow="FAQ"
          heading="Choose the right way to work."
          microcopy="Both plans start with a five-day free trial. There is no free plan."
          items={pricingFaq}
        />
        {" "}
        <PricingFinalCta />
        {" "}
      </main>
    </PageShell>
  );
}
