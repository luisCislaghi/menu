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
        500: "#9C6644",
        600: "#7F5539",
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
        "cafe-title": ["Meta\\ Serif", "Inter"],
        "cafe-body": ["Montserrat", ...defaultTheme.fontFamily.sans],
        "bar-title": ["Akkurat", ...defaultTheme.fontFamily.sans],
        "bar-body": ["Akkurat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
