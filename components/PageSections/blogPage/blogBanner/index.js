import React from "react";
import BlueArrow from "@public/icons/blueArrow.svg";
import YellowArrow from "@public/icons/yellowArrow.svg";

const BlogBanner = () => {
  return (
    <>
      <section className="h-auto w-full ">
        <div className="relative overflow-hidden bg-neutral-200">
          <div className="py-20 px-3 max-w-[1210px] mx-auto ">
            <div className="text-center md:w-1/2 lg:pb-20 mx-auto">
              <h1 className="text-neutral-700">Blog</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
          </div>
          <div className="bg-primary rounded-full w-[400px] h-[400px] absolute md:-top-80 md:-right-52 lg:-top-60 lg:-right-48  z-10"></div>
          <div className="bg-secondary3 rounded-full w-[400px] h-[400px] absolute -left-64 -bottom-64 md:-left-52 lg:-bottom-56 lg:-left-48 z-10"></div>
        </div>
      </section>
      <div className="relative w-8 mx-auto">
        <YellowArrow className="w-14 absolute -top-16" />
      </div>
    </>
  );
};

export default BlogBanner;
