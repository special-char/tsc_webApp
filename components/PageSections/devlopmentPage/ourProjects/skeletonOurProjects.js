import React from "react";

const SkeletonOurProjects = () => {
  return (
    <>
      <section className="overflow-hidden">
        <div className="max-w-7xl animate-pulse mx-auto ">
          <h2 className="text-center mb-20 bg-neutral-300 h-10 w-[40%] mx-auto rounded-xl"></h2>
          <div className="w-full flex gap-4">
            <div className="card animate-pulse min-w-[550px] max-w-screen-xs sm:max-w-xl">
              <figure className="relative md:h-80 bg-neutral-300"></figure>
              <div className="card__body p-8 relative border-spacing-2 shadow-2xl bg-neutral-100  ">
                <h3 className="card__title md:mb-3 bg-neutral-300 h-5 w-1/2"></h3>
                <p className="line-clamp-4 bg-neutral-300 h-2"></p>
                <p className="line-clamp-4 bg-neutral-300 h-2"></p>
                <p className="line-clamp-4 bg-neutral-300 h-2"></p>
              </div>
            </div>
            <div className="card animate-pulse min-w-[550px] max-w-screen-xs sm:max-w-xl">
              <figure className="relative md:h-80 bg-neutral-300"></figure>
              <div className="card__body p-8 relative border-spacing-2 shadow-2xl bg-neutral-100  ">
                <h3 className="card__title md:mb-3 bg-neutral-300 h-5 w-1/2"></h3>
                <p className="line-clamp-4 bg-neutral-300 h-2"></p>
                <p className="line-clamp-4 bg-neutral-300 h-2"></p>
                <p className="line-clamp-4 bg-neutral-300 h-2"></p>
              </div>
            </div>
            <div className="card animate-pulse min-w-[550px] max-w-screen-xs sm:max-w-xl">
              <figure className="relative md:h-80 bg-neutral-300"></figure>
              <div className="card__body p-8 relative border-spacing-2 shadow-2xl bg-neutral-100  ">
                <h3 className="card__title md:mb-3 bg-neutral-300 h-5 w-1/2"></h3>
                <p className="line-clamp-4 bg-neutral-300 h-2"></p>
                <p className="line-clamp-4 bg-neutral-300 h-2"></p>
                <p className="line-clamp-4 bg-neutral-300 h-2"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkeletonOurProjects;
