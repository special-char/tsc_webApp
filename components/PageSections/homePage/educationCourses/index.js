import React from "react";

const EducationCourses = () => {
  // const arr = [
  //   {
  //     id: 1,
  //     firstName: "User1",
  //     lastName: "Surname",
  //     description: "description1",
  //     designation: "Developer",
  //   },
  //   {
  //     id: 2,
  //     firstName: "User2",
  //     lastName: "Surname",
  //     description: "description2",
  //     designation: "Developer",
  //   },
  //   {
  //     id: 3,
  //     firstName: "User3",
  //     lastName: "Surname",
  //     description: "description3",
  //     designation: "Developer",
  //   },
  // ];
  return (
    <>
      <section className="wrapper bg-primary w-full h-auto overflow-hidden relative px-4 py-20 -z-20">
        <div className="bg-secondary2 rounded-full w-[350px] h-[350px] absolute top-64 -left-80 md:-top-60 md:-left-52 lg:-left-72 lg:-top-48 -z-10"></div>
        <div className="bg-secondary1 rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] md:-bottom-60 md:left-[60%] absolute -bottom-40 left-32 -z-10 lg:top-[86%] lg:left-[36%]"></div>
        <div className="bg-secondary3 rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] absolute right-14 bottom-72 md:top-[55%] md:right-52 lg:right-32 lg:top-40 -z-10"></div>
        <div className="container mx-auto max-w-7xl">
          <div className="content md:w-[90%] max-w-7xl lg:w-full mx-auto flex flex-col flex-wrap xs:flex-row md:flex-col lg:flex-row  gap-6">
            <div className="left-text-content flex flex-col flex-wrap flex-1 items-start justify-center max-w-2xl md:w-4/5 md:mb-14 mx-auto">
              <h2 className="text-neutral-100 text-center sm:text-left md:text-center lg:text-left">
                Grow your career today with the Education courses
              </h2>
              <p className="text-neutral-100 text-center sm:text-left md:text-center lg:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <button className="btn btn--secondary w-full md:w-1/2 btn--small self-center sm:self-start md:self-center lg:self-start">
                Explore Courses
              </button>
            </div>
            <div className="right-box-content flex items-center flex-wrap justify-center gap-5">
              <div className="flex flex-col md:max-w-[220px] items-center lg:items-end gap-3">
                <div className="course-card ">
                  <h1 className="mb-0">9/10</h1>
                  <p className="mb-0">Overall courses satisfaction score</p>
                </div>
                <div className="course-card">
                  <h1 className="mb-0">96%</h1>
                  <p className="mb-0">Completition rate on all courses</p>
                </div>
              </div>
              <div className="flex-start w-full md:max-w-[220px] flex items-center justify-start ">
                <div className="course-card">
                  <h1 className="mb-0">10K+</h1>
                  <p className="mb-0">Happy students worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
EducationCourses.displayName = "EducationCourses";
export default EducationCourses;
