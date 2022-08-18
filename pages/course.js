import Footer from "@components/Footer";
import AllCoursesSection from "@components/PageSections/CourseSection/AllCourses";
import CourseBanner from "@components/PageSections/CourseSection/courseBanner";
import FeaturedCourse from "@components/PageSections/CourseSection/featuredCourses";
import React from "react";

const Course = () => {
  return (
    <>
      <CourseBanner />
      <FeaturedCourse />
      <AllCoursesSection />
      <Footer/>
    </>
  );
};

export default Course;
