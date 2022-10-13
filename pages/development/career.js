import Layout from "@components/Layouts";
import CareerForm from "@components/PageSections/devlopmentPage/careerForm";
import React from "react";

const Career = () => {
  return <CareerForm />;
};

Career.getLayout = function getLayout(page) {
  return <Layout path="development">{page}</Layout>;
};

export async function getServerSideProps() {
  try {
    const res = await axiosInstance.post("graphql", {
      query: CareerDesignation,
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

Career.displayName = "Career";
export default Career;
