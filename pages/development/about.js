import Layout from "@components/Layouts";
import AboutPage from "@components/pageSections/aboutPage";
import AboutQuery from "@queries/aboutQuery";
import { developmentAboutQuery } from "@queries/developmentAboutQuery";
import axiosInstance from "lib/axiosInstance";
import React, { useEffect, useState } from "react";
import data from "../../data/data.json";

const About = () => {
  return <AboutPage data={data} />;
};
About.getLayout = function getLayout(page) {
  return <Layout path="development">{page}</Layout>;
};

export async function getServerSideProps() {
  try {
    const res = await axiosInstance.post("graphql", {
      query: developmentAboutQuery,
      variables: {},
    });
    console.log("data", res);
    return {
      props: {
        data: res.data.data,
      },
    };
  } catch (error) {
    console.log("====================================");
    console.log("error", error);
    console.log("====================================");
    return {
      props: {
        data: error,
      },
    };
  }
}

export default About;
