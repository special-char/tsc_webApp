import Layout from "@components/Layouts";
import CoursesPage from "@components/pageSections/coursesPage";
import CoursesQuery from "@queries/coursesQuery";
import axiosInstance from "lib/axiosInstance";
import React from "react";

const Course = ({ data }) => {
  console.log("All course page data:", data);
  return (
    <>
      <CoursesPage data={data} />
    </>
  );
};

Course.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps() {
  try {
    console.log("hello");
    const res = await axiosInstance.post("graphql", {
      query: CoursesQuery,
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

export default Course;
