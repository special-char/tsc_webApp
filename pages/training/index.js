import Layout from "@components/Layouts";
import HomePage from "@components/PageSections/homePage";
import HomeQuery from "@queries/homeQuery";
import axiosInstance from "lib/axiosInstance";
import React from "react";

const Training = ({ data }) => {
  return <HomePage data={data} />;
};

export async function getServerSideProps() {
  try {
    const res = await axiosInstance.post("graphql", {
      query: HomeQuery,
      variables: {},
    });

    return {
      props: {
        data: res?.data?.data,
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

Training.getLayout = function getLayout(page) {
  return <Layout path="training">{page}</Layout>;
};

Training.displayName = "Training";
export default Training;
