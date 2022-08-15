import React from "react";

const EducationCourses = () => {
  const arr = [
    {
      id: 1,
      firstName: "User1",
      lastName: "Surname",
      description: "description1",
      designation: "Developer",
    },
    {
      id: 2,
      firstName: "User2",
      lastName: "Surname",
      description: "description2",
      designation: "Developer",
    },
    {
      id: 3,
      firstName: "User3",
      lastName: "Surname",
      description: "description3",
      designation: "Developer",
    },
  ];
  console.log("arr:", arr);
  return (
    <>
      <section className="wrapper bg-primary w-full overflow-hidden relative py-20 -z-20">
        <div className="bg-secondary2 rounded-full w-[350px] h-[350px] absolute top-64 -left-80 md:-top-72 md:-left-40 lg:-left-40 lg:-top-48 -z-10"></div>
        <div className="bg-secondary1 rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] md:-bottom-40 md:left-3/4 absolute -bottom-40 left-32 -z-10 lg:top-[86%] lg:left-[30%]"></div>
        <div className="bg-secondary3 rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] absolute right-14 bottom-72 md:top-[55%] md:right-52 lg:right-64 lg:top-28 -z-10"></div>
        <div className="container mx-auto max-w-[1210px]">
          <div className="content md:w-[90%] mx-auto flex flex-col flex-wrap xs:flex-row md:flex-col lg:flex-row gap-28 ">
            <div className="left-text-content flex flex-col flex-wrap flex-1 items-start justify-center max-w-2xl mx-auto">
              <h2 className="text-neutral-100 text-center sm:text-left md:text-center lg:text-left">
                Grow your career today with the Education courses
              </h2>
              <p className="text-neutral-100 text-center sm:text-left md:text-center lg:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <button className="btn btn--secondary btn--small self-center sm:self-start md:self-center lg:self-start">
                Explore Courses
              </button>
            </div>
            <div className="right-box-content flex items-center flex-wrap justify-center gap-5">
              <div className="flex flex-col max-w-[220px] items-end gap-3">
                <div className="course-card">
                  <h2 className="mb-0">9/10</h2>
                  <p className="mb-0">Overall courses satisfaction score</p>
                </div>
                <div className="course-card">
                  <h2 className="mb-0">96%</h2>
                  <p className="mb-0">Completition rate on all courses</p>
                </div>
              </div>
              <div className="flex-start flex max-w-[220px] items-center justify-start ">
                <div className="course-card">
                  <h2 className="mb-0">10K+</h2>
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
