import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

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

const siteUrl = "https://kyotex.company";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: {
    google: "VLzCnqc7WANevKwGiLcUz0YFL9I3VW5mdA7KTi3xivk",
  },
  title: "Kyotex — Sistemas de emplantillado sostenibles para calzado y marroquinería",
  description:
    "Sistemas adhesivos libres de solventes, termoadhesivos y maquinaria de aplicación de precisión para la manufactura de calzado y marroquinería. Parte de ALC Gruppo desde 2006.",
  openGraph: {
    title:
      "Kyotex — Sistemas de emplantillado sostenibles para calzado y marroquinería",
    description:
      "Sistemas adhesivos libres de solventes, termoadhesivos y maquinaria de aplicación de precisión para la manufactura de calzado y marroquinería.",
    url: siteUrl,
    siteName: "Kyotex",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kyotex — Sistemas de emplantillado sostenibles para calzado y marroquinería",
    description:
      "Sistemas adhesivos libres de solventes, termoadhesivos y maquinaria de aplicación de precisión para la manufactura de calzado y marroquinería.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="grain-overlay" aria-hidden />
        {children}
      </body>
    </html>
  );
}
