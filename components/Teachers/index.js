import React from "react";
import Image from "next/image";
import Link from "next/link";
const Teachers = ({ ...obj }) => {
  console.log("Teachers", obj);
  return (
    <>
      <div className="card">
        <figure className="relative h-80">
          <Image layout="fill" objectFit="cover" src={obj.image?.url} alt="" />
        </figure>
        <div className="card__body p-8 ">
          <h3 className="card__title">
            {obj.firstName} {obj.lastName}
          </h3>
          <p>{obj.description}</p>
          <div className="card-svg  flex gap-6">
            {obj.socialMedia.map((obj) => {
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
