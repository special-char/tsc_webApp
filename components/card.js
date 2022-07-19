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
          className={`flex items-center justify-center rounded-full h-60 w-60`}
        >
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

export default Card;
