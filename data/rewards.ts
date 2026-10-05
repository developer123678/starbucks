export interface RewardTier {
  starsRequired: number;
  categoryName: string;
  eligibleItems: string[];
  tips: string;
  bestValueScore: "High" | "Medium" | "Fair";
}

export const REWARD_TIERS: RewardTier[] = [
  {
    starsRequired: 25,
    categoryName: "Customization & Modifiers",
    eligibleItems: [
      "Add an extra shot of espresso",
      "Add a flavor syrup or sauce",
      "Substitute dairy with plant milk (oat, almond, soy, coconut)",
      "Add cold foam or vanilla sweet cream"
    ],
    tips: "Great for upgrading an expensive handcrafted beverage without paying $1.00 - $1.45 out-of-pocket for cold foam or multiple espresso shots.",
    bestValueScore: "High"
  },
  {
    starsRequired: 100,
    categoryName: "Brewed Hot Coffee, Hot Tea & Bakery Item",
    eligibleItems: [
      "Hot brewed coffee (any standard size: Short, Tall, Grande, Venti)",
      "Hot brewed tea sachet (any standard size)",
      "Bakery pastry (Croissant, Cookie, Scone, Bagel, Cake Pop, Loaf slice)"
    ],
    tips: "Redeeming 100 stars for a $4.25 Iced Lemon Loaf or $3.95 Butter Croissant offers much higher dollar value than redeeming for a $2.95 hot coffee.",
    bestValueScore: "High"
  },
  {
    starsRequired: 200,
    categoryName: "Handcrafted Drinks & Hot Breakfast",
    eligibleItems: [
      "Any handcrafted beverage (Latte, Frappuccino, Cold Brew, Nitro, Refresher, Shaken Espresso - any standard size)",
      "Hot breakfast sandwich (Bacon Gouda, Sausage Cheddar, Double Smoked Bacon)",
      "Sous Vide Egg Bites (any flavor)"
    ],
    tips: "The sweet spot of the rewards program: redeem for a custom Venti Iced Latte with extra espresso and cold foam ($7.50+ value) or a $6.00 breakfast sandwich.",
    bestValueScore: "High"
  },
  {
    starsRequired: 300,
    categoryName: "Lunch Items & Packaged Coffee",
    eligibleItems: [
      "Packaged salad or warm toasted lunch panini (Tomato Mozzarella, Turkey Pesto)",
      "Protein Box (Cheese & Fruit, Eggs & Cheddar)",
      "Bag of whole bean coffee (1 lb / 16 oz standard packaged roast)"
    ],
    tips: "Redeeming for a $14.95 - $16.95 bag of whole bean packaged coffee provides one of the single highest cash conversion values per star on the menu.",
    bestValueScore: "High"
  },
  {
    starsRequired: 400,
    categoryName: "Merchandise & At-Home Coffee Gear",
    eligibleItems: [
      "Select Starbucks signature merchandise items up to $20 value (tumblers, ceramic mugs, water bottles)",
      "Discount of $20 toward premium merchandise"
    ],
    tips: "If the merchandise costs more than $20, you can apply the 400 stars as a $20 discount credit and pay the difference.",
    bestValueScore: "Medium"
  }
];

export const REWARDS_PROGRAM_FACTS = {
  lastReviewedDate: "2026-04-12",
  earningRates: [
    { method: "Pay with preloaded Starbucks Card via App", rate: "2 Stars per $1.00 USD spent" },
    { method: "Scan app and pay with Credit/Debit Card or Apple/Google Pay", rate: "1 Star per $1.00 USD spent" },
    { method: "Bring your own clean reusable cup", rate: "25 Bonus Stars + $0.10 cup discount per order" }
  ],
  birthdayReward: "Free handcrafted drink or food item on your exact birthday (requires joining at least 7 days prior and making at least 1 star-earning transaction).",
  refillPolicy: "Free in-store brewed coffee and hot/iced tea refills for members during the same store visit at participating corporate stores."
};
