"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FaqAccordionSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: "faq-1",
      question: "What is Funngro?",
      answer:
        "Funngro is a next-generation career platform designed to connect passionate students and young talent with real-world projects from verified companies. It enables young creators to gain practical experience, earn money, build a verifiable portfolio, and accelerate their career growth.",
    },
    {
      id: "faq-2",
      question: "How can students find projects?",
      answer:
        "Students can browse projects filtered by their skills and interests, such as web development, graphic design, video editing, social media management, content writing, and digital marketing. Once they find a matching project, they can submit a quick application directly through the platform.",
    },
    {
      id: "faq-3",
      question: "What types of projects are available?",
      answer:
        "Available projects range from short-term tasks like creating social media Reels, writing blog copy, or designing brand logos to comprehensive projects like building full Next.js websites, managing growth marketing funnels, and coding web applications.",
    },
    {
      id: "faq-4",
      question: "How do students earn?",
      answer:
        "Students earn financial rewards upon completing company project milestones. Project payouts are held securely in milestone escrow prior to kickoff and released immediately to the student's linked account upon company review and approval.",
    },
    {
      id: "faq-5",
      question: "How does working on real projects help students?",
      answer:
        "Working on real projects bridges the gap between theoretical classroom learning and industry requirements. Students build proof-of-work credentials, learn client communication, gain confidence, earn income, and build a resume that stands out to future recruiters.",
    },
    {
      id: "faq-6",
      question: "Can companies work with young talent?",
      answer:
        "Yes! Companies and startups can post project briefs on Funngro to discover motivated, skilled young talent. Businesses get quality deliverables completed fast and cost-effectively while mentoring the future workforce.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-navy-900/40 border-t border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-funngro-400 bg-funngro-500/10 px-3.5 py-1 rounded-full border border-funngro-500/20">
            Got Questions?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-gradient-green">Questions</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Everything you need to know about discovering projects, earning, and growing on Funngro.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-content-${idx}`;
            const headerId = `faq-header-${idx}`;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="glass-card rounded-2xl border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-funngro-500 rounded-2xl group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-funngro-500/10 border border-funngro-500/20 flex items-center justify-center text-funngro-400 shrink-0">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="font-display text-base sm:text-lg font-bold text-white group-hover:text-funngro-400 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-funngro-400" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={contentId}
                      role="region"
                      aria-labelledby={headerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Support Tag */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm inline-flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-funngro-400" />
            <span>Have a specific question not answered here?</span>
            <a href="mailto:support@funngro.com" className="text-funngro-400 font-medium underline underline-offset-4 hover:text-funngro-300">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
