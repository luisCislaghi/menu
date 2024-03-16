"use client";

import React, { useContext } from "react";
import { titleCase } from "../util/string";
import { Recipe } from "../data/recipes";
import { ThemeContext } from "../util/theme-provider";
import cn from "../util/cn";

const MenuGroup: React.FC<{ name: string }> = ({ name }) => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={cn("text-xl mb-2 border-b border-stone-400", theme.colorText)}
    >
      <h2 className={cn("", theme.fontTitle)}>{titleCase(name)}</h2>
    </div>
  );
};

export default MenuGroup;
