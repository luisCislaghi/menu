import React from "react";
import { NavProps } from "./types";
import NavItem from "./item";

const Nav: React.FC<NavProps> = ({ items }) => {
  return (
    <ul className="flex flex-1">
      {items.map((item, index) => (
        <NavItem key={index} {...item} />
      ))}
    </ul>
  );
};

export default Nav;
