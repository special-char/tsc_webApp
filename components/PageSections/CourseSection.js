import React from "react";
import Button from "../Button";
import CourseCard from "../courseCard";

const CourseSection = () => {
  return (
    <>
      <div className="pt-10 relative">
        <center className="px-5 text-2xl pb-5 lg:text-3xl font-bold text-[#064ea4]">
          Browse our popular courses
          <div className="absolute z-10">
          <Button buttonText={'<'} buttonClass={'absolute z-10 top-48 -left-2 w-20 h-20 bg-[#FFFFFF] text-black text-2xl px-0 py-0 font-bold lg:'}/>
            <Button buttonText={'>'} buttonClass={'absolute z-10 top-48 left-72 w-20 h-20 bg-[#FFFFFF] text-black text-2xl font-bold text-white '} />
          </div>
        </center>
        <div className="flex flex-col   lg:flex-row">
        
          <CourseCard
            svg="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800.jpeg"
            svg2="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg"
            childClassName={"text-xl pb-4 leading-10"}
            labelClassName={"text-xl"}
            nameClassName={""}
            className={"lg:w-6/12"}
            label="Graphic Design 101"
            name="Kathie Corl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            facilis? Natus reiciendis, ips="um eligendi.
          </CourseCard>
          <CourseCard
            svg="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800.jpeg"
            svg2="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg"
            childClassName={"text-xl pb-4 leading-10"}
            labelClassName={"text-xl"}
            nameClassName={""}
            className={"lg:w-6/12"}
            label="Graphic Design 101"
            name="Kathie Corl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            facilis? Natus reiciendis, ips="um eligendi.
          </CourseCard><CourseCard
            svg="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800.jpeg"
            svg2="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg"
            childClassName={"text-xl pb-4 leading-10"}
            labelClassName={"text-xl"}
            nameClassName={""}
            className={"lg:w-6/12"}
            label="Graphic Design 101"
            name="Kathie Corl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            facilis? Natus reiciendis, ips="um eligendi.
          </CourseCard>
        </div>
        <center className="pt-10 pb-5">
        <Button buttonText="EXPLORE ALL COURSES" buttonClass={'bg-[#064ea4] w-auto py-4 text-white font-bold text-xl'}/>
        </center>
      </div>
    </>
  );
};

export default CourseSection;
