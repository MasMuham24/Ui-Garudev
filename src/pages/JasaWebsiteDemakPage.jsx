/**
 * Halaman lokal: /jasa-website-demak
 *
 * Halaman yang benar-benar informatif tentang area layanan GaruDev di Demak
 * dan Jawa Tengah. BUKAN halaman template dengan nama kota diganti.
 *
 * Konten: area layanan, contoh pekerjaan lokal, alur kerja, kontak, JSON-LD LocalBusiness.
 */

import { Link } from "react-router-dom";
import {
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  Mail,
  Clock,
  Globe,
  Smartphone,
  Database,
} from "lucide-react";
import { useSEO, useJsonLd } from "../utils/useSEO";
import { STATIC_ROUTES_SEO } from "../utils/seoConfig";
import { SITE_URL } from "../utils/seo";

// Layanan yang relevan di area lokal
const layananLokal = [
  {
    icon: Globe,
    title: "Website UMKM & Toko Online",
    desc: "Website company profile dan toko online untuk pelaku usaha di Demak, Kudus, Jepara, dan sekitarnya.",
  },
  {
    icon: Smartphone,
    title: "Aplikasi Mobile",
    desc: "Aplikasi Android & iOS untuk bisnis lokal — dari sistem pemesanan hingga aplikasi kas sederhana.",
  },
  {
    icon: Database,
    title: "Sistem Informasi",
    desc: "Sistem manajemen stok, penggajian, dan alur kerja internal yang disesuaikan dengan SOP bisnis Anda.",
  },
];

// Area yang dilayani
const areaLayanan = [
  "Demak", "Kudus", "Jepara", "Semarang", "Kendal",
  "Pati", "Rembang", "Grobogan", "Purwodadi",
];

// LocalBusiness JSON-LD
const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/jasa-website-demak#localbusiness`,
  name: "GaruDev — Jasa Website Demak",
  description:
    "GaruDev mengerjakan pembuatan website, aplikasi mobile, dan sistem informasi untuk pelaku usaha di Demak dan Jawa Tengah. Konsultasi dan kunjungan langsung tersedia.",
  url: `${SITE_URL}/jasa-website-demak`,
  // TODO: Isi telephone aktual
  // "telephone": "+62-xxx-xxxx-xxxx",
  address: {
    "@type": "PostalAddress",
    // TODO: Isi alamat lengkap aktual
    addressLocality: "Demak",
    addressRegion: "Jawa Tengah",
    postalCode: "59511",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    // TODO: Isi koordinat GPS aktual kantor/alamat GaruDev
    // latitude: -6.xxxxx,
    // longitude: 110.xxxxx,
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
  // TODO: Tambah sameAs ke profil Google Maps Business bila sudah ada
};

