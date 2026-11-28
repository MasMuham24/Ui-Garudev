/**
 * Halaman /layanan (Bagian 2)
 *
 * Menampilkan:
 * - Hero singkat + judul + deskripsi
 * - Filter kategori (bila layanan > 6)
 * - Grid semua layanan
 * - Section "Alur Pengerjaan"
 * - FAQ ringkas
 * - CTA ke kontak/WhatsApp
 *
 * SEO: title + meta description + OG per halaman di-set via <title> tag
 * (tanpa library tambahan; Vite SPA menggunakan index.html statis, jadi
 *  meta dinamis di-set via document.title + meta-tag manipulation di useEffect).
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  Mail,
  MessageCircle as MessageCircle2,
  ClipboardList,
  Wallet,
  Code2,
  CreditCard,
  PackageCheck,
} from "lucide-react";
import { services, SERVICE_CATEGORIES } from "../data/services";
import ServiceIcon from "../components/ServiceIcon";

// ─── SEO Hook ──────────────────────────────────────────────────────────────────
function useSEO({ title, description, ogTitle, ogDescription }) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name, content, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", ogTitle ?? title, "property");
    setMeta("og:description", ogDescription ?? description, "property");
    setMeta("og:type", "website", "property");

    return () => {
      document.title = "GaruDev — Jasa Pembuatan Website & Aplikasi";
    };
  }, [title, description, ogTitle, ogDescription]);
}

// ─── Process Steps (sama seperti ProcessSection, disederhanakan) ───────────────
const workflowSteps = [
  { number: "01", title: "Konsultasi", description: "Diskusikan ide, kebutuhan, dan tujuan proyek bersama tim GaruDev.", Icon: MessageCircle },
  { number: "02", title: "Brief Project", description: "Sampaikan detail fitur, referensi, dan konsep proyek yang diinginkan.", Icon: ClipboardList },
  { number: "03", title: "Pembayaran DP", description: "Lakukan DP sebagai tanda dimulainya pengerjaan proyek.", Icon: Wallet },
  { number: "04", title: "Pengerjaan", description: "Tim kami mengerjakan sesuai brief dan mengirimkan update berkala.", Icon: Code2 },
  { number: "05", title: "Pelunasan", description: "Setelah hasil disetujui, lakukan pembayaran sisa biaya.", Icon: CreditCard },
  { number: "06", title: "Penyerahan", description: "Source code, aset, dan dokumentasi diserahkan kepada Anda.", Icon: PackageCheck },
];

// ─── Global FAQ ────────────────────────────────────────────────────────────────
const globalFaqs = [
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

// ─── Sub-komponen FAQ ──────────────────────────────────────────────────────────
function FAQItem({ question, answer, index }) {
  const [open, setOpen] = useState(false);
  const id = `layanan-faq-${index}`;

  return (
    <div
      className={`overflow-hidden rounded-[18px] border transition-all duration-300 ${
        open
          ? "border-blue-200 bg-blue-50/40"
          : "border-slate-200/80 bg-white hover:border-blue-200"
      }`}
    >
      <button
        type="button"
        id={`${id}-btn`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-7 md:py-6"
      >
        <span className="text-sm font-bold leading-6 text-[#101B40] md:text-base">
          {question}
        </span>
        <ChevronDown
          size={20}
          aria-hidden="true"
          className={`shrink-0 text-blue-600 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        aria-hidden={!open}
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-7 text-slate-600 md:px-7 md:pb-6">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Sub-komponen Service Card ─────────────────────────────────────────────────
function ServiceCard({ service }) {
  return (
    <article className="group flex flex-col rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-100/50 focus-within:outline focus-within:outline-2 focus-within:outline-blue-600 focus-within:outline-offset-2 md:p-8">
      {/* Icon */}
      <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
        <ServiceIcon name={service.iconName} size={25} />
      </div>

      {/* Konten */}
      <div className="mt-5 flex flex-grow flex-col">
        <h2 className="text-base font-bold tracking-tight text-[#171717] md:text-lg">
          {service.title}
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          {service.shortDescription}
        </p>

        <ul className="mt-4 space-y-1.5" aria-label={`Fitur ${service.title}`}>
          {service.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
              <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-blue-600" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <Link
            to={`/layanan/${service.slug}`}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-600 transition-all duration-200 hover:gap-3 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
            aria-label={`Lihat detail layanan ${service.title}`}
          >
            Lihat detail
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

// ─── Halaman utama ─────────────────────────────────────────────────────────────
export default function LayananPage() {
  const [activeCategory, setActiveCategory] = useState("semua");

  useSEO({
    title: "Layanan GaruDev — Website, Aplikasi Mobile & Sistem Informasi",
    description:
      "GaruDev menyediakan jasa pembuatan website, aplikasi web & mobile, sistem informasi bisnis, desain UI/UX, serta SEO & maintenance. Lihat semua layanan dan detail teknisnya.",
    ogTitle: "Layanan GaruDev — Website, Aplikasi & Sistem Informasi",
    ogDescription:
      "Jasa pembuatan website, aplikasi mobile, dan sistem informasi bisnis berbasis teknologi modern. Lihat detail layanan, tech stack, dan alur pengerjaan kami.",
  });

  const showFilter = services.length > 6;

  const filteredServices =
    activeCategory === "semua"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="layanan-heading"
        className="relative overflow-hidden bg-white px-5 pb-16 pt-36 md:px-10 md:pt-44 lg:px-20"
      >
        {/* Grid dekoratif */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:40px_40px] opacity-25"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <span className="text-xs font-semibold tracking-wide text-blue-600">
            APA YANG KAMI KERJAKAN
          </span>

          <h1
            id="layanan-heading"
            className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-[#101B40] md:text-5xl"
          >
            Semua Layanan GaruDev
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            Kami mengerjakan website, aplikasi mobile, sistem informasi bisnis, dan desain UI/UX menggunakan stack yang proven dan sesuai skala proyek — bukan solusi generik.
          </p>
        </div>
      </section>

      {/* ── Filter Kategori (muncul bila layanan > 6) ───────────────────── */}
      {showFilter && (
        <section
          aria-label="Filter kategori layanan"
          className="sticky top-[80px] z-20 border-b border-gray-100 bg-white/90 px-5 py-4 backdrop-blur-md md:px-10 lg:px-20"
        >
          <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto pb-1">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={activeCategory === cat.id}
                className={`shrink-0 rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 ${
                  activeCategory === cat.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* ── Grid Layanan ─────────────────────────────────────────────────── */}
      <section
        aria-label="Daftar layanan"
        className="px-5 py-16 md:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          {filteredServices.length === 0 ? (
            <p className="text-center text-sm text-gray-400">
              Tidak ada layanan dalam kategori ini.
            </p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Alur Pengerjaan ──────────────────────────────────────────────── */}
      <section
        aria-labelledby="workflow-heading"
        className="bg-gray-50 px-5 py-20 md:px-10 md:py-28 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="text-xs font-semibold tracking-[0.2em] text-blue-600">
              HOW WE WORK
            </span>
            <h2
              id="workflow-heading"
              className="mt-3 text-3xl font-extrabold tracking-tight text-[#101B40] md:text-4xl"
            >
              Alur Pengerjaan Proyek
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 md:text-base">
              Dari konsultasi pertama hingga serah terima, setiap tahap transparan dan terdokumentasi.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-6">
            {workflowSteps.map(({ number, title, description, Icon }) => (
              <div key={number} className="flex flex-col items-start xl:items-center xl:text-center">
                <div className="flex h-13 w-13 items-center justify-center rounded-[18px] border border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-200/70">
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <span className="mt-3 text-xs font-bold tracking-widest text-blue-600">
                  STEP {number}
                </span>
                <h3 className="mt-2 text-sm font-bold text-[#171717]">{title}</h3>
                <p className="mt-1.5 text-xs leading-6 text-gray-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="faq-layanan-heading"
        className="px-5 py-20 md:px-10 md:py-28 lg:px-20"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold tracking-[0.2em] text-blue-600">
              PERTANYAAN UMUM
            </span>
            <h2
              id="faq-layanan-heading"
              className="mt-3 text-3xl font-extrabold tracking-tight text-[#101B40] md:text-4xl"
            >
              Yang Sering Ditanyakan
            </h2>
          </div>

          <div className="space-y-3">
            {globalFaqs.map((item, i) => (
              <FAQItem key={item.question} index={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="cta-layanan-heading"
        className="bg-blue-600 px-5 py-20 text-center md:px-10 md:py-28 lg:px-20"
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id="cta-layanan-heading"
            className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl"
          >
            Ada proyek yang ingin dikerjakan?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-blue-100 md:text-base">
            Konsultasi pertama gratis — ceritakan kebutuhan Anda dan kami berikan gambaran solusi serta estimasi biaya tanpa komitmen.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* TODO: Ganti href dengan nomor WhatsApp aktual */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[56px] w-full items-center justify-center gap-3 rounded-full bg-white px-8 text-sm font-bold text-blue-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto"
            >
              <MessageCircle size={19} aria-hidden="true" />
              KONSULTASI VIA WHATSAPP
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>

            <a
              href="mailto:hello@garudev.id"
              className="inline-flex min-h-[56px] w-full items-center justify-center gap-3 rounded-full border-2 border-white/40 px-8 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white/10 sm:w-auto"
            >
              <Mail size={17} aria-hidden="true" />
              {/* TODO: Ganti dengan alamat email aktual */}
              KIRIM EMAIL
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
