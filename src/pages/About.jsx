import { ArrowUpRight, Sparkles } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import Magnet from "../components/Magnet";

const values = ["Inovasi", "Kolaborasi", "Kualitas", "Pertumbuhan"];

export default function About() {
  return (
    <div id="about" className="relative bg-white px-6 pb-28 pt-20 md:px-12 md:pb-36 md:pt-28 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <ScrollStack
          useWindowScroll={true}
          smoothScroll={false}
          snap={false}
          stackPosition="95px"
          itemDistance={160}
          itemStackDistance={20}
          itemScale={0.035}
          baseScale={0.88}
          dimAmount={0.08}
          tiltAmount={2}
          holdDistance={220}
        >
          {/* Section 1: Hero Header */}
          <ScrollStackItem itemClassName="relative overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white p-8 md:p-14 lg:p-16 shadow-xl shadow-black/[0.03]">
            <div className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-3 text-sm font-semibold text-blue-600">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                TENTANG GARUDEV
              </div>

              <h2 className="mt-10 max-w-5xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                Kami percaya pada kekuatan{" "}
                <span className="text-blue-600">ide digital.</span>
              </h2>

              <div className="mt-12 flex flex-col justify-between gap-8 border-t border-gray-200 pt-8 md:flex-row md:items-end">
                <p className="max-w-xl text-base leading-8 text-gray-500 md:text-lg">
                  Garudev adalah creative digital agency yang menghadirkan ide,
                  kreativitas, dan teknologi untuk membantu bisnis berkembang di era
                  digital.
                </p>

                <Magnet padding={70} magnetStrength={3} maxOffset={14} tilt={3}>
                  <a
                    href="#story"
                    className="inline-flex w-fit items-center gap-3 font-semibold text-blue-600 transition hover:gap-5"
                  >
                    Jelajahi kisah kami
                    <ArrowUpRight size={20} />
                  </a>
                </Magnet>
              </div>
            </div>
          </ScrollStackItem>

          {/* Section 2: 01 / KISAH KAMI */}
          <ScrollStackItem itemClassName="rounded-[2rem] border border-gray-200/80 bg-white p-8 md:p-14 lg:p-16 shadow-xl shadow-black/[0.04]">
            <div id="story" className="grid gap-12 md:grid-cols-[1fr_2fr]">
              <div>
                <span className="text-sm font-semibold text-blue-600">
                  01 / KISAH KAMI
                </span>
              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
                  Mengubah peluang menjadi pengalaman digital yang bermakna.
                </h2>

                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  <p className="leading-8 text-gray-500">
                    Kami percaya bahwa teknologi bukan sekadar alat, tetapi peluang
                    untuk menciptakan sesuatu yang lebih baik.
                  </p>

                  <p className="leading-8 text-gray-500">
                    Melalui kreativitas dan pendekatan yang berorientasi pada
                    kebutuhan pengguna, kami ingin membantu bisnis melangkah lebih
                    jauh di dunia digital.
                  </p>
                </div>
              </div>
            </div>
          </ScrollStackItem>

          {/* Section 3: 02 / VISI KAMI & 03 / MISI KAMI */}
          <ScrollStackItem itemClassName="rounded-[2rem] border border-blue-100 bg-[#F8FAFF] p-8 md:p-14 lg:p-16 shadow-xl shadow-blue-900/[0.04]">
            <div className="grid gap-16 md:grid-cols-2">
              <div>
                <span className="text-sm font-semibold text-blue-600">
                  02 / VISI KAMI
                </span>

                <h2 className="mt-8 max-w-lg text-4xl font-bold leading-tight md:text-5xl">
                  Membangun masa depan{" "}
                  <span className="text-blue-600">digital yang lebih baik.</span>
                </h2>

                <p className="mt-6 max-w-md leading-8 text-gray-500">
                  Menjadi partner digital yang mampu menghadirkan inovasi dan
                  pengalaman teknologi yang bermanfaat bagi banyak orang.
                </p>
              </div>

              <div className="md:border-l md:border-blue-200 md:pl-12">
                <span className="text-sm font-semibold text-blue-600">
                  03 / MISI KAMI
                </span>

                <h2 className="mt-8 max-w-lg text-4xl font-bold leading-tight md:text-5xl">
                  Menciptakan solusi yang{" "}
                  <span className="text-blue-600">memberikan dampak nyata.</span>
                </h2>

                <p className="mt-6 max-w-md leading-8 text-gray-500">
                  Menggabungkan kreativitas, teknologi, dan kolaborasi untuk
                  menciptakan solusi digital yang relevan dengan kebutuhan setiap
                  bisnis.
                </p>
              </div>
            </div>
          </ScrollStackItem>

          {/* Section 4: 04 / NILAI-NILAI KAMI */}
          <ScrollStackItem itemClassName="rounded-[2rem] border border-gray-200/80 bg-white p-8 md:p-14 lg:p-16 shadow-xl shadow-black/[0.04]">
            <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
              <div>
                <span className="text-sm font-semibold text-blue-600">
                  04 / NILAI-NILAI KAMI
                </span>

                <h2 className="mt-7 text-4xl font-bold leading-tight md:text-5xl">
                  Hal yang mendorong <span className="text-blue-600">kami.</span>
                </h2>
              </div>

              <div className="divide-y divide-gray-200">
                {values.map((value, index) => (
                  <div
                    key={value}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl px-4 py-6 transition-all duration-300 md:px-6"
                  >
                    {/* Animasi sapuan warna dari kiri ke kanan saat di-hover */}
                    <span
                      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 transition-transform duration-500 ease-out group-hover:translate-x-0"
                      aria-hidden="true"
                    />

                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-6 transition-transform duration-300 group-hover:translate-x-2">
                        <span className="text-sm font-semibold text-gray-400 transition-colors duration-300 group-hover:text-blue-200">
                          0{index + 1}
                        </span>
                        <h3 className="text-2xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-white md:text-3xl">
                          {value}
                        </h3>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:bg-white/20">
                        <ArrowUpRight
                          size={22}
                          className="text-blue-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollStackItem>

          {/* Section 5: Call to Action */}
          <ScrollStackItem itemClassName="relative overflow-hidden rounded-[2rem] bg-blue-600 p-8 text-white md:p-16 lg:p-20 shadow-2xl shadow-blue-600/30">
            <div className="pointer-events-none absolute -right-16 -top-28 h-72 w-72 rounded-full border-[45px] border-white/10" />

            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-100">
                <Sparkles size={16} />
                MARI BERKOLABORASI
              </div>

              <h2 className="mt-7 text-4xl font-bold leading-tight text-white md:text-6xl">
                Punya ide hebat? Mari kita wujudkan bersama.
              </h2>

              <div className="mt-9">
                <Magnet padding={80} magnetStrength={3} maxOffset={18} tilt={3} scale={1.03}>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
                  >
                    <span>Hubungi Kami</span>
                    <ArrowUpRight size={19} />
                  </a>
                </Magnet>
              </div>
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </div>
  );
}
