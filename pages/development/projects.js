import Layout from "@components/Layouts";
import AllProjectsPage from "@components/PageSections/devlopmentPage/allprojectsPage";
import React from "react";

const AllProjects = () => {
  return <AllProjectsPage />;
};

AllProjects.getLayout = function getLayout(page) {
  return <Layout path="development">{page}</Layout>;
};
AllProjects.displayName = "AllProjects";
export default AllProjects;
