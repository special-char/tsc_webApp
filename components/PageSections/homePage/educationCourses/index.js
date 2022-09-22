import Link from "next/link";
import React from "react";

const EducationCourses = ({ data }) => {
  // console.log("success data", data);
  return (
    <>
      <section className="wrapper relative w-full h-full bg-primary overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 py-20 ">
          <div className="content md:w-[90%] max-w-7xl lg:w-full mx-auto flex flex-col flex-wrap xs:flex-row md:flex-col lg:flex-row  gap-6">
            <div className="left-text-content flex flex-col flex-wrap flex-1 items-start justify-center max-w-2xl md:w-4/5 md:mb-14 mx-auto">
              <h2 className="text-neutral-100 text-center sm:text-left md:text-center lg:text-left">
                {data.successHeading?.title}
              </h2>
              <p className="text-neutral-100 text-center sm:text-left md:text-center lg:text-left">
                {data.successHeading?.description}
              </p>
              <Link href={data.exploreCourse?.link}>
                <button className="btn btn--secondary w-full md:w-1/2 btn--small self-center sm:self-start md:self-center lg:self-start">
                  {data.exploreCourse?.buttonText}
                </button>
              </Link>
            </div>
            <div className="right-box-content flex items-center flex-wrap justify-center gap-5 z-10">
              <div className="flex flex-col md:max-w-[220px] items-center lg:items-end gap-3">
                {data.leftCards.map((val) => {
                  return (
                    <div className="course-card" key={val.id}>
                      <h1 className="mb-0">{val.title}</h1>
                      <p className="mb-0">{val.description}</p>
                    </div>
                  );
                })}
                {/* <div className="course-card">
                  <h1 className="mb-0">96%</h1>
                  <p className="mb-0">Completition rate on all courses</p>
                </div> */}
              </div>
              <div className="flex md:max-w-[220px] items-center justify-start">
                {data.rightCards.map((val) => {
                  return (
                    <div className="course-card px-[50px] md:px-0" key={val.id}>
                      <h1 className="mb-0">{val.title}</h1>
                      <p className="mb-0">{val.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary2 rounded-full w-[350px] h-[350px] absolute top-64 -left-80 md:-top-60 md:-left-52 lg:-left-72 lg:-top-48 "></div>
        <div className="bg-secondary1 rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] md:-bottom-60 md:left-[60%] absolute -bottom-40 left-32 lg:top-[86%] lg:left-[36%]"></div>
        <div className="bg-secondary3 rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] absolute right-14 bottom-72 md:top-[55%] md:right-52 lg:right-48 lg:top-40 "></div>
      </section>
    </>
  );
};
EducationCourses.displayName = "EducationCourses";
export default EducationCourses;
