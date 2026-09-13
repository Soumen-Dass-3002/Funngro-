import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://funngro-evolution.vercel.app"),
  title: {
    default: "Funngro | Turn Your Skills Into Real Opportunities",
    template: "%s | Funngro Evolution",
  },
  description:
    "Discover real projects, work with companies, earn from your skills, and build experience that actually matters.",
  authors: [{ name: "Funngro Team" }],
  creator: "Funngro Evolution",
  publisher: "Funngro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0F1D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} dark scroll-smooth`}>
      <body className="bg-navy-950 text-slate-100 font-sans antialiased selection:bg-funngro-500/30 selection:text-funngro-400">
        {/* Accessibility Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-funngro-500 text-navy-950 font-bold rounded-lg shadow-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
