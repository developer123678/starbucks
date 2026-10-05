import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Coffee, ArrowRight, ShieldCheck, Flame, Sparkles, Scale, BookOpen, Clock, HeartHandshake, CheckCircle2, ChevronRight } from "lucide-react";
import { MENU_CATEGORIES } from "@/data/menu-categories";
import { MENU_ITEMS } from "@/data/menu-items";
import { GUIDE_ARTICLES } from "@/data/guides";
import { FAQS_DATA } from "@/data/faqs";
import { CategoryCard } from "@/components/CategoryCard";
import { MenuItemCard } from "@/components/MenuItemCard";
import { ArticleCard } from "@/components/ArticleCard";
import { NutritionCalculatorWidget } from "@/components/NutritionCalculatorWidget";
import { FAQSection } from "@/components/FAQSection";
import { AdSlot, InContentAd } from "@/components/AdSlot";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { SourceNote } from "@/components/SourceNote";

export default function HomePage() {
  const popularCategories = MENU_CATEGORIES.slice(0, 6);
  const featuredItems = MENU_ITEMS.filter((item) => item.featured).slice(0, 4);
  const latestGuides = GUIDE_ARTICLES.slice(0, 4);
  const homeFaqs = FAQS_DATA.slice(0, 6);

  return (
    <div className="space-y-10 sm:space-y-12 pb-10 sm:pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-editorial-700 text-white border-b border-editorial-800 py-8 sm:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-editorial-500/50 bg-editorial-800/80 px-3.5 py-1 text-xs font-semibold text-editorial-100 shadow-sm backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>2026 Independent Consumer Guide</span>
              </div>

              <h1 className="font-serif font-black text-3xl sm:text-5xl lg:text-5xl xl:text-6xl text-white tracking-tight leading-[1.15]">
                Explore Starbucks Menu, Prices & Nutrition Information
              </h1>

              <p className="text-sm sm:text-base text-editorial-100 leading-relaxed font-normal max-w-2xl">
                Menus, reference prices, calorie counts, sizes, milk customizations, and practical ordering advice compiled in one clean, independent digital resource.
              </p>

              {/* Quick Feature Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-medium text-white">
                <div className="flex items-center gap-2 bg-editorial-800/80 p-2.5 rounded-2xl border border-editorial-600/60">
                  <Coffee className="h-4 w-4 text-emerald-300 shrink-0" />
                  <span>13 Menu Categories</span>
                </div>
                <div className="flex items-center gap-2 bg-editorial-800/80 p-2.5 rounded-2xl border border-editorial-600/60">
                  <Scale className="h-4 w-4 text-emerald-300 shrink-0" />
                  <span>Verified Nutrition</span>
                </div>
                <div className="flex items-center gap-2 bg-editorial-800/80 p-2.5 rounded-2xl border border-editorial-600/60">
                  <Sparkles className="h-4 w-4 text-emerald-300 shrink-0" />
                  <span>Customization Tips</span>
                </div>
                <div className="flex items-center gap-2 bg-editorial-800/80 p-2.5 rounded-2xl border border-editorial-600/60">
                  <BookOpen className="h-4 w-4 text-emerald-300 shrink-0" />
                  <span>Editorial Guides</span>
                </div>
              </div>

              {/* Hero Quick Navigation CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <Link
                  href="/starbucks-menu"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs sm:text-sm font-bold text-editorial-900 shadow-sm hover:bg-editorial-100 transition-colors"
                >
                  <span>Explore Menu</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/nutrition"
                  className="inline-flex items-center gap-2 rounded-xl border border-editorial-400 bg-editorial-800/60 px-5 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-editorial-800 transition-colors"
                >
                  <span>Nutrition Calculator</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual Product Photography */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-editorial-900/60 group">
                <Image
                  src="/images/menu/caramel-macchiato.jpg"
                  alt="Iced Caramel Macchiato in clear takeaway cup with visible ice, espresso layers, and caramel drizzle"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Soft Bottom Gradient & Information Plaque */}
                <div className="absolute inset-0 bg-gradient-to-t from-editorial-950/80 via-transparent to-black/10" />
                <div className="absolute bottom-5 left-5 right-5 text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-editorial-950/90 backdrop-blur-md text-[11px] font-semibold text-white border border-editorial-700/60 mb-1.5 shadow-sm">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    <span>Signature Beverage Profile</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-white drop-shadow-sm">
                    Iced Caramel Macchiato
                  </h3>
                  <p className="text-xs text-editorial-200 font-medium">
                    250 Cal • 33g Sugar • 150mg Caffeine (Grande)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Menu Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slatewarm-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-editorial-700">
              Menu Explorer
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slatewarm-900 tracking-tight mt-1">
              Popular Menu Categories
            </h2>
            <p className="text-xs sm:text-sm text-slatewarm-600 mt-1">
              Select a beverage or food family to view items, calorie ranges, and reference prices.
            </p>
          </div>
          <Link
            href="/starbucks-menu"
            className="text-xs font-semibold text-editorial-700 hover:text-editorial-900 flex items-center gap-1 shrink-0"
          >
            <span>View All 13 Categories</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCategories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slatewarm-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-editorial-700">
              Signature Lineup
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slatewarm-900 tracking-tight mt-1">
              Featured Drinks & Food Details
            </h2>
            <p className="text-xs sm:text-sm text-slatewarm-600 mt-1">
              Detailed facts on customer favorites, macronutrient breakdowns, and ingredient summaries.
            </p>
          </div>
          <Link
            href="/starbucks-menu"
            className="text-xs font-semibold text-editorial-700 hover:text-editorial-900 flex items-center gap-1 shrink-0"
          >
            <span>See All Drinks & Food</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* AdSlot (Top Content) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSlot placement="in-content" />
      </div>

      {/* Interactive Nutrition Calculator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <NutritionCalculatorWidget />
      </section>

      {/* Editorial Guides & Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slatewarm-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-editorial-700">
              Consumer Intelligence
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slatewarm-900 tracking-tight mt-1">
              Useful Ordering & Nutrition Guides
            </h2>
            <p className="text-xs sm:text-sm text-slatewarm-600 mt-1">
              Original, human-reviewed articles explaining sizes, price economics, and milk tradeoffs.
            </p>
          </div>
          <Link
            href="/guides"
            className="text-xs font-semibold text-editorial-700 hover:text-editorial-900 flex items-center gap-1 shrink-0"
          >
            <span>Browse All Articles</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestGuides.map((guide) => (
            <ArticleCard key={guide.slug} article={guide} />
          ))}
        </div>
      </section>

      {/* Seasonal Spotlight & Customization Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Seasonal Box */}
          <div className="rounded-3xl border border-slatewarm-200 bg-white p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-editorial-50 text-editorial-800 border border-editorial-200 text-xs font-semibold">
                <Sparkles className="h-3.5 w-3.5 text-editorial-600" />
                <span>Seasonal Menu Calendar</span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-slatewarm-900 tracking-tight">
                Current & Upcoming Seasonal Drinks
              </h3>
              <p className="text-xs sm:text-sm text-slatewarm-600 leading-relaxed">
                Track annual release windows for Pumpkin Spice, Holiday festive drinks (Peppermint Mocha, Caramel Brulée), and Spring floral infusions.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-slatewarm-100">
              <Link
                href="/seasonal-menu"
                className="inline-flex items-center gap-2 text-xs font-semibold text-editorial-700 hover:text-editorial-900"
              >
                <span>View Full Seasonal Calendar</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Customization Box */}
          <div className="rounded-3xl border border-slatewarm-200 bg-white p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-editorial-50 text-editorial-800 border border-editorial-200 text-xs font-semibold">
                <Coffee className="h-3.5 w-3.5 text-editorial-600" />
                <span>Customization Mastery</span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-slatewarm-900 tracking-tight">
                Milks, Syrups, Shots & Cold Foams
              </h3>
              <p className="text-xs sm:text-sm text-slatewarm-600 leading-relaxed">
                Discover the differences between Oatmilk, Almondmilk, Breve, Sweet Cream Cold Foam, and Blonde Espresso shots to craft your perfect order.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-slatewarm-100">
              <Link
                href="/customization"
                className="inline-flex items-center gap-2 text-xs font-semibold text-editorial-700 hover:text-editorial-900"
              >
                <span>Explore Customization Guide</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AdSlot (Before FAQ) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSlot placement="before-faq" />
      </div>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQSection faqs={homeFaqs} />
      </section>

      {/* Source & Verification Transparency Note */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourceNote
          sourceName="Starbucks Official Public Disclosures & Independent Consumer Testing"
          lastVerified="2026-04-12"
          lastUpdated="2026-04-12"
        />
      </section>

      {/* Independent Notice Card */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <DisclaimerNotice />
      </section>
    </div>
  );
}
