import "../globals.css";
import { RootDocument } from "@/components/layout/RootDocument";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument>{children}</RootDocument>;
}
