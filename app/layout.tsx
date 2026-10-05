import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.starbucks-menu.com"),
  title: {
    default: "Starbucks Menu — Independent Prices, Nutrition & Drinks Guide",
    template: "%s | Starbucks Menu",
  },
  description:
    "An independent informational guide providing reference prices, nutrition facts, calories, drink sizes, customization options, and ordering tips for the Starbucks menu.",
  keywords: [
    "Starbucks menu",
    "Starbucks prices",
    "Starbucks nutrition",
    "Starbucks calories",
    "Starbucks drink sizes",
    "Starbucks customization",
    "Starbucks rewards",
    "Starbucks seasonal menu",
  ],
  authors: [{ name: "Starbucks Menu Editorial Team" }],
  creator: "Starbucks Menu Editorial Team",
  publisher: "Starbucks Menu",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.starbucks-menu.com",
    siteName: "Starbucks Menu — Independent Guide",
    title: "Starbucks Menu — Independent Prices, Nutrition & Drinks Guide",
    description:
      "Comprehensive independent consumer guide to Starbucks drinks, food, reference pricing, calorie counts, sizes, and customizations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Starbucks Menu — Independent Prices, Nutrition & Drinks Guide",
    description:
      "Independent editorial analysis of Starbucks menus, reference prices, nutrition facts, and barista customization tips.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Starbucks Menu",
    url: "https://www.starbucks-menu.com",
    description:
      "Independent food-information publication and reference guide for Starbucks menu, pricing, nutrition, and ordering.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.starbucks-menu.com/starbucks-menu?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd data={websiteSchema} />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground selection:bg-editorial-200 selection:text-editorial-900">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
