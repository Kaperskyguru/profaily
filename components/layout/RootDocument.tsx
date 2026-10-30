import { Inter, Inter_Tight } from "next/font/google";

const text = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-text", display: "swap" });
const display = Inter_Tight({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-display", display: "swap" });

export function RootDocument({ children, bodyClass }: { children: React.ReactNode; bodyClass?: string }) {
  return (
    <html lang="en" className={`${text.variable} ${display.variable}`}>
      <body className={bodyClass}>{children}</body>
    </html>
  );
}
