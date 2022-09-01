import React from "react";
import BlogBanner from "@components/pageSections/blogPage/blogBanner";
import BlogCoursesSection from "@components/pageSections/blogPage/blogCourses";
import BlogSection from "@components/pageSections/blogPage/blogSection";
import SubscribeToday from "@components/pageSections/blogPage/subscribeToday";
import { data } from "autoprefixer";

const BlogPage = ({ data }) => {
  return (
    <>
      <BlogBanner data={data.blogBanner} />
      <BlogSection data={data.blogSection} />
      <SubscribeToday data={data.blogSubscription} />
      <BlogCoursesSection data={data.blogs} />
    </>
  );
};

export default BlogPage;
