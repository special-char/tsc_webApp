<<<<<<< HEAD
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
=======
import Footer from "@components/Footer";
import DevelopmentPage from "@components/pageSections/devlopmentPage";
import React from "react";

const Development = () => {
  return (
    <>
      <DevelopmentPage />
    </>
  );
};
Development.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Development;
>>>>>>> 4726d6e621d014ab3d16103d73bb83a491bd0519
