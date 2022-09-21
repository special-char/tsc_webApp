import Link from "next/link";
import LeftSvg from "/public/icons/left.svg";
import RightsSvg from "/public/icons/rights.svg";
import React from "react";
import Card from "@components/Card";
import Testimonial from "@components/testimonial";

const Carousal = ({ data, testimonial, href }) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    var width = slider.clientWidth;
    slider.scrollLeft = slider.scrollLeft - width;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    var width = slider.clientWidth;
    slider.scrollLeft = slider.scrollLeft + width;
  };
  return (
    <div className="card-container relative container max-w-7xl mx-auto px-8">
      <div className="navigation flex flex-row justify-between w-full overflow-hidden absolute z-10 top-[50%]">
        <div
          onClick={slideLeft}
          className="avatar placeholder bg-neutral-100 hover:bg-primary hover:fill-neutral-100 rounded-full"
        >
          <div className="w-16 md:w-20">
            <span className="w-4">
              <LeftSvg />
            </span>
          </div>
        </div>
        <div
          onClick={slideRight}
          class="avatar placeholder bg-neutral-100  hover:bg-primary hover:fill-neutral-100 rounded-full"
        >
          <div class="w-16 md:w-20 ">
            <span className=" w-4">
              <RightsSvg />
            </span>
          </div>
        </div>
      </div>
      <div
        id="slider"
        className="no-scrollbar mx-8 snap-x overflow-x-scroll overflow-clip flex scroll scroll-smooth w-[100vw]  md:flex-row md:inline-flex gap-4 justify-start md:text-left md:pl-4 md:pr-80"
      >
        {data.map((obj) => {
          return testimonial ? (
            <div
              className="snap-start lg:min-w-[750px] relative py-10"
              key={obj.id}
            >
              <Testimonial data={obj} />
            </div>
          ) : (
            <div
              className="snap-start min-w-[270px] md:min-w-[550px] relative py-10"
              key={obj.id}
            >
              <Link href={href ?? `course/${obj.id}`}>
                <a>
                  <Card {...obj} />
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousal;
