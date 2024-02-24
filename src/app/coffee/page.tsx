import React from "react";
import { CoffeeIngredients, CoffeeRecipes } from "../data";
import MenuItem from "../components/menu-item";

const Coffee: React.FC = () => {
  return (
    <div>
      <h1>Coffee</h1>
      <p>Some coffee stuff</p>
      {Object.entries(CoffeeRecipes).map((items) => (
        <MenuItem
          name={items[0]}
          ingredients={items[1].map((e) => CoffeeIngredients[e])}
        />
      ))}
    </div>
  );
};

export default Coffee;
