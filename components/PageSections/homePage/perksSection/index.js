import React from "react";
import LearnSvg from "@public/icons/learn.svg";
import WorkSvg from "@public/icons/work.svg";
import GraduateSvg from "@public/icons/graduate.svg";
import Perks from "@components/Perks";
import OrangearrowSvg from "@public/icons/orangearrow.svg";

const PerksSection = () => {
  const PerksDetails = [
    {
      id: 1,
      title: "Learn",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.",
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
      <section className=" bg-neutral-700 text-center relative py-24 md:py-44 lg:h-auto">
        <div className="container flex flex-col gap-6 px-4 md:px-6 mx-auto max-w-7xl overflow-hidden">
          <h2 className="flex-1 text-neutral-100">
            Why learn with our courses?
          </h2>
          <div className="lg:flex-row flex flex-1 flex-col gap-16">
            {PerksDetails.map((obj) => {
              return <Perks {...obj} key={obj.id} />;
            })}
          </div>
        </div>
        <div className="w-full absolute -bottom-16 md:-bottom-24 lg:-bottom-32 flex justify-center">
          <OrangearrowSvg className="w-11 md:w-16 lg:w-20" />
        </div>
      </section>
    </>
  );
};
PerksSection.displayName = "Perks Section";
export default PerksSection;
