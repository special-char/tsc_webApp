import React from "react";
import WorkValuesCard from "@components/workValuesCard";
import OrangearrowSvg from "@public/icons/orangearrow.svg";

const WorkValues = ({ data }) => {
  return (
    <>
      <section className="bg-neutral-700 relative py-24">
        <div className="container max-w-7xl mx-auto px-8 gap-6 ">
          <div className="pb-8 flex flex-col text-center justify-center">
            <h2 className="text-secondary1">{data.heading?.title}</h2>
            <p className="text-neutral-100 md:w-[520px] w-auto m-auto">
              {data.heading?.description}
            </p>
          </div>
          <div className="grid md:grid-cols-2 text-left justify-center gap-9 ">
            {data.valueCard.map((obj) => {
              return <WorkValuesCard data={obj} />;
            })}
          </div>
        </div>
        <div className="w-full absolute -bottom-16 md:-bottom-24 lg:-bottom-32 flex justify-center">
          <OrangearrowSvg className="w-11 text-secondary3 md:w-16 lg:w-20" />
        </div>
      </section>
    </>
  );
};
WorkValues.displayName = "Values";
export default WorkValues;
