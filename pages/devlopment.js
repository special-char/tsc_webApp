import Footer from "@components/Footer";
import HeaderSection from "@components/PageSections/devlopmentPage/headerSection";
import OurDevlopers from "@components/PageSections/devlopmentPage/ourDevlopers";
import OurProjectsSection from "@components/PageSections/devlopmentPage/ourProjects";
import React from "react";

const devlopment = () => {
  return (
    <>
      <HeaderSection />
      <OurDevlopers />
      <OurProjectsSection />
      <Footer />
    </>
  );
};

export default devlopment;
