import Layout from "@components/Layouts";
import Loader from "@components/loader";
import { useEffect, useState } from "react";
import HeaderSection from "./headerSection";
import Headerskeleton from "./headerSection/headerskeleton";
import OurProjectsSection from "./ourProjects";
import SkeletonOurProjects from "./ourProjects/skeletonOurProjects";
import OurServices from "./ourServices";
import OurExpertiseSkeleton from "./ourServices/OurExpertiseSkeleton";
import SkillBar from "../employeeDetailsPage/EmployeeTechnologies";
import OurTeam from "./ourTeam";
import TestimonialSection from "./TestimonialSection";
import Testimonialskeletan from "./TestimonialSection/testimonialskeletan";
import OurTeamQuery from "@queries/ourTeamQuery";
import axiosInstance from "lib/axiosInstance";
import EmpHeaderQuery from "@queries/new/employeeHeaderQuery";

const DevelopmentPage = ({ data }) => {
  //console.log("DevelopmentPage inner data:", data);
  return (
    <>
      <HeaderSection />
      <Headerskeleton />
      <OurServices />
      <OurExpertiseSkeleton />
      <OurTeam data={data} />
      <OurProjectsSection />
      <SkeletonOurProjects />
      <TestimonialSection />
      <Testimonialskeletan />
      <Loader />
    </>
  );
};

// export async function getServerSideProps() {
//   try {
//     const res = await fetch("http://65.20.70.84:1337/graphql", {
//       method: "POST",
//       body: JSON.stringify({
//         query: `
//           {
//             teams {
//               data {
//                 id
//                 attributes {
//                   firstName
//                   lastName
//                 }
//               }
//             }
//           }`,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     });
//     const json = await res.json();
//     return {
//       props: {
//         teams: json?.data?.teams?.data,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         data: error,
//       },
//     };
//   }
// }

DevelopmentPage.getLayout = function getLayout(page) {
  return <Layout path="development">{page}</Layout>;
};

export default DevelopmentPage;
