'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a1a] text-[#f0f0f0] p-8">
      <h1 className="text-5xl font-bold mb-4">Something went wrong!</h1>
      <p className="text-xl mb-6">Error: {error.message || "Internal server error (500)"}</p>
      <p className="text-sm opacity-70 mb-8">(digest: {error.digest || 'hidden'})</p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-[#e74c3c] hover:bg-[#c0392b] text-white rounded-lg text-lg transition-colors"
      >
        Try Again
      </button>
      <Link href="/" className="mt-4 text-[#3498db] hover:underline">
        Back to Home
      </Link>
    </div>
  );
}