import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Award, Star, Gift, ShieldCheck, Clock, CheckCircle2, ArrowRight, HelpCircle } from "lucide-react";
import { REWARD_TIERS, REWARDS_PROGRAM_FACTS } from "@/data/rewards";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { AdSlot, InContentAd } from "@/components/AdSlot";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { SourceNote } from "@/components/SourceNote";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Starbucks Rewards Guide: Star Tiers, Free Refills & Birthday Rules",
  description:
    "Complete independent analysis of the Starbucks Rewards loyalty program. Star redemption tiers (25, 100, 200, 300, 400), earning rates, free in-store refill policies, and birthday drinks.",
  alternates: {
    canonical: "https://www.starbucks-menu.com/starbucks-rewards",
  },
};

export default function StarbucksRewardsPage() {
  const rewardsFaqs = [
    {
      question: "How do Starbucks Rewards Stars work?",
      answer: "Members earn Stars on every dollar spent when scanning their app or paying with a preloaded Starbucks Card (2 Stars per $1) or linked credit/debit card (1 Star per $1). Stars can be redeemed at tiered thresholds starting at 25 Stars for drink customizations up to 400 Stars for merchandise."
    },
    {
      question: "How does the Starbucks Birthday Reward work?",
      answer: "Members receive one complimentary handcrafted beverage or standard food item on their birthday. To qualify, you must join Starbucks Rewards at least 7 days before your birthday and complete at least one star-earning purchase prior to your birthday each year."
    },
    {
      question: "How do free in-store brewed coffee and tea refills work?",
      answer: "When staying inside participating company-operated stores, members who scan their app receive complimentary refills of hot brewed coffee, iced coffee, hot tea, or iced tea during the same store visit, regardless of the original beverage purchased."
    },
    {
      question: "Do Starbucks Stars expire?",
      answer: "Yes. Stars earned by standard members expire 6 months after the calendar month in which they were earned, unless you hold a Starbucks Rewards Visa credit card where stars may remain active."
    }
  ];

  const rewardsSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Starbucks Rewards Guide: Star Tiers, Free Refills & Birthday Rules",
    description: "An independent consumer guide to the Starbucks Rewards loyalty program and star redemption mathematics.",
    author: {
      "@type": "Organization",
      name: "Starbucks Menu Editorial Team"
    },
    publisher: {
      "@type": "Organization",
      name: "Starbucks Menu",
      url: "https://www.starbucks-menu.com"
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8 sm:pt-3.5 sm:pb-10 space-y-6 sm:space-y-8">
      <JsonLd data={rewardsSchema} />

      {/* Top Header Block */}
      <div className="space-y-2">
        <Breadcrumbs items={[{ label: "Starbucks Rewards Guide" }]} />
        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-editorial-100 text-editorial-800 text-xs font-semibold">
            <Award className="h-3.5 w-3.5" />
            <span>Loyalty Program Analysis</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-5xl text-roast tracking-tight">
            Starbucks Rewards Explained: Star Tiers & Value Guide
          </h1>
          <p className="text-sm sm:text-base text-slatewarm-700 leading-relaxed font-normal">
            An independent breakdown of the Starbucks loyalty program: how stars accumulate, which redemption tiers yield the highest cash-equivalent value, and how to utilize in-store refills and reusable cup bonuses.
          </p>
          <div className="text-xs text-slatewarm-500 font-medium flex items-center gap-2">
            <Clock className="h-3.5 w-3.5" />
            <span>Last Reviewed: {REWARDS_PROGRAM_FACTS.lastReviewedDate}</span>
          </div>
        </div>
      </div>

      {/* Earning Rates Overview */}
      <section className="rounded-3xl border border-editorial-200 bg-white p-6 sm:p-8 space-y-4 shadow-sm">
        <h2 className="font-serif font-bold text-2xl text-roast tracking-tight">
          How to Earn Stars & Earning Multipliers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REWARDS_PROGRAM_FACTS.earningRates.map((method, idx) => (
            <div key={idx} className="bg-editorial-50/70 p-5 rounded-2xl border border-editorial-100 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-editorial-600">Method {idx + 1}</span>
                <p className="font-semibold text-xs text-slatewarm-900 mt-1 mb-2">{method.method}</p>
              </div>
              <div className="pt-3 border-t border-editorial-200 text-xs font-bold text-slatewarm-800">
                {method.rate}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Star Redemption Tiers */}
      <section className="space-y-6">
        <div className="border-b border-editorial-200 pb-3">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-roast tracking-tight">
            Star Redemption Tiers & Eligible Items
          </h2>
          <p className="text-xs sm:text-sm text-slatewarm-600 mt-1">
            How many stars you need and what each tier unlocks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REWARD_TIERS.map((tier) => (
            <div
              key={tier.starsRequired}
              className="rounded-3xl border border-editorial-200 bg-white p-6 flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between border-b border-editorial-100 pb-3 mb-3">
                  <div className="flex items-center gap-1.5 text-editorial-600 font-serif font-bold text-xl">
                    <Star className="h-5 w-5 fill-goldaccent text-goldaccent" />
                    <span>{tier.starsRequired} Stars</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {tier.bestValueScore} Value
                  </span>
                </div>

                <h3 className="font-serif font-bold text-base text-slatewarm-900 mb-2">
                  {tier.categoryName}
                </h3>

                <ul className="space-y-1.5 text-xs text-slatewarm-600 mb-4">
                  {tier.eligibleItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-editorial-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slatewarm-100 text-[11px] text-slatewarm-500">
                <p><strong>Value Insight:</strong> {tier.tips}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* In-Content Ad */}
      <InContentAd />

      {/* Special Benefits: Free Refills & Birthday */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-3xl border border-editorial-200 bg-white p-6 sm:p-8 space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-editorial-100 flex items-center justify-center text-editorial-800">
            <Gift className="h-5 w-5" />
          </div>
          <h3 className="font-serif font-bold text-xl text-roast">
            Birthday Reward Policy
          </h3>
          <p className="text-xs sm:text-sm text-slatewarm-600 leading-relaxed">
            {REWARDS_PROGRAM_FACTS.birthdayReward} Note that the birthday reward is valid only on your exact date of birth and expires at 11:59 PM local time.
          </p>
        </div>

        <div className="rounded-3xl border border-editorial-200 bg-white p-6 sm:p-8 space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-editorial-100 flex items-center justify-center text-editorial-800">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <h3 className="font-serif font-bold text-xl text-roast">
            In-Store Free Refills Policy
          </h3>
          <p className="text-xs sm:text-sm text-slatewarm-600 leading-relaxed">
            {REWARDS_PROGRAM_FACTS.refillPolicy} Refills are only valid during the same uninterrupted store visit; once you leave the store or drive-thru, subsequent orders are rung up as new purchases.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection faqs={rewardsFaqs} title="Starbucks Rewards FAQs" />

      {/* Source Note */}
      <SourceNote
        sourceName="Starbucks Rewards Terms & Conditions Public Disclosures"
        lastVerified="2026-04-12"
      />

      <DisclaimerNotice />
    </div>
  );
}
