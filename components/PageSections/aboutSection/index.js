import CardGrid from "@components/CardGrid";
import React from "react";

import AllCoursesSection from "../AllCourses";
import BlogCoursesSection from "../BlogCourses";
import OfficesSection from "../OfficesSection";
import TeachersSection from "./teachersSection";
import WorkValues from "./workValues";

const AboutPage = () => {
  return (
    <>
      {/* <WorkValues />
      <TeachersSection />
      <OfficesSection /> */}
      <AllCoursesSection />
      <BlogCoursesSection />
      <CardGrid />
    </>
  );
};

export default AboutPage;
