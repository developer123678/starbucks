"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  MapPin,
  Building2,
  Plane,
  ShoppingBag,
  ExternalLink,
  Sparkles,
  Search,
  Filter,
  Car,
  Zap,
  Coffee,
  CheckCircle2,
  Clock,
  ShieldAlert,
  Compass
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { AdSlot, InContentAd } from "@/components/AdSlot";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { SourceNote } from "@/components/SourceNote";

interface MetroLocation {
  id: string;
  name: string;
  state: string;
  region: "Northeast" | "West Coast" | "Midwest" | "South" | "Southwest";
  storeDensity: string;
  popularFormats: string[];
  keyFeatures: string[];
  specialtyNotes: string;
  referencePricingTier: "Standard Tier" | "High Cost Urban Tier" | "Concession / Resort Tier";
}

const METRO_LOCATIONS: MetroLocation[] = [
  {
    id: "nyc",
    name: "New York City & Metro",
    state: "NY / NJ",
    region: "Northeast",
    storeDensity: "350+ Stores",
    popularFormats: ["High-Density Urban Walk-Up", "Mobile Order Rapid Pickup", "Reserve Roastery"],
    keyFeatures: ["Mobile Order Shelves", "Reserve Bar (Meatpacking)", "Transit Hub Stores (Penn/Grand Central)"],
    specialtyNotes: "Home to the multi-level Starbucks Reserve Roastery in Meatpacking District. Urban street cafes feature dedicated mobile order pickup shelves for fast commuter throughput.",
    referencePricingTier: "High Cost Urban Tier"
  },
  {
    id: "la",
    name: "Los Angeles & Orange County",
    state: "CA",
    region: "West Coast",
    storeDensity: "500+ Stores",
    popularFormats: ["Dual-Lane Drive-Thru", "Suburban Patio Cafes", "Licensed Grocery (Target/Vons)"],
    keyFeatures: ["Drive-Thru Ordering", "Outdoor Patio Seating", "EV Fast Charging Pilot", "Nitro Cold Brew on Tap"],
    specialtyNotes: "Extensive drive-thru locations along major corridors. High cold drink and iced espresso volume year-round, with numerous EV charging hub installations.",
    referencePricingTier: "High Cost Urban Tier"
  },
  {
    id: "chicago",
    name: "Chicago & Chicagoland",
    state: "IL",
    region: "Midwest",
    storeDensity: "300+ Stores",
    popularFormats: ["Downtown Multi-Story Cafes", "Suburban Drive-Thrus", "Reserve Roastery"],
    keyFeatures: ["World's Largest Reserve Roastery (Michigan Ave)", "Loop Commuter Hubs", "O'Hare Airport Concessions"],
    specialtyNotes: "Features the flagship 5-story Starbucks Reserve Roastery on North Michigan Avenue, offering exclusive barrel-aged coffee creations and artisanal Princi bakery items.",
    referencePricingTier: "Standard Tier"
  },
  {
    id: "seattle",
    name: "Seattle & Puget Sound",
    state: "WA",
    region: "West Coast",
    storeDensity: "180+ Stores",
    popularFormats: ["Historic Heritage Stores", "Reserve Roastery (Capitol Hill)", "Neighborhood Cafes"],
    keyFeatures: ["Original Pike Place Market Store (1971)", "First Reserve Roastery", "Corporate Innovation Pilots"],
    specialtyNotes: "Starbucks founding market. Visit the historic Original Pike Place store (retaining vintage 1971 exterior) and the original Capitol Hill Starbucks Reserve Roastery.",
    referencePricingTier: "Standard Tier"
  },
  {
    id: "dfw",
    name: "Dallas-Fort Worth Metroplex",
    state: "TX",
    region: "South",
    storeDensity: "360+ Stores",
    popularFormats: ["High-Capacity Drive-Thru", "Highway Travel Plazas", "Suburban Shopping Centers"],
    keyFeatures: ["Dual Drive-Thru Lanes", "DFW Airport Terminals", "Shaded Patio Spaces"],
    specialtyNotes: "Dominated by modern, large-footprint drive-thru locations designed for high vehicle volume and rapid cold beverage dispensing.",
    referencePricingTier: "Standard Tier"
  },
  {
    id: "atlanta",
    name: "Atlanta Metropolitan Area",
    state: "GA",
    region: "South",
    storeDensity: "230+ Stores",
    popularFormats: ["Suburban Drive-Thru", "Hartsfield-Jackson Airport Hubs", "University Campus Stores"],
    keyFeatures: ["Airport Concession Plazas", "Drive-Thru", "Campus Partner Kiosks"],
    specialtyNotes: "Hartsfield-Jackson International Airport features numerous concourse kiosks operated under concession licenses. Suburban locations offer spacious drive-thru layouts.",
    referencePricingTier: "Standard Tier"
  },
  {
    id: "sf",
    name: "San Francisco Bay Area",
    state: "CA",
    region: "West Coast",
    storeDensity: "250+ Stores",
    popularFormats: ["Urban Walk-Up", "Silicon Valley Tech Corridors", "Transit Centers"],
    keyFeatures: ["Mobile Order Rapid Pickup", "Plant-Based Beverage Specials", "BART / Caltrain Hubs"],
    specialtyNotes: "High mobile order adoption rate with streamlined pickup counters. Strong consumer preference for alternative plant milks (oat, almond, soy).",
    referencePricingTier: "High Cost Urban Tier"
  },
  {
    id: "miami",
    name: "Miami & South Florida",
    state: "FL",
    region: "South",
    storeDensity: "190+ Stores",
    popularFormats: ["Resort & Beach Walk-In", "Drive-Thru", "MIA Airport Kiosks"],
    keyFeatures: ["High Iced Drink Volume", "Outdoor Shaded Seating", "Tourism Corridors"],
    specialtyNotes: "Tropical climate drives high sales of Refreshers, Iced Shaken Espressos, and Cold Brew. Airport and South Beach resort locations carry concession pricing tiers.",
    referencePricingTier: "Concession / Resort Tier"
  },
  {
    id: "boston",
    name: "Boston & Greater New England",
    state: "MA",
    region: "Northeast",
    storeDensity: "170+ Stores",
    popularFormats: ["Historic Brick Brownstone Cafes", "University Campus Hubs", "Transit Stations"],
    keyFeatures: ["MBTA Station Locations", "College Town Stores", "Cold Brew on Tap"],
    specialtyNotes: "Features unique architectural adaptations within historic New England brownstones and dense university campus settings (Cambridge, Back Bay, Seaport).",
    referencePricingTier: "Standard Tier"
  },
  {
    id: "denver",
    name: "Denver & Colorado Front Range",
    state: "CO",
    region: "Southwest",
    storeDensity: "150+ Stores",
    popularFormats: ["Mountain Corridor Drive-Thru", "Downtown LoDo Cafes", "DIA Airport Hub"],
    keyFeatures: ["Nitro Cold Brew on Tap", "Ski Corridor Stops (I-70)", "Spacious Workspaces"],
    specialtyNotes: "High concentration of Nitro Cold Brew taps and drive-thrus along mountain transit routes serving weekend commuters and winter recreation travelers.",
    referencePricingTier: "Standard Tier"
  },
  {
    id: "phoenix",
    name: "Phoenix & Valley of the Sun",
    state: "AZ",
    region: "Southwest",
    storeDensity: "210+ Stores",
    popularFormats: ["Air-Conditioned Drive-Thru", "Freeway Travel Center Hubs", "Resort Kiosks"],
    keyFeatures: ["Dual Drive-Thru Canopies", "Extended Summer Night Hours", "Iced Beverage Stations"],
    specialtyNotes: "Extreme summer heat creates exceptionally high volume for iced coffees, Frappuccinos, and Refreshers, with covered drive-thru order canopies.",
    referencePricingTier: "Standard Tier"
  },
  {
    id: "dc",
    name: "Washington, D.C. & Capital Region",
    state: "DC / MD / VA",
    region: "Northeast",
    storeDensity: "210+ Stores",
    popularFormats: ["Government District Cafes", "Signing Store (H Street)", "Metro Station Kiosks"],
    keyFeatures: ["H Street ASL Signing Store", "Metro Transit Locations", "Mobile Order Shelves"],
    specialtyNotes: "Home to the pioneering Starbucks Signing Store on H Street NE, staffed by Deaf, hard of hearing, and hearing baristas fluent in American Sign Language (ASL).",
    referencePricingTier: "High Cost Urban Tier"
  }
];

