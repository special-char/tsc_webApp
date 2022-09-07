import Footer from "@components/Footer";
import HeaderSection from "@components/PageSections/devlopmentPage/headerSection";
import OurDevlopers from "@components/PageSections/devlopmentPage/ourDevlopers";
import OurProjectsSection from "@components/PageSections/devlopmentPage/ourProjects";
import OurServices from "@components/PageSections/devlopmentPage/ourServices";
import TestimonialSection from "@components/PageSections/devlopmentPage/testimonialSection";
import React from "react";
import CareerForm from "./careerForm";
import ContactUS from "./contactUs";
import HeaderSection from "./headerSection";
import OurDevlopers from "./ourDevlopers";
import OurProjectsSection from "./ourProjects";
import OurTeam from "./ourTeam";

const DevelopmentPage = () => {
  return (
    <>
      <HeaderSection />
      <OurTeam />
      <OurProjectsSection />

      <CareerForm />
      <ContactUS />
      <OurServices />
      <TestimonialSection />
      <Footer />
    </>
  );
};
Development.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default DevelopmentPage;
