import { UserRound } from "lucide-react";

const reviews = [
  {
    message:
      "Landing page kampanye perlu sering berganti copy dan visual. Panel konten yang mereka bangun menghemat jam koordinasi dengan IT. Saat puncak iklan, situs tetap stabil dan form tidak kebanjiran spam berkat rate limit dan honeypot.",
    name: "Linda Hartono",
    position: "MARKETING MANAGER, DIVISI TABUNGAN DIGITAL",
  },
  {
    message:
      "MVP kami harus jadi dalam waktu ketat untuk presentasi investor. Mereka membantu memotong fitur yang tidak esensial tanpa mengorbankan inti produk. Kode yang rapi memudahkan kami merekrut engineer baru dan melanjutkan pengembangan sendiri.",
    name: "Raka Pratama",
    position: "PRODUCT LEAD, STARTUP EDTECH",
  },
  {
    message:
      "Kami membutuhkan website yang profesional dan mudah digunakan. Tim mereka memahami kebutuhan bisnis kami dan menerjemahkannya menjadi pengalaman digital yang jauh lebih baik.",
    name: "Nadia Putri",
    position: "BUSINESS DEVELOPMENT MANAGER",
  },
  {
    message:
      "Aplikasi yang dikembangkan membantu menyatukan proses kerja yang sebelumnya tersebar di berbagai platform. Komunikasi berjalan lancar dan hasil akhirnya sesuai dengan kebutuhan kami.",
    name: "Andi Wijaya",
    position: "OPERATIONS MANAGER",
  },
];

function ReviewCard({ review }) {
  return (
    <article className="rounded-[22px] border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 md:p-8">
      <div className="border-l-[3px] border-sky-400 pl-5">
        <p className="text-[15px] leading-[1.8] text-[#17233F] md:text-lg">
          {review.message}
        </p>
      </div>

      <div className="my-7 h-px bg-slate-100" />

      <div className="flex items-center gap-4">
        <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400">
          <UserRound size={34} strokeWidth={1.5} />
        </div>

        <div className="min-w-0">
          <h3 className="font-bold text-[#101B40]">{review.name}</h3>
          <p className="mt-1 text-[11px] font-bold leading-5 tracking-wide text-blue-600 md:text-xs">
            {review.position}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-white px-5 py-24 md:px-10 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center md:mb-20">
          <p className="mb-5 text-xs font-bold tracking-[0.3em] text-blue-600">
            KEPERCAYAAN MITRA
          </p>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#101B40] md:text-5xl lg:text-[52px]">
            Apa kata <span className="text-blue-600">mitra kami</span>
          </h2>

          <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-slate-600 md:text-lg">
            Dengarkan pengalaman langsung dari para mitra bisnis yang telah
            bertransformasi digital bersama kami.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
