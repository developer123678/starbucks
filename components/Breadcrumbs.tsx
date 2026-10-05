import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("py-0 text-xs text-slatewarm-600", className)}>
      <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
        <li className="flex items-center gap-1">
          <Link
            href="/"
            className="flex items-center gap-1 text-slatewarm-600 hover:text-editorial-800 transition-colors"
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3 text-slatewarm-400 shrink-0" aria-hidden="true" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-editorial-800 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-slatewarm-900 font-semibold truncate max-w-[200px] sm:max-w-md" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
