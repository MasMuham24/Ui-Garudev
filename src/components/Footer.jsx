const menuLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Harga", href: "#pricing" },
  { label: "Portofolio", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    path: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    path: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.5 8.2a7.2 7.2 0 0 1-4.5-1.6v8.1a6.2 6.2 0 1 1-6.2-6.2c.4 0 .8 0 1.2.1v3.3a3 3 0 1 0 1.9 2.8V2.5h3.2a4.7 4.7 0 0 0 4.4 4.4v3.2Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    path: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.7 5.7 22H2.5l7.3-8.4L1.8 2h6.5l4.5 6.7L18.9 2Zm-1.1 18h1.7L7.2 3.9H5.4L17.8 20Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    path: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1938] px-5 pt-16 text-white md:px-10 md:pt-20 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.75fr_1fr] lg:gap-16">
          <div>
            <a href="#home" className="mb-7 inline-flex items-center gap-3">
              <span className="text-xl font-extrabold tracking-tight">
                Garu<span className="text-sky-400">dev</span>
              </span>
            </a>

            <p className="max-w-md text-sm leading-7 text-slate-300 md:text-base">
              Jasa website, aplikasi, dan sistem informasi untuk bisnis di
              Indonesia — proses jelas, estimasi transparan, dan dukungan
              setelah peluncuran.
            </p>
          </div>

          <div>
            <h3 className="mb-7 text-sm font-bold tracking-wide">MENU</h3>
            <ul className="space-y-4">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-sky-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-7 text-sm font-bold tracking-wide">KONTAK</h3>

            <div className="space-y-5 text-sm text-slate-300">
              <a
                href="mailto:garudev@gmail.com"
                className="flex items-center gap-3 transition-colors hover:text-sky-400"
              >
                <span>✉</span>
                garudev@gmail.com
              </a>

              <div className="flex items-center gap-3">
                Semarang, Indonesia
              </div>

              <a
                href="#"
                className="flex items-center gap-3 transition-colors hover:text-sky-400"
              >
                <span>◉</span>
                Hubungi WhatsApp
              </a>
            </div>

            <div className="mt-9">
              <h3 className="mb-6 text-sm font-bold tracking-wide">
                MEDIA SOSIAL
              </h3>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 text-slate-300 transition-all duration-300 hover:border-sky-400 hover:bg-sky-400/10 hover:text-sky-400"
                  >
                    <span className="h-[22px] w-[22px]">{social.path}</span>
                  </a>
                ))}
              </div>
            </div>

            <p className="mt-8 max-w-md text-xs leading-6 text-slate-400">
              Konsultasi gratis jasa website dan aplikasi. Respon cepat via
              WhatsApp. Email akan dibalas dalam 1x24 jam.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700/70 py-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <p className="text-xs leading-6 text-slate-300 md:text-sm">
              © {new Date().getFullYear()} GaruDev. Hak cipta dilindungi
              undang-undang.
            </p>

            <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
              <a
                href="#about"
                className="text-xs text-slate-300 hover:text-sky-400"
              >
                Tentang
              </a>
              <a
                href="#privacy"
                className="text-xs text-slate-300 hover:text-sky-400"
              >
                Kebijakan privasi
              </a>
              <a
                href="#terms"
                className="text-xs text-slate-300 hover:text-sky-400"
              >
                Syarat layanan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
