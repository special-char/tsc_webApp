import React, { memo } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      name: "home",
      link: "#",
    },
    {
      id: 2,
      name: "about",
      link: "/about",
    },
    {
      id: 3,
      name: "courses",
      link: "/courses",
    },
    {
      id: 4,
      name: "blog",
      link: "/blog",
    },
    {
      id: 5,
      name: "contact",
      link: "/contact",
    },
  ];
  console.log("Navbar called");
  return (
    <>
      <section
        className="navbar-wrapper shadow-dark relative top-0 left-0"
        id="navbar"
      >
        <div className="navbar-container container py-7 mx-auto max-w-7xl">
          <nav className="nav flex justify-between items-center">
            <h2 className="m-0">The Special Character</h2>
            <ul className="nav-links inline-flex gap-10 m-0 p-0">
              {navLinks.map((link) => {
                return (
                  <li className="nav-item m-0 capitalize">
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

Navbar.displayName = "Navbar";
export default Navbar;
