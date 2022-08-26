// import Layout from "@components/Layouts";
import Image from "next/image";
import React, { useState } from "react";
import Development from "@public/icons/development.svg";
import Certificate from "@public/icons/certificate.svg";
import Certification from "@public/icons/certification.svg";
import Larrow from "@public/icons/lArrow.svg";
import Rarrow from "@public/icons/rArrow.svg";
import classNames from "classnames";
import HomePage from "@components/pageSections/homePage";
import Navbar from "@components/navbar";
import HomeQuery from "@queries/homeQuery";
import axiosInstance from "lib/axiosInstance";

const Home = ({ data }) => {
  const [exploreTraining, setExploreTraining] = useState(false);
  const [exploreDevelopment, setExploreDevelopment] = useState(false);
  const [upper, setUpper] = useState(true);
  const alignCenter = () => {
    setExploreDevelopment(false);
    setExploreTraining(false);
  };
  console.log("backend data", data);

  return (
    <>
      <section
        // onClick={() => setUpper((prev) => !prev)}
        className={`landing-page-wrapper overflow-y-hidden transition-all flex flex-col
        lg:flex-row lg:flex-wrap ${upper ? "h-screen" : "h-0"} `}
      >
        <div className="brand-logo w-full flex items-center lg:items-start justify-center transition-all absolute z-50">
          <Image
            onClick={() => alignCenter()}
            src={
              "https://assets.website-files.com/607de2d8e8911e32707a3efe/607e15d7c0c9f4037bde6f44_image-home-hero-education-x-template.jpg"
            }
            width={112}
            height={112}
          />
        </div>
        {/* training section */}
        <div
          onClick={() => setExploreTraining(true)}
          className={classNames("custom-transition flex-1", {
            "flex-[6] lg:flex-[10]": exploreTraining,
            "hover:flex-[1.2]": !exploreTraining,
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
              className={`training-section-background custom-transition bg-primary w-full h-full z-20 absolute ${
                exploreTraining ? "opacity-75" : "opacity-100"
              }`}
            ></div>

            <div
              className={`w-full h-full flex justify-center flex-1 absolute z-30 transition-all ease-linear duration-75 ${
                exploreDevelopment
                  ? "opacity-0"
                  : "opacity-100 custom-transition duration-500"
              } `}
            >
              <Certification
                className={`w-1/4 lg:w-1/2 max-w-md ${
                  exploreTraining &&
                  "translate-x-[80%] translate-y-[30%] lg:translate-x-[95%] custom-transition delay-0"
                } ${
                  !exploreTraining && "justify-center custom-transition delay-0"
                }`}
              />
            </div>
            <div
              className={`text-content-wrapper w-full h-full absolute z-30 flex flex-1 items-center justify-center transition-all duration-75 ${
                exploreDevelopment
                  ? "opacity-0"
                  : "opacity-100 custom-transition duration-500"
              }`}
            >
              <div
                className={`text-content w-full flex flex-col basis-[280px] lg:basis-[500px] items-start gap-2 ${
                  exploreTraining &&
                  "translate-0 lg:-translate-x-[85%] custom-transition delay-0"
                } ${
                  !exploreTraining && "justify-center custom-transition delay-0"
                }`}
              >
                <div className="title text-neutral-100x uppercase font-light text-lg">
                  super traniee program
                </div>
                <div className="slogan uppercase text-secondary2 text-xxl">
                  get industry ready from field experts!
                </div>
                {exploreTraining ? (
                  <div className="description text-secondary2 transition-all text-sm">
                    We provide hands-on training for full-stack development. You
                    get flooded with voulptous information and guidence to excel
                    in the field.
                  </div>
                ) : (
                  <div className="description text-secondary2">
                    worried about your technical background? It doesn't matter!
                  </div>
                )}
                <button
                  onClick={() => setExploreTraining(true)}
                  className="btn border-2 border-secondary2 text-secondary2 text-xs lg:text-base p-2 lg:py-5 lg:px-3 hover:bg-neutral-100 hover:border-neutral-100 hover:text-primary"
                >
                  {exploreTraining ? "explore!" : "curious?"}
                </button>
              </div>
            </div>
            <div
              onClick={() => setExploreDevelopment(false)}
              className={`${
                exploreTraining ? "opacity-0" : "opacity-100"
              } lg:px-2 flex justify-center lg:justify-end absolute w-full h-full items-start lg:items-center cursor-pointer custom-transition`}
            >
              <Larrow
                className={classNames(
                  "w-4 z-50 cursor-pointer transform rotate-90 lg:rotate-0",
                  {
                    "custom-transition transform -rotate-180":
                      exploreDevelopment,
                  }
                )}
              />
            </div>
          </div>
        </div>
        {/* development section */}
        <div
          onClick={() => setExploreDevelopment(true)}
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
              className={`training-section-background custom-transition bg-secondary2 w-full h-full z-20 absolute ${
                exploreDevelopment ? "opacity-75 " : "opacity-100"
              }`}
            ></div>

            <div
              className={`transition-all ease-linear duration-75 flex justify-center w-full h-full flex-1 absolute z-30 ${
                exploreTraining
                  ? "opacity-0"
                  : "opacity-100 custom-transition duration-500"
              }`}
            >
              <Development
                className={`w-1/2 max-w-md ${
                  exploreDevelopment &&
                  "translate-x-[60%] -translate-y-[30%]  lg:translate-x-[95%] lg:translate-y-0 custom-transition delay-0"
                } ${
                  !exploreDevelopment &&
                  "justify-center custom-transition delay-0"
                }`}
              />
            </div>
            <div
              className={`text-content-wrapper w-full h-full absolute z-30 flex items-center justify-center transition-all duration-75 ${
                exploreTraining
                  ? "opacity-0"
                  : "opacity-100 custom-transition duration-500"
              } `}
            >
              <div
                className={`text-content w-full flex flex-col basis-[280px] lg:basis-[500px] items-start gap-2 ${
                  exploreDevelopment &&
                  "translate-0 lg:-translate-x-[85%] custom-transition delay-0"
                } ${
                  !exploreDevelopment &&
                  "justify-center custom-transition delay-0"
                }`}
              >
                <div className="title text-neutral-100 uppercase font-light text-lg lg:text-xxl">
                  I.T. services
                </div>
                <div className="slogan uppercase text-primary text-xxl lg:text-">
                  Innovation with us!
                </div>
                {exploreDevelopment ? (
                  <div className="description text-primary transition-all text-sm">
                    We're an I.T service company that helps you shape your
                    innovation Get your web and app projects done in a jiff
                    without fuss!
                  </div>
                ) : (
                  <p className="description text-primary">
                    Never thought of starting a web/app? Get on-board with us!
                  </p>
                )}
                <button
                  onClick={() => setExploreDevelopment(true)}
                  className="btn border-2 border-primary text-primary lg:py-5 lg:px-3 
                  text-xs lg:text-base p-2 hover:bg-neutral-100 hover:border-neutral-100 hover:text-primary"
                >
                  {exploreDevelopment ? "explore us!" : "Intrigues you?"}
                </button>
              </div>
            </div>
            <div
              onClick={() => setExploreTraining(false)}
              className={` lg:px-2 flex justify-center lg:justify-start absolute w-full h-full items-start lg:items-center cursor-pointer custom-transition  ${
                exploreDevelopment ? "opacity-0" : "opacity-100"
              }`}
            >
              <Rarrow
                className={classNames(
                  "w-4 z-50 cursor-pointer rotate-90 lg:rotate-0",
                  {
                    "custom-transition transform rotate-90 lg:rotate-180":
                      exploreTraining,
                  }
                )}
              />
            </div>
          </div>
        </div>
      </section>
      <div className={`w-full ${upper ? "h-0" : "h-screen"} bg-primary`}></div>
    </>
  );
};
// Home.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>;
// };
export async function getServerSideProps(context) {
  const res = await axiosInstance.post("graphql", {
    query: HomeQuery,

    variables: {},
  });

  // console.log(res.data);

  return {
    props: {
      data: res.data.data,
    }, // will be passed to the page component as props
  };
}
Home.displayName = "Home";
export default Home;
