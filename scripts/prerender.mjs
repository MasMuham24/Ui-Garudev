/**
 * Post-build prerender & sitemap generator.
 * Menjalankan SSR render() untuk setiap route publik + 404,
 * menyuntikkan meta tags, canonical, Open Graph, Twitter Card, dan JSON-LD
 * langsung ke HTML awal, lalu menghasilkan sitemap.xml otomatis.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { getAllPublicRoutesSEO } from "../src/utils/seoConfig.js";
import { SITE_URL, SITE_NAME, SITE_LOCALE } from "../src/utils/seo.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const publicDir = path.join(rootDir, "public");
const serverEntryPath = path.join(distDir, "server", "entry-server.js");

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function injectHeadAndRoot(template, appHtml, seo) {
  const canonical = `${SITE_URL}${seo.path === "/404" ? "/404" : seo.path}`;
  const ogImage = seo.ogImage || `${SITE_URL}/images/mascot.webp`;
  const robots = seo.robots || "index, follow";
  const title = escapeHtml(seo.title);
  const desc = escapeHtml(seo.description);

  const jsonLdScripts = (seo.jsonLd || [])
    .filter((item) => item && item.data)
    .map(
      (item) =>
        `    <script type="application/ld+json" id="${escapeHtml(item.id)}">\n${JSON.stringify(
          item.data,
          null,
          2
        )}\n    </script>`
    )
    .join("\n");

  let html = template;

  // Replace <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);

  // Replace meta description
  html = html.replace(
    /<meta\s+name="description"[\s\S]*?\/>/i,
    `<meta name="description" content="${desc}" />`
  );

  // Replace meta robots
  html = html.replace(
    /<meta\s+name="robots"[\s\S]*?\/>/i,
    `<meta name="robots" content="${escapeHtml(robots)}" />`
  );

  // Replace canonical
  html = html.replace(
    /<link\s+rel="canonical"[\s\S]*?\/>/i,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`
  );

  // Replace OG tags
  html = html.replace(
    /<meta\s+property="og:url"[\s\S]*?\/>/i,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:title"[\s\S]*?\/>/i,
    `<meta property="og:title" content="${title}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"[\s\S]*?\/>/i,
    `<meta property="og:description" content="${desc}" />`
  );
  html = html.replace(
    /<meta\s+property="og:image"[\s\S]*?\/>/i,
    `<meta property="og:image" content="${escapeHtml(ogImage)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:locale"[\s\S]*?\/>/i,
    `<meta property="og:locale" content="${SITE_LOCALE}" />`
  );
  html = html.replace(
    /<meta\s+property="og:site_name"[\s\S]*?\/>/i,
    `<meta property="og:site_name" content="${SITE_NAME}" />`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta\s+name="twitter:title"[\s\S]*?\/>/i,
    `<meta name="twitter:title" content="${title}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"[\s\S]*?\/>/i,
    `<meta name="twitter:description" content="${desc}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:image"[\s\S]*?\/>/i,
    `<meta name="twitter:image" content="${escapeHtml(ogImage)}" />`
  );

  // Inject JSON-LD before </head>
  if (jsonLdScripts) {
    html = html.replace("</head>", `${jsonLdScripts}\n  </head>`);
  }

  // Inject rendered app HTML into <div id="root"></div>
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  return html;
}

function generateSitemap(routes) {
  const lastmod = new Date().toISOString().split("T")[0];

  const priorityFor = (routePath) => {
    if (routePath === "/") return { priority: "1.0", changefreq: "weekly" };
    if (routePath === "/layanan") return { priority: "0.9", changefreq: "weekly" };
    if (routePath === "/jasa-website-demak") return { priority: "0.8", changefreq: "monthly" };
    if (routePath.startsWith("/layanan/")) return { priority: "0.8", changefreq: "monthly" };
    return { priority: "0.7", changefreq: "monthly" };
  };

  const urls = routes
    .map((r) => {
      const { priority, changefreq } = priorityFor(r.path);
      return `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

async function main() {
  const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");
  const { render } = await import(pathToFileURL(serverEntryPath).href);

  const publicRoutes = getAllPublicRoutesSEO();

  for (const seo of publicRoutes) {
    const appHtml = await render(seo.path);
    const fullHtml = injectHeadAndRoot(template, appHtml, seo);

    const outPath =
      seo.path === "/"
        ? path.join(distDir, "index.html")
        : path.join(distDir, seo.path.slice(1), "index.html");

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, fullHtml, "utf-8");
    console.log(`[prerender] ✓ ${seo.path} -> ${path.relative(rootDir, outPath)}`);
  }

  // Generate 404.html
  const notFoundSeo = {
    title: "Halaman Tidak Ditemukan (404) — GaruDev Digital",
    description:
      "Halaman yang Anda cari tidak tersedia atau telah dipindahkan. Kembali ke beranda atau lihat daftar layanan GaruDev.",
    path: "/404",
    robots: "noindex, nofollow",
    jsonLd: [],
  };
  const notFoundHtml = await render("/__not_found_404__");
  fs.writeFileSync(
    path.join(distDir, "404.html"),
    injectHeadAndRoot(template, notFoundHtml, notFoundSeo),
    "utf-8"
  );
  console.log("[prerender] ✓ /404 -> dist/404.html");

  // Generate sitemap.xml into dist/ and public/
  const sitemapXml = generateSitemap(publicRoutes);
  fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapXml, "utf-8");
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapXml, "utf-8");
  console.log(`[sitemap] ✓ Generated ${publicRoutes.length} URLs with lastmod`);

  // Clean up dist/server
  fs.rmSync(path.join(distDir, "server"), { recursive: true, force: true });
  console.log("[prerender] ✓ Cleaned up dist/server");
}

main().catch((err) => {
  console.error("[prerender] Failed:", err);
  process.exit(1);
});
