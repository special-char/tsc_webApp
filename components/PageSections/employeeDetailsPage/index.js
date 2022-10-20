import React from "react";
import EmployeeAchievementSection from "./EmployeeAchievementSection";
import EmployeeCertificateSection from "./EmployeeCertificateSection";
import EmployeeEducationSection from "./EmployeeEducationSection";
import EmployeeHeaderSection from "./EmployeeHeaderSection";
import Experince from "./experinceSection";
import EmployeeProjectsSection from "./EmployeeProjectsSection";
import EmployeeTechnologies from "./EmployeeTechnologies";

const EmployeeDetails = ({ data }) => {
  //console.log("Employee Id:", empid);
  console.log("Employee data:", data);
  return (
    <>
      <EmployeeHeaderSection data={data.attributes} />
      <EmployeeTechnologies data={data.attributes.technology} />
      <EmployeeCertificateSection data={data.attributes.certification} />
      <EmployeeProjectsSection data={data.attributes.projects} />
      <EmployeeEducationSection data={data.attributes.education} />
      <Experince data={data.attributes.experience} />
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
//                 attributes {
//                   firstName
//                   lastName
//                   technology {
//                     technology {
//                       data {
//                         attributes {
//                           name
//                         }
//                       }
//                     }
//                   }
//                   avatar {
//                     data {
//                       attributes {
//                         url
//                       }
//                     }
//                   }
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

export default EmployeeDetails;

{
  /* <EmployeeAchievementSection /> */
}
