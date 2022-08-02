import Image from "next/image";
import React from "react";
import Mountaineer from "@public/images/mountainScenary.webp";
import Svg1 from "@public/icons/kidOnLaptop.svg";
import Svg2 from "@public/icons/graduate.svg";
import Svg3 from "@public/icons/studying.svg";

const AboutEd = () => {
  const Array = [
    {
      id: 1,
      title: "Industry expert teachers",
      description:
        "Lorem ipsum is the word generator for the dummy text that can be used the stbb the data in any text file",
      svg: <Svg1 />,
    },
    {
      id: 2,
      title: "Up-to-date course content",
      description:
        "Lorem ipsum is the word generator for the dummy text that can be used the stbb the data in any text file",
      svg: <Svg2 />,
    },
    {
      id: 3,
      title: "Students community",
      description:
        "Lorem ipsum is the word generator for the dummy text that can be used the stbb the data in any text file",
      svg: <Svg3 />,
    },
  ];
  return (
    <>
      <section className="content-wrapper bg-fixed pt-36">
        <div className="content-container container mx-auto max-w-[1280px]">
          <div className="flex-col">
            <div className="text-center">
              <h2>About Education</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, deleniti.
              </p>
            </div>
            <div className="flex">
              <div className="relative h-[600px] w-[500px]">
                <Image
                  layout="fill"
                  src={Mountaineer}
                  className="aspect-image"
                />
              </div>
              <div className="flex">
                <div className="flex-col">
                  {Array.map((obj) => {
                    return (
                      <div className="flex items-start">
                        <div className="rounded-full">{obj.svg}</div>
                        <div>
                          <h3>{obj.title}</h3>
                          <p>{obj.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

AboutEd.displayName = "AboutEd";
export default AboutEd;
