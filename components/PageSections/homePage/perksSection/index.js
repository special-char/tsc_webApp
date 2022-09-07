import React from "react";
import Perks from "@components/Perks";
import OrangearrowSvg from "@public/icons/orangearrow.svg";

const PerksSection = ({ data }) => {
  return (
    <>
      <section
        id="Perks"
        className=" bg-neutral-700 text-center relative py-24 md:py-44 lg:h-auto"
      >
        <div className="container flex flex-col gap-6 px-4 md:px-6 mx-auto max-w-7xl overflow-hidden">
          <h2 className="flex-1 text-secondary1">{data.heading.title}</h2>
          <div className="lg:flex-row flex flex-1 flex-col gap-16">
            {data.cards.map((obj) => {
              return <Perks data={obj} image={obj.image.name} key={obj.id} />;
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
