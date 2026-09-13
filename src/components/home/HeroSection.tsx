"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Code,
  Video,
  Share2,
  FileText,
  Palette,
  Rocket,
  CheckCircle2,
  Users,
  ShieldCheck,
  Zap,
  Clock,
  Briefcase,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [appliedIds, setAppliedIds] = useState<number[]>([]);

  const mockProjects = [
    {
      id: 1,
      category: "dev",
      title: "Next.js Landing Page Build",
      company: "Aura AI Labs",
      payout: "₹2,500 - ₹3,000",
      timeframe: "3 Days",
      applicants: 6,
      tags: ["Next.js", "Tailwind", "TypeScript"],
      icon: Code,
      badge: "High Reward",
    },
    {
      id: 2,
      category: "video",
      title: "Instagram Reel & Shorts Editing",
      company: "Velocity Media",
      payout: "₹1,000 - ₹1,800",
      timeframe: "24 Hours",
      applicants: 12,
      tags: ["Premiere Pro", "CapCut", "Reels"],
      icon: Video,
      badge: "Urgent",
    },
    {
      id: 3,
      category: "design",
      title: "Mobile App UI Redesign",
      company: "Pulse Fintech",
      payout: "₹2,000 - ₹3,000",
      timeframe: "4 Days",
      applicants: 8,
      tags: ["Figma", "UI/UX", "Design System"],
      icon: Palette,
      badge: "Featured",
    },
    {
      id: 4,
      category: "writing",
      title: "Tech Blog & SEO Copywriting",
      company: "GrowthX Inc",
      payout: "₹1,200 - ₹2,000",
      timeframe: "2 Days",
      applicants: 5,
      tags: ["SEO", "Technical Writing"],
      icon: FileText,
      badge: "Instant Review",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? mockProjects
      : mockProjects.filter((p) => p.category === activeTab);

  const handleApply = (id: number) => {
    if (!appliedIds.includes(id)) {
      setAppliedIds([...appliedIds, id]);
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-hero-gradient">
      {/* Background Decor Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-funngro-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            {/* Top Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-funngro-500/10 border border-funngro-500/30 text-funngro-400 text-xs sm:text-sm font-medium"
            >
              <Rocket className="w-4 h-4 text-funngro-400" />
              <span>Built for the Next Generation of Creators</span>
              <span className="w-1.5 h-1.5 rounded-full bg-funngro-400 animate-ping" />
            </motion.div>

            {/* H1 Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Turn Your Skills Into{" "}
                <span className="text-gradient-green block sm:inline">
                  Real Opportunities.
                </span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Discover real projects (₹1,000 - ₹3,000), work with companies, earn from your skills, and build experience that actually matters.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button
                href="#opportunities"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Explore Opportunities
              </Button>

              <Button
                href="/how-it-works"
                variant="secondary"
                size="lg"
                icon={<PlayCircle className="w-5 h-5 text-funngro-400" />}
                iconPosition="left"
              >
                How It Works
              </Button>
            </motion.div>

            {/* Human Proof / Community Avatar Stack */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs text-slate-400"
            >
              <div className="flex -space-x-2">
                {["/avatar1", "/avatar2", "/avatar3", "/avatar4"].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-slate-800 border-2 border-navy-950 flex items-center justify-center text-[10px] font-bold text-funngro-400 font-mono shadow"
                  >
                    {["RK", "AS", "VR", "NP"][i]}
                  </div>
                ))}
              </div>
              <div className="text-center lg:text-left">
                <p className="font-semibold text-slate-200">
                  50,000+ Young Creators Onboard
                </p>
                <p className="text-slate-400 text-[11px]">
                  Projects range: ₹1,000 - ₹3,000 per task
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Live Project Explorer Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="glass-card rounded-3xl p-5 sm:p-6 border-slate-800 shadow-2xl relative overflow-hidden bg-navy-950/90">
              {/* Top Header of Interactive Explorer */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-funngro-400 animate-pulse" />
                  <h2 className="font-display text-sm sm:text-base font-bold text-white">
                    Live Opportunity Stream
                  </h2>
                </div>
                <Badge variant="emerald" size="sm">
                  ₹1k - ₹3k Range
                </Badge>
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-3 scrollbar-none">
                {[
                  { id: "all", label: "All Projects" },
                  { id: "dev", label: "Development" },
                  { id: "video", label: "Video Editing" },
                  { id: "design", label: "Design" },
                  { id: "writing", label: "Writing" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                      activeTab === tab.id
                        ? "bg-funngro-500/20 text-funngro-400 border border-funngro-500/40"
                        : "bg-navy-900 text-slate-400 border border-slate-800 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Interactive Project List */}
              <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project) => {
                    const IconComp = project.icon;
                    const isApplied = appliedIds.includes(project.id);

                    return (
                      <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        className="p-3.5 rounded-2xl bg-navy-900/80 border border-slate-800 hover:border-funngro-500/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-xl bg-funngro-500/10 border border-funngro-500/30 flex items-center justify-center text-funngro-400 shrink-0 mt-0.5 sm:mt-0">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-display font-bold text-sm text-white group-hover:text-funngro-400 transition-colors">
                                {project.title}
                              </h3>
                            </div>
                            <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                              <span>{project.company}</span>
                              <CheckCircle2 className="w-3.5 h-3.5 text-funngro-400 inline" />
                              <span className="text-slate-600">•</span>
                              <span className="flex items-center gap-1 text-[11px] text-slate-400">
                                <Clock className="w-3 h-3 text-slate-400" /> {project.timeframe}
                              </span>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/60">
                          <div className="text-left sm:text-right">
                            <span className="font-mono text-xs font-bold text-funngro-400 block">
                              {project.payout}
                            </span>
                            <span className="text-[10px] text-slate-400">
                              {project.applicants} applicants
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleApply(project.id)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                              isApplied
                                ? "bg-funngro-500/20 text-funngro-400 border border-funngro-500/50"
                                : "bg-funngro-500 hover:bg-funngro-400 text-navy-950 shadow-md"
                            }`}
                          >
                            {isApplied ? "Applied ✓" : "Apply"}
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Bottom Interactive Note */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-funngro-400" /> 100% Escrow Protected
                </span>
                <span className="text-funngro-400 font-medium">Click to test instant apply demo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
