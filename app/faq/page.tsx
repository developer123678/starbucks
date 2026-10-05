import React from "react";
import type { Metadata } from "next";
import { HelpCircle, Sparkles } from "lucide-react";
import { FAQS_DATA } from "@/data/faqs";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { AdSlot, InContentAd } from "@/components/AdSlot";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { SourceNote } from "@/components/SourceNote";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Starbucks FAQ: Common Questions on Menu, Prices & Nutrition",
  description:
    "Frequently asked questions about Starbucks drinks, food, prices, nutrition, sizes, milk customizations, Rewards stars, and barista secret menu terminology.",
  alternates: {
    canonical: "https://www.starbucks-menu.com/faq",
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS_DATA.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const categories = ["All", "Prices", "Nutrition", "Sizes", "Customization", "Rewards", "Ordering"] as const;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8 sm:pt-3.5 sm:pb-10 space-y-6 sm:space-y-8">
      <JsonLd data={faqSchema} />

      {/* Top Header Block */}
      <div className="space-y-2">
        <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} />
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-editorial-100 text-editorial-800 text-xs font-semibold">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Consumer FAQ Center</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-5xl text-roast tracking-tight">
            Starbucks Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-slatewarm-700 leading-relaxed font-normal">
            Clear, research-backed answers to the most common questions regarding Starbucks ingredients, drink sizing rules, pricing variations, and loyalty reward perks.
          </p>
        </div>
      </div>

      {/* Main FAQ Accordion */}
      <FAQSection
        faqs={FAQS_DATA}
        title="All Common Questions & Answers"
        subtitle="Click any question to view the full verified answer."
      />

      {/* In-Content Ad */}
      <InContentAd />

      <SourceNote
        sourceName="Starbucks Public Operating Policies, Ingredient Records & Consumer FAQ Compilations"
        lastVerified="2026-04-12"
      />

      <DisclaimerNotice />
    </div>
  );
}
