import React from "react";

const Achievements = ({ data }) => {
  //console.log("About Success Data:", data);
  return (
    <div className="w-screen py-24 md:py-36 lg:py-44">
      <div className="container mx-auto max-w-7xl flex flex-col items-center">
        <h2 className="lg:min-w-1/2 text-center">{data.heading?.title}</h2>

        <div className="flex flex-wrap justify-center items-center ">
          {data.success.map((val) => (
            <div
              className=" text-center px-7  max-w-[297px] flex-1 "
              key={val.id}
            >
              <h1 className="text-secondary3">{val.number}</h1>
              <h3>{val.title}</h3>
              <p>{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
