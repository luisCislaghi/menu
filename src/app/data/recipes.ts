import { BarIngredients as BI } from "./ingredients";
import { CoffeeIngredients as CI } from "./ingredients";

export const BarRecipes = {
  mojito: [BI.RUM, BI.MINT, BI.LIME, BI.SUGAR, BI.SODA],
} as const;

export type Recipe = {
  title: string;
  description: string;
  ingredients: number[];
};

export const CoffeeRecipes: Record<string, Recipe> = {
  espresso: {
    title: "Espresso",
    description: "A full-flavored, concentrated form of coffee.",
    ingredients: [CI.ESPRESSO],
  },
  v60: {
    title: "V60",
    description: "A method of coffee brewing that uses a cone-shaped dripper.",
    ingredients: [CI.COFFEE],
  },
  aeropress: {
    title: "Aeropress",
    description: "Brewed coffee by infusion and little pressure.",
    ingredients: [CI.COFFEE],
  },
  cappuccino: {
    title: "Cappuccino",
    description:
      "Espresso, steamed milk foam and cocoa powder/cinnamon powder.",
    ingredients: [CI.ESPRESSO, CI.MILK, CI.COCOA_POWDER],
  },
  latte: {
    title: "Latte",
    description: "Espresso and steamed milk.",
    ingredients: [CI.ESPRESSO, CI.MILK],
  },
  flat_white: {
    title: "Flat White",
    description: "Espresso and steamed milk.",
    ingredients: [CI.ESPRESSO, CI.MILK],
  },
  iced_latte_caramel: {
    title: "Iced Caramel Latte",
    description: "A cold coffee drink made with espresso, milk, and caramel.",
    ingredients: [CI.ESPRESSO, CI.MILK, CI.CARAMEL],
  },
  iced_latte: {
    title: "Iced Latte",
    description: "A cold coffee drink made with espresso and chilled milk.",
    ingredients: [CI.ESPRESSO, CI.MILK],
  },
  americano: {
    title: "Americano",
    description: "Espresso with added hot water.",
    ingredients: [CI.COFFEE],
  },
  affogato: {
    title: "Affogato",
    description:
      'A coffee-based dessert. Vanilla gelato "drowned" with a shot of hot espresso.',
    ingredients: [CI.ESPRESSO, CI.ICE_CREAM],
  },
} as const;
