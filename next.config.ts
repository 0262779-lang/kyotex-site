import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
