import Layout from "@components/layouts";
import Development from "@components/PageSections/devlopmentPage";
import HomePage from "@components/pageSections/homePage";
import SplitScreen from "@components/PageSections/Splitscreen";
import HomeQuery from "@queries/homeQuery";
import axiosInstance from "lib/axiosInstance";
import React, { useState } from "react";

const Home = ({ data }) => {
  const [trainingPage, setTrainingPage] = useState(false);
  const [developmentPage, setDevelopmentPage] = useState(false);
  return (
    <>
      <SplitScreen
        trainingPage={trainingPage}
        developmentPage={developmentPage}
        gotoTraining={setTrainingPage}
        gotoDevelopment={setDevelopmentPage}
      />
      {developmentPage && (
        <Layout>
          <Development />
        </Layout>
      )}
      {trainingPage && (
        <Layout>
          <HomePage data={data} />
        </Layout>
      )}
    </>
  );
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
