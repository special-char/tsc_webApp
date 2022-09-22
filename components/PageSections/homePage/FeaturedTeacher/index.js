import React from "react";
import TSCImage from "@components/TSCImage";
import Link from "next/link";

const FeaturedTeacher = ({ data }) => {
  console.log("featuredTeacher data:", data);
  return (
    <section className="wrapper flex py-24  md:py-44 h-auto mb-24 lg:mb-0">
      <div className="flex w-full lg:max-w-7xl mx-auto  items-center justify-center flex-wrap px-4 gap-4 md:gap-12">
        <div className=" flex flex-col md:text-center md:mx-auto lg:text-left lg:flex-1 text-center justify-center">
          <h2>{data.heading?.title}</h2>
          <p>{data.heading?.description}</p>
          <div className="flex flex-col gap-8 mb-8 md:flex-row lg:flex-col justify-center lg:w-1/2 ">
            <Link href={data.becomeTeacher?.link}>
              <a>
                <button className="btn btn--primary btn--small w-full ">
                  {data.becomeTeacher?.buttonText}
                </button>
              </a>
            </Link>
            <Link href={data.browse?.link}>
              <a>
                <button className="btn btn--secondary btn--small w-full">
                  {data.browse?.buttonText}
                </button>
              </a>
            </Link>
          </div>
        </div>

        <div className="flex flex-1 relative h-auto ">
          <div className="aspect-h-image w-full relative ">
            <TSCImage
              className="avatar rounded-xl"
              layout="fill"
              objectFit="cover"
              src={data?.teacher?.image?.url}
            />
          </div>
          <div className="border-spacing-2 rounded-3xl absolute px-4 mb-4 md:px-10 -bottom-52 md:-bottom-36 lg:-bottom-[87px] bg-neutral-100 py-11 max-w-[95%] mx-auto left-0 right-0 drop-shadow-md">
            <h6 className="bg-secondary1 text-primary font-bold w-44 text-center rounded-full py-2 mb-2">
              Featured Teacher
            </h6>
            <h3 className="text-neutral-700 py-4">{data.heading?.title}</h3>
            <div className="">
              <h4 className="text-neutral-700">
                {data.teacher?.firstName} {data.teacher?.lastName}
              </h4>
              <p className="text-neutral-600 mb-0">
                Marketing Lead at Facebook
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTeacher;
