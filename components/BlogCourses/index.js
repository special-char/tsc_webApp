import React from "react";
import TSCImage from "@components/TSCImage";

const BlogCourses = ({ ...obj }) => {
  return (
    <>
      <div className="card">
        <figure className="relative h-80 ">
          <TSCImage
            layout="fill"
            objectFit="cover"
            src={obj.bannerImage?.url}
            alt=""
          />
        </figure>
        <div className="card__body p-8 relative border-spacing-2 shadow-2xl bg-neutral-100  ">
          <div className="card__title text-base font-bold text-neutral-600">
            {/* {date} */}
          </div>
          <h3 className="card__description w-300px">{obj.title}</h3>
          <div className="flex flex-row gap-4 items-center">
            <div className="flex relative rounded-full w-12 h-12 "></div>
          </div>
        </div>
        {/* <div className="chip chip--white absolute flex top-8 gap-2 text-center py-3 px-6 items-center right-4 flex-row ">

          <span className="text-base text-neutral-700 font-bold ">
            
          </span>
        </div> */}
      </div>
    </>
  );
};

export default BlogCourses;
