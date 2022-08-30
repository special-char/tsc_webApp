import Layout from "@components/Layouts";
import React from "react";
import WorkValues from "../aboutPage/workValues";
import AboutEducation from "./aboutEducation";
import BannerSection from "./bannerSection";
import CourseByCategory from "./courseByCategory";
import EducationCourses from "./educationCourses";
import FeaturedTeacher from "./featuredTeacher";
import PerksSection from "./perksSection";
import PopularCourses from "./popularCourses";
import ResourcesSection from "./resourcesSection";
import TestimonialSection from "./testimonialSection";

const HomePage = ({ data }) => {
  console.log("data from home page:", data);
  return (
    <>
      <BannerSection data={data.homeBanner} />
      <PopularCourses data={data.popularCourse} />
      <PerksSection data={data.whyOurCourse} />
      <FeaturedTeacher data={data.featuredTeacher} />
      <EducationCourses />
      {/* <AboutEducation />
      <CourseByCategory />
      <TestimonialSection />
      <ResourcesSection />
      <WorkValues /> */}
    </>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default HomePage;
