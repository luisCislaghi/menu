export type NavProps = {
  items: NavItemProps[];
};
export type NavItemProps = {
  name: string;
  href: string;
  active?: boolean;
  className?: string;
};
