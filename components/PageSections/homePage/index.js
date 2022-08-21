import React from "react";
import AboutEducation from "./aboutEducation";
import CourseByCategory from "./courseByCategory";
import EducationCourses from "./educationCourses";
import FeaturedTeacher from "./featuredTeacher";
import WhylearnSection from "./Perks/perksData";

import ResourcesSection from "./resourcesSection";
import TestimonialSection from "./testimonialSection";

const HomePage = () => {
  return (
    <>
      <WhylearnSection />
      <FeaturedTeacher />
      <EducationCourses />
      <AboutEducation />
      <CourseByCategory />
      <TestimonialSection />
      <ResourcesSection />
    </>
  );
};

export default HomePage;
