import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";

export const metadata: Metadata = {
  title: "Terms of Service: User Agreement & Information Usage",
  description:
    "Terms of service and user agreement governing access to Starbucks Menu informational food guides and tools.",
  alternates: {
    canonical: "https://www.starbucks-menu.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8 sm:pt-3.5 sm:pb-10 space-y-6 sm:space-y-8">
      {/* Top Header Block */}
      <div className="space-y-2">
        <Breadcrumbs items={[{ label: "Terms of Service" }]} />
        <div className="space-y-3">
          <h1 className="font-serif font-black text-3xl sm:text-5xl text-roast tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-slatewarm-500">
            Last Updated: April 12, 2026
          </p>
        </div>
      </div>

      <div className="space-y-8 text-sm text-slatewarm-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-roast">1. Acceptance of Terms</h2>
          <p>
            By accessing and using Starbucks Menu, you agree to comply with and be bound by these Terms of Service. If you do not agree with these terms, please do not use this website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-roast">2. Informational Purpose Only</h2>
          <p>
            All content on Starbucks Menu—including menu descriptions, nutritional calculations, price estimates, allergen notes, and ordering tips—is provided strictly for educational and consumer informational purposes. Content does not constitute formal medical or dietary advice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-roast">3. Intellectual Property & Trademarks</h2>
          <p>
            All original editorial text, layouts, component designs, and software code on Starbucks Menu are the intellectual property of Starbucks Menu. Starbucks®, Frappuccino®, Starbucks Refreshers®, and associated product names are registered trademarks of Starbucks Coffee Company. Their mention on this website is for nominative descriptive purposes only.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-roast">4. Limitation of Liability</h2>
          <p>
            While we strive for accuracy, Starbucks Menu makes no warranties regarding the absolute completeness, timeliness, or accuracy of the information provided. Users are advised to verify menu prices, allergen safety, and promotional terms directly with Starbucks.
          </p>
        </section>
      </div>

      <DisclaimerNotice />
    </div>
  );
}
