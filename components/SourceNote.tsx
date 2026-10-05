import React from "react";
import Link from "next/link";
import { CheckCircle2, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface SourceNoteProps {
  sourceName?: string;
  sourceUrl?: string;
  lastVerified?: string;
  lastUpdated?: string;
  className?: string;
}

export function SourceNote({
  sourceName = "Starbucks Public Information & Independent Testing",
  sourceUrl,
  lastVerified = "2026-04-10",
  lastUpdated = "2026-04-12",
  className,
}: SourceNoteProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slatewarm-200 bg-white p-4 text-xs text-slatewarm-700 shadow-sm",
        className
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-editorial-600 shrink-0" aria-hidden="true" />
          <span>
            <strong>Editorial Source:</strong> {sourceName}
          </span>
        </div>
        <div className="flex items-center gap-4 text-slatewarm-500 text-[11px]">
          <span className="flex items-center gap-1">
            <RefreshCw className="h-3 w-3 text-editorial-500" aria-hidden="true" />
            Last Verified: {lastVerified}
          </span>
          <span>•</span>
          <Link
            href="/data-methodology"
            className="text-editorial-600 hover:text-editorial-800 underline font-semibold"
          >
            Review Methodology
          </Link>
        </div>
      </div>
    </div>
  );
}
