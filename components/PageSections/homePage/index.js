import React from "react";
import WorkValues from "../aboutPage/workValues";
import AboutEducation from "./aboutEducation";
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
      <WhylearnSection />
      <FeaturedTeacher />
      <EducationCourses />
      <AboutEducation />
      <CourseByCategory />
      <TestimonialSection />
      <ResourcesSection />
      <WorkValues />
    </>
  );
};

export default HomePage;
