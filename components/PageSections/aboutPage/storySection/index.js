import Image from "next/image";
import React from "react";

const StorySection = ({ data }) => {
  console.log("Story section Data:", data);
  return (
    <section className="wrapper relative py-32">
      <div className="container max-w-7xl relative w-full mx-auto px-3">
        <div className="flex flex-col-reverse w-full h-full md:container lg:flex-row mx-auto lg:gap-12">
          {data.mission.map((val) => {
            console.log("story Array:", val);
            return (
              <div
                key={val.id}
                className="left-section py-5 flex flex-col-reverse md:w-4/5 w-full h-full mx-auto lg:flex-1 lg:flex-col lg:gap-28"
              >
                <div className="image-container w-full aspect-image min-h-[300px] md:min-h-[600px] lg:min-h-[400px] flex-1 relative">
                  <Image
                    objectFit="fill"
                    className="rounded-2xl"
                    objectPosition={"center"}
                    layout="fill"
                    src={val.image?.url}
                  />
                </div>
                <div className="text-container md:text-center lg:text-left">
                  <h2>{val.title}</h2>
                  <p>{val.description}</p>
                </div>
              </div>
            );
          })}
          {/* <div className="right-section py-5 flex md:w-4/5 w-full h-full mx-auto lg:flex-1 lg:flex-col lg:gap-28 ">
            <div className="text-content text-center md:w-4/5 lg:w-full mx-auto lg:text-left pt-10">
              <h2>The mission behind Education platform</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                viverra praesent felis consequat pellentesque turpis et quisque
                platea. Eu, elit ut nunc ac mauris bibendum nulla placerat.
                Sagittis sit eu sit massa sapien, risus diam. In lorem eu sed
                euismod laoreet urna, feugiat et. Euismod sem purus rutrum in.
                Tortor varius a bibendum nisl et tellus. Aliquet elit senectus
                iaculis netus gravida.
              </p>
            </div>
            <div className="image-container w-full min-h-[300px] md:min-h-[650px] lg:min-h-[550px]  flex-1 relative">
              <Image
                objectFit="fill"
                className="rounded-2xl"
                objectPosition={"center"}
                layout={"fill"}
                src={
                  "https://assets.website-files.com/607de2d8e8911e32707a3efe/60805c3c3415f8f033e0f7c7_image-2-about-story-education-x-template-p-800.jpeg"
                }
              />
            </div>
          </div> */}
        </div>
        <div className="bg-secondary2 rounded-full w-0 h-0 lg:w-[400px] lg:h-[400px] absolute lg:top-[30%] lg:right-[35%] -z-10"></div>
      </div>
    </section>
  );
};

export default StorySection;
