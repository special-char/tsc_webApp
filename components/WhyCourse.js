import React from "react";

const WhyCourse = ({
  svg = null,
  color = "bg-red-500",
  bColor = "border-red-300",
  title = "title",
  desc = "desc",
}) => {
  return (
    <div className="circles">
      <div className=" flex flex-col items-center">
        <div className={`flex items-center justify-center rounded-full`}>
          {svg}
        </div>
        <div className="heading m-4 flex flex-col items-center">
          <h3
            className="text-2xl text-white font-bold m-4"
            style={{ padding: "10px 0" }}
          >
            {title}
          </h3>
          <p className="text-lg text-white text-center">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyCourse;
