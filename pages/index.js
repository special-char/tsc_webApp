import AboutPage from "@components/aboutPage";
import Layout from "@components/layouts";
import React from "react";

const Home = () => {
  return (
    <>
      <AboutPage />
    </>
  );
};
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Home;
