import { BarIngredients as BI } from "./ingredients";
import { CoffeeIngredients as CI } from "./ingredients";

export const BarRecipes = {
  mojito: [BI.RUM, BI.MINT, BI.LIME, BI.SUGAR, BI.SODA],
} as const;

export const CoffeeRecipes = {
  espresso: [CI.ESPRESSO],
  v60: [CI.COFFEE],
  aeropress: [CI.COFFEE],
  cappuccino: [CI.ESPRESSO, CI.MILK, CI.COCOA_POWDER],
  latte: [CI.ESPRESSO, CI.MILK],
  flat_white: [CI.ESPRESSO, CI.MILK],
  iced_latte_caramel: [CI.ESPRESSO, CI.MILK, CI.CARAMEL],
  iced_latte: [CI.ESPRESSO, CI.MILK],
  americano: [CI.COFFEE],
  affogato: [CI.ESPRESSO, CI.ICE_CREAM],
} as const;
