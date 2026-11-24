import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  ClipboardList,
  Wallet,
  Code2,
  CreditCard,
  PackageCheck,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Konsultasi",
    description:
      "Diskusikan ide, kebutuhan, dan tujuan project bersama tim GaruDev.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Brief Project",
    description:
      "Sampaikan detail kebutuhan, referensi, fitur, dan konsep project yang diinginkan.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Pembayaran DP",
    description:
      "Lakukan pembayaran uang muka sebagai tanda persetujuan dan dimulainya project.",
    icon: Wallet,
  },
  {
    number: "04",
    title: "Pengerjaan",
    description:
      "Tim kami mulai mengerjakan project sesuai brief dan kesepakatan yang telah dibuat.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Pelunasan",
    description:
      "Setelah hasil project selesai dan disetujui, lakukan pembayaran sisa biaya.",
    icon: CreditCard,
  },
  {
    number: "06",
    title: "Penyerahan Project",
    description:
      "Project diserahkan kepada klien setelah seluruh proses selesai.",
    icon: PackageCheck,
  },
];

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted((current) => {
            if (current) return current;
            return true;
          });
        } else {
          setStarted(false);
          setProgress(0);
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return undefined;

    const duration = 6000;
    let animationFrameId;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const nextProgress = Math.min(elapsed / duration, 1);
      setProgress(nextProgress);

      if (nextProgress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [started]);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white px-6 py-24 md:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-blue-600">
              HOW WE WORK
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#171717] md:text-5xl">
              Our Working <span className="text-blue-600">Process.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500 md:text-base">
              Dari ide pertama hingga project selesai, kami memastikan setiap
              proses berjalan dengan jelas dan terarah.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 font-semibold text-blue-600 transition-all hover:gap-4"
          >
            Start Your Project
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="relative mt-20">
          <div
            className="absolute left-7 right-7 top-7 hidden h-[2px] xl:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, #D1D5DB 0px, #D1D5DB 7px, transparent 7px, transparent 14px)",
            }}
          />

          <div
            className="absolute left-7 top-7 hidden h-[2px] bg-blue-600 xl:block"
            style={{
              width: `calc((100% - 56px) * ${progress})`,
            }}
          />

          <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-6 xl:gap-7">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = progress >= index / (steps.length - 1);

              return (
                <article key={step.number} className="group min-w-0">
                  <div className="flex items-center gap-4 xl:block">
                    <div
                      className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-[19px] border transition-all duration-500 ${
                        isActive
                          ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-200/70"
                          : "border-gray-200 bg-white text-gray-400"
                      }`}
                    >
                      <Icon size={25} strokeWidth={1.8} />
                    </div>

                    <span
                      className={`text-xs font-bold tracking-widest transition-colors duration-500 xl:mt-3 xl:block ${
                        isActive ? "text-blue-600" : "text-gray-400"
                      }`}
                    >
                      STEP {step.number}
                    </span>
                  </div>

                  <div className="mt-5">
                    <h3
                      className={`text-lg font-bold leading-snug transition-colors duration-500 ${
                        isActive ? "text-[#171717]" : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <p
                      className={`mt-3 text-sm leading-7 transition-colors duration-500 ${
                        isActive ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
