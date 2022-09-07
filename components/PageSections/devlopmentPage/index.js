import HeaderSection from "@components/PageSections/devlopmentPage/headerSection";
import OurProjectsSection from "@components/PageSections/devlopmentPage/ourProjects";
import OurServices from "@components/PageSections/devlopmentPage/ourServices";
import TestimonialSection from "@components/PageSections/devlopmentPage/testimonialSection";
import CareerForm from "./careerForm";
import ContactUS from "./contactUs";
import OurProjectsSection from "./ourProjects";
import OurTeam from "./ourTeam";

const DevelopmentPage = () => {
  return (
    <>
      <HeaderSection />
      <OurServices />
      <OurProjectsSection />
      <OurTeam />
      <TestimonialSection />
      <CareerForm />
      <ContactUS />
    </>
  );
};
Development.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default DevelopmentPage;
