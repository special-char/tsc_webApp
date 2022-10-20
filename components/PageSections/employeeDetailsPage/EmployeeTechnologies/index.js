import React, { useEffect } from "react";

const EmployeeTechnologies = ({ data }) => {
  console.log("EmployeeTechnologies data:", data);

  useEffect(() => {
    const technologies = document.getElementById("technologies");
    const progressBars = document.querySelectorAll(".progress-in");

    const showProgress = () => {
      progressBars.forEach((progressBars) => {
        const value = progressBars.dataset.progress;
        progressBars.style.opacity = 1;
        progressBars.style.width = `${value}%`;
      });
    };
    window.addEventListener("scroll", () => {
      const sectionPos = technologies.getBoundingClientRect().top;
      const screenPos = window.innerHeight / 2;

      if (sectionPos < screenPos) {
        showProgress();
      } else {
        hideProgress();
      }
    });
    function hideProgress() {
      progressBars.forEach((p) => {
        p.style.opacity = 1;
        p.style.width = 0;
      });
    }
  });
  return (
    <>
      <section className="h-auto py-20">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex-1 lg:flex-[0.8]">
            <h2 className=" capitalize border-b-4 w-20 hover:w-40 hover:duration-200 border-secondary2">
              technologies
            </h2>
          </div>
          <div className="flex-[2]">
            <div
              id="technologies"
              className="grid grid-cols-1 md:grid-cols-2 gap-x-10"
            >
              {data?.map((val) => (
                <div className="skill-item">
                  <span className="m-0 p-0 text-primary font-bold flex justify-between px-3">
                    <p className="m-0">{val.technology.data.attributes.name}</p>
                    <p className="m-0">{val.proficiency}</p>
                  </span>
                  <div className="rounded-full m-3 bg-neutral-300">
                    <div
                      className="progress-in duration-500 ease-linear bg-gradient-to-r from-primary to-secondary3 w-[100%] h-2 rounded-full"
                      data-progress={val.proficiency * 10}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployeeTechnologies;
