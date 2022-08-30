import React from "react";

const Perks = ({ image, title, description, id }) => {
  return (
    <>
      <div className="flex-col items-center text-content-wrapper md:flex-row lg:flex-col flex gap-8">
        <div className="max-w-[230px] w-full">{image}</div>

        <div className=" flex flex-col md:text-left lg:text-center gap-4">
          <h3 className="font-bold  text-neutral-100">{`${title}`}</h3>
          <p className="text-lg font-normal text-neutral-300">{description}</p>
        </div>
      </div>
    </>
  );
};
Perks.displayName = "Perks";
export default Perks;
