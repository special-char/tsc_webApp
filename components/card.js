import React from "react";

const Card = ({
  svg = null,
  color = "bg-red-500",
  bColor = "border-red-300",
  title = "title",
  desc = "desc",
}) => {
  return (
    <div className="circles">
      <div className="p-12 flex flex-col items-center">
        <div
          className={`circle z-30 absolute rounded-full bg-transparent border-4 h-20 w-20 p-2 -m-2 ${bColor}`}
        ></div>
        <div
          className={`flex items-center justify-center rounded-full  border-red-100 border-2 h-16 w-16 ${color}`}
        >
          {svg}
        </div>
        <div className="heading m-4 flex flex-col items-center">
          <h3
            className="text-xl font-semibold m-4"
            style={{ padding: "10px 0" }}
          >
            {title}
          </h3>
          <p className="text-base text-gray-600 text-center">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
