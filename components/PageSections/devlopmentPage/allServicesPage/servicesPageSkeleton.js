import React from "react";

const ServicesPageSkeleton = ({ index }) => {
  return (
    <section className="w-full px-8 my-12 bg-neutral-200 overflow-hidden ">
      <div className="max-w-7xl mx-auto animate-pulse">
        <div
          className={`w-full flex mb-8  ${
            index % 2 === 0 ? "flex-row-reverse" : "flex-row"
          } flex-wrap gap-4 items-center justify-center `}
        >
          <div
            className={`w-full md:w-[45%] flex-1  items-center justify-center`}
          >
            <div className={`relative h-96 bg-neutral-300`}></div>
          </div>
          <div className={`w-full md:w-[41.6%] flex gap-4 flex-col text-left`}>
            <div class="h-2 w-1/2 bg-neutral-300 rounded"></div>
            <div class="h-2 bg-neutral-300 rounded"></div>
            <div class="h-2 bg-neutral-300 rounded"></div>
            <div class="h-2 bg-neutral-300 rounded w-1/3"></div>
            <div class="h-2 bg-neutral-300 rounded"></div>
            <div class="h-2 bg-neutral-300 rounded"></div>
            <div class="h-2 bg-neutral-300 rounded w-1/3"></div>
            <div class="h-2 bg-neutral-300 rounded w-1/3"></div>
            <div class="h-2 bg-neutral-300 rounded w-1/2"></div>
            <div class="h-2 bg-neutral-300 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPageSkeleton;
