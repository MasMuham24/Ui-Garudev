import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import LazySection from "./components/LazySection";
import SectionLoader from "./components/SectionLoader";
import ScrollToTop from "./components/ScrollToTop";
import { useSEO, useJsonLd } from "./utils/useSEO";
import { STATIC_ROUTES_SEO } from "./utils/seoConfig";

const WhyChooseUs = lazy(() => import("./sections/WhyChooseUs"));
const About = lazy(() => import("./pages/About"));
const ServicesSection = lazy(() => import("./sections/ServicesSection"));
const Projects = lazy(() => import("./components/Projects"));
const Pricing = lazy(() => import("./components/Pricing"));
const Reviews = lazy(() => import("./components/Reviews"));
const FAQ = lazy(() => import("./components/FAQ"));
const CTA = lazy(() => import("./components/CTA"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Footer = lazy(() => import("./components/Footer"));
const LayananPage = lazy(() => import("./pages/LayananPage"));
const LayananDetailPage = lazy(() => import("./pages/LayananDetailPage"));
const JasaWebsiteDemakPage = lazy(() => import("./pages/JasaWebsiteDemakPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function HomePage() {
  const seo = STATIC_ROUTES_SEO["/"];
  useSEO(seo);
  useJsonLd("ld-organization", seo.jsonLd[0].data);
  useJsonLd("ld-home-faq", seo.jsonLd[1].data);

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <Hero />

      <Suspense fallback={<SectionLoader />}>
        <LazySection delay={50}>
          <WhyChooseUs />
        </LazySection>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <LazySection delay={50}>
          <About />
        </LazySection>
      </Suspense>

      {/* Section layanan di landing page — sumber data dari src/data/services.js */}
      <Suspense fallback={<SectionLoader />}>
        <LazySection delay={50}>
          <ServicesSection />
        </LazySection>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <LazySection delay={50}>
          <Projects />
        </LazySection>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <LazySection delay={50}>
          <Pricing />
        </LazySection>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <LazySection delay={50}>
          <Reviews />
        </LazySection>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <LazySection delay={50}>
          <FAQ />
        </LazySection>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <LazySection delay={50}>
          <CTA />
        </LazySection>
      </Suspense>
    </main>
  );
}

function PortfolioPage() {
  return (
    <Suspense fallback={<SectionLoader />}>
      <Portfolio />
    </Suspense>
  );
}

function App() {
  return (
    <>
      {/* Scroll ke atas setiap kali route berubah */}
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />

        {/* Route baru: halaman semua layanan */}
        <Route
          path="/layanan"
          element={
            <Suspense fallback={<SectionLoader />}>
              <LayananPage />
            </Suspense>
          }
        />

        {/* Route baru: halaman detail layanan per slug */}
        <Route
          path="/layanan/:slug"
          element={
            <Suspense fallback={<SectionLoader />}>
              <LayananDetailPage />
            </Suspense>
          }
        />

        {/* Route baru: halaman lokal Demak */}
        <Route
          path="/jasa-website-demak"
          element={
            <Suspense fallback={<SectionLoader />}>
              <JasaWebsiteDemakPage />
            </Suspense>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <Suspense fallback={<SectionLoader />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
