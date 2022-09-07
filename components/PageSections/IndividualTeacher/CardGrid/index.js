import AllCourses from "@components/card";
import React from "react";
import CardGrid from "./CardGrid";

const CardGrid = () => {
  const courses = [
    {
      id: 1,
      title: "Graphic Design 101",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.",
      name: "Kathie Corl",
      chip: "7hr 25m",
      chip2: "$99.00 USD",
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
  ];

  return (
    <section className="w-full h-full py-40 px-4 bg-neutral-200">
      <div className="container w-full mx-auto max-w-[1210px] p-4 flex flex-wrap flex-col lg:flex-row md:items-center md:justify-center lg:justify-between ">
        <h2 className="text-neutral-800 text-center lg:text-left ">
          Kathie Corl Courses
        </h2>
        <span className="btn btn--secondary text-base font-bold hover:bg-neutral-400 py-6 px-10">
          BROWSE ALL COURSES
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 text-left justify-center gap-8  w-full mx-auto max-w-[1210px]">
        {courses.map((obj) => {
          return <AllCourses data={obj} />;
        })}
      </div>
    </section>
  );
};
CardGrid.displayName = "Card Grid";
export default CardGrid;
