import Layout from "@components/Layouts";
import Image from "next/image";
import React, { useState } from "react";
import Training from "@public/icons/training.svg";
import Larrow from "@public/icons/larrow.svg";
import Rarrow from "@public/icons/rArrow.svg";
const Home = () => {
  const [exploreTraining, setexploreTraining] = useState(false);
  const [exploreDevelopment, setexploreDevelopment] = useState(false);
  return (
    <>
      <div className="landing-page-wrapper h-screen flex flex-wrap">
        <div
          className={`custom-transition flex-1 ${
            exploreTraining
              ? "training-extended"
              : "training-section custom-transition"
          }`}
        >
          <div className="relative rounded-3xl h-full">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              layout={"fill"}
              objectFit={"cover"}
            />
            <div
              className={`training-section-background custom-transition bg-neutral-400 w-full h-full z-20 absolute ${
                exploreTraining ? "opacity-75 " : "opacity-100"
              }`}
            ></div>

            <div className="flex w-full h-full flex-1 absolute z-30">
              <Training className="w-1/2 mx-auto" />
            </div>
            <div className="text-content-wrapper flex items-center justify-center w-full h-full absolute z-30">
              <div className="text-content w-2/3 flex flex-col basis-[500px]">
                <h3 className="font-light">CRUISER SKATEBOARD</h3>
                <h1>MMM AHH ..PUSH IT!</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  natus maxime hic. Nisi, in reprehenderit?
                </p>
                <button
                  onClick={() => setexploreTraining(true)}
                  className="btn btn--primary w-1/2"
                >
                  Explore More
                </button>
              </div>
            </div>
            <div
              onClick={() => setexploreTraining(false)}
              className={`${
                exploreTraining ? "opacity-0" : "opacity-100"
              } custom-transition float-right px-2 flex justify-end absolute w-full h-full items-center`}
            >
              <Larrow className="w-4 z-50" />
            </div>
          </div>
        </div>
        <div
          className={`custom-transition flex-1 ${
            exploreDevelopment
              ? "development-extended"
              : "training-section custom-transition"
          }`}
        >
          <div className="relative rounded-3xl h-full">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              layout={"fill"}
              objectFit={"cover"}
            />
            <div
              className={`training-section-background custom-transition bg-primary w-full h-full z-20 absolute ${
                exploreDevelopment ? "opacity-75 " : "opacity-100"
              }`}
            ></div>

            <div
              className={`${
                exploreTraining ? "opacity-0" : "opacity-100"
              } transition-all ease-linear duration-75 flex w-full h-full flex-1 absolute z-30`}
            >
              <Training className="w-1/2 mx-auto" />
            </div>
            <div
              className={`${
                exploreTraining ? "opacity-0" : "opacity-100"
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
                  onClick={() => setexploreDevelopment(true)}
                  className="btn btn--primary w-1/2"
                >
                  Explore More
                </button>
              </div>
            </div>
            <div
              // onClick={() => setexploreDevelopment(false)}
              className={` custom-transition px-2 flex justify-start absolute w-full h-full items-center`}
            >
              <Rarrow className="w-4 z-50" />
            </div>
          </div>
        </div>
        {/* <div className="development-section custom-transition flex-1">
          <div className="relative rounded-3xl h-full">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              layout={"fill"}
              objectFit={"cover"}
            />
            <div className="bg-neutral-700 w-full h-full absolute"></div>
          </div>
        </div> */}
      </div>
    </>
  );
};
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Home;
