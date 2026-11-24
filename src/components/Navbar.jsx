import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "TENTANG", href: "#about" },
  { label: "LAYANAN", href: "#services" },
  { label: "PORTFOLIO", href: "/portfolio", isRoute: true },
  { label: "ULASAN", href: "#reviews" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const getHomeHref = (href) => {
    return location.pathname === "/" ? href : `/${href}`;
  };

  return (
    <header className="fixed top-0 z-50 w-full px-5 pt-4 md:px-10">
      <nav
        className={`relative mx-auto flex max-w-[1350px] items-center justify-between rounded-full border px-6 py-3 transition-all duration-300 md:px-8 ${
          isScrolled
            ? "border-gray-200/70 bg-white/85 shadow-lg shadow-black/[0.04] backdrop-blur-xl"
            : "border-gray-200/60 bg-white/75 shadow-sm backdrop-blur-md"
        }`}
      >
        <Link
          to="/"
          aria-label="GaruDev Beranda"
          className="flex items-center gap-3"
        >
          <div className="relative flex h-7 w-7 items-center">
            <span className="absolute left-0 h-5 w-5 rounded-full bg-blue-300" />
            <span className="absolute right-0 h-5 w-5 rounded-full bg-blue-600" />
          </div>

          <span className="text-lg font-semibold tracking-tight">
            Garudev<span className="text-blue-600">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className={`text-[11px] font-medium tracking-wide transition-colors duration-300 hover:text-blue-600 ${
                  location.pathname === "/portfolio"
                    ? "text-blue-600"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={getHomeHref(link.href)}
                className="text-[11px] font-medium tracking-wide text-gray-700 transition-colors duration-300 hover:text-blue-600"
              >
                {link.label}
              </a>
            ),
          )}
        </div>

        <a
          href={getHomeHref("#contact")}
          className="hidden rounded-full bg-blue-600 px-7 py-3 text-[11px] font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 md:block"
        >
          KONTAK
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100 md:hidden"
          aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={19} /> : <Menu size={19} />}
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 top-[calc(100%+10px)] flex flex-col gap-5 rounded-3xl border border-gray-200/70 bg-white/95 p-6 shadow-xl shadow-black/5 backdrop-blur-xl md:hidden">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xs font-medium tracking-wide transition-colors hover:text-blue-600 ${
                    location.pathname === "/portfolio"
                      ? "text-blue-600"
                      : "text-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={getHomeHref(link.href)}
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-medium tracking-wide text-gray-700 transition-colors hover:text-blue-600"
                >
                  {link.label}
                </a>
              ),
            )}

            <a
              href={getHomeHref("#contact")}
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
