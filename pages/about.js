import Layout from "@components/Layouts";
import AboutPage from "@components/pageSections/aboutPage";
import AboutQuery from "@queries/aboutQuery";
import axiosInstance from "lib/axiosInstance";
import React, { Suspense } from "react";

const About = ({ data }) => {
  console.log("About Page Data:", data);
  return (
    <>
      <AboutPage data={data} />
    </>
  );
};
About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps() {
  try {
    console.log("hello");
    const res = await axiosInstance.post("graphql", {
      query: AboutQuery,
      variables: {},
    });
    return {
      props: {
        data: res.data.data,
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

export default About;
