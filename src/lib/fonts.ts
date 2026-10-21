import { Manrope, Space_Grotesk } from "next/font/google";

// Compartidas por las dos plantillas raíz (español e inglés) y el 404 global.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const fontVariables = `${spaceGrotesk.variable} ${manrope.variable}`;
