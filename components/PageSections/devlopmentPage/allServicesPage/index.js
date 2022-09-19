import React from "react";
import ProjectSvg from "/public/icons/project.svg";
import Image from "next/image";
import BlueArrow from "@public/icons/blueArrow.svg";

const AllServicesPage = ({ children, service, index }) => {
  return (
    <>
      <section className="w-full px-4 my-12 bg-neutral-200 overflow-hidden ">
        <div className="max-w-7xl mx-auto">
          <div
            className={`w-full flex mb-8  ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            } flex-wrap gap-4 items-center justify-center `}
          >
            <div className="w-full md:w-[45%] flex-1  items-center justify-center">
              <figure className="relative h-96 ">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={service.img}
                  alt=""
                />
              </figure>{" "}
            </div>
            <div className=" w-full md:w-[41.6%]  flex-col text-left ">
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllServicesPage;
