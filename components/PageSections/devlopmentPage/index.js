import Carousal from "@components/Carousal";
import HomeQuery from "@queries/homeQuery";
import axiosInstance from "lib/axiosInstance";
import HeaderSection from "./headerSection";
import OurProjectsSection from "./ourProjects";
import OurServices from "./ourServices";
import TestimonialSection from "./TestimonialSection";

const DevelopmentPage = () => {
  const data = [
    {
      id: 1,
      name: "Company Name",
      designation: "Junior Designer at Facebook",
      description:
        "“Hemang Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”",
      avatar: { url: "https://placeimg.com/192/192/people" },
      // svg: <StarSvg />,
    },
    {
      id: 2,
      name: "Company Name",
      designation: "Junior Designer at Facebook",
      description:
        "“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”",
      avatar: { url: "https://placeimg.com/192/192/people" },
      // svg: <StarSvg />,
    },
    {
      id: 3,
      name: "Company Name",
      designation: "Junior Designer at Facebook",
      description:
        "“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”",
      avatar: { url: "https://placeimg.com/192/192/people" },
      // svg: <StarSvg />,
    },
    {
      id: 4,
      name: "Company Name",
      designation: "Junior Designer at Facebook",
      description:
        "“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”",
      avatar: { url: "https://placeimg.com/192/192/people" },
      // svg: <StarSvg />,
    },
  ];
  return (
    <>
      <HeaderSection />
      <OurServices />
      <OurProjectsSection />
      <Carousal data={data} testimonial />
      {/* <OurTeam /> */}
    </>
  );
};

DevelopmentPage.getLayout = function getLayout(page) {
  return <Layout path="development">{page}</Layout>;
};

export default DevelopmentPage;
