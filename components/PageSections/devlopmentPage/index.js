import Footer from "@components/Footer";
import HeaderSection from "@components/PageSections/devlopmentPage/headerSection";
import OurDevlopers from "@components/PageSections/devlopmentPage/ourDevlopers";
import OurProjectsSection from "@components/PageSections/devlopmentPage/ourProjects";
import OurServices from "@components/PageSections/devlopmentPage/ourServices";
import React from "react";

const Development = () => {
  return (
    <>
      <HeaderSection />
      <OurDevlopers />
      <OurProjectsSection />
      <OurServices />
      <Footer />
    </>
  );
};
Development.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Development;
