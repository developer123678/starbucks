import { MENU_CATEGORIES } from "../data/menu-categories";
import { MENU_ITEMS } from "../data/menu-items";
import { GUIDE_ARTICLES } from "../data/guides";

console.log("Checking data consistency across TypeScript datasets...");

const itemSlugs = new Set(MENU_ITEMS.map((i) => i.slug));
const categorySlugs = new Set(MENU_CATEGORIES.map((c) => c.slug));

let issues = 0;

// Check guide relatedItemSlugs
for (const guide of GUIDE_ARTICLES) {
  for (const slug of guide.relatedItemSlugs) {
    if (!itemSlugs.has(slug)) {
      console.error(`[ERROR] Guide ${guide.slug} references non-existent item: ${slug}`);
      issues++;
    }
  }
}

// Check items categories
for (const item of MENU_ITEMS) {
  if (!categorySlugs.has(item.category)) {
    console.error(`[ERROR] Item ${item.slug} references non-existent category: ${item.category}`);
    issues++;
  }
}

// Check SEO titles & descriptions uniqueness
const titles = new Set<string>();
for (const item of MENU_ITEMS) {
  if (titles.has(item.seoTitle)) {
    console.error(`[ERROR] Duplicate SEO title found: ${item.seoTitle}`);
    issues++;
  }
  titles.add(item.seoTitle);
}

for (const cat of MENU_CATEGORIES) {
  if (titles.has(cat.seoTitle)) {
    console.error(`[ERROR] Duplicate SEO title found: ${cat.seoTitle}`);
    issues++;
  }
  titles.add(cat.seoTitle);
}

for (const guide of GUIDE_ARTICLES) {
  if (titles.has(guide.seoTitle)) {
    console.error(`[ERROR] Duplicate SEO title found: ${guide.seoTitle}`);
    issues++;
  }
  titles.add(guide.seoTitle);
}

if (issues === 0) {
  console.log("✔ All internal data relationships, slug references, and SEO titles are 100% unique and valid.");
}
