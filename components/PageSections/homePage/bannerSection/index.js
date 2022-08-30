import React from "react";
import Image from "next/image";
import Link from "next/link";
const BannerSection = ({ data }) => {
  console.log("data from banner section", data);
  return (
    <>
      <section className="main flex items-center h-auto relative overflow-hidden py-16 lg:py-32">
        <div className="container flex flex-wrap items-center justify-center gap-16 max-w-7xl mx-auto px-4">
          <div className="text-content md:max-w-[535px] flex-1 flex flex-col justify-center text-center lg:text-left">
            <h1 className="font-semibold">{data.bannerDetails?.title}</h1>
            <p className="mb-14">{data.bannerDetails?.description}</p>
            <div className="flex flex-col md:flex-row justify-center lg:justify-start w-full gap-8">
              <Link href={`${data.explore?.link}`}>
                <button className="btn btn--primary">
                  {data.explore?.buttonText}
                </button>
              </Link>
              <button className="btn btn--secondary">LEARN MORE</button>
            </div>
          </div>
          <div className="relative basis-[500px] aspect-h-image h-auto rounded-3xl overflow-hidden skew-x-0 skew-y-0 scale-100 rotate-0 translate-x-1 translate-y-1 duration-1000 delay-1000 transition-all">
            <Image
              src={data.bannerImage.name}
              layout={"fill"}
              objectFit={"cover"}
              objectPosition={"center"}
            />
          </div>
        </div>
        <div className="bg-secondary2 rounded-full w-[500px] h-[500px] absolute -top-96 -left-96 lg:-top-52 lg:-left-52 -z-10"></div>
        <div className="bg-primary  w-full h-[300px] absolute top-3/4 -z-10 lg:top-0 lg:h-[100%] lg:w-5/12 lg:right-0"></div>
        <div className="bg-secondary3 rounded-full w-[500px] h-[500px] absolute -bottom-80 -right-72  lg:-bottom-80 lg:-right-20 -z-10"></div>
      </section>
    </>
  );
};

BannerSection.displayName = "BannerSection";
export default BannerSection;
