import "../globals.css";
import { RootDocument } from "@/components/layout/RootDocument";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument bodyClass="home-page">{children}</RootDocument>;
}
