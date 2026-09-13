"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Palette,
  Video,
  Share2,
  FileText,
  Megaphone,
  ArrowUpRight,
  X,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const OpportunitiesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: "web-dev",
      title: "Web Development",
      description: "Build responsive websites, landing pages, web apps, and custom web interfaces.",
      icon: Code,
      projectsCount: "140+ Active Projects",
      tags: ["React", "Next.js", "Tailwind", "TypeScript"],
      gradient: "from-funngro-500/20 to-teal-500/10",
      accentColor: "text-funngro-400",
      sampleBriefs: [
        { title: "SaaS Dashboard UI in React", payout: "₹2,500", timeline: "4 Days" },
        { title: "E-Commerce Landing Page", payout: "₹2,000", timeline: "2 Days" },
        { title: "Portfolio Website for Creator", payout: "₹1,200", timeline: "24 Hours" },
      ],
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      description: "Design brand logos, social graphics, marketing banners, and visual assets.",
      icon: Palette,
      projectsCount: "120+ Active Projects",
      tags: ["Figma", "Photoshop", "Branding", "UI/UX"],
      gradient: "from-purple-500/20 to-pink-500/10",
      accentColor: "text-purple-400",
      sampleBriefs: [
        { title: "Brand Identity & Logo Suite", payout: "₹2,800", timeline: "3 Days" },
        { title: "Social Media Carousel Templates", payout: "₹1,500", timeline: "2 Days" },
        { title: "Mobile App Figma Prototype", payout: "₹3,000", timeline: "5 Days" },
      ],
    },
    {
      id: "video-editing",
      title: "Video Editing",
      description: "Craft high-converting Reels, YouTube videos, short ads, and promo edits.",
      icon: Video,
      projectsCount: "95+ Active Projects",
      tags: ["Premiere Pro", "CapCut", "Reels", "Motion Graphics"],
      gradient: "from-red-500/20 to-amber-500/10",
      accentColor: "text-red-400",
      sampleBriefs: [
        { title: "10 Viral Instagram Reels Edits", payout: "₹2,200", timeline: "3 Days" },
        { title: "YouTube Video Intro & Captions", payout: "₹1,000", timeline: "24 Hours" },
        { title: "Product Promo Video Ad", payout: "₹1,800", timeline: "2 Days" },
      ],
    },
    {
      id: "social-media",
      title: "Social Media",
      description: "Manage brand accounts, design post calendars, and boost community growth.",
      icon: Share2,
      projectsCount: "110+ Active Projects",
      tags: ["Instagram", "LinkedIn", "Content Strategy", "Analytics"],
      gradient: "from-blue-500/20 to-cyan-500/10",
      accentColor: "text-blue-400",
      sampleBriefs: [
        { title: "Monthly Content Calendar & Copy", payout: "₹2,500", timeline: "1 Week" },
        { title: "LinkedIn Thought Leadership Posts", payout: "₹1,800", timeline: "5 Days" },
        { title: "Community Management & Engagement", payout: "₹1,200", timeline: "Ongoing" },
      ],
    },
    {
      id: "content-writing",
      title: "Content Writing",
      description: "Write SEO blog posts, website copy, newsletters, and compelling scripts.",
      icon: FileText,
      projectsCount: "85+ Active Projects",
      tags: ["Copywriting", "SEO", "Blogs", "Scriptwriting"],
      gradient: "from-emerald-500/20 to-funngro-500/10",
      accentColor: "text-emerald-400",
      sampleBriefs: [
        { title: "5 Technical SEO Articles for AI Startup", payout: "₹2,000", timeline: "4 Days" },
        { title: "SaaS Product Website Copywriting", payout: "₹1,500", timeline: "2 Days" },
        { title: "Weekly Newsletter Copy", payout: "₹1,000", timeline: "24 Hours" },
      ],
    },
    {
      id: "marketing",
      title: "Marketing",
      description: "Run digital ad campaigns, email funnels, influencer outreach, and growth strategies.",
      icon: Megaphone,
      projectsCount: "75+ Active Projects",
      tags: ["Growth Marketing", "Ads", "Email Funnels", "Outreach"],
      gradient: "from-amber-500/20 to-orange-500/10",
      accentColor: "text-amber-400",
      sampleBriefs: [
        { title: "Meta & Google Ads Campaign Setup", payout: "₹3,000", timeline: "3 Days" },
        { title: "Cold Email Funnel Strategy", payout: "₹1,800", timeline: "2 Days" },
        { title: "Micro-Influencer Outreach Campaign", payout: "₹2,500", timeline: "5 Days" },
      ],
    },
  ];

  const activeCategoryData = categories.find((c) => c.id === selectedCategory);

  return (
    <section id="opportunities" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-funngro-400 bg-funngro-500/10 px-3.5 py-1 rounded-full border border-funngro-500/20">
            Explore Opportunities
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Projects Tailored to <span className="text-gradient-green">Your Expertise</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Choose from diverse categories matched to your passion and skill set. Click any category to preview active company briefs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
              >
                <div
                  onClick={() => setSelectedCategory(category.id)}
                  className="h-full cursor-pointer"
                >
                  <Card
                    hoverEffect
                    className="h-full flex flex-col justify-between p-7 border-slate-800 bg-navy-900/70 backdrop-blur-md group hover:border-funngro-500/50"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.gradient} border border-slate-700/60 flex items-center justify-center`}
                        >
                          <IconComponent className={`w-6 h-6 ${category.accentColor}`} />
                        </div>
                        <Badge variant="navy" size="sm">
                          {category.projectsCount}
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-display text-xl font-bold text-white group-hover:text-funngro-400 transition-colors flex items-center justify-between">
                          <span>{category.title}</span>
                          <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-funngro-400" />
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-800/60 space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {category.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2.5 py-0.5 rounded-md bg-navy-950 text-slate-300 border border-slate-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal / Preview Drawer when Category is Clicked */}
        <AnimatePresence>
          {selectedCategory && activeCategoryData && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass-card rounded-3xl p-6 sm:p-8 max-w-lg w-full border-funngro-500/40 bg-navy-950 shadow-2xl relative"
              >
                <button
                  type="button"
                  onClick={() => setSelectedCategory(null)}
                  className="absolute top-6 right-6 p-2 rounded-xl bg-navy-900 border border-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-funngro-500/10 border border-funngro-500/30 flex items-center justify-center text-funngro-400">
                    <activeCategoryData.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {activeCategoryData.title}
                    </h3>
                    <p className="text-xs text-funngro-400">
                      {activeCategoryData.projectsCount}
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  {activeCategoryData.description}
                </p>

                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Sample Live Briefs (₹1,000 – ₹3,000 Range):
                </h4>

                <div className="space-y-2.5 mb-6">
                  {activeCategoryData.sampleBriefs.map((brief) => (
                    <div
                      key={brief.title}
                      className="p-3 rounded-xl bg-navy-900 border border-slate-800 flex items-center justify-between gap-3 text-xs"
                    >
                      <div>
                        <span className="font-bold text-white block">{brief.title}</span>
                        <span className="text-slate-400 text-[11px] flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3 text-slate-400" /> {brief.timeline}
                        </span>
                      </div>
                      <span className="font-mono font-bold text-funngro-400 bg-funngro-500/10 px-2.5 py-1 rounded">
                        {brief.payout}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-800">
                  <Button
                    href="/how-it-works"
                    variant="primary"
                    fullWidth
                    onClick={() => setSelectedCategory(null)}
                  >
                    Apply for {activeCategoryData.title}
                  </Button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
