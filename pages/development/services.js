import Layout from "@components/Layouts";
import AllServicesPage from "@components/PageSections/devlopmentPage/allServicesPage";
import Header from "@components/PageSections/devlopmentPage/header";

import React from "react";

const Services = () => {
  const bannerData = {
    heading: {
      title: "Services",
      description: "Services we provide",
    },
  };
  return (
    <>
      <Header data={bannerData} />
      <AllServicesPage />
    </>
  );
};

Services.getLayout = function getLayout(page) {
  return <Layout path="development">{page}</Layout>;
};
Services.displayName = "Services";
export default Services;
