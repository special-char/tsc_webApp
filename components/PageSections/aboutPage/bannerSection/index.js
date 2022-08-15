import React from "react";
import BlueArrow from "@public/icons/blueArrow.svg";

const BannerAbout = () => {
  return (
    <>
    <section className="h-auto w-full ">
      <div className="relative overflow-hidden">
        <div className="py-28 px-3 max-w-[1210px] mx-auto ">
          <div className="text-center md:w-4/5 lg:pb-20 mx-auto">
            <h1>The big mission behind Education</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              pulvinar ac molestie cursus malesuada enim. Massa nec lit tellus,
              elit tellus, erat faucibus aenean. Nunc, lacus, dignissim nec sit.
            </p>
            <button className="btn btn--primary btn--small">
              JOIN OUR TEAM
            </button>
          </div>
        </div>
        <div className="bg-secondary2 rounded-full w-[400px] h-[400px] absolute md:-top-80 md:-right-52 lg:-top-60 lg:-right-48  -z-10"></div>
        <div className="bg-secondary3 rounded-full w-[380px] h-[380px] absolute -left-64 -bottom-64 md:-left-52 lg:-bottom-56 lg:-left-32 -z-10"></div>
      </div>
      
    </section>
    <div className="relative w-8 mx-auto">
    <BlueArrow className="w-14 absolute -top-14" />
  </div>
  </>
  );
};

export default BannerAbout;
