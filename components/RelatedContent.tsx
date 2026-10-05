import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Coffee, HelpCircle } from "lucide-react";
import { MENU_ITEMS } from "@/data/menu-items";
import { GUIDE_ARTICLES } from "@/data/guides";
import { MenuItemCard } from "./MenuItemCard";
import { ArticleCard } from "./ArticleCard";

interface RelatedContentProps {
  categorySlug?: string;
  relatedItemSlugs?: string[];
  relatedGuideSlugs?: string[];
}

export function RelatedContent({
  categorySlug,
  relatedItemSlugs = [],
  relatedGuideSlugs = [],
}: RelatedContentProps) {
  const items = MENU_ITEMS.filter((item) =>
    relatedItemSlugs.length > 0
      ? relatedItemSlugs.includes(item.slug)
      : categorySlug
      ? item.category === categorySlug
      : false
  ).slice(0, 3);

  const guides = GUIDE_ARTICLES.filter((g) =>
    relatedGuideSlugs.length > 0 ? relatedGuideSlugs.includes(g.slug) : true
  ).slice(0, 2);

  return (
    <div className="space-y-12 my-12">
      {/* Related Menu Items */}
      {items.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-roast tracking-tight">
                Related Handcrafted Offerings
              </h3>
              <p className="text-xs text-slatewarm-600 mt-1">
                Explore similar drinks and food in this taste profile.
              </p>
            </div>
            <Link
              href="/starbucks-menu"
              className="text-xs font-semibold text-editorial-700 hover:text-editorial-900 hidden sm:flex items-center gap-1"
            >
              <span>View All Menu</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}

      {/* Related Guides */}
      {guides.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-roast tracking-tight">
                Helpful Editorial Guides
              </h3>
              <p className="text-xs text-slatewarm-600 mt-1">
                Expert consumer advice on ordering, sizes, nutrition, and pricing.
              </p>
            </div>
            <Link
              href="/guides"
              className="text-xs font-semibold text-editorial-700 hover:text-editorial-900 hidden sm:flex items-center gap-1"
            >
              <span>Browse All Guides</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <ArticleCard key={guide.slug} article={guide} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
