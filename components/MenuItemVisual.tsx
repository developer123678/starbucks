"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MenuItemVisualProps {
  slug: string;
  name: string;
  category: string;
  className?: string;
  priority?: boolean;
}

export function MenuItemVisual({
  slug,
  name,
  category,
  className,
  priority = false
}: MenuItemVisualProps) {
  const [imgSrc, setImgSrc] = useState<string>(`/images/menu/${slug}.jpg`);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(`/images/categories/${category}.jpg`);
    }
  };

  return (
    <div
      className={cn(
        "relative w-full aspect-square rounded-3xl overflow-hidden flex items-center justify-center p-3 bg-gradient-to-b from-[#fbfbfa] via-[#f7faf8] to-[#edf6f1] border border-slatewarm-200/80 group-hover:border-editorial-400 transition-all duration-300 shadow-sm",
        className
      )}
    >
      {/* Soft circular studio pedestal backdrop */}
      <div className="absolute inset-2 sm:inset-3 rounded-full bg-gradient-to-b from-white via-white/90 to-emerald-50/60 shadow-inner"></div>

      {/* Realistic Product Image */}
      <div className="relative w-full h-full z-10 flex items-center justify-center p-2">
        <Image
          src={imgSrc}
          alt={`Starbucks ${name}`}
          width={500}
          height={500}
          priority={priority}
          unoptimized
          onError={handleError}
          className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
