import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // SPA fallback: redirect semua 404 ke index.html agar route client-side
  // (/layanan, /layanan/:slug, dll.) tidak 404 saat di-refresh langsung.
  // Ini berlaku saat `vite preview`. Untuk production hosting:
  //   - Vercel: otomatis (tidak perlu config tambahan untuk Vite SPA)
  //   - Netlify: tambahkan file public/_redirects berisi: /* /index.html 200
  //   - Apache/Nginx/Laragon: lihat catatan di README / komentar di bawah
  preview: {
    // Laragon (Apache): aktifkan mod_rewrite dan buat .htaccess di public/:
    //   Options -MultiViews
    //   RewriteEngine On
    //   RewriteCond %{REQUEST_FILENAME} !-f
    //   RewriteRule ^ index.html [QSA,L]
  },
})
