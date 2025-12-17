// app/page.tsx
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import ProductsSection from "../components/sections/ProductsSection";
import WhyUsSection from "../components/sections/WhyUsSection";
import AboutSection from "../components/sections/AboutSection"
import CorporateSection from "../components/sections/CorporateSection";
import ContactSection from "../components/sections/ContactSection";
import DealersSection from "../components/sections/DealersSection";
import PatientInfoSection from "../components/sections/PatientInfoSection";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <CorporateSection />
      <PatientInfoSection />
      <WhyUsSection/>
      <DealersSection/>      
      <AboutSection/>
      <ContactSection/>
    </main>
  );
}
