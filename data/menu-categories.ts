import { MenuCategory } from "@/types";

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "hot-coffee",
    slug: "hot-coffee",
    name: "Hot Coffees & Espresso",
    shortName: "Hot Coffee",
    tagline: "Classic brewed roasts, handcrafted espresso, Americanos, lattes, and cappuccinos.",
    description: "Starbucks hot coffee offerings range from daily brewed dark and medium roasts to complex espresso-based beverages like flat whites, caramel macchiatos, and caffè mochas. Each drink can be tailored by espresso roast, milk temperature, foam density, and sweetness levels.",
    type: "drinks",
    iconName: "Coffee",
    heroExcerpt: "From standard Pike Place Roast to quad-shot Flat Whites, hot coffee forms the core espresso foundation of the Starbucks menu.",
    popularItemsCount: 18,
    avgCalories: "5 - 390 kcal (depending on milk & syrup)",
    priceRange: "$2.95 - $6.45 (Reference Range)",
    overviewContent: [
      "Brewed coffees (Pike Place, Dark Roast, Blonde Roast) offer the highest caffeine concentration per dollar with negligible calories when served black.",
      "Espresso drinks combine freshly pulled shots with steamed milk and optional flavor syrups. Standard lattes use 2% steamed milk unless customized.",
      "Traditional macchiatos differ from iced caramel macchiatos: a traditional espresso macchiato is simply espresso marked with a dollop of foam, whereas a flavored macchiato is layered vanilla milk topped with espresso and caramel drizzle."
    ],
    orderingTips: [
      "Ask for 'Blonde Espresso' for a smoother, less roasty profile with slightly higher perceived caffeine.",
      "Brewed coffee refills may be eligible for registered Rewards members when staying inside participating stores.",
      "Standard hot tall cups receive 1 espresso shot, Grande receives 2 shots, and Venti receives 2 shots (Americanos and Flat Whites receive an extra shot)."
    ],
    seoTitle: "Starbucks Hot Coffee Menu: Drinks, Prices, Calories & Ordering Guide",
    seoDescription: "Explore the Starbucks hot coffee and espresso menu. Find typical reference prices, calorie counts, caffeine content, and barista ordering tips."
  },
  {
    id: "cold-coffee",
    slug: "cold-coffee",
    name: "Cold Brew & Iced Coffee",
    shortName: "Cold Coffee",
    tagline: "Slow-steeped cold brew, nitro cold brew, iced espresso, and shaken espressos.",
    description: "Cold coffee beverages at Starbucks include traditional iced coffee brewed with classic syrup, 20-hour slow-steeped cold brew, micro-nitrogen infused Nitro Cold Brew, and hand-shaken iced espressos topped with oatmilk or sweet cream.",
    type: "drinks",
    iconName: "IceCream2",
    heroExcerpt: "Smooth, bold, and refreshing iced coffee drinks engineered for distinct textures, from velvet Nitro foam to crisp Shaken Espressos.",
    popularItemsCount: 16,
    avgCalories: "5 - 280 kcal",
    priceRange: "$3.95 - $6.95 (Reference Range)",
    overviewContent: [
      "Starbucks Cold Brew is steeped in cool water for 20 hours, yielding a naturally sweeter, lower-acidity profile than traditional iced coffee.",
      "Nitro Cold Brew is served cold straight from the tap without ice to preserve its cascading velvety crema.",
      "Iced Shaken Espressos agitate espresso, ice, and syrup vigorously in a cocktail-style shaker before finishing with a splash of milk, producing an airy, froth-topped mouthfeel."
    ],
    orderingTips: [
      "Nitro Cold Brew is only served in Tall and Grande sizes to maintain nitrogen cascade stability.",
      "Standard iced coffee comes sweetened with Classic syrup unless you explicitly request 'unsweetened'.",
      "Cold Brew does not come sweetened by default unless ordered with flavored cold foam or vanilla sweet cream."
    ],
    seoTitle: "Starbucks Cold Coffee Menu: Cold Brew, Nitro & Iced Espresso Prices",
    seoDescription: "Complete guide to Starbucks cold brew, nitro cold brew, and iced shaken espresso drinks with reference prices, calories, and customization guide."
  },
  {
    id: "frappuccino",
    slug: "frappuccino",
    name: "Frappuccino® Blended Beverages",
    shortName: "Frappuccino",
    tagline: "Blended coffee and crème beverages topped with whipped cream and artisan drizzles.",
    description: "Starbucks blended Frappuccino beverages combine coffee or crème bases with ice, whole milk, flavored syrups, and whipped cream. They represent the sweetest, most dessert-like category on the menu.",
    type: "drinks",
    iconName: "Sparkles",
    heroExcerpt: "Creamy, icy blended beverages split between Coffee-based options for caffeine and Crème-based options for caffeine-free indulgence.",
    popularItemsCount: 14,
    avgCalories: "240 - 520 kcal",
    priceRange: "$4.95 - $7.25 (Reference Range)",
    overviewContent: [
      "Frappuccinos are formulated with a specialized emulsifying base syrup (coffee base or crème base) that prevents the ice and liquid from separating.",
      "Coffee Frappuccinos use Frappuccino Roast soluble coffee, while Crème Frappuccinos contain zero coffee unless espresso shots are added.",
      "Standard builds include whole milk and sweetened whipped cream unless modified by the customer."
    ],
    orderingTips: [
      "Request nonfat milk or almondmilk and no whipped cream to significantly reduce calorie density.",
      "You cannot order a completely sugar-free Frappuccino because the blending emulsifier syrup contains sugar necessary for texture.",
      "Add an 'Affogato-style shot' to have a hot shot of espresso poured directly over the top of the blended drink."
    ],
    seoTitle: "Starbucks Frappuccino Menu: Flavors, Prices, Calories & Nutrition",
    seoDescription: "Browse all Starbucks Frappuccino blended coffee and crème flavors. Review reference prices, nutrition facts, and calorie reduction tips."
  },
  {
    id: "refreshers",
    slug: "refreshers",
    name: "Starbucks Refreshers®",
    shortName: "Refreshers",
    tagline: "Iced fruit juice blends infused with green coffee extract and freeze-dried fruit pieces.",
    description: "Starbucks Refreshers provide a lighter caffeine boost through green coffee extract (unroasted arabica beans). They are shaken with real fruit inclusions and mixed with water, lemonade, or creamy coconutmilk.",
    type: "drinks",
    iconName: "Zap",
    heroExcerpt: "Vibrant, thirst-quenching iced fruit drinks powered by green coffee extract for gentle, refreshing energy without coffee flavor.",
    popularItemsCount: 10,
    avgCalories: "90 - 210 kcal",
    priceRange: "$4.45 - $6.45 (Reference Range)",
    overviewContent: [
      "All Refreshers contain natural caffeine from green coffee bean extract (approx. 45-55mg in a Grande size).",
      "Each flavor family has three primary variations: standard (mixed with water), lemonade-infused (tart & sweet), and coconutmilk-infused (e.g. Pink Drink, Dragon Drink).",
      "Real freeze-dried fruit pieces rehydrate in the shaker, imparting color and tart aroma to the beverage."
    ],
    orderingTips: [
      "You can customize your base: choose water, lemonade, coconutmilk, or green tea.",
      "If you prefer a stronger fruit concentrate flavor, you can ask for 'light water' or 'light ice'.",
      "Remember that Refreshers cannot be made completely decaf because the base concentrate itself is infused with green coffee extract."
    ],
    seoTitle: "Starbucks Refreshers Menu: Pink Drink, Flavors, Prices & Nutrition",
    seoDescription: "Discover Starbucks Refreshers drinks including Pink Drink, Mango Dragonfruit, and Strawberry Açaí. View prices, caffeine facts, and ingredients."
  },
  {
    id: "matcha",
    slug: "matcha",
    name: "Matcha Green Tea Beverages",
    shortName: "Matcha",
    tagline: "Finely ground Japanese green tea powder blended into hot lattes, iced drinks, and cold foams.",
    description: "Starbucks matcha is a sweetened blend of ground green tea and sugar. It is whisked or shaken with steamed or iced milk to create comforting lattes, iced matcha drinks, and vibrant seasonal toppings.",
    type: "drinks",
    iconName: "Leaf",
    heroExcerpt: "Earthy, velvety green tea beverages packed with antioxidants, natural l-theanine, and sustained caffeine energy.",
    popularItemsCount: 6,
    avgCalories: "140 - 320 kcal",
    priceRange: "$4.65 - $6.75 (Reference Range)",
    overviewContent: [
      "In North America, Starbucks matcha powder is pre-blended with sugar. The powder itself contains sugar, meaning matcha drinks cannot be completely sugar-free.",
      "A Grande Iced Matcha Latte standardly uses 3 scoops of matcha blend shaken with 2% milk and ice.",
      "Matcha cold foam has become one of the most popular customization add-ons for iced coffees and cold brews."
    ],
    orderingTips: [
      "For a creamier texture with subtle nuttiness, swap standard 2% milk for oatmilk or coconutmilk.",
      "To increase the green tea strength, ask for an extra scoop of matcha powder (this will also increase sugar content slightly).",
      "Matcha can be prepared either hot with microfoam or iced and shaken."
    ],
    seoTitle: "Starbucks Matcha Drinks: Menu, Prices, Sugar & Caffeine Content",
    seoDescription: "Complete guide to Starbucks matcha green tea lattes and iced drinks. Check reference prices, scoops, sugar content, and customization tips."
  },
  {
    id: "hot-tea",
    slug: "hot-tea",
    name: "Hot Brewed Teas",
    shortName: "Hot Tea",
    tagline: "Premium whole-leaf sachet teas spanning black, green, and herbal infusions.",
    description: "Sourced through quality botanicals and tea gardens, Starbucks hot teas feature whole-leaf sachets like Earl Grey, English Breakfast, Emperor's Clouds & Mist, and soothing herbal blends like Mint Majesty and Peach Tranquility.",
    type: "drinks",
    iconName: "Feather",
    heroExcerpt: "Whole-leaf teas and soothing tea lattes brewed hot for calming herbal comfort or bold black-tea morning energy.",
    popularItemsCount: 8,
    avgCalories: "0 kcal (Plain tea) / 130 - 240 kcal (Tea Lattes)",
    priceRange: "$3.25 - $5.45 (Reference Range)",
    overviewContent: [
      "Plain hot brewed tea sachets contain zero calories, zero sugar, and zero artificial flavorings.",
      "Tea Lattes (like the London Fog) steep tea sachets in hot water halfway, then top with vanilla syrup and velvety steamed milk.",
      "The famous customer-favorite 'Medicine Ball' (officially named Honey Citrus Mint Tea) combines Jade Citrus Mint, Peach Tranquility, steamed lemonade, and honey blend."
    ],
    orderingTips: [
      "Tall tea orders receive 1 sachet, while Grande and Venti receive 2 sachets.",
      "Herbal teas (Mint Majesty, Peach Tranquility, Chamomile) are completely caffeine-free.",
      "You can ask for extra hot water to do a second steep while in-store."
    ],
    seoTitle: "Starbucks Hot Tea Menu: Teas, London Fog, Prices & Calories",
    seoDescription: "Explore Starbucks hot brewed teas and tea lattes. View caffeine levels, zero-calorie options, Honey Citrus Mint facts, and prices."
  },
  {
    id: "cold-tea",
    slug: "cold-tea",
    name: "Iced Teas & Lemonades",
    shortName: "Cold Tea",
    tagline: "Crisp black, green, passion tango, and herbal iced teas shaken with ice or lemonade.",
    description: "Hand-shaken iced teas at Starbucks are freshly brewed and chilled, then shaken with ice 10 times to aerate and chill instantly. Options include unsweetened Black, Green, and caffeine-free Passion Tango tea, with or without lemonade.",
    type: "drinks",
    iconName: "Sun",
    heroExcerpt: "Refreshing hand-shaken iced teas offering clean hydration, crisp citrus pairings, and customizable sweetness.",
    popularItemsCount: 8,
    avgCalories: "0 - 130 kcal",
    priceRange: "$3.45 - $5.25 (Reference Range)",
    overviewContent: [
      "Standard shaken iced teas are prepared unsweetened by default across company-operated stores.",
      "Tea Lemonades combine equal parts brewed tea concentrate and tangy lemonade sweetened with sugar.",
      "Passion Tango is an herbal hibiscus and apple infusion that is naturally vibrant pink and 100% caffeine-free."
    ],
    orderingTips: [
      "You can customize your tea with liquid cane sugar, peach juice blend, or a splash of oatmilk.",
      "For a lighter beverage with a hint of sweetness, request 'half lemonade, half water' in your iced tea lemonade.",
      "Trenta (30 fl oz) size is available for all plain iced teas and iced tea lemonades."
    ],
    seoTitle: "Starbucks Iced Tea Menu: Shaken Teas, Lemonades, Prices & Nutrition",
    seoDescription: "Discover Starbucks shaken iced teas and tea lemonades. Check zero-calorie options, caffeine levels, peach tea customizations, and reference prices."
  },
  {
    id: "hot-chocolate",
    slug: "hot-chocolate",
    name: "Hot Chocolates & Steamers",
    shortName: "Hot Chocolate",
    tagline: "Rich mocha sauces steamed with milk and topped with fluffy whipped cream.",
    description: "Starbucks hot chocolates blend signature mocha or white chocolate mocha sauces with steamed milk, finished with whipped cream and cocoa drizzle. Steamers provide flavored steamed milk without coffee or chocolate.",
    type: "drinks",
    iconName: "Heart",
    heroExcerpt: "Decadent comfort in a cup: cocoa-rich hot chocolates and soothing vanilla steamers perfect for non-coffee drinkers.",
    popularItemsCount: 5,
    avgCalories: "190 - 450 kcal",
    priceRange: "$3.75 - $5.95 (Reference Range)",
    overviewContent: [
      "Classic Hot Chocolate contains a minor amount of natural caffeine (approx. 25mg in Grande) derived from cocoa solids in the mocha sauce.",
      "White Hot Chocolate uses cocoa butter and contains negligible caffeine (0-5mg).",
      "Kids' Hot Chocolates are served at a safe drinking temperature (130°F / 54°C) compared to standard adult steam temperatures (160°F)."
    ],
    orderingTips: [
      "Ask for 'kids' temperature' (130°F) if ordering for young children to avoid scald burns.",
      "Swap to nonfat milk or oatmilk and skip whipped cream to reduce saturated fat and calories.",
      "Add a pump of peppermint or hazelnut syrup for festive holiday-style hot chocolate year-round."
    ],
    seoTitle: "Starbucks Hot Chocolate Menu: Flavors, Prices & Nutrition Guide",
    seoDescription: "Detailed guide to Starbucks hot chocolates, white hot chocolate, and steamers. Review typical prices, calorie counts, and kids temperature ordering tips."
  },
  {
    id: "breakfast",
    slug: "breakfast",
    name: "Hot Breakfast Sandwiches & Wraps",
    shortName: "Breakfast",
    tagline: "Warm egg sandwiches, sous vide egg bites, and hearty morning wraps.",
    description: "Starbucks breakfast food includes high-protein egg sandwiches on croissants, brioche buns, and artisan English muffins, alongside sous vide egg bites cooked in a French water bath for a creamy texture.",
    type: "food",
    iconName: "Utensils",
    heroExcerpt: "Protein-rich breakfast sandwiches, bacon gouda croissants, and velvety gluten-conscious egg bites warmed to order.",
    popularItemsCount: 12,
    avgCalories: "170 - 540 kcal",
    priceRange: "$4.95 - $7.45 (Reference Range)",
    overviewContent: [
      "Sous Vide Egg Bites are prepared using vacuum-sealed water baths before being toasted in-store, yielding a custard-like texture under 300 calories per pair.",
      "Breakfast sandwiches are pre-assembled at central commissaries and toasted to order in high-speed convection ovens.",
      "Because sandwiches arrive pre-assembled, individual components (like cheese or bacon) cannot always be removed from the interior patty."
    ],
    orderingTips: [
      "Egg White & Roasted Red Pepper Sous Vide Egg Bites provide 12g protein for only 170 calories.",
      "Ask for your sandwich 'double toasted' if you prefer a crispier bread and browner cheese.",
      "Pair with a zero-calorie black Americano or unsweetened cold brew for a high-protein, calorie-conscious breakfast."
    ],
    seoTitle: "Starbucks Breakfast Menu: Sandwiches, Egg Bites, Prices & Calories",
    seoDescription: "Review Starbucks hot breakfast sandwiches, wraps, and sous vide egg bites. Check reference prices, protein counts, and nutrition details."
  },
  {
    id: "bakery",
    slug: "bakery",
    name: "Bakery & Pastries",
    shortName: "Bakery",
    tagline: "Flaky butter croissants, hearty bagels, iced lemon loaves, and seasonal scones.",
    description: "The Starbucks bakery case features classic morning pastries, butter croissants, artisan bagels with cream cheese, moist pound cakes, and scones, warmed upon request to bring out flaky layers and rich butter aromas.",
    type: "food",
    iconName: "Cookie",
    heroExcerpt: "Artisan bagels, buttery warm croissants, cinnamon coffee cake, and famous iced lemon loaf slices.",
    popularItemsCount: 14,
    avgCalories: "250 - 480 kcal",
    priceRange: "$2.95 - $4.95 (Reference Range)",
    overviewContent: [
      "All bakery items can be ordered warmed or at room temperature. Warming improves the texture of croissants and scones.",
      "The Iced Lemon Loaf and Banana Walnut Bread are served sliced at room temperature to preserve their moist icing and crumb structure.",
      "Bagel options standardly include Plain, Everything, and Cinnamon Raisin, with individually packaged cream cheese, butter, or avocado spread available for purchase."
    ],
    orderingTips: [
      "Cream cheese, butter, and avocado spread are charged separately as packaged add-ons in many locations.",
      "The Butter Croissant has approximately 260 calories and pairs well with unsweetened espresso drinks.",
      "Bakery items contain wheat, milk, and eggs; cross-contact can occur in shared display cases and warming ovens."
    ],
    seoTitle: "Starbucks Bakery Menu: Croissants, Bagels, Loaves, Prices & Nutrition",
    seoDescription: "Explore the Starbucks bakery case. View reference prices, calorie counts, warming guidelines, and pastry allergen information."
  },
  {
    id: "treats",
    slug: "treats",
    name: "Cake Pops, Cookies & Sweet Treats",
    shortName: "Treats & Cake Pops",
    tagline: "Bite-sized cake pops on a stick, artisan cookies, brownies, and marshmallow bars.",
    description: "Starbucks treats provide sweet, bite-sized indulgences including birthday cake pops, chocolate cake pops, rich chocolate chunk cookies, double chocolate brownies, and gluten-free marshmallow dream bars.",
    type: "food",
    iconName: "Sparkle",
    heroExcerpt: "Signature bite-sized cake pops, double chocolate brownies, and chewy cookies for an afternoon sweet treat.",
    popularItemsCount: 8,
    avgCalories: "140 - 380 kcal",
    priceRange: "$2.75 - $4.45 (Reference Range)",
    overviewContent: [
      "Cake pops consist of moist crumbled cake blended with frosting, formed into a sphere, dipped in chocolatey confectionery coating, and served on a stick.",
      "The Marshmallow Dream Bar is certified gluten-free, making it one of the few safe sweet treats for gluten-sensitive guests.",
      "Seasonal cake pops (like owl, bumblebee, or snowman shapes) rotate throughout the year."
    ],
    orderingTips: [
      "Birthday Cake Pops contain roughly 160 calories and 18g sugar per pop.",
      "Cookies and brownies can be requested 'warmed' for gooey melted chocolate pockets.",
      "Many stores offer multi-pack cake pop discounts or bundles when available."
    ],
    seoTitle: "Starbucks Cake Pops & Treats: Flavors, Prices & Calorie Breakdown",
    seoDescription: "Discover Starbucks cake pops, brownies, and cookies. Find out reference prices, calorie facts, sugar content, and gluten-free options."
  },
  {
    id: "lunch",
    slug: "lunch",
    name: "Lunch Sandwiches, Paninis & Protein Boxes",
    shortName: "Lunch",
    tagline: "Toasted paninis, grilled cheese on sourdough, and balanced protein snack boxes.",
    description: "Starbucks lunch offerings provide satisfying midday meals, including warm toasted sourdough paninis, turkey pesto baguettes, and fresh Protein Boxes containing hard-boiled eggs, cheeses, fruit, crackers, and peanut butter.",
    type: "food",
    iconName: "ShoppingBag",
    heroExcerpt: "Hearty toasted paninis, crispy sourdough grilled cheese, and grab-and-go nutrient-balanced protein boxes.",
    popularItemsCount: 10,
    avgCalories: "380 - 630 kcal",
    priceRange: "$5.95 - $9.45 (Reference Range)",
    overviewContent: [
      "Protein Boxes (Eggs & Cheddar, Cheese & Fruit, PB&J) are served chilled and are designed for portable, balanced snacking.",
      "Paninis (such as Tomato & Mozzarella on Focaccia or Turkey Bacon Pesto) are toasted on specialty parchment in high-temp ovens.",
      "Lunch quantities can vary significantly by store and time of day, often selling out by early afternoon."
    ],
    orderingTips: [
      "The Tomato & Mozzarella Focaccia Panini is a reliable vegetarian hot lunch option.",
      "Protein boxes are great for travel and require zero warming or cutlery.",
      "Check expiration dates on fresh grab-and-go boxes located in the front open-air cooler."
    ],
    seoTitle: "Starbucks Lunch Menu: Paninis, Protein Boxes, Prices & Nutrition",
    seoDescription: "Browse Starbucks lunch options including toasted paninis and protein snack boxes. Review calorie facts, reference prices, and ingredients."
  },
  {
    id: "lite-bites",
    slug: "lite-bites",
    name: "Snacks, Oatmeal & Lite Bites",
    shortName: "Lite Bites & Snacks",
    tagline: "Whole-grain hot oatmeal, nut mixes, fruit crisps, popcorn, and jerky snacks.",
    description: "Lite bites at Starbucks offer convenient, shelf-stable, or hot whole-grain options like Rolled & Steel-Cut Oatmeal with customizable toppings (brown sugar, dried fruit, nuts), popcorn, chips, and artisan snack bars.",
    type: "food",
    iconName: "Smile",
    heroExcerpt: "Whole grain steel-cut oatmeal, almonds, organic popcorn, and grab-and-go energy bars for light snacking.",
    popularItemsCount: 8,
    avgCalories: "120 - 410 kcal",
    priceRange: "$2.25 - $4.95 (Reference Range)",
    overviewContent: [
      "Classic Rolled & Steel-Cut Oatmeal is prepared by steeping whole-grain oats in boiling water, served with customer's choice of toppings on the side.",
      "Plain oatmeal with water is only 160 calories with 0g added sugar; toppings like brown sugar (50 kcal) and nut medleys (100 kcal) can be added according to preference.",
      "Pre-packaged snacks like kettle potato chips, organic beef jerky, and snack bars meet strict quality standards."
    ],
    orderingTips: [
      "You can ask for your oatmeal to be prepared with steamed oatmilk or nonfat milk instead of water for extra creaminess.",
      "Keep topping packets separate if you want to control sugar and calorie intake.",
      "A great budget-friendly, high-fiber breakfast under $4.50."
    ],
    seoTitle: "Starbucks Snacks & Oatmeal Menu: Prices, Calories & Nutrition",
    seoDescription: "Guide to Starbucks oatmeal, popcorn, snack bars, and light bites. View reference prices, customizable toppings, and health facts."
  }
];
