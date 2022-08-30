import Layout from "@components/Layouts";
import React from "react";
import AboutEducation from "./aboutEducation";
// import BannerSection from "./bannerSection";
import CourseByCategory from "./courseByCategory";
import EducationCourses from "./educationCourses";
import FeaturedTeacher from "./FeaturedTeacher";
import PerksSection from "./perksSection";
import ResourcesSection from "./resourcesSection";
import TestimonialSection from "./TestimonialSection";
import PopularCourses from "./popularCourses";
import BannerSection from "./bannerSection";
const HomePage = ({ data }) => {
  console.log("HomePage data", data);
  return (
    <>
      <BannerSection data={data.homeBanner} />
      <PopularCourses data={data.popularCourse} />
      <PerksSection data={data.whyOurCourse} />
      <FeaturedTeacher data={data.featuredTeacher} />
      <EducationCourses />
      <AboutEducation />
      <CourseByCategory />
      <TestimonialSection />
      <ResourcesSection />
    </>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default HomePage;
