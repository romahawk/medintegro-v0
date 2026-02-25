"use client"

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 440 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Medintegro"
    >
      {/* Hexagonal icon */}
      <g transform="translate(0, 4)">
        <path
          d="M36 0L60 14V42L36 56L12 42V14L36 0Z"
          fill="#00C8E0"
          opacity="0.9"
        />
        <path
          d="M36 10L52 19V37L36 46L20 37V19L36 10Z"
          fill="#00C8E0"
          opacity="0.6"
        />
        <path
          d="M36 20L44 25V33L36 38L28 33V25L36 20Z"
          fill="#00C8E0"
          opacity="0.35"
        />
        {/* Subtle hex outlines for depth */}
        <path
          d="M36 0L60 14V42L36 56L12 42V14L36 0Z"
          stroke="#00C8E0"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
      </g>

      {/* "med" in foreground color (adapts to theme) */}
      <text
        x="75"
        y="53"
        fontFamily="'Inter', sans-serif"
        fontSize="48"
        fontWeight="400"
        letterSpacing="-0.5"
        fill="currentColor"
      >
        med
      </text>

      {/* "integro" in brand cyan */}
      <text
        x="205"
        y="53"
        fontFamily="'Inter', sans-serif"
        fontSize="48"
        fontWeight="300"
        letterSpacing="-0.5"
        fill="#00C8E0"
      >
        integro
      </text>
    </svg>
  )
}
