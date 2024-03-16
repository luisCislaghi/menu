"use client";

import React, { useContext } from "react";
import { titleCase } from "../util/string";
import { Recipe } from "../data/recipes";
import { ThemeContext } from "../util/theme-provider";
import cn from "../util/cn";

const MenuItem: React.FC<{ name: string; recipe: Recipe }> = ({
  name,
  recipe,
}) => {
  const theme = useContext(ThemeContext);
  return (
    <div key={name} className={cn(" mb-2  border-stone-400", theme.colorText)}>
      <h3 className={cn("font-semibold", theme.fontTitle)}>
        {titleCase(recipe.title)}
      </h3>
      <p className={cn(" flex gap-2", theme.fontBody)}>{recipe.description}</p>
    </div>
  );
};

export default MenuItem;
