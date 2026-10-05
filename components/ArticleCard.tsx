import React from "react";
import Link from "next/link";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import { GuideArticle } from "@/types";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  article: GuideArticle;
  className?: string;
}

export function ArticleCard({ article, className }: ArticleCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col justify-between rounded-2xl border border-slatewarm-200 bg-white p-6 shadow-sm hover:border-editorial-500 hover:shadow-md transition-all duration-200",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-editorial-100 text-editorial-900">
            {article.category}
          </span>
          <div className="flex items-center gap-1 text-[11px] text-slatewarm-500">
            <Clock className="h-3 w-3 text-editorial-600" />
            <span>{article.readingTime}</span>
          </div>
        </div>

        <Link href={`/guides/${article.slug}`}>
          <h3 className="font-serif font-bold text-lg text-slatewarm-900 group-hover:text-editorial-700 transition-colors mb-2 leading-snug">
            {article.title}
          </h3>
        </Link>

        <p className="text-xs text-slatewarm-600 leading-relaxed line-clamp-3 mb-4">
          {article.summary}
        </p>
      </div>

      <div className="border-t border-slatewarm-100 pt-4 flex items-center justify-between text-xs">
        <span className="text-[11px] text-slatewarm-500">
          Reviewed: {article.lastUpdated}
        </span>
        <Link
          href={`/guides/${article.slug}`}
          className="flex items-center gap-1 font-semibold text-editorial-700 group-hover:text-editorial-900 transition-colors"
        >
          <span>Read More</span>
          <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform text-editorial-600" />
        </Link>
      </div>
    </article>
  );
}
