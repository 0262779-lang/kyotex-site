import type { Metadata } from "next";
import "./globals.css";
import { fontVariables } from "@/lib/fonts";

// 404 para direcciones que no existen en ningún idioma (no pasa por las plantillas).
export const metadata: Metadata = {
  title: "Página no encontrada | Kyotex",
  description: "La página que buscas no existe o cambió de dirección.",
};

export default function GlobalNotFound() {
  return (
    <html lang="es-MX" className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full flex items-center justify-center bg-background text-foreground px-6">
        <main className="max-w-lg text-center py-24">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Error 404</p>
          <h1 className="font-display text-4xl leading-tight mb-4">
            Esta página no existe
          </h1>
          <p className="text-secondary mb-8">
            Es posible que la dirección haya cambiado. Puedes volver al inicio o
            ver nuestros sistemas adhesivos para calzado.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 bg-accent text-accent-foreground text-sm tracking-wide focus-ring rounded-sm"
            >
              Ir al inicio
            </a>
            <a
              href="/sistemas"
              className="inline-flex items-center justify-center h-12 px-6 border border-border text-sm tracking-wide focus-ring rounded-sm"
            >
              Ver sistemas
            </a>
            <a
              href="/en"
              hrefLang="en-US"
              lang="en-US"
              className="inline-flex items-center justify-center h-12 px-6 border border-border text-sm tracking-wide focus-ring rounded-sm"
            >
              English site
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
