import Image from "next/image";
import React from "react";

const WorkValuesCard = ({ data }) => {
  return (
    <>
      <div className="max-w-7xl mx-full rounded-3xl shadow-2xl border-spacing-2 p-8 drop-shadow-md bg-neutral-100">
        <div className="flex items-center justify-between pb-8">
          <div className="relative aspect-image min-h-[50px]">
            <Image
              layout="fill"
              objectFit="cover"
              src={data.icon?.url}
              alt=""
              className="rounded-full"
              objectPosition={"center"}
            />
          </div>
          {/*<div className="chip border-[1px] border-neutral-300 shadow-dark">
            <span className="font-bold text-neutral-700">{chip}</span>
          </div> */}
        </div>
        <h3 className=" text-neutral-700 mb-2 md:mb-3.5">{data.title}</h3>
        <p className=" text-neutral-600 line-clamp-3">{data.description}</p>
      </div>
    </>
  );
};

WorkValuesCard.displayName = "Work Values Card";
export default WorkValuesCard;
