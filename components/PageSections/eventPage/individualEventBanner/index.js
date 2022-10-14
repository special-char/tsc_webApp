import React from "react";

const IndividualEventBanner = ({ data }) => {
  return (
    <section className="h-auto w-full bg-primary">
      <div className="relative overflow-hidden h-full">
        <div className="py-20 px-8 max-w-7xl mx-auto flex">
          <div className="text-center flex items-center justify-center  md:w-4/5  mx-auto">
            <h1 className="text-neutral-200">{data.title}</h1>
          </div>
          <div className="bg-secondary3 rounded-full w-[167px] h-[167px] -top-28 -right-20 lg:w-[350px] lg:h-[350px] md:w-[300px] md:h-[300px] absolute md:-top-52 md:-right-40 lg:-top-56 lg:-right-28 z-10 animate-bounce-slow"></div>
          <div className="bg-secondary2 rounded-full w-[167px] h-[167px] -left-20 -bottom-36 lg:w-[350px] lg:h-[350px] md:w-[300px] md:h-[300px] absolute  md:-left-40 md:-bottom-48 lg:-bottom-72 lg:-left-40 z-10 animate-bounce-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default IndividualEventBanner;
