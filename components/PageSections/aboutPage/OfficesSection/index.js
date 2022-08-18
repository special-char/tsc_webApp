import React from "react";
import Offices from "@components/PageSections/aboutPage/Offices";
import BrigeSvg from "@public/icons/brige.svg";

const OfficesSection = () => {
  const OfficesDetails = [
    {
      id: 1,
      title: "Ahmedabad",
      number: "+911234567891",
      address: "B-604/605 Ganeshglory11, SG highway Ahmedabad,",
      email: "yagnesh.modh@gmail.com",
      svg: <BrigeSvg />,
    },
  ];

  return (
    <>
      <section className="lg:w-full bg-neutral-100 px-4 py-24 md:py-44 w-full">
        <div className="container max-w-[1210px] mx-auto text-center">
          <h2 className="text-neutral-800">Our offices</h2>
          <p className="text-neutral-600 w-full md:w-3/5 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="flex text-left justify-center bg-secondary1-100 drop-shadow-2xl py-8">
            {OfficesDetails.map((obj) => {
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
