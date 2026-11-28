/**
 * Halaman detail /layanan/:slug (Bagian 2)
 *
 * Menampilkan:
 * - Deskripsi lengkap layanan
 * - Fitur + deliverables
 * - Tech stack
 * - Alur kerja layanan spesifik
 * - Estimasi durasi
 * - FAQ per layanan
 * - CTA ke kontak
 * - 404 bila slug tidak ditemukan
 *
 * SEO: title + meta description + OG per slug di-set via useEffect.
 */

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  MessageCircle,
  Mail,
  PackageCheck,
  Code2,
} from "lucide-react";
import { getServiceBySlug } from "../data/services";
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

// ─── FAQ Item ──────────────────────────────────────────────────────────────────
function FAQItem({ question, answer, index }) {
  const [open, setOpen] = useState(false);
  const id = `detail-faq-${index}`;

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
          className={`shrink-0 text-blue-600 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
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

// ─── 404 ───────────────────────────────────────────────────────────────────────
function ServiceNotFound() {
  useSEO({
    title: "Layanan Tidak Ditemukan — GaruDev",
    description: "Halaman layanan yang Anda cari tidak tersedia. Kembali ke daftar semua layanan GaruDev.",
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-5 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        <PackageCheck size={36} strokeWidth={1.5} aria-hidden="true" />
      </div>

      <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-[#101B40] md:text-3xl">
        Layanan Tidak Ditemukan
      </h1>

      <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">
        Layanan yang Anda cari tidak tersedia. Mungkin sudah dipindah atau URL-nya salah.
      </p>

      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
        <Link
          to="/layanan"
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Lihat Semua Layanan
        </Link>

        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-7 py-3.5 text-sm font-semibold text-gray-700 transition-all hover:border-blue-300 hover:text-blue-600"
        >
          Ke Beranda
        </Link>
      </div>
    </main>
  );
}

// ─── Halaman Detail ────────────────────────────────────────────────────────────
export default function LayananDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useSEO(
    service
      ? {
          title: `${service.title} — GaruDev`,
          description: service.shortDescription,
          ogTitle: `${service.title} | Layanan GaruDev`,
          ogDescription: service.shortDescription,
        }
      : {
          title: "Layanan Tidak Ditemukan — GaruDev",
          description: "Halaman layanan ini tidak tersedia.",
        }
  );

  if (!service) return <ServiceNotFound />;

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      {/* ── Hero / Header layanan ─────────────────────────────────────── */}
      <section
        aria-labelledby="detail-heading"
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
              <li>
                <Link to="/" className="transition-colors hover:text-blue-600">
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/layanan" className="transition-colors hover:text-blue-600">
                  Layanan
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#171717]" aria-current="page">
                {service.title}
              </li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-16">
            {/* Kiri: Deskripsi */}
            <div>
              {/* Icon + judul */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <ServiceIcon name={service.iconName} size={28} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                  Layanan GaruDev
                </span>
              </div>

              <h1
                id="detail-heading"
                className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#101B40] md:text-5xl"
              >
                {service.title}
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                {service.longDescription}
              </p>

              {/* Estimasi durasi */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-xs text-gray-600">
                <Clock size={14} className="text-blue-600" aria-hidden="true" />
                <span>
                  <strong>Estimasi:</strong> {service.estimatedDuration}
                </span>
              </div>
            </div>

            {/* Kanan: CTA card */}
            <aside
              aria-label="Mulai proyek ini"
              className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-[0_12px_40px_rgba(0,0,0,0.07)]"
            >
              <h2 className="text-lg font-bold tracking-tight text-[#101B40]">
                Tertarik dengan layanan ini?
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Konsultasi pertama gratis — ceritakan kebutuhan Anda.
              </p>

              {service.startingPrice && (
                <p className="mt-4 text-xs text-gray-400">
                  Mulai dari{" "}
                  <strong className="text-[#171717]">{service.startingPrice}</strong>
                </p>
              )}

              <div className="mt-6 flex flex-col gap-3">
                {/* TODO: Ganti href dengan nomor WhatsApp aktual */}
                <a
                  href={`https://wa.me/6281234567890?text=Halo%20GaruDev%2C%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-blue-600 px-6 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Konsultasi via WhatsApp
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href="mailto:hello@garudev.id"
                  className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full border-2 border-[#101B40] px-6 text-sm font-bold text-[#101B40] transition-all duration-300 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
                >
                  <Mail size={16} aria-hidden="true" />
                  {/* TODO: Ganti dengan email aktual */}
                  Kirim Email
                </a>
              </div>

              <Link
                to="/layanan"
                className="mt-5 flex items-center gap-1.5 text-xs text-gray-400 transition-colors hover:text-blue-600"
              >
                <ArrowLeft size={13} aria-hidden="true" />
                Lihat layanan lain
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Fitur + Deliverables ──────────────────────────────────────── */}
      <section
        aria-label="Fitur dan deliverables"
        className="bg-gray-50 px-5 py-16 md:px-10 md:py-20 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Fitur */}
            <div>
              <h2 className="mb-6 text-xl font-bold tracking-tight text-[#101B40]">
                Yang Kami Kerjakan
              </h2>
              <ul className="space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-blue-600" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div>
              <h2 className="mb-6 text-xl font-bold tracking-tight text-[#101B40]">
                Yang Anda Terima
              </h2>
              <ul className="space-y-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-gray-700">
                    <PackageCheck size={16} className="mt-0.5 shrink-0 text-blue-600" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ───────────────────────────────────────────────── */}
      <section
        aria-labelledby="techstack-heading"
        className="px-5 py-16 md:px-10 md:py-20 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <h2
            id="techstack-heading"
            className="mb-6 text-xl font-bold tracking-tight text-[#101B40]"
          >
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-700 shadow-sm"
              >
                <Code2 size={12} className="mr-1.5 inline text-blue-600" aria-hidden="true" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Alur Kerja Layanan Ini ────────────────────────────────────── */}
      <section
        aria-labelledby="process-heading"
        className="bg-gray-50 px-5 py-16 md:px-10 md:py-24 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <h2
            id="process-heading"
            className="mb-10 text-xl font-bold tracking-tight text-[#101B40] md:text-2xl"
          >
            Alur Pengerjaan
          </h2>

          <ol className="relative space-y-0">
            {service.process.map(({ step, title: stepTitle, description }, i) => (
              <li
                key={step}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                {/* Garis vertikal penghubung */}
                {i < service.process.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute left-5 top-10 bottom-0 w-[2px] bg-blue-100"
                  />
                )}

                {/* Nomor step */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-md shadow-blue-200">
                  {step}
                </div>

                {/* Konten */}
                <div className="pt-1.5">
                  <h3 className="text-sm font-bold text-[#171717]">{stepTitle}</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── FAQ per Layanan ──────────────────────────────────────────── */}
      {service.faqs?.length > 0 && (
        <section
          aria-labelledby="faq-detail-heading"
          className="px-5 py-16 md:px-10 md:py-24 lg:px-20"
        >
          <div className="mx-auto max-w-4xl">
            <h2
              id="faq-detail-heading"
              className="mb-8 text-xl font-bold tracking-tight text-[#101B40] md:text-2xl"
            >
              Pertanyaan tentang {service.title}
            </h2>

            <div className="space-y-3">
              {service.faqs.map((item, i) => (
                <FAQItem key={item.question} index={i} {...item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA Bottom ───────────────────────────────────────────────── */}
      <section
        aria-labelledby="cta-detail-heading"
        className="bg-blue-600 px-5 py-16 text-center md:px-10 md:py-24 lg:px-20"
      >
        <div className="mx-auto max-w-2xl">
          <h2
            id="cta-detail-heading"
            className="text-2xl font-extrabold leading-tight tracking-tight text-white md:text-3xl"
          >
            Siap memulai proyek {service.title}?
          </h2>
          <p className="mt-4 text-sm leading-7 text-blue-100">
            Hubungi kami sekarang — konsultasi pertama gratis dan tanpa komitmen.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* TODO: Ganti dengan nomor WhatsApp aktual */}
            <a
              href={`https://wa.me/6281234567890?text=Halo%20GaruDev%2C%20saya%20ingin%20konsultasi%20tentang%20${encodeURIComponent(service.title)}`}
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
          </div>
        </div>
      </section>
    </main>
  );
}
