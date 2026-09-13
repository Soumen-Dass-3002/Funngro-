import React from "react";
import { clsx } from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = true,
  glow = false,
}) => {
  return (
    <div
      className={clsx(
        "glass-card rounded-2xl p-6 relative overflow-hidden",
        hoverEffect && "glass-card-hover",
        glow && "before:absolute before:inset-0 before:bg-funngro-500/5 before:pointer-events-none",
        className
      )}
    >
      {children}
    </div>
  );
};
