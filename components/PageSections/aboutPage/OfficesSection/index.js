import React from "react";
import Offices from "@components/pageSections/aboutPage/Offices";
import BrigeSvg from "@public/icons/brige.svg";

const OfficesSection = ({ data }) => {
  console.log("Office Data:", data);
  return (
    <>
      <section className="lg:w-full bg-neutral-100 px-4 py-24 md:py-44 w-full">
        <div className="container max-w-7xl mx-auto text-center">
          <h2 className="text-neutral-800">{data.heading?.title}</h2>
          <p className="text-neutral-600 w-full md:w-3/5 mx-auto">
            {data.heading?.description}
          </p>
          <div className="flex text-left justify-center bg-secondary1-100 drop-shadow-2xl py-8">
            {data.officeCard.map((obj) => {
              return <Offices {...obj} key={obj.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

OfficesSection.displayName = "Offices Section";
export default OfficesSection;
