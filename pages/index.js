import AboutPage from "@components/aboutPage";
import Footer from "@components/Footer";
import Layout from "@components/layouts";
import HomePage from "@components/pageSections/homePage";
import React from "react";
import data from "../data.json";

const Home = () => {
  return (
    <>
      <HomePage />
    </>
  );
};
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Home;
