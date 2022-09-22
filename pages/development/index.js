import Layout from "@components/Layouts";
import DevelopmentPage from "@components/PageSections/devlopmentPage";
import React from "react";

const Development = () => {
  return <DevelopmentPage />;
};

Development.getLayout = function getLayout(page) {
  return <Layout path="development">{page}</Layout>;
};

Development.displayName = "Development";
export default Development;
