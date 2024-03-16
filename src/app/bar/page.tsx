import React from "react";
import ThemeProvider from "../util/theme-provider";
import { BarRecipes } from "../data";
import MenuItem from "../components/menu-item";

const Bar: React.FC = () => {
  return (
    <>
      <h1>Bar</h1>
      <p>Bar</p>
      {Object.entries(BarRecipes).map((items) => (
        <MenuItem name={items[0]} recipe={items[1]} />
      ))}
    </>
  );
};

export default Bar;
