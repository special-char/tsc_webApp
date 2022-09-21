import TSCImage from "@components/TSCImage";
import React from "react";
import cn from "classnames";

const StorySection = ({ data }) => {
  return (
    <section className="wrapper relative py-32">
      <div className="container max-w-7xl relative w-full mx-auto px-3 flex flex-wrap gap-8">
        {data.mission.map((val, index) => {
          return (
            <div
              key={val.id}
              className={cn(
                "cap flex flex-col flex-grow flex-shrink basis-96",
                {
                  "md:flex-col-reverse": index % 2 !== 0,
                }
              )}
            >
              <div className="md:flex-[1.1] relative aspect-square">
                <TSCImage
                  objectFit="fill"
                  className="rounded-2xl"
                  layout="fill"
                  src={val.image?.url}
                />
              </div>
              <div className="md:flex-1 mt-8">
                <h2>{val.title}</h2>
                <p>{val.description}</p>
              </div>
            </div>
          );
        })}
        <div className="bg-secondary2 rounded-full w-0 h-0 lg:w-[400px] lg:h-[400px] absolute lg:top-[30%] lg:right-[35%] -z-10"></div>
      </div>
    </section>
  );
};

export default StorySection;
