import Layout from "@components/layouts";
import HomePage from "@components/pageSections/homePage";
import React from "react";

const Home = () => {
  return <>
  <HomePage/>
  </>;
};
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Home;
