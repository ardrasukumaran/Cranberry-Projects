import noWaterFor2Hrs from "@/assets/triggers/icons/no-water-for-2-hrs.png";
import skippedAMeal from "@/assets/triggers/icons/skipped-a-meal.png";
import dayOldFridgeLeftovers from "@/assets/triggers/icons/day-old-fridge-leftovers.png";
import overripeFruitVegetable from "@/assets/triggers/icons/overripe-fruit-vegetable.png";
import salamiSausagesBacon from "@/assets/triggers/icons/salami-sausages-bacon.png";
import saltedFish from "@/assets/triggers/icons/salted-fish.png";
import agedCheeseParmesanBrieCheddar from "@/assets/triggers/icons/aged-cheese-parmesan-brie-cheddar.png";
import alcoholAny from "@/assets/triggers/icons/alcohol-any.png";
import pickleAchaar from "@/assets/triggers/icons/pickle-achaar.png";
import driedFruitsRaisinsAnjeerDates from "@/assets/triggers/icons/dried-fruits-raisins-anjeer-dates.png";
import twoDayOldDosaIdliBatter from "@/assets/triggers/icons/2-day-old-dosa-idli-batter.png";
import peanutWalnutCashewSesameSeeds from "@/assets/triggers/icons/peanut-walnut-cashew-sesame-seeds.png";
import anyChineseFoodInstantNoodles from "@/assets/triggers/icons/any-chinese-food-instant-noodles.png";
import chocolate from "@/assets/triggers/icons/chocolate.png";
import sugarFreeOrAnythingWithIt from "@/assets/triggers/icons/sugar-free-or-anything-with-it.png";
import artificialColouringSoftDrinkSyrup from "@/assets/triggers/icons/artificial-colouring-soft-drink-syrup.png";
import nearExpiryPackagedFood from "@/assets/triggers/icons/near-expiry-packaged-food.png";
import twoDayOldMeatFish from "@/assets/triggers/icons/2-day-old-meat-fish.png";
import buttermilkChaas from "@/assets/triggers/icons/buttermilk-chaas.png";
import caffeinatedDrinkTeaCoffeeSoftDrink from "@/assets/triggers/icons/caffeinated-drink-tea-coffee-soft-drink.png";
import rawOnion from "@/assets/triggers/icons/raw-onion.png";
import brinjal from "@/assets/triggers/icons/brinjal.png";
import citrusFruitOrangeLemonLimePineapple from "@/assets/triggers/icons/citrus-fruit-orange-lemon-lime-pineapple.png";
import sweetsMithaiIceCream from "@/assets/triggers/icons/sweets-mithai-ice-cream.png";
import curd from "@/assets/triggers/icons/curd.png";
import papadFryums from "@/assets/triggers/icons/papad-fryums.png";
import rajmaChickpeas from "@/assets/triggers/icons/rajma-chickpeas.png";

export type FoodItem = { name: string; icon: string };

export const FOOD_SETS: { label: string; items: FoodItem[] }[] = [
  {
    label: "Hydration & leftovers",
    items: [
      { name: "No water for 2 hrs", icon: noWaterFor2Hrs },
      { name: "Skipped a meal", icon: skippedAMeal },
      { name: "Day-old fridge leftovers", icon: dayOldFridgeLeftovers },
      { name: "Overripe fruit/vegetable", icon: overripeFruitVegetable },
      { name: "Salami/Sausages/Bacon", icon: salamiSausagesBacon },
      { name: "Salted Fish", icon: saltedFish },
      { name: "Aged cheese: parmesan, brie, cheddar", icon: agedCheeseParmesanBrieCheddar },
      { name: "Alcohol (any)", icon: alcoholAny },
      { name: "Pickle/Achaar", icon: pickleAchaar },
    ],
  },
  {
    label: "Pantry & packaged",
    items: [
      { name: "Dried Fruits (Raisins/Anjeer/Dates)", icon: driedFruitsRaisinsAnjeerDates },
      { name: "2-day old dosa/idli batter", icon: twoDayOldDosaIdliBatter },
      { name: "Peanut/Walnut/Cashew/Sesame seeds", icon: peanutWalnutCashewSesameSeeds },
      { name: "Any Chinese food/Instant noodles", icon: anyChineseFoodInstantNoodles },
      { name: "Chocolate", icon: chocolate },
      { name: "Sugar free or anything with it", icon: sugarFreeOrAnythingWithIt },
      { name: "Artificial colouring (soft drink/syrup)", icon: artificialColouringSoftDrinkSyrup },
      { name: "Near-expiry packaged food", icon: nearExpiryPackagedFood },
      { name: "2-day-old meat/fish", icon: twoDayOldMeatFish },
    ],
  },
  {
    label: "Drinks & everyday foods",
    items: [
      { name: "Buttermilk/Chaas", icon: buttermilkChaas },
      { name: "Caffeinated drink (tea/coffee/soft drink)", icon: caffeinatedDrinkTeaCoffeeSoftDrink },
      { name: "Raw onion", icon: rawOnion },
      { name: "Brinjal", icon: brinjal },
      { name: "Citrus fruit (Orange/Lemon/Lime/Pineapple)", icon: citrusFruitOrangeLemonLimePineapple },
      { name: "Sweets/Mithai/Ice cream", icon: sweetsMithaiIceCream },
      { name: "Curd", icon: curd },
      { name: "Papad/Fryums", icon: papadFryums },
      { name: "Rajma/Chickpeas", icon: rajmaChickpeas },
    ],
  },
];

export const LIFESTYLE = ["Poor sleep", "Skipped meal", "Dehydration", "Long screen time", "Intense exercise", "Travel"];
export const ENVIRONMENT = ["Bright light", "Loud noise", "Strong smell", "Weather change", "High humidity", "Heat"];
export const HORMONAL = ["Period", "Ovulation", "PMS", "Pregnancy", "Menopause"];

export const SYMPTOMS = ["Aura", "Nausea", "Light sensitivity", "Sound sensitivity", "Throbbing", "Vision changes", "Dizziness", "Neck pain"];
export const LOCATIONS = ["Left", "Right", "Front", "Back", "Whole head"];

export const RECENT_ATTACKS = [
  { date: "Tue, May 12", duration: "4h 20m", intensity: 7, triggers: ["Red wine", "Poor sleep"] },
  { date: "Sat, May 09", duration: "2h 10m", intensity: 5, triggers: ["Weather change"] },
  { date: "Wed, May 06", duration: "6h 45m", intensity: 8, triggers: ["Skipped meal", "Bright light"] },
];

export const TOP_TRIGGERS = [
  { name: "Poor sleep", correlation: 82, count: 14 },
  { name: "Red wine", correlation: 71, count: 9 },
  { name: "Skipped meal", correlation: 64, count: 11 },
  { name: "Weather change", correlation: 58, count: 8 },
  { name: "Bright light", correlation: 49, count: 6 },
];

// Calendar heatmap mock — last 35 days, intensity 0–10
export const CALENDAR_DATA: number[] = [
  0, 0, 3, 0, 0, 0, 5,
  0, 0, 0, 7, 0, 0, 0,
  0, 4, 0, 0, 0, 8, 0,
  0, 0, 0, 0, 5, 0, 0,
  6, 0, 0, 0, 0, 0, 7,
];

export const BADGES = [
  { name: "First check-in", earned: true, desc: "You showed up for yourself" },
  { name: "Gentle week", earned: true, desc: "5+ clear days in a week" },
  { name: "Pattern spotter", earned: true, desc: "Identified 3 triggers" },
  { name: "Calmer month", earned: false, desc: "Fewer attacks than last month" },
  { name: "Doctor ready", earned: false, desc: "Exported first report" },
];
