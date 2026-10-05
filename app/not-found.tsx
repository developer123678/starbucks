import React from "react";
import Link from "next/link";
import { Coffee, ArrowRight, Search, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
      <div className="w-16 h-16 rounded-3xl bg-editorial-100 text-editorial-600 flex items-center justify-center mx-auto shadow-sm">
        <Coffee className="h-8 w-8" />
      </div>

      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-editorial-600">
          404 Error
        </span>
        <h1 className="font-serif font-black text-3xl sm:text-5xl text-roast tracking-tight">
          Page or Menu Item Not Found
        </h1>
        <p className="text-sm text-slatewarm-600 max-w-md mx-auto leading-relaxed">
          The menu item, category, or article you were searching for could not be located. It may have been renamed, archived, or moved.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-roast text-white text-xs font-semibold hover:bg-editorial-700 transition-colors shadow-sm"
        >
          <Home className="h-4 w-4" />
          <span>Return to Homepage</span>
        </Link>
        <Link
          href="/starbucks-menu"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-editorial-300 bg-white text-slatewarm-800 text-xs font-semibold hover:bg-editorial-50 transition-colors"
        >
          <span>Explore Menu</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="pt-12 border-t border-editorial-200/80 max-w-md mx-auto text-xs text-slatewarm-500">
        <p className="font-semibold text-slatewarm-700 mb-2">Popular Sections to Explore:</p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Link href="/prices" className="px-3 py-1 rounded-full bg-editorial-50 hover:bg-editorial-100 text-editorial-900">
            Prices
          </Link>
          <Link href="/nutrition" className="px-3 py-1 rounded-full bg-editorial-50 hover:bg-editorial-100 text-editorial-900">
            Nutrition & Calculator
          </Link>
          <Link href="/starbucks-sizes" className="px-3 py-1 rounded-full bg-editorial-50 hover:bg-editorial-100 text-editorial-900">
            Sizes
          </Link>
          <Link href="/customization" className="px-3 py-1 rounded-full bg-editorial-50 hover:bg-editorial-100 text-editorial-900">
            Customization
          </Link>
          <Link href="/guides" className="px-3 py-1 rounded-full bg-editorial-50 hover:bg-editorial-100 text-editorial-900">
            Guides
          </Link>
        </div>
      </div>
    </div>
  );
}
