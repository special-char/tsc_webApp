import React from "react";

const EducationCourses = () => {
  return (
    <section className="py-20 ">
      <div className="bg-primary h-screen w-full overflow-hidden lg:overflow-hidden relative">
        <div className="bg-secondary2 rounded-full w-[350px] h-[350px] absolute top-10 -left-80 lg:-top-72 lg:-left-40 z-10"></div>
        <div className="bg-secondary1 rounded-full w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] md:-bottom-40 md:left-3/4 absolute -bottom-40 left-24 z-10 lg:top-[550px] lg:right-[500px]"></div>
        <div className="bg-secondary3 rounded-full w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] absolute right-14 bottom-20 lg:top-28 lg:right-52 z-10"></div>
      </div>
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
          <div className="home-wrapper flex">
            <div className="container items-center justify-center text-center">
              <h2>Grow your career today with the Education courses</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <div className="button-wrapper">
                <button className="btn btn--secondary">Explore Courses</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
