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

Training.displayName = "Training";
export default Training;
