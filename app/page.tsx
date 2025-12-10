// app/page.tsx
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import ProductsSection from "../components/sections/ProductsSection";
import WhyUsSection from "../components/sections/WhyUsSection";
import AboutSection from "../components/sections/AboutSection"
import CorporateSection from "../components/sections/CorporateSection";
import ContactSection from "../components/sections/ContactSection";
import DealersSection from "../components/sections/DealersSection";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CorporateSection />
      <ProductsSection />
      <WhyUsSection/>
      <DealersSection/>      
      <AboutSection/>
      <ContactSection/>
    </main>
  );
}
