"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, Coffee, BookOpen, Flame, ArrowRight } from "lucide-react";
import { MENU_ITEMS } from "@/data/menu-items";
import { MENU_CATEGORIES } from "@/data/menu-categories";
import { GUIDE_ARTICLES } from "@/data/guides";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const filteredItems = normalizedQuery
    ? MENU_ITEMS.filter(
        (item) =>
          item.name.toLowerCase().includes(normalizedQuery) ||
          item.category.toLowerCase().includes(normalizedQuery) ||
          item.description.toLowerCase().includes(normalizedQuery) ||
          item.subcategory.toLowerCase().includes(normalizedQuery)
      ).slice(0, 6)
    : [];

  const filteredCategories = normalizedQuery
    ? MENU_CATEGORIES.filter(
        (cat) =>
          cat.name.toLowerCase().includes(normalizedQuery) ||
          cat.shortName.toLowerCase().includes(normalizedQuery) ||
          cat.description.toLowerCase().includes(normalizedQuery)
      ).slice(0, 4)
    : [];

  const filteredGuides = normalizedQuery
    ? GUIDE_ARTICLES.filter(
        (guide) =>
          guide.title.toLowerCase().includes(normalizedQuery) ||
          guide.summary.toLowerCase().includes(normalizedQuery) ||
          guide.category.toLowerCase().includes(normalizedQuery)
      ).slice(0, 4)
    : [];

  const hasResults =
    filteredItems.length > 0 || filteredCategories.length > 0 || filteredGuides.length > 0;

  const handleSelect = (href: string) => {
    onClose();
    router.push(href);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-editorial-950/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-slatewarm-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-modal-title"
      >
        {/* Search Input Bar */}
        <div className="relative border-b border-slatewarm-200 p-4 bg-slatewarm-50/50 flex items-center gap-3">
          <Search className="h-5 w-5 text-editorial-600 shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Starbucks drinks, food, calories, prices, sizes, guides..."
            className="w-full bg-transparent text-base text-slatewarm-900 placeholder:text-slatewarm-400 focus:outline-none"
            aria-label="Search site content"
          />
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slatewarm-400 hover:bg-slatewarm-200/50 hover:text-slatewarm-700 transition-colors"
            aria-label="Close search dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[65vh] overflow-y-auto p-4 space-y-5">
          {query.trim() === "" && (
            <div className="py-6 text-center">
              <p className="text-sm font-semibold text-slatewarm-800 mb-2">
                Popular Quick Searches
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 max-w-md mx-auto">
                {["Iced Latte", "Cold Brew", "Pink Drink", "Caramel Macchiato", "Egg Bites", "Matcha", "Prices", "Sizes", "Rewards"].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="rounded-full border border-slatewarm-200 bg-white px-3 py-1 text-xs font-medium text-editorial-800 hover:border-editorial-400 hover:bg-editorial-50 transition-colors"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {query.trim() !== "" && !hasResults && (
            <div className="py-12 text-center">
              <p className="text-base font-semibold text-slatewarm-800 mb-1">
                No matching results found
              </p>
              <p className="text-xs text-slatewarm-500 max-w-sm mx-auto">
                Try searching for specific drink names, categories like &ldquo;Hot Coffee&rdquo;, or topics like &ldquo;nutrition&rdquo; or &ldquo;prices&rdquo;.
              </p>
            </div>
          )}

          {/* Categories Results */}
          {filteredCategories.length > 0 && (
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-editorial-700 mb-2 flex items-center gap-1.5">
                <Coffee className="h-3.5 w-3.5" /> Menu Categories
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleSelect(`/menu/${cat.slug}`)}
                    className="flex items-center justify-between p-3 rounded-xl border border-slatewarm-200 hover:border-editorial-500 hover:bg-editorial-50/50 text-left transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-xs text-slatewarm-900">{cat.name}</p>
                      <p className="text-[11px] text-slatewarm-500">{cat.priceRange}</p>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-editorial-600 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Menu Items Results */}
          {filteredItems.length > 0 && (
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-editorial-700 mb-2 flex items-center gap-1.5">
                <Flame className="h-3.5 w-3.5" /> Handcrafted Drinks & Food
              </p>
              <div className="space-y-1.5">
                {filteredItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(`/menu/${item.slug}`)}
                    className="w-full flex items-center justify-between p-3 rounded-xl border border-slatewarm-100 hover:border-editorial-300 hover:bg-editorial-50/70 text-left transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-xs text-slatewarm-900">{item.name}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-editorial-100 text-editorial-800 font-bold">
                          {item.calories} kcal
                        </span>
                      </div>
                      <p className="text-[11px] text-slatewarm-500 line-clamp-1">{item.shortDescription}</p>
                    </div>
                    <span className="text-xs font-bold text-editorial-800 shrink-0 ml-2">
                      {item.price}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Guides Results */}
          {filteredGuides.length > 0 && (
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-editorial-700 mb-2 flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5" /> Editorial Guides & Articles
              </p>
              <div className="space-y-1.5">
                {filteredGuides.map((guide) => (
                  <button
                    key={guide.slug}
                    onClick={() => handleSelect(`/guides/${guide.slug}`)}
                    className="w-full flex items-center justify-between p-3 rounded-xl border border-slatewarm-100 hover:border-editorial-300 hover:bg-editorial-50/70 text-left transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-xs text-slatewarm-900">{guide.title}</p>
                      <p className="text-[11px] text-slatewarm-500 line-clamp-1">{guide.summary}</p>
                    </div>
                    <span className="text-[10px] text-slatewarm-400 shrink-0 ml-2">
                      {guide.readingTime}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="border-t border-slatewarm-100 bg-slatewarm-50/80 p-3 px-4 flex items-center justify-between text-[11px] text-slatewarm-500">
          <span>Press <kbd className="px-1.5 py-0.5 bg-white border border-slatewarm-200 rounded font-mono text-[10px]">ESC</kbd> to close</span>
          <Link
            href="/starbucks-menu"
            onClick={onClose}
            className="text-editorial-700 hover:text-editorial-900 font-bold"
          >
            Explore Complete Menu →
          </Link>
        </div>
      </div>
    </div>
  );
}
