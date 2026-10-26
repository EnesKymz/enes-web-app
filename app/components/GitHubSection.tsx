import Link from "next/link";
import { GITHUB_REPOS, PERSONAL_INFO } from "../data/portfolioData";

export default function GitHubSection() {
  return (
    <section id="github" className="py-20 relative bg-[#06080d]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            GitHub & Açık Kaynak Çalışmalarım
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Kodlarım, açık kaynak depolarım ve geliştirme geçmişim.
          </p>
        </div>

        {/* GitHub Profile Banner Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 mb-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-[#161b22] border border-white/10 flex items-center justify-center text-white shadow-xl group-hover:scale-105 transition-transform">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {PERSONAL_INFO.githubUsername}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 mt-1 font-mono">
                  Full Stack Web, C# & Web3 Projeleri
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <Link
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-medium transition-all shadow-lg shadow-emerald-600/20 flex items-center gap-2"
              >
                <span>GitHub Profilini Ziyaret Et</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {GITHUB_REPOS.map((repo, idx) => (
            <Link
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 group hover:-translate-y-1 block"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M3 3a2 2 0 012-2h9.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V21a2 2 0 01-2 2H5a2 2 0 01-2-2V3zm3 4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H7a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors font-mono">
                    {repo.name}
                  </span>
                </div>
                <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                  ↗
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 leading-relaxed mb-4">
                {repo.description}
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {repo.topics.map((topic, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                  >
                    #{topic}
                  </span>
                ))}
              </div>

              {/* Language & Stats */}
              <div className="flex items-center gap-4 text-xs font-mono text-gray-400 pt-2 border-t border-white/5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
                  <span>{repo.language}</span>
                </div>
                {repo.stars > 0 && (
                  <div className="flex items-center gap-1">
                    <span>★</span>
                    <span>{repo.stars}</span>
                  </div>
                )}
                <div className="text-gray-500 ml-auto">
                  Açık Kaynak
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
