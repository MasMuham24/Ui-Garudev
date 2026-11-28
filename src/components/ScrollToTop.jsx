/**
 * Hook sederhana untuk scroll-to-top saat navigasi antar halaman.
 * Gunakan di komponen halaman (bukan App.jsx agar tidak re-render global).
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Langsung ke atas tanpa smooth-scroll agar tidak confusing saat pindah halaman
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
