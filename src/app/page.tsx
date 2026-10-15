import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProductShowcase from "@/components/ProductShowcase";
import ImageBand from "@/components/ImageBand";
import FeatureGrid from "@/components/FeatureGrid";
import Testimonials from "@/components/Testimonials";
import Reserve from "@/components/Reserve";
import Footer from "@/components/Footer";
import { ORG_NAME, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Datos estructurados: le dicen a Google quién es la empresa y cómo se llama
// el sitio, para mostrarlo correctamente en las búsquedas de "Kyotex".
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: ORG_NAME,
      alternateName: "Kyotex Norteamérica",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/logo.png`,
      description: SITE_DESCRIPTION,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      alternateName: [ORG_NAME, "Kyotex Norteamérica"],
      url: `${SITE_URL}/`,
      inLanguage: "es-MX",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <ProductShowcase />
        <ImageBand />
        <FeatureGrid />
        <Testimonials />
        <Reserve />
      </main>
      <Footer />
    </>
  );
}
