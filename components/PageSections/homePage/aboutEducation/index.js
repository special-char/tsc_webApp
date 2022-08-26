import Image from "next/image";
import React from "react";
import aboutEducationImg from "@public/img/aboutEducation.jpg";
import EducationData from "./aboutEducationData";
import Link from "next/link";

const AboutEducation = () => {
  return (
    <section className="about-education-wrapper h-auto w-full py-44 ">
      <div className="max-w-7xl mx-auto px-3 border-b border-neutral-400">
        <div className="text-center">
          <h2>About Education</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div className="flex flex-col-reverse lg:flex-row md:w-4/5 lg:w-full mx-auto lg:gap-16 lg:justify-center">
          <div className="flex flex-1">
            <Image
              className="aspect-image rounded-3xl"
              src={aboutEducationImg}
              alt="img"
            />
          </div>
          <div className="right-content flex flex-1 flex-col justify-center mx-auto md:gap-5">
            {EducationData.map((val) => (
              <div className="flex flex-col items-center md:items-start md:flex-row">
                {val.icon}
                <div className="text-center px-2 md:text-left lg:flex-col">
                  <h3>{val.heading}</h3>
                  <p>{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center py-20">
          <Link href={"/courses"}>
            <a>
              <button className="btn btn--secondary lg:btn--small ">
                About Education
              </button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

AboutEducation.displayname = "AboutEducation";
export default AboutEducation;
