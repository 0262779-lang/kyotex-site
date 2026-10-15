import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // La URL de Vercel manda al dominio propio, así Google indexa un solo sitio.
        source: "/:path*",
        has: [{ type: "host", value: "kyotex-site.vercel.app" }],
        destination: "https://kyotex.company/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
