import { PlatformPage } from "@/components/templates/PlatformPage";
import { platforms } from "@/content/platforms";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(platforms.facebook.meta);
export default function Page() { return <PlatformPage content={platforms.facebook} />; }
