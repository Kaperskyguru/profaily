import { NextResponse, type NextRequest } from "next/server";
import { LAUNCHED } from "@/lib/launch";

/**
 * Before launch: "/" shows the waitlist page and every other page redirects to "/", so a visitor
 * only ever sees one thing to do. After launch (NEXT_PUBLIC_LAUNCHED=1): the full site, and the
 * waitlist URL redirects home. Assets, Next's own files and anything with a file extension
 * (robots.txt, sitemap.xml, favicons) are never touched.
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const home = new URL("/", req.url);

  if (LAUNCHED) return pathname === "/waitlist" ? NextResponse.redirect(home) : NextResponse.next();
  if (pathname === "/") return NextResponse.rewrite(new URL("/waitlist", req.url));
  return NextResponse.redirect(home, 307);
}

export const config = {
  matcher: ["/((?!_next/|assets/|api/|.*\\..*).*)"],
};
