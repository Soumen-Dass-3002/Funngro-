"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Heart, Send, CheckCircle2 } from "lucide-react";
import { FunngroLogo } from "@/components/ui/FunngroLogo";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-navy-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-funngro-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/60">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <FunngroLogo size="md" showTagline />
            </Link>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Empowering students and young talent to discover real projects, collaborate with verified companies, earn from authentic skills, and build a career portfolio that matters.
            </p>

            {/* Newsletter Input */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-300 block mb-2">
                Subscribe to Weekly Opportunity Alerts (INR Payouts):
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-funngro-500/10 border border-funngro-500/30 text-xs text-funngro-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>You're subscribed to opportunity alerts!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <input
                    type="email"
                    required
                    placeholder="Enter your student email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-navy-900 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-funngro-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-funngro-500 hover:bg-funngro-400 text-navy-950 font-bold text-xs flex items-center gap-1 shrink-0 transition-colors"
                  >
                    <span>Join</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Platform Links Column */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-4 font-mono">
              Platform
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-funngro-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-slate-400 hover:text-funngro-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#opportunities" className="text-slate-400 hover:text-funngro-400 transition-colors">
                  Explore Opportunities
                </Link>
              </li>
              <li>
                <Link href="/how-it-works#students" className="text-slate-400 hover:text-funngro-400 transition-colors">
                  For Students
                </Link>
              </li>
              <li>
                <Link href="/how-it-works#companies" className="text-slate-400 hover:text-funngro-400 transition-colors">
                  For Companies
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-4 font-mono">
              Resources
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/how-it-works#faq" className="text-slate-400 hover:text-funngro-400 transition-colors">
                  FAQ & Help
                </Link>
              </li>
              <li>
                <a href="mailto:support@funngro.com" className="text-slate-400 hover:text-funngro-400 transition-colors">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-slate-400 hover:text-funngro-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-slate-400 hover:text-funngro-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Roles Grid */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-4 font-mono">
              Popular Tracks
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Web Dev",
                "UI Design",
                "Video Reels",
                "Social Media",
                "SEO Copy",
                "Growth Marketing",
              ].map((role) => (
                <Link
                  key={role}
                  href="/#opportunities"
                  className="text-xs px-2.5 py-1 rounded-lg bg-navy-900 border border-slate-800 text-slate-400 hover:text-funngro-400 hover:border-funngro-500/40 transition-all flex items-center gap-1"
                >
                  {role}
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} Funngro Evolution. Built for real skills, real work, and real growth.</p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-funngro-400 fill-funngro-400 inline" />
            <span>for future creators & founders.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
