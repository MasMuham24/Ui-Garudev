import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "TENTANG", href: "#about" },
  { label: "LAYANAN", href: "#services" },
  { label: "PROYEK", href: "#projects" },
  { label: "ULASAN", href: "#reviews" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full px-5 pt-4 md:px-10">
      <nav
        className={`relative mx-auto flex max-w-[1350px] items-center justify-between rounded-full border px-6 py-3 transition-all duration-300 md:px-8 ${
          isScrolled
            ? "border-gray-200/70 bg-white/85 shadow-lg shadow-black/[0.04] backdrop-blur-xl"
            : "border-gray-200/60 bg-white/75 shadow-sm backdrop-blur-md"
        }`}
      >
        <a href="#" className="flex items-center gap-3">
          <div className="relative flex h-7 w-7 items-center">
            <span className="absolute left-0 h-5 w-5 rounded-full bg-blue-300" />
            <span className="absolute right-0 h-5 w-5 rounded-full bg-blue-600" />
          </div>

          <span className="text-lg font-semibold tracking-tight">
            Garudev<span className="text-blue-600">.</span>
          </span>
        </a>
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] font-medium tracking-wide text-gray-700 transition-colors duration-300 hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <a
          href="#contact"
          className="hidden rounded-full bg-blue-600 px-7 py-3 text-[11px] font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 md:block"
        >
          KONTAK
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100 md:hidden"
          aria-label="Buka navigasi"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={19} /> : <Menu size={19} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-[calc(100%+10px)] flex flex-col gap-5 rounded-3xl border border-gray-200/70 bg-white/95 p-6 shadow-xl shadow-black/5 backdrop-blur-xl md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xs font-medium tracking-wide text-gray-700 transition-colors hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-fit rounded-full bg-blue-600 px-7 py-3 text-[11px] font-medium text-white"
            >
              KONTAK
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
