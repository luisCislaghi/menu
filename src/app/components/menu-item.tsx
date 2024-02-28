import React from "react";
import { titleCase } from "../util/string";
import { Recipe } from "../data/recipes";

const MenuItem: React.FC<{ name: string; recipe: Recipe }> = ({
  name,
  recipe,
}) => {
  return (
    <div key={name} className="mb-2 border-b border-stone-400">
      <h2 className="font-cafeTitle">{titleCase(recipe.title)}</h2>
      <div className="flex gap-2 font-cafeBody">{recipe.description}</div>
    </div>
  );
};

export default MenuItem;
