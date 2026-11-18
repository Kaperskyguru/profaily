import { notFound } from "next/navigation";
import { HelpArticlePage, helpTitle } from "@/components/templates/HelpArticlePage";
import { helpPages } from "@/content/help";
import { pageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

function find(slug: string) {
  if (!Object.hasOwn(helpPages, slug)) notFound();
  return helpPages[slug];
}

export function generateStaticParams() {
  return Object.keys(helpPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const page = find(slug);
  return pageMetadata({ title: helpTitle(page), description: page.description, path: `/help/${slug}` });
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  return <HelpArticlePage page={find(slug)} />;
}
