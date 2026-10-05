import React from "react";
import type { Metadata } from "next";
import { Scale, Database, HelpCircle, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";

export const metadata: Metadata = {
  title: "Data Methodology: How We Compile Menu, Nutrition & Pricing Data",
  description:
    "Understand how Starbucks Menu compiles and benchmarks Starbucks menu pricing, nutritional facts, calorie estimates, and cup size specifications.",
  alternates: {
    canonical: "https://www.starbucks-menu.com/data-methodology",
  },
};

export default function DataMethodologyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8 sm:pt-3.5 sm:pb-10 space-y-6 sm:space-y-8">
      {/* Top Header Block */}
      <div className="space-y-2">
        <Breadcrumbs items={[{ label: "Data Methodology" }]} />
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-editorial-100 text-editorial-800 text-xs font-semibold">
            <Database className="h-3.5 w-3.5" />
            <span>Research Methodology</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-5xl text-roast tracking-tight">
            Data Methodology & Measurement Standards
          </h1>
          <p className="text-sm sm:text-base text-slatewarm-700 leading-relaxed font-normal">
            Transparency in how we collect, calculate, and present food, drink, and pricing information is foundational to Starbucks Menu. This document outlines our data acquisition and verification standards.
          </p>
        </div>
      </div>

      <div className="space-y-8 text-sm text-slatewarm-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-2xl text-roast">1. Menu Pricing Methodology</h2>
          <p>
            Because Starbucks prices vary by store operating model (company-operated cafes vs. licensed grocery kiosks and airport locations) and geographic market tiers, we classify pricing numbers as <strong>Reference Prices</strong> or <strong>Estimated Ranges</strong>.
          </p>
          <p>
            We gather pricing samples from representative standard US corporate cafes across multiple metropolitan and suburban markets. When individual store or customization costs vary, we present baseline ranges rather than claiming universal nationwide fixed prices.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-2xl text-roast">2. Nutritional Facts & Calorie Calculations</h2>
          <p>
            Nutritional values (Calories, Total Fat, Saturated Fat, Carbohydrates, Sugar, Protein, Caffeine, and Sodium) are based on standard published US corporate specifications for standard default builds (typically Grande 16 fl oz with 2% milk or standard recipe).
          </p>
          <p>
            For customized beverages, our interactive Nutrition Calculator applies an algorithmic model based on incremental ingredient disclosures (such as syrup pump counts, milk density modifications, and whipped cream volumes). All calculated variations are clearly designated as estimates.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-2xl text-roast">3. Allergens & Dietary Classifications</h2>
          <p>
            Plant-based and vegetarian tags are assigned based on published ingredient declarations. Because barista handcrafting occurs in shared environments with shared steam wands and blenders, we explicitly highlight cross-contact risks on all relevant pages.
          </p>
        </section>
      </div>

      <DisclaimerNotice />
    </div>
  );
}
