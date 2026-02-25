import HeroSection from '../../components/sections/HeroSection';
import ProductsSection from '../../components/sections/ProductsSection';
import AboutSection from '../../components/sections/AboutSection';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('home'); 

  return (
    <main>
      {/* Navbar'ı buradan sildik çünkü layout.tsx içinde zaten var */}
      <HeroSection />
      <ProductsSection />
      <AboutSection /> 
    </main>
  );
}