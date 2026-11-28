/**
 * Konfigurasi SEO terpusat untuk semua route publik GaruDev.
 * Digunakan oleh:
 * 1. Komponen React (via useSEO)
 * 2. Script prerender (scripts/prerender.mjs) agar HTML awal identik
 */

import { services } from "../data/services.js";
import { SITE_URL } from "./seo.js";
import {
  buildOrganizationLd,
  buildServiceLd,
  buildBreadcrumbLd,
  buildFAQLd,
  buildWebPageLd,
  buildLocalBusinessDemakLd,
} from "./schemaBuilders.js";

export const HOME_FAQS = [
  {
    question: "Apakah kami menyediakan jasa SEO dan maintenance juga?",
    answer:
      "Ya, kami menyediakan layanan optimasi SEO dasar dan maintenance website. Layanan ini dapat disesuaikan dengan kebutuhan bisnis Anda, mulai dari pembaruan konten, perbaikan teknis, hingga pemantauan performa website.",
  },
  {
    question: "Bisa membuat aplikasi mobile Android sekaligus iOS?",
    answer:
      "Tentu. Kami dapat membantu merancang dan mengembangkan aplikasi mobile untuk Android maupun iOS. Teknologi dan pendekatan pengembangan akan disesuaikan dengan kebutuhan serta skala proyek Anda.",
  },
  {
    question: "Bagaimana jika saya butuh fitur kustom yang sangat spesifik?",
    answer:
      "Kami dapat mengembangkan fitur sesuai kebutuhan bisnis Anda. Setiap kebutuhan akan didiskusikan terlebih dahulu agar solusi yang dibangun tepat sasaran, terukur, dan dapat dikembangkan di kemudian hari.",
  },
  {
    question: "Apakah kode sumber (Source Code) menjadi milik saya?",
    answer:
      "Ya, source code proyek akan diserahkan kepada klien sesuai kesepakatan kerja sama. Anda dapat mengelola dan mengembangkan website atau aplikasi tersebut lebih lanjut.",
  },
];

export const LAYANAN_FAQS = [
  {
    question: "Berapa lama waktu pengerjaan rata-rata?",
    answer:
      "Tergantung layanan dan kompleksitas. Website company profile: 3–6 minggu; aplikasi mobile: 8–16 minggu; sistem informasi bisnis: 10–20 minggu. Estimasi lebih akurat diberikan setelah discovery.",
  },
  {
    question: "Bagaimana alur pembayaran?",
    answer:
      "DP di awal (biasanya 50%), sisanya dilunasi setelah hasil final disetujui sebelum serah terima. Tidak ada biaya tersembunyi.",
  },
  {
    question: "Apakah source code menjadi milik saya?",
    answer:
      "Ya. Seluruh source code diserahkan kepada klien setelah pelunasan, sesuai perjanjian kerja sama.",
  },
  {
    question: "Apakah ada garansi setelah proyek selesai?",
    answer:
      "Ada garansi bug fixing 30 hari setelah serah terima tanpa biaya tambahan, selama bug tersebut berasal dari pengerjaan kami.",
  },
];

export const STATIC_ROUTES_SEO = {
  "/": {
    title: "GaruDev — Jasa Pembuatan Website dan Aplikasi di Demak",
    description:
      "GaruDev adalah studio agensi digital yang melayani jasa pembuatan website, aplikasi mobile, sistem informasi bisnis, dan UI/UX design untuk UMKM Indonesia.",
    path: "/",
    robots: "index, follow",
    jsonLd: [
      { id: "ld-organization", data: buildOrganizationLd() },
      { id: "ld-home-faq", data: buildFAQLd(HOME_FAQS) },
    ],
  },
  "/layanan": {
    title: "Daftar Layanan Website, Aplikasi & Sistem — GaruDev Studio",
    description:
      "Jelajahi daftar layanan website, aplikasi web SPA/PWA, aplikasi mobile, sistem informasi bisnis, UI/UX design, dan maintenance website oleh tim GaruDev.",
    path: "/layanan",
    robots: "index, follow",
    jsonLd: [
      {
        id: "ld-layanan-page",
        data: buildWebPageLd({
          name: "Daftar Layanan Website, Aplikasi & Sistem — GaruDev",
          description:
            "Daftar layanan pembuatan website, aplikasi web, aplikasi mobile, sistem informasi bisnis, UI/UX design, dan SEO maintenance.",
          path: "/layanan",
        }),
      },
      {
        id: "ld-layanan-breadcrumb",
        data: buildBreadcrumbLd([
          { name: "Beranda", url: `${SITE_URL}/` },
          { name: "Layanan", url: `${SITE_URL}/layanan` },
        ]),
      },
      { id: "ld-layanan-faq", data: buildFAQLd(LAYANAN_FAQS) },
    ],
  },
  "/jasa-website-demak": {
    title: "Jasa Website Demak & Jawa Tengah untuk UMKM — GaruDev",
    description:
      "Jasa pembuatan website, aplikasi mobile, dan sistem informasi bisnis di Demak dan Jawa Tengah. Bisa konsultasi tatap muka atau jarak jauh tanpa biaya.",
    path: "/jasa-website-demak",
    robots: "index, follow",
    jsonLd: [
      { id: "ld-local-business", data: buildLocalBusinessDemakLd() },
      {
        id: "ld-demak-breadcrumb",
        data: buildBreadcrumbLd([
          { name: "Beranda", url: `${SITE_URL}/` },
          { name: "Jasa Website Demak", url: `${SITE_URL}/jasa-website-demak` },
        ]),
      },
    ],
  },
  "/portfolio": {
    title: "Portofolio Proyek Website & Aplikasi Digital — GaruDev",
    description:
      "Lihat contoh proyek website, aplikasi web, dan sistem informasi yang telah dikerjakan tim GaruDev untuk berbagai kebutuhan bisnis dan instansi.",
    path: "/portfolio",
    robots: "index, follow",
    jsonLd: [
      {
        id: "ld-portfolio-breadcrumb",
        data: buildBreadcrumbLd([
          { name: "Beranda", url: `${SITE_URL}/` },
          { name: "Portfolio", url: `${SITE_URL}/portfolio` },
        ]),
      },
    ],
  },
};

export function getServiceSEO(service) {
  const path = `/layanan/${service.slug}`;
  const jsonLd = [
    { id: "ld-service", data: buildServiceLd(service) },
    {
      id: "ld-breadcrumb",
      data: buildBreadcrumbLd([
        { name: "Beranda", url: `${SITE_URL}/` },
        { name: "Layanan", url: `${SITE_URL}/layanan` },
        { name: service.title, url: `${SITE_URL}${path}` },
      ]),
    },
  ];
  if (service.faqs?.length) {
    jsonLd.push({ id: "ld-service-faq", data: buildFAQLd(service.faqs) });
  }

  return {
    title: service.seoTitle || `${service.title} — GaruDev`,
    description: service.seoDescription || service.shortDescription,
    path,
    robots: "index, follow",
    jsonLd,
  };
}

export function getAllPublicRoutesSEO() {
  const list = Object.values(STATIC_ROUTES_SEO);
  for (const s of services) {
    list.push(getServiceSEO(s));
  }
  return list;
}
