"use client";

import Link from "next/link";

export const PLATFORMS = [
  {
    id: "spotify",
    name: "Spotify",
    url: "https://open.spotify.com/search/shrempies",
    color: "#1DB954",
    bg: "#1DB95415",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    ),
  },
  {
    id: "apple",
    name: "Apple Music",
    url: "https://music.apple.com/search?term=shrempies",
    color: "#FA2D48",
    bg: "#FA2D4815",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.064-2.31-2.05-3.018a5.26 5.26 0 00-1.762-.812c-.51-.136-1.04-.185-1.57-.2-.121-.002-.243-.01-.362-.012H5.99c-.162.004-.323.011-.484.02-.51.025-1.02.071-1.512.207a5.345 5.345 0 00-1.755.81C1.01 1.614.263 2.616-.049 3.921A9.15 9.15 0 00-.29 6.104c-.004.094-.008.19-.01.284V17.61c.004.094.008.19.012.283.033 1.086.18 2.04.527 2.96.524 1.38 1.41 2.32 2.65 2.87.607.27 1.25.42 1.91.49.5.056 1.01.08 1.513.09h12.12c.502-.012 1.01-.036 1.513-.092a6.19 6.19 0 001.912-.49c1.24-.55 2.127-1.49 2.65-2.87.35-.92.495-1.875.527-2.96.005-.094.01-.19.013-.283V6.388c-.003-.088-.008-.176-.01-.264zM15.9 5.57c.146-.2.303-.39.476-.57.62-.65 1.43-1.02 2.35-1.06.037 0 .074-.004.11-.004.12 0 .24.01.35.03-.04.45-.16.88-.37 1.28-.31.6-.77 1.04-1.36 1.32-.38.18-.78.27-1.2.27h-.15l-.11-.01c.04-.42.14-.84.34-1.25l-.44.03c.04-.01.06-.02.01-.03zm-4.22 11.91c-.29.16-.6.24-.92.24s-.63-.08-.92-.24l-5.53-3.22C3.77 13.84 3.5 13.3 3.5 12.75s.27-1.09.81-1.44l5.53-3.22c.29-.17.6-.25.92-.25s.63.08.92.25l5.53 3.22c.54.35.81.89.81 1.44s-.27 1.09-.81 1.44l-5.53 3.22z"/>
      </svg>
    ),
  },
  {
    id: "youtube",
    name: "YouTube",
    url: "https://youtube.com/@shrempies",
    color: "#FF0000",
    bg: "#FF000015",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
      </svg>
    ),
  },
  {
    id: "amazon",
    name: "Amazon Music",
    url: "https://music.amazon.com/search/shrempies",
    color: "#25D1DA",
    bg: "#25D1DA15",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M13.058 3.858l-7.734 3.916a.536.536 0 00-.302.482v7.488a.54.54 0 00.302.482l7.734 3.917a.536.536 0 00.484 0l7.734-3.917a.54.54 0 00.302-.482V8.256a.536.536 0 00-.302-.482L13.542 3.858a.536.536 0 00-.484 0zM12 2.25a.75.75 0 01.335.079l8.25 4.125a.75.75 0 01.415.671v9.75a.75.75 0 01-.415.671l-8.25 4.125a.75.75 0 01-.67 0l-8.25-4.125a.75.75 0 01-.415-.671V7.125a.75.75 0 01.415-.671L11.665 2.33A.75.75 0 0112 2.25z"/>
      </svg>
    ),
  },
  {
    id: "shopify",
    name: "Shop",
    url: "https://shrempies.myshopify.com",
    color: "#5E8E3E",
    bg: "#5E8E3E15",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.116-.192-.213-.192-.098 0-1.87-.038-1.87-.038s-1.253-1.216-1.387-1.35v.018L15.337 23.98zm-4.282 0L13.74 2.308c-.135.134-1.387 1.35-1.387 1.35s-1.772.038-1.87.038c-.097 0-.195.076-.213.192-.018.116-2.625 17.73-2.625 17.73l7.41 2.361zm-1.387-1.35V3.658L7.39 5.235 4.765 23.06l4.903.569zm5.654-20.97V3.64l-2.278-.608v19.971l4.903-.57L15.322 5.235zM12 .75c-.866 0-1.578.712-1.578 1.578h3.156A1.578 1.578 0 0012 .75z"/>
      </svg>
    ),
  },
];

interface PlatformLinksProps {
  variant?: "pills" | "icons" | "full";
  className?: string;
  dark?: boolean;
}

export default function PlatformLinks({ variant = "pills", className = "", dark = false }: PlatformLinksProps) {
  if (variant === "icons") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {PLATFORMS.map((p) => (
          <Link
            key={p.id}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            title={p.name}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110"
            style={{ backgroundColor: dark ? `${p.color}25` : `${p.color}18`, color: p.color }}
          >
            {p.icon}
          </Link>
        ))}
      </div>
    );
  }

  if (variant === "full") {
    return (
      <div className={`flex flex-wrap gap-3 ${className}`}>
        {PLATFORMS.map((p) => (
          <Link
            key={p.id}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105"
            style={{
              backgroundColor: p.color,
              color: "#fff",
              fontFamily: "var(--font-body), sans-serif",
              boxShadow: `0 4px 16px ${p.color}40`,
            }}
          >
            {p.icon}
            <span>{p.name}</span>
          </Link>
        ))}
      </div>
    );
  }

  // pills (default)
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {PLATFORMS.map((p) => (
        <Link
          key={p.id}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all hover:scale-105"
          style={{
            backgroundColor: dark ? `${p.color}22` : `${p.color}14`,
            color: dark ? "#fff" : p.color,
            fontFamily: "var(--font-body), sans-serif",
            border: `1px solid ${p.color}30`,
          }}
        >
          {/* Icon keeps brand color even in dark-mode pills */}
          <span style={{ color: p.color }} className="transition-transform group-hover:scale-110">
            {p.icon}
          </span>
          <span>{p.name}</span>
        </Link>
      ))}
    </div>
  );
}
