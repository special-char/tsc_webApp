import Layout from "@components/Layouts";
import Image from "next/image";
import React, { useState } from "react";
import Training from "@public/icons/Artboard1.svg";
// import Training from "@public/icons/Artboard1.svg";
import Larrow from "@public/icons/lArrow.svg";
import Rarrow from "@public/icons/rArrow.svg";
import classNames from "classnames";
import HomePage from "@components/pageSections/homePage";
import Navbar from "@components/navbar";

const Home = () => {
  const [exploreTraining, setExploreTraining] = useState(false);
  const [exploreDevelopment, setExploreDevelopment] = useState(false);
  const alignCenter = () => {
    setExploreDevelopment(false);
    setExploreTraining(false);
  };
  console.log("exploreTraining", exploreTraining);
  console.log("exploreDevelopment", exploreDevelopment);

  return (
    <>
      {/* <section className="landing-page-wrapper h-screen flex flex-wrap">
        <div className="brand-logo flex justify-center items-center w-full absolute z-50 ">
          <Training onClick={() => alignCenter()} className="w-28" />
        </div>
        
        <div
          className={classNames("custom-transition flex-1", {
            "flex-[10]": exploreTraining,
            "hover:flex-[1.5]": !exploreTraining,
          })}
        >
          <div className="relative rounded-3xl h-full">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              layout={"fill"}
              objectFit={"cover"}
              priority
            />
            <div
              className={`training-section-background custom-transition bg-neutral-400 w-full h-full z-20 absolute ${
                exploreTraining ? "opacity-75 " : "opacity-100"
              }`}
            ></div>

            <div
              className={`${
                exploreDevelopment
                  ? "opacity-0"
                  : "opacity-100 custom-transition duration-500"
              } transition-all ease-linear duration-75 flex w-full h-full flex-1 absolute z-30`}
            >
              <Training className="w-1/2 mx-auto" />
            </div>
            <div
              className={`${
                exploreDevelopment
                  ? "opacity-0"
                  : "opacity-100 custom-transition duration-500"
              } text-content-wrapper flex items-center justify-center w-full h-full absolute z-30`}
            >
              <div className="text-content w-2/3 flex flex-col basis-[500px]">
                <h3 className="font-light">CRUISER SKATEBOARD</h3>
                <h1>MMM AHH ..PUSH IT!</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  natus maxime hic. Nisi, in reprehenderit?
                </p>
                <button
                  onClick={() => setExploreTraining(true)}
                  className="btn btn--primary w-1/2"
                >
                  Explore Training
                </button>
              </div>
            </div>
            <div
              onClick={() => setExploreDevelopment(false)}
              className={`${
                exploreTraining ? "opacity-0" : "opacity-100"
              } custom-transition float-right px-2 flex justify-end absolute w-full h-full items-center`}
            >
              <Larrow
                className={classNames("w-4 z-50 cursor-pointer", {
                  "custom-transition transform -rotate-180": exploreDevelopment,
                })}
              />
            </div>
          </div>
        </div>
        
        <div
          className={classNames("custom-transition flex-1 ", {
            "flex-[10]": exploreDevelopment,
            "hover:flex-[1.5]": !exploreDevelopment,
          })}
        >
          <div className="relative rounded-3xl h-full">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              layout={"fill"}
              objectFit={"cover"}
              priority
            />
            <div
              className={`training-section-background custom-transition bg-primary w-full h-full z-20 absolute ${
                exploreDevelopment ? "opacity-75 " : "opacity-100"
              }`}
            ></div>

            <div
              className={`${
                exploreTraining
                  ? "opacity-0"
                  : "opacity-100 custom-transition duration-500"
              } transition-all ease-linear duration-75 flex w-full h-full flex-1 absolute z-30`}
            >
              <Training className="w-1/2 mx-auto" />
            </div>
            <div
              className={`${
                exploreTraining
                  ? "opacity-0"
                  : "opacity-100 custom-transition duration-500"
              } transition-all ease-linear duration-75 text-content-wrapper flex items-center justify-center w-full h-full absolute z-30`}
            >
              <div className="text-content w-2/3 flex flex-col basis-[500px]">
                <h3 className="font-light">CRUISER SKATEBOARD</h3>
                <h1>MMM AHH ..PUSH IT!</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  natus maxime hic. Nisi, in reprehenderit?
                </p>
                <button
                  onClick={() => setExploreDevelopment(true)}
                  className="btn btn--primary w-1/2"
                >
                  Explore development
                </button>
              </div>
            </div>
            <div
              onClick={() => setExploreTraining(false)}
              className=" px-2 flex justify-start absolute w-full h-full items-center cursor-pointer"
            >
              <Rarrow
                className={classNames("w-4 z-50 cursor-pointer", {
                  "custom-transition transform rotate-180": exploreTraining,
                  "opacity-0 custom-transition": exploreDevelopment,
                })}
              />
            </div>
          </div>
        </div>
      </section> */}
      <HomePage />
    </>
  );
};
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
Home.displayName = "Home";
export default Home;
