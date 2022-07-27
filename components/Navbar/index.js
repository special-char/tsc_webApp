import React from "react";
import "./navbar.module.css";

const Navbar = () => {
  return (
    <div className="nav-wrapper border-spacing-2 drop-shadow-2xl bg-neutral-100">
      <div className="nav-content">
        <nav className="flex items-center  justify-around">
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
    // <div
    //   id="example1"
    //   style={{
    //     border: "1px solid",
    //     padding: "10px",
    //     boxShadow: "5px 10px",
    //   }}
    // >
    //   <p>
    //     A div element with a shadow. The first value is the horizontal offset
    //     and the second value is the vertical offset. The shadow color will be
    //     inherited from the text color.
    //   </p>
    // </div>
  );
};

Navbar.displayName = "Navbar";
export default Navbar;
