import { PERSONAL_INFO } from "../data/portfolioData";

export default function AboutSection() {
  const pillars = [
    {
      title: "Mimari ve Sıfır Gecikme",
      description:
        "Next.js 16 App Router, Server Components ve optimize asenkron veri modelleriyle kullanıcıya anlık tepki veren, yarış durumlarından (race conditions) arındırılmış akıcı deneyimler inşa ediyorum.",
      icon: "⚡",
      badge: "Architecture"
    },
    {
      title: "Uçtan Uca Sistem Güvenliği",
      description:
        "Sunucu eylemlerinde (Server Actions) yetkilendirme sınırları, IDOR açığı önleme, güvenli oturum yönetimi ve veritabanı yalıtımını projenin ilk satırından itibaren temel standart kabul ediyorum.",
      icon: "🛡️",
      badge: "Security-First"
    },
    {
      title: "Donanım, Bulut ve Web3 Hibriti",
      description:
        "Yalnızca tarayıcıyla sınırlı kalmayıp; C# SignalR ile TV/konsol otomasyonları, Telegram Botları ve IAC 2026 düzeyinde Blockchain Fractional NFT algoritmaları geliştiriyorum.",
      icon: "🌐",
      badge: "Cross-Platform"
    }
  ];

  return (
    <section id="hakkimda" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Hakkımda & Mühendislik Yaklaşımım
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Modern web teknolojilerini pratik iş modelleri ve sağlam altyapılarla buluşturuyorum.
          </p>
        </div>

        {/* Bio Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 mb-12 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Fikirden Üretime, Ölçeklenebilir Yazılım Çözümleri
              </h3>
              <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-3 font-sans">
                <p>
                  Yazılım dünyasındaki yolculuğumda temel ilkem; karmaşık problemleri zarif, anlaşılır ve güvenilir kod bloklarına dönüştürmek oldu. Bir fikrin mimarisini tasarlamaktan bulutta canlıya alınmasına kadar olan tüm yaşam döngüsüne aktif olarak liderlik ediyorum.
                </p>
                <p>
                  Özellikle <strong>Next.js 16</strong> ekosistemi, <strong>React 19</strong> yenilikleri, <strong>TypeScript</strong> tip güvenliği ve <strong>C# (.NET / SignalR)</strong> donanım haberleşmesi alanlarında pratik tecrübelere sahibim. Geliştirdiğim çözümler yalnızca çalışmakla kalmaz; hızlıdır, güvenlidir ve bakım maliyeti düşüktür.
                </p>
              </div>

              {/* Quick Details Badges */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                  📍 Konum: Türkiye
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                  💼 Çalışma Şekli: Full-Stack / Remote / Hibrit
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                  🎯 Odak: SaaS, Bulut Sistemleri & Web3
                </span>
              </div>
            </div>

            {/* Quote / Highlight Box */}
            <div className="lg:col-span-4 bg-[#121927] p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="text-indigo-400 font-mono text-xs uppercase tracking-wider">
                Temel İlke
              </div>
              <blockquote className="text-sm italic text-gray-300 leading-relaxed">
                &ldquo;İyi bir sistem yalnızca hatasız çalışan değil; değişime dirençli, güvenliği içselleştirmiş ve kullanıcıya en yüksek akıcılığı hissettiren sistemdir.&rdquo;
              </blockquote>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                <span>Ökkeş Enes Kaymaz</span>
                <span className="text-indigo-400">Dev & Architect</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 hover:border-indigo-500/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl p-2 rounded-xl bg-white/5 border border-white/10 inline-block group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  {pillar.badge}
                </span>
              </div>
              <h4 className="text-base font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                {pillar.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
