import React from "react";
import BlogSvg from "@public/icons/blog.svg";
const Blog = () => {
  return (
    <section className="w-screen h-auto bg-neutral-300 relative overflow-hidden py-32">
      <div className="container mx-auto">
        <div className="text-center px-7 md:px-28 lg:px-28">
          <h1>Blog</h1>
          <p className="lg:mx-16">
            Lorem ipsum, dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
      </div>
      <div className="bg-wrapper flex relative">
        <div className="shape-1 bg-secondary3  w-40 h-40 top-24 -left-20 md:w-64 md:h-64 md:-top-10 md:-left-32 lg:w-72 lg:h-72 lg:-top-20 lg:-left-28 absolute rounded-full"></div>
        <div className="shape-2 bg-primary w-40 h-40 bottom-72 -right-24 md:w-64 md:h-64 md:bottom-32 md:-right-32 lg:w-64 lg:h-64 lg:bottom-28 lg:-right-24 absolute rounded-full"></div>
      </div>
      <div className="w-full flex -bottom-20 md:-bottom-16 lg:-bottom-24 absolute justify-center">
        <BlogSvg className="w-10 lg:w-14" />
      </div>
    </section>
  );
};

export default Blog;
