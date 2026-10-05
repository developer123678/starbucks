import { MetadataRoute } from "next";
import { MENU_CATEGORIES } from "@/data/menu-categories";
import { MENU_ITEMS } from "@/data/menu-items";
import { GUIDE_ARTICLES } from "@/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.starbucks-menu.com";
  const lastModified = new Date();

  // Core Static Routes
  const staticRoutes = [
    "",
    "/starbucks-menu",
    "/prices",
    "/nutrition",
    "/starbucks-sizes",
    "/customization",
    "/seasonal-menu",
    "/starbucks-rewards",
    "/locations",
    "/guides",
    "/faq",
    "/about",
    "/contact",
    "/editorial-policy",
    "/data-methodology",
    "/corrections",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: (route === "" || route === "/starbucks-menu" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1.0 : route === "/starbucks-menu" ? 0.9 : 0.8,
  }));

  // Menu Category Routes
  const categoryRoutes = MENU_CATEGORIES.map((cat) => ({
    url: `${baseUrl}/menu/${cat.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Individual Menu Item Routes
  const itemRoutes = MENU_ITEMS.map((item) => ({
    url: `${baseUrl}/menu/${item.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Editorial Guide Routes
  const guideRoutes = GUIDE_ARTICLES.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...itemRoutes, ...guideRoutes];
}
