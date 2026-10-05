import React from "react";
import { cn } from "@/lib/utils";

interface AdSlotProps {
  placement: "top-leaderboard" | "in-content" | "sidebar" | "before-faq" | "footer-banner";
  className?: string;
  label?: string;
}

/**
 * AdSlot Component:
 * AdSense-Ready Architecture.
 *
 * NOTE: No fake Google AdSense scripts or fabricated publisher IDs are injected.
 * The container maintains stable dimensions to prevent Cumulative Layout Shift (CLS)
 * in Core Web Vitals and displays a subtle, neutral development placeholder.
 */
export function AdSlot({ placement, className, label = "Advertisement" }: AdSlotProps) {
  const heightStyles = {
    "top-leaderboard": "min-h-[60px] md:min-h-[75px] max-w-4xl",
    "in-content": "min-h-[160px] md:min-h-[180px] max-w-3xl",
    "sidebar": "min-h-[200px] md:min-h-[300px] w-full",
    "before-faq": "min-h-[120px] md:min-h-[150px] max-w-4xl",
    "footer-banner": "min-h-[60px] md:min-h-[75px] max-w-4xl",
  }[placement];

  return (
    <aside
      aria-label={label}
      className={cn(
        "my-4 sm:my-6 mx-auto w-full flex flex-col items-center justify-center rounded-2xl border border-dashed border-slatewarm-300 bg-slatewarm-50/70 p-3 sm:p-4 transition-colors",
        heightStyles,
        className
      )}
    >
      <span className="text-[10px] font-semibold tracking-widest uppercase text-slatewarm-500 mb-2 select-none">
        {label}
      </span>
      <div className="flex flex-col items-center justify-center text-center text-xs text-slatewarm-600 max-w-sm px-4">
        <p className="font-semibold text-slatewarm-800 mb-0.5">Ad Space Placeholder</p>
        <p className="text-[11px] leading-tight text-slatewarm-500">
          Reserved responsive advertising slot for verified monetization. Ad scripts remain disabled during development.
        </p>
      </div>
    </aside>
  );
}

export function TopContentAd({ className }: { className?: string }) {
  return <AdSlot placement="top-leaderboard" className={className} />;
}

export function InContentAd({ className }: { className?: string }) {
  return <AdSlot placement="in-content" className={className} />;
}

export function SidebarAd({ className }: { className?: string }) {
  return <AdSlot placement="sidebar" className={className} />;
}

export function BeforeFAQAd({ className }: { className?: string }) {
  return <AdSlot placement="before-faq" className={className} />;
}
