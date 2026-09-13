"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Send, CheckCircle, Award, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const HowItWorksTimeline: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Discover a project",
      description: "Browse curated tasks from verified businesses tailored to your expertise.",
      icon: Search,
    },
    {
      number: "02",
      title: "Apply with your skills",
      description: "Submit your quick profile proposal showing how you can solve their need.",
      icon: Send,
    },
    {
      number: "03",
      title: "Complete the work",
      description: "Deliver quality work on time while receiving guidance and feedback.",
      icon: CheckCircle,
    },
    {
      number: "04",
      title: "Get rewarded",
      description: "Receive direct financial payout safely upon milestone approval.",
      icon: Award,
    },
    {
      number: "05",
      title: "Build your experience",
      description: "Add real-world project credentials to your verifiable portfolio.",
      icon: Rocket,
    },
  ];

  return (
    <section className="py-24 bg-navy-900/60 border-y border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-funngro-400 bg-funngro-500/10 px-3.5 py-1 rounded-full border border-funngro-500/20">
              Seamless Workflow
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              How Funngro Works
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              A transparent, structured 5-step journey turning talent into career progression.
            </p>
          </div>

          <div>
            <Button href="/how-it-works" variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
              Deep Dive How It Works
            </Button>
          </div>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative py-8">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-funngro-500/20 via-funngro-500 to-funngro-500/20 -translate-y-6 pointer-events-none" />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Circle */}
                  <div className="w-16 h-16 rounded-2xl bg-navy-950 border-2 border-slate-700 group-hover:border-funngro-500 flex items-center justify-center text-white font-display font-extrabold shadow-xl group-hover:shadow-emerald-glow transition-all duration-300 relative mb-6">
                    <IconComponent className="w-7 h-7 text-funngro-400 group-hover:scale-110 transition-transform" />
                    <span className="absolute -top-3 -right-2 text-[10px] font-mono bg-funngro-500 text-navy-950 font-extrabold px-2 py-0.5 rounded-full shadow">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-funngro-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed px-2">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-6 relative pl-6 border-l-2 border-slate-800">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative pl-6"
              >
                {/* Dot Icon */}
                <div className="absolute -left-[35px] top-0 w-10 h-10 rounded-xl bg-navy-950 border-2 border-funngro-500 flex items-center justify-center text-funngro-400 font-bold text-sm shadow-md">
                  <IconComponent className="w-5 h-5" />
                </div>

                <div className="glass-card p-5 rounded-2xl border-slate-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-funngro-400 bg-funngro-500/10 px-2 py-0.5 rounded">
                      Step {step.number}
                    </span>
                    <h3 className="font-display font-bold text-base text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mt-1">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
