export interface MilkOption {
  id: string;
  name: string;
  type: "dairy" | "plant";
  caloriesPerOz: number;
  fatPerOz: number;
  carbsPerOz: number;
  sugarPerOz: number;
  proteinPerOz: number;
  isVegan: boolean;
  isGlutenFree: boolean;
  notes: string;
}

export interface SyrupOption {
  id: string;
  name: string;
  type: "syrup" | "sauce" | "sugar-free";
  caloriesPerPump: number;
  sugarPerPump: number;
  carbsPerPump: number;
  containsDairy: boolean;
  notes: string;
}

export interface ColdFoamOption {
  id: string;
  name: string;
  calories: number;
  fat: number;
  sugar: number;
  carbs: number;
  protein: number;
  containsDairy: boolean;
  notes: string;
}

export const MILK_OPTIONS: MilkOption[] = [
  { id: "2-percent", name: "2% Reduced Fat Milk (Standard)", type: "dairy", caloriesPerOz: 15, fatPerOz: 0.6, carbsPerOz: 1.5, sugarPerOz: 1.5, proteinPerOz: 1.0, isVegan: false, isGlutenFree: true, notes: "Default milk in North America for standard espresso drinks." },
  { id: "whole", name: "Whole Milk", type: "dairy", caloriesPerOz: 19, fatPerOz: 1.0, carbsPerOz: 1.5, sugarPerOz: 1.5, proteinPerOz: 1.0, isVegan: false, isGlutenFree: true, notes: "Default milk for Frappuccinos and Flat Whites for extra richness." },
  { id: "nonfat", name: "Nonfat (Skim) Milk", type: "dairy", caloriesPerOz: 10, fatPerOz: 0.1, carbsPerOz: 1.5, sugarPerOz: 1.5, proteinPerOz: 1.0, isVegan: false, isGlutenFree: true, notes: "Lowest calorie dairy milk choice with zero fat." },
  { id: "oat", name: "Oatmilk (Oatly / Custom)", type: "plant", caloriesPerOz: 18, fatPerOz: 0.9, carbsPerOz: 2.0, sugarPerOz: 0.9, proteinPerOz: 0.4, isVegan: true, isGlutenFree: false, notes: "Velvety, rich body with mild toasted oat flavor." },
  { id: "almond", name: "Almondmilk", type: "plant", caloriesPerOz: 8, fatPerOz: 0.6, carbsPerOz: 0.6, sugarPerOz: 0.4, proteinPerOz: 0.2, isVegan: true, isGlutenFree: true, notes: "Lowest calorie milk option overall with subtle nutty notes." },
  { id: "coconut", name: "Coconutmilk", type: "plant", caloriesPerOz: 11, fatPerOz: 0.6, carbsPerOz: 1.1, sugarPerOz: 1.0, proteinPerOz: 0.1, isVegan: true, isGlutenFree: true, notes: "Light tropical flavor; base for Pink Drink & Dragon Drink." },
  { id: "soy", name: "Soymilk (Vanilla Sweetened)", type: "plant", caloriesPerOz: 16, fatPerOz: 0.5, carbsPerOz: 1.8, sugarPerOz: 1.6, proteinPerOz: 0.8, isVegan: true, isGlutenFree: true, notes: "Pre-sweetened with organic vanilla; steams with dense microfoam." },
  { id: "breve", name: "Half & Half (Breve)", type: "dairy", caloriesPerOz: 40, fatPerOz: 3.5, carbsPerOz: 1.3, sugarPerOz: 1.3, proteinPerOz: 0.9, isVegan: false, isGlutenFree: true, notes: "Very rich and decadent; popular in keto-style drinks." },
  { id: "heavy-cream", name: "Heavy Cream", type: "dairy", caloriesPerOz: 100, fatPerOz: 10.5, carbsPerOz: 0.8, sugarPerOz: 0.8, proteinPerOz: 0.8, isVegan: false, isGlutenFree: true, notes: "Highest fat density; used in small splashes or keto customizations." }
];

