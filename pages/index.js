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

export async function getServerSideProps() {
  try {
    const res = await axiosInstance.post("graphql", {
      query: HomeQuery,
      variables: {},
    });
    console.log("====================================");
    console.log(res.data?.data);
    console.log("====================================");
    return {
      props: {
        data: res.data.data ,
      },
    };
  } catch (error) {
    return {
      props: {
        data: error,
      },
    };
  }
}
Home.displayName = "Home";
export default Home;
