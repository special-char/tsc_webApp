import React from "react";
import TscSvg from "/public/icons/tsc.svg";

const Loader = () => {
  return (
    <>
      <div className="loader-container h-screen w-full flex justify-center items-center fixed z-10 pb-40 md:pb-24 lg:pb-40">
        <div className="spinner relative w-24 h-24 border-2 border-r-primary border-l-secondary3 rounded-[50%] duration-300"></div>
        <TscSvg className=" w-16 md:p-4 md:w-24 absolute" />
      </div>
    </>
  );
};

export default Loader;
