import React from "react";
import BlogBanner from "@components/pageSections/blogPage/blogBanner";
import BlogCoursesSection from "@components/pageSections/blogPage/blogCourses";
import BlogSection from "@components/pageSections/blogPage/blogSection";
import SubscribeToday from "@components/pageSections/blogPage/subscribeToday";

const BlogPage = ({ data }) => {
  console.log("====================================");
  console.log("blog page data new:", data);
  console.log("====================================");
  return (
    <>
      <BlogBanner data={data.blogBanner} />
      <BlogSection data={data.blogSection?.blogs} />
      <SubscribeToday />
      <BlogCoursesSection />
    </>
  );
};

export default BlogPage;
