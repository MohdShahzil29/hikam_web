import type { Viewport } from "next";
import { Noto_Nastaliq_Urdu } from "next/font/google";
import { amiri, manrope, marcellus } from "../_i18n/fonts";
import "../globals.css";

// Nastaliq for running Urdu text. Not preloaded: the fonts CSS is shared, so a preload would hit English pages too;
// browsers only fetch it where Urdu text actually uses it.
const nastaliq = Noto_Nastaliq_Urdu({ variable: "--font-nastaliq", weight: "400", subsets: ["arabic"], preload: false });

export const viewport: Viewport = {
  themeColor: "#0F3B47",
};

export default function UrduLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ur"
      dir="rtl"
      className={`${manrope.variable} ${marcellus.variable} ${amiri.variable} ${nastaliq.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
