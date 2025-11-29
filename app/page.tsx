// app/page.tsx
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import ProductsSection from "../components/sections/ProductsSection";
import WhyUsSection from "../components/sections/WhyUsSection";
import AboutSection from "../components/sections/AboutSection"
import ContactSection from "../components/sections/ContactSection";
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <WhyUsSection/>
      <AboutSection/>
      <ContactSection/>
    </main>
  );
}
