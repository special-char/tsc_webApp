import React, { useState } from "react";
import TSCImage from "@components/TSCImage";
import classNames from "classnames";
import DevelopmentSvg from "@public/icons/web_development.svg";
import TrainingSvg from "@public/icons/training_icon.svg";
import LogoCodeImage from "@public/images/TSC_Logo_Code_S.png";
import LogoCImage from "@public/images/TSC_Logo_C.png";
import LogoSImage from "@public/images/TSC_Logo_S.png";
import TSCImage from "./TSCImage";

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
        className={`landing-page-wrapper overflow-y-hidden transition-all flex flex-col md:flex-row
      w-screen overflow-x-hidden h-screen`}
      >
        <div
          className={`brand-logo w-full h-full flex items-center lg:items-center justify-center transition-all duration-500 delay-500 absolute z-30 m-auto
        ${
          exploreDevelopment || exploreTraining
            ? "opacity-100 -translate-y-[45%] lg:translate-x-[0%] custom-transition"
            : "opacity-0"
        }
        `}
        >
          <TSCImage
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
          className={classNames("custom-transition transition-all flex-1", {
            "flex-[6] lg:flex-[10]": exploreDevelopment,
            "hover:flex-[1.2]": !exploreDevelopment,
          })}
        >
          <div className="bg-image relative rounded-3xl h-full ">
            <TSCImage
              src="https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3538&q=80"
              layout={"fill"}
              objectFit={"cover"}
              priority
            />

            <div
              className={`training-section-background custom-transition bg-neutral-300 w-full h-full z-20 absolute ${
                exploreDevelopment ? "opacity-70" : "opacity-100"
              }`}
            ></div>

            <div
              className={`transition-all ease-linear duration-75 w-full h-full flex justify-center flex-1 absolute z-30 ${
                exploreDevelopment
                  ? "sm:opacity-100 opacity-0 transition-all custom-transition duration-500"
                  : "opacity-0"
              } `}
            >
              <DevelopmentSvg
                className={`w-1/3 ${
                  exploreDevelopment &&
                  "opacity-100 transition-all translate-y-[20%] lg:translate-y-[0%] translate-x-[70%] md:translate-x-[60%] custom-transition delay-0"
                } ${!exploreDevelopment && "opacity-0 transition-all delay-0"}`}
              />
            </div>
            <div
              className={`px-[10%] text-content-wrapper w-full h-full absolute z-30 flex flex-1 items-center ${
                exploreDevelopment ? "justify-center" : "justify-start"
              } transition-all duration-75 ${
                exploreTraining
                  ? "opacity-0"
                  : "opacity-100 custom-transition duration-500"
              }`}
            >
              <div
                className={`px-6 text-content w-full flex flex-col basis-[90%] ${
                  exploreDevelopment ? "md:basis-[500px]" : "md:basis-[70%]"
                } items-start gap-4 sm:gap-6 ${
                  exploreDevelopment &&
                  `translate-0 sm:-translate-y-[30%] lg:translate-y-0 lg:-translate-x-[50%] md:-translate-x-[15%] custom-transition delay-0`
                } ${
                  !exploreDevelopment &&
                  "justify-center custom-transition delay-0"
                }`}
              >
                <div
                  className={`title text-neutral-700 uppercase font-light sm:text-lg text-sm`}
                >
                  IT Services
                </div>
                <h2 className="slogan uppercase text-neutral-700 font-bold m-0 text-xxl sm:text-4xl">
                  Innovation with us!
                </h2>
                {exploreDevelopment ? (
                  <div className="description text-neutral-700 transition-all text-sm">
                    We're an I.T service company that helps you shape your
                    innovation Get your web and app projects done in a jiff
                    without fuss!
                  </div>
                ) : (
                  <div className="description text-neutral-700 m-0">
                    Never thought of starting a web/app? Get on-board with us!
                  </div>
                )}
                <button
                  onClick={() =>
                    exploreDevelopment
                      ? (document.location.href = "development")
                      : setExploreDevelopment(true)
                  }
                  className="btn border-2 border-text-neutral-700 text-neutral-700 py-2 text-xs lg:text-base lg:py-3 lg:px-5 hover:bg-neutral-500 hover:border-neutral-100 hover:text-primary"
                >
                  {exploreDevelopment ? "explore us!" : "Intrigues you ?"}
                </button>
              </div>
            </div>
            <div
              onClick={() => setExploreTraining(false)}
              className={`${
                exploreDevelopment ? "opacity-0" : "md:opacity-100"
              } opacity-0 lg:px-2 justify-center md:justify-end absolute left-10 ${
                exploreTraining ? "top-0" : "-top-8"
              } flex w-full h-full md:items-center cursor-pointer custom-transition transition-all`}
            >
              {/* <TSCImage
                src={LogoCodeImage}
                height={300}
                width={200}
                objectFit={"contain"}
                className={classNames(
                  "z-50 cursor-pointer rotate-90 md:rotate-0"
                )}
              /> */}
              <TSCImage
                src={LogoSImage}
                height={300}
                width={200}
                objectFit={"contain"}
                className={classNames(
                  "z-50 cursor-pointer rotate-90 md:rotate-0"
                )}
              />
            </div>
          </div>
        </div>
        {/* Training section */}
        <div
          onClick={() => {
            setExploreTraining(!exploreTraining), setExploreDevelopment(false);
          }}
          className={classNames("custom-transition transition-all flex-1 ", {
            "flex-[10]": exploreTraining,
            "hover:flex-[1.5]": !exploreTraining,
          })}
        >
          <div className="relative rounded-3xl h-full">
            <TSCImage
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              layout={"fill"}
              objectFit={"cover"}
              priority
            />
            <div
              className={`training-section-background custom-transition bg-neutral-700 w-full h-full z-20 absolute ${
                exploreTraining ? "opacity-70 " : "opacity-100"
              }`}
            ></div>

            <div
              className={`transition-all ease-linear duration-75 flex justify-center w-full h-full flex-1 absolute z-30 ${
                exploreTraining
                  ? `sm:opacity-100 opacity-0 transition-all duration-500`
                  : "opacity-0"
              }`}
            >
              <TrainingSvg
                className={`w-1/3 ${
                  exploreTraining &&
                  " translate-y-[20%] lg:translate-y-[0%] translate-x-[70%] md:translate-x-[80%] transition-all custom-transition delay-0"
                } ${
                  !exploreTraining &&
                  "justify-center custom-transition delay-0 transition-all"
                }`}
              />
            </div>
            <div
              className={`px-[10%] text-content-wrapper absolute w-full h-full z-30 flex items-center ${
                exploreTraining ? "justify-center" : "justify-end"
              } transition-all duration-75 ${
                exploreDevelopment
                  ? "opacity-0"
                  : "opacity-100 custom-transition duration-500"
              } `}
            >
              <div
                className={`text-content w-full flex flex-col basis-[90%] ${
                  exploreTraining ? "md:basis-[500px]" : "md:basis-[70%]"
                } items-start gap-4 sm:gap-6 ${
                  exploreTraining &&
                  "translate-0 sm:-translate-y-[30%] lg:translate-y-0 lg:-translate-x-[40%] md:-translate-x-[15%] custom-transition delay-0"
                } ${
                  !exploreTraining && "justify-center custom-transition delay-0"
                }`}
              >
                <div className="title text-neutral-300 uppercase font-light sm:text-lg text-sm">
                  Super traniee program
                </div>
                <h2 className="slogan uppercase text-neutral-300 font-bold text-xxl sm:text-4xl m-0">
                  Get industry ready from field experts!
                </h2>
                {exploreTraining ? (
                  <div className="description text-neutral-300 transition-all text-sm">
                    We provide hands-on training for full-stack development. You
                    get flooded with voulptous information and guidence to excel
                    in the field.
                  </div>
                ) : (
                  <p className="description text-neutral-300 m-0">
                    Worried about your technical background? It doesn't matter!
                  </p>
                )}
                <button
                  onClick={() =>
                    exploreTraining
                      ? (document.location.href = "training")
                      : setExploreTraining(true)
                  }
                  className="btn border-2 border-netext-neutral-300 text-neutral-300 py-2 lg:py-3 lg:px-5 
              text-xs lg:text-base hover:bg-neutral-500 hover:border-neutral-100 hover:text-neutral-100"
                >
                  {exploreTraining ? "explore!" : "Curious ?"}
                </button>
              </div>
            </div>
            <div
              onClick={() => setExploreDevelopment(false)}
              className={`lg:px-2 flex justify-center absolute ${
                exploreDevelopment ? "bottom-0" : "-bottom-8"
              } opacity-0 right-12 md:justify-start w-full h-full md:items-center cursor-pointer custom-transition  ${
                exploreTraining ? "opacity-0" : "md:opacity-100"
              }`}
            >
              <TSCImage
                src={LogoCImage}
                height={300}
                width={200}
                objectFit={"contain"}
                className={classNames(
                  "z-50 cursor-pointer rotate-90 md:rotate-0"
                )}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
