import Link from "next/link";
import type { Metadata } from "next";
import { BUTTON_PRIMARY, BUTTON_SECONDARY } from "@/components/PageParts";

export const metadata: Metadata = {
  title: "Page not found | Kyotex",
  description: "The page you're looking for doesn't exist or has moved.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center px-6">
      <div className="max-w-lg text-center py-32">
        <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Error 404</p>
        <h1 className="font-display text-4xl leading-tight mb-4">This page doesn't exist</h1>
        <p className="text-secondary mb-8">The address may have changed. Head back to the home page or browse our footwear adhesive systems.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/en" className={BUTTON_PRIMARY}>
            Go to the home page
          </Link>
          <Link href="/en/systems" className={BUTTON_SECONDARY}>
            Browse systems
          </Link>
        </div>
      </div>
    </main>
  );
}
