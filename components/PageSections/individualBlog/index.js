import React from "react";
import TSCImage from "@components/TSCImage";
import Svg from "@public/icons/newblog.svg";
const IndividualBlog = () => {
  return (
    <section className="w-full h-full flex flex-col">
      <div className="relative -z-10">
        <div className="bg-secondary3 absolute rounded-full w-40 h-40 md:w-[450px] md:h-[450px] lg:w-[650px] lg:h-[650px] lg:-top-28 lg:-left-96 md:-top-16 md:-left-80 -top-20 -left-24 z-10"></div>
        <div className="bg-primary absolute w-full h-44 "></div>
      </div>
      <div className="px-4 md:px-8 lg:px-12">
        <div className="w-[90%] h-1/3 md:h-[80%] lg:h-full absolute top-20 lg:top-32">
          <TSCImage
            src={
              "https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f23fe55a94aa127fb47b2_image-6-blog-education-x-template-p-1600.jpeg"
            }
            className="rounded-3xl"
            layout="fill"
          />
        </div>
        <div className="relative top-72 md:top-[550px] lg:top-[750px] border-b-2 lg:mx-14">
          <h1>
            How to design a simple, yet unique and memorable brand identity
          </h1>
          <div className="flex justify-between">
            <div className="flex gap-2">
                <div className="avatar">
              <div className=" w-16 flex ">
                <img src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f20647c667f1ed18d9a0c_image-5-profile-picture-small-teacher-education-x-template.jpg" />
              </div>
              </div>
            <div className="items-center">
              <h3>Sophie Moore</h3>
              <div className="card-date">April 20, 2022</div>
            </div>
            </div>
          <div className="flex gap-5">
          
      <div className="course-navigation rounded-3xl md:rounded-full">
        <div className="chip chip--white border border-neutral-400 px-6 py-2 flex gap-1 items-center hover:bg-neutral-700 hover:text-secondary1 duration-300">
          <div className="font-bold flex">
          <Svg className="w-5 mr-2"/>
            <span>{"Design"}</span>
            
          </div>
        </div>
      </div>
     
          <div className="course-navigation rounded-3xl md:rounded-full">
        <div className="chip chip--white border border-neutral-400 px-6 py-2 flex gap-1 items-center hover:bg-neutral-700 hover:text-secondary1 duration-300">
          <div className="font-bold">
            <span>{"10m"}</span>
          </div>
        </div>
      </div>
      </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualBlog;
