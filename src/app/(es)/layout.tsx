import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import { fontVariables } from "@/lib/fonts";
import { HTML_LANG } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

// Plantilla raíz de las páginas en español (la de inglés vive en app/(en)).
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  verification: {
    google: "VLzCnqc7WANevKwGiLcUz0YFL9I3VW5mdA7KTi3xivk",
  },
};

export default function SpanishRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={HTML_LANG.es} className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="grain-overlay" aria-hidden />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
