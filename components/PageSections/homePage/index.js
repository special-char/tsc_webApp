import Layout from "@components/Layouts";
import React from "react";
import AboutEducation from "./aboutEducation";
import BannerSection from "./bannerSection";
import CourseByCategory from "./courseByCategory";
import EducationCourses from "./educationCourses";
import FeaturedTeacher from "./featuredTeacher";
import PerksSection from "./perksSection";
import PopularCourses from "./popularCourses";
import TestimonialSection from "./testimonialSection";

const HomePage = ({ data }) => {
  console.log("Training HomePage Data:", data);
  return (
    <>
      <BannerSection data={data.homeBanner} />
      <PopularCourses data={data.popularCourse} />
      <PerksSection data={data.whyOurCourse} />
      <FeaturedTeacher data={data.featuredTeacher} />
      <EducationCourses data={data.success} />
      <AboutEducation data={data.aboutEducation} />
      <CourseByCategory data={data.coursesCategory} />
      <TestimonialSection
        data={data.testimonialSection}
        data2={data.testimonials}
      />
    </>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <Layout path="training">{page}</Layout>;
};
export default HomePage;
