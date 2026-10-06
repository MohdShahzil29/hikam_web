import type { Viewport } from "next";
import { amiri, manrope, marcellus } from "../_i18n/fonts";
import "../globals.css";

export const viewport: Viewport = {
  themeColor: "#0F3B47",
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${manrope.variable} ${marcellus.variable} ${amiri.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
