"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [update, setUpdate] = useState("Loading...");
  const [stars, setStars] = useState(0);
  const [repos, setRepos] = useState(0);

  useEffect(() => {
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
    <div className="flex flex-col items-center min-h-screen bg-[#f0f0f0] text-[#333333]">
      <div className="flex flex-col items-center mb-6 pt-6">
        <a
          href="https://github.com/0XOPx/oxop"
          target="_blank"
          className="flex flex-col items-center no-underline"
        >
          <b className="text-black">GitHub Link</b>
          <Image src="/github.png" alt="GitHub" width={40} height={40} />
        </a>
      </div>

      <main className="main-container shadow-sm bg-white max-w-4xl mx-auto p-8 rounded-lg">
        <h1 className="text-4xl font-bold mt-6 mb-2 text-[#2c3e50]">
          Welcome to my site!
        </h1>
        <h2 className="text-2xl mb-8 text-[#34495e]">
          I am OXOP BMP Official (aka. OXOP)
        </h2>

        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-[#2c3e50]">About me</h1>
          <h2 className="text-xl text-[#34495e]">I am a male programmer, etc.</h2>
          <p className="mt-4">I'm from Poland 🇵🇱</p>
        </section>

        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-[#2c3e50]">My projects</h1>
          <p>
            Find them{" "}
            <Link href="/projects" className="text-[#3498db] hover:underline ml-1">
              here.
            </Link>
          </p>
        </section>

        <div className="p-6 rounded-lg my-8 bg-gray-50 border border-gray-200 text-left max-w-[350px] mx-auto">
          <h1 className="text-2xl font-bold mb-4 text-[#2c3e50]">GitHub Info</h1>
          <h2 className="text-[0.95em] mb-2">Latest Update: {update}</h2>
          <h2 className="text-[0.95em] mb-2">Stars: {stars}</h2>
          <h2 className="text-[0.95em] mb-4">Public Repos: {repos}</h2>
          <h2 className="mt-4 text-[0.95em]">
            <b>Visit my GitHub: </b>
            <a
              href="https://github.com/0XOPx"
              target="_blank"
              className="text-[#3498db] hover:underline"
            >
              GitHub Profile
            </a>
          </h2>
        </div>

        <p className="mt-8 text-sm opacity-70 text-center">
          BMP = Black MIDI Poland.
        </p>
      </main>

      <footer className="mt-auto text-[0.9em] text-center py-10 text-[#7f8c8d]">
        <p>© {new Date().getFullYear()} OXOP BMP Official</p>
      </footer>
    </div>
  );
}
