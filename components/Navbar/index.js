import React, { memo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = ({ path }) => {
  const router = useRouter();
  const current_route = router.pathname;
  console.log("====================================");
  console.log(current_route);
  console.log("====================================");
  const navLinks =
    path === "development"
      ? [
          {
            id: 1,
            name: "home",
            link: `/${path}`,
          },
          {
            id: 2,
            name: "about",
            link: `/${path}/about`,
          },
          {
            id: 3,
            name: "services",
            link: `/${path}/services`,
          },
          {
            id: 4,
            name: "projects",
            link: `/${path}/projects`,
          },
          {
            id: 5,
            name: "career",
            link: `/${path}/career`,
          },
          {
            id: 6,
            name: "contact",
            link: `/${path}/contact`,
          },
        ]
      : [
          {
            id: 1,
            name: "home",
            link: `/${path}`,
          },
          {
            id: 2,
            name: "about",
            link: `/${path}/about`,
          },
          {
            id: 3,
            name: "courses",
            link: `/${path}/courses`,
          },
          {
            id: 4,
            name: "blog",
            link: `/${path}/blog`,
          },
          {
            id: 5,
            name: "contact",
            link: `/${path}/contact`,
          },
        ];
  const [hamOpen, setHamOpen] = useState(false);

  return (
    <>
      <section
        className="navbar-wrapper shadow-dark overflow-hidden"
        id="navbar"
      >
        <div className="navbar-container container mx-auto flex justify-between  py-7 px-5 max-w-7xl">
          <a href="/">
            <h2 className="m-0">The Special Character</h2>
          </a>
          <nav className={`nav lg:flex lg:justify-between lg:items-center`}>
            <ul
              className={`nav-link-mobile nav-link gap-10 m-0 p-0 lg:inline-flex ${
                hamOpen ? "left-0" : "-left-full"
              }`}
            >
              {navLinks.map((link) => {
                return (
                  <li key={link.id} className="nav-item m-0 capitalize">
                    <Link href={link.link}>
                      <a
                        className={`nav-link font-bold ${
                          current_route === link.link
                            ? "active-link"
                            : "text-neutral-700"
                        }`}
                      >
                        {link.name}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div
            onClick={() => setHamOpen((val) => !val)}
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
