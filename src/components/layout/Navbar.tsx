"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FunngroLogo } from "@/components/ui/FunngroLogo";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Opportunities", href: pathname === "/how-it-works" ? "/#opportunities" : "#opportunities" },
    { name: "FAQ", href: "/how-it-works#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3 border-b border-slate-800/80 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with official Funngro icon & tagline */}
          <Link
            href="/"
            className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-funngro-500 rounded-xl p-1"
          >
            <FunngroLogo size="md" />
          </Link>

          {/* Nav Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 bg-navy-900/70 p-1.5 rounded-full border border-slate-800/90 backdrop-blur-xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-funngro-500/15 text-funngro-400 font-semibold border border-funngro-500/30"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-funngro-500/10 border border-funngro-500/20 text-[11px] font-medium text-funngro-400">
              <Zap className="w-3.5 h-3.5 fill-funngro-400 text-funngro-400" />
              <span>420+ Live Projects Today</span>
            </div>
            <Button
              href="/#opportunities"
              variant="primary"
              size="sm"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Explore Opportunities
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-navy-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-funngro-500"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-slate-800/80 mt-3 px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                    isActive
                      ? "bg-funngro-500/15 text-funngro-400 font-semibold border border-funngro-500/20"
                      : "text-slate-300 hover:bg-navy-800 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2">
            <Button
              href="/#opportunities"
              variant="primary"
              fullWidth
              onClick={() => setMobileMenuOpen(false)}
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Explore Opportunities
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
