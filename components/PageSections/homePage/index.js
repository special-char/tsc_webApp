import Layout from "@components/Layouts";
import React from "react";
import WorkValues from "../aboutPage/workValues";
import AboutEducation from "./aboutEducation";
// import BannerSection from "./bannerSection";
import CourseByCategory from "./courseByCategory";
import EducationCourses from "./educationCourses";
import FeaturedTeacher from "./featuredTeacher";
import ResourcesSection from "./resourcesSection";
import TestimonialSection from "./testimonialSection";
import WhylearnSection from "./Perks/perksData";
import data from "../../../data.json";

const HomePage = ({data}) => {
  console.log("data from home page:", data);
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
