export function RootDocument({ children, bodyClass }: { children: React.ReactNode; bodyClass?: string }) {
  return (
    <html lang="en">
      <body className={bodyClass}>{children}</body>
    </html>
  );
}
