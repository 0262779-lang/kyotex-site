const ITEMS = [
  "Manufactura de calzado",
  "Marroquinería",
  "Emplantillado libre de solventes",
  "Tecnología de emplantillado en frío",
  "Laminación de precisión",
  "Sistemas certificados ISO",
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="border-y border-border bg-card py-6 overflow-hidden">
      <div className="marquee-track flex w-max gap-16">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
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
