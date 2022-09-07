import Image from "next/image";
import React from "react";

const Office = ({ ...obj }) => {
  return (
    <>
      <div className="card md:w-[25%]">
        <div className="card__body p-6  relative overflow-hidden">
          <div className="aspect-image  relative">
            <Image
              layout="fill"
              objectFit="cover"
              src={obj.icon?.url}
              alt=""
              objectPosition={"center"}
            />
          </div>
          <h3 className="card__title text-neutral-800">{obj.country}</h3>
          <address className="text-neutral-600">
            <a className="w-auto" href={`mailto:${obj.mailLink}`}>
              {obj.mail}
            </a>
            <br />
            <a className="w-auto" href={`tel:${obj.phoneLink}`}>
              {obj.phone}
            </a>
            <div className="">{obj.address}</div>
          </address>
          <div className="rounded-full bg-primary w-32 h-32 absolute -right-16 -bottom-24 md:-bottom-20"></div>
        </div>
      </div>
    </>
  );
};

export default Office;
