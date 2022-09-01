import Footer from "@components/footer";
import Layout from "@components/Layouts";
import BlogPage from "@components/PageSections/blogPage";
import BlogQuery from "@queries/blogQuery";
import axiosInstance from "lib/axiosInstance";
import React from "react";

const Blog = ({ data }) => {
  return (
    <>
      <BlogPage data={data} />
    </>
  );
};

Blog.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps() {
  try {
    const res = await axiosInstance.post("graphql", {
      query: BlogQuery,
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
    return {
      props: {
        data: error,
      },
    };
  }
}

export default Blog;
