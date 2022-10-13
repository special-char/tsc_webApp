import React from "react";
import BlueArrow from "@public/icons/blueArrow.svg";

const Header = ({ data }) => {
  return (
    <>
      <section className="w-full h-auto bg-neutral-200 relative overflow-hidden py-32 z-10">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="text-center  md:px-28 lg:px-0">
            <h1>{data.heading?.title}</h1>
            <p className="lg:mx-16">{data.heading?.description}</p>
          </div>
        </div>
        <div className="bg-wrapper relative">
          <div className="bg-secondary3 rounded-full w-[160px] h-[160px] bottom-72 -right-20 lg:w-[420px] lg:h-[420px] absolute md:w-[300px] md:h-[300px] md:bottom-36 md:-right-44 lg:bottom-12 lg:-right-48 animate-bounce-slow"></div>
          <div className="bg-secondary2 rounded-full w-[160px] h-[160px] -left-20 top-24 lg:w-[420px] lg:h-[420px] absolute  md:w-[300px] md:h-[300px] md:-left-36 md:top-3 lg:-top-2 lg:-left-48 animate-bounce-slow"></div>
        </div>
      </section>
      <div className="relative w-8 mx-auto z-30">
        <BlueArrow className="w-11 md:w-16 absolute -top-14" />
      </div>
    </>
  );
};

export default Header;
