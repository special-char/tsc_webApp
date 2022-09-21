import React from "react";
import BlueArrow from "@public/icons/blueArrow.svg";
import Link from "next/link";

const BannerAbout = ({ data }) => {
  return (
    <>
      <section className="h-auto w-full ">
        <div className="relative overflow-hidden">
          <div className="py-28 px-3 max-w-7xl mx-auto ">
            <div className="text-center  lg:pb-20 ">
              <h1 className="md:w-[70%] mx-auto">{data.header?.title}</h1>
              <p className="md:w-[90%] mx-auto ">{data.header?.description}</p>
              <Link href={data.buttonText?.link}>
                <button className="btn btn--primary w-full md:w-[30%] btn--small uppercase">
                  JOIN OUR TEAM
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-secondary2 rounded-full w-[400px] h-[400px] absolute md:-top-80 md:-right-52 lg:-top-52 lg:-right-48 -z-10 animate-bounce-slow"></div>
          <div className="bg-secondary3 rounded-full w-[380px] h-[380px] absolute -left-64 -bottom-64 md:-left-32 md:-bottom-60 lg:-bottom-72 lg:-left-20 -z-10 animate-bounce-slow"></div>
        </div>
      </section>
      <div className="relative w-8 mx-auto">
        <BlueArrow className="w-11 md:w-16 absolute -top-14" />
      </div>
    </>
  );
};

export default BannerAbout;
