import Footer from "@components/footer";
import Navbar from "@components/navbar";

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
