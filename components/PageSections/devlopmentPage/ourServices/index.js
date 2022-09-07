import Link from "next/link";
import React from "react";
import Yarrow from "@public/icons/yellowArrow.svg";
import Image from "next/image";

const OurServices = ({}) => {
  const data = [
    {
      id: 0,
      image:
        "https://assets.website-files.com/607de2d8e8911e32707a3efe/607f500fe9f6c983c68e88ef_image-1-courses-categories-education-x-template.svg",
      heading: "UI/UX Design",
      title:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor ",
    },
    {
      id: 1,
      heading: "Web App",
      image:
        "https://assets.website-files.com/607de2d8e8911e32707a3efe/607f5010ea8cee56aa78149a_image-2-courses-categories-education-x-template.svg",
      title:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor ",
    },
    {
      id: 2,
      heading: "Mobile App",
      image:
        "https://assets.website-files.com/607de2d8e8911e32707a3efe/607f500f9c98153a06b9d441_image-3-courses-categories-education-x-template.svg",
      title:
        "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor ",
    },
  ];

  return (
    <section className="main h-auto w-full">
      <div className="main-container container max-w-7xl mx-auto px-3 md:px-6 pt-16 pb-28 md:pt-28 md:pb-36 lg:pt-32 lg:pb-44">
        <center>
          <h2 className="md:mb-12"> Our Expepertise</h2>
        </center>
        <div className="flex flex-col gap-6 md:w-[552px] md:mx-auto lg:w-[90%] lg:flex-row lg:gap-6">
          {data.map((val) => (
            <div className="card flex-1" key={val.id}>
              <figure className="aspect-image relative min-h-[300px]">
                <Image
                  layout="fill"
                  className=""
                  objectFit="cover"
                  src={val.image}
                  alt=""
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{val.heading}</h3>
                <p>{val.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex justify-center">
        <Yarrow className="absolute w-12 md:w-16 -top-14 z-10" />
      </div>
    </section>
  );
};

OurServices.displayName = "OurServicesSection";
export default OurServices;
