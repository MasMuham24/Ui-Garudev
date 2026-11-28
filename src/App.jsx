import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import LazySection from "./components/LazySection";
import SectionLoader from "./components/SectionLoader";
import ScrollToTop from "./components/ScrollToTop";

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

function HomePage() {
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
      </Routes>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
