import { ToolPage } from "@/components/templates/ToolPage";
import { tools, type ToolSlug } from "@/content/tools";
import { pageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(tools).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  return pageMetadata(tools[slug as ToolSlug].meta);
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  return <ToolPage slug={slug as ToolSlug} content={tools[slug as ToolSlug]} />;
}
