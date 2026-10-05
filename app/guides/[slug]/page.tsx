import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BookOpen, Clock, Calendar, ShieldCheck, ArrowRight, Info, AlertTriangle, Lightbulb } from "lucide-react";
import { GUIDE_ARTICLES } from "@/data/guides";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { RelatedContent } from "@/components/RelatedContent";
import { AdSlot, TopContentAd, InContentAd, SidebarAd, BeforeFAQAd } from "@/components/AdSlot";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { SourceNote } from "@/components/SourceNote";
import { JsonLd } from "@/components/JsonLd";

interface GuidePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return GUIDE_ARTICLES.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: GuidePageProps): Metadata {
  const article = GUIDE_ARTICLES.find((g) => g.slug === params.slug);
  if (!article) {
    return { title: "Guide Not Found" };
  }

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: {
      canonical: `https://www.starbucks-menu.com/guides/${article.slug}`,
    },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      type: "article",
      publishedTime: article.publishedDate,
      modifiedTime: article.lastUpdated,
      authors: [article.authorRole],
    },
  };
}

export default function GuideArticlePage({ params }: GuidePageProps) {
  const article = GUIDE_ARTICLES.find((g) => g.slug === params.slug);

  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    author: {
      "@type": "Organization",
      name: article.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "Starbucks Menu",
      url: "https://www.starbucks-menu.com",
    },
    datePublished: article.publishedDate,
    dateModified: article.lastUpdated,
    mainEntityOfPage: `https://www.starbucks-menu.com/guides/${article.slug}`,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8 sm:pt-3.5 sm:pb-10 space-y-6 sm:space-y-8">
      <JsonLd data={articleSchema} />

      {/* Top Header Block */}
      <div className="space-y-2">
        <Breadcrumbs
          items={[
            { label: "Guides & Articles", href: "/guides" },
            { label: article.title },
          ]}
        />

        {/* Article Header */}
        <div className="max-w-4xl space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-editorial-100 text-editorial-800">
              {article.category}
            </span>
            <span className="text-xs text-slatewarm-500 flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {article.readingTime}
            </span>
            <span className="text-xs text-slatewarm-500">•</span>
            <span className="text-xs text-slatewarm-500">
              Last Updated: {article.lastUpdated}
            </span>
          </div>

          <h1 className="font-serif font-black text-3xl sm:text-5xl text-roast tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="bg-editorial-50/70 p-4 rounded-2xl border border-editorial-200 text-xs sm:text-sm text-slatewarm-700 leading-relaxed">
            <p className="font-medium text-slatewarm-900 mb-1">Executive Summary:</p>
            <p>{article.summary}</p>
          </div>
        </div>
      </div>

      {/* Main Grid: Content + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Article Body Content */}
        <div className="lg:col-span-8 space-y-8">
          {article.contentSections.map((sec, idx) => (
            <React.Fragment key={idx}>
              <section className="space-y-4">
                <h2 className="font-serif font-bold text-2xl text-roast tracking-tight">
                  {sec.heading}
                </h2>

                {sec.subheading && (
                  <h3 className="font-serif font-semibold text-lg text-slatewarm-800">
                    {sec.subheading}
                  </h3>
                )}

              <div className="space-y-3 text-sm text-slatewarm-700 leading-relaxed">
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {/* Callout Box if present */}
              {sec.callout && (
                <div
                  className={`p-4 rounded-2xl border text-xs leading-relaxed flex items-start gap-3 my-4 ${
                    sec.callout.type === "tip"
                      ? "bg-emerald-50/80 border-emerald-200 text-emerald-900"
                      : sec.callout.type === "warning"
                      ? "bg-amber-50/80 border-amber-200 text-amber-900"
                      : "bg-editorial-100/70 border-editorial-200 text-editorial-900"
                  }`}
                >
                  <Lightbulb className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold uppercase tracking-wider block text-[10px] mb-0.5">
                      {sec.callout.type === "tip" ? "Pro Tip" : "Important Note"}
                    </span>
                    <p>{sec.callout.text}</p>
                  </div>
                </div>
              )}

              {/* Table Data if present */}
              {sec.tableData && (
                <div className="overflow-x-auto rounded-xl border border-slatewarm-200 my-4">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slatewarm-200 bg-editorial-50 font-semibold text-slatewarm-800">
                        {sec.tableData.headers.map((h, hIdx) => (
                          <th key={hIdx} className="p-3">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slatewarm-100 text-slatewarm-700">
                      {sec.tableData.rows.map((row, rIdx) => (
                        <tr key={rIdx}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-3">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
            {idx === 0 && <TopContentAd />}
          </React.Fragment>
          ))}

          {/* In-Article Ad */}
          <InContentAd />

          {/* Editorial Author Byline Card */}
          <div className="rounded-2xl border border-editorial-200 bg-editorial-50/60 p-5 text-xs text-slatewarm-600 flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-editorial-600 shrink-0" />
            <div>
              <p className="font-bold text-slatewarm-900">
                Editorial Review by {article.authorRole}
              </p>
              <p className="text-[11px] text-slatewarm-500 mt-0.5">
                This article was researched, compiled, and fact-checked independently without commercial influence from Starbucks Coffee Company.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl border border-editorial-200 bg-white p-6 space-y-4 shadow-sm">
            <h3 className="font-serif font-bold text-lg text-roast">
              Explore More Topics
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-editorial-700">
              <li>
                <Link href="/starbucks-menu" className="hover:text-editorial-700 flex items-center gap-1.5">
                  <ArrowRight className="h-3.5 w-3.5 text-editorial-600" />
                  Explore Full Menu
                </Link>
              </li>
              <li>
                <Link href="/prices" className="hover:text-editorial-700 flex items-center gap-1.5">
                  <ArrowRight className="h-3.5 w-3.5 text-editorial-600" />
                  Price Matrix & Cost Guide
                </Link>
              </li>
              <li>
                <Link href="/nutrition" className="hover:text-editorial-700 flex items-center gap-1.5">
                  <ArrowRight className="h-3.5 w-3.5 text-editorial-600" />
                  Nutrition Facts & Calculator
                </Link>
              </li>
              <li>
                <Link href="/starbucks-sizes" className="hover:text-editorial-700 flex items-center gap-1.5">
                  <ArrowRight className="h-3.5 w-3.5 text-editorial-600" />
                  Sizes, Ounces & Shots
                </Link>
              </li>
              <li>
                <Link href="/customization" className="hover:text-editorial-700 flex items-center gap-1.5">
                  <ArrowRight className="h-3.5 w-3.5 text-editorial-600" />
                  Milk & Syrup Customization
                </Link>
              </li>
            </ul>
          </div>

          <SidebarAd />
        </div>
      </div>

      {/* Related Content */}
      <RelatedContent
        relatedItemSlugs={article.relatedItemSlugs}
        relatedGuideSlugs={article.relatedGuideSlugs}
      />

      {/* Article FAQs */}
      {article.faq && article.faq.length > 0 && (
        <FAQSection faqs={article.faq} title="Questions Related to This Guide" />
      )}

      <SourceNote
        sourceName="Researched and Authored by Starbucks Menu Editorial Staff"
        lastVerified={article.lastUpdated}
        lastUpdated={article.lastUpdated}
      />

      <DisclaimerNotice />
    </div>
  );
}
