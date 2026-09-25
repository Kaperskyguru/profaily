import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "Upload one video, write once, and schedule it to TikTok, Instagram Reels, YouTube and Facebook from one composer.";

export const metadata: Metadata = {
  metadataBase: new URL("https://useprofaily.com"),
  title: "Profaily — one video, every platform",
  description,
  icons: {
    icon: "/favicon-32.png",
    apple: "/favicon-180.png",
  },
  openGraph: {
    title: "Profaily",
    description,
    url: "https://useprofaily.com",
    siteName: "Profaily",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F9F6" },
    { media: "(prefers-color-scheme: dark)", color: "#0A1714" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
