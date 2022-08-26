import Layout from "@components/Layouts";
import React from "react";
import HomePage from "@components/pageSections/homePage";

const Home = () => {
  return <HomePage />;
};
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
Home.displayName = "Home";
export default Home;
