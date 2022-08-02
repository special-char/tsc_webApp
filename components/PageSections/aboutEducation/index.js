import Image from "next/image";
import React from "react";
import aboutEducationImg from "@public/img/aboutEducation.jpg";
import AboutEducationData from "./aboutEducationData";

const AboutEducation = () => {
  return (
    <section className="about-education-wrapper h-auto w-full py-20 px-4 max-w-[1210px] lg:mx-auto">
      <div className="text-center md:w-[550px] md:mx-auto md:pb-10">
        <h2>About Education</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row lg:container lg:mx-auto lg:gap-10 lg:justify-center">
        <div className="flex justify-center lg:flex-1">
          <Image
            height={550}
            width={500}
            className="rounded-3xl"
            src={aboutEducationImg}
            alt="img"
          />
        </div>
        <div className="right-content flex flex-wrap md:max-w-[520px] md:justify-center md:mx-auto md:gap-5 lg:flex lg:flex-col lg:justify-center">
          {AboutEducationData.map((val) => (
            <div className="flex flex-col items-center md:items-start md:flex-row lg:flex-row ">
              {val.icon}
              <div className="text-center px-2 md:text-left lg:flex-col">
                <h3>{val.heading}</h3>
                <p>{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-10">
        <button className="btn btn--secondary lg:btn--small ">
          About Education
        </button>
      </div>
    </section>
  );
};

AboutEducation.displayname = "AboutEducation";
export default AboutEducation;
