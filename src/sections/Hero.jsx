import { ArrowUpRight, Play, Star } from "lucide-react";
import CircularBadge from "../components/CircularBadge";
import Magnet from "../components/Magnet";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-12 pt-44 md:px-12 md:pt-48 lg:px-16 lg:pt-48">
      {/* Hero Intro */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="mb-5 text-xs font-medium uppercase tracking-wide text-gray-600">
            Selamat datang di agensi digital kami
          </p>

          <h1 className="text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-[#171717]">
            CREATIVE STUDIO
            <br /> 
            WE ARE A DIGITAL
            <br />
            <span className="inline-flex items-center gap-4">
              <span>AGENCY</span>
            </span>
          </h1>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Magnet padding={80} magnetStrength={3} maxOffset={18} tilt={3} scale={1.02}>
              <a
                href="#contact"
                className="group flex items-center gap-4 rounded-full bg-blue-600 px-6 py-3.5 text-[11px] font-medium text-white transition-all hover:bg-blue-700"
              >
                MULAI PROYEK
                <Star
                  size={15}
                  className="transition-transform group-hover:rotate-45"
                />
              </a>
            </Magnet>

            <Magnet padding={80} magnetStrength={3} maxOffset={18} tilt={3} scale={1.02}>
              <a
                href="#projects"
                className="group flex items-center gap-4 rounded-full border border-black px-6 py-3.5 text-[11px] font-medium transition-all hover:bg-black hover:text-white"
              >
                LIHAT KARYA KAMI
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </Magnet>
          </div>
        </div>

        {/* Right Description */}
        <div className="flex flex-col justify-between lg:col-span-4 lg:pl-8">
          <p className="max-w-sm text-sm leading-7 text-gray-600 lg:ml-auto">
            Memberdayakan bisnis Anda dengan solusi digital inovatif yang
            mendorong pertumbuhan dan efisiensi melalui teknologi mutakhir serta
            pengembangan perangkat lunak ahli.
          </p>

          <div className="hidden justify-end pb-2 lg:flex">
            <CircularBadge />
          </div>
        </div>
      </div>

      {/* Secondary Intro */}
      <div className="mt-20 grid grid-cols-1 items-start gap-6 md:grid-cols-2">
        <h2 className="max-w-xs text-xl font-medium leading-snug tracking-tight">
          Memberikan layanan terbaik dengan
          <br />
          ide dan inovasi tanpa batas.
        </h2>

        <p className="max-w-md text-xs leading-6 text-gray-500 md:ml-auto">
          Di agensi kami, kami memberikan layanan tak tertandingi dengan merancang
          solusi kreatif dan inovatif. Kami melampaui pendekatan konvensional,
          memadukan kreativitas dengan teknologi mutakhir untuk memberikan hasil
          luar biasa yang melampaui ekspektasi.
        </p>
      </div>

      {/* Bottom Showcase */}
      <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-12">
        {/* Statistics Card */}
        <div className="relative flex min-h-[270px] flex-col justify-between overflow-hidden rounded-2xl bg-blue-600 p-7 text-white md:col-span-4 lg:min-h-[310px]">
          <div className="absolute -right-16 top-10 h-52 w-52 rounded-full border border-white/20 bg-blue-500/60" />

          <div className="relative z-10">
            <h3 className="text-5xl font-semibold tracking-tight">200+</h3>

            <p className="mt-2 text-[11px] text-white/80">
              Proyek selesai dan sukses diluncurkan
            </p>
          </div>

          <div className="relative z-10 flex items-center">
            <div className="flex -space-x-3">
              {[
                "photo-1534528741775-53994a69daeb",
                "photo-1500648767791-00dcc994a43e",
                "photo-1506794778202-cad84cf45f1d",
              ].map((photo) => (
                <img
                  key={photo}
                  src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=100&q=80`}
                  alt="Klien"
                  loading="lazy"
                  decoding="async"
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>

            <span className="ml-3 text-2xl font-light">+</span>
          </div>
        </div>

        {/* Image Showcase */}
        <div className="group relative min-h-[270px] overflow-hidden rounded-2xl md:col-span-8 lg:min-h-[310px]">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85"
            alt="Tim kreatif berkolaborasi"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/10" />

          <button
            aria-label="Putar video perkenalan"
            className="absolute bottom-0 right-0 flex h-24 w-24 items-center justify-center rounded-tl-[35px] bg-white"
          >
            <Magnet padding={60} magnetStrength={2} maxOffset={12} tilt={4} scale={1.05}>
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white transition-transform duration-300 hover:scale-110">
                <Play size={24} fill="currentColor" />
              </span>
            </Magnet>
          </button>
        </div>
      </div>
    </section>
  );
}
