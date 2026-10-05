import React from "react";
import type { Metadata } from "next";
import { ShieldAlert, Info } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";

export const metadata: Metadata = {
  title: "Independent Website Legal Disclaimer & Trademark Notice",
  description:
    "Full legal disclaimer for Starbucks Menu: independent status, non-affiliation with Starbucks Coffee Company, and nominative trademark fair use.",
  alternates: {
    canonical: "https://www.starbucks-menu.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8 sm:pt-3.5 sm:pb-10 space-y-6 sm:space-y-8">
      {/* Top Header Block */}
      <div className="space-y-2">
        <Breadcrumbs items={[{ label: "Independent Disclaimer" }]} />
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-editorial-100 text-editorial-800 text-xs font-semibold">
            <ShieldAlert className="h-3.5 w-3.5" />
            <span>Legal Disclaimer</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-5xl text-roast tracking-tight">
            Independent Website Notice & Legal Disclaimer
          </h1>
          <p className="text-xs text-slatewarm-500">
            Last Reviewed: April 12, 2026
          </p>
        </div>
      </div>

      <div className="space-y-8 text-sm text-slatewarm-700 leading-relaxed">
        <section className="space-y-3 rounded-3xl border border-editorial-200 bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="font-serif font-bold text-2xl text-roast">
            1. Non-Affiliation Statement
          </h2>
          <p className="text-slatewarm-900 font-semibold">
            This is an independent informational website and is not affiliated with, sponsored by, or endorsed by Starbucks Coffee Company.
          </p>
          <p>
            Starbucks Menu is an independent digital publication operated for consumer reference and educational purposes. Any views, editorial analyses, nutritional estimations, or ordering suggestions published on this website are solely those of Starbucks Menu and do not represent the official stance, policies, or statements of Starbucks Coffee Company.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-2xl text-roast">
            2. Trademark Disclosures
          </h2>
          <p>
            Starbucks®, the Starbucks Siren logo, Frappuccino®, Starbucks Refreshers®, and all other Starbucks trademarks, service marks, and trade dress are the registered property of Starbucks Coffee Company.
          </p>
          <p>
            The use of trademarked names on Starbucks Menu is strictly for nominative, descriptive, and consumer identification purposes to identify the goods and services being discussed. Starbucks Menu does not use the official Starbucks siren logo as its logo, favicon, or branding.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-2xl text-roast">
            3. Price & Nutrition Information Advisory
          </h2>
          <p>
            Menu prices, calorie counts, ingredient compositions, and product availability are subject to change without notice and can vary significantly by regional geography, franchise license format (such as airport or grocery stores), and customer customization.
          </p>
          <p>
            Users are advised to confirm current prices and exact allergen details directly through official Starbucks ordering channels or at the register before purchasing.
          </p>
        </section>
      </div>

      <DisclaimerNotice />
    </div>
  );
}
