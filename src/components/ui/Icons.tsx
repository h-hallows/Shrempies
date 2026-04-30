// Bespoke icon set for Shrempies. Stroke-based, 24px viewBox, currentColor.
// Style: rounded line caps, gentle organic curves — meant to feel calm and
// hand-drawn rather than rigid/geometric. Use at 16–28px.

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 24, children, strokeWidth = 1.8, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 20.5s-7-4.4-7-10.1A4.4 4.4 0 0 1 12 7.5a4.4 4.4 0 0 1 7 2.9c0 5.7-7 10.1-7 10.1Z" />
    </Base>
  );
}

export function WaveIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 9c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2" />
      <path d="M3 15c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2" />
    </Base>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3v3.5M12 17.5V21M3 12h3.5M17.5 12H21" />
      <path d="M12 8.5c0 1.7 1.8 3.5 3.5 3.5-1.7 0-3.5 1.8-3.5 3.5 0-1.7-1.8-3.5-3.5-3.5 1.7 0 3.5-1.8 3.5-3.5Z" />
    </Base>
  );
}

export function DiamondIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3 4 12l8 9 8-9-8-9Z" />
      <path d="M8 12h8" />
    </Base>
  );
}

export function NoteIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M9 18V6l11-2v11" />
      <circle cx="6.5" cy="18.5" r="2.5" />
      <circle cx="17.5" cy="15.5" r="2.5" />
    </Base>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Base {...props} strokeWidth={2.4}>
      <path d="m5 12.5 5 5 9-10" />
    </Base>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7L12 3Z" />
    </Base>
  );
}

export function EyeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </Base>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m9 15 1.5-4.5L15 9l-1.5 4.5L9 15Z" />
    </Base>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3 4 6v6c0 4.5 3.5 8 8 9 4.5-1 8-4.5 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </Base>
  );
}

export function BubbleIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="9" cy="9" r="1.6" />
    </Base>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </Base>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <Base {...props} strokeWidth={2}>
      <path d="M8 5.5v13l11-6.5L8 5.5Z" />
    </Base>
  );
}

export function HandshakeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 12.5 7 8.5l3 3 4-4 5 5-4 4-3-3" />
      <path d="m12 15 1.5 1.5L15 15" />
    </Base>
  );
}

export function NewspaperIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 5h13a2 2 0 0 1 2 2v11a2 2 0 0 0 2-2V8" />
      <rect x="4" y="5" width="13" height="14" rx="1.5" />
      <path d="M7 9h7M7 12h7M7 15h4" />
    </Base>
  );
}

// Map old Unicode glyphs to new components for migrations
export const GLYPH_MAP = {
  "♡": HeartIcon,
  "✦": SparkleIcon,
  "◈": DiamondIcon,
  "◉": ShieldIcon,
  "◎": EyeIcon,
  "♪": NoteIcon,
  "★": StarIcon,
  "▶": PlayIcon,
} as const;
