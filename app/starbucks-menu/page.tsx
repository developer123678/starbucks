import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Coffee, Flame, Sparkles, Utensils, ArrowRight, ShieldAlert, Scale, HelpCircle } from "lucide-react";
import { MENU_CATEGORIES } from "@/data/menu-categories";
import { MENU_ITEMS } from "@/data/menu-items";
import { CategoryCard } from "@/components/CategoryCard";
import { MenuItemCard } from "@/components/MenuItemCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { AdSlot, InContentAd } from "@/components/AdSlot";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { SourceNote } from "@/components/SourceNote";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Starbucks Menu: Drinks, Food, Prices & Nutrition (2026 Directory)",
  description:
    "Comprehensive independent directory of the Starbucks menu. Browse hot coffee, cold brew, Frappuccinos, Refreshers, tea, breakfast sandwiches, and bakery items with reference prices and calories.",
  alternates: {
    canonical: "https://www.starbucks-menu.com/starbucks-menu",
  },
};

export default function StarbucksMenuPillarPage() {
  const drinkCategories = MENU_CATEGORIES.filter((c) => c.type === "drinks");
  const foodCategories = MENU_CATEGORIES.filter((c) => c.type === "food");

  const menuFaqs = [
    {
      question: "What is on the Starbucks menu?",
      answer: "The Starbucks menu includes hot and iced espresso beverages, cold brew, nitro cold brew, blended Frappuccinos, Starbucks Refreshers, hot and iced teas, hot breakfast sandwiches, sous vide egg bites, bakery items, lunch paninis, and protein boxes."
    },
    {
      question: "How many menu categories does Starbucks offer?",
      answer: "The menu is generally organized across 13 core categories spanning beverages (Hot Coffee, Cold Coffee, Frappuccino, Refreshers, Matcha, Hot Tea, Cold Tea, Hot Chocolate) and food (Breakfast, Bakery, Treats/Cake Pops, Lunch, and Lite Bites)."
    },
    {
      question: "Are prices the same across all Starbucks stores?",
      answer: "No. Reference prices vary based on location tier (street stores vs. airport and grocery licenses) and local economic operating costs."
    }
  ];

  const pillarSchema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    name: "Starbucks Menu: Drinks, Food, Prices & Nutrition",
    description: "Complete independent catalog of Starbucks beverages and food items.",
    url: "https://www.starbucks-menu.com/starbucks-menu",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.starbucks-menu.com" },
        { "@type": "ListItem", position: 2, name: "Menu", item: "https://www.starbucks-menu.com/starbucks-menu" }
      ]
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8 sm:pt-3.5 sm:pb-10 space-y-6 sm:space-y-8">
      <JsonLd data={pillarSchema} />

      {/* Top Header Block */}
      <div className="space-y-2">
        <Breadcrumbs items={[{ label: "Menu" }]} />
        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-editorial-100 text-editorial-800 text-xs font-semibold">
            <Coffee className="h-3.5 w-3.5" />
            <span>Complete 2026 Catalog</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-5xl text-editorial-950 tracking-tight">
            Menu
          </h1>
          <p className="text-sm sm:text-base text-slatewarm-700 leading-relaxed">
            Welcome to the independent reference guide for the complete Starbucks menu. Explore all beverage and food categories, typical reference price ranges, verified calorie counts, sizes, and barista customization options.
          </p>
        </div>
      </div>

      {/* Quick Nav Anchor Bar */}
      <div className="flex flex-wrap items-center gap-2 p-3 bg-white rounded-2xl border border-slatewarm-200 text-xs font-semibold shadow-sm">
        <span className="text-slatewarm-500 pl-2 font-medium">Jump to:</span>
        <a href="#drinks-section" className="px-3 py-1.5 rounded-xl bg-slatewarm-50 hover:bg-editorial-50 text-editorial-900 transition-colors">
          ☕ Handcrafted Drinks (8 Categories)
        </a>
        <a href="#food-section" className="px-3 py-1.5 rounded-xl bg-slatewarm-50 hover:bg-editorial-50 text-editorial-900 transition-colors">
          🥐 Food & Bakery (5 Categories)
        </a>
        <a href="#pricing-overview" className="px-3 py-1.5 rounded-xl bg-slatewarm-50 hover:bg-editorial-50 text-editorial-900 transition-colors">
          💵 Price Summary
        </a>
        <Link href="/nutrition" className="px-3 py-1.5 rounded-xl bg-slatewarm-50 hover:bg-editorial-50 text-editorial-900 transition-colors">
          🥗 Nutrition Facts
        </Link>
      </div>

      {/* Handcrafted Beverages Section */}
      <section id="drinks-section" className="space-y-6 pt-4">
        <div className="border-b border-slatewarm-200 pb-3">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slatewarm-900 tracking-tight">
            Handcrafted Beverages & Coffees
          </h2>
          <p className="text-xs sm:text-sm text-slatewarm-600 mt-1">
            Espresso, cold brew, Frappuccinos, green coffee refreshers, and premium hot and iced teas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {drinkCategories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* In-Content Ad */}
      <InContentAd />

      {/* Food & Bakery Section */}
      <section id="food-section" className="space-y-6 pt-4">
        <div className="border-b border-slatewarm-200 pb-3">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slatewarm-900 tracking-tight">
            Breakfast, Bakery & Food Offerings
          </h2>
          <p className="text-xs sm:text-sm text-slatewarm-600 mt-1">
            Warm breakfast sandwiches, sous vide egg bites, artisan pastries, cake pops, and midday toasted paninis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {foodCategories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* Reference Pricing Summary Table */}
      <section id="pricing-overview" className="space-y-6 rounded-3xl border border-slatewarm-200 bg-white p-6 sm:p-8 shadow-sm">
        <div>
          <h3 className="font-serif font-bold text-2xl text-slatewarm-900 tracking-tight">
            Typical Menu Price Ranges by Category
          </h3>
          <p className="text-xs sm:text-sm text-slatewarm-600 mt-1">
            Standard baseline reference prices across standard company-operated US stores (Grande / standard serving).
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slatewarm-200">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slatewarm-200 bg-editorial-50 text-editorial-900 font-semibold">
                <th className="p-3">Category</th>
                <th className="p-3">Type</th>
                <th className="p-3">Typical Reference Range</th>
                <th className="p-3">Average Calorie Window</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slatewarm-100 text-slatewarm-700">
              {MENU_CATEGORIES.map((cat) => (
                <tr key={cat.id} className="hover:bg-slatewarm-50/60 transition-colors">
                  <td className="p-3 font-semibold text-slatewarm-900">{cat.name}</td>
                  <td className="p-3 uppercase text-[10px] font-bold text-editorial-700">{cat.type}</td>
                  <td className="p-3 font-bold text-editorial-800">{cat.priceRange}</td>
                  <td className="p-3">{cat.avgCalories}</td>
                  <td className="p-3">
                    <Link
                      href={`/menu/${cat.slug}`}
                      className="text-editorial-700 hover:text-editorial-900 font-semibold underline"
                    >
                      Explore →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <DisclaimerNotice variant="price-warning" />
      </section>

      {/* FAQs */}
      <FAQSection faqs={menuFaqs} />

      {/* Sources & Methodology Note */}
      <SourceNote
        sourceName="Compiled from Official Starbucks US Menu Specifications & Verified Regional Retail Pricing"
        lastVerified="2026-04-12"
      />

      <DisclaimerNotice />
    </div>
  );
}
