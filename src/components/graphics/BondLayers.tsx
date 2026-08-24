"use client";

/**
 * Custom art direction piece for the hero: an exploded cross-section of a
 * bonded sole/upper stack, rendered as line art on a blueprint grid.
 * Replaces stock photography with something that reads as commissioned.
 */
export default function BondLayers({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 600"
      className={className}
      role="img"
      aria-label="Exploded diagram of a bonded footwear sole stack, showing the adhesive layer between upper and outsole"
    >
      <defs>
        <pattern
          id="blueprint-grid"
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
        <linearGradient id="layer-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      <rect width="480" height="600" fill="url(#blueprint-grid)" />

      {/* Upper */}
      <g className="bond-layer" data-layer="1">
        <path
          d="M100 160 L380 160 L360 220 L120 220 Z"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.6"
          strokeWidth="1.5"
        />
        <text
          x="100"
          y="145"
          fill="currentColor"
          fillOpacity="0.5"
          fontSize="11"
          fontFamily="var(--font-sans)"
          letterSpacing="0.05em"
        >
          01 — UPPER
        </text>
      </g>

      {/* Adhesive layer (accent) */}
      <g className="bond-layer" data-layer="2">
        <rect
          x="115"
          y="230"
          width="250"
          height="24"
          fill="url(#layer-accent)"
        />
        <text
          x="100"
          y="278"
          fill="var(--color-accent)"
          fontSize="11"
          fontFamily="var(--font-sans)"
          letterSpacing="0.05em"
        >
          02 — K THERMO BOND LINE
        </text>
      </g>

      {/* Reinforcement pad */}
      <g className="bond-layer" data-layer="3">
        <rect
          x="150"
          y="300"
          width="180"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.6"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <text
          x="100"
          y="340"
          fill="currentColor"
          fillOpacity="0.5"
          fontSize="11"
          fontFamily="var(--font-sans)"
          letterSpacing="0.05em"
        >
          03 — K PAD REINFORCEMENT
        </text>
      </g>

      {/* Outsole */}
      <g className="bond-layer" data-layer="4">
        <path
          d="M90 370 L390 370 L410 460 L70 460 Z"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.6"
          strokeWidth="1.5"
        />
        <text
          x="100"
          y="490"
          fill="currentColor"
          fillOpacity="0.5"
          fontSize="11"
          fontFamily="var(--font-sans)"
          letterSpacing="0.05em"
        >
          04 — OUTSOLE
        </text>
      </g>

      {/* Dimension lines */}
      <g stroke="currentColor" strokeOpacity="0.3" strokeWidth="1">
        <line x1="420" y1="160" x2="420" y2="460" />
        <line x1="414" y1="160" x2="426" y2="160" />
        <line x1="414" y1="460" x2="426" y2="460" />
      </g>
      <text
        x="432"
        y="315"
        fill="currentColor"
        fillOpacity="0.4"
        fontSize="10"
        fontFamily="var(--font-sans)"
        transform="rotate(90 432 315)"
      >
        BOND STACK
      </text>
    </svg>
  );
}
