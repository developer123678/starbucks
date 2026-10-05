import { MILK_OPTIONS, SYRUP_OPTIONS, COLD_FOAM_OPTIONS } from "@/data/customizations";

export interface CalculatorState {
  baseDrinkType: string;
  sizeKey: "short" | "tall" | "grande" | "venti_hot" | "venti_cold" | "trenta";
  milkId: string;
  syrupId: string;
  syrupPumps: number;
  extraEspressoShots: number;
  hasWhippedCream: boolean;
  coldFoamId: string;
}

export interface NutritionResult {
  calories: number;
  sugar: number;
  fat: number;
  carbs: number;
  protein: number;
  caffeine: number;
  isEstimated: boolean;
  breakdownNotes: string[];
}

export const BASE_DRINK_TEMPLATES: {
  id: string;
  name: string;
  category: "coffee" | "espresso" | "tea" | "refresher" | "frappuccino";
  defaultMilkRatio: number; // estimated ounces of milk in a Grande
  baseCalories: number;
  baseSugar: number;
  baseFat: number;
  baseCarbs: number;
  baseProtein: number;
  baseCaffeinePerShotOrServing: number;
}[] = [
  {
    id: "latte",
    name: "Caffè Latte / Espresso Drink",
    category: "espresso",
    defaultMilkRatio: 12,
    baseCalories: 10,
    baseSugar: 0,
    baseFat: 0,
    baseCarbs: 2,
    baseProtein: 1,
    baseCaffeinePerShotOrServing: 75
  },
  {
    id: "cold-brew",
    name: "Cold Brew / Iced Coffee",
    category: "coffee",
    defaultMilkRatio: 0,
    baseCalories: 5,
    baseSugar: 0,
    baseFat: 0,
    baseCarbs: 0,
    baseProtein: 0.3,
    baseCaffeinePerShotOrServing: 205
  },
  {
    id: "shaken-espresso",
    name: "Iced Shaken Espresso",
    category: "espresso",
    defaultMilkRatio: 3,
    baseCalories: 15,
    baseSugar: 0,
    baseFat: 0,
    baseCarbs: 2,
    baseProtein: 1,
    baseCaffeinePerShotOrServing: 85
  },
  {
    id: "caffe-mocha",
    name: "Caffè Mocha (with cocoa base)",
    category: "espresso",
    defaultMilkRatio: 11,
    baseCalories: 100, // includes base mocha sauce
    baseSugar: 20,
    baseFat: 2.5,
    baseCarbs: 24,
    baseProtein: 2,
    baseCaffeinePerShotOrServing: 85
  },
  {
    id: "frappuccino-coffee",
    name: "Coffee Frappuccino (Blended)",
    category: "frappuccino",
    defaultMilkRatio: 6,
    baseCalories: 160, // base emulsifier syrup + roast
    baseSugar: 36,
    baseFat: 1,
    baseCarbs: 38,
    baseProtein: 1,
    baseCaffeinePerShotOrServing: 90
  },
  {
    id: "refresher",
    name: "Starbucks Refresher Base (e.g. Strawberry / Dragonfruit)",
    category: "refresher",
    defaultMilkRatio: 0,
    baseCalories: 90,
    baseSugar: 20,
    baseFat: 0,
    baseCarbs: 22,
    baseProtein: 0.5,
    baseCaffeinePerShotOrServing: 45
  },
  {
    id: "matcha-latte",
    name: "Matcha Tea Latte (Sweetened Matcha Blend)",
    category: "tea",
    defaultMilkRatio: 11,
    baseCalories: 90, // matcha powder with sugar
    baseSugar: 19,
    baseFat: 0.5,
    baseCarbs: 20,
    baseProtein: 1,
    baseCaffeinePerShotOrServing: 80
  }
];

