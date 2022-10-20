import React from "react";
import TSCImage from "@components/TSCImage";
import EmpHeaderQuery from "@queries/new/employeeHeaderQuery";
import axiosInstance from "lib/axiosInstance";

const EmployeeHeaderSection = ({ data }) => {
  console.log("EmployeeHeaderSection data:", data);

  return (
    <section className="main flex items-center h-auto relative overflow-hidden py-16 lg:py-32">
      <div className="container flex flex-wrap items-center justify-center gap-6 max-w-7xl mx-auto px-4">
        <div className="text-content md:max-w-[535px] mx-auto flex-1 text-center lg:text-left">
          <h1 className="font-semibold">{data?.firstName}</h1>
          <button className="btn btn--primary btn-small max-w-xs">
            Download Resume
          </button>
        </div>
        <div className="relative basis-[550px] aspect-h-image h-auto rounded-3xl overflow-hidden skew-x-0 skew-y-0 scale-100 rotate-0 translate-x-1 translate-y-1 duration-1000 delay-1000 transition-all">
          <TSCImage
            src={`http://65.20.70.84:1337${data.avatar.data.attributes.url}`}
            layout={"fill"}
            objectFit={"contain"}
            objectPosition={"center"}
          />
        </div>
      </div>
      <div className="bg-secondary2 rounded-full w-[500px] h-[500px] absolute -top-96 -left-96 lg:-top-52 lg:-left-52 -z-10"></div>
      <div className="bg-primary  w-full h-[300px] absolute top-3/4 -z-10 lg:top-0 lg:h-[100%] lg:w-5/12 lg:right-0"></div>
      <div className="bg-secondary3 rounded-full w-[500px] h-[500px] absolute -bottom-80 -right-72  lg:-bottom-80 lg:-right-20 -z-10"></div>
    </section>
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

export default EmployeeHeaderSection;
