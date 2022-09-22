import Image from "next/image";
import React from "react";
import BrigeSvg from "@public/icons/brige.svg";

const Office = ({ ...obj }) => {
  return (
    <>
      <div className="card md:max-w-3xl">
        <div className="card__body p-10">
          <div className="pb-4">
            <BrigeSvg />
            {/* <Image
              layout="fill"
              objectFit="cover"
              src={obj.icon?.url}
              alt=""
              objectPosition={"center"}
            /> */}
          </div>
          <h3 className="card__title text-neutral-800">{obj.country}</h3>
          <address className="text-neutral-600">
            <a
              className="text-[14px] md:text-xl"
              href={`mailto:${obj.mailLink}`}
            >
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
