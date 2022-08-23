import React from "react";
import ArrowSvg from "@public/icons/arrow.svg";
const About = () => {
  return (
    <div className="w-screen h-auto bg-neutral-100 py-28 mb-10 relative md:py-14 lg:py-28">
      <div className="container w-full relative mx-auto max-w-[1210px] text-center px-3 md:px-32 md:my-10 lg:py-10 overflow-hidden">
        <div className="mb-20">
          <h1>The big mission behind Education</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            corrupti voluptatibus accusantium nisi maxime ratione natus eaque
            rem iste dignissimos.
          </p>
          <button className="btn btn--primary btn--small">Join our team</button>
        </div>
        <div className="bg-wrapper absolute">
          <div className="shape-1 bg-secondary3 w-[256px] h-[256px] -bottom-[160px] -left-[150px] md:-left-[220px] md:-bottom-[230px] md:w-[350px] md:h-[360px] lg:-left-[170px] lg:-bottom-[250px] lg:w-[320px] lg:h-[320px] absolute rounded-full"></div>
          <div className="shape-2 bg-secondary2 md:-top-[550px] md:-right-[800px] md:w-[250px] md:h-[200px] lg:-top-[700px] lg:-right-[990px] lg:w-[300px] lg:h-[300px] absolute rounded-full"></div>
        </div>
      </div>
      <div className="w-full flex bottom-10 lg:bottom-7 absolute justify-center">
        <ArrowSvg className="w-10 lg:w-14" />
      </div>
    </div>
  );
};

export default About;
