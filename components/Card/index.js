import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ ...obj }) => {
  return (
    <>
      <div className="card">
        <figure className="relative md:h-80">
          <Image
            className=" hover:scale-110 duration-500"
            layout="fill"
            objectFit="cover"
            src={obj.courseImage?.url}
            alt=""
            objectPosition={"center"}
          />
        </figure>
        <div className="card__body p-8 relative border-spacing-2 shadow-2xl bg-neutral-100  ">
          <h3 className="card__title md:mb-3">{obj.title}</h3>
          <p className="line-clamp-4">{obj.titleDescription}</p>
        </div>
      </div>
    </>
  );
};
Card.displayName = "Card";
export default Card;
