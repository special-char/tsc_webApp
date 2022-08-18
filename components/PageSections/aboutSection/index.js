import CardGrid from "@components/PageSections/IndividualTeacher/CardGrid";
import Testi from "@components/PageSections/IndividualTeacher";

import React from "react";

import AllCoursesSection from "../CourseSection/AllCourses";
import BlogCoursesSection from "../blogPage/BlogCourses";
import OfficesSection from "./OfficesSection";
import TestiSection from "../IndividualTeacher/teacherIntro";
import TeachersSection from "./teachersSection";
import WorkValues from "./workValues";

const AboutPage = () => {
  return (
    <>
      <WorkValues />
      // <AllCoursesSection />
      <BlogCoursesSection />
      <CardGrid />
      <TestiSection />
    </>
  );
};

export default AboutPage;
