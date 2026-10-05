import React from "react";
import type { Metadata } from "next";
import { ShieldCheck, BookOpen, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";

export const metadata: Metadata = {
  title: "Editorial Policy: Independent Research & Verification Standards",
  description:
    "Review Starbucks Menu's editorial policy: our standards for researching, compiling, reviewing, and updating Starbucks menu, price, and nutrition content.",
  alternates: {
    canonical: "https://www.starbucks-menu.com/editorial-policy",
  },
};

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8 sm:pt-3.5 sm:pb-10 space-y-6 sm:space-y-8">
      {/* Top Header Block */}
      <div className="space-y-2">
        <Breadcrumbs items={[{ label: "Editorial Policy" }]} />
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-editorial-100 text-editorial-800 text-xs font-semibold">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Integrity & Standards</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-5xl text-roast tracking-tight">
            Editorial Policy & Fact-Checking Guidelines
          </h1>
          <p className="text-sm sm:text-base text-slatewarm-700 leading-relaxed font-normal">
            Starbucks Menu operates under strict editorial principles designed to ensure that all published information regarding food, beverages, nutrition, and pricing is accurate, balanced, and independently vetted.
          </p>
        </div>
      </div>

      <div className="space-y-8 text-sm text-slatewarm-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-2xl text-roast">1. Independence & Objectivity</h2>
          <p>
            Starbucks Menu is an independent editorial publication. We are not owned by, managed by, or commercially affiliated with Starbucks Coffee Company. We do not accept paid product placements, sponsored brand praise, or corporate review vetoes. Our evaluations of menu items, value propositions, and nutritional profiles are driven solely by consumer utility.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-2xl text-roast">2. Research & Sourcing Standards</h2>
          <p>
            Our writers and editors compile data from verified public disclosures, including official ingredient lists, published nutritional matrices, direct store sampling, and consumer regulatory filings. Where data varies by region or store format, we explicitly contextualize the variance rather than presenting estimated numbers as definitive universal facts.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-2xl text-roast">3. Human Review & Quality Control</h2>
          <p>
            Every guide, table, and data matrix undergoes human editorial review before publication. We do not publish unreviewed automated content or thin spun articles. If computational models or automated tools are utilized during preliminary drafting or data aggregation, senior human editors verify all factual assertions against official disclosures before publication.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-2xl text-roast">4. Continuous Updates & Re-Verification</h2>
          <p>
            Restaurant menus, seasonal offerings, and ingredient formulations change regularly. Our team conducts periodic audits of our category pillars, item pages, and guides, stamping verified pages with clear &ldquo;Last Verified&rdquo; and &ldquo;Last Reviewed&rdquo; dates for reader transparency.
          </p>
        </section>
      </div>

      <DisclaimerNotice />
    </div>
  );
}
