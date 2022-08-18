import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

Layout.displayName = "Layout";
export default Layout;
