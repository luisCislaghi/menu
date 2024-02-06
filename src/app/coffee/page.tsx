import React from "react";
import { CoffeeRecipes } from "../data";
import MenuItem from "../components/item";

const Coffee: React.FC = () => {
  return (
    <div>
      <h1>Coffee</h1>
      <p>Some coffee stuff</p>
      {Object.keys(CoffeeRecipes).map((key) => (
        <div key={key}>
          <MenuItem
            name={key}
            ingredients={CoffeeRecipes[key].map((e) => e.toString())}
          />
        </div>
      ))}
    </div>
  );
};

export default Coffee;
