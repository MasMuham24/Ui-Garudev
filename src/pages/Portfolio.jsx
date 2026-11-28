import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useSEO, useJsonLd } from "../utils/useSEO";
import { STATIC_ROUTES_SEO } from "../utils/seoConfig";

const categories = ["Semua", "Website", "Web App", "UI/UX"];

const projects = [
  {
    title: "Lock Jobs",
    category: "Web App",
    description:
      "Platform pencarian kerja dengan pengalaman pengguna yang modern.",
    image:
      "https://cdn.dribbble.com/userupload/40060965/file/original-728ef7f2f551271a4d1a743161e5b482.jpg?resize=3233x2529",
    year: "2026",
  },
  {
    title: "Gema Ekstra Logistics",
    category: "Website",
    description: "Website profesional untuk perusahaan layanan logistik.",
    image:
      "https://cdn.dribbble.com/userupload/43510575/file/original-4fae73f92a645a1558274c0779e1d973.png?resize=752x",
    year: "2026",
  },
  {
    title: "Creative Studio",
    category: "UI/UX",
    description: "Eksplorasi desain antarmuka untuk creative digital studio.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    year: "2026",
  },
  {
    title: "Finance Dashboard",
    category: "Web App",
    description: "Dashboard pengelolaan keuangan dengan visualisasi data.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    year: "2026",
  },
  {
    title: "Modern Architecture",
    category: "Website",
    description: "Website company profile untuk bisnis arsitektur.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
    year: "2026",
  },
  {
    title: "Mobile Banking",
    category: "UI/UX",
    description: "Konsep desain aplikasi keuangan yang sederhana dan intuitif.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200",
    year: "2026",
  },
];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const seo = STATIC_ROUTES_SEO["/portfolio"];
  useSEO(seo);
  useJsonLd("ld-portfolio-breadcrumb", seo.jsonLd[0].data);

  const filteredProjects =
    activeCategory === "Semua"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <main className="min-h-screen bg-white text-[#101B40]">
      <section className="relative overflow-hidden px-6 pb-16 pt-36 sm:px-10 lg:px-16 lg:pb-24 lg:pt-44">
        <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-blue-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-blue-600">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            OUR PORTFOLIO
          </span>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Karya digital yang{" "}
              <span className="text-blue-600">membangun</span> pengalaman.
            </h1>

            <p className="max-w-md text-base leading-8 text-slate-500 lg:justify-self-end">
              Jelajahi berbagai karya dan eksplorasi digital GaruDev dalam
              membangun pengalaman website yang menarik, fungsional, dan
              berorientasi pada kebutuhan bisnis.
            </p>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-5 border-t border-slate-200 pt-7">
            <p className="text-sm font-semibold text-slate-500">
              SELECTED PROJECTS
            </p>
            <p className="text-sm text-slate-400">
              {String(filteredProjects.length).padStart(2, "0")} Projects
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "border border-slate-200 bg-white text-slate-500 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <article key={project.title} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src={project.image}
                    alt={`Preview proyek ${project.title} — ${project.category}`}
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-[#101B40]/0 transition-colors duration-500 group-hover:bg-[#101B40]/10" />

                  <div className="absolute bottom-5 right-5 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-white text-blue-600 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={22} />
                  </div>
                </div>

                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                      {project.category}
                    </span>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#101B40]">
                      {project.title}
                    </h2>
                    <p className="mt-2 max-w-md text-sm leading-7 text-slate-500">
                      {project.description}
                    </p>
                  </div>

                  <span className="pt-1 text-sm text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#101B40] px-8 py-16 text-center text-white sm:px-14 lg:py-20">
          <span className="text-xs font-semibold tracking-[0.2em] text-blue-300">
            HAVE A PROJECT IN MIND?
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
            Mari wujudkan ide digital Anda bersama GaruDev.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-blue-100/70">
            Punya ide atau kebutuhan website untuk bisnis Anda? Mari mulai
            diskusikan project berikutnya.
          </p>

          <a
            href="/#contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-blue-700 transition-all hover:bg-blue-50"
          >
            Mulai Project
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
