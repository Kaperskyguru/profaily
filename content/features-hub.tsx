import { type FeatureContent, features } from "@/content/features";

export const featuresHubMeta = {
  title: "Features | Profaily",
  description:
    "Explore every Profaily capability, from video planning and publishing reliability to conversations, leads, and video performance insights.",
  path: "/features",
};

/**
 * The hub lists each feature page as a group. Its cards are that page's capability items (title, body),
 * linking to `${path}#${id}`, so the hub and the feature pages cannot drift apart.
 */
export const featureGroups: FeatureContent[] = [
  features.contentOperations,
  features.publishingGuardian,
  features.conversationAutomation,
  features.revenueWorkflows,
  features.contentIntelligence,
];
