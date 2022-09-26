import Layout from "@components/Layouts";
import DevelopmentPage from "@components/PageSections/devlopmentPage";
import React from "react";

const Development = () => {
  return <DevelopmentPage />;
};

Development.getLayout = function getLayout(page) {
  return <Layout path="development">{page}</Layout>;
};

export async function getServerSideProps() {
  try {
    const res = await axiosInstance.post("graphql", {
      query: DevelopmentQuery,
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

Development.displayName = "Development";
export default Development;
