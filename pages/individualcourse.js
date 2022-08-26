import React from "react";
import IndividualCourse from "@components/pageSections/individualCourse";
import Footer from "@components/footer";
import Layout from "@components/Layouts";

const Individual = () => {
  return (
    <>
      <IndividualCourse />
      <Footer />
    </>
  );
};

Individual.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Individual;
