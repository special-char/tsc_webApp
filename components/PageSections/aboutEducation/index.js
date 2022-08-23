import React from "react";
import Svg1 from "@public/icons/industry.svg";
import Svg2 from "@public/icons/industry1.svg";
import Svg3 from "@public/icons/industry2.svg";
const AboutEducation = () => {
  const AboutEducationData = [
    {
      icon: <Svg1 className="w-16 lg:w-24 rounded-full" />,
      heading: "Industry expert teachers",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis dones massa aliquam id dolor.",
    },
    {
      icon: <Svg2 className="w-16 lg:w-24 rounded-full" />,
      heading: "Up-to-date course content",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis dones massa aliquam id dolor.",
    },
    {
      icon: <Svg3 className=" w-16 lg:w-24 rounded-full" />,
      heading: "Students community",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis dones massa aliquam id dolor.",
    },
  ];
  return (
    <section className="h-auto w-full pt-10 px-3">
      <div className="lg:w-3/6  lg:mb-14 lg:px-6 mb-10 py-4 text-center">
        <h2 className="text-center">About Education</h2>
        <p className="justify-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className=" gap-4 flex lg:w-[1210px] flex-col-reverse lg:flex-row ">
        <div className="left_content flex lg:px-10">
          <img
            className="aspect-image flex-1  flex rounded-3xl "
            src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607ee9511b8768627aa63e05_image-home-about-education-x-template.jpg"
          />
        </div>
        <div className="right_content flex-col text-center lg:text-left">
          {AboutEducationData.map((val) => (
            <div className="px-4 text-center items-center justify-center lg:flex">
              {val.icon}
              <div className=" text-center px-3">
                <h3 className="justify-center">{val.heading}</h3>
                <p className="justify-center">{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="btn btn--secondary px-5 mx-16 my-5">
        About Education
      </button>
    </section>
  );
};

export default AboutEducation;
