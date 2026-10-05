import React from "react";
import { SizeNutrition } from "@/types";
import { Info } from "lucide-react";

interface NutritionTableProps {
  standardServing: string;
  calories: number;
  fat: number;
  saturatedFat: number;
  carbohydrates: number;
  sugar: number;
  protein: number;
  caffeine: number;
  sodium: number;
  sizeOptions?: SizeNutrition[];
}

export function NutritionTable({
  standardServing,
  calories,
  fat,
  saturatedFat,
  carbohydrates,
  sugar,
  protein,
  caffeine,
  sodium,
  sizeOptions,
}: NutritionTableProps) {
  return (
    <div className="space-y-6">
      {/* Standard Nutrition Facts Panel */}
      <div className="rounded-3xl border border-slatewarm-300 bg-white p-6 shadow-sm max-w-xl">
        <div className="border-b-8 border-editorial-900 pb-2">
          <h3 className="font-serif font-black text-2xl text-slatewarm-900 tracking-tight">
            Nutrition Facts
          </h3>
          <p className="text-xs text-slatewarm-600">
            Serving Size: <strong>{standardServing}</strong> (Standard Recipe Build)
          </p>
        </div>

        <div className="py-3 border-b-4 border-editorial-900 flex items-baseline justify-between">
          <div>
            <span className="text-xs font-bold text-slatewarm-600 uppercase">Amount Per Serving</span>
            <div className="font-serif font-black text-3xl text-slatewarm-900">Calories</div>
          </div>
          <span className="font-serif font-black text-4xl text-editorial-800">{calories}</span>
        </div>

        <div className="divide-y divide-slatewarm-200 text-xs">
          <div className="py-2 flex justify-between">
            <span className="font-bold text-slatewarm-800">Total Fat <span className="font-normal">{fat}g</span></span>
          </div>
          <div className="py-2 pl-4 flex justify-between text-slatewarm-600">
            <span>Saturated Fat {saturatedFat}g</span>
          </div>
          <div className="py-2 flex justify-between">
            <span className="font-bold text-slatewarm-800">Sodium <span className="font-normal">{sodium}mg</span></span>
          </div>
          <div className="py-2 flex justify-between">
            <span className="font-bold text-slatewarm-800">Total Carbohydrates <span className="font-normal">{carbohydrates}g</span></span>
          </div>
          <div className="py-2 pl-4 flex justify-between text-slatewarm-600">
            <span>Total Sugars {sugar}g</span>
          </div>
          <div className="py-2 flex justify-between">
            <span className="font-bold text-slatewarm-800">Protein <span className="font-normal">{protein}g</span></span>
          </div>
          <div className="py-2 flex justify-between bg-editorial-50 px-2 rounded font-semibold text-editorial-900">
            <span>Estimated Caffeine</span>
            <span>{caffeine} mg</span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slatewarm-200 text-[11px] text-slatewarm-500 leading-relaxed">
          * Percent Daily Values are based on a 2,000 calorie diet. Actual nutrition values may vary based on barista preparation technique, exact milk brand, and customer customization.
        </div>
      </div>

      {/* Multi-Size Comparison Table (if size options available) */}
      {sizeOptions && sizeOptions.length > 0 && (
        <div className="space-y-3">
          <h4 className="font-serif font-bold text-base text-slatewarm-900">
            Nutrition by Cup Size Breakdown
          </h4>
          <div className="overflow-x-auto rounded-2xl border border-slatewarm-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slatewarm-200 bg-editorial-50 text-editorial-900 font-semibold">
                  <th className="p-3">Size</th>
                  <th className="p-3">Calories</th>
                  <th className="p-3">Sugar</th>
                  <th className="p-3">Fat</th>
                  <th className="p-3">Carbs</th>
                  <th className="p-3">Protein</th>
                  <th className="p-3">Caffeine</th>
                  <th className="p-3">Ref. Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slatewarm-100 text-slatewarm-700">
                {sizeOptions.map((opt, idx) => (
                  <tr key={idx} className="hover:bg-slatewarm-50/60 transition-colors">
                    <td className="p-3 font-semibold text-slatewarm-900">{opt.size}</td>
                    <td className="p-3 font-medium">{opt.calories} kcal</td>
                    <td className="p-3">{opt.sugarG}g</td>
                    <td className="p-3">{opt.fatG}g</td>
                    <td className="p-3">{opt.carbsG}g</td>
                    <td className="p-3">{opt.proteinG}g</td>
                    <td className="p-3 font-semibold text-editorial-700">{opt.caffeineMg}mg</td>
                    <td className="p-3 font-medium text-editorial-800">{opt.referencePrice || "Varies"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
