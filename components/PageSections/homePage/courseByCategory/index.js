import Link from "next/link";
import React from "react";
import Yarrow from "@public/icons/yellowArrow.svg";
import TSCImage from "@components/TSCImage";

const CourseByCategory = ({ data }) => {
  return (
    <section className="main h-auto w-full">
      <div className="main-container container max-w-7xl mx-auto px-3 md:px-6 pt-16 pb-28 md:pt-28 md:pb-36 lg:pt-32 lg:pb-44">
        <center>
          <h2 className="md:mb-12">{data.heading?.title}</h2>
        </center>
        <div className="flex flex-col gap-6 md:w-[552px] md:mx-auto lg:w-[90%] lg:flex-row lg:gap-6">
          {data.cardComponent.map((val) => (
            <div className="card flex-1" key={val.id}>
              <figure className="aspect-image relative min-h-[300px]">
                <TSCImage
                  layout="fill"
                  className=""
                  objectFit="cover"
                  src={val.image?.url}
                  alt=""
                />
                {val.courses && (
                  <div className="chip chip--white px-6 py-3 flex items-center gap-1 absolute top-4 right-4">
                    <span className="w-3">{val.icon}</span>
                    <span className="text-sm font-bold">{val.courses}</span>
                  </div>
                )}
              </figure>
              <div className="card-body">
                <h3 className="card-title">{val.title}</h3>
                <p>{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex justify-center">
        <Yarrow className="absolute w-12 md:w-16 -top-14 z-10" />
      </div>
    </section>
  );
};

CourseByCategory.displayName = "CourseByCategorySection";
export default CourseByCategory;
