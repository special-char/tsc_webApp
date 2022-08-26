import React from "react";
import BlueArrow from "@public/icons/blueArrow.svg";
import Link from "next/link";

const BannerAbout = () => {
  return (
    <>
      <section className="h-auto w-full ">
        <div className="relative overflow-hidden">
          <div className="py-28 px-3 max-w-7xl mx-auto ">
            <div className="text-center  lg:pb-20 ">
              <h1 className="md:w-[70%] mx-auto">
                The big mission behind Education
              </h1>
              <p className="md:w-[90%] mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
                pulvinar ac molestie cursus malesuada enim. Massa nec lit
                tellus, elit tellus, erat faucibus aenean. Nunc, lacus,
                dignissim nec sit.
              </p>
              <Link href={"/courses"}>
                <a>
                  <button className="btn btn--primary w-full md:w-[30%] btn--small">
                    JOIN OUR TEAM
                  </button>
                </a>
              </Link>
            </div>
          </div>
          <div className="bg-secondary2 rounded-full w-[400px] h-[400px] absolute md:-top-80 md:-right-52 lg:-top-60 lg:-right-48  -z-10"></div>
          <div className="bg-secondary3 rounded-full w-[380px] h-[380px] absolute -left-64 -bottom-64 md:-left-52 lg:-bottom-56 lg:-left-32 -z-10"></div>
        </div>
      </section>
      <div className="relative w-8 mx-auto">
        <BlueArrow className="w-11 md:w-16 absolute -top-14" />
      </div>
    </>
  );
};

export default BannerAbout;
