import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Coffee, Flame, Sparkles, CheckCircle2, ShieldAlert, ArrowRight, Clock, Scale, Info, Utensils, Heart } from "lucide-react";
import { MENU_CATEGORIES } from "@/data/menu-categories";
import { MENU_ITEMS } from "@/data/menu-items";
import { GUIDE_ARTICLES } from "@/data/guides";
import { FAQS_DATA } from "@/data/faqs";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MenuItemCard } from "@/components/MenuItemCard";
import { MenuItemVisual } from "@/components/MenuItemVisual";
import { NutritionTable } from "@/components/NutritionTable";
import { PriceInformation } from "@/components/PriceInformation";
import { FAQSection } from "@/components/FAQSection";
import { RelatedContent } from "@/components/RelatedContent";
import { AdSlot, TopContentAd, InContentAd, SidebarAd, BeforeFAQAd } from "@/components/AdSlot";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { SourceNote } from "@/components/SourceNote";
import { JsonLd } from "@/components/JsonLd";

interface PageProps {
  params: { slug: string };
}

// Generate static params for all categories and items for fast static rendering
export function generateStaticParams() {
  const categorySlugs = MENU_CATEGORIES.map((c) => ({ slug: c.slug }));
  const itemSlugs = MENU_ITEMS.map((i) => ({ slug: i.slug }));
  return [...categorySlugs, ...itemSlugs];
}

// Generate Dynamic Metadata
export function generateMetadata({ params }: PageProps): Metadata {
  const category = MENU_CATEGORIES.find((c) => c.slug === params.slug);
  if (category) {
    return {
      title: category.seoTitle,
      description: category.seoDescription,
      alternates: {
        canonical: `https://www.starbucks-menu.com/menu/${category.slug}`,
      },
    };
  }

  const item = MENU_ITEMS.find((i) => i.slug === params.slug);
  if (item) {
    return {
      title: item.seoTitle,
      description: item.seoDescription,
      alternates: {
        canonical: `https://www.starbucks-menu.com/menu/${item.slug}`,
      },
    };
  }

  return {
    title: "Menu Item or Category Not Found",
  };
}

