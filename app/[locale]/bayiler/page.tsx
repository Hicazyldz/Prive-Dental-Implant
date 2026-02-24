import DealersSection from '@/components/sections/DealersSection';
import { useLocale } from "next-intl";

export default function DealersPage() {
  const locale = useLocale();
  
  if (locale !== "tr") return null; // Sadece Türkçe'de görünsün istiyorsan

  return (
    <main >
      <DealersSection />
    </main>
  );
}