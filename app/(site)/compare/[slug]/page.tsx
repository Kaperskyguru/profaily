import { notFound } from "next/navigation";
import { CompareChecklistPage } from "@/components/templates/CompareChecklistPage";
import { comparisonsBySlug } from "@/content/compare";
import { pageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

function find(slug: string) {
  if (!Object.hasOwn(comparisonsBySlug, slug)) notFound();
  return comparisonsBySlug[slug];
}

export function generateStaticParams() {
  return Object.keys(comparisonsBySlug).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const c = find(slug);
  return pageMetadata({ title: c.meta.title, description: c.meta.description, path: `/compare/${slug}` });
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const c = find(slug);
  return <CompareChecklistPage c={c} />;
}
