import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "OXOP's Site - Projects",
  description: "Programmer from Poland | Black MIDI & coding projects"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans antialiased">
      <noscript>
          <div 
            className="fixed inset-0 bg-[#1a1a1a] text-[#f0f0f0] flex flex-col items-center justify-center p-8 z-50"
            style={{ backgroundColor: '#1a1a1a' }}
          >
            <h1 className="text-5xl font-bold mb-6">JavaScript Disabled</h1>
            <p className="text-xl mb-8 text-center max-w-2xl">
              Please <strong>enable JavaScript</strong> in your browser settings.
            </p>
          </div>
        </noscript>

      {children}
    </div>
  );
}
