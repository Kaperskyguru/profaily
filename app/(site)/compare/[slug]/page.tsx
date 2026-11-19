import { notFound } from "next/navigation";
import { ArticlePage, articleTitle } from "@/components/templates/ArticlePage";
import { postList } from "@/content/posts";
import { pageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

/** Comparison pages are posts whose frontmatter sets url: "/compare/<slug>" (see content/posts/load.ts). */
const comparisons = Object.fromEntries(
  postList.filter((p) => p.href.startsWith("/compare/")).map((p) => [p.href.slice("/compare/".length), p]),
);

function find(slug: string) {
  if (!Object.hasOwn(comparisons, slug)) notFound();
  return comparisons[slug];
}

export function generateStaticParams() {
  return Object.keys(comparisons).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const post = find(slug);
  return pageMetadata({ title: articleTitle(post), description: post.description, path: post.href });
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  return <ArticlePage post={find(slug)} />;
}
