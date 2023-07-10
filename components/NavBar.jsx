import Link from "next/link";
import React from "react";
import ActiveLink from "./ActiveLink";
import styles from "./NavBar.module.css";
const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
  
];
const NavBar = () => {
  return (
  <nav className={styles["menu-container"]}>
       {
         menuItems?.map(({href,text}) => (
          <ActiveLink key={href} href={href} name={text} />
        ))
       }
  </nav>
  )
};

export default NavBar;
