import React from "react";

const Offices = ({ svg, title, number, address, email }) => {
  return (
    <>
      <div className="card">
        <div className="card__body p-8 relative overflow-hidden">
          <div className="w-48">{svg}</div>{" "}
          <h3 className="card__title text-neutral-800">{title}</h3>
          <address className="text-neutral-600">
            <a className="w-auto" href={`mailto:${email}`}>
              {email}
            </a>
            <br />
            <a className="w-auto" href={`tel:${number}`}>
              {number}
            </a>
            <div className="pr-20">{address}</div>
          </address>
          <div className="rounded-full bg-primary w-32 h-32 absolute -right-8 -bottom-16"></div>
        </div>
      </div>
    </>
  );
};

export default Offices;
