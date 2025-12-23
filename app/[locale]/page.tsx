import Navbar from '../../components/layout/Navbar';
import HeroSection from '../../components/sections/HeroSection';
import ProductsSection from '../../components/sections/ProductsSection';
import WhyUsSection from '../../components/sections/WhyUsSection';
import AboutSection from '../../components/sections/AboutSection';
import CorporateSection from '../../components/sections/CorporateSection';
import ContactSection from '../../components/sections/ContactSection';
import DealersSection from '../../components/sections/DealersSection';
import PatientInfoSection from '../../components/sections/PatientInfoSection';

import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations('home'); // kullanacaksan: t('title') gibi

  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <CorporateSection />
      <PatientInfoSection />
      <WhyUsSection />
      <DealersSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
