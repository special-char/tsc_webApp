import React from "react";

const AboutEducationText = () => {
  return (
    <>
      <div className="w-full  flex-1">
        <div className="flex flex-col items-center justify-center">
          <h2 className=" mb-4 text-neutral-800 sm:text-4xl md:text-6xl ">
            About Education
          </h2>

          <p className="text-large items-center justify-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div className="flex">
          <div className="flex-1">
            <img
              src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607ee9511b8768627aa63e05_image-home-about-education-x-template.jpg"
              alt="About - Education X Webflow Template"
              class="image home-about"
            />
          </div>
          <div className=" flex-col justify-center flex-1 px-20">
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607eedf6d7623a851c7feabb_icon-1-home-about-education-x-template.svg"
                alt="Jobs Icon - Education X Webflow Template"
                className="image rounded-full"
              />
              <div className="flex flex-col gap-2">
                <h3 className=" text-neutral-700">Industry expert teachers</h3>
                <p className="text-large">
                  Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                  elit. Felis donec massa aliquam id dolor .
                </p>
              </div>
            </div>
            <div className="home">
              <img
                src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607eedf6fe6961a78b192f8d_icon-2-home-about-education-x-template.svg"
                alt="Sync Icon - Education X Webflow Template"
                className="image rounded-full"
              />
              <div className="">
                <h3 className="text-neutral-700">Up-to-date course content</h3>
                <p className="text-large">
                  Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                  elit. Felis donec massa aliquam id dolor .
                </p>
              </div>
            </div>
            <div className="home">
              <img
                src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607eedf6965e388154b41812_icon-3-home-about-education-x-template.svg"
                alt="Team Icon - Education X Webflow Template"
                className="image rounded-full"
              />
              <div className="">
                <h3 className="text-neutral-700">Students community</h3>
                <p className="text-large">
                  Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                  elit. Felis donec massa aliquam id dolor .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <button className="btn btn--secondary">ABOUT EDUCATION</button>
      </div>
    </>
  );
};
export default AboutEducationText;
