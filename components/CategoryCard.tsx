import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { MenuCategory } from "@/types";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: MenuCategory;
  className?: string;
}

export function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <Link
      href={`/menu/${category.slug}`}
      className={cn(
        "group relative flex flex-col justify-between rounded-3xl border border-slatewarm-200 bg-white p-5 shadow-sm hover:border-editorial-500 hover:shadow-md transition-all duration-200 overflow-hidden",
        className
      )}
    >
      <div className="space-y-3">
        {/* Category Realistic Product Image Banner */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-b from-[#fbfbfa] to-[#edf6f1] border border-slatewarm-100 flex items-center justify-center p-3">
          <div className="absolute inset-2 rounded-full bg-gradient-to-b from-white to-editorial-50/60 shadow-inner"></div>
          <Image
            src={`/images/categories/${category.slug}.jpg`}
            alt={`Starbucks ${category.name}`}
            width={400}
            height={300}
            unoptimized
            className="relative z-10 w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-2.5 right-2.5 z-20 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/90 text-editorial-800 border border-editorial-200 backdrop-blur-sm">
            {category.type === "drinks" ? "Beverage" : "Food"}
          </span>
        </div>

        <div>
          <h3 className="font-serif font-bold text-lg text-slatewarm-900 group-hover:text-editorial-700 transition-colors mb-1 leading-snug">
            {category.name}
          </h3>

          <p className="text-xs text-slatewarm-600 leading-relaxed line-clamp-2">
            {category.description}
          </p>
        </div>
      </div>

      <div className="border-t border-slatewarm-100 pt-3 mt-3 space-y-2">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-slatewarm-500">Ref. Price:</span>
          <span className="font-semibold text-slatewarm-900">{category.priceRange}</span>
        </div>
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-slatewarm-500">Typical Energy:</span>
          <span className="font-medium text-slatewarm-700">{category.avgCalories}</span>
        </div>

        <div className="flex items-center gap-1 text-xs font-semibold text-editorial-700 group-hover:text-editorial-800 pt-1 transition-colors">
          <span>Explore {category.shortName}</span>
          <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform text-editorial-600" />
        </div>
      </div>
    </Link>
  );
}
