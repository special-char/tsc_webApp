import Layout from "@components/Layouts";
import BlogPage from "@components/pageSections/blogPage";
import BlogQuery from "@queries/blogQuery";
import axiosInstance from "lib/axiosInstance";
import React from "react";

const Blog = ({ data }) => {
  console.log("blog page data:", data);
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
    console.log("hello");
    const res = await axiosInstance.post("graphql", {
      query: BlogQuery,
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

export default Blog;
