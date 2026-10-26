"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    toast.success("E-posta adresi panoya kopyalandı! 🚀", {
      icon: "✉️",
      style: {
        background: "#111827",
        color: "#f3f4f6",
        border: "1px solid rgba(255,255,255,0.1)",
      },
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Lütfen gerekli alanları doldurun.", {
        style: {
          background: "#111827",
          color: "#f3f4f6",
        },
      });
      return;
    }

    setIsSubmitting(true);
    // Simulate quick feedback
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Mesajınız iletildi! En kısa sürede dönüş yapacağım.", {
        icon: "📬",
        style: {
          background: "#111827",
          color: "#f3f4f6",
          border: "1px solid rgba(255,255,255,0.1)",
        },
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <section id="iletisim" className="py-20 relative bg-black/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Bana Ulaşın
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-4">

            {/* Email Card (1-Click Copy) */}
            <div
              onClick={handleCopyEmail}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                  Doğrudan E-Posta
                </span>
                <span className="text-xs font-mono text-indigo-400 group-hover:underline">
                  {copied ? "Kopyalandı! ✅" : "Kopyalamak için tıkla"}
                </span>
              </div>
              <div className="text-base sm:text-lg font-bold text-white font-mono break-all group-hover:text-indigo-300 transition-colors">
                {PERSONAL_INFO.email}
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Proton Mail üzerinden şifrelenmiş ve güvenli iletişim.
              </p>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Link
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel rounded-2xl p-5 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-mono text-gray-400">GitHub</span>
                </div>
                <div className="text-sm font-bold text-white group-hover:text-emerald-300">
                  @EnesKymz
                </div>
              </Link>

              <Link
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel rounded-2xl p-5 border border-white/10 hover:border-sky-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-sky-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-mono text-gray-400">LinkedIn</span>
                </div>
                <div className="text-sm font-bold text-white group-hover:text-sky-300">
                  Ökkeş Enes
                </div>
              </Link>
            </div>

            {/* Telegram Community */}
            <Link
              href="https://t.me/QuantumClubBot"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel rounded-2xl p-5 border border-white/10 hover:border-sky-400/40 transition-all duration-300 group block"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-gray-400">Web3 & Topluluk</div>
                  <div className="text-sm font-bold text-white group-hover:text-sky-300">
                    Telegram: Quantum Club Bot
                  </div>
                </div>
                <span className="text-xl">✈️</span>
              </div>
            </Link>

          </div>

          {/* Right Column: Quick Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5">
                    Adınız Soyadınız *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Adınız Soyadınız"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5">
                    E-Posta Adresiniz *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ornek@alan.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-300 mb-1.5">
                  Konu
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Proje Geliştirme, İş Birliği, vb."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-300 mb-1.5">
                  Mesajınız *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Projeniz veya fikriniz hakkında kısaca bilgi verebilirsiniz..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-600 hover:to-sky-600 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-500/20 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Gönderiliyor...</span>
                ) : (
                  <>
                    <span>Mesajı Gönder</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
