import React from "react";
import LearnSvg from "@public/icons/learn.svg";
import WorkSvg from "@public/icons/work.svg";
import GraduateSvg from "@public/icons/graduate.svg";
import Perks from "@components/Perks";
import ArrowSvg from "@public/icons/arrow.svg";

const PerksSection = () => {
  const perksDetails = [
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
      <div className="perks-wrapper bg-neutral-700 text-center relative py-28 h-auto">
        <div className="container w-full h-full flex flex-col justify-center gap-6 px-6 mx-auto max-w-[1210px] overflow-hidden">
          <h2 className="flex-1 text-secondary1">
            Why learn with our courses?
          </h2>
          <div className="lg:flex-row flex justify-between flex-1 flex-col gap-8">
            {perksDetails.map((obj) => {
              return <Perks {...obj} />;
            })}
          </div>
        </div>
        <div className="w-full absolute -bottom-32 flex justify-center">
          <ArrowSvg className="w-20" />
        </div>
      </div>
    </>
  );
};
PerksSection.displayName = "Whylearn Section";
export default PerksSection;
