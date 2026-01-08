import Navbar from '../../components/layout/Navbar';
import HeroSection from '../../components/sections/HeroSection';
import ProductsSection from '../../components/sections/ProductsSection';
import WhyUsSection from '../../components/sections/WhyUsSection';
import AboutSection from '../../components/sections/AboutSection';
import CorporateSection from '../../components/sections/CorporateSection';
import ContactSection from '../../components/sections/ContactSection';
import DealersSection from '../../components/sections/DealersSection';
import PatientInfoSection from '../../components/sections/PatientInfoSection';
import { useLocale } from "next-intl";

import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations('home'); 
    const locale = useLocale();


  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <CorporateSection />
      <PatientInfoSection />
      <WhyUsSection />
      {locale === "tr" && <DealersSection />}
      <AboutSection />
      <ContactSection />
    </main>
  );
}
