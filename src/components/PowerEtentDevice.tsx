export function PowerEtentDevice({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 260"
      className={className}
      role="img"
      aria-label="PowerEtent smart extension cord illustration"
    >
      <defs>
        <linearGradient id="pe-body" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.30 0.024 260)" />
          <stop offset="100%" stopColor="oklch(0.22 0.024 260)" />
        </linearGradient>
        <radialGradient id="pe-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.85 0.16 74)" stopOpacity="0.9" />
          <stop offset="60%" stopColor="oklch(0.78 0.16 74)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="oklch(0.78 0.16 74)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Warm glow puddle behind the device — the "power stays on" moment */}
      <ellipse cx="260" cy="180" rx="230" ry="40" fill="url(#pe-glow)" className="power-flicker" />

      {/* Cord */}
      <path
        d="M20 190 C 70 190, 70 150, 120 150"
        stroke="oklch(0.32 0.02 260)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="18" cy="190" r="8" fill="oklch(0.35 0.02 260)" />

      {/* Body */}
      <rect
        x="120"
        y="90"
        width="380"
        height="110"
        rx="18"
        fill="url(#pe-body)"
        stroke="oklch(0.42 0.02 260)"
        strokeWidth="1.2"
      />

      {/* Top edge highlight */}
      <rect x="120" y="90" width="380" height="2" rx="1" fill="oklch(1 0 0 / 0.08)" />

      {/* Three Type-G sockets */}
      {[180, 300, 420].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy={145} r="34" fill="oklch(0.17 0.02 260)" stroke="oklch(0.38 0.02 260)" />
          {/* Earth pin (top) */}
          <rect x={cx - 3} y={121} width="6" height="14" rx="1.5" fill="oklch(0.55 0.02 260)" />
          {/* Live/neutral pins */}
          <rect x={cx - 18} y={152} width="10" height="4" rx="1" fill="oklch(0.55 0.02 260)" />
          <rect x={cx + 8} y={152} width="10" height="4" rx="1" fill="oklch(0.55 0.02 260)" />
        </g>
      ))}

      {/* LED battery indicator */}
      <g transform="translate(140, 178)">
        <rect width="60" height="8" rx="4" fill="oklch(0.17 0.02 260)" />
        <rect width="48" height="8" rx="4" fill="url(#pe-body)" />
        {[6, 18, 30, 42].map((x, i) => (
          <circle
            key={x}
            cx={x + 4}
            cy={4}
            r="2.2"
            fill="oklch(0.78 0.16 74)"
            className="power-flicker"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </g>

      {/* Wordmark */}
      <text
        x="470"
        y="188"
        textAnchor="end"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="10"
        fontWeight="600"
        letterSpacing="0.12em"
        fill="oklch(0.72 0.015 260)"
      >
        POWERETENT
      </text>

      {/* Rubber feet suggestion */}
      <rect x="140" y="200" width="30" height="4" rx="2" fill="oklch(0.14 0.02 260)" />
      <rect x="350" y="200" width="30" height="4" rx="2" fill="oklch(0.14 0.02 260)" />
    </svg>
  );
}