export function calculateEstimatedNutrition(state: CalculatorState): NutritionResult {
  const base = BASE_DRINK_TEMPLATES.find((b) => b.id === state.baseDrinkType) || BASE_DRINK_TEMPLATES[0];
  const milk = MILK_OPTIONS.find((m) => m.id === state.milkId) || MILK_OPTIONS[0];
  const syrup = SYRUP_OPTIONS.find((s) => s.id === state.syrupId);
  const foam = COLD_FOAM_OPTIONS.find((f) => f.id === state.coldFoamId);

  // Size scale factors relative to Grande (16 oz = 1.0)
  let sizeMultiplier = 1.0;
  let standardShots = 2;
  let estimatedMilkOz = base.defaultMilkRatio;

  switch (state.sizeKey) {
    case "short":
      sizeMultiplier = 0.5;
      standardShots = 1;
      estimatedMilkOz = base.defaultMilkRatio > 0 ? 6 : 0;
      break;
    case "tall":
      sizeMultiplier = 0.75;
      standardShots = 1;
      estimatedMilkOz = base.defaultMilkRatio > 0 ? 9 : 0;
      break;
    case "grande":
      sizeMultiplier = 1.0;
      standardShots = 2;
      estimatedMilkOz = base.defaultMilkRatio > 0 ? 12 : 0;
      break;
    case "venti_hot":
      sizeMultiplier = 1.25;
      standardShots = 2;
      estimatedMilkOz = base.defaultMilkRatio > 0 ? 16 : 0;
      break;
    case "venti_cold":
      sizeMultiplier = 1.35;
      standardShots = 3;
      estimatedMilkOz = base.defaultMilkRatio > 0 ? 14 : 0; // ice takes space
      break;
    case "trenta":
      sizeMultiplier = 1.6;
      standardShots = 0;
      estimatedMilkOz = base.defaultMilkRatio > 0 ? 16 : 0;
      break;
  }

  // Calculate Base
  let calories = base.baseCalories * sizeMultiplier;
  let sugar = base.baseSugar * sizeMultiplier;
  let fat = base.baseFat * sizeMultiplier;
  let carbs = base.baseCarbs * sizeMultiplier;
  let protein = base.baseProtein * sizeMultiplier;
  let caffeine = 0;

  if (base.category === "espresso") {
    const totalShots = standardShots + (state.extraEspressoShots || 0);
    caffeine = totalShots * 75;
    calories += (state.extraEspressoShots || 0) * 5;
  } else {
    caffeine = base.baseCaffeinePerShotOrServing * sizeMultiplier;
    if (state.extraEspressoShots > 0) {
      caffeine += state.extraEspressoShots * 75;
      calories += state.extraEspressoShots * 5;
    }
  }

  // Add Milk
  if (estimatedMilkOz > 0) {
    calories += estimatedMilkOz * milk.caloriesPerOz;
    fat += estimatedMilkOz * milk.fatPerOz;
    carbs += estimatedMilkOz * milk.carbsPerOz;
    sugar += estimatedMilkOz * milk.sugarPerOz;
    protein += estimatedMilkOz * milk.proteinPerOz;
  }

  // Add Syrup
  if (syrup && state.syrupPumps > 0) {
    calories += syrup.caloriesPerPump * state.syrupPumps;
    sugar += syrup.sugarPerPump * state.syrupPumps;
    carbs += syrup.carbsPerPump * state.syrupPumps;
  }

  // Add Whipped Cream
  if (state.hasWhippedCream) {
    calories += 80;
    fat += 8;
    carbs += 2;
    sugar += 2;
  }

  // Add Cold Foam
  if (foam && state.coldFoamId !== "none") {
    calories += foam.calories;
    fat += foam.fat;
    carbs += foam.carbs;
    sugar += foam.sugar;
    protein += foam.protein;
  }

  const breakdownNotes: string[] = [
    `Estimated ${estimatedMilkOz.toFixed(0)} fl oz of ${milk.name}.`,
    state.syrupPumps > 0 && syrup
      ? `${state.syrupPumps} pumps of ${syrup.name} (+${state.syrupPumps * syrup.caloriesPerPump} kcal).`
      : "No added flavored syrups.",
    state.hasWhippedCream ? "Includes standard whipped cream topping (+80 kcal, 8g fat)." : "No whipped cream.",
    foam && state.coldFoamId !== "none" ? `Includes ${foam.name} (+${foam.calories} kcal).` : "No cold foam."
  ];

  return {
    calories: Math.round(calories),
    sugar: Math.round(sugar),
    fat: Math.round(fat * 10) / 10,
    carbs: Math.round(carbs),
    protein: Math.round(protein * 10) / 10,
    caffeine: Math.round(caffeine),
    isEstimated: true,
    breakdownNotes
  };
}
