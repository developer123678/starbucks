export interface SeasonalPeriod {
  id: string;
  seasonName: string;
  typicalWindow: string;
  description: string;
  featuredDrinks: {
    name: string;
    description: string;
    status: "Active Seasonal" | "Upcoming" | "Historical / Past";
    slug?: string;
  }[];
  featuredFoods: {
    name: string;
    description: string;
    status: "Active Seasonal" | "Upcoming" | "Historical / Past";
  }[];
}

export const SEASONAL_DATA: SeasonalPeriod[] = [
  {
    id: "fall",
    seasonName: "Fall Promotional Window",
    typicalWindow: "Late August through November (Annually)",
    description: "The hallmark autumn launch centered around Pumpkin Spice Sauce, Apple Crisp Oatmilk Macchiato, and autumnal bakery items like the Pumpkin Cream Cheese Muffin.",
    featuredDrinks: [
      { name: "Pumpkin Spice Latte (Hot & Iced)", description: "Espresso, steamed milk, pumpkin spice sauce, whipped cream, and pumpkin pie spice topping.", status: "Active Seasonal", slug: "pumpkin-spice-latte" },
      { name: "Pumpkin Cream Cold Brew", description: "Starbucks Cold Brew sweetened with vanilla syrup and topped with silky pumpkin cream cold foam and pumpkin spice.", status: "Active Seasonal" },
      { name: "Iced Apple Crisp Oatmilk Shaken Espresso", description: "Blonde espresso shaken with spiced apple brown sugar syrup and topped with oatmilk.", status: "Active Seasonal" },
      { name: "Iced Pumpkin Cream Chai Tea Latte", description: "Creamy spiced black tea concentrate with milk, topped with pumpkin cream cold foam.", status: "Active Seasonal" }
    ],
    featuredFoods: [
      { name: "Pumpkin Cream Cheese Muffin", description: "Spiced pumpkin muffin with a sweet cream cheese filling center and chopped spiced pepitas.", status: "Active Seasonal" },
      { name: "Baked Apple Croissant", description: "Warm layers of croissant dough filled with warm diced spiced apples.", status: "Active Seasonal" },
      { name: "Fox / Owl Cake Pop", description: "Vanilla or chocolate cake pop styled with autumn animal icing designs.", status: "Active Seasonal" }
    ]
  },
  {
    id: "holiday-winter",
    seasonName: "Holiday & Winter Window",
    typicalWindow: "Early November through early January (Annually)",
    description: "The iconic festive red cup season featuring rich chocolate, mint, toasted white chocolate, and holiday spice.",
    featuredDrinks: [
      { name: "Peppermint Mocha", description: "Espresso, steamed milk, dark mocha, peppermint syrup, whipped cream, and chocolate curls.", status: "Active Seasonal", slug: "peppermint-mocha" },
      { name: "Caramel Brulée Latte", description: "Rich caramel brulée sauce steamed with milk and espresso, topped with whipped cream and crunchy brulée pieces.", status: "Active Seasonal" },
      { name: "Chestnut Praline Latte", description: "Festive caramelized chestnut and spiced praline notes with espresso and steamed milk.", status: "Active Seasonal" },
      { name: "Iced Sugar Cookie Almondmilk Latte", description: "Blonde espresso, sugar cookie flavor syrup, almondmilk, and festive red and green sprinkles.", status: "Active Seasonal" },
      { name: "Eggnog Latte (Historical)", description: "Steamed real eggnog and milk with espresso and nutmeg. Retired in recent US corporate menus.", status: "Historical / Past" },
      { name: "Gingerbread Latte (Historical / Select)", description: "Warm spiced gingerbread syrup with espresso and steamed milk.", status: "Historical / Past" }
    ],
    featuredFoods: [
      { name: "Cranberry Bliss Bar", description: "Blondie cake base with dried cranberries, white chocolate cream cheese frosting, and orange zest drizzle.", status: "Active Seasonal" },
      { name: "Snowman Cookie", description: "Shortbread butter cookie decorated with hand-piped royal white icing.", status: "Active Seasonal" },
      { name: "Peppermint Brownie Cake Pop", description: "Fudgy brownie cake pop coated in white chocolate with crushed peppermint candy.", status: "Active Seasonal" }
    ]
  },
  {
    id: "spring",
    seasonName: "Spring Renewal Window",
    typicalWindow: "March through May (Annually)",
    description: "Lighter floral notes, lavender infusions, oatmilk pairings, and vibrant citrus teas.",
    featuredDrinks: [
      { name: "Iced Lavender Oatmilk Latte", description: "Subtle sweet floral lavender powder shaken with blonde espresso and creamy oatmilk.", status: "Active Seasonal" },
      { name: "Iced Lavender Cream Oatmilk Matcha", description: "Classic iced matcha tea latte crowned with purple lavender sweet cream cold foam.", status: "Active Seasonal" },
      { name: "Lavender Crème Frappuccino", description: "Blended caffeine-free milk crème infused with lavender flavor and topped with whipped cream.", status: "Active Seasonal" }
    ],
    featuredFoods: [
      { name: "Lemon Poppyseed Loaf (Select Markets)", description: "Citrus loaf sprinkled with poppyseeds and a crisp lemon icing.", status: "Active Seasonal" },
      { name: "Bumblebee / Chick Cake Pop", description: "Vanilla spring-themed character cake pop.", status: "Active Seasonal" }
    ]
  },
  {
    id: "summer",
    seasonName: "Summer Chill Window",
    typicalWindow: "June through August (Annually)",
    description: "High-refreshment fruit blends, spicy refreshers, popping boba pearls, and icy blended granitas.",
    featuredDrinks: [
      { name: "Summer-Berry Starbucks Refreshers", description: "A blend of raspberry, blueberry, and blackberry flavors shaken with ice over raspberry-flavored bursting pearls.", status: "Active Seasonal" },
      { name: "Summer Skies Drink", description: "Summer-Berry Refreshers blend with coconutmilk poured over raspberry bursting pearls.", status: "Active Seasonal" },
      { name: "Spicy Strawberry / Pineapple Refreshers (Select)", description: "Refresher base shaken with chili powder blend and lemonade.", status: "Historical / Past" }
    ],
    featuredFoods: [
      { name: "Pineapple Cloud Cake", description: "Light sponge cake layered with sweet pineapple cream and pineapple spread.", status: "Active Seasonal" },
      { name: "Orange Dream Cake Pop", description: "Vanilla and orange citrus cake dipped in orange confectionery coating.", status: "Active Seasonal" }
    ]
  }
];
