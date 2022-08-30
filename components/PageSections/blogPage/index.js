import React from "react";
import BlogBanner from "@components/pageSections/blogPage/blogBanner";
import BlogCoursesSection from "@components/pageSections/blogPage/blogCourses";
import BlogSection from "@components/pageSections/blogPage/blogSection";
import SubscribeToday from "@components/pageSections/blogPage/subscribeToday";

const BlogPage = () => {
  return (
    <>
      <BlogBanner />
      <BlogSection />
      <SubscribeToday />
      <BlogCoursesSection />
    </>
  );
};

export default BlogPage;
