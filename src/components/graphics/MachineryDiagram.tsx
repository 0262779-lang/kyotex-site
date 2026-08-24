"use client";

/**
 * Custom art direction piece for the machinery section: a schematic of a
 * precision adhesive dispensing head over a conveyor line.
 */
export default function MachineryDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 360"
      className={className}
      role="img"
      aria-label="Schematic diagram of a Kyo Machinery precision adhesive dispensing head over a production conveyor"
    >
      <defs>
        <pattern
          id="blueprint-grid-2"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 24 0 L 0 0 0 24"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.08"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      <rect width="480" height="360" fill="url(#blueprint-grid-2)" />

      {/* Conveyor */}
      <line
        x1="40"
        y1="280"
        x2="440"
        y2="280"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="1.5"
      />
      {Array.from({ length: 16 }).map((_, i) => (
        <line
          key={i}
          x1={50 + i * 25}
          y1="280"
          x2={40 + i * 25}
          y2="292"
          stroke="currentColor"
          strokeOpacity="0.3"
          strokeWidth="1"
        />
      ))}

      {/* Workpiece on the line */}
      <rect
        x="190"
        y="255"
        width="100"
        height="22"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.6"
        strokeWidth="1.5"
      />

      {/* Dispensing head column */}
      <line
        x1="240"
        y1="60"
        x2="240"
        y2="200"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="1.5"
      />
      <rect
        x="205"
        y="200"
        width="70"
        height="40"
        rx="3"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="1.75"
      />
      {/* Nozzle */}
      <path
        d="M232 240 L248 240 L240 256 Z"
        fill="var(--color-accent)"
        fillOpacity="0.85"
      />

      {/* Bead line being applied (accent) */}
      <line
        x1="200"
        y1="258"
        x2="280"
        y2="258"
        stroke="var(--color-accent)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Rail */}
      <rect
        x="60"
        y="52"
        width="360"
        height="8"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1.5"
      />

      <text
        x="60"
        y="36"
        fill="currentColor"
        fillOpacity="0.5"
        fontSize="11"
        fontFamily="var(--font-sans)"
        letterSpacing="0.05em"
      >
        KYO — PRECISION DISPENSE HEAD
      </text>
      <text
        x="60"
        y="310"
        fill="currentColor"
        fillOpacity="0.5"
        fontSize="11"
        fontFamily="var(--font-sans)"
        letterSpacing="0.05em"
      >
        LINE SPEED — CALIBRATED PER PRODUCT
      </text>
    </svg>
  );
}
