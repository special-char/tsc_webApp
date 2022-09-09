import Card from "@components/card";
import React from "react";
import Link from "next/link";

const PopularCourses = ({ data }) => {
  console.log("popular Courses Data:", data);
  return (
    <>
      <section className="py-20 overflow-hidden">
        <h2 className="text-center mb-10">Browse our popular courses</h2>
        <div className="card-container container ml-auto max-w-7xl px-6">
          <div className="relative pb-10">
            <div className="flex flex-col md:flex-row md:inline-flex gap-4 justify-center md:text-left">
              {data.courses.map((obj) => {
                //console.log("popular Courses obj data:", obj);
                return (
                  <div className="md:min-w-[550px] relative" key={obj.id}>
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
