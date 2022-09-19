import Layout from "@components/Layouts";
import AllServicesPage from "@components/PageSections/devlopmentPage/allServicesPage";
import ServicesBanner from "@components/PageSections/devlopmentPage/servicesBanner";

import React from "react";

const Services = () => {
  return (
    <>
      <ServicesBanner />
      <AllServicesPage />
    </>
  );
};

Services.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
Services.displayName = "Services";
export default Services;
