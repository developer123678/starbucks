import React from "react";
import Link from "next/link";
import { DollarSign, AlertCircle, HelpCircle } from "lucide-react";
import { DisclaimerNotice } from "./DisclaimerNotice";

interface PriceInformationProps {
  price: string;
  priceNote?: string;
  categoryName?: string;
}

export function PriceInformation({ price, priceNote, categoryName }: PriceInformationProps) {
  return (
    <div className="space-y-4">
      <div className="rounded-3xl border border-slatewarm-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slatewarm-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-editorial-700">
              Reference Pricing
            </span>
            <div className="font-serif font-bold text-3xl text-editorial-900 mt-1">
              {price}
            </div>
          </div>
          <div className="text-xs text-slatewarm-500 sm:text-right max-w-xs">
            <p className="font-semibold text-slatewarm-800">Estimated Base Range</p>
            <p className="text-[11px] leading-tight mt-0.5">
              Standard build before add-on syrups, plant milks, or extra espresso shots.
            </p>
          </div>
        </div>

        {priceNote && (
          <p className="text-xs text-slatewarm-600 leading-relaxed mt-4">
            <strong>Price Context:</strong> {priceNote}
          </p>
        )}

        <div className="mt-4 pt-4 border-t border-slatewarm-100 flex flex-wrap items-center justify-between gap-2 text-xs">
          <Link
            href="/prices"
            className="text-editorial-700 hover:text-editorial-900 font-semibold underline flex items-center gap-1"
          >
            <HelpCircle className="h-3.5 w-3.5" />
            Learn why prices vary between airports & street stores
          </Link>
          <span className="text-[11px] text-slatewarm-400">
            Last Checked: Q1/Q2 2026
          </span>
        </div>
      </div>

      <DisclaimerNotice variant="price-warning" />
    </div>
  );
}
