import { ChevronDown } from "lucide-react";
import { useState } from "react";

const questions = [
  {
    question: "Apakah kami menyediakan jasa SEO dan maintenance juga?",
    answer:
      "Ya, kami menyediakan layanan optimasi SEO dasar dan maintenance website. Layanan ini dapat disesuaikan dengan kebutuhan bisnis Anda, mulai dari pembaruan konten, perbaikan teknis, hingga pemantauan performa website.",
  },
  {
    question: "Bisa membuat aplikasi mobile Android sekaligus iOS?",
    answer:
      "Tentu. Kami dapat membantu merancang dan mengembangkan aplikasi mobile untuk Android maupun iOS. Teknologi dan pendekatan pengembangan akan disesuaikan dengan kebutuhan serta skala proyek Anda.",
  },
  {
    question: "Bagaimana jika saya butuh fitur kustom yang sangat spesifik?",
    answer:
      "Kami dapat mengembangkan fitur sesuai kebutuhan bisnis Anda. Setiap kebutuhan akan didiskusikan terlebih dahulu agar solusi yang dibangun tepat sasaran, terukur, dan dapat dikembangkan di kemudian hari.",
  },
  {
    question: "Apakah kode sumber (Source Code) menjadi milik saya?",
    answer:
      "Ya, source code proyek akan diserahkan kepada klien sesuai kesepakatan kerja sama. Anda dapat mengelola dan mengembangkan website atau aplikasi tersebut lebih lanjut.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="faq"
      className="bg-white px-5 py-24 md:px-10 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center md:mb-20">
          <p className="mb-5 text-xs font-bold tracking-[0.3em] text-blue-600">
            PUSAT BANTUAN
          </p>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#101B40] md:text-5xl lg:text-[52px]">
            Pertanyaan Seputar Layanan
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-slate-600 md:text-lg">
            Informasi penting dan jawaban lengkap mengenai proses jasa pembuatan
            website dan aplikasi kami.
          </p>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-[18px] border transition-all duration-300 ${
                  isOpen
                    ? "border-blue-200 bg-blue-50/40"
                    : "border-slate-200/80 bg-white hover:border-blue-200"
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${index}`}
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="flex w-full items-center justify-between gap-5 px-5 py-6 text-left md:px-7 md:py-7"
                >
                  <span className="text-sm font-bold leading-6 text-[#101B40] md:text-lg">
                    {item.question}
                  </span>

                  <ChevronDown
                    size={21}
                    aria-hidden="true"
                    className={`shrink-0 text-blue-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-btn-${index}`}
                  aria-hidden={!isOpen}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 text-sm leading-7 text-slate-600 md:px-7 md:pb-7 md:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
