import type { Metadata, Viewport } from "next";
import { Amiri, Manrope, Marcellus } from "next/font/google";
import "./globals.css";

// Same type pairing as the Hikam app
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const marcellus = Marcellus({ variable: "--font-marcellus", weight: "400", subsets: ["latin"] });
const amiri = Amiri({ variable: "--font-amiri", weight: ["400", "700"], subsets: ["arabic"], preload: false });

export const metadata: Metadata = {
  title: "Hikam — Quran, Hadith, Fatawa & Namaz Times",
  description:
    "Hikam is an Islamic app with Quran, Hadith, Fatawa Razawiya, Bahar-e-Shariat, prayer times with azan alarms, Qibla and Ask Hikam — answers with real references.",
  icons: { icon: "/logo.jpeg" },
};

export const viewport: Viewport = {
  themeColor: "#0F3B47",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${marcellus.variable} ${amiri.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
