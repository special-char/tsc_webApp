import React from "react";

const EmployeeAchievementSection = () => {
  return (
    <section className="py-24 bg-neutral-300/25">
      <div id="container" className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row lg:flex-row">
          <div className="flex-1 px-4">
            <h2>Achievements</h2>
          </div>
          <div className="px-4 flex-[2]">
            <ul
              id="list "
              className="flex flex-col p-0 m-0 items-start justify-start"
            >
              <li className="flex gap-4 items-center ">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Lorem ipsum dolor sit amet.
              </li>
              <li className="flex gap-4 items-center ">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Lorem ipsum dolor sit amet.
              </li>
              <li className="flex gap-4 items-center ">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Lorem ipsum dolor sit amet.
              </li>
              <li className="flex gap-4 items-center ">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Lorem ipsum dolor sit amet.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeAchievementSection;
