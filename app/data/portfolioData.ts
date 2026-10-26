export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "SaaS & Web App" | "Otomasyon & Sistem" | "Web3 & Blockchain" | "Araştırma";
  tags: string[];
  role: string;
  status: "Aktif" | "Tamamlandı" | "Geliştiriliyor";
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  featured: boolean;
  metrics?: string;
  features?: string[];
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: string; highlight?: boolean }[];
}

export const PERSONAL_INFO = {
  name: "Ökkeş Enes Kaymaz",
  title: "Full Stack Developer & System Architect",
  shortBio: "Next.js 16, React 19, TypeScript ve C# altyapısıyla ölçeklenebilir, yüksek performanslı web uygulamaları ve modern sistemler geliştiriyorum.",
  fullBio: `Yazılım geliştirmeyi yalnızca kod yazmak olarak değil; iş ihtiyaçlarına kusursuz yanıt veren, güvenli ve sürdürülebilir mimariler inşa etmek olarak görüyorum. 
Next.js (App Router, Server Actions), React 19, Firebase, modern bulut servisleri ve C# (.NET/SignalR) teknolojilerinde derinleştim. 
SaaS platformlarından gerçek zamanlı donanım otomasyonlarına, Web3 topluluk botlarından uluslararası kongre düzeyinde akademik araştırmalara (IAC 2026) kadar geniş bir yelpazede uçtan uca ürünler hayata geçirdim.`,
  avatar: "/profile.jpeg",
  location: "Türkiye",
  email: "okkeseneskaymaz@proton.me",
  github: "https://github.com/EnesKymz",
  githubUsername: "EnesKymz",
  linkedin: "https://www.linkedin.com/in/okkes-enes",
  whatsapp: "https://wa.me/?text=Merhaba%20Enes%20Bey,%20web%20sitenizden%20ula%C5%9F%C4%B1yorum.",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend & Web Mimarisi",
    icon: "code",
    skills: [
      { name: "Next.js 16 (App Router / Turbopack)", level: "İleri", highlight: true },
      { name: "React 19 & Server Components", level: "İleri", highlight: true },
      { name: "TypeScript", level: "İleri", highlight: true },
      { name: "Tailwind CSS v4 & Modern UI", level: "İleri" },
      { name: "PWA (Progressive Web Apps)", level: "İleri" },
      { name: "State & Cache Optimization", level: "İleri" }
    ]
  },
  {
    title: "Backend & Bulut Sistemleri",
    icon: "server",
    skills: [
      { name: "Node.js & Next.js Server Actions", level: "İleri", highlight: true },
      { name: "Firebase (Firestore, Auth, Storage)", level: "İleri", highlight: true },
      { name: "C# (.NET Core & SignalR)", level: "Yetkin", highlight: true },
      { name: "RESTful API Mimarisi", level: "İleri" },
      { name: "Yetkilendirme & Güvenlik (IDOR/Auth)", level: "İleri" },
      { name: "Vercel Cron & Asenkron Kuyruklar", level: "Yetkin" }
    ]
  },
  {
    title: "Web3 & Otomasyon",
    icon: "layers",
    skills: [
      { name: "Blockchain & Token Mimarisi", level: "Yetkin", highlight: true },
      { name: "Telegram Bot API & WebApps", level: "İleri", highlight: true },
      { name: "Web Scraping & Data Extraction", level: "İleri" },
      { name: "Akıllı Sözleşmeler / NFT Mimarisi", level: "Yetkin" }
    ]
  },
  {
    title: "Masaüstü, Donanım & Araçlar",
    icon: "cpu",
    skills: [
      { name: "Git & GitHub Versiyonlama", level: "İleri", highlight: true },
      { name: "WPF & C# Masaüstü Geliştirme", level: "Yetkin" },
      { name: "WebSocket / SignalR Realtime", level: "İleri" },
      { name: "Android TV & Donanım Entegrasyonu", level: "Yetkin" },
      { name: "Docker & CI/CD Dağıtım", level: "Yetkin" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "naya-ajans",
    title: "Naya Ajans Yönetim & TikTok Otomasyonu",
    tagline: "Yetenek ajansları için TikTok analitik scraper'ı, veri güvenliği ve bulut yedekleme.",
    description: "Yayıncı performansını izleyen, TikTok profil ve istatistik verilerini Apify scraper ile optimize eden; IDOR ve sunucu güvenlik açıkları kapatılmış, Vercel Cron ile aylık otomatik Gmail veritabanı yedeği alan kapsamlı yönetim paneli.",
    category: "SaaS & Web App",
    liveUrl: "https://nayaajans.com/",
    tags: ["Next.js", "TikTok Scraper API", "Firebase", "Vercel Cron", "Security"],
    imageUrl: "/nayaajans-preview.png",
    role: "Full Stack Developer & Güvenlik Mimarı",
    status: "Aktif",
    featured: true,
    metrics: "Güçlendirilmiş Role-Based Auth & Otomatik Yedekleme",
    features: [
      "Bloklayıcı olmayan asenkron TikTok profil ve istatistik tarama motoru",
      "Server Actions seviyesinde tam yetkilendirme ve IDOR koruması",
      "Vercel CRON job ile periyodik bulut veritabanı yedekleme ve e-posta bildirimi",
      "İnteraktif ödül ve çarkıfelek etkinlik yönetim modülü"
    ]
  },
  {
    id: "quantum-club",
    title: "Quantum Club Ekosistemi",
    tagline: "Blockchain topluluk ağı, Telegram etkileşim botu ve mini web uygulaması.",
    description: "Web3 ve kripto dünyası için özel olarak tasarlanmış topluluk etkileşim botu ve mini uygulama entegrasyonu. Kullanıcı sadakati, üyelik doğrulaması ve merkeziyetsiz ağ bağlantısı sağlar.",
    category: "Web3 & Blockchain",
    tags: ["Blockchain", "Telegram Bot API", "Web3", "Node.js", "Next.js"],
    role: "Co-Founder & Developer",
    status: "Aktif",
    liveUrl: "https://t.me/QuantumClubBot",
    imageUrl: "/quantumclub.jpg",
    featured: true,
    metrics: "Binlerce Aktif Topluluk Üyesi",
    features: [
      "Telegram botu üzerinden otomatik topluluk rolleri ve cüzdan doğrulaması",
      "Web3 mini app arayüzü ve gerçek zamanlı etkileşim",
      "Özel etkinlikler, airdrop ve üyelik altyapısı"
    ]
  },
  {
    id: "stoktakip",
    title: "Teknoplus Bilgisayar",
    tagline: "Bulut tabanlı modern otopark, oto yıkama ve abone finansman SaaS platformu.",
    description: "İşletmeler için canlı kapasite ve doluluk takibi, araç giriş-çıkış zaman sayacı, WhatsApp gecikme bildirimli aylık abone yönetimi, 14 günlük net kâr/hasılat trend analizi ve termal Z-raporu fiş yazdırma yeteneğine sahip uçtan uca PWA yönetim sistemi.",
    category: "SaaS & Web App",
    tags: ["Next.js 16", "Firebase", "Firestore", "PWA", "Tailwind CSS", "TypeScript"],
    role: "Lead Full Stack Developer & Architect",
    status: "Aktif",
    liveUrl: "https://teknopluservis.vercel.app/",
    githubUrl: "https://github.com/EnesKymz/stoktakip",
    imageUrl: "/stoktakip-preview.png",
    featured: true,
    metrics: "10+ Aktif İşletme Modülü, Anlık Firestore Senkronizasyonu",
    features: [
      "Canlı doluluk çubuğu ve geçen süreye göre dinamik tarife önerisi",
      "Abonelik takibi: Tek tıkla WhatsApp ödeme hatırlatıcı ve UTF-8 CSV dışa aktarma",
      "14 günlük gelir/masraf/net kâr trend analizi ve termal fiş yazdırma (Z-Raporu)",
      "PWA desteğiyle masaüstü ve mobilde native uygulama deneyimi"
    ]
  },
  {
    id: "pasa-otopark",
    title: "Paşa Otopark Yönetim Sistemi",
    tagline: "Bulut tabanlı modern otopark, oto yıkama ve abone finansman SaaS platformu.",
    description: "İşletmeler için canlı kapasite ve doluluk takibi, araç giriş-çıkış zaman sayacı, WhatsApp gecikme bildirimli aylık abone yönetimi, 14 günlük net kâr/hasılat trend analizi ve termal Z-raporu fiş yazdırma yeteneğine sahip uçtan uca PWA yönetim sistemi.",
    category: "SaaS & Web App",
    tags: ["Next.js 16", "Firebase", "Firestore", "PWA", "Tailwind CSS", "TypeScript"],
    role: "Lead Full Stack Developer & Architect",
    status: "Aktif",
    liveUrl: "https://pasaotopark.vercel.app/",
    githubUrl: "https://github.com/EnesKymz/pasa-otopark",
    imageUrl: "/pasa-otopark.png",
    featured: true,
    metrics: "10+ Aktif İşletme Modülü, Anlık Firestore Senkronizasyonu",
    features: [
      "Canlı doluluk çubuğu ve geçen süreye göre dinamik tarife önerisi",
      "Abonelik takibi: Tek tıkla WhatsApp ödeme hatırlatıcı ve UTF-8 CSV dışa aktarma",
      "14 günlük gelir/masraf/net kâr trend analizi ve termal fiş yazdırma (Z-Raporu)",
      "PWA desteğiyle masaüstü ve mobilde native uygulama deneyimi"
    ]
  },
  {
    id: "anatolia-cafe",
    title: "Anatolia Cafe & Akıllı Masa Sistemi",
    tagline: "QR menü, garson çağırma ve parçalı adisyon takibi sunan yeni nesil kafe otomasyonu.",
    description: "Müşterilerin masalarındaki QR kod ile doğrudan sipariş verebildiği, garson çağırma ve parçalı ödeme yapabildiği, işletme mutfağı ve kasası için senkronize PWA restoran platformu.",
    category: "Otomasyon & Sistem",
    liveUrl: "https://anatoliacafe.vercel.app/",
    tags: ["Next.js 16", "QR Menu", "PWA", "Realtime DB", "Tailwind CSS"],
    role: "Full Stack Developer",
    imageUrl: "/anatoliacafe-preview.png",
    status: "Aktif",
    featured: false,
    features: [
      "Dinamik QR kod ve masa oturumu yönetimi",
      "Parçalı ödeme indirimi ve kalan borç senkronizasyonu",
      "Mutfak ve garson sipariş notlarının ayrıştırılması",
      "Offline PWA yükleme desteği"
    ]
  },
  {
    id: "iac-project",
    title: "Uydu Görüntüsü Ticaret Platformu (IAC 2026)",
    tagline: "Blockchain tabanlı uydu verisi pazaryeri ve ikincil piyasa araştırma modeli.",
    description: "77. Uluslararası Uzay Kongresi'nde (IAC 2026 Antalya) sunulmak üzere geliştirilen akademik araştırma ve sistem mimarisi. Geleneksel 'Minimum Sipariş Alanı' bariyerini Fractional NFT ve mekânsal parçalanabilirlik algoritmasıyla ortadan kaldırır.",
    category: "Araştırma",
    tags: ["Blockchain", "Research Paper", "Fractional NFTs", "GIS", "Akademik"],
    role: "Araştırmacı & Sistem Mimarı",
    status: "Tamamlandı",
    featured: true,
    metrics: "IAC 2026 Uluslararası Kabul & Yayın",
    features: [
      "Mekânsal Parçalanabilirlik (Spatial Fractionalization) formülü",
      "Akıllı sözleşmelerle uydu görüntüsü alt lisanslama mekanizması",
      "Uluslararası Astronautical Federation standartlarında araştırma raporu"
    ]
  },
  {
    id: "nartanesi",
    title: "Nartanesi Akış Platformu",
    tagline: "URL-reaktif filtreleme ve TMDB altyapısıyla optimize edilmiş film & dizi keşif platformu.",
    description: "Next.js 16 Turbopack ve React 19 ile geliştirilmiş; App Router client-cache mekanizmaları ve çift istek (race condition) engellemesiyle kusursuz gezinme sağlayan, URL tabanlı arama ve kategori filtrelemeli streaming arayüzü.",
    category: "SaaS & Web App",
    liveUrl: "https://nartanesi.vercel.app/",
    tags: ["Next.js 16", "React 19", "TMDB API", "Turbopack", "TypeScript", "Tailwind CSS"],
    role: "Full Stack Developer",
    imageUrl: "/nartanesi-preview.png",
    status: "Aktif",
    githubUrl: "https://github.com/EnesKymz/mynetflix",
    featured: true,
    metrics: "Next.js 16 Turbopack, Sıfır Gecikmeli Sayfalama",
    features: [
      "URL arama parametreleriyle tam reaktif filtreleme (useSearchParams)",
      "Yarış durumu (race condition) korumalı asenkron veri akışı",
      "Next.js 16 Suspense sınırları ve responsive oynatıcı entegrasyonu"
    ]
  },
  {
    id: "playstation-cafe",
    title: "PlayStation Cafe & Donanım Entegrasyonu",
    tagline: "C# SignalR ve Android TV ile donanım düzeyinde senkronize masa ve süre otomasyonu.",
    description: "WPF kasa uygulaması üzerinden Android TV'lere ve oyun konsollarına SignalR WebSocket protokolü ile anlık süre başlatma, TV açma/kapatma ve ses kontrol komutları gönderen donanım-yazılım hibrit otomasyon çözümü.",
    category: "Otomasyon & Sistem",
    tags: ["C#", ".NET Core", "SignalR", "WPF", "Android TV", "WebSockets"],
    role: "System & Desktop Developer",
    status: "Aktif",
    featured: false,
    features: [
      "SignalR altyapısıyla milisaniyelik kasa-TV eşzamanlaması",
      "Android TV cihazlarda otomatik tam ekran ve ses kontrolü",
      "Canlı adisyon, süresiz/süreli masa açma ve kalıcı oturum saatleri"
    ]
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    period: "2024 — Günümüz",
    role: "Kurucu Ortak & Lead Full Stack Developer",
    company: "Quantum Club",
    type: "Web3 & Blockchain Ekosistemi",
    description: "Merkeziyetsiz ağlar ve Web3 toplulukları için bot altyapıları, mini uygulamalar ve üyelik mekanizmaları geliştirdim.",
    achievements: [
      "Telegram Bot API ile binlerce kullanıcıya hizmet veren etkileşimli bot sistemini tasarladım.",
      "Topluluk cüzdan doğrulama ve token tabanlı erişim mimarisini kurdum."
    ],
    skills: ["Next.js", "Node.js", "Telegram API", "Blockchain", "TypeScript"]
  },
  {
    id: "exp-2",
    period: "2023 — Günümüz",
    role: "Full Stack Developer & Sistem Mimarı",
    company: "Bağımsız & Kurumsal Projeler",
    type: "SaaS & Ticari Otomasyonlar",
    description: "Farklı sektörlerdeki işletmeler için yüksek performanslı bulut tabanlı SaaS çözümleri ve donanım otomasyonları inşa ettim.",
    achievements: [
      "Paşa Otopark sistemini Next.js 16 ve Firebase ile sıfırdan hayata geçirerek PWA, termal fiş ve canlı kapasite takibi kazandırdım.",
      "Naya Ajans altyapısında veri güvenliğini güçlendirdim ve TikTok analitik scraper'larını optimize ettim.",
      "PlayStation kafeler için C# SignalR ve Android TV donanım entegrasyonunu tamamladım."
    ],
    skills: ["Next.js 16", "React 19", "Firebase", "C#", "SignalR", "Tailwind CSS"]
  },
  {
    id: "exp-3",
    period: "2026",
    role: "Bağımsız Araştırmacı & Yazar",
    company: "IAC 2026 (77th International Astronautical Congress)",
    type: "Akademik & Sistem Araştırması",
    description: "Uluslararası Uzay Kongresi için 'Blockchain-Based Satellite Image Trading Platform and Secondary Market Model' başlıklı bilimsel makaleyi kaleme aldım ve sundum.",
    achievements: [
      "Uydu görüntülerinde minimum sipariş alanı kısıtını çözen 'Mekânsal Parçalanabilirlik (Fractional NFTs)' mimarisini formülize ettim.",
      "IAF uluslararası standartlarına tam uyumlu araştırma metodolojisini başarıyla tamamladım."
    ],
    skills: ["Blockchain", "GIS", "Fractional NFTs", "Akademik Yazım", "Sistem Tasarımı"]
  }
];

export const GITHUB_REPOS = [
  {
    name: "pasa-otopark",
    description: "Bulut tabanlı modern otopark, yıkama ve abone yönetim SaaS platformu.",
    language: "TypeScript",
    url: "https://github.com/EnesKymz/pasa-otopark",
    stars: 3,
    forks: 1,
    topics: ["nextjs", "firebase", "pwa", "management-system"]
  },
  {
    name: "nartanesi",
    description: "Next.js 16 ve TMDB API ile geliştirilmiş yüksek performanslı streaming web uygulaması.",
    language: "TypeScript",
    url: "https://github.com/EnesKymz/mynetflix",
    stars: 2,
    forks: 0,
    topics: ["nextjs", "react-19", "tmdb", "turbopack"]
  },
];
