import Link from "next/link";
import React from "react";

const ChipNavigation = ({ link, label }) => {
  return (
    <Link href={link}>
      <div className="course-navigation rounded-3xl md:rounded-full">
        <div className="chip chip--white border border-neutral-400 px-6 py-2 flex gap-1 items-center hover:bg-neutral-700 hover:text-secondary1 duration-300">
          <div className="font-bold">
            <span className="">{label}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChipNavigation;
