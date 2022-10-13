import React from "react";

const ProjectsPageSkeleton = ({ index }) => {
  return (
    <section className="max-w-7xl mx-auto  flex flex-col my-12 w-screen relative overflow-hidden">
      <div
        className={`animate-pulse w-full flex mb-8 bg-neutral-100 rounded-3xl py-8 shadow-dark px-8 flex-col gap-4 items-center justify-start ${
          index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className={`w-full flex-1 z-10`}>
          <div className="relative rounded h-80 bg-neutral-300" />
        </div>
        <div className={`w-full flex-1 flex gap-4 flex-col text-left z-10`}>
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
    </section>
  );
};

export default ProjectsPageSkeleton;
