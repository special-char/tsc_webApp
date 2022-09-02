import Image from "next/image";
import React from "react";

const Perks = ({ data }) => {
  //console.log("perks obj:", data);
  return (
    <>
      <div className="flex-col items-center text-content-wrapper md:flex-row lg:flex-col flex gap-8">
        <div className="max-w-[230px] w-full">
          <Image className="" layout="fill" src={data.image?.name} />
        </div>
        <div className=" flex flex-col md:text-left lg:text-center gap-4">
          <h3 className="font-bold  text-neutral-100">{`${data.title}`}</h3>
          <p className="text-lg font-normal text-neutral-300">
            {data.description}
          </p>
        </div>
      </div>
    </>
  );
};
Perks.displayName = "Perks";
export default Perks;
