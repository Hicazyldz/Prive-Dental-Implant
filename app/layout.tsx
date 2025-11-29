// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "../components/ThemeRegistry";

export const metadata: Metadata = {
  title: "Online Trading Store",
  description: "Socks catalog website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
