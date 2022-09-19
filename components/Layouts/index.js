import Footer from "@components/Footer";
import Navbar from "@components/navbar";
import React from "react";

const Layout = ({ children, path }) => {
  return (
    <>
      <header>
        <Navbar path={path} />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.displayName = "Layout";
export default Layout;
