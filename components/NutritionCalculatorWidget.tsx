"use client";

import React, { useState } from "react";
import { MILK_OPTIONS, SYRUP_OPTIONS, COLD_FOAM_OPTIONS } from "@/data/customizations";
import {
  BASE_DRINK_TEMPLATES,
  calculateEstimatedNutrition,
  CalculatorState,
} from "@/lib/calculator";
import { Calculator, RotateCcw, Info, Zap, Flame, ShieldAlert } from "lucide-react";

export function NutritionCalculatorWidget() {
  const [state, setState] = useState<CalculatorState>({
    baseDrinkType: "latte",
    sizeKey: "grande",
    milkId: "2-percent",
    syrupId: "vanilla",
    syrupPumps: 0,
    extraEspressoShots: 0,
    hasWhippedCream: false,
    coldFoamId: "none",
  });

  const nutrition = calculateEstimatedNutrition(state);

  const resetCalculator = () => {
    setState({
      baseDrinkType: "latte",
      sizeKey: "grande",
      milkId: "2-percent",
      syrupId: "vanilla",
      syrupPumps: 0,
      extraEspressoShots: 0,
      hasWhippedCream: false,
      coldFoamId: "none",
    });
  };

  return (
    <div className="rounded-3xl border border-slatewarm-200 bg-white p-6 sm:p-8 shadow-sm space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slatewarm-100 pb-6">
        <div>
          <div className="flex items-center gap-2 text-editorial-700 mb-1">
            <Calculator className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Interactive Tool
            </span>
          </div>
          <h3 className="font-serif font-bold text-2xl text-editorial-950 tracking-tight">
            Starbucks Nutrition & Calorie Estimator
          </h3>
          <p className="text-xs text-slatewarm-600 mt-1 max-w-xl">
            Estimate calories, sugar, caffeine, and macronutrients based on customized cup sizes, milk choices, syrup pumps, and cold foam additions.
          </p>
        </div>

        <button
          onClick={resetCalculator}
          className="flex items-center gap-1.5 text-xs font-semibold text-slatewarm-600 hover:text-editorial-800 bg-slatewarm-50 hover:bg-editorial-50 border border-slatewarm-200 px-3 py-2 rounded-xl transition-colors self-start"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reset Inputs
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-5">
          {/* Base Drink Selection */}
          <div>
            <label className="block text-xs font-bold text-slatewarm-800 uppercase tracking-wider mb-2">
              1. Select Drink Foundation
            </label>
            <select
              value={state.baseDrinkType}
              onChange={(e) => setState({ ...state, baseDrinkType: e.target.value })}
              className="w-full rounded-xl border border-slatewarm-300 bg-white p-3 text-xs font-medium text-slatewarm-900 focus:border-editorial-600 focus:ring-1 focus:ring-editorial-600 focus:outline-none"
            >
              {BASE_DRINK_TEMPLATES.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>

          {/* Size Selection */}
          <div>
            <label className="block text-xs font-bold text-slatewarm-800 uppercase tracking-wider mb-2">
              2. Cup Size
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {[
                { key: "short", label: "Short (8oz)" },
                { key: "tall", label: "Tall (12oz)" },
                { key: "grande", label: "Grande (16oz)" },
                { key: "venti_hot", label: "Venti Hot (20oz)" },
                { key: "venti_cold", label: "Venti Iced (24oz)" },
                { key: "trenta", label: "Trenta (30oz)" },
              ].map((s) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setState({ ...state, sizeKey: s.key as CalculatorState["sizeKey"] })}
                  className={`p-2.5 rounded-xl border text-center text-xs font-semibold transition-all ${
                    state.sizeKey === s.key
                      ? "border-editorial-700 bg-editorial-700 text-white shadow-sm"
                      : "border-slatewarm-200 bg-white text-slatewarm-700 hover:bg-slatewarm-50"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Milk Choice */}
          <div>
            <label className="block text-xs font-bold text-slatewarm-800 uppercase tracking-wider mb-2">
              3. Milk / Plant-Based Choice
            </label>
            <select
              value={state.milkId}
              onChange={(e) => setState({ ...state, milkId: e.target.value })}
              className="w-full rounded-xl border border-slatewarm-300 bg-white p-3 text-xs font-medium text-slatewarm-900 focus:border-editorial-600 focus:ring-1 focus:ring-editorial-600 focus:outline-none"
            >
              {MILK_OPTIONS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name} ({m.type === "plant" ? "Plant-Based" : "Dairy"})
                </option>
              ))}
            </select>
          </div>

          {/* Syrups & Pumps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slatewarm-800 uppercase tracking-wider mb-2">
                4. Flavor Syrup / Sauce
              </label>
              <select
                value={state.syrupId}
                onChange={(e) => setState({ ...state, syrupId: e.target.value })}
                className="w-full rounded-xl border border-slatewarm-300 bg-white p-3 text-xs font-medium text-slatewarm-900 focus:border-editorial-600 focus:ring-1 focus:ring-editorial-600 focus:outline-none"
              >
                {SYRUP_OPTIONS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} (+{s.caloriesPerPump} kcal/pump)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slatewarm-800 uppercase tracking-wider mb-2">
                Syrup Pumps: {state.syrupPumps}
              </label>
              <div className="flex items-center gap-2">
                {[0, 1, 2, 3, 4, 5, 6].map((pumps) => (
                  <button
                    key={pumps}
                    type="button"
                    onClick={() => setState({ ...state, syrupPumps: pumps })}
                    className={`flex-1 py-2.5 rounded-lg border text-center text-xs font-semibold transition-colors ${
                      state.syrupPumps === pumps
                        ? "border-editorial-700 bg-editorial-700 text-white"
                        : "border-slatewarm-200 bg-white text-slatewarm-700 hover:bg-slatewarm-50"
                    }`}
                  >
                    {pumps}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Add-ons: Extra Espresso, Cold Foam, Whipped Cream */}
          <div className="space-y-4 pt-2 border-t border-slatewarm-100">
            <div>
              <label className="block text-xs font-bold text-slatewarm-800 uppercase tracking-wider mb-2">
                5. Extra Espresso Shots (+75mg caffeine per shot)
              </label>
              <div className="flex items-center gap-2">
                {[0, 1, 2, 3].map((shots) => (
                  <button
                    key={shots}
                    type="button"
                    onClick={() => setState({ ...state, extraEspressoShots: shots })}
                    className={`flex-1 py-2 rounded-lg border text-center text-xs font-semibold transition-colors ${
                      state.extraEspressoShots === shots
                        ? "border-editorial-700 bg-editorial-700 text-white"
                        : "border-slatewarm-200 bg-white text-slatewarm-700 hover:bg-slatewarm-50"
                    }`}
                  >
                    {shots === 0 ? "Standard Shots" : `+${shots} Extra Shot${shots > 1 ? "s" : ""}`}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slatewarm-800 uppercase tracking-wider mb-2">
                  Cold Foam Topping
                </label>
                <select
                  value={state.coldFoamId}
                  onChange={(e) => setState({ ...state, coldFoamId: e.target.value })}
                  className="w-full rounded-xl border border-slatewarm-300 bg-white p-3 text-xs font-medium text-slatewarm-900 focus:border-editorial-600 focus:ring-1 focus:ring-editorial-600 focus:outline-none"
                >
                  <option value="none">None (No Cold Foam)</option>
                  {COLD_FOAM_OPTIONS.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.name} (+{f.calories} kcal)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slatewarm-800 uppercase tracking-wider mb-2">
                  Whipped Cream
                </label>
                <button
                  type="button"
                  onClick={() => setState({ ...state, hasWhippedCream: !state.hasWhippedCream })}
                  className={`w-full py-3 px-4 rounded-xl border text-xs font-semibold transition-colors flex items-center justify-between ${
                    state.hasWhippedCream
                      ? "border-editorial-600 bg-editorial-50 text-editorial-900"
                      : "border-slatewarm-200 bg-white text-slatewarm-700 hover:bg-slatewarm-50"
                  }`}
                >
                  <span>Include Whipped Cream</span>
                  <span>{state.hasWhippedCream ? "+80 kcal (Active)" : "No Whipped Cream"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Live Nutrition Results Column */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-editorial-200 bg-editorial-50/60 p-6 space-y-6">
          <div>
            <div className="flex items-center justify-between border-b border-editorial-200 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-editorial-700">
                  Estimated Profile
                </span>
                <h4 className="font-serif font-black text-2xl text-slatewarm-900">
                  Calculated Nutrition
                </h4>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-editorial-200 text-editorial-900 text-[10px] font-bold uppercase">
                Estimate
              </span>
            </div>

            {/* Big Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 my-4">
              <div className="bg-white p-4 rounded-xl border border-slatewarm-200 text-center shadow-sm">
                <span className="text-[11px] font-semibold text-slatewarm-500 uppercase block">Calories</span>
                <span className="font-serif font-black text-3xl text-slatewarm-900">{nutrition.calories}</span>
                <span className="text-[10px] text-slatewarm-400 block">kcal</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slatewarm-200 text-center shadow-sm">
                <span className="text-[11px] font-semibold text-slatewarm-500 uppercase block">Total Sugar</span>
                <span className="font-serif font-black text-3xl text-editorial-700">{nutrition.sugar}g</span>
                <span className="text-[10px] text-slatewarm-400 block">lactose + syrup</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slatewarm-200 text-center shadow-sm">
                <span className="text-[11px] font-semibold text-slatewarm-500 uppercase block">Caffeine</span>
                <span className="font-serif font-black text-3xl text-editorial-900">{nutrition.caffeine}mg</span>
                <span className="text-[10px] text-slatewarm-400 block">approximate</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slatewarm-200 text-center shadow-sm">
                <span className="text-[11px] font-semibold text-slatewarm-500 uppercase block">Total Fat</span>
                <span className="font-serif font-black text-3xl text-slatewarm-900">{nutrition.fat}g</span>
                <span className="text-[10px] text-slatewarm-400 block">dietary fat</span>
              </div>
            </div>

            {/* Breakdown List */}
            <div className="space-y-1.5 text-xs text-slatewarm-700 bg-white/80 p-3.5 rounded-xl border border-editorial-100">
              <p className="font-semibold text-slatewarm-900 text-[11px] uppercase tracking-wider mb-1">
                Active Recipe Summary:
              </p>
              {nutrition.breakdownNotes.map((note, idx) => (
                <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slatewarm-600">
                  <span className="text-editorial-600 font-bold">•</span>
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Methodology Disclaimer */}
          <div className="rounded-xl bg-white/90 border border-slatewarm-200 p-3.5 text-[10px] text-slatewarm-500 leading-relaxed space-y-1">
            <p className="font-semibold text-slatewarm-800 flex items-center gap-1">
              <Info className="h-3 w-3 text-editorial-600" />
              Calculation Methodology Disclaimer
            </p>
            <p>
              This is an independent algorithmic calculation tool modeled after public Starbucks ingredient averages. Values are estimates and do not represent an official certified Starbucks laboratory analysis. Barista handcrafting differences, syrup pump precision, and local milk formulations will cause actual values to vary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
