import React from "react";
import Link from "next/link";
import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-funngro-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-5 py-2.5 text-sm md:text-base gap-2",
    lg: "px-7 py-3.5 text-base md:text-lg gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-funngro-500 to-funngro-600 hover:from-funngro-400 hover:to-funngro-500 text-navy-950 font-semibold shadow-emerald-glow hover:shadow-emerald-glow-sm border border-funngro-400/30",
    secondary:
      "bg-navy-800/80 hover:bg-navy-800 text-white border border-slate-700/80 hover:border-slate-600 shadow-md",
    outline:
      "bg-transparent hover:bg-funngro-500/10 text-funngro-400 border border-funngro-500/40 hover:border-funngro-500",
    ghost:
      "bg-transparent hover:bg-slate-800/60 text-slate-300 hover:text-white",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  const combinedClasses = clsx(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    fullWidth ? "w-full" : "",
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
