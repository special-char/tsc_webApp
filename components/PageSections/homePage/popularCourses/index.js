import Card from "@components/card";
import React from "react";
import Link from "next/link";
import LeftSvg from "/public/icons/left.svg";
import RightsSvg from "/public/icons/rights.svg";

const PopularCourses = ({ data }) => {
  //console.log("popular Courses Data:", data);
  return (
    <>
      <section className="py-52 overflow-hidden">
        <h2 className="text-center mb-10">Browse our popular courses</h2>
        <div className="card-container container   ml-auto max-w-7xl px-6">
          <div className="relative pb-10">
            <div className="navigation flex flex-row justify-between w-full lg:w-[93%] overflow-hidden  absolute z-10  top-40">
              <div className="avatar placeholder bg-neutral-100 hover:bg-primary hover:fill-neutral-100 rounded-full">
                <div className="w-16 md:w-20">
                  <span className=" w-4">
                    <LeftSvg />
                  </span>
                </div>
              </div>
              <div class="avatar placeholder bg-neutral-100  hover:bg-primary hover:fill-neutral-100 rounded-full">
                <div class="w-16 md:w-20 ">
                  <span className=" w-4">
                    <RightsSvg />
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-nowrap overflow-hidden  md:flex-row md:inline-flex gap-4 justify-center md:text-left">
              {data.courses.map((obj) => {
                //console.log("popular Courses obj data:", obj);
                return (
                  <div
                    className="w-[300px] md:min-w-[550px] relative"
                    key={obj.id}
                  >
                    <Link href={`course/${obj.id}`}>
                      <a>
                        <Card {...obj} />
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
            {/* <div className="absolute flex w-full justify-between bg-secondary2">
              <button class="btn btn--round btn--white w-24">
                <span class="text-3xl">
                  <LeftArrow className="w-4" />
                </span>
              </button>
              <button class="btn btn--round btn--white w-24">
                <span class="text-3xl">
                  <RightArrow className="w-4" />
                </span>
              </button>
            </div> */}
          </div>
        </div>
        <div className="container mx-auto  flex items-center justify-center">
          <Link href={data.explore?.link}>
            <button className="btn btn--primary uppercase">
              {data.explore?.buttonText}
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default PopularCourses;
