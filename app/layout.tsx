import "./globals.css";

export const metadata = {
  title: "OXOP's Site",
  description: "Programmer from Poland | Black MIDI & coding projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">

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
      </body>
    </html>
  );
}
