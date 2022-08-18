import React from "react";
import LearnSvg from "@public/icons/learn.svg";
import WorkSvg from "@public/icons/work.svg";
import GraduateSvg from "@public/icons/graduate.svg";
import Whylearn from ".";
import OrangearrowSvg from "@public/icons/orangearrow.svg";

const WhylearnSection = () => {
  const WhylearnDetails = [
    {
      id: 1,
      title: "Learn",
      description:
        "“Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.”",
      svg: <LearnSvg />,
    },
    {
      id: 1,
      title: "Graduate",
      description:
        "“Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.”",
      svg: <WorkSvg />,
    },
    {
      id: 1,
      title: "Work",
      description:
        "“Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.”",
      svg: <GraduateSvg />,
    },
  ];

  return (
    <>
      <div className=" bg-neutral-700 text-center relative py-24 md:py-44 lg:h-auto">
        <div className="container flex flex-col gap-6 px-4 md:px-6 mx-auto max-w-[1210px] overflow-hidden">
          <h2 className="flex-1 text-secondary1">
            Why learn with our courses?
          </h2>
          <div className="lg:flex-row flex flex-1 flex-col gap-16">
            {WhylearnDetails.map((obj) => {
              return (
                <Whylearn
                  description={obj.description}
                  title={obj.title}
                  svg={obj.svg}
                  id={obj.id}
                  key={obj.id}
                />
              );
            })}
          </div>
        </div>
        <div className="w-full absolute -bottom-16 md:-bottom-24 lg:-bottom-32 flex justify-center">
          <OrangearrowSvg className="w-11 md:w-16 lg:w-20" />
        </div>
      </div>
    </>
  );
};
WhylearnSection.displayName = "Whylearn Section";
export default WhylearnSection;
