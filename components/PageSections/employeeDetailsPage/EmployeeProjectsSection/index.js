import TSCImage from "@components/TSCImage";
import React from "react";

const EmployeeProjectsSection = () => {
  const projectDetails = [
    {
      id: 1,
      projectName: "Food Coutuer",
      role: "Front-end Developer",
      category: "Mobile Application",
      technologies: ["React Native", "Graphql", "ProstgreSQL/MongoDB"],
      projectImage:
        "https://res.cloudinary.com/dnxzgxivo/image/upload/c_fill/c_scale,w_auto,dpr_auto/v1614922817/Simulator_Screen_Shot_i_Phone_11_2021_03_05_at_11_09_33_397a24f03e.png",
    },
    {
      id: 2,
      projectName: "Personal Portfolio",
      role: "Full-stack Developer",
      category: "Web Application",
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
    <section className="w-full py-24">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row min-h-screen">
        <h2 className="lg:flex-[0.8] flex-1 px-4 capitalize">Projects</h2>
        <div className="flex-[2] px-4 h-full">
          {projectDetails.map((projectDetail, index) => {
            return (
              <>
                <div className="relative flex flex-wrap gap-8">
                  <div className="flex-1 flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <span className="text-xl md:text-2xl text-primary font-semibold">
                        Project Name
                      </span>
                      <span className="text-neutral-700 font-medium">
                        {projectDetail.projectName}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-xl md:text-2xl text-primary font-semibold">
                        Role
                      </span>
                      <span className="text-neutral-700 font-medium">
                        {projectDetail.role}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-xl md:text-2xl text-primary font-semibold">
                        Category
                      </span>
                      <span className="text-neutral-700 font-medium">
                        {projectDetail.category}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4">
                      <span className="text-xl md:text-2xl text-primary font-semibold">
                        Technologies Used
                      </span>
                      <div className="flex gap-2 flex-wrap">
                        {projectDetail.technologies.map((technology) => {
                          return (
                            <span className="bg-primary text-neutral-100 px-3 py-1 text-xs font-medium">
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
