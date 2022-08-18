import React from "react";
import Image from "next/image";

const Testimonial = ({
  img,
  svg,
  designation,
  name,
  description,
  ...props
}) => {
  return (
    <>
      <div className=" flex flex-col md:flex-row items-center w-full lg:w-[765px] md:w-[720px] py-11 px-6 md:py-24 md:px-14 md:p-12 gap-8 rounded-3xl shadow-2xl border-spacing-2 drop-shadow-sm bg-neutral-100">
        <div className="flex flex-col relative rounded-full w-52 h-52">
          <Image
            className=" avatar rounded-full "
            layout="fill"
            src={img}
            {...props}
          />
        </div>
        <div className="flex-col text-content-wrapper flex-1 flex gap-2 md:items-start items-center">
          {svg}
          <p className="text-lg font-normal text-neutral-600">{description}</p>
          <h4 className="font-bold text-lg text-neutral-700">{name}</h4>
          <p className="text-lg font-normal text-neutral-600 mb-0">
            {designation}
          </p>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
