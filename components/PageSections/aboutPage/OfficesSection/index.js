import React from "react";
import Offices from "@components/pageSections/aboutPage/Offices";
import TSCImage from "@components/TSCImage";

const OfficesSection = ({ data }) => {
  return (
    <>
      <section className="bg-neutral-200 lg:w-full px-4 py-24 md:py-44 w-full">
        <div className="container max-w-7xl mx-auto text-center">
          <h2 className="text-neutral-800">{data.heading?.title}</h2>
          <p className="text-neutral-600 w-full md:w-3/5 mx-auto">
            {data.heading?.description}
          </p>
          <div className="flex text-left justify-center relative bg-secondary1-100 drop-shadow-2xl py-8 z-20">
            {data.officeCard.map((obj) => {
              return <Offices {...obj} key={obj.id} />;
            })}
          </div>
          <div className="bg-image-container relative aspect-auto min-h-[300px] md:min-h-[600px] -mt-32 ">
            <TSCImage
              className=""
              layout="fill"
              src={
                "https://assets.website-files.com/607de2d8e8911e32707a3efe/608077c86a561e7091490a3c_image-offices-map-education-x-template.png"
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

OfficesSection.displayName = "Offices Section";
export default OfficesSection;
