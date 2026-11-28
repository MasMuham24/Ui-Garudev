/**
 * Sumber data terpusat untuk semua layanan GaruDev.
 * Gunakan file ini sebagai single source of truth di semua komponen & halaman.
 *
 * TODO: Isi startingPrice yang sesuai setelah ada kesepakatan harga internal.
 * TODO: Tambah/kurangi layanan sesuai kapabilitas tim terkini.
 */

// Kategori layanan — digunakan untuk filter di halaman /layanan
export const SERVICE_CATEGORIES = [
  { id: "semua", label: "Semua" },
  { id: "website", label: "Website" },
  { id: "mobile", label: "Aplikasi Mobile" },
  { id: "sistem", label: "Sistem Informasi" },
  { id: "uiux", label: "UI/UX Design" },
];

export const services = [
  // ─────────────────────────────────────────────
  // 1. Pembuatan Website
  // ─────────────────────────────────────────────
  {
    slug: "pembuatan-website",
    category: "website",
    featured: true,
    iconName: "Globe", // lucide-react icon name
    title: "Pembuatan Website",
    shortDescription:
      "Website company profile, landing page, atau toko online yang cepat, responsif, dan siap ranking di Google.",
    features: [
      "Responsif di semua ukuran layar",
      "Performa Lighthouse ≥ 90",
      "Optimasi SEO on-page dasar",
    ],
    longDescription:
      "Kami membangun website dari nol menggunakan stack modern — React, Next.js, atau Astro untuk frontend; Node.js atau Laravel untuk backend bila diperlukan. Setiap halaman dioptimalkan untuk kecepatan (Core Web Vitals) dan kemudahan ditemukan di mesin pencari.",
    deliverables: [
      "File source code (repository Git)",
      "Build production yang siap deploy",
      "Dokumentasi penggunaan CMS (bila ada)",
      "Panduan deploy ke hosting/VPS",
      "Revisi desain hingga 3 putaran",
    ],
    techStack: ["React / Next.js / Astro", "Tailwind CSS", "Node.js / Laravel (opsional)", "PostgreSQL / MySQL (opsional)", "Vercel / VPS"],
    process: [
      { step: "01", title: "Discovery", description: "Diskusi kebutuhan, referensi desain, dan struktur halaman." },
      { step: "02", title: "Wireframe & Desain", description: "Mockup hi-fi di Figma, disetujui sebelum coding dimulai." },
      { step: "03", title: "Development", description: "Coding frontend & backend, integrasi CMS bila diperlukan." },
      { step: "04", title: "Testing", description: "Pengujian lintas browser, perangkat, dan performa Lighthouse." },
      { step: "05", title: "Launch", description: "Deploy, konfigurasi domain, dan serah terima source code." },
    ],
    estimatedDuration: "3–6 minggu (tergantung kompleksitas)",
    // TODO: Isi harga aktual setelah ada kesepakatan internal
    startingPrice: null,
    faqs: [
      {
        question: "Apakah saya bisa minta revisi setelah website jadi?",
        answer:
          "Ya, termasuk 3 putaran revisi desain dalam paket. Revisi tambahan di luar scope dikenakan biaya terpisah.",
      },
      {
        question: "CMS apa yang digunakan?",
        answer:
          "Kami menyesuaikan dengan kebutuhan — Sanity, Contentful, atau WordPress headless untuk konten yang sering berubah. Bila tidak perlu CMS, file MDX atau JSON sudah cukup.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2. Aplikasi Web (SPA / PWA)
  // ─────────────────────────────────────────────
  {
    slug: "aplikasi-web",
    category: "website",
    featured: true,
    iconName: "LayoutDashboard",
    title: "Aplikasi Web (SPA/PWA)",
    shortDescription:
      "Dashboard, portal klien, atau alat internal berbasis web yang bisa berjalan offline dan terasa seperti aplikasi native.",
    features: [
      "Single Page Application yang cepat",
      "Autentikasi & manajemen role user",
      "Dapat diinstal sebagai PWA",
    ],
    longDescription:
      "Cocok untuk dashboard analitik, sistem manajemen internal, atau portal multi-user. Kami menggunakan React dengan state management yang terukur (Zustand / TanStack Query), REST API atau GraphQL di backend, dan autentikasi JWT/session.",
    deliverables: [
      "Source code frontend & backend",
      "API documentation (Swagger/Postman)",
      "Setup CI/CD pipeline dasar",
      "Panduan onboarding pengguna",
    ],
    techStack: ["React + TypeScript", "Zustand / TanStack Query", "Node.js / Hono", "PostgreSQL", "Docker (opsional)"],
    process: [
      { step: "01", title: "Analisis Kebutuhan", description: "Pemetaan fitur, user role, dan alur data." },
      { step: "02", title: "Desain Sistem", description: "ERD, skema API, dan prototype interaktif." },
      { step: "03", title: "Development Sprint", description: "Pengembangan iteratif dengan demo per sprint." },
      { step: "04", title: "QA & UAT", description: "Pengujian fungsional dan user acceptance test." },
      { step: "05", title: "Deployment", description: "Setup server, deploy, dan monitoring dasar." },
    ],
    estimatedDuration: "6–14 minggu (tergantung jumlah fitur)",
    startingPrice: null, // TODO
    faqs: [
      {
        question: "Apakah bisa terintegrasi dengan sistem yang sudah ada?",
        answer:
          "Bisa, selama sistem lama menyediakan API atau akses database. Kami akan mempelajari dokumentasi yang ada sebelum memulai integrasi.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 3. Aplikasi Mobile
  // ─────────────────────────────────────────────
  {
    slug: "aplikasi-mobile",
    category: "mobile",
    featured: true,
    iconName: "Smartphone",
    title: "Aplikasi Mobile",
    shortDescription:
      "Aplikasi Android & iOS dari satu codebase menggunakan React Native / Flutter, termasuk submit ke Play Store dan App Store.",
    features: [
      "Android & iOS dari satu codebase",
      "Notifikasi push & deep link",
      "Submit ke Play Store / App Store",
    ],
    longDescription:
      "Kami mengembangkan aplikasi mobile cross-platform dengan React Native (Expo) atau Flutter. Hasilnya adalah aplikasi native yang berjalan mulus di Android dan iOS, dengan akses fitur perangkat seperti kamera, GPS, dan notifikasi.",
    deliverables: [
      "Source code aplikasi",
      "File APK/AAB (Android) & IPA (iOS)",
      "Panduan submit ke store",
      "Backend API bila dibutuhkan",
    ],
    techStack: ["React Native + Expo", "TypeScript", "Supabase / Firebase", "React Navigation", "EAS Build"],
    process: [
      { step: "01", title: "Requirement", description: "Definisi fitur, platform target, dan persona pengguna." },
      { step: "02", title: "UI/UX Design", description: "Desain antarmuka mengikuti Human Interface Guidelines & Material Design." },
      { step: "03", title: "Development", description: "Coding, integrasi API, dan pengujian di perangkat nyata." },
      { step: "04", title: "Beta Testing", description: "Distribusi internal via TestFlight / Firebase App Distribution." },
      { step: "05", title: "Launch", description: "Submit ke store, review, dan go live." },
    ],
    estimatedDuration: "8–16 minggu",
    startingPrice: null, // TODO
    faqs: [
      {
        question: "Apakah bisa hanya untuk Android saja?",
        answer:
          "Bisa. Karena kami menggunakan React Native/Flutter, codebase yang sama dapat diarahkan hanya ke Android terlebih dahulu, lalu iOS menyusul di fase berikutnya.",
      },
      {
        question: "Siapa yang mengurus akun developer Play Store / App Store?",
        answer:
          "Akun developer dimiliki oleh klien. Kami akan membantu proses submit dan review, namun biaya akun developer (Google: USD 25, Apple: USD 99/tahun) tidak termasuk paket.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 4. Sistem Informasi
  // ─────────────────────────────────────────────
  {
    slug: "sistem-informasi",
    category: "sistem",
    featured: false,
    iconName: "Database",
    title: "Sistem Informasi Bisnis",
    shortDescription:
      "Sistem manajemen internal seperti ERP sederhana, HRIS, atau sistem inventory yang disesuaikan dengan proses bisnis Anda.",
    features: [
      "Alur kerja sesuai SOP bisnis",
      "Multi-role dengan hak akses terpisah",
      "Laporan dan ekspor data (Excel/PDF)",
    ],
    longDescription:
      "Kami merancang dan membangun sistem informasi yang disesuaikan dengan proses unik bisnis Anda — bukan solusi generik yang harus Anda sesuaikan. Cocok untuk manajemen stok, penggajian, ticketing, atau alur persetujuan internal.",
    deliverables: [
      "Aplikasi web full-stack",
      "Database dengan backup otomatis",
      "Dokumentasi teknis & user manual",
      "Pelatihan penggunaan (2 sesi)",
      "Maintenance 1 bulan pasca launch",
    ],
    techStack: ["Laravel / Node.js", "MySQL / PostgreSQL", "React + Inertia.js", "Redis (caching)", "VPS / Cloud server"],
    process: [
      { step: "01", title: "Business Analysis", description: "Pemetaan SOP, alur data, dan kebutuhan laporan." },
      { step: "02", title: "Desain Database", description: "ERD, normalisasi, dan skema relasi antar entitas." },
      { step: "03", title: "Development", description: "Backend API, frontend, dan integrasi modul." },
      { step: "04", title: "UAT", description: "Pengujian bersama pengguna internal Anda." },
      { step: "05", title: "Training & Launch", description: "Pelatihan tim, migrasi data lama, dan go-live." },
    ],
    estimatedDuration: "10–20 minggu",
    startingPrice: null, // TODO
    faqs: [
      {
        question: "Bisakah sistem ini diintegrasikan dengan software akuntansi yang sudah kami pakai?",
        answer:
          "Bisa, dengan syarat software tersebut menyediakan API atau mendukung ekspor data standar (CSV, XML, JSON). Kami akan evaluasi terlebih dahulu sebelum memberikan estimasi.",
      },
      {
        question: "Apakah ada biaya maintenance bulanan?",
        answer:
          "Maintenance 1 bulan sudah termasuk dalam paket. Setelah itu, tersedia paket retainer bulanan yang dapat disesuaikan dengan kebutuhan Anda.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 5. UI/UX Design
  // ─────────────────────────────────────────────
  {
    slug: "ui-ux-design",
    category: "uiux",
    featured: false,
    iconName: "Layers",
    title: "UI/UX Design",
    shortDescription:
      "Desain antarmuka dan pengalaman pengguna dari wireframe hingga prototype interaktif di Figma, siap dioper ke developer.",
    features: [
      "Wireframe low-fi & mockup hi-fi",
      "Prototype interaktif yang bisa diklik",
      "Design system & komponen reusable",
    ],
    longDescription:
      "Kami mengerjakan proses desain end-to-end: riset pengguna singkat, information architecture, wireframe, desain visual, dan prototype interaktif. Hasilnya adalah Figma file yang terstruktur dan siap digunakan langsung oleh tim developer.",
    deliverables: [
      "Figma file dengan semua halaman",
      "Prototype interaktif",
      "Design system (warna, tipografi, komponen)",
      "Panduan handoff untuk developer",
      "Asset yang diekspor (ikon, ilustrasi)",
    ],
    techStack: ["Figma", "FigJam (untuk workshop)", "Maze (usability testing, opsional)"],
    process: [
      { step: "01", title: "Discovery", description: "Brief, riset kompetitor, dan persona pengguna." },
      { step: "02", title: "Information Architecture", description: "Sitemap, user flow, dan struktur navigasi." },
      { step: "03", title: "Wireframe", description: "Sketsa layout tanpa detail visual untuk validasi cepat." },
      { step: "04", title: "Visual Design", description: "Desain hi-fi dengan identitas visual dan design system." },
      { step: "05", title: "Prototype & Handoff", description: "Prototype interaktif dan dokumen handoff developer." },
    ],
    estimatedDuration: "2–5 minggu",
    startingPrice: null, // TODO
    faqs: [
      {
        question: "Apakah desain ini bisa langsung dikerjakan oleh tim developer kami?",
        answer:
          "Ya. Kami menyiapkan file Figma dengan annotation, spesifikasi jarak, ukuran, warna, dan aset yang sudah diekspor — siap pakai untuk developer manapun.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 6. SEO & Maintenance
  // ─────────────────────────────────────────────
  {
    slug: "seo-maintenance",
    category: "website",
    featured: false,
    iconName: "TrendingUp",
    title: "SEO & Maintenance Website",
    shortDescription:
      "Optimasi teknis SEO, perbaikan performa, dan pemeliharaan rutin agar website tetap cepat dan terindeks dengan baik.",
    features: [
      "Audit teknis SEO (Core Web Vitals, schema)",
      "Perbaikan bug & update konten",
      "Monitoring uptime & keamanan",
    ],
    longDescription:
      "Layanan ini ditujukan untuk website yang sudah online namun perlu perawatan rutin. Kami menangani audit dan perbaikan teknis SEO, pembaruan dependensi, perbaikan bug, pemantauan uptime, dan backup berkala.",
    deliverables: [
      "Laporan audit SEO (awal & periodik)",
      "Perbaikan teknis sesuai temuan",
      "Laporan performa bulanan",
      "Backup berkala",
    ],
    techStack: ["Google Search Console", "Lighthouse / PageSpeed Insights", "Uptime monitoring", "Stack sesuai website yang ada"],
    process: [
      { step: "01", title: "Audit Awal", description: "Scan menyeluruh SEO teknis, kecepatan, dan keamanan." },
      { step: "02", title: "Prioritisasi", description: "Daftar temuan diurutkan berdasarkan dampak." },
      { step: "03", title: "Perbaikan", description: "Implementasi fix sesuai prioritas yang disepakati." },
      { step: "04", title: "Monitoring", description: "Pemantauan rutin dan laporan bulanan." },
    ],
    estimatedDuration: "Kontrak bulanan (minimum 3 bulan)",
    startingPrice: null, // TODO
    faqs: [
      {
        question: "Apakah bisa hanya audit saja tanpa kontrak maintenance?",
        answer:
          "Bisa. Kami menyediakan layanan audit one-time yang menghasilkan laporan lengkap beserta rekomendasi perbaikan yang bisa Anda kerjakan sendiri atau bersama kami.",
      },
    ],
  },
];

/**
 * Helper: ambil layanan berdasarkan slug
 * @param {string} slug
 * @returns {object|undefined}
 */
export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}

/**
 * Helper: ambil layanan yang ditampilkan di landing page (featured)
 * @returns {object[]}
 */
export function getFeaturedServices() {
  return services.filter((s) => s.featured);
}
