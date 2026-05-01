"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode, type ElementType } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Delay in ms before the animation starts after entering the viewport. */
  delay?: number;
  /** Use a different tag (default: "div"). */
  as?: ElementType;
  /** Trigger immediately on mount instead of when scrolled into view. Useful
   *  for above-the-fold heroes where IntersectionObserver fires too late. */
  immediate?: boolean;
}

/**
 * Lightweight Framer-Motion replacement for the most common pattern:
 * `<motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}>`.
 * Uses an IntersectionObserver to add a `.in-view` class once the element
 * scrolls into view; the actual animation is a CSS keyframe (`fade-up-in`).
 *
 * No JS animation runtime, no per-element motion bookkeeping, and gracefully
 * respects `prefers-reduced-motion`.
 */
export default function FadeIn({
  children,
  className = "",
  style,
  delay = 0,
  as: Tag = "div",
  immediate = false,
}: FadeInProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (immediate) {
      el.classList.add("in-view");
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [immediate]);

  const finalStyle: CSSProperties = delay
    ? { ...style, animationDelay: `${delay}ms` }
    : style ?? {};

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={`fade-up-target ${className}`.trim()}
      style={finalStyle}
    >
      {children}
    </Tag>
  );
}
