import React from "react";

const ChipNavigation = ({ link, label }) => {
  return (
    <div className="course-navigation   rounded-3xl md:rounded-full">
      <div className="chip chip--white border border-neutral-400 px-6 py-2 flex gap-1 items-center hover:bg-primary hover:text-secondary1 duration-300">
        <span className="font-bold ">
          <a href={link}>{label}</a>
        </span>
      </div>
    </div>
  );
};

export default ChipNavigation;
