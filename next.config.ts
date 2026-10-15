import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // La URL de Vercel manda al dominio propio (el mismo SITE_URL de src/lib/site.ts),
        // así Google indexa un solo sitio.
        source: "/:path*",
        has: [{ type: "host", value: "kyotex-site.vercel.app" }],
        destination: "https://kyotex.company/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
