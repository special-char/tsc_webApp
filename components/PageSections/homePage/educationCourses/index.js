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
        <div className="bg-secondary2 rounded-full w-[350px] h-[350px] absolute top-10 -left-80 md:-top-72 md:-left-40 -z-10"></div>
        <div className="bg-secondary1 rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] md:-bottom-40 md:left-3/4 absolute -bottom-40 left-24 -z-10 md:top-[550px] md:right-[500px]"></div>
        <div className="bg-secondary3 rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] absolute right-14 bottom-20 md:top-28 md:right-52 -z-10"></div>
        <div className="container mx-auto max-w-7xl">
          <div className="content flex flex-col flex-wrap xs:flex-row md:flex-col lg:flex-row gap-28 ">
            <div className="left-text-content flex flex-col flex-wrap flex-1 items-start justify-center max-w-2xl mx-auto">
              <h2 className="text-neutral-100 text-center sm:text-left md:text-center">
                Grow your career today with the Education courses
              </h2>
              <p className="text-neutral-100 text-center sm:text-left md:text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <button className="btn btn--secondary self-center sm:self-start md:self-center">
                Explore Courses
              </button>
            </div>
            <div className="right-box-content flex flex-1 items-center flex-wrap justify-center gap-7">
              <div className="flex flex-col items-end gap-7">
                <div className="rounded-lg px-7 pt-12 pb-10 min-w-fit flex flex-col items-center justify-center text-center bg-neutral-100">
                  <h2>9/10</h2>
                  <p>Overall courses satisfaction score</p>
                </div>
                <div className="rounded-lg px-7 pt-12 pb-10 min-w-fit flex flex-col items-center justify-center text-center bg-neutral-100 ">
                  <h2>96%</h2>
                  <p>Completition rate on all courses</p>
                </div>
              </div>
              <div className="flex-start flex items-center justify-start ">
                <div className="rounded-lg px-7 pt-12 pb-10 min-w-fit flex flex-col items-center justify-center  text-center bg-neutral-100">
                  <h2>10K+</h2>
                  <p>Happy students worldwide</p>
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
