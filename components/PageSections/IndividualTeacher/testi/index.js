import React from "react";
import Image from "next/image";

const Testi = ({
  img,

  designation,
  name,
  description,
  chip,
  svg1,
  svg2,
  svg3,

  ...props
}) => {
  return (
    <>
      <div className=" absolute flex flex-col md:flex-row items-center w-full md:w-[700px] lg:w-[800px] py-10 px-6 pt-10  md:py-14 md:px-4 md:pb-16 md:pt-14 gap-12 mb-28 md:mb-44 lg:pt-20 lg:pb-11 lg:px-8 lg:mb-20 rounded-3xl shadow-2xl border-spacing-2 drop-shadow-sm bg-neutral-100 ">
        <div className="flex flex-col relative rounded-full w-44 h-44">
          <Image
            className=" avatar rounded-full "
            layout="fill"
            src={img}
            {...props}
          />
        </div>

        <div className="flex-col flex gap-1 text-center justify-center md:text-left">
          <div className="flex flex-col-reverse md:flex-row items-center md:justify-between">
            <h2 className=" text-neutral-800 ">{name}</h2>
            <div className="chip chip--white px-[20px] py-[10px] text-xs font-bold">
              {chip}
            </div>
          </div>
          <p className="text-lg font-normal text-neutral-600 md:w-[450px] w-[242px]">
            {description}
          </p>
          <div className="w-6 flex flex-row gap-4">
            <div className="btn btn--primary btn--round btn--small">
              <a href="">{svg1}</a>
            </div>
            <div className="btn btn--primary btn--round btn--small">
              <a href="">{svg1}</a>
            </div>
            <div className="btn btn--primary btn--round btn--small">
              <a href="">{svg1}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testi;
