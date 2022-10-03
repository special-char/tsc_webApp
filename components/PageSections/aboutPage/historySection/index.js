import Link from "next/link";
import React from "react";
const HistorySection = ({ data }) => {
  return (
    <section className="py-44 bg-neutral-200">
      <div className="flex flex-col max-w-7xl gap-4 md:flex-row w-full container mx-auto px-8">
        <div className="left-content md:text-left lg:w-full mb-10 mx-auto flex-1">
          <h2>{data.heading?.title}</h2>
          <p>{data.heading?.description}</p>
          <Link href={data.buttonText?.link}>
            <button className="btn btn--primary w-full md:w-[60%] lg:w-[50%] btn--small">
              JOIN OUR TEAM
            </button>
          </Link>
        </div>
        <div className="right-content flex-1 border-l-2 border-neutral-300 sticky top-3">
          {data.timeline.map((val) => (
            <div className="relative px-10 ">
              <div className="chip chip--white w-24  border border-neutral-300">
                <span className="text-neutral-700 font-bold ">
                  {val.number}
                </span>
              </div>
              <h3 className="lg:mb-3">{val.title}</h3>
              <p>{val.description}</p>
              <div className="z-50 absolute bg-secondary3 rounded-full w-5 h-5 top-5 -left-3"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
