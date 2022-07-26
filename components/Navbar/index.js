import React from "react";
import "./navbar.module.css";
import MenubarSvg from "/public/menubar.svg";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-content">
        <nav className="flex items-center justify-around">
          <h2>LOGO</h2>
          <ul className="flex gap-8 text-neutral-700">
            <li>
              <a href="#" className="text-neutral-700">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-700">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-700">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-700">
                Pages
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-700">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

Navbar.displayName = "Navbar";
export default Navbar;
