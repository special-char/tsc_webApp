import Link from "next/link";
import React from "react";

const Office = ({ svg, title, number, address, email }) => {
  return (
    <>
      <div className="card  md:w-[40%] ">
        <Link href={"/courses"}>
          <div className="card__body p-6  relative overflow-hidden">
            <div className="w-48">{svg}</div>
            <h3 className="card__title text-neutral-800">{title}</h3>
            <address className="text-neutral-600">
              <a className="w-auto" href={`mailto:${email}`}>
                {email}
              </a>
              <br />
              <a className="w-auto" href={`tel:${number}`}>
                {number}
              </a>
              <div className="">{address}</div>
            </address>
            <div className="rounded-full bg-primary w-32 h-32 absolute -right-16 -bottom-24 md:-bottom-20"></div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Office;
