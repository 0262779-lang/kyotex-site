export default function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];

  return (
    <div className="border-y border-border bg-card py-6 overflow-hidden">
      <div className="marquee-track flex w-max gap-16">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            // La segunda vuelta solo sirve para que la cinta no se corte: se oculta a lectores de pantalla.
            aria-hidden={i >= items.length || undefined}
            className="flex items-center gap-4 text-secondary text-sm tracking-[0.15em] uppercase whitespace-nowrap"
          >
            {item}
            <span className="text-accent" aria-hidden>
              &#9679;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
