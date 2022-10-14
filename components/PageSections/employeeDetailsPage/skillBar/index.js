import React from "react";

const SkillBar = () => {
  const data = [
    {
      technology: "React",
      per: "60",
    },
    {
      technology: "flutter",
    },
    {
      technology: "Node",
    },
    {
      technology: "React NAtive",
    },
    {
      technology: "python",
    },
    {
      technology: "Hindi",
    },
  ];
  return (
    <>
      <section className="h-screen py-20">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4">
          <div className="flex-1 lg:flex-[0.8]">
            <h2 className=" capitalize border-b-4 w-20 hover:w-40 hover:duration-200 border-secondary2">
              technologies
            </h2>
          </div>
          <div className="flex-[2]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
              {data.map((val) => (
                <div className="">
                  <span className="m-0 p-0 text-primary font-bold flex justify-between px-3">
                    <p className="m-0">{val.technology}</p>
                    <p className="m-0">{val.per}%</p>
                  </span>
                  <div className="rounded-full m-3">
                    <div className="bg-gradient-to-r from-primary to-secondary3 w-[100%] h-2.5 rounded-full"></div>
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

export default SkillBar;
