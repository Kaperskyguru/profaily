import { FeaturePage } from "@/components/templates/FeaturePage";
import { features } from "@/content/features";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(features.revenueWorkflows.meta);
export default function Page() { return <FeaturePage content={features.revenueWorkflows} />; }
