"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, FolderCheck, Coins, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";

export const ForStudentsSection: React.FC = () => {
  const studentBenefits = [
    {
      title: "Gain Practical Experience",
      desc: "Work on live briefs instead of simulated assignments to understand real corporate workflows.",
      icon: GraduationCap,
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/30",
    },
    {
      title: "Work on Real-World Projects",
      desc: "Solve genuine business problems for startups, D2C brands, and growing enterprises.",
      icon: Briefcase,
      color: "text-funngro-400",
      bg: "bg-funngro-500/10 border-funngro-500/30",
    },
    {
      title: "Develop Professional Skills",
      desc: "Refine client communication, deadline discipline, and problem-solving under guidance.",
      icon: Award,
      color: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/30",
    },
    {
      title: "Build a Portfolio",
      desc: "Assemble a verifiable digital showcase with real client feedback and ratings.",
      icon: FolderCheck,
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/30",
    },
    {
      title: "Earn While Learning",
      desc: "Receive competitive payouts for completed milestones and achieve financial independence.",
      icon: Coins,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/30",
    },
  ];

  return (
    <section id="students" className="py-24 bg-navy-900/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-funngro-400 bg-funngro-500/10 px-3.5 py-1 rounded-full border border-funngro-500/20">
            For Students & Creators
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Built Around <span className="text-gradient-green">Your Growth</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Empowering the next generation to convert classroom learning into real career advantage.
          </p>
        </div>

        {/* Grid of 5 Student Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentBenefits.map((benefit, idx) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Card hoverEffect className="h-full p-7 border-slate-800 bg-navy-950/80 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${benefit.bg}`}>
                      <IconComponent className={`w-6 h-6 ${benefit.color}`} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-funngro-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>Empowering Student Success</span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
