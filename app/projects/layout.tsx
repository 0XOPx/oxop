import type { Metadata } from 'next';

import "../globals.css";

export const metadata: Metadata = {
    title: "OXOP's Site - Projects",
    description: "Programmer from Poland | Black MIDI & coding projects"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* This className forces Arial/Sans-Serif on everything */}
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}