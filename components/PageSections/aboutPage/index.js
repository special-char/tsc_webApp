import CardGrid from "@components/pageSections/individualTeacher/CardGrid";
import React from "react";
// import AllCoursesSection from "../coursesPage/AllCourses";
import BlogCoursesSection from "../blogPage/blogCourses";
import TestiSection from "../individualTeacher/teacherIntro";
import WorkValues from "./workValues";

const AboutPage = () => {
  return (
    <>
      <WorkValues />
      {/* <AllCoursesSection />  */}
      <BlogCoursesSection />
      <CardGrid />
      <TestiSection />
    </>
  );
};

export default AboutPage;
