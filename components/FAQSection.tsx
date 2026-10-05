"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/types";
import { cn } from "@/lib/utils";

interface FAQSectionProps {
  faqs: (FAQItem | { question: string; answer: string })[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Clear, research-backed answers regarding Starbucks ingredients, pricing, and ordering.",
  className,
}: FAQSectionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className={cn("space-y-6", className)} aria-labelledby="faq-heading">
      <div>
        <h2 id="faq-heading" className="font-serif font-bold text-2xl sm:text-3xl text-editorial-950 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs sm:text-sm text-slatewarm-600 mt-1.5 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="divide-y divide-slatewarm-200 rounded-3xl border border-slatewarm-200 bg-white shadow-sm overflow-hidden">
        {faqs.map((faq, idx) => {
          const isOpen = openIndexes.includes(idx);
          return (
            <div key={idx} className="transition-colors">
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-5 text-left text-sm font-semibold text-slatewarm-900 hover:bg-editorial-50/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-editorial-500"
                aria-expanded={isOpen}
              >
                <span className="pr-4">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-slatewarm-400 shrink-0 transform transition-transform duration-200",
                    isOpen && "rotate-180 text-editorial-600"
                  )}
                  aria-hidden="true"
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slatewarm-600 leading-relaxed bg-editorial-50/40">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
