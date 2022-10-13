import React from "react";

const SkeletonOurProjects = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex gap-3">
          <div className="card animate-pulse w-1/2 max-w-screen-xs sm:max-w-xl">
            <figure className="relative md:h-80 bg-neutral-300"></figure>
            <div className="card__body p-8 relative border-spacing-2 shadow-2xl bg-neutral-100  ">
              <h3 className="card__title md:mb-3 bg-neutral-300 h-2 w-1/2"></h3>
              <p className="line-clamp-4 bg-neutral-300 h-2"></p>
              <p className="line-clamp-4 bg-neutral-300 h-2"></p>
              <p className="line-clamp-4 bg-neutral-300 h-2"></p>
            </div>
          </div>
          <div className="card animate-pulse w-1/2 max-w-screen-xs sm:max-w-xl">
            <figure className="relative md:h-80 bg-neutral-300"></figure>
            <div className="card__body p-8 relative border-spacing-2 shadow-2xl bg-neutral-100  ">
              <h3 className="card__title md:mb-3 bg-neutral-300 h-2 w-1/2"></h3>
              <p className="line-clamp-4 bg-neutral-300 h-2"></p>
              <p className="line-clamp-4 bg-neutral-300 h-2"></p>
              <p className="line-clamp-4 bg-neutral-300 h-2"></p>
            </div>
          </div>
          <div className="card animate-pulse w-1/2 max-w-screen-xs sm:max-w-xl">
            <figure className="relative md:h-80 bg-neutral-300"></figure>
            <div className="card__body p-8 relative border-spacing-2 shadow-2xl bg-neutral-100  ">
              <h3 className="card__title md:mb-3 bg-neutral-300 h-2 w-1/2"></h3>
              <p className="line-clamp-4 bg-neutral-300 h-2"></p>
              <p className="line-clamp-4 bg-neutral-300 h-2"></p>
              <p className="line-clamp-4 bg-neutral-300 h-2"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonOurProjects;
