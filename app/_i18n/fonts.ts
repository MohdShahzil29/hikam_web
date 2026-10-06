import { Amiri, Manrope, Marcellus } from "next/font/google";

// Same type pairing as the Ilm24x7 app
export const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
export const marcellus = Marcellus({ variable: "--font-marcellus", weight: "400", subsets: ["latin"] });
export const amiri = Amiri({ variable: "--font-amiri", weight: ["400", "700"], subsets: ["arabic"], preload: false });
