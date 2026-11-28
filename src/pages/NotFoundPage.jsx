import { Link } from "react-router-dom";
import { ArrowLeft, SearchX } from "lucide-react";
import { useSEO } from "../utils/useSEO";

export default function NotFoundPage() {
  useSEO({
    title: "Halaman Tidak Ditemukan (404) — GaruDev Digital",
    description:
      "Halaman yang Anda cari tidak tersedia atau telah dipindahkan. Kembali ke beranda atau lihat daftar layanan GaruDev.",
    path: "/404",
    robots: "noindex, nofollow",
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-5 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        <SearchX size={36} strokeWidth={1.5} aria-hidden="true" />
      </div>

      <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-[#101B40] md:text-3xl">
        Halaman Tidak Ditemukan (404)
      </h1>

      <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
        URL yang Anda buka tidak tersedia atau telah dipindahkan. Anda dapat kembali ke beranda atau melihat daftar layanan kami.
      </p>

      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Ke Beranda
        </Link>

        <Link
          to="/layanan"
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-7 py-3.5 text-sm font-semibold text-gray-700 transition-all hover:border-blue-300 hover:text-blue-600"
        >
          Lihat Semua Layanan
        </Link>
      </div>
    </main>
  );
}
