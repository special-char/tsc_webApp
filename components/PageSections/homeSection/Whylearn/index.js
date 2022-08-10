import React from "react";

const Whylearn = ({ svg, title, description, id }) => {
  return (
    <>
      <div className="flex-col items-center text-content-wrapper md:flex-row lg:flex-col flex gap-4">
        <div className="w-60 ">{svg}</div>

        <div className=" flex flex-col md:text-left lg:text-center">
          <h3 className="font-bold text-lg text-neutral-100">
            {`${id}. ${title}`}
          </h3>
          <p className="text-lg font-normal text-neutral-300">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Whylearn;