import Footer from "@components/footer";
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
      <Footer />
    </>
  );
};

export default DevelopmentPage;
