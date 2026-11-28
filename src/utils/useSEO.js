/**
 * useSEO — hook React untuk mengatur meta, canonical, og, json-ld per halaman.
 * Menggantikan useSEO lokal yang ada di LayananPage & LayananDetailPage.
 *
 * @param {object} opts — lihat applyPageSEO untuk field yang tersedia
 */
import { useEffect } from "react";
import { applyPageSEO, resetPageSEO, setJsonLd, removeJsonLd } from "./seo";

export function useSEO(opts) {
  useEffect(() => {
    applyPageSEO(opts);
    return () => {
      // Reset canonical saja; title direset agar tidak bocor ke halaman lain
      resetPageSEO();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opts.path]);
}

/**
 * useJsonLd — inject / update / cleanup satu blok JSON-LD per halaman.
 * @param {string} id   — id unik untuk script tag, mis. "ld-service"
 * @param {object} data — objek schema.org
 */
export function useJsonLd(id, data) {
  useEffect(() => {
    if (!data) return;
    setJsonLd(id, data);
    return () => removeJsonLd(id);
  }, [id, JSON.stringify(data)]); // eslint-disable-line react-hooks/exhaustive-deps
}