export default function LocationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("All");

  const filteredLocations = useMemo(() => {
    return METRO_LOCATIONS.filter((loc) => {
      const matchesSearch =
        loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        loc.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
        loc.popularFormats.some((f) => f.toLowerCase().includes(searchTerm.toLowerCase())) ||
        loc.keyFeatures.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesRegion = selectedRegion === "All" || loc.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }, [searchTerm, selectedRegion]);

  const locationFaqs = [
    {
      question: "How do I find real-time store hours and mobile ordering status?",
      answer:
        "Because store hours, holiday schedules, and barista staffing can shift on a daily basis, always consult the official Starbucks Store Locator on starbucks.com/store-locator or inside the official Starbucks mobile app. The official app displays live mobile order readiness and queue wait times."
    },
    {
      question: "What is the difference between company-operated and licensed Starbucks stores?",
      answer:
        "Company-operated stores are owned and managed directly by corporate Starbucks, following standard pricing tiers and full Rewards redemption. Licensed stores (located inside Target, grocery supermarkets, airports, universities, and hotels) are operated by partner companies and may have slightly different pricing or customized local promotions."
    },
    {
      question: "Can I use the Starbucks mobile app and earn Stars at grocery and airport stores?",
      answer:
        "Yes, the vast majority of licensed Starbucks locations inside Target, major grocery stores (Safeway, Kroger, Ralphs), and US airport concourses allow you to scan your member barcode to earn Stars and pay with Starbucks gift cards."
    },
    {
      question: "What is a Starbucks Reserve Roastery and where are they located?",
      answer:
        "Starbucks Reserve Roasteries are large-format experiential flagships offering small-lot Reserve coffees roasted on-site, artisanal Princi bakery food, coffee mixology flights, and educational tasting tours. In the United States, Reserve Roasteries are located in Seattle (Capitol Hill), Chicago (Michigan Ave), and New York City (Meatpacking District)."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8 sm:pt-3.5 sm:pb-10 space-y-6 sm:space-y-8">
      {/* Top Header Block */}
      <div className="space-y-2">
        <Breadcrumbs items={[{ label: "Locations" }]} />
        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-editorial-100 text-editorial-800 text-xs font-semibold">
            <MapPin className="h-3.5 w-3.5" />
            <span>Independent Store & Market Guide</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-5xl text-editorial-950 tracking-tight">
            Starbucks Locations & Store Formats
          </h1>
          <p className="text-sm sm:text-base text-slatewarm-700 leading-relaxed font-normal">
            An independent consumer reference guide to Starbucks store formats, regional market densities, licensing structures, and ordering features across the United States.
          </p>
        </div>
      </div>

      {/* Official Locator Disclaimer Banner */}
      <div className="rounded-3xl border border-editorial-200 bg-white p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-editorial-600 animate-pulse"></span>
            <h2 className="font-serif font-bold text-xl text-editorial-950">
              Need Real-Time Store Hours & Live Directions?
            </h2>
          </div>
          <p className="text-xs text-slatewarm-600 leading-relaxed">
            Starbucks Menu is an independent informational publication. We do not invent store hours or individual phone numbers. To check live operating hours, drive-thru status, and mobile order availability for a specific store today, please visit the official Starbucks Store Locator.
          </p>
        </div>
        <a
          href="https://www.starbucks.com/store-locator"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-editorial-800 text-white text-xs font-semibold hover:bg-editorial-700 transition-colors shrink-0 shadow-sm"
        >
          <span>Starbucks Store Locator</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {/* Store Format Architecture Comparison */}
      <section className="space-y-6">
        <div className="border-b border-slatewarm-200 pb-3">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slatewarm-900 tracking-tight">
            Understanding Starbucks Retail Formats
          </h2>
          <p className="text-xs sm:text-sm text-slatewarm-600 mt-1">
            How menu offerings, pricing, mobile ordering, and rewards redemption differ across retail environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company-Operated */}
          <div className="rounded-3xl border border-slatewarm-200 bg-white p-6 space-y-3 shadow-sm hover:border-editorial-500 transition-all">
            <div className="w-10 h-10 rounded-xl bg-editorial-100 flex items-center justify-center text-editorial-800">
              <Building2 className="h-5 w-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-slatewarm-900">
              Company-Operated Cafes
            </h3>
            <p className="text-xs text-slatewarm-600 leading-relaxed">
              Standard street cafes and drive-thrus managed directly by corporate Starbucks. Full mobile ordering, standard reference pricing, complete Rewards redemption, and free same-visit brewed coffee refills.
            </p>
          </div>

          {/* Drive-Thru Only / High Capacity */}
          <div className="rounded-3xl border border-slatewarm-200 bg-white p-6 space-y-3 shadow-sm hover:border-editorial-500 transition-all">
            <div className="w-10 h-10 rounded-xl bg-editorial-100 flex items-center justify-center text-editorial-800">
              <Car className="h-5 w-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-slatewarm-900">
              Dual-Lane Drive-Thru
            </h3>
            <p className="text-xs text-slatewarm-600 leading-relaxed">
              Modern suburban store formats optimized for drive-thru speed with dual order points, digital menu boards, and designated mobile order pickup windows.
            </p>
          </div>

          {/* Licensed Grocery */}
          <div className="rounded-3xl border border-slatewarm-200 bg-white p-6 space-y-3 shadow-sm hover:border-editorial-500 transition-all">
            <div className="w-10 h-10 rounded-xl bg-editorial-100 flex items-center justify-center text-editorial-800">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-slatewarm-900">
              Licensed Grocery Stores
            </h3>
            <p className="text-xs text-slatewarm-600 leading-relaxed">
              Operated under license inside Target, Safeway, Kroger, and Publix. Most accept the Starbucks app for earning Stars, but may occasionally run retail-partner specific promotions.
            </p>
          </div>

          {/* Airport Concessions */}
          <div className="rounded-3xl border border-slatewarm-200 bg-white p-6 space-y-3 shadow-sm hover:border-editorial-500 transition-all">
            <div className="w-10 h-10 rounded-xl bg-slatewarm-100 flex items-center justify-center text-slatewarm-800">
              <Plane className="h-5 w-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-slatewarm-900">
              Airport & Transit Plazas
            </h3>
            <p className="text-xs text-slatewarm-600 leading-relaxed">
              Located in airport terminals and tollway plazas operated by third-party concessionaires (such as HMSHost). Prices are typically 20-35% higher to cover concession fees.
            </p>
          </div>
        </div>
      </section>

      {/* In-Content Ad */}
      <InContentAd />

      {/* Interactive Metropolitan Markets Explorer */}
      <section className="space-y-6">
        <div className="border-b border-slatewarm-200 pb-3 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slatewarm-900 tracking-tight">
              Major US Metropolitan Market Explorer
            </h2>
            <p className="text-xs sm:text-sm text-slatewarm-600 mt-1">
              Explore regional store footprints, key features, and typical market pricing tiers.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="h-4 w-4 text-slatewarm-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search city, state, or feature..."
                className="pl-9 pr-4 py-2 rounded-xl border border-slatewarm-300 bg-white text-xs text-slatewarm-900 focus:border-editorial-500 focus:outline-none w-56 sm:w-64"
              />
            </div>

            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="py-2 px-3 rounded-xl border border-slatewarm-300 bg-white text-xs text-slatewarm-800 focus:border-editorial-500 focus:outline-none"
            >
              <option value="All">All Regions</option>
              <option value="Northeast">Northeast</option>
              <option value="West Coast">West Coast</option>
              <option value="Midwest">Midwest</option>
              <option value="South">South</option>
              <option value="Southwest">Southwest</option>
            </select>
          </div>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((loc) => (
            <div
              key={loc.id}
              className="rounded-3xl border border-slatewarm-200 bg-white p-6 space-y-4 shadow-sm hover:border-editorial-500 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-editorial-100 text-editorial-800">
                      {loc.region}
                    </span>
                    <h3 className="font-serif font-bold text-xl text-slatewarm-900 mt-1">
                      {loc.name}
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-slatewarm-500 bg-slatewarm-100 px-2.5 py-1 rounded-full shrink-0">
                    {loc.storeDensity}
                  </span>
                </div>

                <p className="text-xs text-slatewarm-600 leading-relaxed">
                  {loc.specialtyNotes}
                </p>

                {/* Key Features */}
                <div className="space-y-1.5 pt-2 border-t border-slatewarm-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slatewarm-500 block">
                    Key Features & Formats:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {loc.keyFeatures.map((feat, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slatewarm-50 text-slatewarm-700 border border-slatewarm-200"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-slatewarm-100 pt-3 flex items-center justify-between text-[11px]">
                <span className="text-slatewarm-500">Economic Tier:</span>
                <span
                  className={`font-semibold px-2 py-0.5 rounded ${
                    loc.referencePricingTier === "High Cost Urban Tier"
                      ? "bg-amber-50 text-amber-800 border border-amber-200"
                      : loc.referencePricingTier === "Concession / Resort Tier"
                      ? "bg-purple-50 text-purple-800 border border-purple-200"
                      : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                  }`}
                >
                  {loc.referencePricingTier}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredLocations.length === 0 && (
          <div className="text-center py-12 rounded-3xl border border-dashed border-slatewarm-300 bg-white p-6 space-y-2">
            <p className="text-sm font-semibold text-slatewarm-700">No metropolitan markets found matching your search.</p>
            <p className="text-xs text-slatewarm-500">Try searching for a different state, city, or reset the region filter.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedRegion("All");
              }}
              className="mt-2 px-4 py-1.5 rounded-xl bg-editorial-100 text-editorial-800 text-xs font-semibold hover:bg-editorial-200 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Operating Amenities Guide */}
      <section className="rounded-3xl border border-editorial-200 bg-white p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="space-y-1">
          <h3 className="font-serif font-bold text-2xl text-editorial-950">
            Common In-Store Services & Amenities Guide
          </h3>
          <p className="text-xs sm:text-sm text-slatewarm-600">
            Features available across standard US company-operated Starbucks locations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-slatewarm-700 leading-relaxed">
          <div className="p-4 rounded-2xl bg-editorial-50/60 border border-editorial-100 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slatewarm-900 text-sm">
              <Zap className="h-4 w-4 text-editorial-700" />
              <span>Mobile Order & Pay Shelves</span>
            </div>
            <p>
              Designated in-store pickup counters where app orders are staged with customer name labels for seamless grab-and-go access without waiting in the register queue.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-editorial-50/60 border border-editorial-100 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slatewarm-900 text-sm">
              <Coffee className="h-4 w-4 text-editorial-700" />
              <span>Nitro Cold Brew on Tap</span>
            </div>
            <p>
              Specialized draft dispensing system that infuses cold brew coffee with micro-nitrogen bubbles, creating a creamy texture and frothy head without added dairy or sugar.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-editorial-50/60 border border-editorial-100 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slatewarm-900 text-sm">
              <CheckCircle2 className="h-4 w-4 text-editorial-700" />
              <span>Free In-Store Refills</span>
            </div>
            <p>
              Starbucks Rewards members who scan their app or Starbucks Card receive free refills of brewed coffee (hot or iced) and hot or iced tea during the same store visit.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection faqs={locationFaqs} title="Frequently Asked Questions About Starbucks Locations" />

      {/* Source Note & Disclaimer */}
      <SourceNote
        sourceName="Starbucks Store Licensing & Operating Disclosures"
        sourceUrl="https://www.starbucks.com/store-locator"
        lastVerified="April 2026"
      />

      <DisclaimerNotice />
    </div>
  );
}
