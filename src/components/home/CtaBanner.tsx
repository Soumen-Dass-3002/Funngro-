"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-funngro-500/30 shadow-2xl overflow-hidden text-center"
        >
          {/* Ambient Glow background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-funngro-500/15 blur-[90px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-funngro-500/10 border border-funngro-500/30 text-funngro-400 text-xs sm:text-sm font-medium">
              <Zap className="w-4 h-4 fill-funngro-400" />
              <span>Join 50,000+ Young Creators Today</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Ready to put your skills to work?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Find real projects, gain verifiable experience, work with forward-thinking companies, and earn from your talent.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="#opportunities"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Exploring
              </Button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-funngro-400" /> Free Registration for Students
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-funngro-400" /> Secure Milestone Payouts
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-funngro-400" /> Verified Companies
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
