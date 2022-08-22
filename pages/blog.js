import Footer from "@components/footer";
import BlogBanner from "@components/pageSections/blogPage/blogBanner";
import BlogCoursesSection from "@components/pageSections/blogPage/blogCourses";
import BlogSection from "@components/pageSections/blogPage/blogSection";
import SubscribeToday from "@components/pageSections/blogPage/subscribeToday";
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
