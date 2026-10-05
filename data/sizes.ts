export interface DrinkSizeDetail {
  key: string;
  name: string;
  volumeOz: number;
  volumeMl: number;
  temperatureAvailability: "Hot only" | "Hot and Iced" | "Iced only" | "Espresso shots";
  standardEspressoShots: {
    latteCappuccino: number;
    americano: number;
    flatWhite: number;
  };
  syrupPumpsStandard: number;
  commonUsage: string;
  priceContext: string;
  calorieImpactNote: string;
  tips: string;
}

export const DRINK_SIZES: DrinkSizeDetail[] = [
  {
    key: "solo-doppio",
    name: "Espresso Shots (Solo / Doppio / Triple / Quad)",
    volumeOz: 0.75,
    volumeMl: 22,
    temperatureAvailability: "Espresso shots",
    standardEspressoShots: {
      latteCappuccino: 1,
      americano: 1,
      flatWhite: 1
    },
    syrupPumpsStandard: 0,
    commonUsage: "Pure espresso shots pulled solo (0.75 oz), doppio (1.5 oz), triple (2.25 oz), or quad (3.0 oz).",
    priceContext: "Typically $2.45 - $3.95 depending on shot quantity.",
    calorieImpactNote: "5 calories per shot, 0g sugar, approx. 75mg caffeine per standard shot.",
    tips: "Order 'Solo Espresso Con Panna' for a single shot with a dollop of whipped cream on top."
  },
  {
    key: "short",
    name: "Short",
    volumeOz: 8,
    volumeMl: 236,
    temperatureAvailability: "Hot only",
    standardEspressoShots: {
      latteCappuccino: 1,
      americano: 1,
      flatWhite: 2
    },
    syrupPumpsStandard: 2,
    commonUsage: "Compact hot drinks: Cortados, Short Lattes, Kids' Hot Chocolate, and intense flat whites.",
    priceContext: "Lowest price point for handcrafted hot beverages (typically $3.95 - $4.45).",
    calorieImpactNote: "Lowest calorie volume for hot milk-based drinks (approx. 100-120 kcal for a whole milk latte).",
    tips: "Often omitted from overhead menu boards to save visual space, but always available to order."
  },
  {
    key: "tall",
    name: "Tall",
    volumeOz: 12,
    volumeMl: 355,
    temperatureAvailability: "Hot and Iced",
    standardEspressoShots: {
      latteCappuccino: 1,
      americano: 2,
      flatWhite: 2
    },
    syrupPumpsStandard: 3,
    commonUsage: "Small standard size for hot brewed coffee, iced coffee, lattes, refreshers, and frappuccinos.",
    priceContext: "Standard entry size on menu boards ($4.25 - $5.25).",
    calorieImpactNote: "Moderate calorie density (150 kcal for standard 2% latte).",
    tips: "Notice that a Hot Tall Latte has only 1 espresso shot; if you want stronger coffee flavor, request a double (2 shots)."
  },
  {
    key: "grande",
    name: "Grande",
    volumeOz: 16,
    volumeMl: 473,
    temperatureAvailability: "Hot and Iced",
    standardEspressoShots: {
      latteCappuccino: 2,
      americano: 3,
      flatWhite: 3
    },
    syrupPumpsStandard: 4,
    commonUsage: "The most popular medium size across all beverage categories; the industry benchmark for recipes.",
    priceContext: "Mid-tier reference price ($4.95 - $6.25).",
    calorieImpactNote: "Standard nutritional baseline cited on official boards (190 kcal for standard latte).",
    tips: "Grande drinks strike the optimal espresso-to-milk balance with 2 standard shots."
  },
  {
    key: "venti-hot",
    name: "Venti (Hot)",
    volumeOz: 20,
    volumeMl: 591,
    temperatureAvailability: "Hot only",
    standardEspressoShots: {
      latteCappuccino: 2,
      americano: 4,
      flatWhite: 4
    },
    syrupPumpsStandard: 5,
    commonUsage: "Large hot coffees, lattes, mochas, and teas for maximum morning volume.",
    priceContext: "Upper reference tier ($5.45 - $6.95).",
    calorieImpactNote: "Higher calorie content due to 16+ oz of steamed milk (250-450 kcal).",
    tips: "Important fact: A Hot Venti Latte has 2 espresso shots—the exact same amount as a Grande! If you want a stronger coffee taste in a hot Venti, order a triple."
  },
  {
    key: "venti-iced",
    name: "Venti (Iced)",
    volumeOz: 24,
    volumeMl: 710,
    temperatureAvailability: "Iced only",
    standardEspressoShots: {
      latteCappuccino: 3,
      americano: 4,
      flatWhite: 4
    },
    syrupPumpsStandard: 6,
    commonUsage: "Large iced espresso drinks, iced lattes, shaken espressos, refreshers, and iced teas.",
    priceContext: "Upper reference tier ($5.95 - $7.25).",
    calorieImpactNote: "Diluted slightly by ice volume; 225mg caffeine across 3 espresso shots.",
    tips: "Unlike hot Ventis, Iced Ventis get 3 shots of espresso to compensate for the 24 oz volume displacement."
  },
  {
    key: "trenta",
    name: "Trenta",
    volumeOz: 30,
    volumeMl: 887,
    temperatureAvailability: "Iced only",
    standardEspressoShots: {
      latteCappuccino: 0,
      americano: 0,
      flatWhite: 0
    },
    syrupPumpsStandard: 7,
    commonUsage: "Extra-large cold drinks: Cold Brew, Nitro Cold Brew (where permitted), Iced Coffee, Iced Tea, and Refreshers.",
    priceContext: "Maximum size tier ($5.95 - $7.45).",
    calorieImpactNote: "Can range from 5 calories (plain cold brew) to 350+ calories if sweetened with syrups and heavy creams.",
    tips: "Strict policy prohibits Trenta sizes for espresso drinks (lattes, cappuccinos, flat whites) or Frappuccinos."
  }
];
