import React from "react";
import LearnSvg from "@public/icons/learn.svg";
import Perks from "@components/Perks";
import OrangearrowSvg from "@public/icons/orangearrow.svg";

const PerksSection = ({ data }) => {
  //console.log("why Learn data:", data);
  return (
    <>
      <section className=" bg-neutral-700 text-center relative py-24 md:py-44 lg:h-auto">
        <div className="container flex flex-col gap-6 px-4 md:px-6 mx-auto max-w-7xl overflow-hidden">
          <h2 className="flex-1 text-secondary1">{data.heading.title}</h2>
          <div className="lg:flex-row flex flex-1 flex-col gap-16">
            {data.cards.map((obj) => {
              //console.log("perk section obj:", obj);
              return <Perks data={obj} key={obj.id} />;
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
