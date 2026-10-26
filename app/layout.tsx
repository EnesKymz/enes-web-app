import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ToasterComponent from "./components/toastBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ökkeş Enes Kaymaz — Full Stack Developer & System Architect",
  description: "Ökkeş Enes Kaymaz'ın portföyü: Next.js 16, React 19, TypeScript, C# ve modern bulut sistemleriyle geliştirilen projeler, çalışmalar ve deneyimler.",
  keywords: ["Ökkeş Enes Kaymaz", "Full Stack Developer", "Next.js 16", "React 19", "TypeScript", "C#", "Paşa Otopark", "Quantum Club", "Portfolio"],
  authors: [{ name: "Ökkeş Enes Kaymaz", url: "https://github.com/EnesKymz" }],
  openGraph: {
    title: "Ökkeş Enes Kaymaz — Full Stack Developer & System Architect",
    description: "Next.js 16, React 19, TypeScript ve C# projeleri, açık kaynak çalışmaları ve deneyimler.",
    url: "https://github.com/EnesKymz",
    siteName: "Ökkeş Enes Kaymaz Portfolio",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#080b11] text-gray-100 selection:bg-indigo-500/30 selection:text-indigo-200`}
      >
        <ToasterComponent />
        {children}
      </body>
    </html>
  );
}
