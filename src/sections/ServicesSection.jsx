/**
 * Section "Layanan" di landing page (Bagian 1).
 *
 * - Menampilkan 3-6 layanan unggulan dari sumber data terpusat
 * - Card grid responsif 1/2/3 kolom
 * - Tinggi card seragam, CTA "Lihat detail" selalu di bawah
 * - Hover, focus (keyboard accessible), animasi masuk (hormati prefers-reduced-motion)
 * - CTA "Lihat Semua Layanan" mengarah ke /layanan
 */

import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { getFeaturedServices } from "../data/services";
import ServiceIcon from "../components/ServiceIcon";
import Magnet from "../components/Magnet";

const featuredServices = getFeaturedServices();

function useIntersectionAnimation(rootMargin = "0px 0px -60px 0px") {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, visible };
}

function ServiceCard({ service, index }) {
  const { ref, visible } = useIntersectionAnimation();

  return (
    <article
      ref={ref}
      className={`group flex flex-col rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 md:p-8
        hover:-translate-y-2 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-100/50
        focus-within:outline focus-within:outline-2 focus-within:outline-blue-600 focus-within:outline-offset-2
        motion-safe:opacity-0 motion-safe:translate-y-6
        ${visible ? "motion-safe:!opacity-100 motion-safe:!translate-y-0" : ""}`}
      style={{
        transitionDelay: visible ? `${index * 80}ms` : "0ms",
      }}
    >
      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
        <ServiceIcon name={service.iconName} size={27} />
      </div>

      {/* Konten utama — mt-auto mendorong CTA ke bawah */}
      <div className="mt-6 flex flex-grow flex-col">
        <h3 className="text-lg font-bold tracking-tight text-[#171717]">
          {service.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
          {service.shortDescription}
        </p>

        {/* 3 fitur utama */}
        <ul className="mt-4 space-y-2" aria-label={`Fitur ${service.title}`}>
          {service.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs text-gray-600">
              <CheckCircle2
                size={14}
                className="mt-0.5 shrink-0 text-blue-600"
                aria-hidden="true"
              />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA selalu di bawah card */}
        <div className="mt-auto pt-6">
          <Link
            to={`/layanan/${service.slug}`}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-600 transition-all duration-200 hover:gap-3 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
            aria-label={`Lihat detail layanan ${service.title}`}
          >
            Lihat detail
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="overflow-hidden bg-white px-5 pb-24 pt-36 md:px-10 md:pt-40 lg:px-20"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Grid background dekoratif */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"
        />

        <div className="relative z-10">
          {/* Header section */}
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-semibold tracking-wide text-blue-600">
                LAYANAN BERORIENTASI PENGGUNA
              </span>

              <h2
                id="services-heading"
                className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl"
              >
                LAYANAN KAMI
                <br />
                UNTUK KLIEN
              </h2>
            </div>

            <Magnet padding={80} magnetStrength={3} maxOffset={18} tilt={3} scale={1.02}>
              <a
                href="#contact"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
              >
                <span>DISKUSIKAN PROYEK ANDA</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </Magnet>
          </div>

          {/* Card grid: 1 kolom mobile, 2 tablet, 3 desktop */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>

          {/* CTA "Lihat Semua Layanan" */}
          <div className="mt-10 flex justify-center">
            <Magnet padding={80} magnetStrength={3} maxOffset={18} tilt={3} scale={1.02}>
              <Link
                to="/layanan"
                className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-8 py-4 text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:border-blue-600 hover:text-blue-600 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
              >
                <span>LIHAT SEMUA LAYANAN</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </Magnet>
          </div>
        </div>
      </div>
    </section>
  );
}
