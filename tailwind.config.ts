import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0A0F1D",
          900: "#0F172A",
          850: "#131C31",
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
        },
        funngro: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          glow: "rgba(16, 185, 129, 0.18)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Plus Jakarta Sans", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse at 50% 0%, rgba(16, 185, 129, 0.12) 0%, rgba(10, 15, 29, 0) 70%)",
        "card-gradient": "linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)",
        "green-gradient": "linear-gradient(135deg, #10B981 0%, #059669 100%)",
        "glow-radial": "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        "emerald-glow": "0 0 25px -5px rgba(16, 185, 129, 0.3)",
        "emerald-glow-sm": "0 0 15px -3px rgba(16, 185, 129, 0.25)",
        "card-glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
