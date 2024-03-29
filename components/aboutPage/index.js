import React from "react";

const AboutPage = ({ svg, id, title, description, chip, ...props }) => {
  return (
    <>
      <div className="rounded-3xl shadow-2xl border-spacing-2 p-8 drop-shadow-md bg-neutral-100">
        <div className="flex items-center justify-between pb-8">
          <div className="w-16 ">{svg}</div>
          <div className="chip border-[1px] border-neutral-300 shadow-dark">
            <span className="">{chip}</span>
          </div>
        </div>
        <h2 className=" text-neutral-700">{title}</h2>
        <p className=" text-neutral-600">{description}</p>
      </div>
    </>
  );
};

AboutPage.displayName = "About Page";
export default AboutPage;
