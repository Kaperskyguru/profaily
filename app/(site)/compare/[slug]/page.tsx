import { notFound } from "next/navigation";
import { ComparePage } from "@/components/templates/ComparePage";
import { comparisons, type ComparisonSlug } from "@/content/comparisons";
import { pageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

function find(slug: string) {
  if (!Object.hasOwn(comparisons, slug)) notFound();
  return comparisons[slug as ComparisonSlug];
}

export function generateStaticParams() {
  return Object.keys(comparisons).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const { meta } = find(slug);
  return pageMetadata({
    ...meta,
    path: `/compare/${slug}`,
    ogTitle: meta.title,
    ogDescription: meta.description,
    ogType: "website",
  });
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  return <ComparePage slug={slug as ComparisonSlug} content={find(slug)} />;
}
