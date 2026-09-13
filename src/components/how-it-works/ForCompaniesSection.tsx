"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Zap, Clock, ShieldCheck, Target, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const ForCompaniesSection: React.FC = () => {
  const companyPillars = [
    {
      title: "Fresh, Unbiased Perspectives",
      desc: "Tap into Gen-Z creativity for social media trends, modern UX, viral content, and cutting-edge tech stacks.",
      icon: Zap,
    },
    {
      title: "Accelerated Delivery Timelines",
      desc: "Get standalone projects and micro-tasks completed swiftly by highly motivated, skilled young talent.",
      icon: Clock,
    },
    {
      title: "Cost-Effective Execution",
      desc: "Optimize company budgets while maintaining high deliverables and supporting future industry leaders.",
      icon: Target,
    },
    {
      title: "Milestone-Protected Hiring",
      desc: "Pay securely upon milestone review and approval with zero upfront risk.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="companies" className="py-24 bg-navy-950 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-funngro-400 bg-funngro-500/10 px-3.5 py-1 rounded-full border border-funngro-500/20">
              For Companies & Startups
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Great Talent <span className="text-gradient-green">Starts Young</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Companies can discover motivated young talent and get projects completed by skilled individuals. Access high-energy creators ready to deliver exceptional results for your business needs.
            </p>

            <div className="pt-2">
              <Button href="/#opportunities" variant="secondary" size="md" icon={<ArrowRight className="w-4 h-4 text-funngro-400" />}>
                Post a Project Requirement
              </Button>
            </div>
          </div>

          {/* Right Column Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {companyPillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <Card hoverEffect className="h-full p-6 border-slate-800 bg-navy-900/60 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-funngro-500/10 border border-funngro-500/30 flex items-center justify-center text-funngro-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-base font-bold text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {pillar.desc}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
