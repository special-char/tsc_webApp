import Layout from "@components/Layouts";
import { useEffect, useState } from "react";
import HeaderSection from "./headerSection";
import Headerskeleton from "./headerSection/headerskeleton";
import OurProjectsSection from "./ourProjects";
import SkeletonOurProjects from "./ourProjects/skeletonOurProjects";
import OurServices from "./ourServices";
import OurExpertiseSkeleton from "./ourServices/OurExpertiseSkeleton";
import SkillBar from "../employeeDetailsPage/skillBar";
import TestimonialSection from "./TestimonialSection";

const DevelopmentPage = () => {
  return (
    <>
      <HeaderSection />
      <Headerskeleton />
      <OurServices />
      <OurExpertiseSkeleton />
      <OurProjectsSection />
      <SkeletonOurProjects />
      <TestimonialSection />
    </>
  );
};

DevelopmentPage.getLayout = function getLayout(page) {
  return <Layout path="development">{page}</Layout>;
};

export default DevelopmentPage;

// const data = [
//   {
//     id: 1,
//     name: "Company Name",
//     designation: "Junior Designer at Facebook",
//     description:
//       "“Hemang Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”",
//     avatar: { url: "https://placeimg.com/192/192/people" },
//     // svg: <StarSvg />,
//   },
//   {
//     id: 2,
//     name: "Company Name",
//     designation: "Junior Designer at Facebook",
//     description:
//       "“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”",
//     avatar: { url: "https://placeimg.com/192/192/people" },
//     // svg: <StarSvg />,
//   },
//   {
//     id: 3,
//     name: "Company Name",
//     designation: "Junior Designer at Facebook",
//     description:
//       "“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”",
//     avatar: { url: "https://placeimg.com/192/192/people" },
//     // svg: <StarSvg />,
//   },
//   {
//     id: 4,
//     name: "Company Name",
//     designation: "Junior Designer at Facebook",
//     description:
//       "“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”",
//     avatar: { url: "https://placeimg.com/192/192/people" },
//     // svg: <StarSvg />,
//   },
// ];
