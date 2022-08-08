import Image from "next/image";
import React from "react";
import ResourcesImg1 from "@public/img/resourcesImg1.jpeg";
import ResourcesSectionData from "./resourcesSectionData";
import Design from "@public/icons/design.svg";
// import ResourcesImg2 from "@public/img/resourcesImg2.jpeg";

const ResourcesSection = () => {
  return (
    <section className="h-screen w-screen">
      <div className="md:w-[80%] mx-auto lg:w-full px-6 py-20 max-w-[1210px]">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <h2>Resources & News</h2>
          <button className="btn btn--secondary btn--small">BROWSE BLOG</button>
        </div>
        <div className="flex flex-col pt-10 lg:flex-row gap-6">
          <div className="card flex-1 relative">
            <figure className="!min-h-0">
              <Image
                className="rounded-t-2xl object-cover"
                objectFit="cover"
                objectPosition={"center"}
                src={ResourcesImg1}
                ait="img1"
              />
            </figure>
            <div className="card-body">
              <div className="card-date">April 20, 2022</div>
              <h3>
                How to design a simple, yet unique and memorable brand identity
              </h3>
            </div>
            <div className="chip chip--white px-6 py-2 flex gap-1 items-center top-6 right-6 absolute">
              <Design className="w-4" />
              <span className="font-bold">Design</span>
            </div>
          </div>

          <div className="flex flex-col gap-5 mx-auto lg:flex-1">
            {/* map goes here */}
            {ResourcesSectionData.map((val) => (
              <div className="card-new w-full min-w-[270px] flex flex-col md:flex-row flex-1 ">
                <div className="image flex-1 w-full min-h-full xs:basis-[160px] md:basis-0 relative">
                  <Image
                    src={val.photo}
                    className="xs:rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                    objectFit="cover"
                    layout={"fill"}
                    objectPosition={"center"}
                    alt="img2"
                  />
                </div>
                <div className="content grow shrink basis-0 px-6 py-5">
                  <h4>{val.description}</h4>
                </div>
              </div>
            ))}
            {/* map ends here */}
          </div>
        </div>
      </div>
    </section>
  );
};

ResourcesSection.displayName = "ResourcesSection";
export default ResourcesSection;

{
  /* <div className="flex flex-col md:flex-row ">
                <div className="grow shrink basis-[160px] md:basis-0 relative">
                  <Image
                    src={val.photo}
                    className="xs:rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                    objectFit="cover"
                    layout={"fill"}
                    objectPosition={"center"}
                    alt="img2"
                  />
                </div>
                <div className="flex-1 px-5 py-5">
                  <h4>{val.description}</h4>
                </div>
              </div> */
}
