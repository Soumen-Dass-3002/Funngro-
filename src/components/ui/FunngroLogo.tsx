"use client";

import React from "react";

interface FunngroLogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
}

export const FunngroLogo: React.FC<FunngroLogoProps> = ({
  size = "md",
  showTagline = false,
  className = "",
}) => {
  // Icon dimensions scale
  const dims = { sm: 32, md: 44, lg: 56 }[size];
  const titleSizes = { sm: "text-base", md: "text-xl", lg: "text-2xl" };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* ── Funngro Logo Mark ── */}
      <svg
        width={dims}
        height={dims}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="fg-bar-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6EE7B7" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <linearGradient id="fg-plane-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="fg-swoosh-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6EE7B7" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>

        {/* ── 4 Rising Bar Chart Columns ── */}
        {/* Bar heights (bottom-anchored at y=34): 12, 18, 24, 30 */}
        <rect x="4"  y="22" width="7" height="12" rx="1.5" fill="url(#fg-bar-grad)" />
        <rect x="14" y="16" width="7" height="18" rx="1.5" fill="url(#fg-bar-grad)" />
        <rect x="24" y="10" width="7" height="24" rx="1.5" fill="url(#fg-bar-grad)" />
        <rect x="34" y="4"  width="7" height="30" rx="1.5" fill="url(#fg-bar-grad)" />

        {/* ── Paper Airplane (pointing right) ── */}
        {/*  Body triangle */}
        <path
          d="M5 38 L44 26 L22 46 Z"
          fill="url(#fg-plane-grad)"
          strokeLinejoin="round"
        />
        {/*  Tail fold */}
        <path
          d="M22 46 L24 36 L44 26 Z"
          fill="#059669"
          strokeLinejoin="round"
        />
        {/*  Crease line from nose to fold */}
        <line x1="5" y1="38" x2="22" y2="40" stroke="#34D399" strokeWidth="0.8" />

        {/* ── Curved Swoosh Arrow (bottom) ── */}
        <path
          d="M8 54 Q24 48 42 53"
          stroke="url(#fg-swoosh-grad)"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Arrowhead */}
        <path
          d="M38 49.5 L44 53 L38 56.5"
          stroke="url(#fg-swoosh-grad)"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {/* ── Text Mark ── */}
      <div className="flex flex-col leading-none select-none">
        <span
          className={`font-display font-extrabold tracking-tight text-white ${titleSizes[size]}`}
          style={{ letterSpacing: "-0.02em" }}
        >
          Funngro
        </span>
        {showTagline && (
          <span className="text-[9px] uppercase tracking-widest font-mono text-emerald-400 font-bold mt-0.5">
            It&apos;s Fun to Grow up
          </span>
        )}
      </div>
    </div>
  );
};
