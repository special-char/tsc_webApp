import React from "react";
import CourseCategoryData from "./courseCategoryData";

const CourseByCategory = () => {
  return (
    <section className="main h-screen w-full pt-16 md:pt-28 md:pb-36 pb-28 ">
      <div className="main-container container max-w-[1210px] mx-auto px-3 ">
        <center>
          <h2>Browse our courses by category</h2>
        </center>
        <div className="md:w-4/5 md:mx-auto lg:flex lg:gap-3">
          {CourseCategoryData.map((val) => (
            <div className="card pt-0">
              <figure className="relative">
                {val.photo}
                <div className="chip chip--white px-3 py-2 flex items-center gap-1 absolute top-4 right-4">
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
