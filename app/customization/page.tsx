import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Coffee, Sparkles, Flame, Droplets, Zap, ShieldAlert, ArrowRight } from "lucide-react";
import { MILK_OPTIONS, SYRUP_OPTIONS, COLD_FOAM_OPTIONS, ESPRESSO_ROASTS } from "@/data/customizations";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { AdSlot, InContentAd } from "@/components/AdSlot";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { SourceNote } from "@/components/SourceNote";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Starbucks Customization Guide: Milk Options, Syrups, Shots & Cold Foam",
  description:
    "Master Starbucks drink customization. Learn the differences between oatmilk and almondmilk, syrups vs sauces, espresso roast profiles, and sweet cream cold foam toppings.",
  alternates: {
    canonical: "https://www.starbucks-menu.com/customization",
  },
};

export default function CustomizationPage() {
  const customizationFaqs = [
    {
      question: "What is the difference between a Starbucks syrup and a sauce?",
      answer: "Syrups (Vanilla, Caramel, Hazelnut, Brown Sugar) are clear, liquid, sugar-and-water based flavorings that mix instantly into hot or cold drinks. Sauces (Mocha, White Chocolate Mocha, Pumpkin Spice) are thick, viscous, and often contain dairy solids like condensed skim milk."
    },
    {
      question: "Which plant milk is the healthiest or lowest in calories at Starbucks?",
      answer: "Almondmilk is the lowest-calorie milk option at approximately 8 calories per fluid ounce (approx. 80-100 kcal in a Grande latte). Oatmilk provides a creamier mouthfeel closer to whole milk but contains roughly 18 calories per ounce."
    },
    {
      question: "What does 'Ristretto' mean when ordering espresso?",
      answer: "A Ristretto shot uses the same amount of finely ground coffee as a standard shot but is pulled with less water and a shorter extraction time. This produces a sweeter, richer espresso with less bitterness."
    },
    {
      question: "Can I get sugar-free cold foam?",
      answer: "Vanilla Sweet Cream Cold Foam is prepared with heavy cream, 2% milk, and regular vanilla syrup. While a store can occasionally froth nonfat milk with sugar-free vanilla syrup upon custom request, the signature thick Sweet Cream Cold Foam is inherently sweetened with standard sugar."
    }
  ];

  const customSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Starbucks Customization Guide: Milk Options, Syrups, Shots & Cold Foam",
    description: "An extensive independent breakdown of Starbucks beverage customizations, milks, syrups, and barista modifiers.",
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
      <JsonLd data={customSchema} />

      {/* Top Header Block */}
      <div className="space-y-2">
        <Breadcrumbs items={[{ label: "Customization Guide" }]} />
        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-editorial-100 text-editorial-800 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5 text-editorial-600" />
            <span>Barista Masterclass</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-5xl text-roast tracking-tight">
            Starbucks Customization Guide: Milks, Syrups, Shots & Cold Foams
          </h1>
          <p className="text-sm sm:text-base text-slatewarm-700 leading-relaxed font-normal">
            Customization is the heart of the modern Starbucks ordering experience. Learn the nutritional tradeoffs of different milk choices, syrup flavorings, espresso extraction techniques, and specialty cold foam toppings.
          </p>
        </div>
      </div>

      {/* 1. Milk Options Matrix */}
      <section className="space-y-6 rounded-3xl border border-editorial-200 bg-white p-6 sm:p-8 shadow-sm">
        <div className="border-b border-editorial-100 pb-4">
          <h2 className="font-serif font-bold text-2xl text-roast tracking-tight">
            1. Dairy & Plant-Based Milk Options
          </h2>
          <p className="text-xs sm:text-sm text-slatewarm-600 mt-1">
            Compare calorie density, fat, sugar, and dietary certifications per fluid ounce.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slatewarm-200">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slatewarm-200 bg-editorial-50 text-slatewarm-800 font-semibold">
                <th className="p-3.5">Milk Variety</th>
                <th className="p-3.5">Type</th>
                <th className="p-3.5">Calories / oz</th>
                <th className="p-3.5">Fat / oz</th>
                <th className="p-3.5">Sugar / oz</th>
                <th className="p-3.5">Protein / oz</th>
                <th className="p-3.5">Profile & Best Usage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slatewarm-100 text-slatewarm-700">
              {MILK_OPTIONS.map((milk) => (
                <tr key={milk.id} className="hover:bg-slatewarm-50/60 transition-colors">
                  <td className="p-3.5 font-semibold text-slatewarm-900">{milk.name}</td>
                  <td className="p-3.5 uppercase text-[10px] font-bold text-editorial-700">{milk.type}</td>
                  <td className="p-3.5 font-medium">{milk.caloriesPerOz} kcal</td>
                  <td className="p-3.5">{milk.fatPerOz}g</td>
                  <td className="p-3.5">{milk.sugarPerOz}g</td>
                  <td className="p-3.5">{milk.proteinPerOz}g</td>
                  <td className="p-3.5 text-slatewarm-500">{milk.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* In-Content Ad */}
      <InContentAd />

      {/* 2. Syrups & Sauces */}
      <section className="space-y-6 rounded-3xl border border-editorial-200 bg-white p-6 sm:p-8 shadow-sm">
        <div className="border-b border-editorial-100 pb-4">
          <h2 className="font-serif font-bold text-2xl text-roast tracking-tight">
            2. Syrups vs. Sauces Flavor Guide
          </h2>
          <p className="text-xs sm:text-sm text-slatewarm-600 mt-1">
            Understanding the difference between clear syrups and dairy-containing condensed sauces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SYRUP_OPTIONS.map((s) => (
            <div key={s.id} className="bg-editorial-50/50 p-5 rounded-2xl border border-editorial-200 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slatewarm-900">{s.name}</span>
                  <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-editorial-100 text-editorial-800">
                    {s.type}
                  </span>
                </div>
                <p className="text-xs text-slatewarm-600 leading-relaxed">{s.notes}</p>
              </div>
              <div className="pt-3 border-t border-editorial-200/70 flex items-center justify-between text-[11px] text-slatewarm-500">
                <span>{s.caloriesPerPump} kcal / pump</span>
                <span>{s.sugarPerPump}g sugar</span>
                <span className={s.containsDairy ? "text-amber-700 font-bold" : "text-emerald-700"}>
                  {s.containsDairy ? "Contains Dairy" : "Dairy-Free"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Espresso Roasts & Shots */}
      <section className="space-y-6 rounded-3xl border border-editorial-200 bg-white p-6 sm:p-8 shadow-sm">
        <div className="border-b border-editorial-100 pb-4">
          <h2 className="font-serif font-bold text-2xl text-roast tracking-tight">
            3. Espresso Shot Modifiers & Roasts
          </h2>
          <p className="text-xs sm:text-sm text-slatewarm-600 mt-1">
            Tailor your espresso base by roast intensity, shot volume, and decaffeination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ESPRESSO_ROASTS.map((roast) => (
            <div key={roast.id} className="bg-slatewarm-50 p-5 rounded-2xl border border-slatewarm-200 space-y-2">
              <h3 className="font-serif font-bold text-base text-slatewarm-900">{roast.name}</h3>
              <p className="text-xs text-slatewarm-600 leading-relaxed">{roast.profile}</p>
              <div className="pt-2 text-xs font-semibold text-editorial-800">
                ~{roast.caffeinePerShot}mg caffeine / shot
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Cold Foams & Toppings */}
      <section className="space-y-6 rounded-3xl border border-editorial-200 bg-white p-6 sm:p-8 shadow-sm">
        <div className="border-b border-editorial-100 pb-4">
          <h2 className="font-serif font-bold text-2xl text-roast tracking-tight">
            4. Signature Cold Foams & Sweet Cream Toppings
          </h2>
          <p className="text-xs sm:text-sm text-slatewarm-600 mt-1">
            Frothed in specialized high-speed non-heat blenders to create dense velvety floating clouds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COLD_FOAM_OPTIONS.map((foam) => (
            <div key={foam.id} className="bg-editorial-50/60 p-5 rounded-2xl border border-editorial-200 space-y-2">
              <h3 className="font-serif font-bold text-base text-slatewarm-900">{foam.name}</h3>
              <p className="text-xs text-slatewarm-600">{foam.notes}</p>
              <div className="pt-2 border-t border-editorial-200 flex justify-between text-xs font-semibold text-slatewarm-800">
                <span>{foam.calories} kcal</span>
                <span>{foam.sugar}g sugar</span>
                <span>{foam.fat}g fat</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <FAQSection faqs={customizationFaqs} title="Customization FAQs" />

      {/* Source Note */}
      <SourceNote
        sourceName="Starbucks Ingredient Reference Database & Standard Recipe Specifications"
        lastVerified="2026-04-12"
      />

      <DisclaimerNotice />
    </div>
  );
}
