import React from "react";
import Image from "next/image";

const FeaturedTeacher = ({ data }) => {
  console.log("featuredTeacher", data);
  return (
    <section className="wrapper flex py-24  md:py-44 h-auto">
      <div className="flex w-full lg:max-w-7xl mx-auto md:w-4/5 items-center justify-center flex-wrap px-4 gap-4 md:gap-12">
        <div className=" flex flex-col md:text-center md:mx-auto lg:text-left lg:flex-1 text-center justify-center">
          <h2>{data.heading?.title}</h2>
          <p>{data.heading?.description}</p>
          <div className="flex flex-col gap-8 mb-8 md:flex-row lg:flex-col lg:w-1/2 ">
            <button className="btn btn--primary  min-w-fit ">
              {data.becomeTeacher?.buttonText}
            </button>
            <button className="btn btn--secondary min-w-fit">
              {data.browse?.buttonText}
            </button>
          </div>
        </div>

        <div className="flex flex-1 relative h-auto ">
          <div className="aspect-h-image w-full relative ">
            <Image
              className="avatar rounded-xl"
              layout="fill"
              objectFit="cover"
              src={
                "https://res.cloudinary.com/pruthvish/image/upload/c_scale/v1658396880/607e240b3c46c0182718cf14_image-featured-teacher-education-x-template-p-800_jninvj.webp"
              }
            />
          </div>
          <div className="border-spacing-2 rounded-3xl absolute px-4 md:px-10 -bottom-52 md:-bottom-36 lg:-bottom-[87px] bg-neutral-100 py-11 max-w-[95%] mx-auto left-0 right-0 drop-shadow-md">
            <h6 className="bg-secondary1 text-primary font-bold w-44 text-center rounded-full py-2 mb-2">
              Featured Teacher
            </h6>
            <h3 className="text-neutral-700 py-4">
              “Teaching on Education platform has been an amazing experience”
            </h3>
            <div className="">
              <h4 className="text-neutral-700">Sophie Moore</h4>
              <p className="text-neutral-600 mb-0">
                Marketing Lead at Facebook
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTeacher;
