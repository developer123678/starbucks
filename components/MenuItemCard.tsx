import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { MenuItem } from "@/types";
import { MenuItemVisual } from "./MenuItemVisual";
import { cn } from "@/lib/utils";

interface MenuItemCardProps {
  item: MenuItem;
  className?: string;
}

export function MenuItemCard({ item, className }: MenuItemCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col justify-between rounded-3xl border border-slatewarm-200 bg-white p-5 shadow-sm hover:border-editorial-500 hover:shadow-md transition-all duration-200 overflow-hidden",
        className
      )}
    >
      <div className="space-y-4">
        {/* 1. Product Image Header */}
        <Link href={`/menu/${item.slug}`} className="block overflow-hidden rounded-2xl">
          <MenuItemVisual slug={item.slug} name={item.name} category={item.category} />
        </Link>

        {/* Badges & Price Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-editorial-100 text-editorial-900">
              {item.subcategory}
            </span>
            {item.availabilityStatus === "seasonal" && (
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-amber-600" /> Seasonal
              </span>
            )}
            {item.isVeganFriendly && (
              <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                Plant-Based
              </span>
            )}
          </div>
          <span className="font-serif font-bold text-sm text-editorial-900 shrink-0">
            {item.price}
          </span>
        </div>

        {/* 2. Item Name */}
        <Link href={`/menu/${item.slug}`}>
          <h3 className="font-serif font-bold text-lg text-slatewarm-900 group-hover:text-editorial-700 transition-colors leading-snug">
            {item.name}
          </h3>
        </Link>

        {/* 3. Short Factual Description */}
        <p className="text-xs text-slatewarm-600 leading-relaxed line-clamp-2">
          {item.shortDescription}
        </p>
      </div>

      {/* 4. Relevant Available Information & 5. Action */}
      <div className="border-t border-slatewarm-100 pt-4 mt-4 space-y-3">
        {/* Quick Nutrition Facts Grid */}
        <div className="grid grid-cols-3 gap-2 text-center bg-slatewarm-50 p-2.5 rounded-2xl text-[11px]">
          <div>
            <span className="text-slatewarm-500 block text-[10px]">Calories</span>
            <span className="font-bold text-slatewarm-900">{item.calories}</span>
          </div>
          <div>
            <span className="text-slatewarm-500 block text-[10px]">Sugar</span>
            <span className="font-bold text-editorial-700">{item.sugar}g</span>
          </div>
          <div>
            <span className="text-slatewarm-500 block text-[10px]">Caffeine</span>
            <span className="font-bold text-slatewarm-900">{item.caffeine}mg</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs pt-1">
          <span className="text-[11px] text-slatewarm-500">
            Serving: {item.standardServing}
          </span>
          <Link
            href={`/menu/${item.slug}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-editorial-50 group-hover:bg-editorial-100 text-editorial-800 font-semibold transition-colors text-xs"
          >
            <span>View Details</span>
            <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 transition-transform text-editorial-600" />
          </Link>
        </div>
      </div>
    </div>
  );
}
