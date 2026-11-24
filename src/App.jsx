import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import LazySection from "./components/LazySection";
import SectionLoader from "./components/SectionLoader";

const WhyChooseUs = lazy(() => import("./sections/WhyChooseUs"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./components/Projects"));
const Pricing = lazy(() => import("./components/Pricing"));
const Reviews = lazy(() => import("./components/Reviews"));
const FAQ = lazy(() => import("./components/FAQ"));
const CTA = lazy(() => import("./components/CTA"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Navbar />

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

        <Suspense fallback={<SectionLoader />}>
          <LazySection delay={50}>
            <Services />
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

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
