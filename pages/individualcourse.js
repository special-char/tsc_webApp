import React from "react";
import IndividualCourse from "@components/pageSections/individualCourse";
import Layout from "@components/layouts";

const Individual = () => {
  return (
    <>
      <IndividualCourse />
    </>
  );
};
Individual.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// export async function getServerSideProps() {
//   try {
//     console.log("hello");
//     const res = await axiosInstance.post("graphql", {
//       query: CoursesQuery,
//       variables: {},
//     });
//     return {
//       props: {
//         data: res.data.data,
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

export default Individual;
