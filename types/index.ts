export type DrinkSizeKey = "short" | "tall" | "grande" | "venti_hot" | "venti_cold" | "trenta" | "solo" | "doppio" | "triple" | "quad";

export interface SizeNutrition {
  size: string;
  volumeOz?: number;
  calories: number;
  sugarG: number;
  fatG: number;
  saturatedFatG?: number;
  carbsG: number;
  proteinG: number;
  caffeineMg: number;
  sodiumMg?: number;
  referencePrice?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory: string;
  description: string;
  shortDescription: string;
  availabilityStatus: "available" | "seasonal" | "limited" | "archived";
  seasonalTag?: "fall" | "holiday" | "spring" | "summer" | "year-round";
  
  // Pricing
  price: string;
  priceNote: string;
  
  // Standard Nutrition (typically Grande 16 fl oz or standard serving)
  standardServing: string;
  calories: number;
  fat: number;
  saturatedFat: number;
  carbohydrates: number;
  sugar: number;
  protein: number;
  caffeine: number;
  sodium: number;
  
  // Size Breakdown
  sizeOptions?: SizeNutrition[];
  
  // Ingredients & Allergens
  ingredientsSummary: string;
  allergenNote: string;
  isGlutenFreeClaimed?: boolean;
  isVeganFriendly?: boolean;
  isVegetarian?: boolean;
  isDairyFreeByDefault?: boolean;
  
  // Customization tips
  customizationTips: string[];
  
  // Ordering advice
  whatToKnowBeforeOrdering: string[];
  
  // Metadata & Sources
  sourceName: string;
  sourceUrl?: string;
  lastVerified: string;
  lastUpdated: string;
  featured?: boolean;
  popular?: boolean;
  
  // SEO
  seoTitle: string;
  seoDescription: string;
}

export interface MenuCategory {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  type: "drinks" | "food";
  iconName: string;
  heroExcerpt: string;
  popularItemsCount: number;
  avgCalories: string;
  priceRange: string;
  overviewContent: string[];
  orderingTips: string[];
  seoTitle: string;
  seoDescription: string;
}

export interface GuideArticle {
  slug: string;
  title: string;
  category: "Menu Overview" | "Ordering Tips" | "Nutrition & Diet" | "Sizes & Pricing" | "Customization" | "Rewards";
  readingTime: string;
  publishedDate: string;
  lastUpdated: string;
  authorRole: string;
  summary: string;
  contentSections: {
    heading: string;
    subheading?: string;
    paragraphs: string[];
    callout?: {
      type: "tip" | "warning" | "note";
      text: string;
    };
    tableData?: {
      headers: string[];
      rows: string[][];
    };
  }[];
  relatedItemSlugs: string[];
  relatedGuideSlugs: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  seoTitle: string;
  seoDescription: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Prices" | "Nutrition" | "Sizes" | "Customization" | "Rewards" | "Ordering";
}
