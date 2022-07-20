import React from "react";
import CourseCard from "../courseCard";

const CourseSection = () => {
  return (
    <>
      <div className="">
        <center className="px-5 text-3xl font-bold text-[#064ea4]">
          Browse our popular courses
        </center>
        <div className="flex flex-col ">
          <CourseCard
            svg="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800.jpeg"
            svg2="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg"
            childClassName={"text-3xl leading-10"}
            labelClassName={"text-4xl"}
            nameClassName={""}
            className={"lg:w-6/12"}
            label="Mobile App Development"
            name="Kathie Corl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            facilis? Natus reiciendis, ipsum eligendi.
          </CourseCard>
          <CourseCard
            svg="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800.jpeg"
            svg2="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg"
            childClassName={""}
            labelClassName={""}
            nameClassName={""}
            className={""}
            label="Mobile App Development"
            name="Kathie Corl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            facilis? Natus reiciendis, ipsum eligendi.
          </CourseCard>
          <CourseCard
            svg="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800.jpeg"
            svg2="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg"
            childClassName={""}
            labelClassName={""}
            nameClassName={""}
            className={""}
            label="Mobile App Development"
            name="Kathie Corl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            facilis? Natus reiciendis, ipsum eligendi.
          </CourseCard>
        </div>
      </div>
    </>
  );
};

export default CourseSection;
