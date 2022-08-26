import React from "react";
import CourseCategoryData from "./courseCategoryData";

const CourseByCategory = () => {
  return (
    <section className="main h-auto w-full">
      <div className="main-container container max-w-7xl mx-auto px-3 md:px-6 pt-16 pb-28 md:pt-28 md:pb-36 lg:pt-32 lg:pb-44">
        <center>
          <h2 className="md:mb-12">Browse our courses by category</h2>
        </center>
        <div className="flex flex-col gap-6 md:w-[552px] md:mx-auto lg:w-[90%] lg:flex-row lg:gap-6">
          {CourseCategoryData.map((val) => (
            <div key={val.id} className="card flex-1">
              <figure className="relative">
                {val.photo}
                <div className="chip chip--white px-6 py-4 flex items-center gap-1 absolute top-4 right-4">
                  <span>{val.icon}</span>
                  <span className="text-sm font-bold">{val.courses}</span>
                </div>
              </figure>
              <div className="card-body">
                <h3 className="card-title">{val.label}</h3>
                <p>{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

CourseByCategory.displayName = "CourseByCategorySection";
export default CourseByCategory;
