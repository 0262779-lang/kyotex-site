export default function Footer() {
  return (
    <footer className="mt-auto py-12 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="font-display text-lg tracking-[0.2em]">KYOTEX</span>
        <p className="text-muted-foreground text-xs text-center">
          &copy; {new Date().getFullYear()} Kyotex. Todos los derechos reservados.
        </p>
        <span className="text-sm text-secondary py-3 -my-3">ADH TERRELL</span>
      </div>
    </footer>
  );
}
