import Layout from "@components/layouts";
import HomePage from "@components/pageSections/homePage";
import SplitScreen from "@components/SplitScreen";
import HomeQuery from "@queries/homeQuery";
import axiosInstance from "lib/axiosInstance";
import React from "react";

const Home = ({ data }) => {
  return (
    <>
      <SplitScreen />
      <HomePage data={data} />
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
    console.log(res.data.data);
    console.log("====================================");
    return {
      props: {
        data: res.data.data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        data: error,
      },
    };
  }
}
Home.displayName = "Home";
export default Home;
