import { JsonLd } from "@/components/ui/JsonLd";
import { ORIGIN } from "@/lib/metadata";

/**
 * Breadcrumbs are not shown on the page (they read as a second menu); only the BreadcrumbList JSON-LD
 * is emitted, so search results can still show the trail. Single-level trails emit nothing.
 */
export function Crumbs({ items }: { items: { href?: string; label: string }[] }) {
  if (items.length < 2) return null;
  const all = [{ href: "/", label: "Home" }, ...items];
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: all.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.label,
          ...(it.href ? { item: ORIGIN + it.href.split("#")[0] } : {}),
        })),
      }}
    />
  );
}
