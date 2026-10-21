import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // next/image entrega AVIF o WebP según lo que soporte cada navegador.
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Los estilos van dentro del HTML: quita la hoja de estilos que bloqueaba
    // el primer pintado (la mayoría de las visitas son nuevas).
    inlineCss: true,
    // Un 404 para las URLs que no existen en ninguno de los dos idiomas
    // (el sitio tiene una plantilla raíz por idioma).
    globalNotFound: true,
  },
  async redirects() {
    // La URL de Vercel y la versión con www mandan al dominio principal (el mismo
    // SITE_URL de src/lib/site.ts), así Google indexa un solo sitio. No configurar
    // en Vercel la redirección contraria (kyotex.company → www): se haría un ciclo.
    return ["kyotex-site.vercel.app", "www.kyotex.company"].map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://kyotex.company/:path*",
      permanent: true,
    }));
  },
};

export default nextConfig;
