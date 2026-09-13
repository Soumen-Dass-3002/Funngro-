import React from "react";

interface JsonLdProps {
  type: "organization" | "website" | "faq" | "howto";
  data?: Record<string, unknown>;
}

export const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  let schema = {};

  if (type === "organization") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Funngro Evolution",
      url: "https://funngro-evolution.vercel.app",
      logo: "https://funngro-evolution.vercel.app/logo.png",
      description:
        "Platform connecting students and young talent with real projects from companies to gain practical experience, earn money, and build careers.",
      sameAs: [
        "https://twitter.com",
        "https://linkedin.com",
        "https://instagram.com",
      ],
    };
  } else if (type === "website") {
    schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Funngro Evolution",
      url: "https://funngro-evolution.vercel.app",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://funngro-evolution.vercel.app/#opportunities?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    };
  } else if (type === "faq") {
    schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Funngro?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Funngro is a Gen-Z career platform that connects passionate students and young creators with companies looking for skilled talent to work on real-world projects, earn income, and build practical experience.",
          },
        },
        {
          "@type": "Question",
          name: "How can students find projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Students can browse available projects filtered by skills such as web development, video editing, social media management, and content writing, then apply directly through the platform.",
          },
        },
        {
          "@type": "Question",
          name: "What types of projects are available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Projects include Web Development, Graphic Design, Video Editing, Social Media Campaigns, Content Writing, and Digital Marketing tasks from startups and established enterprises.",
          },
        },
        {
          "@type": "Question",
          name: "How do students earn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Students get rewarded financially upon successful completion and company milestone approval for each project, ensuring secure and transparent earnings.",
          },
        },
        {
          "@type": "Question",
          name: "How does working on real projects help students?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Real projects allow students to move beyond theoretical college work, build a verified professional portfolio, gain confidence, and demonstrate practical work experience to future employers.",
          },
        },
        {
          "@type": "Question",
          name: "Can companies work with young talent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, companies can post project requirements, access motivated young talent with fresh perspectives, and get quality work delivered fast and cost-effectively.",
          },
        },
      ],
    };
  } else if (type === "howto") {
    schema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How Funngro Works for Students",
      description: "Step-by-step guide to discovering projects, working with companies, earning money, and building career experience on Funngro.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Discover a project",
          text: "Find projects that match your skills and interests.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Apply with your skills",
          text: "Choose opportunities where you can contribute.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Complete the work",
          text: "Work on real projects from real companies.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Get rewarded",
          text: "Get rewarded for completed work and value created.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Build your experience",
          text: "Use your experience to build your portfolio and unlock better opportunities.",
        },
      ],
    };
  }

  const finalSchema = data ? { ...schema, ...data } : schema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
    />
  );
};
