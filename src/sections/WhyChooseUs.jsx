import {
  Rocket,
  ShieldCheck,
  Headset,
  Code2,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import TiltedCard, { TiltedCardLayer } from "../components/TiltedCard";
import Magnet from "../components/Magnet";

const features = [
  {
    icon: Rocket,
    title: "Kinerja Optimal",
    description: "Website ultra-cepat, responsif, dan siap menangani lonjakan pengunjung bisnis Anda.",
  },
  {
    icon: ShieldCheck,
    title: "Keamanan Terjamin",
    description: "Arsitektur kode modern dengan proteksi data maksimal dan sertifikasi standar industri.",
  },
  {
    icon: Headset,
    title: "Tim Profesional",
    description: "Didukung developer berpengalaman dan tim support responsif yang siap membantu Anda.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/25 to-white px-6 py-24 md:px-12 lg:px-16 lg:py-32"
    >
      {/* Ambient Background Accents */}
      <div className="pointer-events-none absolute left-0 top-1/4 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 -z-10 h-96 w-96 translate-x-1/3 rounded-full bg-blue-50/60 blur-3xl" />

      <div className="mx-auto grid max-w-[1350px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Mascot Showcase Column */}
        <div className="relative flex items-center justify-center">
          {/* Outer Ambient Glow */}
          <div className="pointer-events-none absolute h-[370px] w-[370px] rounded-full bg-blue-400/20 blur-3xl sm:h-[450px] sm:w-[450px] md:h-[500px] md:w-[500px] lg:h-[520px] lg:w-[520px]" />

          {/* Concentric Outer Ring */}
          <div className="animate-pulse-ring pointer-events-none absolute h-[380px] w-[380px] rounded-full border border-blue-200/70 bg-blue-50/40 sm:h-[460px] sm:w-[460px] md:h-[510px] md:w-[510px] lg:h-[530px] lg:w-[530px]" />

          {/* Floating Feature Card: Top Left */}
          <div className="animate-float absolute -left-2 top-[6%] z-20 flex items-center gap-3 rounded-2xl border border-blue-100 bg-white/95 px-3.5 py-2.5 shadow-xl shadow-blue-900/10 backdrop-blur-md sm:-left-4 sm:px-4 sm:py-3 lg:-left-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-xs">
              <Code2 size={20} />
            </div>
            <div>
              <div className="text-[12px] font-bold text-gray-900">Kode Bersih</div>
              <div className="text-[10px] font-medium text-gray-500">Arsitektur Modern</div>
            </div>
          </div>

          {/* Floating Feature Card: Top Right */}
          <div className="animate-float-reverse absolute -right-2 top-[16%] z-20 flex items-center gap-3 rounded-2xl border border-blue-100 bg-white/95 px-3.5 py-2.5 shadow-xl shadow-blue-900/10 backdrop-blur-md sm:-right-4 sm:px-4 sm:py-3 lg:-right-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-xs">
              <Rocket size={20} />
            </div>
            <div>
              <div className="text-[12px] font-bold text-gray-900">Performa Cepat</div>
              <div className="text-[10px] font-medium text-gray-500">Kinerja Tinggi</div>
            </div>
          </div>

          {/* Floating Badge: Bottom Right */}
          <div className="animate-float absolute -bottom-3 right-4 z-20 flex items-center gap-2 rounded-full border border-blue-100 bg-white/95 px-4 py-2 shadow-lg shadow-blue-900/10 backdrop-blur-md sm:bottom-2 sm:right-6 md:right-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-semibold text-gray-800">Tersertifikasi Garudev</span>
          </div>

          {/* TiltedCard 3D Interactive Mascot Container */}
          <TiltedCard
            radius="50%"
            containerWidth="100%"
            containerHeight="min(92vw, 500px)"
            imageWidth="min(88vw, 490px)"
            imageHeight="min(88vw, 490px)"
            rotateAmplitude={14}
            scaleOnHover={1.04}
            glare={0.4}
            glareColor="#ffffff"
            shadow={0.5}
            perspective={900}
            captionText="Maskot Garudev ✨"
            showTooltip={true}
            floating={true}
            style={{
              '--tc-shadow-color': 'rgba(37, 99, 235, 0.35)',
            }}
          >
            {/* Blue Silhouette Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 via-blue-600 to-blue-500" />
            <div className="pointer-events-none absolute inset-0 rounded-full bg-radial from-white/20 via-transparent to-black/25" />

            {/* Crisp White Rim Border */}
            <div className="pointer-events-none absolute inset-0 z-20 rounded-full border-4 border-white/90" />

            {/* Parallax Layer: Mascot Image - kept large & filling the circle with feet covered */}
            <TiltedCardLayer depth={28} className="flex items-end justify-center">
              <picture>
                <source srcSet="/images/mascot.webp" type="image/webp" />
                <img
                  src="/images/mascot.png"
                  alt="Maskot GaruDev merepresentasikan solusi digital cerdas dan handal"
                  width={490}
                  height={490}
                  loading="lazy"
                  decoding="async"
                  className="relative z-10 h-auto w-[114%] sm:w-[110%] md:w-[106%] max-w-none object-contain translate-y-7 sm:translate-y-9 md:translate-y-11 pointer-events-none"
                />
              </picture>
            </TiltedCardLayer>
          </TiltedCard>
        </div>

        {/* Content Column */}
        <div className="relative z-10">
          {/* Section Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/70 px-4 py-2 backdrop-blur-xs">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
              Mengapa Memilih Garudev?
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="max-w-xl text-3xl font-bold leading-[1.18] tracking-tight text-[#171717] sm:text-4xl md:text-5xl lg:text-[52px]">
            Solusi Digital Terbaik{" "}
            <span className="text-blue-600">
              untuk Bisnis Anda.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-600 md:text-base">
            Kami membantu transformasi digital bisnis Anda berkembang lebih cepat melalui solusi
            teknologi inovatif, desain berkelas dunia, dan tim ahli berdedikasi tinggi.
          </p>

          {/* Quick Value Points */}
          <div className="mt-6 flex flex-wrap gap-y-2 gap-x-6 text-xs font-medium text-gray-600">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-blue-600" />
              100% Kustom & Skalabel
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-blue-600" />
              Dukungan Purna Jual Prima
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles size={16} className="text-blue-600" />
              Standar Kualitas Modern
            </span>
          </div>

          {/* Feature Cards Grid */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group relative rounded-2xl border border-gray-100 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-600/10"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-600/30">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Magnet padding={80} magnetStrength={3} maxOffset={18} tilt={3} scale={1.02}>
              <a
                href="#services"
                className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-600/35 hover:-translate-y-0.5"
              >
                <span>Kenali Layanan Kami</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight size={16} />
                </span>
              </a>
            </Magnet>

            <Magnet padding={80} magnetStrength={3} maxOffset={18} tilt={3} scale={1.02}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50/50 hover:text-blue-600 hover:-translate-y-0.5"
              >
                Konsultasi Proyek
              </a>
            </Magnet>
          </div>
        </div>
      </div>
    </section>
  );
}
