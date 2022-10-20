import TSCImage from "@components/TSCImage";
import React from "react";

const EmployeeProjectsSection = ({ data }) => {
  console.log("EmployeeProjectsSection data:", data);

  return (
    <section className="w-full py-24 h-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-4 md:px-6">
        <div className="lg:flex-[0.8] flex-1 flex flex-col">
          <h2 className="border-b-4 w-20 hover:w-28 hover:duration-200 border-secondary2">
            Projects
          </h2>
        </div>
        <div className="flex-[2] h-full">
          {data.map((projectDetail, index) => {
            return (
              <>
                <div className="relative flex flex-wrap gap-4">
                  <div className="flex-1 min-w-[250px] flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <h3>Project Name</h3>
                      <span className="text-neutral-700 font-medium">
                        {projectDetail.projectName}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3>Role</h3>
                      <span className="text-neutral-700 font-medium">
                        {projectDetail.role}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3>Category</h3>
                      <span className="text-neutral-700 font-medium">
                        {projectDetail.categories.data.map((val) => (
                          <p>{val.attributes.title}</p>
                        ))}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4">
                      <h3>Technologies Used</h3>
                      <div className="flex gap-2 flex-wrap">
                        {projectDetail.technologies.data.map((val) => {
                          return (
                            <span className="bg-neutral-700 text-neutral-100 px-3 py-1 text-xs font-medium">
                              {val.attributes.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="relative h-[25rem] md:h-[35rem] aspect-[0.5]">
                    <TSCImage
                      layout="fill"
                      objectfit="cover"
                      objectPosition={"center"}
                      src={
                        "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvamVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      }
                    />
                  </div>
                </div>
                {index !== projectDetail.length - 1 && (
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
