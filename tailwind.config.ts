import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...defaultTheme.colors,
      cafe: {
        50: "#FCFBF9",
        100: "#EDE0D4",
        200: "#E6CCB2",
        300: "#DDB892",
        400: "#B08968",
        500: "#7F5539",
        600: "#9C6644",
      },
      bar: {
        moss: "#606c38",
        forrest: "#283618",
        beige: "#fefae0",
        "earth-yellow": "#dda15e",
        "tigers-eye": "#bc6c25",
      },
    },
    extend: {
      fontFamily: {
        cafeTitle: ["Meta\\ Serif", "Inter"],
        cafeBody: ["Montserrat", ...defaultTheme.fontFamily.sans],
        barTitle: ["Akkurat", ...defaultTheme.fontFamily.sans],
        barBody: ["Akkurat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
