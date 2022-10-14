import React from "react";

import YellowArrow from "@public/icons/yellowArrow.svg";

const BlogBanner = ({ data }) => {
  return (
    <>
      <section className="h-auto w-full ">
        <div className="relative overflow-hidden bg-neutral-200/100">
          <div className="py-20 px-8 max-w-7xl mx-auto ">
            <div className="text-center md:w-1/2 lg:pb-20 mx-auto">
              <h1 className="text-neutral-700">{data.heading?.title}</h1>
              <p>{data.heading?.description}</p>
            </div>
          </div>
          <div className="bg-primary rounded-full w-[167px] h-[167px] -top-36 -right-20 lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] absolute md:-top-52 md:-right-40 lg:-top-60 lg:-right-28 z-10"></div>
          <div className="bg-secondary3 rounded-full w-[167px] h-[167px] -left-20 -bottom-36 lg:w-[420px] lg:h-[420px] md:w-[300px] md:h-[300px] absolute  md:-left-40 md:-bottom-48 lg:-bottom-60 lg:-left-40 z-10"></div>
        </div>
      </section>
      <div className="relative w-8 mx-auto">
        <YellowArrow className="w-12 md:w-14 lg:w-16 absolute -top-14 md:-top-16 lg:-top-16" />
      </div>
    </>
  );
};

export default BlogBanner;
