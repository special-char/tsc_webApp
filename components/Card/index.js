import React from "react";
import Image from "next/image";

const Card = ({ title, description, img, chips, name, img1 }) => {
  return (
    <>
      <div className="card">
        {" "}
        <figure className="relative h-80">
          <Image layout="fill" objectFit="cover" src={img} alt="" />{" "}
        </figure>{" "}
        <div className="card__body p-8 relative border-spacing-2 shadow-2xl bg-neutral-100  ">
          <h3 className="card__title">{title}</h3>
          <p>{description}</p>
          <div className="flex flex-row gap-4 items-center">
            <div className="flex relative rounded-full w-12 h-12 ">
              <Image
                className=" avatar rounded-full "
                layout="fill"
                src={img1}
              />
            </div>
            <h5>{name}</h5>
          </div>
        </div>
        <div className="absolute flex flex-col items-end top-8 gap-2 text-center w-full md:justify-end md:flex-row px-4">
          {chips &&
            chips.map((chip) => (
              <span
                key={chip.id}
                className={`btn  chip py-4 px-6 text-xs ${
                  chip.hours
                    ? "lowercase chip--white"
                    : "uppercase chip--primary"
                }`}
              >
                {chip.hours && `${chip?.hours}hr ${chip?.minutes}m`}
                {chip.price && `$ ${chip.price} USD`}
              </span>
            ))}
          {/* <span className=" btn chip--white chip py-4 px-6 text-xs ">
            {chip}
          </span>
          <span className=" btn chip--primary chip py-4 px-6 text-xs">
            {chip2}
          </span> */}
        </div>
      </div>
    </>
  );
};
Card.displayName = "Card";
export default Card;
