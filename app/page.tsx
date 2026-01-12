"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [update, setUpdate] = useState("Loading...");
  const [stars, setStars] = useState(0);
  const [repos, setRepos] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }

    fetch("https://api.github.com/users/0XOPx")
      .then(res => res.json())
      .then(data => {
        setRepos(data.public_repos);
        setUpdate(new Date(data.updated_at).toLocaleDateString());
      });

    fetch("https://api.github.com/users/0XOPx/repos")
      .then(res => res.json())
      .then(data => {
        const totalStars = data.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
        setStars(totalStars);
      });
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-[#1a1a1a] text-[#f0f0f0]' : 'bg-[#f0f0f0] text-[#333333]'}`}>
      
      {/* GitHub Link Top */}
      <a href="https://github.com/0XOPx/oxop.git" target="_blank" className="flex flex-col items-center no-underline mb-4 pt-4">
        <b className={isDarkMode ? 'text-white' : 'text-black'}>GitHub Link</b>
        <Image src={isDarkMode ? "/white-github.png" : "/github.png"} alt="GitHub" width={40} height={40} />
      </a>

      {/* Main Container */}
      <main className={`main-container shadow-sm ${isDarkMode ? 'bg-[#2c2c2c]' : 'bg-white'}`}>

        <h1 className={`text-4xl font-bold mt-6 mb-2 ${isDarkMode ? 'text-[#ecf0f1]' : 'text-[#2c3e50]'}`}>
          Welcome to my site!
        </h1>
        <h2 className={`text-2xl mb-8 ${isDarkMode ? 'text-[#ecf0f1]' : 'text-[#34495e]'}`}>
          I am OXOP BMP Official (aka. OXOP)
        </h2>

        <section className="mb-8">
          <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-[#ecf0f1]' : 'text-[#2c3e50]'}`}>About me</h1>
          <h2 className={`text-xl ${isDarkMode ? 'text-[#ecf0f1]' : 'text-[#34495e]'}`}>I am a male programmer, etc.</h2>
          <p className="mt-4">I'm from Poland 🇵🇱</p>
        </section>

        <section className="mb-8">
          <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-[#ecf0f1]' : 'text-[#2c3e50]'}`}>My projects</h1>
          <p>Find them <Link href="/projects" className="text-[#2980b9] dark:text-[#3498db] animate-hover ml-1">here.</Link></p>
        </section>

        {/* GitHub Info Box */}
        <div className={`p-[15px] rounded-[8px] my-[20px] text-left self-center w-full max-w-[300px] ${isDarkMode ? 'bg-white/10' : 'bg-black/5'}`}>
          <h1 className="text-2xl font-bold mb-4">GitHub Info</h1>
          <p className="text-[0.9em] my-[5px]"><b>Latest Update:</b> {update}</p>
          <p className="text-[0.9em] my-[5px]"><b>Stars:</b> {stars}</p>
          <p className="text-[0.9em] my-[5px]"><b>Public Repos:</b> {repos}</p>
          <p className="mt-4 text-[0.9em]">
            <b>Visit my GitHub: </b> 
            <a href="https://github.com/0XOPx" target="_blank" className="text-[#2980b9] dark:text-[#3498db] no-underline hover:underline">GitHub Profile</a>
          </p>
        </div>

        <p className="mt-8 text-sm opacity-60">BMP = Black MIDI Poland.</p>
        
        <div className="mt-4">
          <a href="https://www.youtube.com/watch?v=QDia3e12czc" target="_blank" className={`secret-tea no-underline ${isDarkMode ? 'text-white' : 'text-black'}`}>
            I like Ice Tea
          </a>
        </div>
      </main>

      <footer className={`mt-[40px] text-[0.9em] text-center pb-10 ${isDarkMode ? 'text-[#95a5a6]' : 'text-[#7f8c8d]'}`}>
        <p>© {new Date().getFullYear()} OXOP BMP Official</p>
      </footer>
    </div>
  );
}