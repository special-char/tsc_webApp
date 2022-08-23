import React from "react";
import Brand1Svg from "@public/icons/brands.svg/brand1.svg";
import Brand2Svg from "@public/icons/brands.svg/brand2.svg";
import Brand3Svg from "@public/icons/brands.svg/brand3.svg";
import Brand4Svg from "@public/icons/brands.svg/brand4.svg";
import Brand5Svg from "@public/icons/brands.svg/brand5.svg";
const Card = () => {
  const BrandIndentityData = [
    {
      icon: <Brand1Svg className="w-10 py-2" />,
      heading: "Level:",
      description: "Advnced",
    },
    {
      icon: <Brand2Svg className="w-10 py-2" />,
      heading: "Duration:",
      description: "8hr 12m",
    },
    {
      icon: <Brand3Svg className="w-10 py-2" />,
      heading: "Lessons:",
      description: "80",
    },
    {
      icon: <Brand4Svg className="w-10 py-2" />,
      heading: "Lifetime Access",
    },
    {
      icon: <Brand5Svg className="w-10 py-2" />,
      heading: "Access From Any computer, Tablet or mobile",
    },
  ];
  return (
    <section className="w-screen h-auto md:flex">
      <div className="card flex md:flex-row">
        <div className="card__body pt-9 pb-8 px-6  text-center relative">
          <h3 className="card__title mb-3 text-left text-3xl ">$ 199.00 USD</h3>
          <p className="text-left">
            Lorem ipsum dolor sit amet, dolor consectetur adipisicing elit purus
            vivera.
          </p>
          <div className="card__actions"></div>
          <button className="btn btn--primary py-4">Add to card</button>
        </div>
      </div>
      <div className="md:flex-row">
        {BrandIndentityData.map((val) => (
          <div className="px-4 flex">
            {val.icon}
            <div className="flex items-center justify-center px-2">
              {val.heading}
              <h4>{val.description}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
