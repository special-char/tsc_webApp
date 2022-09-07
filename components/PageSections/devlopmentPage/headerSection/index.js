import React from "react";
import YellowArrow from "/public/icons/yellowArrow.svg";

const HeaderSection = () => {
  return (
    <>
      <section className="h-auto w-full ">
        <div className="relative overflow-hidden bg-neutral-200">
          <div className="py-20 px-3 max-w-7xl mx-auto ">
            <div className="text-center md:w-1/2 lg:pb-20 mx-auto">
              <h1 className="text-neutral-700">Header</h1>
              <p>description</p>
            </div>
          </div>
          <div className="bg-primary rounded-full w-[400px] h-[400px] absolute md:-top-80 md:-right-52 lg:-top-60 lg:-right-48  z-10"></div>
          <div className="bg-secondary3 rounded-full w-[400px] h-[400px] absolute -left-64 -bottom-64 md:-left-52 lg:-bottom-56 lg:-left-48 z-10"></div>
        </div>
        <div className="relative w-8 mx-auto">
          <YellowArrow className="w-14 absolute -top-16" />
        </div>
      </section>
    </>
  );
};

export default HeaderSection;
