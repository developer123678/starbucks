import React from "react";
import Link from "next/link";
import { Coffee, ShieldCheck, HeartHandshake, Compass } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-editorial-900 bg-editorial-950 text-editorial-100 mt-8 sm:mt-12">
      {/* Top Footer Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-editorial-800 text-white flex items-center justify-center border border-editorial-700 shadow-sm">
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
              <span className="font-serif font-bold text-2xl text-white tracking-tight">
                Starbucks <span className="text-editorial-300">Menu</span>
              </span>
            </div>
            <p className="text-xs text-editorial-300 leading-relaxed max-w-sm">
              An independent consumer publication and comprehensive reference guide covering Starbucks menu items, reference pricing, nutritional facts, cup sizes, allergen advisories, and ordering guides.
            </p>
            <div className="pt-2 text-[11px] text-editorial-400 space-y-1">
              <p className="flex items-center gap-1.5 font-medium text-editorial-200">
                <ShieldCheck className="h-4 w-4 text-editorial-400" />
                Independently Compiled & Human Reviewed
              </p>
              <p>Updated continuously with transparent methodology and verified public disclosures.</p>
            </div>
          </div>

          {/* Menu & Beverages */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-editorial-300">
              Menu & Drinks
            </h3>
            <ul className="space-y-2 text-xs text-editorial-300">
              <li>
                <Link href="/starbucks-menu" className="hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/menu/hot-coffee" className="hover:text-white transition-colors">
                  Hot Coffees & Espresso
                </Link>
              </li>
              <li>
                <Link href="/menu/cold-coffee" className="hover:text-white transition-colors">
                  Cold Brew & Iced Coffee
                </Link>
              </li>
              <li>
                <Link href="/menu/frappuccino" className="hover:text-white transition-colors">
                  Frappuccino® Drinks
                </Link>
              </li>
              <li>
                <Link href="/menu/refreshers" className="hover:text-white transition-colors">
                  Starbucks Refreshers®
                </Link>
              </li>
              <li>
                <Link href="/menu/matcha" className="hover:text-white transition-colors">
                  Matcha Green Tea
                </Link>
              </li>
              <li>
                <Link href="/menu/breakfast" className="hover:text-white transition-colors">
                  Breakfast & Egg Bites
                </Link>
              </li>
              <li>
                <Link href="/menu/bakery" className="hover:text-white transition-colors">
                  Bakery & Pastries
                </Link>
              </li>
            </ul>
          </div>

          {/* Reference & Tools */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-editorial-300">
              Reference & Tools
            </h3>
            <ul className="space-y-2 text-xs text-editorial-300">
              <li>
                <Link href="/prices" className="hover:text-white transition-colors">
                  Prices & Cost Analysis
                </Link>
              </li>
              <li>
                <Link href="/nutrition" className="hover:text-white transition-colors">
                  Nutrition & Calories
                </Link>
              </li>
              <li>
                <Link href="/starbucks-sizes" className="hover:text-white transition-colors">
                  Drink Sizes (Ounces & Shots)
                </Link>
              </li>
              <li>
                <Link href="/customization" className="hover:text-white transition-colors">
                  Customization & Milks
                </Link>
              </li>
              <li>
                <Link href="/seasonal-menu" className="hover:text-white transition-colors">
                  Seasonal & Holiday Menus
                </Link>
              </li>
              <li>
                <Link href="/starbucks-rewards" className="hover:text-white transition-colors">
                  Starbucks Rewards Guide
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white transition-colors">
                  Store Types & Locations
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-white transition-colors">
                  Editorial Guides & Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Legal */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-editorial-300">
              Editorial & Legal
            </h3>
            <ul className="space-y-2 text-xs text-editorial-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Starbucks Menu
                </Link>
              </li>
              <li>
                <Link href="/editorial-policy" className="hover:text-white transition-colors">
                  Editorial Policy
                </Link>
              </li>
              <li>
                <Link href="/data-methodology" className="hover:text-white transition-colors">
                  Data Methodology
                </Link>
              </li>
              <li>
                <Link href="/corrections" className="hover:text-white transition-colors">
                  Submit a Correction
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Editorial Team
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Independent Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Independent Publication Notice Banner */}
        <div className="mt-12 rounded-2xl border border-editorial-800 bg-editorial-900/90 p-6 text-xs text-editorial-200 leading-relaxed space-y-2">
          <p className="font-semibold text-white">
            Independent Informational Website Notice
          </p>
          <p>
            This is an independent informational website and is not affiliated with, sponsored by, or endorsed by Starbucks Coffee Company. Starbucks®, Frappuccino®, Starbucks Refreshers®, and related trademarks belong to their respective owners.
          </p>
          <p className="text-[11px] text-editorial-400">
            Prices, nutritional metrics, and product availability are compiled independently for informational purposes and can vary significantly by regional market, franchise license format, customization, and time. Always verify current prices and allergen details directly through official Starbucks ordering channels or at your local store.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-editorial-900 flex flex-col sm:flex-row items-center justify-between text-xs text-editorial-400 gap-4">
          <p>© {currentYear} Starbucks Menu. All rights reserved. Independent Digital Food Publication.</p>
          <div className="flex items-center gap-6 text-[11px]">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
