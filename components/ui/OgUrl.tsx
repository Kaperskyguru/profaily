import { ORIGIN } from "@/lib/metadata";

/** og:* tags; only og:url is required, the rest are rendered when the source page carries them. */
export function OgUrl({
  path,
  title,
  description,
  type,
  image,
}: {
  path: string;
  title?: string;
  description?: string;
  type?: string;
  image?: string;
}) {
  return (
    <>
      {type && <meta property="og:type" content={type} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:url" content={ORIGIN + path} />
    </>
  );
}