export const SYRUP_OPTIONS: SyrupOption[] = [
  { id: "vanilla", name: "Vanilla Syrup", type: "syrup", caloriesPerPump: 20, sugarPerPump: 5, carbsPerPump: 5, containsDairy: false, notes: "Most versatile flavoring on the menu." },
  { id: "sugar-free-vanilla", name: "Sugar-Free Vanilla Syrup", type: "sugar-free", caloriesPerPump: 0, sugarPerPump: 0, carbsPerPump: 0, containsDairy: false, notes: "Sweetened with sucralose; 0 calories and 0g sugar." },
  { id: "caramel", name: "Caramel Syrup", type: "syrup", caloriesPerPump: 20, sugarPerPump: 5, carbsPerPump: 5, containsDairy: false, notes: "Sweet butterscotch and caramel notes (not to be confused with caramel drizzle)." },
  { id: "brown-sugar", name: "Brown Sugar Syrup", type: "syrup", caloriesPerPump: 15, sugarPerPump: 3.5, carbsPerPump: 3.5, containsDairy: false, notes: "Molasses and warm cinnamon undertones." },
  { id: "hazelnut", name: "Hazelnut Syrup", type: "syrup", caloriesPerPump: 20, sugarPerPump: 5, carbsPerPump: 5, containsDairy: false, notes: "Nutty roasted aroma." },
  { id: "toffee-nut", name: "Toffee Nut Syrup", type: "syrup", caloriesPerPump: 20, sugarPerPump: 5, carbsPerPump: 5, containsDairy: false, notes: "Buttery toffee and roasted nut flavor profile." },
  { id: "peppermint", name: "Peppermint Syrup", type: "syrup", caloriesPerPump: 20, sugarPerPump: 5, carbsPerPump: 5, containsDairy: false, notes: "Crisp spearmint and peppermint notes." },
  { id: "classic", name: "Classic Syrup", type: "syrup", caloriesPerPump: 20, sugarPerPump: 5, carbsPerPump: 5, containsDairy: false, notes: "Pure liquid simple sugar cane sweetener." },
  { id: "mocha-sauce", name: "Mocha Sauce (Dark Cocoa)", type: "sauce", caloriesPerPump: 25, sugarPerPump: 6, carbsPerPump: 7, containsDairy: false, notes: "Bittersweet chocolate sauce made without dairy." },
  { id: "white-chocolate-mocha", name: "White Chocolate Mocha Sauce", type: "sauce", caloriesPerPump: 60, sugarPerPump: 11, carbsPerPump: 11, containsDairy: true, notes: "Dense condensed milk and cocoa butter sauce (contains dairy)." },
  { id: "pumpkin-spice-sauce", name: "Pumpkin Spice Sauce (Seasonal)", type: "sauce", caloriesPerPump: 33, sugarPerPump: 8, carbsPerPump: 8, containsDairy: true, notes: "Contains condensed milk and real pumpkin puree." }
];

export const COLD_FOAM_OPTIONS: ColdFoamOption[] = [
  { id: "vanilla-sweet-cream-cold-foam", name: "Vanilla Sweet Cream Cold Foam", calories: 110, fat: 8, sugar: 9, carbs: 9, protein: 1, containsDairy: true, notes: "Wipped cold sweet cream floating atop iced drinks." },
  { id: "salted-caramel-cold-foam", name: "Salted Caramel Cream Cold Foam", calories: 120, fat: 8, sugar: 12, carbs: 12, protein: 1, containsDairy: true, notes: "Sweet cream infused with caramel and sea salt." },
  { id: "chocolate-cream-cold-foam", name: "Chocolate Cream Cold Foam", calories: 140, fat: 9, sugar: 13, carbs: 14, protein: 1, containsDairy: true, notes: "Rich chocolate malted powder whipped into sweet cream." },
  { id: "matcha-cold-foam", name: "Matcha Cream Cold Foam", calories: 130, fat: 8, sugar: 12, carbs: 13, protein: 1, containsDairy: true, notes: "Sweetened Japanese green tea whipped with sweet cream." },
  { id: "whipped-cream-standard", name: "Standard Whipped Cream Topping", calories: 80, fat: 8, sugar: 2, carbs: 2, protein: 0, containsDairy: true, notes: "Standard vanilla whipped cream crown." }
];

export const ESPRESSO_ROASTS = [
  { id: "signature", name: "Starbucks Signature Espresso Roast", profile: "Dark, bold, roasty with rich caramel sweetness.", caffeinePerShot: 75 },
  { id: "blonde", name: "Starbucks Blonde Espresso Roast", profile: "Lighter roast with sweet citrus, vibrant acidity, and smooth body.", caffeinePerShot: 85 },
  { id: "decaf", name: "Decaf Espresso Roast", profile: "Swiss water/natural decaffeination process retaining deep cocoa flavor.", caffeinePerShot: 4 }
];
