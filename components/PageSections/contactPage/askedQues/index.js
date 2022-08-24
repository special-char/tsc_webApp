import React, { useState } from "react";

const AskedQues = ({
  title,
  description,
  icon,

  ...props
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className={`flex flex-col ${
          open ? "h-28" : "h-80 md:h-60"
        } cursor-pointer items-start transition-all duration-300 gap-2 overflow-y-hidden md:gap-6 md:py-8 md:px-9 shadow-sm rounded-xl bg-neutral-100 md:mb-6 mb-5 py-[30px] max-w-3xl mx-auto`}
      >
        <div className="w-full gap-4 flex items-center justify-between">
          <div
            className={`md:w-14 md:h-14 w-12 h-12 flex rounded-full items-center justify-center ${
              open ? " bg-neutral-300" : "bg-neutral-800"
            }`}
          >
            <span
              className={`cursor-pointer  font-bold text-4xl ${
                open ? "text-neutral-600" : "text-neutral-100"
              }`}
            >
              {open ? "+" : "-"}
            </span>
          </div>
          <h3
            className={`flex-1 text-xl md:text-2xl ${
              open ? "text-neutral-600" : "text-neutral-800"
            } `}
          >
            {title}
          </h3>
        </div>
        <div className="transition duration-300 cursor-pointer flex-1 flex flex-col gap-2 md:gap-4   ">
          <p
            className={`${
              open ? "hidden scale-0" : "block scale-100"
            } transition duration-300`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AskedQues;
