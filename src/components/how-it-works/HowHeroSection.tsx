"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const HowHeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-hero-gradient">
      {/* Lights */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-funngro-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-funngro-500/10 border border-funngro-500/30 text-funngro-400 text-xs sm:text-sm font-medium mb-6"
        >
          <Zap className="w-4 h-4 text-funngro-400" />
          <span>The Funngro Methodology</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto"
        >
          From Your First Project to{" "}
          <span className="text-gradient-green">Your Next Opportunity.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mt-6 leading-relaxed"
        >
          See how Funngro turns skills into practical experience, earnings and career growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/#opportunities" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
            Explore Opportunities
          </Button>
        </motion.div>

        {/* Feature Badges Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/80"
        >
          <div className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-navy-900/60 border border-slate-800">
            <Zap className="w-4 h-4 text-funngro-400" />
            <span className="text-xs font-semibold text-slate-300">Fast Matchmaking</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-navy-900/60 border border-slate-800">
            <ShieldCheck className="w-4 h-4 text-funngro-400" />
            <span className="text-xs font-semibold text-slate-300">Milestone Protection</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-navy-900/60 border border-slate-800">
            <Users className="w-4 h-4 text-funngro-400" />
            <span className="text-xs font-semibold text-slate-300">Direct Mentorship</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
