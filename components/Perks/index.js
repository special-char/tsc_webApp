import React from "react";

const Perks = ({ svg, title, description }) => {
  return (
    <>
      <div className="flex-col items-center text-content-wrapper flex-1 flex gap-4">
        <div className="w-60">{svg}</div>
        <h3 className="font-bold text-lg text-neutral-100">{title}</h3>
        <p className="text-lg font-normal text-neutral-300">{description}</p>
      </div>
    </>
  );
};

export default Perks;
