import Layout from "@components/Layouts";
import CoursesPage from "@components/pageSections/coursesPage";
import React from "react";

const Course = () => {
  return (
    <>
      <CoursesPage />
    </>
  );
};

Course.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Course;
