"use client";
import React, { useContext } from "react";
import { CoffeeIngredients, CoffeeRecipes } from "./data";
import MenuItem from "./components/menu-item";
import ThemeProvider, { ThemeContext } from "./util/theme-provider";
import { useTheme } from "./util/useTheme";
import cn from "./util/cn";
import MenuGroup from "./components/menu-group";

const Coffee: React.FC = () => {
  const themeName = useTheme();
  const theme = useContext(ThemeContext);
  return (
    <ThemeProvider type={themeName}>
      <div className={cn("p-2", theme.colorBg)}>
        <h1
          className={cn(
            "text-center  text-3xl mb-4",
            theme.fontTitle,
            theme.colorText
          )}
        >
          The Coffee
        </h1>
        {Object.entries(CoffeeRecipes).map((group, i) => (
          <>
            <MenuGroup key={group[0]} name={group[0]} />
            {Object.entries(group[1]).map((items, u) => (
              <MenuItem key={u} name={items[0]} recipe={items[1]} />
            ))}
          </>
        ))}
      </div>
    </ThemeProvider>
  );
};

export default Coffee;
