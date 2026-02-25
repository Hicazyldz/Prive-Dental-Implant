import type { Metadata } from "next";

import "../globals.css";

import ThemeRegistry from "../../components/ThemeRegistry";

import { NextIntlClientProvider } from "next-intl";

import { getMessages, setRequestLocale } from "next-intl/server";

import Navbar from "../../components/layout/Navbar"; // Navbar'ı içeri aktar



export const metadata: Metadata = {

  title: "Prive Dental Implant",

  description: "Socks catalog website",

};



const locales = ["tr", "en","de","ar"] as const;



export function generateStaticParams() {

  return locales.map((locale) => ({ locale }));

}



type Props = {

  children: React.ReactNode;

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

            <Navbar /> {/* Navbar'ı buraya ekledik, artık her sayfada görünecek */}

            {children}

          </NextIntlClientProvider>

        </ThemeRegistry>

      </body>

    </html>

  );

} 