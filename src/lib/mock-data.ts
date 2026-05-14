export type FoodItem = { name: string; emoji: string };

export const FOOD_SETS: { label: string; items: FoodItem[] }[] = [
  {
    label: "Understanding food triggers",
    items: [
      { name: "Coffee", emoji: "☕" },
      { name: "Red wine", emoji: "🍷" },
      { name: "Aged cheese", emoji: "🧀" },
      { name: "Chocolate", emoji: "🍫" },
      { name: "Citrus", emoji: "🍊" },
      { name: "Cured meat", emoji: "🥓" },
      { name: "MSG", emoji: "🧂" },
      { name: "Sweeteners", emoji: "🍬" },
      { name: "Nuts", emoji: "🥜" },
    ],
  },
  {
    label: "Today's meals",
    items: [
      { name: "Bread", emoji: "🍞" },
      { name: "Pasta", emoji: "🍝" },
      { name: "Eggs", emoji: "🍳" },
      { name: "Yogurt", emoji: "🥣" },
      { name: "Bananas", emoji: "🍌" },
      { name: "Tomato", emoji: "🍅" },
      { name: "Onion", emoji: "🧅" },
      { name: "Garlic", emoji: "🧄" },
      { name: "Spicy", emoji: "🌶️" },
    ],
  },
  {
    label: "Drinks & extras",
    items: [
      { name: "Beer", emoji: "🍺" },
      { name: "Energy drink", emoji: "🥤" },
      { name: "Soda", emoji: "🥫" },
      { name: "Tea", emoji: "🍵" },
      { name: "Ice cream", emoji: "🍦" },
      { name: "Pickles", emoji: "🥒" },
      { name: "Soy sauce", emoji: "🍶" },
      { name: "Vinegar", emoji: "🫙" },
      { name: "Smoked fish", emoji: "🐟" },
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
