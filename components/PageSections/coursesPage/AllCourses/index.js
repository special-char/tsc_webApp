import React from "react";
import Card from "@components/card";
import Link from "next/link";

const AllCoursesSection = () => {
  const courseDetails = [
    {
      id: 1,
      title: "Graphic Design 101",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.",
      name: "Kathie Corl",
      chips: [
        {
          id: 1,
          hours: 10,
          minutes: 24,
        },
        {
          id: 2,
          price: 99.0,
        },
      ],
      img1: "https://res.cloudinary.com/pruthvish/image/upload/v1659967496/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template_ic7rbl.webp",
      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659963040/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800_zhw8fb.webp",
    },
    {
      id: 2,
      title: "Web Design & Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.",
      name: "Kathie Corl",
      chip: "7hr 25m",
      chip2: "$99.00 USD",
      img1: "https://res.cloudinary.com/pruthvish/image/upload/v1659967496/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template_ic7rbl.webp",
      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659963040/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800_zhw8fb.webp",
    },
    {
      id: 3,
      title: "Brand & Identity Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.",
      name: "Kathie Corl",
      chip: "7hr 25m",
      chip2: "$99.00 USD",
      img1: "https://res.cloudinary.com/pruthvish/image/upload/v1659967496/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template_ic7rbl.webp",
      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659963040/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800_zhw8fb.webp",
    },
    {
      id: 4,
      title: "Advanced Logo Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.",
      name: "Kathie Corl",
      chip: "7hr 25m",
      chip2: "$99.00 USD",
      img1: "https://res.cloudinary.com/pruthvish/image/upload/v1659967496/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template_ic7rbl.webp",
      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659963040/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800_zhw8fb.webp",
    },
    {
      id: 5,
      title: "Marketing Analytics 101",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.",
      name: "Kathie Corl",
      chip: "7hr 25m",
      chip2: "$99.00 USD",
      img1: "https://res.cloudinary.com/pruthvish/image/upload/v1659967496/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template_ic7rbl.webp",
      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659963040/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800_zhw8fb.webp",
    },
    {
      id: 6,
      title: "Mobile App Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.",
      name: "Kathie Corl",
      chip: "7hr 25m",
      chip2: "$99.00 USD",

      img: "https://res.cloudinary.com/pruthvish/image/upload/v1659963040/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800_zhw8fb.webp",
      img1: "https://res.cloudinary.com/pruthvish/image/upload/v1659967496/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template_ic7rbl.webp",
    },
  ];
  const courseCategories = [
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
      <section className="courses-section-wrapper lg:w-full px-4 pt-28">
        <div className="container w-full mx-auto max-w-7xl p-4 flex flex-wrap flex-col lg:flex-row md:items-center md:justify-center lg:justify-between ">
          <h2 className="text-neutral-800 text-center lg:text-left ">
            All Courses
          </h2>
          <span className="flex bg-neutral-200 p-4 rounded-full flex-wrap gap-4 text-base font-bold">
            {courseCategories.map((button) => {
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
          {courseDetails.map((obj) => {
            return <Card {...obj} />;
          })}
        </div>
      </section>
    </>
  );
};

AllCoursesSection.displayName = "AllCourses Section";
export default AllCoursesSection;
