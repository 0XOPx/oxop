'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-[#1a1a1a] text-[#f0f0f0]">
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
          <h1 className="text-6xl font-bold mb-4">Critical Error</h1>
          <p className="text-2xl mb-8">This site has encoutered a critical error.</p>
          <button
            onClick={() => reset()}
            className="px-8 py-4 bg-[#e74c3c] hover:bg-[#c0392b] text-white rounded-lg text-xl"
          >
            Recover
          </button>
        </div>
      </body>
    </html>
  );
}