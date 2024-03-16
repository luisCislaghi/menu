import { BarIngredients as BI } from "./ingredients";
import { CoffeeIngredients as CI } from "./ingredients";

export const BarRecipes: Record<string, Recipe> = {
  mojito: {
    title: "Mojito",
    description: "A traditional Cuban highball.",
    ingredients: [BI.RUM, BI.MINT, BI.LIME, BI.SUGAR, BI.SODA],
  },
} as const;

export type RecipeRecord = Record<string, Recipe>;

export type RecipeGroup = Record<string, RecipeRecord>;

export type Recipe = {
  title: string;
  description: string;
  ingredients: number[];
};

export const CoffeeRecipes: RecipeGroup = {
  hot: {
    espresso: {
      title: "Espresso",
      description: "Café intenso, dose dupla",
      ingredients: [CI.ESPRESSO],
    },
    v60: {
      title: "V60",
      description: "Café suave, método de coado japonês",
      ingredients: [CI.COFFEE],
    },
    aeropress: {
      title: "Aeropress",
      description: "Café encorpado, com um final limpo",
      ingredients: [CI.COFFEE],
    },
    cappuccino: {
      title: "Cappuccino",
      description: "Espresso forte com leite vaporizado e coberto com espuma",
      ingredients: [CI.ESPRESSO, CI.MILK, CI.COCOA_POWDER],
    },
    latte: {
      title: "Latte",
      description:
        "Espresso cremoso com leite vaporizado, perfeito para um sabor mais suave",
      ingredients: [CI.ESPRESSO, CI.MILK],
    },
    flat_white: {
      title: "Flat White",
      description:
        "Espresso suave com leite vaporizado aveludado, menos espumoso que um latte",
      ingredients: [CI.ESPRESSO, CI.MILK],
    },

    americano: {
      title: "Americano",
      description: "Espresso forte diluído em água quente",
      ingredients: [CI.COFFEE],
    },
  },
  cold: {
    iced_latte: {
      title: "Iced Latte",
      description: "Espresso gelado com leite",
      ingredients: [CI.ESPRESSO, CI.MILK],
    },
    iced_latte_caramel: {
      title: "Iced Caramel Latte",
      description: "Espresso gelado com leite e um toque de caramelo",
      ingredients: [CI.ESPRESSO, CI.MILK, CI.CARAMEL],
    },
    iced_americano: {
      title: "Iced Americano",
      description: "Espresso gelado diluído em água",
      ingredients: [CI.COFFEE],
    },
    affogato: {
      title: "Affogato",
      description:
        'Uma bola de gelatto de baunilha "afogada" em um shot de espresso quente',
      ingredients: [CI.ESPRESSO, CI.ICE_CREAM],
    },
  },
} as const;
