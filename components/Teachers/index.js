import React from "react";
import Image from "next/image";

const Teachers = ({
  svg,
  svg2,
  svg3,
  id,
  title,
  description,
  img,
}) => {
  return (
    <>
      <div className="card">
        {" "}
        <figure className="relative h-80">
          <Image layout="fill" objectFit="cover" src={img} alt="" />{" "}
        </figure>{" "}
        <div className="card__body p-8 ">
          <h3 className="card__title">{title}</h3>
          <p>{description}</p>
          <div className="w-48 flex gap-6">
            {svg}
            {svg2}
            {svg3}
          </div>
        </div>
      </div>
    </>
  );
};

export default Teachers;
// rounded-3xl flex flex-col shadow-2xl border-spacing-2 p-8 drop-shadow-md bg-neutral-100
