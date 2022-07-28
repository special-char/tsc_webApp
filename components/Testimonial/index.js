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
      <div className="flex items-center w-[700px] p-12 gap-9 rounded-3xl shadow-2xl border-spacing-2 drop-shadow-md bg-neutral-100">
        <div className="relative rounded-full w-44 h-44 ">
          <Image
            className="avatar rounded-full"
            layout="fill"
            src={img}
            {...props}
          />
        </div>

        <div className="flex-col text-content-wrapper flex-1 flex gap-4">
          {svg}
          <p className="text-lg font-normal text-neutral-600">{description}</p>
          <h4 className="font-bold text-lg text-neutral-700">{name}</h4>
          <p className="text-lg font-normal text-neutral-600">{designation}</p>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
