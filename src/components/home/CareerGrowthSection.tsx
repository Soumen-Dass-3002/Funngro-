"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Briefcase, Coins, FolderCheck, TrendingUp, CheckCircle2, XCircle, Trophy } from "lucide-react";
import { Card } from "@/components/ui/Card";

export const CareerGrowthSection: React.FC = () => {
  const [activeView, setActiveView] = useState<"flow" | "comparison">("flow");

  const progressionSteps = [
    { name: "Learn", icon: BookOpen, desc: "Foundational Skills" },
    { name: "Work", icon: Briefcase, desc: "Real Company Tasks" },
    { name: "Earn", icon: Coins, desc: "Milestone Payouts" },
    { name: "Build Portfolio", icon: FolderCheck, desc: "Verified Credentials" },
    { name: "Grow", icon: TrendingUp, desc: "Career Breakthrough" },
  ];

  const comparison = [
    {
      feature: "Work Experience",
      traditional: "Simulated homework & text assignments",
      funngro: "Live production tasks for active companies",
    },
    {
      feature: "Financial Independence",
      traditional: "Zero monetary reward for student effort",
      funngro: "100% escrow-backed earnings per milestone",
    },
    {
      feature: "Resume Proof",
      traditional: "Generic participation certificates",
      funngro: "Verifiable digital portfolio & company ratings",
    },
    {
      feature: "Career Readiness",
      traditional: "Uncertain transition post-graduation",
      funngro: "Direct hiring network & client trust",
    },
  ];

  return (
    <section className="py-24 bg-navy-900/40 border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text Copy */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-funngro-400 bg-funngro-500/10 px-3.5 py-1 rounded-full border border-funngro-500/20">
              Career Growth & Progression
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Move Beyond <span className="text-gradient-green">Theoretical Learning</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Traditional education often stops at classroom concepts. Funngro bridges the gap by giving young talent real-world projects with companies, enabling them to build practical experience, earn income, and develop verifiable portfolios before graduating.
            </p>

            {/* Toggle View Tabs */}
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-navy-950 border border-slate-800 w-fit">
              <button
                type="button"
                onClick={() => setActiveView("flow")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeView === "flow"
                    ? "bg-funngro-500 text-navy-950 shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                The Growth Pathway
              </button>
              <button
                type="button"
                onClick={() => setActiveView("comparison")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeView === "comparison"
                    ? "bg-funngro-500 text-navy-950 shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Why Real Projects Win
              </button>
            </div>
          </div>

          {/* Right Column Interactive Dynamic View */}
          <div className="lg:col-span-6">
            {activeView === "flow" ? (
              <Card className="p-6 sm:p-8 bg-navy-950/90 border-slate-800 shadow-2xl relative">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
                  <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-funngro-400" />
                    <span>The Growth Pathway</span>
                  </h3>
                  <span className="text-xs font-mono text-funngro-400 bg-funngro-500/10 px-2.5 py-1 rounded-md border border-funngro-500/20">
                    5-Stage Progression
                  </span>
                </div>

                {/* Steps Flow */}
                <div className="space-y-3.5">
                  {progressionSteps.map((step, idx) => {
                    const IconComponent = step.icon;
                    const isLast = idx === progressionSteps.length - 1;
                    return (
                      <motion.div
                        key={step.name}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: idx * 0.08 }}
                        className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                          isLast
                            ? "bg-gradient-to-r from-funngro-500/20 to-funngro-600/20 border-2 border-funngro-500/50 shadow-emerald-glow-sm"
                            : "bg-navy-900/80 border border-slate-800 hover:border-slate-700"
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                              isLast
                                ? "bg-funngro-500 text-navy-950"
                                : "bg-navy-950 text-funngro-400 border border-slate-800"
                            }`}
                          >
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <h4
                              className={`font-display font-bold text-base ${
                                isLast ? "text-funngro-400" : "text-white"
                              }`}
                            >
                              {step.name}
                            </h4>
                            <p className="text-xs text-slate-400">{step.desc}</p>
                          </div>
                        </div>

                        <div className="text-xs font-mono font-semibold text-slate-400 bg-navy-950 px-2.5 py-1 rounded border border-slate-800">
                          Step 0{idx + 1}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </Card>
            ) : (
              <Card className="p-6 sm:p-8 bg-navy-950/90 border-slate-800 shadow-2xl relative space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h3 className="font-display text-lg font-bold text-white">
                    Theoretical vs Real Projects
                  </h3>
                  <span className="text-xs text-funngro-400 font-mono">Side-by-Side</span>
                </div>

                <div className="space-y-3">
                  {comparison.map((item) => (
                    <div
                      key={item.feature}
                      className="p-3.5 rounded-xl bg-navy-900/80 border border-slate-800 space-y-2 text-xs"
                    >
                      <span className="font-bold text-white block text-sm">
                        {item.feature}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        <div className="flex items-start gap-1.5 text-slate-400 bg-navy-950 p-2 rounded-lg border border-slate-850">
                          <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <span>{item.traditional}</span>
                        </div>
                        <div className="flex items-start gap-1.5 text-funngro-300 bg-funngro-500/10 p-2 rounded-lg border border-funngro-500/30 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-funngro-400 shrink-0 mt-0.5" />
                          <span>{item.funngro}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