export default function MenuDynamicPage({ params }: PageProps) {
  const category = MENU_CATEGORIES.find((c) => c.slug === params.slug);
  const item = MENU_ITEMS.find((i) => i.slug === params.slug);

  if (!category && !item) {
    notFound();
  }

  // ==========================================
  // 1. RENDER CATEGORY PAGE
  // ==========================================
  if (category) {
    const itemsInCategory = MENU_ITEMS.filter((i) => i.category === category.slug);
    const relatedCategories = MENU_CATEGORIES.filter((c) => c.slug !== category.slug).slice(0, 3);
    const categoryFaqs = FAQS_DATA.filter((f) =>
      category.type === "drinks" ? ["Nutrition", "Sizes", "Prices", "Customization"].includes(f.category) : ["Nutrition", "Prices"].includes(f.category)
    ).slice(0, 4);

    const categorySchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: category.name,
      description: category.description,
      url: `https://www.starbucks-menu.com/menu/${category.slug}`,
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.starbucks-menu.com" },
          { "@type": "ListItem", position: 2, name: "Menu", item: "https://www.starbucks-menu.com/starbucks-menu" },
          { "@type": "ListItem", position: 3, name: category.name, item: `https://www.starbucks-menu.com/menu/${category.slug}` }
        ]
      }
    };

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8 sm:pt-3.5 sm:pb-10 space-y-6 sm:space-y-8">
        <JsonLd data={categorySchema} />

        {/* Top Header Block */}
        <div className="space-y-2">
          <Breadcrumbs
            items={[
              { label: "Menu", href: "/starbucks-menu" },
              { label: category.name },
            ]}
          />

          {/* Category Hero Header */}
          <div className="max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-editorial-100 text-editorial-800 text-xs font-semibold">
              <Coffee className="h-3.5 w-3.5" />
              <span>Category Guide • {category.type === "drinks" ? "Handcrafted Drinks" : "Food & Pastries"}</span>
            </div>
            <h1 className="font-serif font-black text-3xl sm:text-5xl text-editorial-950 tracking-tight">
              {category.name}
            </h1>
            <p className="text-sm sm:text-base text-slatewarm-700 leading-relaxed font-normal">
              {category.description}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="bg-white p-3 rounded-2xl border border-slatewarm-200">
                <span className="text-slatewarm-500 block text-[11px]">Typical Reference Price:</span>
                <span className="font-bold text-slatewarm-900 text-sm">{category.priceRange}</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-slatewarm-200">
                <span className="text-slatewarm-500 block text-[11px]">Calorie Spectrum:</span>
                <span className="font-bold text-slatewarm-900 text-sm">{category.avgCalories}</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-slatewarm-200 col-span-2 sm:col-span-1">
                <span className="text-slatewarm-500 block text-[11px]">Available Items:</span>
                <span className="font-bold text-slatewarm-900 text-sm">{category.popularItemsCount} Offerings</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Overview Facts */}
        <div className="rounded-3xl border border-slatewarm-200 bg-white p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="font-serif font-bold text-xl text-slatewarm-900">
            What to Know About {category.shortName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slatewarm-700 leading-relaxed">
            {category.overviewContent.map((point, idx) => (
              <div key={idx} className="bg-editorial-50/50 p-4 rounded-2xl border border-editorial-100 flex flex-col justify-between">
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AdSlot */}
        <InContentAd />

        {/* Menu Items Grid */}
        <section className="space-y-6">
          <div className="border-b border-slatewarm-200 pb-3">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slatewarm-900 tracking-tight">
              Featured {category.shortName} Items & Details
            </h2>
            <p className="text-xs sm:text-sm text-slatewarm-600 mt-1">
              Explore ingredients, verified nutrition data, reference pricing, and barista customizations.
            </p>
          </div>

          {itemsInCategory.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itemsInCategory.map((it) => (
                <MenuItemCard key={it.id} item={it} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-slatewarm-200 bg-white p-8 text-center space-y-3">
              <Coffee className="h-8 w-8 text-editorial-600 mx-auto" />
              <h3 className="font-serif font-bold text-lg text-slatewarm-900">
                Detailed Menu Profiles Being Compiled
              </h3>
              <p className="text-xs text-slatewarm-600 max-w-md mx-auto">
                Individual nutritional matrices for this category are being formatted according to our verified editorial methodology.
              </p>
            </div>
          )}
        </section>

        {/* Ordering Tips Card */}
        <section className="rounded-3xl border border-editorial-200 bg-editorial-50/60 p-6 sm:p-8 space-y-4">
          <h3 className="font-serif font-bold text-xl text-editorial-950 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-editorial-600" />
            Barista Ordering Tips for {category.shortName}
          </h3>
          <ul className="space-y-2 text-xs text-slatewarm-800">
            {category.orderingTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-editorial-600 font-bold">•</span>
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Related Categories */}
        <section className="space-y-6">
          <h3 className="font-serif font-bold text-2xl text-slatewarm-900 tracking-tight">
            Explore Related Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCategories.map((rc) => (
              <Link
                key={rc.id}
                href={`/menu/${rc.slug}`}
                className="group p-5 rounded-2xl border border-slatewarm-200 bg-white hover:border-editorial-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-serif font-bold text-base text-slatewarm-900 group-hover:text-editorial-700 transition-colors">
                    {rc.name}
                  </h4>
                  <p className="text-xs text-slatewarm-600 line-clamp-2 mt-1">
                    {rc.tagline}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-editorial-700 mt-4">
                  <span>Explore {rc.shortName}</span>
                  <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform text-editorial-600" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <FAQSection faqs={categoryFaqs} title={`${category.shortName} FAQs`} />

        {/* Verification Note */}
        <SourceNote
          sourceName="Standard Starbucks US Recipe & Disclosed Nutritional Metrics"
          lastVerified="2026-04-12"
        />

        <DisclaimerNotice />
      </div>
    );
  }

  // ==========================================
  // 2. RENDER INDIVIDUAL MENU ITEM PAGE
  // ==========================================
  if (item) {
    const parentCategory = MENU_CATEGORIES.find((c) => c.slug === item.category);
    const relatedItemSlugs = MENU_ITEMS.filter((i) => i.category === item.category && i.slug !== item.slug).map((i) => i.slug);

    const itemFaqs = [
      {
        question: `How many calories are in a Grande ${item.name}?`,
        answer: `A standard Grande serving of ${item.name} contains approximately ${item.calories} calories, ${item.fat}g fat, ${item.sugar}g sugar, and ${item.caffeine}mg caffeine based on standard default preparation.`
      },
      {
        question: `Can I customize ${item.name} with plant milk?`,
        answer: `Yes. You can customize this beverage with Oatmilk, Almondmilk, Coconutmilk, or Soymilk. Note that modifying milk changes calories and sugar content.`
      },
      {
        question: `What is the typical price for ${item.name}?`,
        answer: `The typical reference price is ${item.price}. Prices can vary by regional store tier, airport/grocery licensing, and customizations.`
      }
    ];

    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: item.name,
      description: item.description,
      brand: {
        "@type": "Brand",
        name: "Starbucks"
      },
      offers: {
        "@type": "Offer",
        price: item.price.replace(/[^0-9.]/g, "") || "5.95",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31"
      }
    };

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8 sm:pt-3.5 sm:pb-10 space-y-6 sm:space-y-8">
        <JsonLd data={productSchema} />

        {/* Top Header Block */}
        <div className="space-y-2">
          <Breadcrumbs
            items={[
              { label: "Menu", href: "/starbucks-menu" },
              { label: parentCategory?.shortName || "Category", href: `/menu/${item.category}` },
              { label: item.name },
            ]}
          />

          {/* H1 & Top Intro with Product Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-editorial-100 text-editorial-800">
                  {item.subcategory}
                </span>
              {item.availabilityStatus === "seasonal" && (
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
                  <Sparkles className="h-3 w-3 text-amber-600" /> Seasonal Release
                </span>
              )}
              {item.isVeganFriendly && (
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Plant-Based Recipe
                </span>
              )}
            </div>

            <h1 className="font-serif font-black text-3xl sm:text-5xl text-editorial-950 tracking-tight">
              {item.name}
            </h1>

            <p className="text-sm sm:text-base text-slatewarm-700 leading-relaxed font-normal">
              {item.description}
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slatewarm-600">
              <span className="font-bold text-editorial-900 text-base">{item.price}</span>
              <span>•</span>
              <span>Default Serving: <strong>{item.standardServing}</strong></span>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-slatewarm-200 bg-white p-3 shadow-sm overflow-hidden">
              <MenuItemVisual slug={item.slug} name={item.name} category={item.category} />
            </div>
          </div>
        </div>

        {/* Quick Facts Card */}
        <div className="rounded-3xl border border-slatewarm-200 bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="font-serif font-bold text-xl text-slatewarm-900 mb-4">
            Quick Facts & Nutritional Snapshot
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            <div className="bg-slatewarm-50/80 p-3 rounded-2xl border border-slatewarm-200">
              <span className="text-slatewarm-500 block text-[10px] uppercase font-bold">Standard Size</span>
              <span className="font-bold text-slatewarm-900 text-xs sm:text-sm">{item.standardServing}</span>
            </div>
            <div className="bg-slatewarm-50/80 p-3 rounded-2xl border border-slatewarm-200">
              <span className="text-slatewarm-500 block text-[10px] uppercase font-bold">Calories</span>
              <span className="font-bold text-slatewarm-900 text-xs sm:text-sm">{item.calories} kcal</span>
            </div>
            <div className="bg-slatewarm-50/80 p-3 rounded-2xl border border-slatewarm-200">
              <span className="text-slatewarm-500 block text-[10px] uppercase font-bold">Total Sugar</span>
              <span className="font-bold text-editorial-700 text-xs sm:text-sm">{item.sugar}g</span>
            </div>
            <div className="bg-slatewarm-50/80 p-3 rounded-2xl border border-slatewarm-200">
              <span className="text-slatewarm-500 block text-[10px] uppercase font-bold">Caffeine</span>
              <span className="font-bold text-slatewarm-900 text-xs sm:text-sm">{item.caffeine}mg</span>
            </div>
            <div className="bg-slatewarm-50/80 p-3 rounded-2xl border border-slatewarm-200">
              <span className="text-slatewarm-500 block text-[10px] uppercase font-bold">Total Fat</span>
              <span className="font-bold text-slatewarm-900 text-xs sm:text-sm">{item.fat}g</span>
            </div>
            <div className="bg-slatewarm-50/80 p-3 rounded-2xl border border-slatewarm-200">
              <span className="text-slatewarm-500 block text-[10px] uppercase font-bold">Protein</span>
              <span className="font-bold text-slatewarm-900 text-xs sm:text-sm">{item.protein}g</span>
            </div>
          </div>
        </div>
      </div>

        {/* Main 2-Column Content: Left = Nutrition & Facts, Right = Price & Ordering */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (Nutrition & Ingredients) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Detailed Nutrition Table */}
            <section className="space-y-4">
              <h2 className="font-serif font-bold text-2xl text-slatewarm-900 tracking-tight">
                Verified Nutrition Facts
              </h2>
              <NutritionTable
                standardServing={item.standardServing}
                calories={item.calories}
                fat={item.fat}
                saturatedFat={item.saturatedFat}
                carbohydrates={item.carbohydrates}
                sugar={item.sugar}
                protein={item.protein}
                caffeine={item.caffeine}
                sodium={item.sodium}
                sizeOptions={item.sizeOptions}
              />
            </section>

            {/* Top Content Ad */}
            <TopContentAd />

            {/* Ingredients & Allergen Disclosures */}
            <section className="rounded-3xl border border-slatewarm-200 bg-white p-6 sm:p-8 space-y-5 shadow-sm">
              <h3 className="font-serif font-bold text-xl text-slatewarm-900">
                Ingredients & Allergen Disclosures
              </h3>
              <div className="space-y-3 text-xs text-slatewarm-700 leading-relaxed">
                <div>
                  <p className="font-bold text-slatewarm-900 mb-1">Standard Ingredients:</p>
                  <p className="bg-slatewarm-50 p-3 rounded-xl border border-slatewarm-100 font-mono text-[11px]">
                    {item.ingredientsSummary}
                  </p>
                </div>
                <div className="pt-2">
                  <p className="font-bold text-amber-900 mb-1 flex items-center gap-1.5">
                    <ShieldAlert className="h-4 w-4 text-amber-600" />
                    Allergen Statement:
                  </p>
                  <p className="text-amber-800 bg-amber-50/70 p-3 rounded-xl border border-amber-200">
                    {item.allergenNote} Shared preparation equipment and steaming wands mean allergen cross-contact risks cannot be completely eliminated.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column (Price, Customization & Ordering advice) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Price Information */}
            <PriceInformation
              price={item.price}
              priceNote={item.priceNote}
              categoryName={parentCategory?.name}
            />

            {/* Customization Tips */}
            <div className="rounded-3xl border border-slatewarm-200 bg-white p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="font-serif font-bold text-xl text-slatewarm-900 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-editorial-600" />
                Customization & Ordering Tips
              </h3>
              <ul className="space-y-2 text-xs text-slatewarm-700">
                {item.customizationTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-editorial-600 font-bold">•</span>
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What to Know Before Ordering */}
            <div className="rounded-3xl border border-slatewarm-200 bg-slatewarm-50 p-6 sm:p-8 space-y-4">
              <h3 className="font-serif font-bold text-xl text-slatewarm-900 flex items-center gap-2">
                <Info className="h-5 w-5 text-editorial-600" />
                What to Know Before Ordering
              </h3>
              <ul className="space-y-2 text-xs text-slatewarm-700">
                {item.whatToKnowBeforeOrdering.map((info, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-editorial-600 font-bold">•</span>
                    <span className="leading-relaxed">{info}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar Ad Placeholder */}
            <SidebarAd />
          </div>
        </div>

        {/* In-Content Ad */}
        <InContentAd />

        {/* Related Content & Internal Linking */}
        <RelatedContent
          categorySlug={item.category}
          relatedItemSlugs={relatedItemSlugs}
        />

        {/* FAQs for Item */}
        <FAQSection faqs={itemFaqs} title={`${item.name} FAQs`} />

        {/* Source & Last Verified */}
        <SourceNote
          sourceName={item.sourceName}
          sourceUrl={item.sourceUrl}
          lastVerified={item.lastVerified}
          lastUpdated={item.lastUpdated}
        />

        <DisclaimerNotice />
      </div>
    );
  }

  return notFound();
}
