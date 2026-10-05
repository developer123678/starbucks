import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, AlertCircle, RefreshCw, Mail } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";

export const metadata: Metadata = {
  title: "Corrections & Updates Policy: Reporting Inaccuracies",
  description:
    "How to submit factual corrections, pricing updates, or ingredient changes to the Starbucks Menu editorial review team.",
  alternates: {
    canonical: "https://www.starbucks-menu.com/corrections",
  },
};

export default function CorrectionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8 sm:pt-3.5 sm:pb-10 space-y-6 sm:space-y-8">
      {/* Top Header Block */}
      <div className="space-y-2">
        <Breadcrumbs items={[{ label: "Corrections & Updates Policy" }]} />
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-editorial-100 text-editorial-800 text-xs font-semibold">
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Transparency & Corrections</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-5xl text-roast tracking-tight">
            Corrections & Reader Feedback Policy
          </h1>
          <p className="text-sm sm:text-base text-slatewarm-700 leading-relaxed font-normal">
            We are committed to swift, transparent corrections whenever factual inaccuracies in pricing, nutrition data, or recipe descriptions occur.
          </p>
        </div>
      </div>

      <div className="space-y-8 text-sm text-slatewarm-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-2xl text-roast">Our Commitment to Accuracy</h2>
          <p>
            Despite our rigorous fact-checking and regular verification audits, restaurant menu offerings and seasonal formulations evolve quickly. When an error is identified in an article, table, or calculation, we promptly investigate and update the content.
          </p>
        </section>

        <section className="rounded-3xl border border-editorial-200 bg-white p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="font-serif font-bold text-2xl text-roast">How to Report a Correction</h2>
          <p>
            If you notice an inaccurate calorie count, outdated seasonal status, or broken link, please submit a report through our contact form. To help us process updates quickly, please include:
          </p>
          <ul className="space-y-2 text-xs text-slatewarm-700 pl-4 list-disc">
            <li>The exact URL of the page containing the error</li>
            <li>The specific claim, number, or item that requires revision</li>
            <li>A reference link or context (e.g. current store receipt or official disclosure)</li>
          </ul>

          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-roast hover:bg-editorial-700 text-white text-xs font-semibold transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Submit a Correction via Contact Form</span>
            </Link>
          </div>
        </section>
      </div>

      <DisclaimerNotice />
    </div>
  );
}
