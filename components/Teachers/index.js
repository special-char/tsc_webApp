import React from "react";
import Image from "next/image";
import Link from "next/link";
const Teachers = ({ data }) => {
  console.log("Teachers data", data);
  return (
    <>
      <div className="card">
        <figure className="relative h-80">
          <Image layout="fill" objectFit="cover" src={data.image?.url} alt="" />
        </figure>
        <div className="card__body p-8 ">
          <h3 className="card__title">
            {data.firstName} {data.lastName}
          </h3>
          <p className="line-clamp-3 hover:line-clamp-none">
            {data.description}
          </p>
          <div className="card-svg  flex gap-6">
            {data.socialMedia?.map((obj) => {
              return (
                <Link href={`${obj.svgLink}`}>
                  <a>{obj.svg}</a>
                </Link>
              );
            })}
          </div>
          <h5 className="">{data.jobTitle}</h5>
        </div>
      </div>
    </>
  );
};

export default Teachers;
