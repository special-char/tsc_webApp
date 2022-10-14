import React from "react";

const Testimonialskeletan = () => {
  return (
    <section className=" animate-pulse py-12 md:px-20 overflow-hidden ">
      <h2 className=" mx-auto bg-neutral-300 w-1/3 h-10 rounded-xl"></h2>
      <div className="relative flex flex-row md:flex-row items-center w-full py-11 md:py-12 md:px-2 lg:px-14 md:p-12 gap-4 rounded-3xl drop-shadow-sm border-spacing-2 bg-neutral-200">
        <div className=" min-w-[310px] md:min-w-[600px] lg:min-w-[680px] flex w-full items-center justify-center gap-4 border border-neutral-300 p-4 rounded-3xl drop-shadow-sm">
          <div className="flex flex-col relative rounded-full w-36 h-36 md:w-48 md:h-48 bg-neutral-300"></div>
          <div className="flex-col max-w-[65%] overflow-hidden text-content-wrapper flex-1 flex gap-2 md:items-start items-center">
            <p className="text-lg font-normal text-content-wrapper bg-neutral-300 line-clamp-3 w-1/2 h-2"></p>
            <h4 className="font-bold text-lg bg-neutral-300 w-full h-2"></h4>
            <h4 className="font-bold text-lg bg-neutral-300 w-full h-2"></h4>
            <h4 className="font-bold text-lg bg-neutral-300 w-full h-2 "></h4>
            <p className="text-lg font-normal bg-neutral-300 mb-0 w-2/6 h-2 mt-8 "></p>
          </div>
        </div>
        <div className=" min-w-[310px] md:min-w-[600px] lg:min-w-[680px] flex w-full items-center justify-center gap-4  border border-neutral-300 p-4 rounded-3xl drop-shadow-sm ">
          <div className="flex flex-col relative rounded-full w-36 h-36 md:w-48 md:h-48 bg-neutral-300"></div>
          <div className="flex-col max-w-[65%] overflow-hidden text-content-wrapper flex-1 flex gap-2 md:items-start items-center">
            <p className="text-lg font-normal text-content-wrapper bg-neutral-300 line-clamp-3 w-1/2 h-2"></p>
            <h4 className="font-bold text-lg bg-neutral-300 w-full h-2"></h4>
            <h4 className="font-bold text-lg bg-neutral-300 w-full h-2"></h4>
            <h4 className="font-bold text-lg bg-neutral-300 w-full h-2 "></h4>
            <p className="text-lg font-normal bg-neutral-300 mb-0 w-2/6 h-2 mt-8 "></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonialskeletan;
