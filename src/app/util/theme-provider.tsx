"use client";

import React, { createContext, FC } from "react";

const DEFAULT_THEME = {
  fontTitle: "font-cafeTitle",
  fontBody: "font-cafeBody",
  colorBg: "bg-cafe-50",
  colorText: "text-cafe-600",
};

const themes = {
  cafe: DEFAULT_THEME,
  bar: {
    fontTitle: "font-barTitle",
    fontBody: "font-barBody",
    colorBg: "bar-beige",
    colorText: "bar-moss",
  },
};

export const ThemeContext = createContext(DEFAULT_THEME);

const ThemeProvider: FC<{
  type?: "cafe" | "bar";
  children: React.ReactNode;
}> = ({ type = "cafe", children }) => {
  return (
    <ThemeContext.Provider value={themes[type]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
