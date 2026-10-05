import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Scale, Heart, ShieldAlert, Sparkles, Coffee, Flame, ArrowRight, Zap, Info } from "lucide-react";
import { MENU_ITEMS } from "@/data/menu-items";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { NutritionCalculatorWidget } from "@/components/NutritionCalculatorWidget";
import { FAQSection } from "@/components/FAQSection";
import { AdSlot, InContentAd } from "@/components/AdSlot";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { SourceNote } from "@/components/SourceNote";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Starbucks Nutrition: Calories, Sugar, Caffeine & Nutrition Calculator",
  description:
    "Comprehensive guide to Starbucks nutrition facts. Explore calories, sugar, fat, caffeine, and allergens across drinks and food. Use our interactive nutrition calculator.",
  alternates: {
    canonical: "https://www.starbucks-menu.com/nutrition",
  },
};

export default function NutritionPage() {
  const nutritionFaqs = [
    {
      question: "Which Starbucks drink has the lowest calories?",
      answer: "Plain hot brewed coffee, iced Americano, plain cold brew, and unsweetened hot or iced teas contain 0 to 5 calories per serving when ordered black without syrups or milk."
    },
    {
      question: "How much sugar is in a pump of Starbucks syrup?",
      answer: "A single pump of standard Starbucks flavored syrup (such as Vanilla, Caramel, or Hazelnut) contains approximately 20 calories and 5 grams of sugar. A standard Grande drink receives 4 pumps (approx. 20g added sugar)."
    },
    {
      question: "How much caffeine is in a Grande espresso drink vs. Brewed Coffee?",
      answer: "A standard Grande Caffè Latte (2 espresso shots) contains approximately 150mg of caffeine. In contrast, a Grande Pike Place Roast brewed drip coffee contains approximately 310mg of caffeine."
    },
    {
      question: "Can I get a sugar-free drink at Starbucks?",
      answer: "Yes. You can order plain brewed coffees, unflavored cold brew, unsweetened iced teas, or espresso drinks customized with Sugar-Free Vanilla syrup and unsweetened almondmilk."
    }
  ];

  const nutritionSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Starbucks Nutrition: Calories, Sugar, Caffeine & Nutrition Calculator",
    description: "Detailed independent nutrition breakdown and calorie estimation tool for Starbucks menu.",
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
      <JsonLd data={nutritionSchema} />

      {/* Top Header Block */}
      <div className="space-y-2">
        <Breadcrumbs items={[{ label: "Nutrition & Calorie Guide" }]} />
        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-editorial-100 text-editorial-800 text-xs font-semibold">
            <Scale className="h-3.5 w-3.5" />
            <span>Nutritional Transparency</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-5xl text-roast tracking-tight">
            Starbucks Nutrition Facts: Calories, Sugar, Caffeine & Diet Guide
          </h1>
          <p className="text-sm sm:text-base text-slatewarm-700 leading-relaxed font-normal">
            Whether you are tracking macronutrients, managing sugar intake, monitoring caffeine consumption, or adhering to vegan or gluten-conscious diets, this independent guide provides verified nutritional data and interactive estimation tools.
          </p>
        </div>
      </div>

      {/* Interactive Nutrition Calculator Component */}
      <section className="space-y-4">
        <NutritionCalculatorWidget />
      </section>

      {/* In-Content Ad */}
      <InContentAd />

      {/* Calorie & Sugar Breakdown by Popular Items */}
      <section className="space-y-6 rounded-3xl border border-editorial-200 bg-white p-6 sm:p-8 shadow-sm">
        <div className="border-b border-editorial-100 pb-4">
          <h2 className="font-serif font-bold text-2xl text-roast tracking-tight">
            Nutrition Snapshot: Popular Menu Offerings
          </h2>
          <p className="text-xs sm:text-sm text-slatewarm-600 mt-1">
            Standard default recipes (Grande 16 fl oz for beverages or standard food serving).
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slatewarm-200">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slatewarm-200 bg-editorial-50 text-slatewarm-800 font-semibold">
                <th className="p-3.5">Menu Item</th>
                <th className="p-3.5">Serving Basis</th>
                <th className="p-3.5">Calories</th>
                <th className="p-3.5">Total Fat</th>
                <th className="p-3.5">Total Sugar</th>
                <th className="p-3.5">Protein</th>
                <th className="p-3.5">Caffeine</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slatewarm-100 text-slatewarm-700">
              {MENU_ITEMS.map((item) => (
                <tr key={item.id} className="hover:bg-slatewarm-50/60 transition-colors">
                  <td className="p-3.5 font-semibold text-slatewarm-900">
                    <Link href={`/menu/${item.slug}`} className="hover:text-editorial-700 underline">
                      {item.name}
                    </Link>
                  </td>
                  <td className="p-3.5 text-slatewarm-500">{item.standardServing}</td>
                  <td className="p-3.5 font-bold text-slatewarm-900">{item.calories} kcal</td>
                  <td className="p-3.5">{item.fat}g</td>
                  <td className="p-3.5 font-medium text-editorial-700">{item.sugar}g</td>
                  <td className="p-3.5">{item.protein}g</td>
                  <td className="p-3.5 font-semibold text-editorial-800">{item.caffeine}mg</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Health & Diet Optimization Guide */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-3xl border border-editorial-200 bg-white p-6 space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-editorial-100 flex items-center justify-center text-editorial-800">
            <Heart className="h-5 w-5" />
          </div>
          <h3 className="font-serif font-bold text-lg text-roast">
            Lowering Sugar Intake
          </h3>
          <p className="text-xs text-slatewarm-600 leading-relaxed">
            Standard Grande drinks receive 4 pumps of syrup (approx. 20g added sugar). Request &ldquo;half sweet&rdquo; (2 pumps) to reduce sugar by 50%, or swap to Sugar-Free Vanilla syrup.
          </p>
        </div>

        <div className="rounded-3xl border border-editorial-200 bg-white p-6 space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-editorial-100 flex items-center justify-center text-editorial-800">
            <Scale className="h-5 w-5" />
          </div>
          <h3 className="font-serif font-bold text-lg text-roast">
            Cutting Unnecessary Calories
          </h3>
          <p className="text-xs text-slatewarm-600 leading-relaxed">
            Holding whipped cream saves 80-100 calories and 8g of saturated fat. Swapping whole milk or 2% milk for almondmilk cuts roughly 80-100 kcal in a Grande latte.
          </p>
        </div>

        <div className="rounded-3xl border border-editorial-200 bg-white p-6 space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
            <Zap className="h-5 w-5" />
          </div>
          <h3 className="font-serif font-bold text-lg text-roast">
            High-Protein Selections
          </h3>
          <p className="text-xs text-slatewarm-600 leading-relaxed">
            The Bacon Gouda Sandwich delivers 19g protein (360 kcal), while Egg White & Roasted Red Pepper Egg Bites offer 12g protein for only 170 kcal.
          </p>
        </div>
      </section>

      {/* Allergen & Cross-Contact Advisory */}
      <section className="rounded-3xl border border-amber-200 bg-amber-50/60 p-6 sm:p-8 space-y-4">
        <h3 className="font-serif font-bold text-xl text-amber-900 flex items-center gap-2">
          <ShieldAlert className="h-5 w-5 text-amber-600" />
          Important Allergen & Shared Equipment Notice
        </h3>
        <div className="space-y-2 text-xs text-amber-950 leading-relaxed">
          <p>
            Starbucks stores operate open kitchen environments where dairy milk, soy, almond, coconut, oat, wheat, eggs, and tree nuts are handled across shared steam wands, blenders, and warming ovens.
          </p>
          <p>
            While baristas rinse tools between orders, <strong>complete absence of allergens cannot be certified</strong>. Guests with severe medical allergies (such as celiac disease or severe anaphylactic dairy/nut allergies) should exercise appropriate caution.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection faqs={nutritionFaqs} title="Starbucks Nutrition FAQs" />

      {/* Source Note */}
      <SourceNote
        sourceName="Compiled independently from Starbucks Published Nutritional Matrices"
        lastVerified="2026-04-12"
      />

      <DisclaimerNotice />
    </div>
  );
}
