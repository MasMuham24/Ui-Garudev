/**
 * SEO utility terpusat.
 * Mengatur title, meta, canonical, og, twitter, robots, dan JSON-LD per halaman.
 * Berjalan di client (SPA) — saat prerender berjalan, Puppeteer akan mengeksekusi
 * JS ini sehingga meta sudah tersedia di HTML yang di-snapshot.
 *
 * SITE_URL: ganti dengan domain produksi bila sudah live.
 */

export const SITE_URL = "https://garudev.web.id";
export const SITE_NAME = "GaruDev";
export const SITE_LOCALE = "id_ID";

// ─── Helper: set/create meta tag ───────────────────────────────────────────────
function setMeta(selector, content, attr = "name") {
  let el = document.querySelector(`meta[${attr}="${selector}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, selector);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

// ─── Helper: set/create link tag ───────────────────────────────────────────────
function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// ─── Helper: set/update JSON-LD script ─────────────────────────────────────────
export function setJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.setAttribute("type", "application/ld+json");
    el.setAttribute("id", id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data, null, 2);
}

// ─── Helper: remove JSON-LD script ─────────────────────────────────────────────
export function removeJsonLd(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

/**
 * Fungsi utama: set semua SEO meta untuk satu halaman.
 * @param {object} opts
 * @param {string} opts.title          - 50-60 karakter
 * @param {string} opts.description    - 140-160 karakter
 * @param {string} opts.path           - path absolut, mis. "/layanan"
 * @param {string} [opts.ogImage]      - URL gambar OG (default mascot)
 * @param {string} [opts.robots]       - default "index, follow"
 */
export function applyPageSEO({
  title,
  description,
  path,
  ogImage = `${SITE_URL}/images/mascot.webp`,
  robots = "index, follow",
}) {
  const canonical = `${SITE_URL}${path}`;

  // Title
  document.title = title;

  // Basic meta
  setMeta("description", description);
  setMeta("robots", robots);

  // Canonical
  setLink("canonical", canonical);

  // Open Graph
  setMeta("og:title", title, "property");
  setMeta("og:description", description, "property");
  setMeta("og:url", canonical, "property");
  setMeta("og:image", ogImage, "property");
  setMeta("og:type", "website", "property");
  setMeta("og:locale", SITE_LOCALE, "property");
  setMeta("og:site_name", SITE_NAME, "property");

  // Twitter Card
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", title);
  setMeta("twitter:description", description);
  setMeta("twitter:image", ogImage);
}

/** Reset ke default saat unmount (opsional) */
export function resetPageSEO() {
  document.title = `${SITE_NAME} — Jasa Pembuatan Website & Aplikasi`;
  setLink("canonical", SITE_URL + "/");
}
