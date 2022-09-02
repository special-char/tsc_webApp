import React from "react";
import AllCoursesSection from "./allCourses";
import CourseBanner from "./courseBanner";
import FeaturedCourse from "./featuredCourses";

const CoursesPage = ({ data }) => {
  return (
    <>
      <CourseBanner data={data.courseBanner} />
      <FeaturedCourse data={data.courseBanner} />
      <AllCoursesSection data={data.courses} />
    </>
  );
};

CoursesPage.displayName = "CoursesPage";
export default CoursesPage;
