import Navbar from "@components/Navbar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header>{/* <Navbar /> */}</header>
      <main>{children}</main>
    </>
  );
};

Layout.displayName = "Layout";
export default Layout;
