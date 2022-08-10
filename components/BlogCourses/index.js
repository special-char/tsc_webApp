import React from "react";
import Image from "next/image";

const BlogCourses = ({ id, date, description, img, blogType, svg }) => {
  return (
    <>
      <div className="card">
        {" "}
        <figure className="relative h-80">
          <Image layout="fill" objectFit="cover" src={img} alt="" />{" "}
        </figure>{" "}
        <div className="card__body p-8 relative border-spacing-2 shadow-2xl bg-neutral-100  ">
          <div className="card__title text-base font-bold text-neutral-600">
            {date}
          </div>
          <h3 className="card__description w-300px">{description}</h3>
          <div className="flex flex-row gap-4 items-center">
            <div className="flex relative rounded-full w-12 h-12 "></div>
          </div>
        </div>
        <div className="chip chip--white absolute flex top-8 gap-2 text-center py-3 px-6 items-center right-4 flex-row ">
          <span>{svg}</span>
          <span className="text-base text-neutral-700 font-bold ">
            {blogType}
          </span>
        </div>
      </div>
    </>
  );
};

export default BlogCourses;
