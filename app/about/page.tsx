import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, BookOpen, Scale, Coffee, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";

export const metadata: Metadata = {
  title: "About Starbucks Menu: Independent Food & Menu Publication",
  description:
    "Learn about Starbucks Menu, an independent digital food publication dedicated to providing clear, transparent Starbucks menu, nutrition, price, and ordering information.",
  alternates: {
    canonical: "https://www.starbucks-menu.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8 sm:pt-3.5 sm:pb-10 space-y-6 sm:space-y-8">
      {/* Top Header Block */}
      <div className="space-y-2">
        <Breadcrumbs items={[{ label: "About Starbucks Menu" }]} />
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-editorial-100 text-editorial-800 text-xs font-semibold">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Independent Publication</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-5xl text-roast tracking-tight">
            About Starbucks Menu
          </h1>
          <p className="text-sm sm:text-base text-slatewarm-700 leading-relaxed font-normal">
            Starbucks Menu is an independent digital food publication created to make coffee menus, nutrition facts, reference pricing, and drink customizations clear, accessible, and transparent for everyday consumers.
          </p>
        </div>
      </div>

      <div className="space-y-8 text-sm text-slatewarm-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-2xl text-roast">Our Editorial Mission</h2>
          <p>
            The world of commercial coffee can be confusing. Between complex Italian sizing terms, evolving seasonal promotions, varying regional prices, and hidden sugars, ordering coffee should not feel like solving a puzzle.
          </p>
          <p>
            Our mission is to provide an organized, factual, and user-friendly information hub that helps coffee drinkers understand what is in their cup, how much it typically costs, how many calories it contains, and how to customize beverages to meet dietary preferences.
          </p>
        </section>

        <section className="space-y-4 rounded-3xl border border-editorial-200 bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="font-serif font-bold text-2xl text-roast">Our Core Editorial Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="space-y-1.5">
              <h3 className="font-bold text-slatewarm-900 text-sm flex items-center gap-2">
                <Scale className="h-4 w-4 text-editorial-600" />
                1. Strict Independence
              </h3>
              <p className="text-slatewarm-600">
                Starbucks Menu is completely independent and is not owned, operated by, or affiliated with Starbucks Coffee Company. We do not accept sponsored product placements from coffee chains.
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-slatewarm-900 text-sm flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-editorial-600" />
                2. No Fabricated Data
              </h3>
              <p className="text-slatewarm-600">
                We never fabricate nutrition numbers or prices. When exact prices vary, we explicitly label them as reference ranges and provide regional economic context.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-2xl text-roast">How We Sustain Our Work</h2>
          <p>
            To keep our guides, tables, and nutritional tools freely available to all readers without paywalls or mandatory subscriptions, Starbucks Menu may display standard online advertisements. Advertising placements are clearly labeled and do not influence our editorial assessments, nutrition calculations, or consumer ordering recommendations.
          </p>
        </section>
      </div>

      <DisclaimerNotice />
    </div>
  );
}
