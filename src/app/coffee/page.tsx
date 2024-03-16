"use client";
import React, { useContext, useEffect, useRef } from "react";
import { CoffeeIngredients, CoffeeRecipes } from "../data";
import MenuItem from "./menu-item";
import ThemeProvider, { ThemeContext } from "../util/theme-provider";
import { useTheme } from "../util/useTheme";
import cn from "../util/cn";
import MenuGroup from "./menu-group";

const Coffee: React.FC = () => {
  const themeName = useTheme();
  return (
    <ThemeProvider type={themeName}>
      <div className={cn("p-4 flex-1 bg-cafe-50 text-cafe-600")}>
        <h1 className={cn(" text-center text-3xl mt-2 mb-4 font-cafe-title")}>
          The Coffee
        </h1>
        {Object.entries(CoffeeRecipes).map((group, i) => (
          <div key={group[0]} className="mb-6">
            <MenuGroup name={group[0]} />
            {Object.entries(group[1]).map((items, u) => (
              <MenuItem key={u} name={items[0]} recipe={items[1]} />
            ))}
          </div>
        ))}
      </div>
    </ThemeProvider>
  );
};

export default Coffee;
