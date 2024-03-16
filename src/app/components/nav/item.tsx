import cn from "@/app/util/cn";
import { NavItemProps } from "./types";
import { FC } from "react";

const NavItem: FC<NavItemProps> = ({
  name,
  className,
  href,
  active = false,
}) => {
  return (
    <li
      className={cn(
        "p-2 bg-yellow-50",
        {
          "bg-green-200": active,
        },
        className
      )}
    >
      <a href={href}>{name}</a>
    </li>
  );
};

export default NavItem;
