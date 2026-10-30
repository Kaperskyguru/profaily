import { notFound } from "next/navigation";
import { AudiencePage } from "@/components/templates/AudiencePage";
import { audienceOrder, audiences, type AudienceKey } from "@/content/audiences";
import { pageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

const find = (slug: string) => {
  if (!audienceOrder.includes(slug as AudienceKey)) notFound();
  return audiences[slug as AudienceKey];
};

export function generateStaticParams() {
  return audienceOrder.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  return pageMetadata(find((await params).slug).meta);
}

export default async function Page({ params }: Params) {
  return <AudiencePage content={find((await params).slug)} />;
}
