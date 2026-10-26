import Link from "next/link";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 bg-[#05070b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-bold text-white text-base tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs text-gray-500 font-mono mt-0.5">
              Full Stack Developer & System Architect
            </span>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
            <Link href="#hakkimda" className="hover:text-white transition-colors">
              Hakkımda
            </Link>
            <Link href="#yetenekler" className="hover:text-white transition-colors">
              Yetenekler
            </Link>
            <Link href="#projeler" className="hover:text-white transition-colors">
              Projeler
            </Link>
            <Link href="#github" className="hover:text-white transition-colors">
              GitHub
            </Link>
            <Link href="#iletisim" className="hover:text-white transition-colors">
              İletişim
            </Link>
          </div>

          {/* Copyright & Stack */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <div className="text-xs text-gray-400 font-mono">
              Next.js 16 • React 19 • Tailwind CSS v4
            </div>
            <div className="text-[11px] text-gray-600 mt-1">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. Tüm hakları saklıdır.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
