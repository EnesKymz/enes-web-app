import { EXPERIENCES } from "../data/portfolioData";

export default function ExperienceSection() {
  return (
    <section id="deneyim" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Deneyimlerim & Yolculuğum
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Kurucu ortaklıktan akademik araştırmalara, üretim odaklı yazılım serüvenim.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-indigo-500/20 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">

              {/* Timeline Marker Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#080b11] border-2 border-indigo-400 group-hover:border-sky-400 group-hover:scale-125 transition-all duration-300" />

              {/* Date tag (Desktop offset or inline) */}
              <div className="md:absolute md:-left-36 md:top-1 text-xs font-mono text-indigo-300 font-semibold mb-1 md:mb-0 md:text-right md:w-28">
                {exp.period}
              </div>

              {/* Experience Card */}
              <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 group-hover:translate-x-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-indigo-400 font-mono">
                      {exp.company}
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10 self-start sm:self-auto">
                    {exp.type}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-1.5 mb-4">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="text-xs text-gray-400 flex items-start gap-2">
                      <span className="text-indigo-400 font-bold">✔</span>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
