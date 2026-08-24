import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import Cursor from "@/components/Cursor";
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

const siteUrl = "https://kyotex.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kyotex — Sustainable bonding systems for footwear & leather goods",
  description:
    "Solvent-free adhesive systems, thermo-adhesives, and precision application machinery engineered for footwear and leather manufacturing. Part of ALC Gruppo since 2006.",
  openGraph: {
    title: "Kyotex — Sustainable bonding systems for footwear & leather goods",
    description:
      "Solvent-free adhesive systems, thermo-adhesives, and precision application machinery engineered for footwear and leather manufacturing.",
    url: siteUrl,
    siteName: "Kyotex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyotex — Sustainable bonding systems for footwear & leather goods",
    description:
      "Solvent-free adhesive systems, thermo-adhesives, and precision application machinery engineered for footwear and leather manufacturing.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="grain-overlay" aria-hidden />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
