import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Calendar, Clock, CheckCircle2, History, ArrowRight } from "lucide-react";
import { SEASONAL_DATA } from "@/data/seasonal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { AdSlot, InContentAd } from "@/components/AdSlot";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { SourceNote } from "@/components/SourceNote";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Starbucks Seasonal Menu: Fall, Holiday, Spring & Summer Calendars",
  description:
    "Track the Starbucks seasonal menu release calendar. Discover active, upcoming, and historical limited-time drinks like Pumpkin Spice Latte, Peppermint Mocha, and Summer-Berry Refreshers.",
  alternates: {
    canonical: "https://www.starbucks-menu.com/seasonal-menu",
  },
};

export default function SeasonalMenuPage() {
  const seasonalFaqs = [
    {
      question: "When does the Starbucks Pumpkin Spice Latte return each year?",
      answer: "The Starbucks Fall menu (headlined by the Pumpkin Spice Latte and Pumpkin Cream Cold Brew) historically launches in late August (typically the third or fourth Tuesday of August) and remains available through late November while supplies last."
    },
    {
      question: "When do the Starbucks Holiday drinks launch?",
      answer: "The Holiday promotional season (featuring red cups, Peppermint Mocha, Caramel Brulée Latte, and Chestnut Praline Latte) typically debuts in early November (usually the first Thursday of November) and runs through early January."
    },
    {
      question: "Can I order a Peppermint Mocha year-round?",
      answer: "Yes. In most corporate stores, you can order a standard Caffè Mocha and request Peppermint syrup year-round. However, the seasonal dark chocolate curls topping is only available during the winter holiday promotion."
    }
  ];

  const seasonalSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Starbucks Seasonal Menu: Fall, Holiday, Spring & Summer Calendars",
    description: "Annual promotional schedule and drink availability tracking for limited-time Starbucks offerings.",
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
      <JsonLd data={seasonalSchema} />

      {/* Top Header Block */}
      <div className="space-y-2">
        <Breadcrumbs items={[{ label: "Seasonal Menu Calendar" }]} />
        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-editorial-100 text-editorial-800 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Annual Promotional Tracker</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-5xl text-roast tracking-tight">
            Starbucks Seasonal Menu: Current & Upcoming Releases
          </h1>
          <p className="text-sm sm:text-base text-slatewarm-700 leading-relaxed font-normal">
            Track the four major seasonal windows that rotate throughout the year. We distinguish verified current offerings from upcoming previews and retired historical favorites.
          </p>
          <div className="text-xs text-slatewarm-500 font-medium flex items-center gap-2">
            <Clock className="h-3.5 w-3.5" />
            <span>Last Editorial Review: April 12, 2026</span>
          </div>
        </div>
      </div>

      {/* Seasonal Windows Grid */}
      <div className="space-y-10">
        {SEASONAL_DATA.map((period) => (
          <section
            key={period.id}
            className="rounded-3xl border border-editorial-200 bg-white p-6 sm:p-8 space-y-6 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-editorial-100 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-editorial-600">
                  {period.typicalWindow}
                </span>
                <h2 className="font-serif font-bold text-2xl text-roast tracking-tight mt-0.5">
                  {period.seasonName}
                </h2>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-editorial-100 text-editorial-800 self-start sm:self-auto">
                Promotional Window
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slatewarm-600 leading-relaxed max-w-3xl">
              {period.description}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Featured Drinks */}
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-base text-slatewarm-900 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-editorial-600" />
                  Seasonal Beverages
                </h3>
                <div className="space-y-2">
                  {period.featuredDrinks.map((drink, idx) => (
                    <div
                      key={idx}
                      className="bg-editorial-50/50 p-3.5 rounded-xl border border-editorial-100 flex items-start justify-between gap-3"
                    >
                      <div>
                        {drink.slug ? (
                          <Link href={`/menu/${drink.slug}`} className="font-semibold text-xs text-slatewarm-900 hover:text-editorial-700 underline">
                            {drink.name}
                          </Link>
                        ) : (
                          <span className="font-semibold text-xs text-slatewarm-900">{drink.name}</span>
                        )}
                        <p className="text-[11px] text-slatewarm-500 mt-0.5 leading-relaxed">{drink.description}</p>
                      </div>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded shrink-0 ${
                          drink.status === "Active Seasonal"
                            ? "bg-emerald-100 text-emerald-800"
                            : drink.status === "Historical / Past"
                            ? "bg-slatewarm-200 text-slatewarm-700"
                            : "bg-editorial-100 text-editorial-800"
                        }`}
                      >
                        {drink.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Bakery & Food */}
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-base text-slatewarm-900 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-editorial-600" />
                  Seasonal Food & Bakery
                </h3>
                <div className="space-y-2">
                  {period.featuredFoods.map((food, idx) => (
                    <div
                      key={idx}
                      className="bg-editorial-50/50 p-3.5 rounded-xl border border-editorial-100 flex items-start justify-between gap-3"
                    >
                      <div>
                        <span className="font-semibold text-xs text-slatewarm-900">{food.name}</span>
                        <p className="text-[11px] text-slatewarm-500 mt-0.5 leading-relaxed">{food.description}</p>
                      </div>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded shrink-0 ${
                          food.status === "Active Seasonal"
                            ? "bg-emerald-100 text-emerald-800"
                            : food.status === "Historical / Past"
                            ? "bg-slatewarm-200 text-slatewarm-700"
                            : "bg-editorial-100 text-editorial-800"
                        }`}
                      >
                        {food.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* In-Content Ad */}
      <InContentAd />

      {/* FAQs */}
      <FAQSection faqs={seasonalFaqs} title="Seasonal Menu FAQs" />

      {/* Source Note */}
      <SourceNote
        sourceName="Starbucks Annual Promotional Schedules & Media Release Archives"
        lastVerified="2026-04-12"
      />

      <DisclaimerNotice />
    </div>
  );
}
