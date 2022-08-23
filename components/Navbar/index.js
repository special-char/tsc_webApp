import React, { memo, useEffect, useState } from "react";
import Link from "next/link";
const Navbar = () => {
  useEffect(() => {
    const windowWidth = window.innerWidth;
    setWidth(windowWidth);
  });
  const [width, setWidth] = useState(0);
  const navLinks = [
    {
      id: 1,
      name: "home",
      link: "/",
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
  const [hamOpen, setHamOpen] = useState(false);
  return (
    <>
      <section
        className="navbar-wrapper shadow-dark overflow-hidden"
        id="navbar"
      >
        <div className="navbar-container container mx-auto flex justify-between  py-7 px- max-w-7xl">
          <h2 className="m-0">The Special Character</h2>
          <nav className={`nav lg:flex lg:justify-between lg:items-center`}>
            <ul
              className={` ${
                width < 1024 ? "nav-link-mobile" : "nav-link"
              }  gap-10 m-0 p-0 lg:inline-flex ${
                hamOpen ? "left-0" : "-left-full"
              }`}
            >
              {navLinks.map((link) => {
                return (
                  <li key={link.id} className="nav-item m-0 capitalize">
                    <Link href={link.link}>
                      <a className="nav-link text-neutral-700 font-bold">
                        {link.name}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div
            onClick={() => {
              setHamOpen((val) => !val);
              console.log("hamOpen", hamOpen);
            }}
            className={`menu-btn lg:hidden ${hamOpen && "open"}`}
          >
            <div className="menu-btn__burger"></div>
          </div>
        </div>
      </section>
    </>
  );
};

Navbar.displayName = "Navbar";
export default memo(Navbar);
