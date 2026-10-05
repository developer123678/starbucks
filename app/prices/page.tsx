import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { DollarSign, ShieldAlert, AlertCircle, HelpCircle, ArrowRight, TrendingUp, Building2, Coffee } from "lucide-react";
import { MENU_CATEGORIES } from "@/data/menu-categories";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { AdSlot, InContentAd } from "@/components/AdSlot";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { SourceNote } from "@/components/SourceNote";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Starbucks Prices: Menu Price Ranges, Market Tiers & Cost Guide",
  description:
    "Comprehensive guide to Starbucks menu prices. Learn typical reference ranges for lattes, cold brew, and breakfast, and why prices vary between airports, Target, and street stores.",
  alternates: {
    canonical: "https://www.starbucks-menu.com/prices",
  },
};

export default function PricesPage() {
  const priceFaqs = [
    {
      question: "Why do Starbucks prices vary between different stores?",
      answer: "Starbucks operates company-owned stores and licensed stores (airports, grocery stores, hotels). Licensed operators set their own pricing based on overhead and concession fees. Additionally, company stores use regional pricing tiers that reflect local minimum wages, commercial rent, and shipping logistics."
    },
    {
      question: "How much is an average coffee or latte at Starbucks?",
      answer: "In standard US company stores, a standard Grande brewed coffee typically references between $2.95 and $3.45, while a Grande handcrafted Caffè Latte or Caramel Macchiato references between $4.95 and $5.95."
    },
    {
      question: "Do plant-based milk customizations cost extra?",
      answer: "In many US corporate locations, adding a splash of plant milk (under 4 oz) to brewed coffee or Americanos is free, while substituting plant milk (oat, almond, coconut, soy) in a milk-based latte or Frappuccino may carry an add-on charge of $0.70 to $0.90 depending on current regional policies."
    }
  ];

  const priceSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Starbucks Prices: Menu Price Ranges, Market Tiers & Cost Guide",
    description: "An economic and consumer breakdown of Starbucks pricing structures, market tiers, and reference costs.",
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
      <JsonLd data={priceSchema} />

      {/* Top Header Block */}
      <div className="space-y-2">
        <Breadcrumbs items={[{ label: "Prices & Cost Analysis" }]} />
        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-editorial-100 text-editorial-800 text-xs font-semibold">
            <DollarSign className="h-3.5 w-3.5" />
            <span>Consumer Price Intelligence</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-5xl text-roast tracking-tight">
            Starbucks Menu Prices & Cost Structure Explained
          </h1>
          <p className="text-sm sm:text-base text-slatewarm-700 leading-relaxed font-normal">
            Understanding Starbucks pricing requires recognizing that menu prices are dynamic rather than universally fixed. Learn how store formats, regional economic tiers, and drink customizations influence your final receipt.
          </p>
        </div>
      </div>

      {/* Mandatory Price Variation Notice */}
      <DisclaimerNotice
        variant="price-warning"
        customText="Prices shown throughout this publication are independent reference benchmarks compiled from representative regional store sampling. Prices can vary significantly by store format (such as airport kiosks, turnpike plazas, grocery concessions, or standalone drive-thrus), municipal tax rates, cup size, and active promotions. Confirm current prices through official Starbucks ordering channels or at the register."
      />

      {/* Typical Price Table by Category */}
      <section className="space-y-6 rounded-3xl border border-editorial-200 bg-white p-6 sm:p-8 shadow-sm">
        <div className="border-b border-editorial-100 pb-4">
          <h2 className="font-serif font-bold text-2xl text-roast tracking-tight">
            Reference Price Matrix Across Core Menu Categories
          </h2>
          <p className="text-xs sm:text-sm text-slatewarm-600 mt-1">
            Standard baseline pricing benchmarks across standard US company-operated locations.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slatewarm-200">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slatewarm-200 bg-editorial-50 text-slatewarm-800 font-semibold">
                <th className="p-3.5">Category</th>
                <th className="p-3.5">Typical Tall (12 oz)</th>
                <th className="p-3.5">Typical Grande (16 oz)</th>
                <th className="p-3.5">Typical Venti (20/24 oz)</th>
                <th className="p-3.5">Pricing Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slatewarm-100 text-slatewarm-700">
              <tr>
                <td className="p-3.5 font-semibold text-slatewarm-900">Brewed Drip Coffee</td>
                <td className="p-3.5">$2.65 - $2.95</td>
                <td className="p-3.5 font-bold text-editorial-700">$2.95 - $3.45</td>
                <td className="p-3.5">$3.25 - $3.75</td>
                <td className="p-3.5 text-slatewarm-500">Highest caffeine per dollar on the menu.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-slatewarm-900">Classic Espresso Lattes</td>
                <td className="p-3.5">$4.25 - $4.75</td>
                <td className="p-3.5 font-bold text-editorial-700">$4.95 - $5.45</td>
                <td className="p-3.5">$5.45 - $5.95</td>
                <td className="p-3.5 text-slatewarm-500">Standard 2% milk included.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-slatewarm-900">Flavored & Seasonal Lattes</td>
                <td className="p-3.5">$5.15 - $5.65</td>
                <td className="p-3.5 font-bold text-editorial-700">$5.85 - $6.45</td>
                <td className="p-3.5">$6.45 - $6.95</td>
                <td className="p-3.5 text-slatewarm-500">Includes syrups, sauces & whipped cream.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-slatewarm-900">Cold Brew & Nitro</td>
                <td className="p-3.5">$4.45 - $4.95</td>
                <td className="p-3.5 font-bold text-editorial-700">$4.95 - $5.65</td>
                <td className="p-3.5">$5.45 - $6.25</td>
                <td className="p-3.5 text-slatewarm-500">Nitro Cold Brew limited to Tall and Grande.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-slatewarm-900">Blended Frappuccinos</td>
                <td className="p-3.5">$4.95 - $5.45</td>
                <td className="p-3.5 font-bold text-editorial-700">$5.65 - $6.25</td>
                <td className="p-3.5">$6.25 - $6.95</td>
                <td className="p-3.5 text-slatewarm-500">Whole milk and whipped cream standard.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-slatewarm-900">Starbucks Refreshers</td>
                <td className="p-3.5">$4.45 - $4.95</td>
                <td className="p-3.5 font-bold text-editorial-700">$4.95 - $5.65</td>
                <td className="p-3.5">$5.45 - $6.25</td>
                <td className="p-3.5 text-slatewarm-500">Trenta (30 oz) available ($5.95 - $6.65).</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-slatewarm-900">Hot Breakfast Sandwiches</td>
                <td className="p-3.5" colSpan={3}>$4.95 - $6.75 (Single Serving)</td>
                <td className="p-3.5 text-slatewarm-500">Pre-assembled and toasted to order.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-slatewarm-900">Sous Vide Egg Bites</td>
                <td className="p-3.5" colSpan={3}>$5.25 - $5.95 (2 Pieces)</td>
                <td className="p-3.5 text-slatewarm-500">High-protein, lower carbohydrate option.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-slatewarm-900">Bakery Pastries</td>
                <td className="p-3.5" colSpan={3}>$2.95 - $4.45 (Single Pastry / Slice)</td>
                <td className="p-3.5 text-slatewarm-500">Warming complimentary upon request.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* In-Content Ad */}
      <InContentAd />

      {/* Deep-Dive: Why Prices Differ */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-3xl border border-editorial-200 bg-white p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-editorial-100 flex items-center justify-center text-editorial-800">
            <Building2 className="h-5 w-5" />
          </div>
          <h3 className="font-serif font-bold text-xl text-roast">
            1. Corporate vs. Licensed Store Economics
          </h3>
          <p className="text-xs sm:text-sm text-slatewarm-600 leading-relaxed">
            Starbucks operates two business models: Company-Operated Stores and Licensed Stores (airports, highway rest plazas, grocery stores like Target or Kroger, and universities). Licensed operators pay contractual franchise fees and set independent pricing to absorb specialized operational costs. Airport drinks typically cost 20% to 35% higher due to airport concession fees.
          </p>
        </div>

        <div className="rounded-3xl border border-editorial-200 bg-white p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-editorial-100 flex items-center justify-center text-editorial-800">
            <TrendingUp className="h-5 w-5" />
          </div>
          <h3 className="font-serif font-bold text-xl text-roast">
            2. Regional Cost-of-Living Pricing Tiers
          </h3>
          <p className="text-xs sm:text-sm text-slatewarm-600 leading-relaxed">
            Store pricing is segmented into geographic tiers. Stores in high-cost metropolitan markets (such as Manhattan, San Francisco, or Seattle) reflect higher local commercial rents, municipal minimum wage standards, and urban freight logistics compared to rural or suburban Midwest locations.
          </p>
        </div>
      </section>

      {/* Smart Ordering & Money-Saving Value Tips */}
      <section className="rounded-3xl border border-editorial-300 bg-editorial-50/70 p-6 sm:p-8 space-y-6">
        <div>
          <h3 className="font-serif font-bold text-2xl text-roast tracking-tight">
            Independent Value Analysis & Ordering Hacks
          </h3>
          <p className="text-xs sm:text-sm text-slatewarm-600 mt-1">
            Practical consumer tips for maximizing beverage value without sacrificing flavor:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slatewarm-700">
          <div className="bg-white p-5 rounded-2xl border border-editorial-200 space-y-2">
            <span className="font-bold text-editorial-700 text-sm block">1. Iced Espresso Hack</span>
            <p className="leading-relaxed">
              Order a &ldquo;Doppio (2 shots) or Triple Espresso over ice in a Venti cup with extra milk/splash&rdquo; for a rich iced espresso drink that costs approx. $3.65 instead of $5.95 for a full latte.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-editorial-200 space-y-2">
            <span className="font-bold text-editorial-700 text-sm block">2. Free In-Store Refills</span>
            <p className="leading-relaxed">
              Starbucks Rewards members who order any handcrafted drink are eligible for free refills of brewed coffee or tea during the same store visit at participating corporate cafes.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-editorial-200 space-y-2">
            <span className="font-bold text-editorial-700 text-sm block">3. Bring Your Own Cup</span>
            <p className="leading-relaxed">
              Bringing your own clean reusable cup grants a $0.10 discount plus 25 Bonus Stars for rewards members across in-store and drive-thru orders.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection faqs={priceFaqs} title="Starbucks Pricing FAQs" />

      {/* Source & Methodology Note */}
      <SourceNote
        sourceName="Compiled via Independent Market Price Sampling & Public Disclosures"
        lastVerified="2026-04-12"
      />

      <DisclaimerNotice />
    </div>
  );
}
