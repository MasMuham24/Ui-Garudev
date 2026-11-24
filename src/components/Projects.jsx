import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    category: "WEBSITE APLIKASI",
    name: "Lock Jobs",
    description:
      "Lock Jobs adalah platform pengembangan karier berbasis teknologi yang dirancang untuk membantu pencari kerja dalam menyusun dan mengembangkan perjalanan karier mereka.",
    image:
      "https://cdn.dribbble.com/userupload/40060965/file/original-728ef7f2f551271a4d1a743161e5b482.jpg?resize=800x",
    width: 800,
    height: 626,
    link: "#",
  }, 
  {
    category: "WEBSITE COMPANY PROFILE",
    name: "Gema Ekstra Logistics",
    description:
      "Gema Ekstra Logistics merupakan perusahaan jasa pengiriman barang yang berbasis di Yogyakarta dan melayani berbagai kebutuhan pengiriman.",
    image:
      "https://cdn.dribbble.com/userupload/43510575/file/original-4fae73f92a645a1558274c0779e1d973.png?resize=752x",
    width: 752,
    height: 564,
    link: "#",
  },
];

function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      aria-label={`Lihat detail proyek ${project.name}`}
      className="group block overflow-hidden rounded-[22px] border border-slate-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
    >
      <div className="relative aspect-[1.55/1] overflow-hidden bg-slate-100">
        <img
          src={project.image}
          alt={project.name}
          width={project.width}
          height={project.height}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07152F]/90 via-[#07152F]/15 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.18em] text-sky-300">
              {project.category}
            </p>
            <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">
              {project.name}
            </h3>
          </div>

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-blue-600">
            <ArrowUpRight size={21} />
          </div>
        </div>
      </div>

      <div className="flex min-h-[130px] items-start justify-between gap-5 p-6 md:p-8">
        <p className="text-sm leading-7 text-slate-600 md:text-base">
          {project.description}
        </p>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white px-5 py-24 md:px-10 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center md:mb-20">
          <p className="mb-5 text-xs font-bold tracking-[0.3em] text-blue-600">
            SHOWCASE
          </p>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#101B40] md:text-5xl lg:text-[52px]">
            Karya <span className="text-blue-600">nyata</span> untuk mitra kami
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-slate-600 md:text-lg">
            Bukti nyata implementasi solusi digital berkualitas tinggi untuk
            berbagai sektor industri dan kebutuhan bisnis.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-9">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
