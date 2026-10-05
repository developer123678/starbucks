"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log client error to monitoring if configured
    console.error("Application runtime error:", error);
  }, [error]);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
      <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto shadow-sm">
        <AlertCircle className="h-7 w-7" />
      </div>

      <div className="space-y-2">
        <h1 className="font-serif font-black text-2xl sm:text-4xl text-roast tracking-tight">
          Temporary Display Interruption
        </h1>
        <p className="text-xs sm:text-sm text-slatewarm-600 max-w-md mx-auto leading-relaxed">
          An unexpected error occurred while rendering this menu page. You can attempt to reload the view or return to the menu.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-roast text-white text-xs font-semibold hover:bg-editorial-700 transition-colors shadow-sm"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Try Again</span>
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-editorial-300 bg-white text-slatewarm-800 text-xs font-semibold hover:bg-editorial-50 transition-colors"
        >
          <Home className="h-4 w-4" />
          <span>Homepage</span>
        </Link>
      </div>
    </div>
  );
}
