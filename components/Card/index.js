import React from "react";
import Image from "next/image";

const Card = ({ ...obj }) => {
  return (
    <>
      <div className="card">
        <figure className="relative md:h-80">
          <Image
            layout="fill"
            objectFit="cover"
            src={obj.courseImage?.url}
            alt=""
            objectPosition={"center"}
          />
        </figure>
        <div className="card__body p-8 relative border-spacing-2 shadow-2xl bg-neutral-100  ">
          <h3 className="card__title md:mb-3">{obj.title}</h3>
          <p>{obj.titleDescription}</p>
          {/* <div className="flex flex-row gap-4 items-center">
            <div className="flex relative rounded-full w-12 h-12 ">
              <Image
                className=" avatar rounded-full "
                layout="fill"
                objectPosition={"center"}
                src="https://images.unsplash.com/photo-1661732017217-71b8e7a750a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
Card.displayName = "Card";
export default Card;
