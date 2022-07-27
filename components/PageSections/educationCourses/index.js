import React from "react";

const EducationCourses = () => {
  return (
    <section className="py-20 ">
      <div className="bg-primary h-screen w-full overflow-hidden lg:overflow-hidden relative">
        <div className="bg-secondary2 rounded-full w-[350px] h-[350px] absolute top-10 -left-80 lg:-top-72 lg:-left-40 z-10"></div>
        <div className="bg-secondary1 rounded-full w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] md:-bottom-40 md:left-3/4 absolute -bottom-40 left-24 z-10 lg:top-[550px] lg:right-[500px]"></div>
        <div className="bg-secondary3 rounded-full w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] absolute right-14 bottom-20 lg:top-28 lg:right-52 z-10"></div>
      </div>
    </section>
  );
};

EducationCourses.displayName = "EducationCourses";
export default EducationCourses;
