import TSCImage from "@components/TSCImage";
import React from "react";

const EmployeeProjectsSection = () => {
  const projectDetails = [
    {
      id: 1,
      projectName: "Food Coutuer",
      categories: ["Mobile Application"],
      technologies: ["React Native", "Graphql", "ProstgreSQL/MongoDB"],
      projectImage:
        "https://res.cloudinary.com/dnxzgxivo/image/upload/c_fill/c_scale,w_auto,dpr_auto/v1614922817/Simulator_Screen_Shot_i_Phone_11_2021_03_05_at_11_09_33_397a24f03e.png",
    },
    {
      id: 2,
      projectName: "Personal Portfolio",
      categories: ["Web Application"],
      technologies: [
        "HTML 5/CSS 3/Javascript",
        "Next.js/Gatsby",
        "Graphql",
        "Progressive Web App",
      ],
      projectImage: "",
    },
  ];
  return (
    <section className="w-full py-24 bg-neutral-200">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row min-h-screen">
        <div className="lg:flex-[0.8] flex-1 px-4 flex flex-col">
          <h2 className="m-0">Projects</h2>
          <span className="w-1/5 rounded-md h-1 bg-neutral-800" />
        </div>
        <div className="flex-[2] px-4 h-full">
          {projectDetails.map((projectDetail, index) => {
            return (
              <>
                <div className="relative flex flex-wrap gap-8">
                  <div className="flex-1 min-w-[250px] flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <span className="text-xl md:text-2xl text-neutral-700 font-semibold">
                        Project Name
                      </span>
                      <span className="text-neutral-700 font-medium">
                        {projectDetail.projectName}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-xl md:text-2xl text-neutral-700 font-semibold">
                        Category
                      </span>
                      <div className="flex gap-2 flex-wrap">
                        {projectDetail.categories.map((category) => {
                          return (
                            <span className="bg-neutral-700 text-neutral-100 px-3 py-1 text-xs font-medium">
                              {category}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <span className="text-xl md:text-2xl text-neutral-700 font-semibold">
                        Technologies Used
                      </span>
                      <div className="flex gap-2 flex-wrap">
                        {projectDetail.technologies.map((technology) => {
                          return (
                            <span className="bg-neutral-700 text-neutral-100 px-3 py-1 text-xs font-medium">
                              {technology}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="relative h-[25rem] md:h-[35rem] aspect-[0.5]">
                    <TSCImage layout="fill" src={projectDetail.projectImage} />
                  </div>
                </div>
                {index !== projectDetails.length - 1 && (
                  <div className="w-full h-[0.5px] bg-neutral-300 rounded-md my-12" />
                )}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EmployeeProjectsSection;
