import React, { useState } from "react";
import styles from "@styles/SplitScreen.module.css";
import LeftIcon from "@public/icons/leftArrow.svg";
import RightIcon from "@public/icons/rightArrow.svg";
import Image from "next/image";
import classNames from "classnames";

const SplitScreen = () => {
  const [firstCard, setFirstCard] = useState(false);
  const [secondCard, setSecondCard] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  const firstCardOpen = () => {
    setFirstCard(true);
    setSecondCard(false);
  };
  const secondCardOpen = () => {
    setSecondCard(true);
    setFirstCard(false);
  };
  return (
    <section
      className={`landing-page-wrapper overflow-y-hidden transition-all flex flex-col
        lg:flex-row lg:flex-wrap ${!showDiv ? "h-screen" : "h-0"} `}
    >
      <div
        className={classNames(
          "z-10 flex items-center justify-center custom-transition transition-all flex-1 bg-neutral-800",
          {
            "flex-[6] lg:flex-[10]": firstCard,
            "hover:flex-[1.2]": !firstCard,
          }
        )}
        onClick={firstCardOpen}
      >
        {!secondCard && (
          <>
            <div
              className={`p-[10%] flex-1 text-content w-full flex flex-col basis-[280px] transition-all lg:basis-[500px] items-start gap-2 ${
                firstCard &&
                "translate-0 lg:translate-x-[5%] custom-transition delay-0"
              } ${!firstCard && "justify-center custom-transition delay-0"}`}
            >
              <p className="italic">Why Learn At TSC</p>
              <h1 className="transition-all">SERVICES WE OFFER</h1>
              <p
                className={
                  firstCard
                    ? "flex transition-all"
                    : "h-0 hidden text-transparent transition-all"
                }
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
                excepturi ducimus magni? Magni perspiciatis ad quaerat porro
                dicta, incidunt aperiam amet laboriosam sunt quam tenetur
                ratione deserunt officia odio qui!
              </p>
              <p
                className={
                  !firstCard ? "flex transition-all" : "hidden transition-all"
                }
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                qui!
              </p>
              <a
                className={styles.btn}
                href="#"
                onClick={() =>
                  firstCard ? setShowDiv(true) : setFirstCard(true)
                }
              >
                {firstCard ? "Add to bag" : "Discover more"}
              </a>
            </div>
            {/* <div
              className={`absolute w-full h-1/2 flex justify-start flex-1 transition-all ease-linear duration-75 -z-10`}
            >
              <div
                className={`flex-1 h-full w-full transition-all ${
                  firstCard &&
                  "translate-x-[15%] translate-y-[0] lg:translate-x-[15%] custom-transition delay-0"
                } ${!firstCard && "justify-center custom-transition delay-0"}`}
              >
                <Image
                  layout="fill"
                  src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607e21e8c0c9f4644adea00a_image-3-perks-education-x-template.svg"
                  alt="development"
                />
              </div>
            </div> */}
          </>
        )}
        <div
          onClick={firstCardOpen}
          className={`${
            firstCard || (!secondCard && !firstCard)
              ? "opacity-0"
              : "opacity-100 flex"
          } z-20 flex-1 lg:px-2 h-full transition-all items-center justify-center lg:items-center cursor-pointer custom-transition`}
        >
          <LeftIcon
            fill="#fff"
            className={classNames(
              "w-4 z-50 cursor-pointer transition-all transform rotate-90 lg:rotate-0 duration-300",
              {
                "custom-transition transform rotate-90 lg:rotate-180":
                  secondCard,
              }
            )}
          />
        </div>
      </div>
      <div
        className={classNames(
          "z-10 flex items-center justify-center custom-transition transition-all flex-1 bg-secondary3",
          {
            "flex-[6] lg:flex-[10]": secondCard,
            "hover:flex-[1.2]": !secondCard,
          }
        )}
        onClick={secondCardOpen}
      >
        {!firstCard && (
          <>
            <div
              className={`p-[10%] flex-1 text-content w-full flex transition-all flex-col basis-[280px] lg:basis-[500px] items-start gap-2 ${
                secondCard &&
                "translate-0 lg:translate-x-[5%] custom-transition delay-0"
              } ${!secondCard && "justify-center custom-transition delay-0"}`}
            >
              <p className="italic">Web/App Development</p>
              <h1 className="transition-all">COURSES WE TEACH</h1>
              {secondCard ? (
                <p
                  className={
                    secondCard
                      ? "flex transition-all"
                      : "h-0 text-transparent transition-all"
                  }
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Autem excepturi ducimus magni? Magni perspiciatis ad quaerat
                  porro dicta, incidunt aperiam amet laboriosam sunt quam
                  tenetur ratione deserunt officia odio qui!
                </p>
              ) : (
                <p
                  className={
                    !secondCard
                      ? "flex transition-all"
                      : "hidden transition-all"
                  }
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, qui!
                </p>
              )}
              <a
                className={styles.btn}
                href="#"
                onClick={() =>
                  secondCard ? setShowDiv(true) : setSecondCard(true)
                }
              >
                {secondCard ? "Add to bag" : "Discover more"}
              </a>
            </div>
            {/* <div
              className={`absolute w-full h-1/2 flex justify-start flex-1 transition-all ease-linear duration-75 -z-10`}
            >
              <div
                className={`flex-1 h-full w-full transition-all ${
                  secondCard &&
                  "translate-x-[15%] translate-y-[0] lg:translate-x-[15%] custom-transition delay-0"
                } ${!secondCard && "justify-center custom-transition delay-0"}`}
              >
                <Image
                  layout="fill"
                  src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607e21e810beff7a8011b340_image-1-perks-education-x-template.svg"
                  alt="training"
                />
              </div>
            </div> */}
          </>
        )}
        <div
          onClick={secondCardOpen}
          className={`z-20 flex-1 lg:px-2 transition-all justify-center h-full items-center lg:items-center cursor-pointer custom-transition  ${
            secondCard || (!secondCard && !firstCard)
              ? "opacity-0"
              : "opacity-100 flex"
          }`}
        >
          <RightIcon
            fill="#fff"
            className={classNames(
              "w-4 z-50 cursor-pointer rotate-90 lg:rotate-0 transition-all duration-300",
              {
                "custom-transition transform rotate-90 lg:rotate-180":
                  firstCard,
              }
            )}
          />
        </div>
      </div>
      <div className="left-[42%] absolute h-[100px] w-[200px]">
        <Image src="/LOGO_PNG.png" layout="fill" />
      </div>
    </section>
  );
};

export default SplitScreen;
