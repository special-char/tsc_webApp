import React from "react";
import Button from "../Button";
import CourseCard from "../courseCard";

const CourseSection = () => {
  return (
    <>
      <div className="pt-10 relative">
        <center className="px-5 text-2xl pb-5 lg:text-3xl font-bold text-[#064ea4]">
          Browse our popular courses
        </center>
        <div className="flex flex-col lg:flex-row">
          <CourseCard
            svg="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800.jpeg"
            svg2="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg"
            childClassName={"text-xl pb-4 leading-10"}
            labelClassName={"text-xl"}
            nameClassName={""}
            className={"lg:w-6/12"}
            label="Graphic Design 101"
            name="Kathie Corl"
            buttonText1="7h 24m"
            buttonText2="99.00 USD"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            facilis? Natus reiciendis, ips="um eligendi.
          </CourseCard>
          <div className="absolute z-10">
          <Button buttonText={'<'} buttonClass={'absolute z-10 top-48 -left-2 w-20 h-20 bg-[#FFFFFF] text-black text-2xl px-0 py-0 font-bold lg:'}/>
            <Button buttonText={'>'} buttonClass={'absolute z-10 top-48 left-72 w-20 h-20 bg-[#FFFFFF] text-black text-2xl font-bold text-white '} />
          </div>
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
          </CourseCard>
        </div>
        <div className="absolute top-64 flex w-full justify-between lg:flex lg:max-w-6xl lg:mx-auto lg:justify-between lg:top-80 z-10">
          <Button
            buttonText={"<"}
            buttonClass={
              " z-10  w-20 h-20 bg-[#FFFFFF] lg:hover:bg-[#064ea4] lg:hover:text-white text-black text-2xl px-0 py-0 font-bold"
            }
          />
          <Button
            buttonText={">"}
            buttonClass={
              " z-10  w-20 h-20 bg-[#FFFFFF] text-black text-2xl font-bold text-white lg:hover:bg-[#064ea4] lg:hover:text-white  "
            }
          />
        </div>
        <center className="pt-10 pb-5">
          <Button
            buttonText="EXPLORE ALL COURSES"
            buttonClass={
              "bg-[#064ea4] w-auto py-4 text-white font-bold text-xl"
            }
          />
        </center>
      </div>
    </>
  );
};

export default CourseSection;
