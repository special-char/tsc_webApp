import React from "react";
import CompanyHistoryData from "./companyHistoryData";

const HistorySection = () => {
  return (
    <section className="py-44">
      <div className="flex flex-col max-w-7xl gap-4 md:flex-row w-full container mx-auto px-3">
        <div className="left-content md:text-left lg:w-full mb-10 mx-auto flex-1">
          <h2>Our company history</h2>
          <p>
            Presenting Academy, the tech school of the future. We teach you the
            right skills to be prepared for tomorrow.
          </p>
          <button className="btn btn--primary btn--small">JOIN OUR TEAM</button>
        </div>
        <div className="right-content flex-1 border-l-2 border-neutral-300 sticky top-3">
          {CompanyHistoryData.map((val) => (
            <div className="relative px-10 ">
              <div className="chip chip--white w-24  border border-neutral-300">
                <span className="text-neutral-700 font-bold ">{val.year}</span>
              </div>
              <h3 className="lg:mb-3">{val.title}</h3>
              <p>{val.discription}</p>
              <div className="z-50 absolute bg-secondary3 rounded-full w-5 h-5 top-0 -left-3"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
