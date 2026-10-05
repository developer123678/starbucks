import React from "react";
import { Info, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

interface DisclaimerNoticeProps {
  variant?: "banner" | "card" | "subtle" | "price-warning";
  className?: string;
  customText?: string;
}

export function DisclaimerNotice({ variant = "card", className, customText }: DisclaimerNoticeProps) {
  if (variant === "price-warning") {
    return (
      <div
        className={cn(
          "rounded-2xl border border-editorial-200 bg-editorial-50/80 p-4 text-xs text-editorial-900",
          className
        )}
      >
        <div className="flex items-start gap-2.5">
          <Info className="h-4 w-4 text-editorial-600 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-1">
            <p className="font-semibold text-editorial-900">Reference Price Advisory</p>
            <p className="text-slatewarm-700 leading-relaxed">
              {customText ||
                "Prices shown are independent reference estimates based on regional sampling. Prices can vary significantly by store location, market tier (airport, grocery, hotel, or street store), cup size, customization, and date. Confirm exact pricing directly with your local Starbucks store or official digital ordering channel before purchase."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "subtle") {
    return (
      <div className={cn("text-xs text-slatewarm-600 leading-relaxed", className)}>
        <p>
          <strong>Independent Notice:</strong> This is an independent informational website and is not affiliated with, sponsored by, or endorsed by Starbucks Coffee Company. Starbucks® and all related trademarks belong to their respective owners.
        </p>
      </div>
    );
  }

  return (
    <div
      role="note"
      aria-label="Independent website disclaimer"
      className={cn(
        "rounded-2xl border border-editorial-200 bg-white p-5 text-xs text-slatewarm-700 shadow-sm",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <ShieldAlert className="h-5 w-5 text-editorial-600 shrink-0 mt-0.5" aria-hidden="true" />
        <div className="space-y-1.5">
          <p className="font-semibold text-editorial-900 tracking-tight">
            Independent Informational Website Notice
          </p>
          <p className="text-slatewarm-700 leading-relaxed">
            This is an independent informational website and is not affiliated with, sponsored by, or endorsed by Starbucks Coffee Company. Starbucks® and related trademarks belong to their respective owners.
          </p>
          <p className="text-slatewarm-500 text-[11px] leading-relaxed">
            Information regarding menu items, prices, calories, nutritional facts, and drink customizations is compiled independently from publicly available disclosures for educational and consumer reference purposes.
          </p>
        </div>
      </div>
    </div>
  );
}
