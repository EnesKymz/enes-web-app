import { SKILL_CATEGORIES } from "../data/portfolioData";

export default function SkillsSection() {
  return (
    <section id="yetenekler" className="py-20 relative bg-black/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Yetenekler & Uzmanlık Alanları
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Sürekli genişleyen ve üretim ortamlarında kendini kanıtlamış teknoloji yığını.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-sky-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-mono text-sm">
                  {idx === 0 && "01"}
                  {idx === 1 && "02"}
                  {idx === 2 && "03"}
                  {idx === 3 && "04"}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <span className="text-xs text-gray-400 font-mono">
                    {category.skills.length} Ana Teknoloji
                  </span>
                </div>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${skill.highlight
                        ? "bg-gradient-to-r from-indigo-500/15 to-sky-500/15 border border-indigo-500/40 text-sky-200 hover:border-indigo-400 shadow-sm"
                        : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
                      }`}
                  >
                    <span>{skill.name}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${skill.highlight
                          ? "bg-indigo-500/30 text-indigo-200"
                          : "bg-black/30 text-gray-400"
                        }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Learning Footer Banner */}
        <div className="mt-8 glass-panel rounded-2xl p-5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <div className="text-sm font-semibold text-white">Her Gün Yeni Teknolojiler</div>
              <div className="text-xs text-gray-400">
                Next.js en son sürümleri, Turbopack, AI entegrasyonları ve modern bulut yaklaşımları her zaman radarımda.
              </div>
            </div>
          </div>
          <a
            href="https://github.com/EnesKymz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-mono rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors whitespace-nowrap"
          >
            GitHub&apos;da İncele →
          </a>
        </div>

      </div>
    </section>
  );
}
