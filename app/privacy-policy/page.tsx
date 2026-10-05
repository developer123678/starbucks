import React from "react";
import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";

export const metadata: Metadata = {
  title: "Privacy Policy: Data Protection & Cookie Notice",
  description:
    "Learn how Starbucks Menu handles visitor information, logs, cookies, analytics, and advertising disclosures in accordance with privacy laws.",
  alternates: {
    canonical: "https://www.starbucks-menu.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8 sm:pt-3.5 sm:pb-10 space-y-6 sm:space-y-8">
      {/* Top Header Block */}
      <div className="space-y-2">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-editorial-100 text-editorial-800 text-xs font-semibold">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Legal & Privacy</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-5xl text-roast tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slatewarm-500">
            Last Updated: April 12, 2026
          </p>
        </div>
      </div>

      <div className="space-y-8 text-sm text-slatewarm-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-roast">1. Information We Collect</h2>
          <p>
            Starbucks Menu is an informational website. We do not require visitors to register for accounts or submit payment credentials. We may collect non-personally identifiable log information (such as browser type, operating system, pages visited, and timestamps) to monitor website performance, security, and Core Web Vitals.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-roast">2. Cookies & Advertising Disclosures</h2>
          <p>
            Starbucks Menu may use standard cookies and web beacons to enhance user navigation and measure site usage. Third-party advertising partners (such as Google and its certified ad networks) may place cookies on your browser to serve relevant advertisements based on prior visits to this or other websites.
          </p>
          <p>
            Visitors may opt out of personalized advertising by visiting Google Ad Settings or through the Network Advertising Initiative opt-out portal.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-roast">3. Contact Inquiries</h2>
          <p>
            If you submit a message via our contact form, your name and email address are used solely to respond to your inquiry and are never sold or rented to third-party commercial marketers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-roast">4. Third-Party Links</h2>
          <p>
            Our website may contain links to external sites (such as official Starbucks corporate pages or nutritional disclosures). We are not responsible for the privacy practices or content of third-party websites.
          </p>
        </section>
      </div>

      <DisclaimerNotice />
    </div>
  );
}
