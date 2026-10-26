"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    toast.success("E-posta panoya kopyalandı! 🚀", {
      icon: "📋",
      style: {
        background: "#111827",
        color: "#f3f4f6",
        border: "1px solid rgba(255,255,255,0.1)",
      },
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="top" className="relative pt-28 md:pt-36 overflow-hidden">
      {/* Ambient background glow & radial highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[250px] bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Centered Hero Layout */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">

          {/* Centered Profile Avatar */}
          <div className="relative group my-2">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-56 lg:h-56">
              {/* Outer decorative glowing ring */}
              <div className="absolute inset-0 rounded-full blur-xl opacity-60 group-hover:opacity-85 transition-opacity duration-500 animate-pulse-glow" />

              {/* Image Frame */}
              <div className="relative w-full h-full rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-indigo-500 to-sky-400">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0a0e17]">
                  <Image
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 208px, 224px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Centered Name & Title directly under Avatar */}
          <div className="space-y-2 pt-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              <span className="bg-gradient-to-r from-indigo-300 via-sky-200 to-indigo-100 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            <p className="text-base sm:text-xl font-medium text-indigo-300/90 font-mono">
              {PERSONAL_INFO.title}
            </p>
          </div>

          {/* Value Proposition Description */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            {PERSONAL_INFO.shortBio} Gerçek zamanlı donanım otomasyonlarından (C#/SignalR), bulut tabanlı SaaS platformlarına (Next.js/Firebase) ve Web3 ekosistemlerine kadar uçtan uca modern çözümler inşa ediyorum.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="#projeler"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-medium text-sm shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              <span>Projelerimi İncele</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <Link
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white font-medium text-sm border border-white/10 transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>GitHub Profilim</span>
            </Link>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-medium text-sm border border-white/10 transition-all flex items-center gap-2 cursor-pointer"
              title="E-postayı panoya kopyala"
            >
              <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{copied ? "Kopyalandı! ✅" : "E-Posta Kopyala"}</span>
            </button>
          </div>

          {/* Quick Tech Highlights Badge Strip */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-gray-400">
            <span className="text-gray-500">Tech Stack:</span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300">Next.js 16</span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300">React 19</span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300">TypeScript</span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300">C# .NET</span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300">Firebase</span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300">Web3 / Bot</span>
          </div>

        </div>

      </div>
    </section>
  );
}
