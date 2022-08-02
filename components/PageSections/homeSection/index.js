import React from "react";

const HomeSection = () => {
  return (
    <section className="h-auto w-full relative overflow-hidden pt-16 pb-16 ">
      <div className="max-w-[1210px] lg:mx-auto">
        <div className="flex flex-col md:container md:mx-auto lg:flex-row gap-3 px-4 md:px-6 ">
          <div className="flex flex-col lg:flex-col  justify-center">
            <div className="flex flex-col text-center md:w-4/5 md:mx-auto lg:w-full lg:text-left">
              <h1>Grow your skills,define your future</h1>
              <p>
                Presenting Academy, the tech school of the future. We teach you
                the right skills to be prepared for tomorrow.
              </p>
              <div className="flex flex-col pb-10 md:flex-row md:justify-center md:pb-10 lg:flex lg:justify-start gap-6 ">
                <button className="btn btn--primary btn--small">
                  EXPLORE COURSES
                </button>
                <button className="btn btn--secondary btn--small">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
          <div className="w-auto md:max-w-[80%] md:mx-auto lg:container lg:mx-auto">
            <img
              className="rounded-3xl md:rounded-3xl lg:rounded-3xl lg:aspect-image lg:h-[600px]"
              src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607e15d7c0c9f4037bde6f44_image-home-hero-education-x-template-p-800.jpeg"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="bg-secondary2 rounded-full w-[500px] h-[500px] absolute -top-96 -left-96 lg:-top-80 lg:-left-54 -z-10"></div>
        <div className="bg-primary  w-full h-[300px] absolute bottom-0  -z-10  md:h-[600px] lg:top-0 lg:h-[100%] lg:w-5/12 lg:right-0"></div>
        <div className="bg-secondary3 rounded-full w-[500px] h-[500px] absolute  -bottom-80 -right-72 lg:top-3/4 lg:bottom-0 lg:-right-52 -z-10"></div>
      </div>
    </section>
  );
};

HomeSection.displayName = "HomeSection";
export default HomeSection;

// lg:max-w-[99%] lg:mx-auto lg:text-left
