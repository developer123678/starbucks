"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, Sparkles } from "lucide-react";
import { SearchModal } from "./SearchModal";
import { cn } from "@/lib/utils";

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Menu", href: "/starbucks-menu" },
    { label: "Locations", href: "/locations" },
    { label: "Guides", href: "/guides" },
    { label: "Prices", href: "/prices" },
    { label: "Nutrition", href: "/nutrition" },
    { label: "Sizes", href: "/starbucks-sizes" },
    { label: "Seasonal", href: "/seasonal-menu" },
    { label: "Rewards", href: "/starbucks-rewards" },
  ];

  return (
    <>
      {/* Accessibility: Skip to Content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-editorial-800 focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-editorial-400"
      >
        Skip to main content
      </a>

      {/* Top Black Utility Navigation Bar */}
      <div className="w-full bg-black border-b border-neutral-900 py-1.5 text-xs text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-wider text-neutral-300 font-medium hidden sm:inline-block">
            Independent Nutritional & Price Guide
          </span>
          <div className="flex items-center gap-3 text-xs ml-auto font-medium text-white">
            <Link href="/contact" className="text-white hover:text-emerald-400 transition-colors">
              Contact
            </Link>
            <span className="text-neutral-500 select-none" aria-hidden="true">|</span>
            <Link href="/privacy-policy" className="text-white hover:text-emerald-400 transition-colors">
              Privacy
            </Link>
            <span className="text-neutral-500 select-none" aria-hidden="true">|</span>
            <Link href="/faq" className="text-white hover:text-emerald-400 transition-colors">
              FAQs
            </Link>
            <span className="text-neutral-500 select-none" aria-hidden="true">|</span>
            <Link href="/locations" className="text-white hover:text-emerald-400 transition-colors">
              Locations
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 w-full border-b border-slatewarm-200 bg-white/95 backdrop-blur-md transition-all shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Original Publication Brand Wordmark (No Coffee Cup Icon, No Siren Logo) */}
            <div className="flex items-center gap-6">
              <Link href="/" className="flex flex-col group" aria-label="Starbucks Menu Home">
                <div className="flex items-center gap-2.5">
                  {/* Original Botanical Emblem Seal */}
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-editorial-800 via-editorial-900 to-editorial-950 text-white flex items-center justify-center shadow-sm border border-editorial-700/60 group-hover:from-editorial-700 group-hover:to-editorial-900 transition-all">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-editorial-200"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 22C12 22 12 14 12 6C12 3.8 10.2 2 8 2C8 4.2 9.8 6 12 6" />
                      <path d="M12 14C9.5 14 7.5 12 7.5 9.5C9.5 9.5 11.5 11.5 12 14Z" />
                      <path d="M12 10C14.5 10 16.5 8 16.5 5.5C14.5 5.5 12.5 7.5 12 10Z" />
                      <path d="M12 18C14.5 18 16.5 16 16.5 13.5C14.5 13.5 12.5 15.5 12 18Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif font-bold text-xl sm:text-2xl text-editorial-950 tracking-tight leading-none group-hover:text-editorial-700 transition-colors">
                      Starbucks <span className="text-editorial-600 font-serif italic">Menu</span>
                    </span>
                    <span className="text-[10px] tracking-wider uppercase text-slatewarm-500 font-semibold font-sans mt-0.5 hidden sm:inline-block">
                      Independent Menu & Nutrition Explorer
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Primary Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-3 py-2 text-xs font-semibold rounded-lg transition-colors",
                      isActive
                        ? "bg-editorial-100 text-editorial-900 font-bold"
                        : "text-slatewarm-700 hover:text-editorial-700 hover:bg-editorial-50"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions: Search & Mobile Hamburger */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slatewarm-300 bg-slatewarm-50/60 text-slatewarm-600 hover:border-editorial-500 hover:text-editorial-800 hover:bg-white transition-all shadow-sm text-xs font-medium"
                aria-label="Search menu and articles"
              >
                <Search className="h-4 w-4 text-editorial-600" />
                <span className="hidden sm:inline">Search drinks, food, calories, prices...</span>
                <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white border border-slatewarm-200 rounded text-slatewarm-500">
                  Ctrl+K
                </kbd>
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slatewarm-700 hover:bg-editorial-100 transition-colors"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6 text-editorial-800" /> : <Menu className="h-6 w-6 text-slatewarm-800" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slatewarm-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center p-2.5 rounded-lg text-xs font-semibold transition-colors",
                      isActive
                        ? "bg-editorial-100 text-editorial-900 font-bold"
                        : "text-slatewarm-700 hover:bg-slatewarm-50"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Quick Links & Categories for Mobile */}
            <div className="border-t border-slatewarm-100 pt-3 space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-editorial-700">
                Quick Category Jump
              </p>
              <div className="grid grid-cols-2 gap-1.5 text-xs text-slatewarm-600">
                <Link
                  href="/menu/hot-coffee"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 hover:text-editorial-700"
                >
                  Hot Coffees
                </Link>
                <Link
                  href="/menu/cold-coffee"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 hover:text-editorial-700"
                >
                  Cold Brews
                </Link>
                <Link
                  href="/menu/refreshers"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 hover:text-editorial-700"
                >
                  Refreshers
                </Link>
                <Link
                  href="/menu/breakfast"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 hover:text-editorial-700"
                >
                  Breakfast
                </Link>
                <Link
                  href="/faq"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 hover:text-editorial-700"
                >
                  FAQs
                </Link>
                <Link
                  href="/editorial-policy"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 hover:text-editorial-700"
                >
                  Editorial Policy
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Dialog Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
