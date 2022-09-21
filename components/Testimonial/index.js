import React from "react";
import Image from "next/image";

const Testimonial = ({ data }) => {
  //console.log("Testimonial data:", data);
  return (
    <>
      <div className="relative flex flex-col md:flex-row items-center w-full py-11 px-6 md:py-12 md:px-14 md:p-12 gap-4 rounded-3xl drop-shadow-sm border-spacing-2 bg-neutral-100">
        <div className="flex flex-col relative rounded-full w-36 h-36 md:w-48 md:h-48">
          <Image
            className="avatar rounded-full "
            layout="fill"
            src="https://images.unsplash.com/photo-1663524789665-781c971fcbbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            // src={data?.avatar?.url}
          />
        </div>
        <div className="flex-col max-w-[65%] overflow-hidden text-content-wrapper flex-1 flex gap-2 md:items-start items-center">
          {/* {svg} */}
          <p className="text-lg font-normal text-content-wrapper text-neutral-600 line-clamp-3">
            {data.description}
          </p>
          {/* <h4 className="font-bold text-lg text-neutral-700">{data.name}</h4> */}
          <h4>{data.name}</h4>
          <p className="text-lg font-normal text-neutral-600 mb-0">
            {data.jobTitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