export default function JasaWebsiteDemakPage() {
  const seo = STATIC_ROUTES_SEO["/jasa-website-demak"];
  useSEO(seo);

  useJsonLd("ld-local-business", localBusinessLd);
  useJsonLd("ld-demak-breadcrumb", seo.jsonLd[0].data);

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="lokal-heading"
        className="relative overflow-hidden bg-white px-5 pb-16 pt-36 md:px-10 md:pt-44 lg:px-20"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:40px_40px] opacity-25"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-gray-400">
              <li><Link to="/" className="transition-colors hover:text-blue-600">Beranda</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#171717]" aria-current="page">Jasa Website Demak</li>
            </ol>
          </nav>

          {/* Badge lokasi */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600">
            <MapPin size={13} aria-hidden="true" />
            Demak & Jawa Tengah
          </div>

          <h1
            id="lokal-heading"
            className="mt-2 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-[#101B40] md:text-5xl"
          >
            Jasa Pembuatan Website di Demak dan Jawa Tengah
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            GaruDev mengerjakan website, aplikasi mobile, dan sistem informasi untuk pelaku usaha di Demak dan sekitar Jawa Tengah. Proses bisa dilakukan jarak jauh maupun dengan pertemuan langsung — disesuaikan dengan kebutuhan Anda.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/6283822757990?text=Hai%20Garudev%2C%20aku%20mau%20konsultasi%20soal%20website%20nih"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-8 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Konsultasi via WhatsApp
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>

            <Link
              to="/layanan"
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full border border-gray-200 px-8 text-sm font-semibold text-gray-700 transition-all hover:border-blue-300 hover:text-blue-600 sm:w-auto"
            >
              Lihat semua layanan
            </Link>
          </div>
        </div>
      </section>

      {/* ── Area yang dilayani ───────────────────────────────────────────── */}
      <section
        aria-labelledby="area-heading"
        className="bg-gray-50 px-5 py-14 md:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <h2
            id="area-heading"
            className="mb-6 text-xl font-bold tracking-tight text-[#101B40] md:text-2xl"
          >
            Area yang Kami Layani
          </h2>

          <div className="flex flex-wrap gap-3">
            {areaLayanan.map((kota) => (
              <span
                key={kota}
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-700 shadow-sm"
              >
                <MapPin size={11} className="text-blue-600" aria-hidden="true" />
                {kota}
              </span>
            ))}
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Untuk kota/kabupaten di luar daftar ini — kami tetap bisa mengerjakan proyek Anda secara remote. Konsultasi awal tidak dikenakan biaya.
          </p>
        </div>
      </section>

      {/* ── Layanan yang tersedia ────────────────────────────────────────── */}
      <section
        aria-labelledby="layanan-lokal-heading"
        className="px-5 py-16 md:px-10 md:py-20 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <h2
            id="layanan-lokal-heading"
            className="mb-10 text-2xl font-bold tracking-tight text-[#101B40] md:text-3xl"
          >
            Layanan yang Tersedia
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {layananLokal.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-base font-bold text-[#171717]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">{desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Lihat detail lengkap beserta tech stack dan alur pengerjaan di{" "}
            <Link to="/layanan" className="font-semibold text-blue-600 hover:underline">
              halaman layanan
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── Contoh Pekerjaan & Cakupan Proyek ───────────────────────────── */}
      <section
        aria-labelledby="contoh-pekerjaan-heading"
        className="border-t border-gray-100 bg-white px-5 py-16 md:px-10 md:py-20 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <h2
            id="contoh-pekerjaan-heading"
            className="mb-3 text-2xl font-bold tracking-tight text-[#101B40] md:text-3xl"
          >
            Contoh Pekerjaan yang Kami Tangani
          </h2>
          <p className="mb-10 max-w-2xl text-sm leading-7 text-gray-500">
            Berikut cakupan pekerjaan yang umum dibutuhkan pelaku usaha dan instansi di Demak serta Jawa Tengah.
            {/* TODO: Tambahkan studi kasus klien lokal spesifik beserta URL & tangkapan layar setelah izin publikasi diperoleh */}
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                tag: "Website UMKM",
                title: "Company Profile & Katalog Produk",
                scope: "Struktur halaman profil usaha, katalog produk/jasa terhubung ke WhatsApp, integrasi Google Maps, dan meta SEO on-page dasar.",
                stack: "React / Astro + Tailwind CSS",
              },
              {
                tag: "Sistem Informasi",
                title: "Aplikasi Stok & Penjualan Internal",
                scope: "Pencatatan stok keluar-masuk, manajemen multi-cabang/kasir, laporan harian otomatis, dan ekspor ke Excel/PDF.",
                stack: "Laravel / Node.js + MySQL",
              },
              {
                tag: "Aplikasi Web",
                title: "Portal Pendaftaran & Layanan Publik",
                scope: "Formulir pendaftaran online, unggah dokumen, pelacakan status berkas, dan dashboard admin untuk verifikasi.",
                stack: "React + REST API + PostgreSQL",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-[2rem] border border-gray-100 bg-gray-50/70 p-7"
              >
                <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-600">
                  {item.tag}
                </span>
                <h3 className="mt-4 text-base font-bold text-[#171717]">{item.title}</h3>
                <p className="mt-2 flex-grow text-sm leading-6 text-gray-600">{item.scope}</p>
                <p className="mt-4 border-t border-gray-200/70 pt-3 text-xs font-medium text-gray-500">
                  Stack: {item.stack}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Lihat karya lain di{" "}
            <Link to="/portfolio" className="font-semibold text-blue-600 hover:underline">
              halaman portofolio
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── Alur pengerjaan (singkat) ────────────────────────────────────── */}
      <section
        aria-labelledby="alur-lokal-heading"
        className="bg-gray-50 px-5 py-16 md:px-10 md:py-20 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <h2
            id="alur-lokal-heading"
            className="mb-10 text-2xl font-bold tracking-tight text-[#101B40] md:text-3xl"
          >
            Cara Kerja Kami
          </h2>

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", title: "Konsultasi", desc: "Ceritakan kebutuhan Anda — via WhatsApp, Zoom, atau tatap muka di Demak." },
              { n: "02", title: "Penawaran & Brief", desc: "Kami kirim estimasi biaya dan scope pekerjaan secara tertulis." },
              { n: "03", title: "Pengerjaan", desc: "Proses berjalan transparan dengan update berkala. Revisi disertakan." },
              { n: "04", title: "Serah Terima", desc: "Source code, panduan, dan aset diserahkan setelah pelunasan." },
            ].map(({ n, title, desc }) => (
              <li key={n} className="flex flex-col">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow">
                  {n}
                </div>
                <h3 className="text-sm font-bold text-[#171717]">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-gray-500">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Kenapa GaruDev ──────────────────────────────────────────────── */}
      <section
        aria-labelledby="kenapa-heading"
        className="px-5 py-16 md:px-10 md:py-20 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <h2
            id="kenapa-heading"
            className="mb-8 text-2xl font-bold tracking-tight text-[#101B40] md:text-3xl"
          >
            Apa yang Membedakan GaruDev
          </h2>

          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              "Estimasi biaya dan durasi diberikan secara tertulis sebelum pengerjaan dimulai",
              "Source code diserahkan ke klien — tidak ada vendor lock-in",
              "Revisi desain termasuk dalam paket, bukan biaya tambahan",
              "Bisa konsultasi tatap muka untuk klien di area Demak dan sekitarnya",
              "Stack modern yang dapat dikembangkan ke depan (bukan template CMS generik)",
              "Maintenance 30 hari setelah serah terima tanpa biaya tambahan",
            ].map((poin) => (
              <li key={poin} className="flex items-start gap-3 text-sm text-gray-700">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-blue-600" aria-hidden="true" />
                {poin}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA Kontak ──────────────────────────────────────────────────── */}
      <section
        aria-labelledby="cta-lokal-heading"
        className="bg-blue-600 px-5 py-16 text-center md:px-10 md:py-24 lg:px-20"
      >
        <div className="mx-auto max-w-2xl">
          <h2
            id="cta-lokal-heading"
            className="text-2xl font-extrabold leading-tight tracking-tight text-white md:text-3xl"
          >
            Mulai konsultasi — tanpa biaya, tanpa komitmen
          </h2>
          <p className="mt-4 text-sm leading-7 text-blue-100">
            Ceritakan proyek Anda. Kami berikan gambaran solusi dan estimasi biaya dalam 1–2 hari kerja.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/6283822757990?text=Hai%20Garudev%2C%20aku%20mau%20konsultasi%20soal%20website%20nih"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[56px] w-full items-center justify-center gap-3 rounded-full bg-white px-8 text-sm font-bold text-blue-600 shadow-lg transition-all duration-300 hover:-translate-y-1 sm:w-auto"
            >
              <MessageCircle size={19} aria-hidden="true" />
              Hubungi via WhatsApp
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>

            {/* TODO: Ganti dengan email aktual */}
            <a
              href="mailto:garudev@gmail.com"
              className="inline-flex min-h-[56px] w-full items-center justify-center gap-3 rounded-full border-2 border-white/40 px-8 text-sm font-bold text-white transition-all hover:border-white hover:bg-white/10 sm:w-auto"
            >
              <Mail size={17} aria-hidden="true" />
              Kirim Email
            </a>
          </div>

          <p className="mt-6 flex items-center justify-center gap-2 text-xs text-blue-200">
            <Clock size={13} aria-hidden="true" />
            Respons dalam 1–2 hari kerja · Senin–Jumat, 09.00–17.00 WIB
          </p>
        </div>
      </section>
    </main>
  );
}
