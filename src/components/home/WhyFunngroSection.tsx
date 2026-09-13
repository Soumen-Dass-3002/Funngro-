"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Compass, Briefcase, Coins, TrendingUp, CheckCircle2, ShieldCheck, Star, Calculator } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const WhyFunngroSection: React.FC = () => {
  const [tasksPerWeek, setTasksPerWeek] = useState<number>(3);
  const avgPayPerTask = 2000; // Average ₹2,000/task (range: ₹1,000 - ₹3,000)
  const calculatedEarnings = (tasksPerWeek * avgPayPerTask * 4).toLocaleString("en-IN");

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-funngro-400 bg-funngro-500/10 px-3.5 py-1 rounded-full border border-funngro-500/20">
            Why Choose Funngro
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Your Skills. Real Work.{" "}
            <span className="text-gradient-green">Real Growth.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Stop relying on generic classroom certificates. Gain real-world experience, financial independence, and verifiable portfolio projects with active startups.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Card 1: Discover (Col Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7"
          >
            <div className="bento-card rounded-3xl p-8 h-full flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Compass className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-funngro-400 bg-funngro-500/10 px-3 py-1 rounded-full border border-funngro-500/20">
                    01 / Discover
                  </span>
                </div>

                <h3 className="font-display text-2xl font-extrabold text-white">
                  Discover Projects Matching Your Passion
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-lg">
                  Find curated projects from verified businesses tailored to your expertise. Filter by interest, payout range, and timeline flexibility.
                </p>
              </div>

              {/* Skill Badges Preview Box */}
              <div className="p-4 rounded-2xl bg-navy-950/80 border border-slate-800 space-y-2 relative z-10">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Popular Skill Tracks:
                </span>
                <div className="flex flex-wrap gap-2">
                  {["React & Next.js", "Video Reels Editing", "Figma Design", "SEO Copywriting", "Social Media Growth"].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 rounded-lg bg-navy-900 border border-slate-700/80 text-slate-200 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-funngro-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: Work (Col Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5"
          >
            <div className="bento-card rounded-3xl p-8 h-full flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-funngro-500/10 border border-funngro-500/30 flex items-center justify-center text-funngro-400">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-funngro-400 bg-funngro-500/10 px-3 py-1 rounded-full border border-funngro-500/20">
                    02 / Work
                  </span>
                </div>

                <h3 className="font-display text-2xl font-extrabold text-white">
                  Work on Real Projects from Real Companies
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Collaborate directly with founders and product leads. Receive feedback, build professional discipline, and deliver real value.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-navy-950/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>Verified Escrow Milestone</span>
                  <span className="text-funngro-400 font-mono font-bold">100% Guaranteed (INR)</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-funngro-500 to-funngro-400 h-full w-[85%]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 3: Earn (Interactive Calculator - Col Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5"
          >
            <div className="bento-card bento-card-green rounded-3xl p-8 h-full flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xl">
                    ₹
                  </div>
                  <span className="text-xs font-mono font-semibold text-funngro-400 bg-funngro-500/20 px-3 py-1 rounded-full border border-funngro-500/40">
                    03 / Earn
                  </span>
                </div>

                <h3 className="font-display text-2xl font-extrabold text-white">
                  Get Rewarded for the Value You Create
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Calculate your potential monthly earnings working part-time on Funngro projects.
                </p>
              </div>

              {/* Interactive Earnings Calculator Widget in Rupees */}
              <div className="p-4 rounded-2xl bg-navy-950/90 border border-funngro-500/30 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-300 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Calculator className="w-4 h-4 text-funngro-400" /> Tasks/Week: {tasksPerWeek} tasks
                  </span>
                  <span className="text-slate-400 font-mono">₹1,000–₹3,000/task</span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="10"
                  value={tasksPerWeek}
                  onChange={(e) => setTasksPerWeek(Number(e.target.value))}
                  className="w-full accent-funngro-400 cursor-pointer"
                />

                <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                  <span className="text-xs text-slate-400 font-medium">Est. Monthly Earnings:</span>
                  <span className="font-mono text-xl font-extrabold text-funngro-400">
                    ₹{calculatedEarnings} / mo
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 4: Grow (Col Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-7"
          >
            <div className="bento-card rounded-3xl p-8 h-full flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-funngro-400 bg-funngro-500/10 px-3 py-1 rounded-full border border-funngro-500/20">
                    04 / Grow
                  </span>
                </div>

                <h3 className="font-display text-2xl font-extrabold text-white">
                  Build Experience, Confidence & a Verifiable Portfolio
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-lg">
                  Every completed task adds proof-of-work to your digital Funngro credential card. Unlock higher-tier corporate roles and direct client opportunities.
                </p>
              </div>

              {/* Sample Verified Digital Credential Card */}
              <div className="p-4 rounded-2xl bg-navy-950/80 border border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-funngro-500/20 border border-funngro-500/40 flex items-center justify-center text-funngro-400 font-bold text-sm">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-white">
                      Verified Creator Pass
                    </h4>
                    <p className="text-xs text-slate-400">
                      Level 3 Creator • 14 Completed Projects
                    </p>
                  </div>
                </div>

                <Badge variant="emerald" size="sm">
                  Verified Portfolio
                </Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
