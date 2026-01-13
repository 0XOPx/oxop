import type { Metadata } from 'next';

import "./globals.css";

export const metadata: Metadata = {
    title: "OXOP BMP Official's site.",
    description: "Programmer from Poland | Black MIDI & coding projects"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* This className forces Arial/Sans-Serif on everything */}
      <body className="font-sans antialiased">{children}</body>
      <noscript>
          <div 
            className="fixed inset-0 bg-[#1a1a1a] text-[#f0f0f0] flex flex-col items-center justify-center p-8 z-50"
            style={{ backgroundColor: '#1a1a1a' }}
          >
            <h1 className="text-5xl font-bold mb-6">JavaScript Disabled</h1>
            <p className="text-xl mb-8 text-center max-w-2xl">
              This site uses JavaScript
              Please <strong>enable JavaScript</strong> in your browser settings.
            </p>
            <p className="text-lg opacity-80">
              Refresh the page after enabling JS — or try Firefox/Chrome if issues persist.
            </p>
          </div>
        </noscript>
    </html>
  );
}