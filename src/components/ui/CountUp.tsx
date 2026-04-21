"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  /** The final numeric value to count to (if string, only numeric portion animates) */
  value: number | string;
  /** Duration of the count-up in ms */
  duration?: number;
  /** Optional prefix (e.g., "$") — rendered static */
  prefix?: string;
  /** Optional suffix (e.g., "+", "B", "M") — rendered static */
  suffix?: string;
  /** Format integer with commas */
  commas?: boolean;
  className?: string;
}

/**
 * CountUp — animates a number from 0 to `value` on first in-view.
 * Runs once per mount, eases out over the duration.
 */
export default function CountUp({
  value,
  duration = 1500,
  prefix = "",
  suffix = "",
  commas = false,
  className,
}: CountUpProps) {
  const target =
    typeof value === "number"
      ? value
      : parseFloat(String(value).replace(/[^0-9.-]/g, "")) || 0;

  // If the input string has non-numeric parts (e.g., "Gen β") fallback to static display
  const numericOnly =
    typeof value === "number" ||
    /^[-+]?\d*\.?\d+$/.test(String(value).replace(/[,\s]/g, ""));

  const [displayed, setDisplayed] = useState(numericOnly ? 0 : (value as string));
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const startedRef = useRef(false);

  useEffect(() => {
    if (!numericOnly) return;
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    const start = performance.now();
    const decimals = String(target).includes(".")
      ? String(target).split(".")[1].length
      : 0;

    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      const current = target * eased;
      const rounded =
        decimals > 0
          ? Number(current.toFixed(decimals))
          : Math.round(current);
      setDisplayed(rounded);
      if (t < 1) raf = requestAnimationFrame(tick);
      else setDisplayed(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, numericOnly]);

  const formatted =
    typeof displayed === "number" && commas
      ? displayed.toLocaleString()
      : displayed;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
