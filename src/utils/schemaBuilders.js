/**
 * JSON-LD builders untuk tiap tipe schema yang digunakan GaruDev.
 * Hanya data yang benar diisi — field TODO dibiarkan null/dihapus.
 */

import { SITE_URL, SITE_NAME } from "./seo.js";

/** Organization / ProfessionalService — digunakan di halaman utama */
export function buildOrganizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/favicon.svg`,
      width: 32,
      height: 32,
    },
    description:
      "Studio agensi digital yang mengerjakan website, aplikasi mobile, sistem informasi bisnis, dan desain UI/UX menggunakan teknologi modern.",
    email: "garudev@gmail.com",
    // TODO: Isi nomor telepon aktual saat sudah ada
    // "telephone": "+62-xxx-xxxx-xxxx",
    address: {
      "@type": "PostalAddress",
      // TODO: Verifikasi alamat aktual (Demak, bukan Semarang)
      addressLocality: "Demak",
      addressRegion: "Jawa Tengah",
      addressCountry: "ID",
    },
    areaServed: [
      { "@type": "City", name: "Demak" },
      { "@type": "State", name: "Jawa Tengah" },
      { "@type": "Country", name: "Indonesia" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    // TODO: Tambah sameAs ke profil resmi (Instagram, LinkedIn, dll.)
    // sameAs: ["https://www.instagram.com/garudev"],
    priceRange: "$$",
  };
}

/** Service schema per layanan */
export function buildServiceLd(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/layanan/${service.slug}#service`,
    name: service.title,
    description: service.longDescription,
    url: `${SITE_URL}/layanan/${service.slug}`,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    serviceType: service.title,
  };
}

/** BreadcrumbList — digunakan di halaman detail layanan */
export function buildBreadcrumbLd(items) {
  // items: [{ name, url }]
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** FAQPage — dari array { question, answer } */
export function buildFAQLd(faqs) {
  if (!faqs?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

/** WebPage schema untuk halaman daftar /layanan */
export function buildWebPageLd({ name, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name,
    description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

/** LocalBusiness schema untuk halaman /jasa-website-demak */
export function buildLocalBusinessDemakLd() {
  const areaLayanan = [
    "Demak", "Kudus", "Jepara", "Semarang", "Kendal",
    "Pati", "Rembang", "Grobogan", "Purwodadi",
  ];
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/jasa-website-demak#localbusiness`,
    name: "GaruDev — Jasa Website Demak",
    description:
      "GaruDev mengerjakan pembuatan website, aplikasi mobile, dan sistem informasi untuk pelaku usaha di Demak dan Jawa Tengah.",
    url: `${SITE_URL}/jasa-website-demak`,
    // TODO: Isi telephone aktual
    address: {
      "@type": "PostalAddress",
      addressLocality: "Demak",
      addressRegion: "Jawa Tengah",
      postalCode: "59511",
      addressCountry: "ID",
    },
    areaServed: areaLayanan.map((kota) => ({
      "@type": "City",
      name: kota,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    priceRange: "$$",
  };
}
