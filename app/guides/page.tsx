import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { GUIDE_ARTICLES } from "@/data/guides";
import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AdSlot, InContentAd } from "@/components/AdSlot";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { SourceNote } from "@/components/SourceNote";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Starbucks Guides & Articles: Ordering, Nutrition & Size Analysis",
  description:
    "Explore in-depth editorial guides on Starbucks menus, drink sizes, nutrition facts, price economics, milk tradeoffs, and beginner ordering tips.",
  alternates: {
    canonical: "https://www.starbucks-menu.com/guides",
  },
};

export default function GuidesIndexPage() {
  const guidesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Starbucks Guides & Editorial Analysis",
    description: "Independent consumer guides on Starbucks menu ordering, pricing, and nutrition.",
    url: "https://www.starbucks-menu.com/guides"
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8 sm:pt-3.5 sm:pb-10 space-y-6 sm:space-y-8">
      <JsonLd data={guidesSchema} />

      {/* Top Header Block */}
      <div className="space-y-2">
        <Breadcrumbs items={[{ label: "Editorial Guides & Articles" }]} />
        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-editorial-100 text-editorial-800 text-xs font-semibold">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Editorial Intelligence</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-5xl text-roast tracking-tight">
            Starbucks Editorial Guides & Consumer Insights
          </h1>
          <p className="text-sm sm:text-base text-slatewarm-700 leading-relaxed font-normal">
            Original, human-reviewed consumer articles designed to help you navigate cup sizes, understand nutrition and hidden sugars, decode pricing variations, and order with confidence.
          </p>
        </div>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {GUIDE_ARTICLES.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      {/* In-Content Ad */}
      <InContentAd />

      <SourceNote
        sourceName="Researched and Authored by Starbucks Menu Editorial Staff"
        lastVerified="2026-04-12"
      />

      <DisclaimerNotice />
    </div>
  );
}
