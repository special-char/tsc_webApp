import Layout from "@components/Layouts";
import React from "react";
import DevelopmentPage from "@components/PageSections/devlopmentPage";
// const DevelopmentPage = React.lazy(() =>
//   import("@components/PageSections/devlopmentPage")
// );

const Development = () => {
  return <DevelopmentPage />;
};

Development.getLayout = function getLayout(page) {
  return <Layout path="development">{page}</Layout>;
};

Development.displayName = "Development";
export default Development;
