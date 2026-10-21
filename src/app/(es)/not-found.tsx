import Link from "next/link";
import type { Metadata } from "next";
import { BUTTON_PRIMARY, BUTTON_SECONDARY } from "@/components/PageParts";

export const metadata: Metadata = {
  title: "Página no encontrada | Kyotex",
  description: "La página que buscas no existe o cambió de dirección.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center px-6">
      <div className="max-w-lg text-center py-32">
        <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Error 404</p>
        <h1 className="font-display text-4xl leading-tight mb-4">Esta página no existe</h1>
        <p className="text-secondary mb-8">Es posible que la dirección haya cambiado. Puedes volver al inicio o ver nuestros sistemas adhesivos para calzado.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className={BUTTON_PRIMARY}>
            Ir al inicio
          </Link>
          <Link href="/sistemas" className={BUTTON_SECONDARY}>
            Ver sistemas
          </Link>
        </div>
      </div>
    </main>
  );
}
