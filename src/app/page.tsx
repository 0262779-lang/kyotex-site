import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProductShowcase from "@/components/ProductShowcase";
import ImageBand from "@/components/ImageBand";
import FeatureGrid from "@/components/FeatureGrid";
import Testimonials from "@/components/Testimonials";
import Reserve from "@/components/Reserve";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
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
