import React from "react";
import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "emerald" | "navy" | "outline" | "glow";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "emerald",
  size = "md",
  className,
}) => {
  const baseStyles = "inline-flex items-center font-medium rounded-full transition-all";
  
  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-xs md:text-sm",
  };

  const variantStyles = {
    emerald: "bg-funngro-500/10 text-funngro-400 border border-funngro-500/20",
    navy: "bg-navy-800 text-slate-300 border border-slate-700/60",
    outline: "bg-transparent text-slate-300 border border-slate-700",
    glow: "bg-funngro-500/15 text-funngro-400 border border-funngro-500/30 emerald-badge-glow",
  };

  return (
    <span className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)}>
      {children}
    </span>
  );
};
