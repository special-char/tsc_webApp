import React from "react";
import AskedQues from ".";

const AskQuesList = () => {
  const AskDetails = [
    {
      id: 1,
      title: "Do you offer discounts for students?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      icon: "+",
    },
    {
      id: 2,
      title: "Do you offer discounts for students?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      icon: "+",
    },
    {
      id: 3,
      title: "Do you offer discounts for students?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      icon: "+",
    },
    {
      id: 4,
      title: "Do you offer discounts for students?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      icon: "+",
    },
    {
      id: 5,
      title: "Do you offer discounts for students?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      icon: "+",
    },
  ];

  return (
    <>
      <section className="bg-neutral-200 md:py-44 py-24 px-4 md:px-6">
        <div className="text-center justify-center flex flex-col w-80 mb-10 md:w-[587px] mx-auto lg:px-6 md:mb-14 ">
          <h2 className="text-3xl md:text-6xl">Frequently Asked Questions.</h2>
          <p className="">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex flex-col  ">
          {AskDetails.map((obj) => {
            return (
              <AskedQues
                icon={obj.icon}
                title={obj.title}
                description={obj.description}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AskQuesList;
