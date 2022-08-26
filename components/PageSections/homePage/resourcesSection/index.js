import Image from "next/image";
import React from "react";
import ResourcesImg1 from "@public/img/resourcesImg1.jpeg";

import Design from "@public/icons/design.svg";
import Blog from "@components/blogComponent";
import ResourcesSectionData from "./resourcesSectionData";
import Link from "next/link";

const ResourcesSection = () => {
  return (
    <section className="h-auto w-full">
      <div className="mx-auto lg:w-full px-6 py-20 max-w-7xl">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <h2>Resources & News</h2>
          <Link href={"/Courses"}>
            <a>
              <button className="btn btn--secondary btn--small">
                BROWSE BLOG
              </button>
            </a>
          </Link>
        </div>
        <div className="flex flex-col pt-10 lg:flex-row gap-6">
          <div className="card flex-1 relative">
            <Link href={"/Courses"}>
              <a>
                <figure className="!min-h-0">
                  <Image
                    className="rounded-t-2xl object-cover"
                    objectFit="cover"
                    objectPosition={"center"}
                    src={ResourcesImg1}
                    ait="img1"
                  />
                </figure>
              </a>
            </Link>
          </div>

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
            <Blog src={val.photo} description={val.description} />
          ))}
          {/* map ends here */}
        </div>
      </div>
    </section>
  );
};

ResourcesSection.displayName = "ResourcesSection";
export default ResourcesSection;
