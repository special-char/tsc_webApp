import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import Development from "@public/icons/development.svg";
import Certification from "@public/icons/certification.svg";

const LandingPage = () => {
  const [exploreTraining, setExploreTraining] = useState(false);
  const [exploreDevelopment, setExploreDevelopment] = useState(false);
  const alignCenter = () => {
    setExploreDevelopment(false);
    setExploreTraining(false);
  };
  return (
    <>
      <section
        className={`landing-page-wrapper overflow-y-hidden transition-all flex flex-col
    lg:flex-row lg:flex-wrap w-screen overflow-x-hidden h-screen`}
      >
        <div
          className={`brand-logo w-full h-full flex items-center lg:items-center justify-center transition-all absolute z-30 m-auto
        ${
          exploreDevelopment || exploreTraining
            ? "opacity-100 -translate-y-[45%] lg:translate-x-[0%] custom-transition delay-0"
            : "opacity-0"
        }
        `}
        >
          <Image
            onClick={() => alignCenter()}
            src="/LOGO_ICON_PNG.png"
            width={58}
            height={58}
          />
        </div>
        {/* Development section */}
        <div
          onClick={() => {
            setExploreDevelopment(!exploreDevelopment),
              setExploreTraining(false);
          }}
          className={classNames("custom-transition flex-1", {
            "flex-[6] lg:flex-[10]": exploreDevelopment,
            "hover:flex-[1.2]": !exploreDevelopment,
          })}
        >
          <div className="bg-image relative rounded-3xl h-full ">
            <Image
              src="https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3538&q=80"
              layout={"fill"}
              objectFit={"cover"}
              priority
            />

            <div
              className={`training-section-background custom-transition bg-secondary3 w-full h-full z-20 absolute ${
                exploreDevelopment ? "opacity-75" : "opacity-100"
              }`}
            ></div>

            <div
              className={`w-full h-full flex justify-center flex-1 absolute z-30 transition-all ease-linear duration-75 ${
                exploreTraining
                  ? "opacity-0"
                  : "sm:opacity-100 opacity-0 custom-transition duration-500"
              } `}
            >
              <Certification
                className={`w-1/3 lg:w-1/3 max-w-md ${
                  exploreDevelopment
                    ? "opacity-100  translate-y-[20%] lg:translate-y-[10%] translate-x-[70%] md:translate-x-[80%] custom-transition delay-0"
                    : "opacity-0"
                }`}
              />
            </div>
            <div
              className={`text-content-wrapper w-full h-full absolute z-30 flex flex-1 items-center justify-center transition-all duration-75 ${
                exploreTraining
                  ? "opacity-0"
                  : "opacity-100 custom-transition duration-500"
              }`}
            >
              <div
                className={`px-6 text-content w-full flex flex-col basis-[90%] md:basis-[500px] items-start gap-4 sm:gap-6 ${
                  exploreDevelopment &&
                  `translate-0 sm:-translate-y-[30%] lg:translate-y-0 lg:-translate-x-[30%] md:-translate-x-[15%] custom-transition delay-0`
                } ${
                  !exploreDevelopment &&
                  "justify-center custom-transition delay-0"
                }`}
              >
                <div
                  className={`title text-neutral-100 uppercase font-light sm:text-lg text-sm`}
                >
                  IT Services
                </div>
                <h2 className="slogan uppercase text-neutral-100 font-bold m-0 text-xxl sm:text-4xl">
                  Innovation with us!
                </h2>
                {exploreDevelopment ? (
                  <div className="description text-neutral-100 transition-all text-sm">
                    We're an I.T service company that helps you shape your
                    innovation Get your web and app projects done in a jiff
                    without fuss!
                  </div>
                ) : (
                  <div className="description text-neutral-100 m-0">
                    Never thought of starting a web/app? Get on-board with us!
                  </div>
                )}
                <button
                  onClick={() =>
                    exploreDevelopment
                      ? (document.location.href = "development")
                      : setExploreDevelopment(true)
                  }
                  className="btn border-2 border-netext-neutral-100 text-neutral-100 py-2 text-xs lg:text-base lg:py-3 lg:px-5 hover:bg-neutral-500 hover:border-neutral-100 hover:text-primary"
                >
                  {exploreDevelopment ? "explore us!" : "Intrigues you ?"}
                </button>
              </div>
            </div>
            <div
              onClick={() => setExploreTraining(false)}
              className={`${
                exploreDevelopment ? "opacity-0" : "opacity-100"
              } lg:px-2 flex justify-center lg:justify-end absolute w-full h-full items-start lg:items-center cursor-pointer custom-transition`}
            >
              {/* <Larrow
                className={classNames(
                  "w-4 z-50 cursor-pointer transform rotate-90 lg:rotate-0",
                  {
                    "custom-transition transform -rotate-180": exploreTraining,
                  }
                )}
              /> */}
            </div>
          </div>
        </div>
        {/* Training section */}
        <div
          onClick={() => {
            setExploreTraining(!exploreTraining), setExploreDevelopment(false);
          }}
          className={classNames("custom-transition flex-1 ", {
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
              className={`training-section-background custom-transition bg-neutral-800 w-full h-full z-20 absolute ${
                exploreTraining ? "opacity-75 " : "opacity-100"
              }`}
            ></div>

            <div
              className={`transition-all ease-linear duration-75 flex justify-center w-full h-full flex-1 absolute z-30 ${
                exploreTraining
                  ? `sm:opacity-100 opacity-0 transition-all duration-500`
                  : "opacity-0"
              }`}
            >
              <Development
                className={`w-1/3 ${
                  exploreTraining &&
                  " translate-y-[20%] lg:translate-y-[10%] translate-x-[70%] md:translate-x-[80%] custom-transition delay-0"
                } ${
                  !exploreTraining && "justify-center custom-transition delay-0"
                }`}
              />
            </div>
            <div
              className={`px-6 text-content-wrapper w-full h-full absolute z-30 flex items-center justify-center transition-all duration-75 ${
                exploreDevelopment
                  ? "opacity-0"
                  : "opacity-100 custom-transition duration-500"
              } `}
            >
              <div
                className={`text-content w-full flex flex-col basis-[90%] md:basis-[500px] items-start gap-4 sm:gap-6 ${
                  exploreTraining &&
                  "translate-0 sm:-translate-y-[30%] lg:translate-y-0 lg:-translate-x-[30%] md:-translate-x-[15%] custom-transition delay-0"
                } ${
                  !exploreTraining && "justify-center custom-transition delay-0"
                }`}
              >
                <div className="title text-neutral-100 uppercase font-light sm:text-lg text-sm">
                  Super traniee program
                </div>
                <h2 className="slogan uppercase text-neutral-100 font-bold text-xxl sm:text-4xl m-0">
                  Get industry ready from field experts!
                </h2>
                {exploreTraining ? (
                  <div className="description text-neutral-100 transition-all text-sm">
                    We provide hands-on training for full-stack development. You
                    get flooded with voulptous information and guidence to excel
                    in the field.
                  </div>
                ) : (
                  <p className="description text-neutral-100 m-0">
                    Worried about your technical background? It doesn't matter!
                  </p>
                )}
                <button
                  onClick={() =>
                    exploreTraining
                      ? (document.location.href = "training")
                      : setExploreTraining(true)
                  }
                  className="btn border-2 border-netext-neutral-100 text-neutral-100 py-2 lg:py-3 lg:px-5 
              text-xs lg:text-base hover:bg-neutral-500 hover:border-neutral-100 hover:text-neutral-100"
                >
                  {exploreTraining ? "explore!" : "Curious ?"}
                </button>
              </div>
            </div>
            <div
              onClick={() => setExploreDevelopment(false)}
              className={` lg:px-2 flex justify-center lg:justify-start absolute w-full h-full items-start lg:items-center cursor-pointer custom-transition  ${
                exploreTraining ? "opacity-0" : "opacity-100"
              }`}
            >
              {/* <Rarrow
                className={classNames(
                  "w-4 z-50 cursor-pointer rotate-90 lg:rotate-0",
                  {
                    "custom-transition transform rotate-90 lg:rotate-180":
                      exploreDevelopment,
                  }
                )}
              /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
