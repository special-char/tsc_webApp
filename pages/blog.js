import Footer from "@components/footer";
import Layout from "@components/Layouts";
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

Blog.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Blog;
