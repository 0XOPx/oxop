"use client";

import Link from "next/link";

export default function Projects() {
  return (
    <div className="bg-[#f0f0f0] text-[#333333] min-h-screen font-sans p-[20px] flex flex-col transition-colors duration-500">
      <main className="bg-white max-w-[800px] w-full mx-auto mt-4 p-[20px] text-center flex flex-col shadow-sm min-h-[400px] transition-colors duration-500">
        <h1 className="text-[#2c3e50] text-3xl font-bold mt-4 mb-6">
          My Projects
        </h1>

        <div className="flex flex-col gap-6 items-center">
          <div className="bg-black/5 p-6 rounded-lg w-full max-w-[500px] text-left border border-zinc-300">
            <h3 className="text-xl font-bold">OXOP-UMP-Pack</h3>
            <p className="text-sm mt-2 opacity-80">
              Ultralight MIDIPlayer texture pack (Format 1). Supports UMP 1.7.0+.
            </p>
            <a
              href="https://github.com/0XOPx/OXOP-UMP-Pack"
              target="_blank"
              className="text-[#2980b9] mt-3 inline-block animate-hover-link"
            >
              View on GitHub
            </a>
          </div>

          <p className="text-lg opacity-60">More coming soon...</p>

          <Link
            href="/"
            className="text-[#2980b9] mt-4 flex items-center gap-2 animate-hover-link"
          >
            ← Back to Home
          </Link>
        </div>
      </main>

      <footer className="text-[#7f8c8d] mt-auto py-8 text-[0.9em] text-center">
        <p>© {new Date().getFullYear()} OXOP BMP Official</p>
      </footer>
    </div>
  );
}
