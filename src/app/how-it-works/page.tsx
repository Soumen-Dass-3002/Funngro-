import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HowHeroSection } from "@/components/how-it-works/HowHeroSection";
import { StepByStepSection } from "@/components/how-it-works/StepByStepSection";
import { ForStudentsSection } from "@/components/how-it-works/ForStudentsSection";
import { ForCompaniesSection } from "@/components/how-it-works/ForCompaniesSection";
import { FaqAccordionSection } from "@/components/how-it-works/FaqAccordionSection";
import { HowCtaBanner } from "@/components/how-it-works/HowCtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "How Funngro Works | Discover, Work, Earn & Grow",
  description:
    "Learn how Funngro helps students discover real projects, gain experience, earn and build skills for their future careers.",
  keywords: [
    "how funngro works",
    "student project process",
    "student freelance steps",
    "earn as student",
    "company student hiring",
    "skills based projects",
  ],
  alternates: {
    canonical: "https://funngro-evolution.vercel.app/how-it-works",
  },
  openGraph: {
    title: "How Funngro Works | Discover, Work, Earn & Grow",
    description:
      "Learn how Funngro helps students discover real projects, gain experience, earn and build skills for their future careers.",
    url: "https://funngro-evolution.vercel.app/how-it-works",
    siteName: "Funngro Evolution",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Funngro Works | Discover, Work, Earn & Grow",
    description:
      "Learn how Funngro helps students discover real projects, gain experience, earn and build skills for their future careers.",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd type="howto" />
      <JsonLd type="faq" />

      <Navbar />
      <main id="main-content" className="min-h-screen">
        <HowHeroSection />
        <StepByStepSection />
        <ForStudentsSection />
        <ForCompaniesSection />
        <FaqAccordionSection />
        <HowCtaBanner />
      </main>
      <Footer />
    </>
  );
}
