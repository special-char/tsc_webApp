import TSCImage from "@components/TSCImage";
import React from "react";
import Link from "next/link";

const AboutEducation = ({ data }) => {
  //console.log("AboutEducation Data: ", data);
  return (
    <section className="about-education-wrapper h-auto w-full  ">
      <div className="max-w-7xl mx-auto px-3 py-20 border-b border-neutral-400 ">
        <div className="text-center md:mb-14">
          <h2>{data.heading?.title}</h2>
          <p>{data.heading?.description}</p>
        </div>
        <div className="flex flex-col-reverse lg:flex-row md:w-4/5 lg:w-full mx-auto md:gap-16 lg:justify-center">
          <div className="flex flex-1 relative min-h-[300px] md:min-h-[600px]">
            <TSCImage
              className="aspect-image rounded-3xl "
              src={data.aboutImage?.url}
              layout="fill"
              alt="img"
            />
          </div>
          <div className="right-content flex flex-1  flex-col justify-center mx-auto md:gap-7 ">
            {data.educationList.map((val) => (
              <div
                className="flex flex-col items-center  md:items-start md:flex-row"
                key={val.id}
              >
                <div className="w-14 mb-4 md:w-24 md:mt-2 md:mr-8 lg:mt-2 lg:w-24 lg:mr-8 rounded-full relative min-h-[60px]">
                  <div>
                    <TSCImage
                      className="rounded-full"
                      layout="fill"
                      objectFit="contain"
                      src={val.image?.url}
                      alt="icons"
                      objectPosition={"center"}
                    />
                  </div>
                </div>
                <div className="text-center px-2 md:text-left lg:flex-col ">
                  <h3>{val.title}</h3>
                  <p>{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center pt-12">
          <Link href={data.aboutEducation?.link}>
            <button className="btn btn--secondary w-full md:w-[40%] lg:w-[25%] ">
              {data.aboutEducation?.buttonText}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

AboutEducation.displayname = "AboutEducation";
export default AboutEducation;
