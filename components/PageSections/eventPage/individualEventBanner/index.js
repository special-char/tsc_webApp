import React from "react";

const IndividualEventBanner = () => {
  return (
    <section className="h-auto w-full ">
      <div className="">
        <div className="relative overflow-hidden bg-neutral-200">
          <div className="py-20 px-8 max-w-7xl mx-auto ">
            <div className="text-center flex items-center justify-center  md:w-4/5  mx-auto">
              <h1 className="text-neutral-700 ">
                Social Media Marketing Masterclass
              </h1>
            </div>
            <div className="bg-secondary3 rounded-full w-[167px] h-[167px] -top-36 -right-20 lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] absolute md:-top-52 md:-right-40 lg:-top-56 lg:-right-28 z-10 animate-bounce-slow"></div>
            <div className="bg-secondary2 rounded-full w-[167px] h-[167px] -left-20 -bottom-36 lg:w-[420px] lg:h-[420px] md:w-[300px] md:h-[300px] absolute  md:-left-40 md:-bottom-48 lg:-bottom-72 lg:-left-40 z-10 animate-bounce-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualEventBanner;
