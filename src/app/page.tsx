import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyFunngroSection } from "@/components/home/WhyFunngroSection";
import { HowItWorksTimeline } from "@/components/home/HowItWorksTimeline";
import { OpportunitiesSection } from "@/components/home/OpportunitiesSection";
import { CareerGrowthSection } from "@/components/home/CareerGrowthSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Funngro | Turn Your Skills Into Real Opportunities",
  description:
    "Discover real projects, earn from your skills, gain practical experience and build your career with Funngro.",
  keywords: [
    "student projects",
    "student internships",
    "freelance work for students",
    "student opportunities",
    "earn money as a student",
    "real-world experience",
    "student career opportunities",
    "skills-based projects",
  ],
  alternates: {
    canonical: "https://funngro-evolution.vercel.app/",
  },
  openGraph: {
    title: "Funngro | Turn Your Skills Into Real Opportunities",
    description:
      "Discover real projects, earn from your skills, gain practical experience and build your career with Funngro.",
    url: "https://funngro-evolution.vercel.app/",
    siteName: "Funngro Evolution",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funngro | Turn Your Skills Into Real Opportunities",
    description:
      "Discover real projects, earn from your skills, gain practical experience and build your career with Funngro.",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd type="organization" />
      <JsonLd type="website" />

      <Navbar />
      <main id="main-content" className="min-h-screen">
        <HeroSection />
        <WhyFunngroSection />
        <HowItWorksTimeline />
        <OpportunitiesSection />
        <CareerGrowthSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
