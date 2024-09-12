"use client";
import React from "react";
import { NavProps } from "./types";
import NavItem from "./item";
import ThemeProvider from "@/app/util/theme-provider";
import { usePathname } from "next/navigation";
import { useTheme } from "@/app/util/useTheme";

const Nav: React.FC<NavProps> = ({ items }) => {
  const pathname = usePathname();
  const theme = useTheme();
  return (
    <ThemeProvider type={theme}>
      <ul className="flex flex-1">
        {items.map((item, index) => (
          <NavItem key={index} active={item.href === pathname} {...item} />
        ))}
      </ul>
    </ThemeProvider>
  );
};

export default Nav;
