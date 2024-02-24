import React from "react";
import { titleCase } from "../util/string";

const MenuItem: React.FC<{ ingredients: string[]; name: string }> = ({
  ingredients,
  name,
}) => {
  return (
    <div key={name} className="mb-2 border-b border-stone-400">
      <h2 className="font-cafeTitle">{titleCase(name)}</h2>
      <ul className="flex gap-2 font-cafeBody">
        {ingredients.map((ingredient, index) => (
          <li className="inline-block" key={index}>
            {titleCase(ingredient)}
            {index === ingredients.length - 1 ? "" : ", "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItem;
