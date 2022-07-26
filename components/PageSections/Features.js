import React from "react";
import WhyCourse from "../WhyCourse";
import LearnSvg from "/public/icons/learn.svg";
import GraduateSvg from "/public/icons/graduate.svg";
import WorkSvg from "/public/icons/work.svg";

const Features = () => {
  return (
    <>
      <section className="Feature flex-col items-center justify-center bg-neutral-700 px-4">
        <h2 className=" mb-10 pt-32 flex text-center justify-center text-secondary1">
          Why learn with our courses?
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col items-center justify-center">
            <LearnSvg className="w-60" />
            <WhyCourse
              title={"1. Learn"}
              desc={
                "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua."
              }
            />
          </div>
          <div className="flex flex-col  items-center justify-center">
            <GraduateSvg className="w-60" />
            <WhyCourse
              title={"2. Learn"}
              desc={
                "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua."
              }
            />
          </div>
          <div className="flex flex-col  items-center justify-center">
            <WorkSvg className="w-72" />
            <WhyCourse
              title={"3. Work"}
              desc={
                "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
