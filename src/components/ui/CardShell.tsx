import type { CSSProperties, ReactNode } from "react";

type Variant = "soft" | "press";

interface CardShellProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** "soft" — neutral shadow. "press" — adds bottom accent shadow that picks
   *  up an accent color via the `accent` prop. Defaults to "soft". */
  variant?: Variant;
  /** Accent hex used for the press-shadow rim, optional. */
  accent?: string;
  /** Wrap in a section/article? Defaults to a div. */
  as?: "div" | "article" | "section" | "li";
}

/**
 * The shared card surface. Centralises the radius/shadow/background recipe
 * that was previously inlined dozens of times across pages. Accepts arbitrary
 * children and forwards className/style for layout overrides.
 */
export default function CardShell({
  children,
  className = "",
  style,
  variant = "soft",
  accent,
  as: Tag = "div",
}: CardShellProps) {
  const accentRimShadow =
    variant === "press" && accent
      ? { boxShadow: `0 2px 0 0 ${accent}30, 0 8px 32px rgba(6, 30, 58, 0.06)` }
      : undefined;

  const cls = variant === "press" ? "card-shell-press" : "card-shell";
  return (
    <Tag className={`${cls} ${className}`.trim()} style={{ ...accentRimShadow, ...style }}>
      {children}
    </Tag>
  );
}
