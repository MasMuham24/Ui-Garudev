import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import LazySection from "./components/LazySection";
import SectionLoader from "./components/SectionLoader";

// Lazy loading all page sections with code-splitting
const Hero = lazy(() => import("./sections/Hero"));
const WhyChooseUs = lazy(() => import("./sections/WhyChooseUs"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));

function App() {
  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <Navbar />

      <Suspense fallback={<SectionLoader />}>
        <LazySection delay={50}>
          <Hero />
        </LazySection>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <LazySection delay={100}>
          <WhyChooseUs />
        </LazySection>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <LazySection delay={100}>
          <About />
        </LazySection>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <LazySection delay={100}>
          <Services />
        </LazySection>
      </Suspense>
    </main>
  );
}

export default App;
