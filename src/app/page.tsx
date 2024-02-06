import Image from "next/image";
import { FC } from "react";

export default function Home() {
  return (
    <main className="flex">
      <nav className="flex-1">
        <ul className="flex flex-1">
          <MenuItem name="Coffee" href="/coffee" />
          <MenuItem name="Bar" href="/bar" />
        </ul>
      </nav>
    </main>
  );
}

const MenuItem: FC<{ name: string; href: string }> = ({ name, href }) => {
  return (
    <li className=" p-2 bg-red-400">
      <a href={href}>{name}</a>
    </li>
  );
};
