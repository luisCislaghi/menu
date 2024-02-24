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
        "p-2 bg-red-400",
        {
          active: active,
        },
        className
      )}
    >
      <a href={href}>{name}</a>
    </li>
  );
};

export default NavItem;
