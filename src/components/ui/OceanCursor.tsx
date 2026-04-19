"use client";

import { useEffect, useRef } from "react";

interface Bubble {
  el: HTMLDivElement;
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

const COLORS = [
  "rgba(94,234,212,0.7)",
  "rgba(125,211,252,0.7)",
  "rgba(186,230,253,0.6)",
  "rgba(255,255,255,0.5)",
  "rgba(6,182,212,0.6)",
];

export default function OceanCursor() {
  const bubblesRef = useRef<Bubble[]>([]);
  const rafRef = useRef<number>(0);
  const lastPos = useRef({ x: -999, y: -999 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const container = document.createElement("div");
    container.style.cssText = `
      position: fixed; inset: 0; pointer-events: none; z-index: 9999; overflow: hidden;
    `;
    document.body.appendChild(container);
    containerRef.current = container;

    // Custom cursor dot
    const cursor = document.createElement("div");
    cursor.style.cssText = `
      position: fixed; width: 12px; height: 12px; border-radius: 50%;
      background: rgba(94,234,212,0.9); pointer-events: none; z-index: 10000;
      transform: translate(-50%, -50%); transition: transform 0.08s ease;
      box-shadow: 0 0 8px 2px rgba(94,234,212,0.5);
      mix-blend-mode: screen;
    `;
    document.body.appendChild(cursor);
    document.body.style.cursor = "none";

    function spawnBubble(x: number, y: number) {
      const size = 4 + Math.random() * 10;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const el = document.createElement("div");
      el.style.cssText = `
        position: absolute; border-radius: 50%;
        width: ${size}px; height: ${size}px;
        background: ${color};
        border: 1px solid rgba(255,255,255,0.4);
        pointer-events: none;
        left: ${x}px; top: ${y}px;
        transform: translate(-50%, -50%);
      `;
      container.appendChild(el);
      const life = 40 + Math.random() * 30;
      bubblesRef.current.push({
        el,
        x, y,
        vx: (Math.random() - 0.5) * 1.2,
        vy: -(0.4 + Math.random() * 0.8),
        size,
        life,
        maxLife: life,
      });
    }

    function spawnBurst(x: number, y: number) {
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const speed = 1.5 + Math.random() * 2;
        const size = 4 + Math.random() * 8;
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const el = document.createElement("div");
        el.style.cssText = `
          position: absolute; border-radius: 50%;
          width: ${size}px; height: ${size}px;
          background: ${color};
          border: 1px solid rgba(255,255,255,0.5);
          pointer-events: none;
          left: ${x}px; top: ${y}px;
          transform: translate(-50%, -50%);
        `;
        container.appendChild(el);
        bubblesRef.current.push({
          el, x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5,
          size, life: 35, maxLife: 35,
        });
      }
    }

    let frameCount = 0;
    function animate() {
      frameCount++;
      const toRemove: Bubble[] = [];
      for (const b of bubblesRef.current) {
        b.life--;
        b.x += b.vx;
        b.y += b.vy;
        b.vx *= 0.97;
        b.vy -= 0.015; // rise
        const opacity = b.life / b.maxLife;
        const scale = 0.5 + opacity * 0.5;
        b.el.style.left = `${b.x}px`;
        b.el.style.top = `${b.y}px`;
        b.el.style.opacity = String(opacity);
        b.el.style.transform = `translate(-50%, -50%) scale(${scale})`;
        if (b.life <= 0) toRemove.push(b);
      }
      for (const b of toRemove) {
        b.el.remove();
        bubblesRef.current = bubblesRef.current.filter((x) => x !== b);
      }
      rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);

    let trailTimer = 0;
    function onMove(e: MouseEvent) {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      lastPos.current = { x: e.clientX, y: e.clientY };

      const now = Date.now();
      if (dist > 4 && now - trailTimer > 45) {
        trailTimer = now;
        spawnBubble(e.clientX, e.clientY);
      }
    }

    function onClick(e: MouseEvent) {
      spawnBurst(e.clientX, e.clientY);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      cancelAnimationFrame(rafRef.current);
      container.remove();
      cursor.remove();
      document.body.style.cursor = "";
    };
  }, []);

  return null;
}
