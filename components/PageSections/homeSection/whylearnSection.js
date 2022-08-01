import React from "react";
import LearnSvg from "@public/icons/learn.svg";
import WorkSvg from "@public/icons/work.svg";
import GraduateSvg from "@public/icons/graduate.svg";
import Whylearn from "@components/Whylearn";
import ArrowSvg from "@public/icons/arrow.svg";

const WhylearnSection = () => {
  const WhylearnDetails = [
    {
      id: 1,
      title: "1. Learn",
      description:
        "“Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.”",
      svg: <LearnSvg />,
    },
    {
      id: 1,
      title: "2. Learn",
      description:
        "“Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.”",
      svg: <WorkSvg />,
    },
    {
      id: 1,
      title: "3. Learn",
      description:
        "“Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.”",
      svg: <GraduateSvg />,
    },
  ];

  return (
    <>
      <div className=" bg-neutral-700 md:px-12 text-center justify-center py-10">
        <h2 className="  text-secondary1">Why learn with our courses?</h2>
        <div className="lg:flex-row  flex flex-col relative gap-8">
          {WhylearnDetails.map((obj) => {
            return (
              <Whylearn
                description={obj.description}
                title={obj.title}
                svg={obj.svg}
              />
            );
          })}
        </div>
      </div>
      <div className="w-28">
        <ArrowSvg />
      </div>
    </>
  );
};
WhylearnSection.displayName = "Whylearn Section";
export default WhylearnSection;
