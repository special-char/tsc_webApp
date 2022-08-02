import Button from "@components/Button";
import Card from "@components/Card";
import React from "react";

const BrowseCourse = () => {
  return (
    <>
      <div className="h-auto w-full pb-10 p-2 lg:max-w-">
        <center className="text-2xl font-bold lg:text-4xl lg:font-bold text-[#064ea4] p-10">
          Browse our courses by category
        </center>
        <div className="flex flex-col w-auto gap-6 lg:max-w-[1150px] lg:mx-auto lg:flex-row lg:justify-center">
          <Card
            svg="https://assets.website-files.com/607de2d8e8911e32707a3efe/607f500fe9f6c983c68e88ef_image-1-courses-categories-education-x-template.svg"
            childClassName={"text-xl pb-4 leading-10"}
            labelClassName={"text-xl"}
            nameClassName={""}
            imgClass={"rounded-t-2xl object-cover"}
            className={"lg:w-auto"}
            label="Design"
          >
            Lorem ipsum dolor sit amet, dolor sit consectetur adipiscing elit.
            <Button
              buttonText={"12 Courses"}
              buttonClass={"absolute bg-white top-8 px-5 right-10"}
            />
          </Card>
          <Card
            svg="https://assets.website-files.com/607de2d8e8911e32707a3efe/607f5010ea8cee56aa78149a_image-2-courses-categories-education-x-template.svg"
            childClassName={"text-xl pb-4 leading-10"}
            labelClassName={"text-xl"}
            nameClassName={""}
            imgClass={"rounded-t-2xl object-cover"}
            className={"lg:w-auto"}
            label="Development"
          >
            Lorem ipsum dolor sit amet, dolor sit consectetur adipiscing elit.
            <Button
              buttonText={"5 Courses"}
              buttonClass={"absolute bg-white top-8 px-5 right-10"}
            />
          </Card>
          <Card
            svg="https://assets.website-files.com/607de2d8e8911e32707a3efe/607f500f9c98153a06b9d441_image-3-courses-categories-education-x-template.svg"
            childClassName={"text-xl pb-4 leading-10"}
            labelClassName={"text-xl"}
            nameClassName={""}
            imgClass={"rounded-t-2xl object-fill"}
            className={"lg:w-4/12auto"}
            label="Marketing"
          >
            Lorem ipsum dolor sit amet, dolor sit consectetur adipiscing elit.
            <Button
              buttonText={"7 Courses"}
              buttonClass={"absolute bg-white top-8 px-5 right-10"}
            />
          </Card>
        </div>
      </div>
    </>
  );
};

export default BrowseCourse;
