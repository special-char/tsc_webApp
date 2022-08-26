import React from "react";
import Image from "next/image";
import Link from "next/link";
const Teachers = ({ svgData, title, description, img }) => {
  return (
    <>
      <div className="card">
        <Link href={"/courses"}>
          <a>
            <figure className="relative h-80">
              <Image layout="fill" objectFit="cover" src={img} alt="" />
            </figure>
          </a>
        </Link>
        <div className="card__body p-8 ">
          <h3 className="card__title">{title}</h3>
          <p>{description}</p>
          <div className="card-svg  flex gap-6">
            {svgData.map((obj) => {
              return (
                <Link href={`${obj.svgLink}`}>
                  <a>{obj.svg}</a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Teachers;
