import React from "react";
import WorkValuesCard from "@components/workValuesCard";
import OrangearrowSvg from "@public/icons/orangearrow.svg";

const WorkValues = ({ data }) => {
  //console.log("Work Value Data:", data);
  return (
    <>
      <section className="w-full lg:w-full bg-neutral-700 relative py-24">
        <div className="container w-full mx-auto p-4 gap-6 ">
          <div className="pb-8 flex flex-col text-center justify-center">
            <h2 className="text-secondary1">{data.heading?.title}</h2>
            <p className="text-neutral-100 md:w-[520px] w-auto m-auto">
              {data.heading?.description}
            </p>
          </div>
          <div className="grid md:grid-cols-2 text-left justify-center gap-9 ">
            {data.valueCard.map((obj) => {
              console.log("card values map:", obj);
              return (
                <WorkValuesCard
                  data={obj}
                  // description={obj.description}
                  // title={obj.title}
                  // svg={obj.svg}
                  // id={obj.id}
                  // key={obj.id}
                />
              );
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
