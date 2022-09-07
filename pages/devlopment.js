import Footer from "@components/Footer";
import AllProjects from "@components/PageSections/devlopmentPage/allprojects";
import HeaderSection from "@components/PageSections/devlopmentPage/headerSection";

import OurProjectsSection from "@components/PageSections/devlopmentPage/ourProjects";
import React from "react";

const devlopment = () => {
  return (
    <>
      <HeaderSection />
      <OurProjectsSection />
      <AllProjects />
      <Footer />
    </>
  );
};

export default devlopment;
