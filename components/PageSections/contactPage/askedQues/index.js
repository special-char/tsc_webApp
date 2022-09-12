import React, { useState } from "react";

const AskedQues = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => {
        setOpen((prev) => !prev);
      }}
      className={`w-full  px-2 ${
        !open ? "h-28" : "h-full md:h-full"
      } cursor-pointer items-start transition-all duration-300 gap-2 overflow-y-hidden md:gap-6 md:py-8 md:px-9 shadow-sm rounded-xl bg-neutral-100 md:mb-6 mb-5 py-[30px] max-w-3xl mx-auto`}
    >
      <div
        className={`w-full gap-4 flex ${
          open ? "items-start" : "items-center"
        } justify-start `}
      >
        <div
          className={`min-w-[2.5rem] md:min-w-[3rem] md:w-12 md:h-12 w-10 h-10 flex rounded-full items-center justify-center ${
            !open ? " bg-neutral-300" : "bg-neutral-800"
          }`}
        >
          <button
            className={`cursor-pointer flex justify-center items-center ${
              open
                ? `before:translate-y-0 before:duration-500 before:-rotate-90 before:h-4 before:w-1 before:absolute before:bg-neutral-300 after:translate-y-0 after:duration-500 after:h-1 after:w-4 after:rotate-0 after:absolute after:bg-neutral-300`
                : `before:absolute before:bg-neutral-500 before:h-4 before:w-1 before:translate-y-0 before:duration-500 after:absolute after:h-1 after:w-4 after:translate-y-0 after:duration-500 after:bg-neutral-500`
            }`}
          />
        </div>
        <div className="flex-2">
          <h3
            className={`flex-1 text-xl md:text-2xl ${
              !open ? "text-neutral-600" : "text-neutral-800"
            } `}
          >
            {data.title}
          </h3>
          <div className="ease-in transition-all duration-300 cursor-pointer flex-1 flex flex-col gap-2 md:gap-4   ">
            <p
              className={`${
                !open ? "hidden scale-0" : "flex scale-100"
              } transition duration-300`}
            >
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskedQues;
