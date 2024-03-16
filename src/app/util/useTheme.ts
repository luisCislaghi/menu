import { usePathname } from "next/navigation";

export const useTheme = () => {
  const pathname = usePathname();
  return pathname === "/bar" ? "bar" : "cafe";
};
