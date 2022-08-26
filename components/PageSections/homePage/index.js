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
import { Suspense } from "react";
import dynamic from "next/dynamic";
import PopularCourses from "./popularCourses";

const BannerSection = dynamic(() => import("./bannerSection"), {
  suspense: true,
});
const HomePage = () => {
  return (
    <>
        <BannerSection />
      <PopularCourses />
      <PerksSection />
      <FeaturedTeacher />
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
