import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import DevelopmentSvg from "@public/icons/web_development.svg";
import TrainingSvg from "@public/icons/training_icon.svg";
import TSCImage from "./TSCImage";
import DevelopmentPage from "./PageSections/devlopmentPage";
import HomePage from "./PageSections/homePage";
import Layout from "./Layouts";
import Development from "pages/development";

const LandingPage = ({ data, homeData }) => {
  console.log("data in landing page:", data);
  //   const value = useContext(LayoutContext);
  //   const { isHeaderVisible, setIsHeaderVisible } = value;

  const [exploreTraining, setExploreTraining] = useState(false);
  const [exploreDevelopment, setExploreDevelopment] = useState(false);
  const [trainingPage, setTrainingPage] = useState(false);
  const [developmentPage, setDevelopmentPage] = useState(false);
  const [animate, setAnimate] = useState(false);

  const selectPage = (explorePage, setExplorePage, setPage) => {
    if (explorePage) {
      setPage(true);
      setAnimate(true);
      //   setIsHeaderVisible(true);
    } else {
      setAnimate(false);
      setExplorePage(true);
    }
  };
  //   console.log("HEADER ::: ", isHeaderVisible);
  return (
    <>
      <section
        className={`landing-page-wrapper overflow-y-hidden custom-transition flex flex-col md:flex-row
      w-screen overflow-x-hidden ${animate && "animate-slideDown"} ${
          developmentPage || trainingPage ? "h-0" : "h-screen"
        }`}
      >
        {/* <div
          className={`brand-logo w-full h-full flex items-center lg:items-center justify-center z-20 custom-transition absolute m-auto
        ${
          exploreDevelopment || exploreTraining
            ? "opacity-100 -translate-y-[45%] lg:translate-x-[0%] custom-transition"
            : "opacity-0"
        }
        `}
        >
          <div
            className="cursor-pointer z-50"
            onClick={() => {
              setExploreDevelopment(false), setExploreTraining(false);
            }}
          >
            <TSCImage src="/LOGO_ICON_PNG.png" width={58} height={58} />
          </div>
        </div> */}
        {/* Development section */}
        <div
          onClick={() => {
            setExploreDevelopment(!exploreDevelopment),
              setExploreTraining(false);
          }}
          className={classNames("custom-transition flex-1 cursor-pointer", {
            "flex-[3]": exploreDevelopment,
            "cursor-default": exploreDevelopment || exploreTraining,
          })}
        >
          <div className="bg-image relative h-full custom-transition bg-neutral-100">
            {/* <div
              className={`custom-transition w-full h-full flex justify-center flex-1 absolute z-30 ${
                exploreDevelopment
                  ? "sm:opacity-100 opacity-0 custom-transition"
                  : "opacity-0"
              } `}
            >
              <DevelopmentSvg
                className={`w-1/3 ${
                  exploreDevelopment
                    ? "opacity-100 custom-transition translate-y-[20%] translate-x-[70%] md:translate-x-[60%]"
                    : "opacity-0 custom-transition"
                }`}
              />
            </div> */}
            <div
              className={`px-[10%] text-content-wrapper w-full h-full absolute z-30 flex flex-1 items-center justify-center custom-transition ${
                exploreTraining ? "opacity-0" : "opacity-100 custom-transition"
              }`}
            >
              <div
                className={`px-6 text-content w-full flex flex-col basis-[90%] items-start gap-4 sm:gap-6 delay-75 ${
                  exploreDevelopment
                    ? `md:basis-[500px] translate-0 sm:-translate-y-[30%] lg:-translate-x-[20%] md:-translate-x-[10%] custom-transition`
                    : "md:basis-[70%] justify-center custom-transition"
                }`}
              >
                <h1 className="text-neutral-800 text-center lg:text-left m-0">
                  Services
                </h1>
                {exploreDevelopment ? (
                  <div className="description text-neutral-800 custom-transition text-sm">
                    We're an I.T service company that helps you shape your
                    innovation Get your web and app projects done in a jiff
                    without fuss!
                  </div>
                ) : (
                  <div className="description text-neutral-800 m-0">
                    Never thought of starting a web/app? Get on-board with us!
                  </div>
                )}
                <button
                  onClick={() =>
                    selectPage(
                      exploreDevelopment,
                      setExploreDevelopment,
                      setDevelopmentPage
                    )
                  }
                  className="btn border-2 border-text-neutral-700 text-neutral-800 py-2 text-xs lg:text-base lg:py-3 lg:px-5 hover:bg-neutral-500 hover:border-neutral-100 hover:text-primary"
                >
                  {exploreDevelopment ? "explore us!" : "Intrigues you ?"}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Training section */}
        <div
          onClick={() => {
            setExploreTraining(!exploreTraining), setExploreDevelopment(false);
          }}
          className={classNames("custom-transition flex-1 cursor-pointer", {
            "flex-[3]": exploreTraining,
            "cursor-default": exploreDevelopment || exploreTraining,
          })}
        >
          <div className="relative h-full custom-transition bg-neutral-700">
            {/* <div
              className={`custom-transition flex justify-center w-full h-full flex-1 absolute z-30 ${
                exploreTraining
                  ? `sm:opacity-100 opacity-0 custom-transition`
                  : "opacity-0"
              }`}
            >
              <TrainingSvg
                className={`w-1/3 ${
                  exploreTraining
                    ? " translate-y-[20%] translate-x-[70%] md:translate-x-[80%] custom-transition"
                    : "justify-center custom-transition"
                }`}
              />
            </div>*/}
            <div
              className={`px-[10%] text-content-wrapper absolute w-full h-full z-30 flex items-center justify-center custom-transition ${
                exploreDevelopment
                  ? "opacity-0"
                  : "opacity-100 custom-transition"
              } `}
            >
              <div
                className={`text-content w-full flex flex-col basis-[90%] items-start gap-4 sm:gap-6 delay-75 ${
                  exploreTraining
                    ? "translate-0 sm:-translate-y-[30%] lg:-translate-x-[10%] md:-translate-x-[5%] md:basis-[500px] custom-transition"
                    : "justify-center custom-transition md:basis-[70%]"
                }`}
              >
                <h1 className="text-neutral-100 text-center lg:text-left m-0">
                  Training
                </h1>
                {exploreTraining ? (
                  <div className="description text-neutral-100 custom-transition text-sm">
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
                    selectPage(
                      exploreTraining,
                      setExploreTraining,
                      setTrainingPage
                    )
                  }
                  className="btn border-2 border-netext-neutral-300 text-neutral-100 py-2 lg:py-3 lg:px-5 
              text-xs lg:text-base hover:bg-neutral-500 hover:border-neutral-100 hover:text-neutral-100"
                >
                  {exploreTraining ? "explore!" : "Curious ?"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`custom-transition w-full ${
          developmentPage ? "h-full flex flex-col" : "h-0 hidden"
        }`}
      >
        {/* {isHeaderVisible && ( */}
        <Layout>
          <Development />
        </Layout>
        {/* )} */}
      </section>
      <section
        className={`custom-transition ${animate && "animate-slideUp"} ${
          trainingPage ? "h-full flex flex-col" : "h-0 hidden"
        } `}
      >
        {/* {isHeaderVisible && ( */}
        {/* <Layout>
          <HomePage data={homeData} />
        </Layout> */}
        {/* )} */}
      </section>
    </>
  );
};

export async function getServerSideProps() {
  try {
    const res = await axiosInstance.post("graphql", {
      query: HomeQuery,
      variables: {},
    });

    return {
      props: {
        homeData: res?.data?.data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        homeData: error,
      },
    };
  }
}

export default LandingPage;
