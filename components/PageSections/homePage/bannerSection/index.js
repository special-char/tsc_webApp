import React from "react";
import Image from "next/image";
const BannerSection = () => {
  return (
    <>
      <section className="main flex items-center h-auto relative overflow-hidden py-16 lg:py-32">
        <div className="container flex flex-wrap items-center justify-center gap-16 max-w-[1210px] mx-auto px-4">
          <div className="text-content flex-1 flex flex-col justify-center">
            <h1 className="font-semibold">
              Grow your skills, define your future
            </h1>
            <p>
              Presenting Academy, the tech school of the future. We teach you
              the right skills to be prepared for tomorrow.
            </p>
            <div className="flex w-full gap-8">
              <button className="btn btn--primary">EXPLORE COURSES</button>
              <button className="btn btn--secondary">LEARN MORE</button>
            </div>
          </div>
          <div className="relative basis-[500px] aspect-h-image h-auto rounded-3xl overflow-hidden">
            <Image
              src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607e15d7c0c9f4037bde6f44_image-home-hero-education-x-template.jpg"
              layout={"fill"}
              objectFit={"cover"}
              objectPosition={"center"}
            />
          </div>
        </div>
        <div className="bg-secondary2 rounded-full w-[500px] h-[500px] absolute -top-96 -left-96 lg:-top-52 lg:-left-52 -z-10"></div>
        <div className="bg-primary  w-full h-[300px] absolute top-3/4 -z-10 lg:top-0 lg:h-[100%] lg:w-5/12 lg:right-0"></div>
        <div className="bg-secondary3 rounded-full w-[500px] h-[500px] absolute -bottom-80 -right-72  lg:-bottom-80 lg:-right-20 -z-10"></div>
      </section>
    </>
  );
};

export default BannerSection;
