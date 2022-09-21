import React from "react";

const Achievements = ({ data }) => {
  return (
    <div className="w-full py-24 md:py-36 lg:py-44">
      <div className="container mx-auto max-w-7xl flex flex-col items-center">
        <h2 className="md:w-[480px] mx-auto text-center text-3xl mb-10 md:mb-10">
          {data.heading?.title}
        </h2>

        <div className="flex flex-wrap justify-center  items-center gap-14">
          {data.success.map((val) => (
            <div
              className=" text-center min-w-[300px] px-7 flex-1"
              key={val.id}
            >
              <div>
                <h1 className="text-secondary3 mb-2">{val.number}+</h1>
              </div>
              <h3 className="mb-1">{val.title}</h3>
              <p className="line-clamp-3 mb-0">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
