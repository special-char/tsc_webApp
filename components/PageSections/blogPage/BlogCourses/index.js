import React from "react";
import BlogCourses from "@components/blogCourses";
import Link from "next/link";
import Blog1Svg from "@public/icons/blog1.svg";
import Blog2Svg from "@public/icons/blog2.svg";
import Blog5Svg from "@public/icons/blog2.svg";

const BlogCoursesSection = () => {
  const BlogCoursesDetails = [
    {
      id: 1,
      date: "April 20, 2021",
      description:
        "How to design a simple, yet unique and memorable brand identity",
      blogType: "Design",
      svg: <Blog1Svg />,
      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659963040/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800_zhw8fb.webp",
    },
    {
      id: 2,
      date: "April 20, 2021",
      description:
        "How to design a simple, yet unique and memorable brand identity",
      blogType: "Marketing",
      svg: <Blog2Svg />,

      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659963040/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800_zhw8fb.webp",
    },
    {
      id: 3,
      date: "April 20, 2021",
      description:
        "How to design a simple, yet unique and memorable brand identity",
      blogType: "Design",
      svg: <Blog1Svg />,

      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659963040/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800_zhw8fb.webp",
    },
    {
      id: 4,
      date: "April 20, 2021",
      description:
        "How to design a simple, yet unique and memorable brand identity",
      blogType: "Marketing",
      svg: <Blog2Svg />,

      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659963040/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800_zhw8fb.webp",
    },
    {
      id: 5,
      date: "April 20, 2021",
      description:
        "How to design a simple, yet unique and memorable brand identity",
      blogType: "Development",
      svg: <Blog5Svg />,
      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659963040/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800_zhw8fb.webp",
    },
    {
      id: 6,
      date: "April 20, 2021",
      description:
        "How to design a simple, yet unique and memorable brand identity",
      blogType: "Marketing",
      svg: <Blog2Svg />,
      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659963040/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800_zhw8fb.webp",
    },
  ];

  const blogCategories = [
    {
      path: "#",
      title: "all",
    },
    {
      path: "/development",
      title: "development",
    },
    {
      path: "/design",
      title: "design",
    },
    {
      path: "/marketing",
      title: "marketing",
    },
  ];

  return (
    <>
      <section className="blog-section-wrapper lg:w-full px-4 pt-28">
        <div className="container w-full mx-auto max-w-7xl p-4 flex flex-wrap flex-col lg:flex-row md:items-center md:justify-center lg:justify-between ">
          <h2 className="text-neutral-800 text-center lg:text-left ">
            Resources & News
          </h2>
          <span className="flex bg-neutral-200 p-4 rounded-full flex-wrap gap-4 text-base font-bold">
            {blogCategories.map((button) => {
              return (
                <Link href="#">
                  <a
                    className={`capitalize px-6 py-4 pt-4 rounded-full ${
                      button.title === "all"
                        ? "text-secondary1 bg-primary"
                        : "bg-neutral-100 text-neutral-700 hover:bg-primary hover:text-secondary1"
                    }`}
                  >
                    {button.title}
                  </a>
                </Link>
              );
            })}
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 text-left justify-center gap-8 md:p-8 w-full mx-auto max-w-7xl">
          {BlogCoursesDetails.map((obj) => {
            return <BlogCourses {...obj} />;
          })}
        </div>
      </section>
    </>
  );
};

BlogCoursesSection.displayName = "BlogCourses Section";
export default BlogCoursesSection;
