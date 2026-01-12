import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* This className forces Arial/Sans-Serif on everything */}
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}