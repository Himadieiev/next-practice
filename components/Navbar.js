"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import css from "../styles/Navbar.module.scss";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={css.nav}>
      <div className={css.logo}>RH</div>
      <div className={css.links}>
        {navigation.map(({ id, title, path }) => (
          <Link
            key={id}
            href={path}
            className={pathname === path ? css.active : ""}
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
