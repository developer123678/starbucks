import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Coffee, Info, AlertTriangle, ArrowRight, Sparkles, HelpCircle } from "lucide-react";
import { DRINK_SIZES } from "@/data/sizes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { AdSlot, InContentAd } from "@/components/AdSlot";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { SourceNote } from "@/components/SourceNote";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Starbucks Drink Sizes Explained: Ounces, Shots, Pumps & Volumes",
  description:
    "Complete independent guide to Starbucks drink sizes: Short (8oz), Tall (12oz), Grande (16oz), Venti Hot (20oz), Venti Iced (24oz), and Trenta (30oz). Espresso shots and pump formulas explained.",
  alternates: {
    canonical: "https://www.starbucks-menu.com/starbucks-sizes",
  },
};

export default function StarbucksSizesPage() {
  const sizesFaqs = [
    {
      question: "Why is an Iced Venti 24 oz while a Hot Venti is 20 oz?",
      answer: "An Iced Venti cup is 24 fluid ounces to accommodate the physical displacement of ice cubes while maintaining balanced liquid and espresso volume. An Iced Venti also gets 3 espresso shots compared to 2 shots in a Hot Venti."
    },
    {
      question: "Can I get an espresso drink (latte, mocha) in Trenta (30 oz)?",
      answer: "No. Starbucks corporate beverage policies strictly prohibit serving espresso-based handcrafted beverages in Trenta cups. Trenta is restricted to Cold Brew, Iced Coffee, Refreshers, and Shaken Iced Teas."
    },
    {
      question: "What is the smallest cup size available at Starbucks?",
      answer: "The Short size (8 fluid ounces) is the smallest cup size for hot drinks. While rarely displayed on main overhead menu boards, it is fully orderable at all standard stores."
    },
    {
      question: "How many espresso shots are in a Grande latte vs. a Hot Venti latte?",
      answer: "Both a Grande Latte and a Hot Venti Latte contain 2 shots of espresso by default. If you order a Hot Venti, you receive more steamed milk and syrup, not more coffee, unless you request an extra shot."
    }
  ];

  const sizeSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Starbucks Drink Sizes Explained: Ounces, Shots, Pumps & Volumes",
    description: "An authoritative guide to Starbucks cup sizes, volumes, espresso shot formulas, and syrup pumps.",
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
      <JsonLd data={sizeSchema} />

      {/* Top Header Block */}
      <div className="space-y-2">
        <Breadcrumbs items={[{ label: "Drink Sizes Explained" }]} />
        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-editorial-100 text-editorial-800 text-xs font-semibold">
            <Coffee className="h-3.5 w-3.5" />
            <span>Size Architecture</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-5xl text-roast tracking-tight">
            Starbucks Drink Sizes Explained: Ounces, Shots & Pumps Guide
          </h1>
          <p className="text-sm sm:text-base text-slatewarm-700 leading-relaxed font-normal">
            From the off-menu 8-ounce Short to the 30-ounce Trenta, understanding Starbucks sizing ensures you get the exact espresso strength, milk balance, and value you want every time.
          </p>
        </div>
      </div>

      {/* Primary Sizing Matrix Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DRINK_SIZES.map((size) => (
          <div
            key={size.key}
            className="rounded-3xl border border-editorial-200 bg-white p-6 flex flex-col justify-between shadow-sm space-y-4"
          >
            <div>
              <div className="flex items-center justify-between border-b border-editorial-100 pb-3 mb-3">
                <h2 className="font-serif font-bold text-xl text-slatewarm-900">
                  {size.name}
                </h2>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-editorial-100 text-editorial-800">
                  {size.volumeOz} fl oz ({size.volumeMl} ml)
                </span>
              </div>

              <p className="text-xs text-slatewarm-600 leading-relaxed mb-4">
                {size.commonUsage}
              </p>

              <div className="space-y-2 text-xs bg-editorial-50/70 p-3.5 rounded-2xl border border-editorial-100">
                <div className="flex justify-between">
                  <span className="text-slatewarm-500 font-medium">Availability:</span>
                  <span className="font-semibold text-slatewarm-800">{size.temperatureAvailability}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slatewarm-500 font-medium">Standard Espresso Shots:</span>
                  <span className="font-semibold text-slatewarm-800">
                    {size.standardEspressoShots.latteCappuccino} Shot(s)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slatewarm-500 font-medium">Standard Syrup Pumps:</span>
                  <span className="font-semibold text-slatewarm-800">{size.syrupPumpsStandard} Pumps</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slatewarm-500 font-medium">Reference Price:</span>
                  <span className="font-semibold text-editorial-700">{size.priceContext}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slatewarm-500 border-t border-slatewarm-100">
              <p><strong>Barista Tip:</strong> {size.tips}</p>
            </div>
          </div>
        ))}
      </div>

      {/* In-Content Ad */}
      <InContentAd />

      {/* The Shot & Pump Formula Breakdown Table */}
      <section className="space-y-6 rounded-3xl border border-editorial-200 bg-white p-6 sm:p-8 shadow-sm">
        <div className="border-b border-editorial-100 pb-4">
          <h2 className="font-serif font-bold text-2xl text-roast tracking-tight">
            Standard Espresso Shot & Syrup Pump Rules
          </h2>
          <p className="text-xs sm:text-sm text-slatewarm-600 mt-1">
            How Starbucks builds standard recipes by cup size and temperature.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slatewarm-200">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slatewarm-200 bg-editorial-50 text-slatewarm-800 font-semibold">
                <th className="p-3.5">Cup Size</th>
                <th className="p-3.5">Fluid Ounces</th>
                <th className="p-3.5">Latte / Cappuccino Shots</th>
                <th className="p-3.5">Americano Shots</th>
                <th className="p-3.5">Flat White Shots</th>
                <th className="p-3.5">Standard Syrup Pumps</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slatewarm-100 text-slatewarm-700">
              <tr>
                <td className="p-3.5 font-semibold text-slatewarm-900">Short (Hot only)</td>
                <td className="p-3.5">8 fl oz</td>
                <td className="p-3.5">1 shot</td>
                <td className="p-3.5">1 shot</td>
                <td className="p-3.5">2 ristretto shots</td>
                <td className="p-3.5">2 pumps</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-slatewarm-900">Tall (Hot / Iced)</td>
                <td className="p-3.5">12 fl oz</td>
                <td className="p-3.5">1 shot</td>
                <td className="p-3.5">2 shots</td>
                <td className="p-3.5">2 ristretto shots</td>
                <td className="p-3.5">3 pumps</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-slatewarm-900">Grande (Hot / Iced)</td>
                <td className="p-3.5">16 fl oz</td>
                <td className="p-3.5">2 shots</td>
                <td className="p-3.5">3 shots</td>
                <td className="p-3.5">3 ristretto shots</td>
                <td className="p-3.5">4 pumps</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-slatewarm-900">Venti Hot</td>
                <td className="p-3.5">20 fl oz</td>
                <td className="p-3.5">2 shots</td>
                <td className="p-3.5">4 shots</td>
                <td className="p-3.5">4 ristretto shots</td>
                <td className="p-3.5">5 pumps</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-slatewarm-900">Venti Iced</td>
                <td className="p-3.5">24 fl oz</td>
                <td className="p-3.5 font-bold text-editorial-700">3 shots</td>
                <td className="p-3.5">4 shots</td>
                <td className="p-3.5">4 ristretto shots</td>
                <td className="p-3.5">6 pumps</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-slatewarm-900">Trenta (Iced only)</td>
                <td className="p-3.5">30 fl oz</td>
                <td className="p-3.5 text-slatewarm-400">N/A (Prohibited)</td>
                <td className="p-3.5 text-slatewarm-400">N/A (Prohibited)</td>
                <td className="p-3.5 text-slatewarm-400">N/A (Prohibited)</td>
                <td className="p-3.5">7 pumps (Teas/Coffee)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Critical Insights Box */}
      <section className="rounded-3xl border border-editorial-200 bg-editorial-50/70 p-6 sm:p-8 space-y-4">
        <h3 className="font-serif font-bold text-xl text-editorial-900 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-editorial-600" />
          Key Consumer Takeaway: Grande vs Hot Venti Espresso Ratio
        </h3>
        <p className="text-xs sm:text-sm text-slatewarm-800 leading-relaxed">
          Many customers assume that ordering a larger Hot Venti (20 oz) delivers more espresso caffeine than a Grande (16 oz). However, both sizes receive exactly <strong>2 shots of espresso</strong> by default. A Hot Venti simply contains 4 more ounces of steamed milk and 1 additional pump of syrup, resulting in a milder, milkier taste. If you desire a stronger coffee flavor in a Hot Venti, ask your barista for a <strong>triple shot</strong>.
        </p>
      </section>

      {/* FAQs */}
      <FAQSection faqs={sizesFaqs} title="Starbucks Drink Sizes FAQs" />

      {/* Source Note */}
      <SourceNote
        sourceName="Starbucks Beverage Standards & Operations Manual Guidelines"
        lastVerified="2026-04-12"
      />

      <DisclaimerNotice />
    </div>
  );
}
