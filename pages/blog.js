import Footer from "@components/Footer";
import BlogBanner from "@components/PageSections/blogPage/blogBanner";
import BlogCoursesSection from "@components/PageSections/blogPage/BlogCourses";
import BlogSection from "@components/PageSections/blogPage/blogSection";
import SubscribeToday from "@components/PageSections/blogPage/subscribeToday";
import React from "react";

const Blog = () => {
  return (
    <>
      <BlogBanner />
      <BlogSection />
      <SubscribeToday />
      <BlogCoursesSection />
    </>
  );
};

export default Blog;
