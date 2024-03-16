"use client";

import React, { useContext } from "react";
import { titleCase } from "../util/string";
import cn from "../util/cn";

const MenuGroup: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div
      className={cn("text-cafe-300  text-2xl font-bold mb-2  border-stone-400")}
    >
      <h2 className={cn("font-cafe-title")}>{titleCase(name)}</h2>
    </div>
  );
};

export default MenuGroup;
