import { ArrowUpRight, MessageCircle, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-white px-5 py-24 md:px-10 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#101B40] md:text-5xl lg:text-[52px]">
          Siap memperkuat fondasi digital
          <br className="hidden md:block" />{" "}
          <span className="text-blue-600">bisnis Anda hari ini?</span>
        </h2>

        <p className="mx-auto mt-7 max-w-5xl text-sm leading-8 text-slate-600 md:text-lg">
          Konsultasikan tantangan bisnis Anda dengan tim ahli kami. Kami berikan
          gambaran solusi digital terbaik tanpa biaya konsultasi di awal.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/6283822757990?text=Hai%20Garudev%2C%20aku%20mau%20konsultasi%20soal%20website%20nih"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[62px] w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-9 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25 sm:w-auto"
          >
            <MessageCircle size={21} />
            KONSULTASI VIA WHATSAPP
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

          <a
            href="#"
            className="inline-flex min-h-[62px] w-full items-center justify-center gap-3 rounded-full border-2 border-[#101B40] px-9 text-sm font-bold text-[#101B40] transition-all duration-300 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 sm:w-auto"
          >
            <Mail size={19} />
            KIRIM EMAIL
          </a>
        </div>
      </div>
    </section>
  );
}
