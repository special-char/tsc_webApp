import React from "react";
import Image from "next/image";
const IndustryLeaders = () => {
  return (
    <section className="industry-leaders-wrapper py-32">
      <div className="container mx-auto flex w-full h-full max-w-[1210px] items-center justify-between flex-wrap px-4 ">
        <div className="flex flex-col lg:text-left lg:flex-1 text-center justify-center">
          <h2>Courses taught by industry leaders around the world</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="flex gap-8 mb-8 md:flex-row lg:flex-col md:w-7/12">
            <button className="btn btn--primary min-w-fit p-4">
              BROWSE TEACHERS
            </button>
            <button className="btn btn--secondary !min-w-fit !p-4">
              BROWSE TEACHERS
            </button>
          </div>
        </div>
        <div className="flex h-full flex-1">
          <div className="leader-image-content aspect-h-image w-full h-auto relative">
            <Image
              className="avatar rounded-xl "
              layout="fill"
              objectFit="cover"
              src={
                "https://res.cloudinary.com/pruthvish/image/upload/c_scale/v1658396880/607e240b3c46c0182718cf14_image-featured-teacher-education-x-template-p-800_jninvj.webp"
              }
            />
            <div className="text-content border-spacing-2 rounded-3xl absolute px-16 -bottom-80 md:-bottom-36 bg-neutral-100 py-8 max-w-[90%] mx-auto left-0 right-0 drop-shadow-md">
              <h6 className="bg-secondary1 text-primary font-bold w-44 text-center rounded-full py-2 mb-6">
                Featured Teacher
              </h6>
              <h3 className="text-neutral-700 py-4">
                “Teaching on Education platform has been an amazing experience”
              </h3>
              <h4 className="text-neutral-700">Sophie Moore</h4>
              <p className="text-neutral-600">Marketing Lead at Facebook</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryLeaders;