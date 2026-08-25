/**
 * Small L-shaped crop/registration marks at each corner — a nod to
 * technical-drawing precision that ties back to the brand's own
 * measurement-and-tolerance language ("precisión en cada capa").
 * Reused wherever a photo or frame needs a signature, not a border.
 */
export default function CornerMarks({
  inset = "inset-3",
  className = "",
}: {
  inset?: string;
  className?: string;
}) {
  const corner = "absolute h-5 w-5 border-accent";
  return (
    <div className={`pointer-events-none absolute ${inset} ${className}`} aria-hidden>
      <span className={`${corner} top-0 left-0 border-t-2 border-l-2`} />
      <span className={`${corner} top-0 right-0 border-t-2 border-r-2`} />
      <span className={`${corner} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${corner} bottom-0 right-0 border-b-2 border-r-2`} />
    </div>
  );
}
