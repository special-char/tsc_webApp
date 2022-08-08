import Image from "next/image";
import React, { useState } from "react";
import Training from "@public/icons/training.svg";
import Larrow from "@public/icons/lArrow.svg";
import BannerSection from "./bannerSection";
import PerksSection from "./perksSection";
import IndustryLeaders from "./industryLeaders";
import StorySection from "../aboutPage/storySection";
import EducationCourses from "./educationCourses";
import AboutEducation from "../aboutEducation";
import CourseByCategory from "../courseByCategory";
const HomePage = () => {
  const [isClicked, setIsClicked] = useState(false);
  console.log("isClicked", isClicked);
  return (
    <>
      <main>
        <BannerSection />
        <PerksSection />
        {/* <IndustryLeaders /> */}
        <EducationCourses />
        <AboutEducation />
        <CourseByCategory />
        {/* //about page
        <StorySection />*/}
      </main>
      {/* <div className="landing-page-wrapper h-screen flex flex-wrap">
        <div
          className={`section flex-1 ${
            isClicked ? "extended" : "training-section"
          }`}
        >
          <div className="relative rounded-3xl h-full">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              layout={"fill"}
              objectFit={"cover"}
            />
            <div className="bg-neutral-400 w-full h-full absolute"></div>
            <div className="flex w-full h-full flex-1 absolute">
              <Training className="w-1/2 mx-auto" />
            </div>
            <div className="text-content-wrapper flex items-center justify-center w-full h-full absolute z-50">
              <div className="text-content w-2/3 flex flex-col basis-[500px]">
                <h3 className="font-light">CRUISER SKATEBOARD</h3>
                <h1>MMM AHH ..PUSH IT!</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  natus maxime hic. Nisi, in reprehenderit?
                </p>
                <button
                  onClick={() => setIsClicked(true)}
                  className="btn btn--primary w-1/2"
                >
                  Explore More
                </button>
              </div>
            </div>
            <div className="float-right px-2 flex justify-end absolute w-full h-full items-center">
              <Larrow className="w-4" />
            </div>
          </div>
        </div>
        <div className="section development-section flex-1">
          <div className="relative rounded-3xl h-full">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              layout={"fill"}
              objectFit={"cover"}
            />
            <div className="bg-neutral-700 w-full h-full absolute"></div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HomePage;
