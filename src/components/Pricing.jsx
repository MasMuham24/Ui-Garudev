import { ArrowUpRight, Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    label: "UNTUK PERSONAL & UMKM",
    description:
      "Solusi website sederhana untuk membangun kehadiran digital bisnis Anda.",
    price: "999.000",
    featured: false,
    features: [
      "Website hingga 5 halaman",
      "Desain responsive",
      "Domain dan hosting 1 tahun",
      "Formulir kontak",
      "SEO dasar",
      "Revisi hingga 2 kali",
      "Dukungan 14 hari",
    ],
  },
  {
    name: "Business",
    label: "UNTUK BISNIS BERKEMBANG",
    description:
      "Website profesional dengan fitur lebih lengkap untuk mendukung pertumbuhan bisnis.",
    price: "2.500.000",
    featured: true,
    features: [
      "Website hingga 10 halaman",
      "Desain UI/UX custom",
      "Domain dan hosting 1 tahun",
      "Dashboard admin",
      "Integrasi WhatsApp",
      "SEO optimization",
      "Formulir dinamis",
      "Revisi hingga 4 kali",
      "Dukungan 30 hari",
    ],
  },
  {
    name: "Custom",
    label: "SESUAI KEBUTUHAN ANDA",
    description:
      "Solusi digital yang dirancang khusus berdasarkan kebutuhan dan kompleksitas proyek.",
    price: "Custom",
    featured: false,
    features: [
      "Fitur sesuai kebutuhan",
      "Desain UI/UX eksklusif",
      "Website atau aplikasi custom",
      "Database dan API integration",
      "Dashboard dan manajemen data",
      "Integrasi sistem pihak ketiga",
      "Konsultasi teknis",
      "Dukungan sesuai kesepakatan",
    ],
  },
];

function PricingCard({ plan }) {
  return (
    <div
      className={`group relative flex flex-col rounded-[24px] border p-7 transition-all duration-300 hover:-translate-y-2 md:p-8 ${
        plan.featured
          ? "border-blue-600 bg-blue-600 text-white shadow-xl shadow-blue-600/15"
          : "border-slate-200 bg-white text-[#101B40] hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
      }`}
    >
      {plan.featured && (
        <span className="absolute -top-3 right-7 rounded-full bg-sky-300 px-4 py-1.5 text-[10px] font-extrabold tracking-wider text-blue-950">
          PALING POPULER
        </span>
      )}

      <div>
        <p
          className={`text-[10px] font-bold tracking-[0.18em] ${
            plan.featured ? "text-blue-100" : "text-blue-600"
          }`}
        >
          {plan.label}
        </p>

        <h3 className="mt-5 text-2xl font-extrabold tracking-tight">
          {plan.name}
        </h3>

        <p
          className={`mt-3 min-h-[72px] text-sm leading-6 ${
            plan.featured ? "text-blue-100" : "text-slate-500"
          }`}
        >
          {plan.description}
        </p>
      </div>

      <div className="my-7 border-t border-current/15 pt-7">
        {plan.price === "Custom" ? (
          <p className="text-3xl font-extrabold tracking-tight">Diskusikan</p>
        ) : (
          <>
            <div className="flex items-end gap-1.5">
              <span className="mb-1 text-sm font-semibold">Rp</span>
              <span className="text-4xl font-extrabold tracking-tight">
                {plan.price}
              </span>
            </div>
            <p
              className={`mt-2 text-xs ${
                plan.featured ? "text-blue-100" : "text-slate-400"
              }`}
            >
              Harga awal / proyek
            </p>
          </>
        )}
      </div>

      <a
        href="#contact"
        className={`flex min-h-[52px] items-center justify-center gap-2 rounded-full text-sm font-bold transition-all duration-300 ${
          plan.featured
            ? "bg-white text-blue-600 hover:bg-blue-50"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        Konsultasikan Paket
        <ArrowUpRight size={17} />
      </a>

      <div
        className={`my-7 border-t ${
          plan.featured ? "border-white/20" : "border-slate-100"
        }`}
      />

      <p
        className={`mb-5 text-xs font-bold tracking-wide ${
          plan.featured ? "text-white" : "text-[#101B40]"
        }`}
      >
        YANG ANDA DAPATKAN
      </p>

      <ul className="space-y-4">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                plan.featured
                  ? "bg-white/15 text-white"
                  : "bg-blue-50 text-blue-600"
              }`}
            >
              <Check size={13} strokeWidth={3} />
            </span>

            <span
              className={`text-sm leading-6 ${
                plan.featured ? "text-blue-50" : "text-slate-600"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#F8FAFF] px-5 py-24 md:px-10 md:py-32 lg:px-20"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center md:mb-20">
          <p className="mb-5 text-xs font-bold tracking-[0.3em] text-blue-600">
            INVESTASI DIGITAL
          </p>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#101B40] md:text-5xl lg:text-[52px]">
            Pilih paket yang <span className="text-blue-600">tepat</span> untuk
            bisnis Anda
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-600 md:text-lg">
            Solusi digital berkualitas dengan pilihan paket yang fleksibel,
            transparan, dan dapat disesuaikan dengan kebutuhan bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-7 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <p className="mt-10 text-center text-xs leading-6 text-slate-400">
          Harga dan fitur di atas merupakan ilustrasi paket. Detail akhir akan
          disesuaikan berdasarkan kebutuhan dan kesepakatan proyek.
        </p>
      </div>
    </section>
  );
}
