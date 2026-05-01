import type { CSSProperties } from "react";

interface SpinnerProps {
  size?: number;
  color?: string;
  style?: CSSProperties;
  className?: string;
}

/** Thin circular spinner using a single SVG arc. Animates via `animate-spin-slow`
 *  defined in globals.css (renamed locally to .animate-spin-fast for buttons). */
export default function Spinner({ size = 16, color = "currentColor", style, className = "" }: SpinnerProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`animate-spin ${className}`.trim()}
      style={style}
    >
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2.5" strokeOpacity="0.25" />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
