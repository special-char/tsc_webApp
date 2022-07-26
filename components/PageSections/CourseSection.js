import Card from "@components/Card";
import Image from "@components/Image";
import React from "react";
import Button from "../Button";

const CourseSection = () => {
  return (
    <>
      <div className="pt-10 relative  p-2">
        <center className="px-5 text-2xl pb-5  lg:text-3xl font-bold text-[#064ea4]">
          Browse our popular courses
        </center>
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-2">
          <Card
            svg="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800.jpeg"
            svg2="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg"
            childClassName={"text-xl pb-4 leading-10"}
            labelClassName={"text-xl"}
            className={"lg:w-5/12"}
            imgClass={"rounded-t-3xl"}
            label="Graphic Design 101"
            name="Kathie Corl"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              eaque possimus eum culpa voluptatum aperiam, ratione quod .
            </p>
            <div className="profile-image-wrapper flex items-center pt-3 md:flex md:items-center gap-4">
              <Image
                imgClass={"w-10 rounded-full "}
                src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg"
              />
              <p>This is my status</p>
            </div>
            <Button
              buttonText={"7hr 24min"}
              buttonClass={"absolute bg-white top-8 px-5 right-10"}
            />
            <Button
              buttonText={"99.00 USD"}
              buttonClass={
                "absolute bg-[#064ea4] text-white px-5 top-20 right-10"
              }
            />
          </Card>

          {/* next/prev button */}
          <div className="absolute top-64 flex w-full justify-between lg:flex lg:w-10/12 lg:mx-auto lg:justify-between lg:top-80 z-10">
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
