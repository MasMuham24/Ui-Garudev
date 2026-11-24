import {
  SlidersHorizontal,
  Pencil,
  PanelsTopLeft,
  ArrowUpRight,
} from "lucide-react";
import Magnet from "../components/Magnet";
import ProcessSection from "../components/ProcessSection";

const services = [
  {
    number: "01",
    title: "PENYELARASAN STRATEGIS",
    description:
      "Manfaatkan kekuatan pemetaan ide dan pemikiran visual terstruktur untuk membuka kreativitas serta memperjelas arah strategis proyek Anda bersama tim kami.",
    icon: SlidersHorizontal,
    featured: true,
  },
  {
    number: "02",
    title: "DESAIN UI/UX",
    description:
      "Merancang desain UI/UX inovatif untuk pengalaman digital yang mulus, memikat hati pengguna, dan mendorong kesuksesan bisnis dengan standar desain modern.",
    icon: Pencil,
    featured: false,
  },
  {
    number: "03",
    title: "PENGEMBANGAN WEBSITE",
    description:
      "Tingkatkan kehadiran online bisnis Anda dengan website berkinerja tinggi, responsif, dan memukau yang memadukan estetika visual dengan fungsionalitas optimal.",
    icon: PanelsTopLeft,
    featured: false,
  },
];

export default function Services() {
  return (
    <>
      <section
        id="services"
        className="min-h-screen overflow-hidden bg-white px-5 pb-24 pt-36 md:px-10 md:pt-40 lg:px-20"
      >
        <div className="relative mx-auto max-w-7xl">
          <div className="absolute inset-0 -z-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

          <div className="relative z-10">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="text-xs font-semibold tracking-wide text-blue-600">
                  LAYANAN BERORIENTASI PENGGUNA
                </span>

                <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                  LAYANAN KAMI
                  <br />
                  UNTUK KLIEN
                </h2>
              </div>

              <Magnet
                padding={80}
                magnetStrength={3}
                maxOffset={18}
                tilt={3}
                scale={1.02}
              >
                <a
                  href="#contact"
                  className="inline-flex w-fit items-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/35"
                >
                  <span>DISKUSIKAN PROYEK ANDA</span>
                  <ArrowUpRight size={15} />
                </a>
              </Magnet>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.number}
                    className={`group flex min-h-[300px] flex-col rounded-[2rem] p-6 transition duration-300 hover:-translate-y-2 md:min-h-[360px] md:p-8 ${
                      service.featured
                        ? "bg-blue-600 text-white shadow-xl shadow-blue-200/60"
                        : "border border-gray-100 bg-white text-[#171717] shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-blue-100 hover:shadow-xl hover:shadow-blue-100/50"
                    }`}
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                        service.featured
                          ? "bg-white text-blue-600"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      <Icon size={27} strokeWidth={1.8} />
                    </div>

                    <div className="mt-auto pt-12">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-xs font-medium opacity-60">
                          LAYANAN / {service.number}
                        </span>

                        <ArrowUpRight
                          size={19}
                          className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </div>

                      <h3 className="text-xl font-bold tracking-tight">
                        {service.title}
                      </h3>

                      <p
                        className={`mt-3 text-sm leading-6 ${
                          service.featured ? "text-blue-100" : "text-gray-500"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-10 flex justify-center">
              <Magnet
                padding={80}
                magnetStrength={3}
                maxOffset={18}
                tilt={3}
                scale={1.02}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-8 py-4 text-xs font-bold uppercase tracking-wider transition hover:border-blue-600 hover:text-blue-600 hover:shadow-md"
                >
                  <span>LIHAT SEMUA LAYANAN</span>
                  <ArrowUpRight size={16} />
                </a>
              </Magnet>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />
    </>
  );
}
