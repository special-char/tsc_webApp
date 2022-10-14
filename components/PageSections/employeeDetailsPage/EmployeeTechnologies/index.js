import React, { useEffect } from "react";

const EmployeeTechnologies = () => {
  const data = [
    {
      technology: "React",
      dataprogress: "90",
    },
    {
      technology: "flutter",
      dataprogress: "50",
    },
    {
      technology: "Node",
      dataprogress: "30",
    },
    {
      technology: "React Native",
      dataprogress: "20",
    },
    {
      technology: "python",
      dataprogress: "80",
    },
  ];
  useEffect(() => {
    const technologies = document.getElementById("technologies");
    const progressBars = document.querySelectorAll(".progress-in");
    console.log("technologies", technologies);
    console.log("progressBars", progressBars);

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
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4">
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
              {data.map((val) => (
                <div className="skill-item">
                  <span className="m-0 p-0 text-primary font-bold flex justify-between px-3">
                    <p className="m-0">{val.technology}</p>
                    <p className="m-0">{val.dataprogress}%</p>
                  </span>
                  <div className="rounded-full m-3">
                    <div
                      className="progress-in duration-500 ease-linear bg-gradient-to-r from-primary to-secondary3 w-[100%] h-2.5 rounded-full"
                      data-progress={val.dataprogress}
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
