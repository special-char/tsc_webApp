import React from "react";
import AllCoursesSection from "./AllCourses";
import CourseBanner from "./courseBanner";
import FeaturedCourse from "./featuredCourses";

const CoursesPage = () => {
  return (
    <>
      <CourseBanner />
      <FeaturedCourse />
      <AllCoursesSection />
    </>
  );
};

CoursesPage.displayName = "CoursesPage";
export default CoursesPage;
