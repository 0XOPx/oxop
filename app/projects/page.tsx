"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Projects() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setIsDarkMode(true);
  }, []);

  return (
    <div className={`${isDarkMode ? 'bg-[#1a1a1a] text-[#f0f0f0]' : 'bg-[#f0f0f0] text-[#333333]'} min-h-screen transition-colors duration-500 font-sans p-[20px] flex flex-col`}>
      
      <main className={`${isDarkMode ? 'bg-[#2c2c2c]' : 'bg-white'} max-w-[800px] w-full mx-auto mt-4 p-[20px] text-center flex flex-col transition-colors duration-500 shadow-sm min-h-[400px]`}>

        <h1 className={`${isDarkMode ? 'text-[#ecf0f1]' : 'text-[#2c3e50]'} text-3xl font-bold mt-4 mb-6`}>My Projects</h1>

        <div className="flex flex-col gap-6 items-center">
          {/* Project Card for UMP Pack */}
          <div className={`${isDarkMode ? 'bg-white/5' : 'bg-black/5'} p-6 rounded-lg w-full max-w-[500px] text-left border dark:border-zinc-700`}>
            <h3 className="text-xl font-bold">OXOP-UMP-Pack</h3>
            <p className="text-sm mt-2 opacity-80">Ultralight MIDIPlayer texture pack (Format 1). Supports UMP 1.7.0+.</p>
            <a href="https://github.com/0XOPx/OXOP-UMP-Pack" target="_blank" className="text-[#2980b9] dark:text-[#3498db] mt-3 inline-block animate-hover-link">View on GitHub</a>
          </div>

          <p className="text-lg opacity-60">More coming soon...</p>
          
          <Link href="/" className="text-[#2980b9] dark:text-[#3498db] mt-4 flex items-center gap-2 animate-hover-link">
            ← Back to Home
          </Link>
        </div>
      </main>

      <footer className={`${isDarkMode ? 'text-[#95a5a6]' : 'text-[#7f8c8d]'} mt-auto py-8 text-[0.9em] text-center`}>
        <p>© {new Date().getFullYear()} OXOP BMP Official</p>
      </footer>
    </div>
  );
}