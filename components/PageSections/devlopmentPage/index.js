import HeaderSection from "./headerSection";
import OurProjectsSection from "./ourProjects";
import OurServices from "./ourServices";
import OurTeam from "./ourTeam";

import TestimonialSection from "./TestimonialSection";

const DevelopmentPage = () => {
  return (
    <>
      <HeaderSection />
      <OurServices />
      <OurProjectsSection />
      {/* <OurTeam /> */}

      {/* <TestimonialSection /> */}
    </>
  );
};
DevelopmentPage.getLayout = function getLayout(page) {
  return <Layout path="development">{page}</Layout>;
};
export default DevelopmentPage;
