import React from "react";

const EducationCourses = () => {
  return (
    <div className="main bg-primary">
      <div className="mx-auto flex-1 ">
        <div class="flex-end flex gap-4 py-4 px-14 flex-col">
          <div className="rounded-lg w-[200px] h-[200px] px-3 flex flex-col items-center justify-center text-center bg-neutral-100">
            <h2>9/10</h2>
            <p>Overall courses satisfaction score</p>
          </div>
          <div className="rounded-lg w-[200px] h-[200px] px-3 flex flex-col items-center justify-center text-center bg-neutral-100 ">
            <h2>96%</h2>
            <p>Completition rate on all courses</p>
          </div>
        </div>
        <div class="flex-start flex flex-col px-14 ">
          <div className="rounded-lg w-[200px] h-[200px] px-3 flex flex-col items-center justify-center  text-center bg-neutral-100">
            <h2>10K+</h2>
            <p>Happy students worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

EducationCourses.displayName = "EducationCourses";
export default EducationCourses;
