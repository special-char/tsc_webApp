import Layout from "@components/Layouts";
import CareerForm from "@components/PageSections/devlopmentPage/careerForm";
import React from "react";

const Career = () => {
  return <CareerForm />;
};

Career.getLayout = function getLayout(page) {
  return <Layout path="development">{page}</Layout>;
};

Career.displayName = "Career";
export default Career;
