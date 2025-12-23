import type { Metadata } from "next";
import "../globals.css";
import ThemeRegistry from "../../components/ThemeRegistry";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Prive Dental Implant",
  description: "Socks catalog website",
};

const locales = ["tr", "en"] as const;

// ✅ next-intl dokümanlarının önerdiği şey: [locale] için statik param üret
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  // ✅ Next 16'da params build-time validator yüzünden Promise olabiliyor
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <ThemeRegistry>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
