import "../globals.css";
import "@/app/styles/waitlist.css";
import { RootDocument } from "@/components/layout/RootDocument";

/** The pre-launch waitlist: its own layout, so no site header, menus or footer. */
export default function WaitlistLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument bodyClass="waitlist-page">{children}</RootDocument>;
}
