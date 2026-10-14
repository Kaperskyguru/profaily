import { notFound } from "next/navigation";
import { ArticlePage, articleTitle } from "@/components/templates/ArticlePage";
import { posts } from "@/content/posts";
import { pageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

function find(slug: string) {
  if (!Object.hasOwn(posts, slug)) notFound();
  return posts[slug];
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const post = find(slug);
  return pageMetadata({ title: articleTitle(post), description: post.description, path: `/blog/${slug}` });
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  return <ArticlePage post={find(slug)} />;
}
