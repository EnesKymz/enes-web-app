"use client";

import { useState } from "react";
import ProfileCard from "./profileCard";
import ExperienceCard from "./experienceCard";
import SocialMediaCard from "./socialMediaCard";

interface CodeEditorViewProps {
  onBackToModern: () => void;
}

export default function CodeEditorView({ onBackToModern }: CodeEditorViewProps) {
  const lineNumbers = Array.from({ length: 85 }, (_, i) => i + 1);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      setTerminalOutput([]);
    } else if (cmd === "help") {
      setTerminalOutput((prev) => [
        ...prev,
        `$ ${terminalInput}`,
        "Komutlar: help, clear, projects, about, contact, switch",
      ]);
    } else if (cmd === "projects") {
      setTerminalOutput((prev) => [
        ...prev,
        `$ ${terminalInput}`,
        "Aktif Projeler: Paşa Otopark, MyNetflix, Quantum Club, Naya Ajans, IAC 2026",
      ]);
    } else if (cmd === "about") {
      setTerminalOutput((prev) => [
        ...prev,
        `$ ${terminalInput}`,
        "Ökkeş Enes Kaymaz — Full Stack Developer (Next.js 16, React 19, TypeScript, C#)",
      ]);
    } else if (cmd === "contact") {
      setTerminalOutput((prev) => [
        ...prev,
        `$ ${terminalInput}`,
        "E-posta: okkeseneskaymaz@proton.me | GitHub: @EnesKymz",
      ]);
    } else if (cmd === "switch") {
      onBackToModern();
    } else {
      setTerminalOutput((prev) => [
        ...prev,
        `$ ${terminalInput}`,
        `Bilinmeyen komut: ${terminalInput}. 'help' yazarak komutları görebilirsiniz.`,
      ]);
    }

    setTerminalInput("");
  };

  return (
    <div className="min-h-screen bg-[#0d1117] flex items-center justify-center p-3 sm:p-6 md:p-10 pt-24 pb-16">
      <div className="w-full max-w-5xl bg-[#1e1e1e] rounded-2xl shadow-2xl overflow-hidden border border-gray-800 ring-1 ring-white/10">
        
        {/* Editor Titlebar */}
        <div className="bg-[#252526] px-4 py-3 flex items-center justify-between border-b border-gray-800 select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-300 text-xs font-mono bg-[#1e1e1e] px-3 py-1 rounded-md border border-gray-700 flex items-center gap-1.5">
              <span className="text-blue-400">⚛</span>
              <span>portfolio.tsx</span>
            </span>
          </div>

          <button
            onClick={onBackToModern}
            className="text-xs font-mono px-3 py-1 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/30 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Vitrin Moduna Dön</span>
            <span>↗</span>
          </button>
        </div>

        {/* Editor Code Area */}
        <div className="flex relative max-h-[75vh] overflow-y-auto">
          {/* Line Numbers Column */}
          <div className="w-10 sm:w-14 bg-[#1e1e1e] text-gray-600 text-right pr-3 pt-6 select-none font-mono text-xs sm:text-sm border-r border-gray-800/60 sticky top-0">
            {lineNumbers.map((num) => (
              <div key={num} className="leading-7 opacity-40">
                {num}
              </div>
            ))}
          </div>

          {/* Main Code & Components Content */}
          <div className="flex-1 p-4 sm:p-8 font-mono text-xs sm:text-sm md:text-base overflow-x-auto space-y-10">
            
            {/* Header Import Comment */}
            <div className="text-gray-500 italic select-none">
              {"// --- Enes Portfolio • Next.js 16 & React 19 ---"}
            </div>

            {/* Profile Section */}
            <div className="w-full transition-transform duration-300 hover:translate-x-1">
              <ProfileCard />
            </div>

            {/* Experiences Section */}
            <div className="text-gray-500 italic select-none">
              {"// --- Deneyimler ve Projeler ---"}
            </div>
            <div className="w-full transition-transform duration-300 hover:translate-x-1">
              <ExperienceCard />
            </div>

            {/* Social Media & Contact */}
            <div className="text-gray-500 italic select-none my-4">
              {"// --- İletişim ve Bağlantılar ---"}
            </div>
            <SocialMediaCard />

            {/* Interactive Terminal Bar */}
            <div className="mt-8 pt-6 border-t border-gray-800/80 font-mono text-xs sm:text-sm">
              <div className="text-gray-500 text-xs mb-2">
                {"# Etkileşimli Terminal (yardım için 'help' yazın):"}
              </div>

              {terminalOutput.map((out, idx) => (
                <div key={idx} className="text-gray-400 py-0.5 whitespace-pre-wrap">
                  {out}
                </div>
              ))}

              <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 mt-2">
                <span className="text-green-400">➜</span>
                <span className="text-blue-400">~/enes-portfolio</span>
                <span className="text-gray-400">git:(</span>
                <span className="text-rose-400">main</span>
                <span className="text-gray-400">)</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="komut yazın... (örn: help, projects)"
                  className="bg-transparent text-gray-200 outline-none flex-1 font-mono text-xs sm:text-sm placeholder-gray-600"
                />
              </form>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
