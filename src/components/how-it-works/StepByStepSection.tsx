"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Send, Briefcase, DollarSign, TrendingUp, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const StepByStepSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Discover",
      subtitle: "Explore projects based on your skills and interests.",
      description:
        "Filter thousands of active projects by domain—web development, design, video editing, or content writing. Detailed project briefs specify timelines, deliverables, and exact rewards.",
      icon: Search,
      highlights: ["Skill-based filtering", "Transparent project scope", "Verified company listings"],
      gradient: "from-blue-500/20 to-funngro-500/10",
      accent: "text-blue-400",
    },
    {
      num: "02",
      title: "Apply",
      subtitle: "Choose opportunities where you can contribute.",
      description:
        "Submit quick, structured proposals showcasing your enthusiasm, relevant sample links, and estimated completion time. Show companies why your skills are the right fit.",
      icon: Send,
      highlights: ["1-Click application flow", "Sample portfolio attachment", "Fast application status tracking"],
      gradient: "from-purple-500/20 to-funngro-500/10",
      accent: "text-purple-400",
    },
    {
      num: "03",
      title: "Work",
      subtitle: "Complete meaningful tasks for real companies.",
      description:
        "Collaborate directly with company project leads via Funngro workspace tools. Submit deliverables on time and receive constructive professional feedback.",
      icon: Briefcase,
      highlights: ["Direct company chat", "Milestone submissions", "Industry mentor guidance"],
      gradient: "from-funngro-500/20 to-emerald-600/10",
      accent: "text-funngro-400",
    },
    {
      num: "04",
      title: "Earn",
      subtitle: "Get rewarded for completed work.",
      description:
        "Funds are safely held in milestone escrow prior to project kickoff. Upon company review and approval, money is immediately transferred to your designated account.",
      icon: DollarSign,
      highlights: ["100% Escrow security", "Direct bank/UPI transfer", "Zero hidden deduction fees"],
      gradient: "from-amber-500/20 to-funngro-500/10",
      accent: "text-amber-400",
    },
    {
      num: "05",
      title: "Grow",
      subtitle: "Use your experience to build your portfolio and unlock better opportunities.",
      description:
        "Every completed project automatically builds your verified digital resume on Funngro. Use public project links and company ratings to unlock higher-tier opportunities.",
      icon: TrendingUp,
      highlights: ["Automated portfolio generator", "Verified client ratings", "Priority access to premium gigs"],
      gradient: "from-emerald-500/20 to-funngro-500/10",
      accent: "text-emerald-400",
    },
  ];

  return (
    <section className="py-24 bg-navy-950 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-funngro-400 bg-funngro-500/10 px-3.5 py-1 rounded-full border border-funngro-500/20">
            Step-By-Step Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How It Works in <span className="text-gradient-green">5 Simple Steps</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A frictionless journey designed specifically for young talent to learn, earn, and excel.
          </p>
        </div>

        {/* Large Numbered Cards */}
        <div className="space-y-8">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card
                  hoverEffect
                  className="p-8 sm:p-10 border-slate-800 bg-navy-900/60 backdrop-blur-lg"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Big Number Column */}
                    <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-between border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-8">
                      <span className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-slate-800 group-hover:text-funngro-500/40 transition-colors tracking-tighter">
                        {step.num}
                      </span>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} border border-slate-700/60 flex items-center justify-center`}>
                        <IconComponent className={`w-7 h-7 ${step.accent}`} />
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-9 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant="emerald" size="sm">
                          Phase {step.num}
                        </Badge>
                        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                          {step.title}
                        </h3>
                      </div>

                      <h4 className="text-funngro-400 font-semibold text-base sm:text-lg">
                        "{step.subtitle}"
                      </h4>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {step.description}
                      </p>

                      {/* Key Bullet Highlights */}
                      <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {step.highlights.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 p-2.5 rounded-lg bg-navy-950 border border-slate-800/80 text-xs text-slate-300"
                          >
                            <CheckCircle2 className="w-4 h-4 text-funngro-400 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
